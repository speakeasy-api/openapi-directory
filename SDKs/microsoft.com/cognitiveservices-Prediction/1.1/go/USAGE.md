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
            ProjectID: "sit",
        },
        QueryParams: operations.PredictImageQueryParams{
            Application: "voluptas",
            IterationID: "culpa",
        },
        Headers: operations.PredictImageHeaders{
            PredictionKey: "expedita",
        },
        Request: operations.PredictImageRequestBody{
            ImageData: operations.PredictImageRequestBodyImageData{
                Content: []byte("consequuntur"),
                ImageData: "dolor",
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