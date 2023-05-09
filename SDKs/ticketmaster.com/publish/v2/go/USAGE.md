<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatchAttraction(ctx, operations.PatchAttractionRequest{
        AugmentationData: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: sdk.String("provident"),
                    Op: shared.ChangeOpEnumCopy,
                    Path: "quibusdam",
                    Value: map[string]interface{}{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                },
                shared.Change{
                    From: sdk.String("suscipit"),
                    Op: shared.ChangeOpEnumReplace,
                    Path: "magnam",
                    Value: map[string]interface{}{
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                },
                shared.Change{
                    From: sdk.String("iusto"),
                    Op: shared.ChangeOpEnumMove,
                    Path: "nisi",
                    Value: map[string]interface{}{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                },
            },
            RelatedEntityID: "sapiente",
            RelatedEntityType: shared.AugmentationDataRelatedEntityTypeEnumVenue,
            Score: sdk.Float32(1403.5),
            Source: "at",
            VersionNumber: 870088,
        },
        TMPSCorrelationID: "maiores",
        ID: "7cc78ca1-ba92-48fc-8167-42cb73920592",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->