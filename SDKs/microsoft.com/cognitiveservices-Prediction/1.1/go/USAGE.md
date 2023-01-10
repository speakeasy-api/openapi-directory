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
            ProjectID: "dolor",
        },
        QueryParams: operations.PredictImageQueryParams{
            Application: "ea",
            IterationID: "excepturi",
        },
        Headers: operations.PredictImageHeaders{
            PredictionKey: "aliquid",
        },
        Request: operations.PredictImageRequestBody{
            ImageData: operations.PredictImageRequestBodyImageData{
                Content: []byte("ad"),
                ImageData: "alias",
            },
        },
    }
    
    res, err := s.ImagePredictionAPI.PredictImage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResultModel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->