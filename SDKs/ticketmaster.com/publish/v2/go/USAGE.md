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
            ID: "sit",
        },
        Headers: operations.PatchAttractionHeaders{
            TMPSCorrelationID: "voluptas",
        },
        Request: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: "expedita",
                    Op: "test",
                    Path: "dolor",
                    Value: map[string]interface{}{
                        "voluptas": "fugit",
                        "et": "nihil",
                    },
                },
                shared.Change{
                    From: "rerum",
                    Op: "test",
                    Path: "debitis",
                    Value: map[string]interface{}{
                        "et": "ut",
                    },
                },
            },
            RelatedEntityID: "dolorem",
            RelatedEntityType: "attraction",
            Score: 94.199997,
            Source: "vitae",
            VersionNumber: 4706154865122290029,
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