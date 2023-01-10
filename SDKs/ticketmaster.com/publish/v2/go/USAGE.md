<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.PatchAttractionRequest{
        PathParams: operations.PatchAttractionPathParams{
            ID: "laudantium",
        },
        Headers: operations.PatchAttractionHeaders{
            TMPSCorrelationID: "est",
        },
        Request: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: "blanditiis",
                    Op: "add",
                    Path: "totam",
                    Value: map[string]interface{}{
                        "velit": "quo",
                        "est": "et",
                    },
                },
                shared.Change{
                    From: "asperiores",
                    Op: "remove",
                    Path: "fuga",
                    Value: map[string]interface{}{
                        "blanditiis": "est",
                    },
                },
                shared.Change{
                    From: "natus",
                    Op: "test",
                    Path: "quos",
                    Value: map[string]interface{}{
                        "labore": "quasi",
                    },
                },
            },
            RelatedEntityID: "voluptatum",
            RelatedEntityType: "event",
            Score: 72.099998,
            Source: "animi",
            VersionNumber: 7633959003780935022,
        },
    }
    
    res, err := s.PatchAttraction(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->