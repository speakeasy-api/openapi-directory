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
        PredictionKey: "corrupti",
        RequestBody: operations.PredictImageRequestBody{
            ImageData: operations.PredictImageRequestBodyImageData{
                Content: []byte("provident"),
                ImageData: "distinctio",
            },
        },
        Application: "quibusdam",
        IterationID: "9d8d69a6-74e0-4f46-bcc8-796ed151a05d",
        ProjectID: "fc2ddf7c-c78c-4a1b-a928-fc816742cb73",
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