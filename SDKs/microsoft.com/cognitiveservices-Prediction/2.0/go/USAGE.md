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
    
    req := operations.PredictImageRequest{
        PathParams: operations.PredictImagePathParams{
            ProjectID: "ut",
        },
        QueryParams: operations.PredictImageQueryParams{
            Application: "et",
            IterationID: "consequuntur",
        },
        Headers: operations.PredictImageHeaders{
            PredictionKey: "qui",
        },
        Request: operations.PredictImageRequestBody{
            ImageData: operations.PredictImageRequestBodyImageData{
                Content: []byte("dolorum"),
                ImageData: "adipisci",
            },
        },
    }
    
    res, err := s.ImagePredictionAPI.PredictImage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->