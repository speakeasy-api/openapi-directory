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
            ID: "unde",
        },
        Headers: operations.PatchAttractionHeaders{
            TMPSCorrelationID: "deserunt",
        },
        Request: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: "nulla",
                    Op: "move",
                    Path: "vero",
                    Value: map[string]interface{}{
                        "nulla": "nihil",
                        "fuga": "facilis",
                        "eum": "iusto",
                    },
                },
                shared.Change{
                    From: "ullam",
                    Op: "test",
                    Path: "inventore",
                    Value: map[string]interface{}{
                        "enim": "eum",
                        "voluptatum": "autem",
                        "vel": "non",
                        "deleniti": "similique",
                    },
                },
                shared.Change{
                    From: "reprehenderit",
                    Op: "test",
                    Path: "quo",
                    Value: map[string]interface{}{
                        "laboriosam": "dicta",
                    },
                },
            },
            RelatedEntityID: "est",
            RelatedEntityType: "event",
            Score: 3682.41,
            Source: "fugiat",
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