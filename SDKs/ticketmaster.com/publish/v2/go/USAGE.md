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
            ID: "non",
        },
        Headers: operations.PatchAttractionHeaders{
            TMPSCorrelationID: "ullam",
        },
        Request: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: "error",
                    Op: "copy",
                    Path: "doloremque",
                    Value: map[string]interface{}{
                        "non": "et",
                    },
                },
                shared.Change{
                    From: "sint",
                    Op: "replace",
                    Path: "repellat",
                    Value: map[string]interface{}{
                        "eos": "ut",
                        "culpa": "nostrum",
                        "error": "ratione",
                    },
                },
                shared.Change{
                    From: "aliquam",
                    Op: "test",
                    Path: "reprehenderit",
                    Value: map[string]interface{}{
                        "ut": "quisquam",
                        "voluptatem": "eaque",
                        "non": "sit",
                    },
                },
            },
            RelatedEntityID: "id",
            RelatedEntityType: "event",
            Score: 96.099998,
            Source: "totam",
            VersionNumber: 721356596753963764,
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