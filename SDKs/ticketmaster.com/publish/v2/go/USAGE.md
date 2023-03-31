<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PatchAttractionRequest{
        AugmentationData: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: "provident",
                    Op: "copy",
                    Path: "quibusdam",
                    Value: map[string]interface{}{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                },
                shared.Change{
                    From: "suscipit",
                    Op: "replace",
                    Path: "magnam",
                    Value: map[string]interface{}{
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                },
                shared.Change{
                    From: "iusto",
                    Op: "move",
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
            RelatedEntityType: "venue",
            Score: 1403.5,
            Source: "at",
            VersionNumber: 870088,
        },
        TMPSCorrelationID: "maiores",
        ID: "molestiae",
    }

    ctx := context.Background()
    res, err := s.PatchAttraction(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->