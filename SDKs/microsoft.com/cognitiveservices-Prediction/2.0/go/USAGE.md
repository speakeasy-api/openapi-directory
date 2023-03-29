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

    req := operations.PredictImageRequest{
        PathParams: operations.PredictImagePathParams{
            ProjectID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        },
        QueryParams: operations.PredictImageQueryParams{
            Application: "est",
            IterationID: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
        },
        Headers: operations.PredictImageHeaders{
            PredictionKey: "id",
        },
        Request: operations.PredictImageRequestBody{
            ImageData: operations.PredictImageRequestBodyImageData{
                Content: []byte("blanditiis"),
                ImageData: "numquam",
            },
        },
    }

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.PredictImage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->