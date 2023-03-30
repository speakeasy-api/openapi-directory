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
        PathParams: operations.PatchAttractionPathParams{
            ID: "corrupti",
        },
        Headers: operations.PatchAttractionHeaders{
            TMPSCorrelationID: "provident",
        },
        Request: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: "quibusdam",
                    Op: "move",
                    Path: "nulla",
                    Value: map[string]interface{}{
                        "illum": "vel",
                        "error": "deserunt",
                        "suscipit": "iure",
                    },
                },
                shared.Change{
                    From: "magnam",
                    Op: "test",
                    Path: "ipsa",
                    Value: map[string]interface{}{
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                    },
                },
                shared.Change{
                    From: "nisi",
                    Op: "test",
                    Path: "temporibus",
                    Value: map[string]interface{}{
                        "quis": "veritatis",
                    },
                },
            },
            RelatedEntityID: "deserunt",
            RelatedEntityType: "event",
            Score: 3682.41,
            Source: "repellendus",
            VersionNumber: 957156,
        },
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