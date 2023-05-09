<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.PredictImage(ctx, operations.PredictImageRequest{
        PredictionKey: "corrupti",
        RequestBody: operations.PredictImageRequestBody{
            ImageData: operations.PredictImageRequestBodyImageData{
                Content: []byte("provident"),
                ImageData: "distinctio",
            },
        },
        Application: sdk.String("quibusdam"),
        IterationID: sdk.String("9d8d69a6-74e0-4f46-bcc8-796ed151a05d"),
        ProjectID: "fc2ddf7c-c78c-4a1b-a928-fc816742cb73",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResultModel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->