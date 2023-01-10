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
            ProjectID: "incidunt",
        },
        QueryParams: operations.PredictImageQueryParams{
            Application: "sed",
            IterationID: "nesciunt",
        },
        Headers: operations.PredictImageHeaders{
            PredictionKey: "tenetur",
        },
        Request: operations.PredictImageRequestBody{
            ImageData: operations.PredictImageRequestBodyImageData{
                Content: []byte("placeat"),
                ImageData: "voluptatibus",
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