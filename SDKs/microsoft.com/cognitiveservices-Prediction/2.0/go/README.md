# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-Prediction/2.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ImagePredictionAPI

* `PredictImage` - Predict an image and saves the result
* `PredictImageURLWithNoStoreForm` - Predict an image url without saving the result
* `PredictImageURLWithNoStoreJSON` - Predict an image url without saving the result
* `PredictImageURLWithNoStoreRaw` - Predict an image url without saving the result
* `PredictImageURLForm` - Predict an image url and saves the result
* `PredictImageURLJSON` - Predict an image url and saves the result
* `PredictImageURLRaw` - Predict an image url and saves the result
* `PredictImageWithNoStore` - Predict an image without saving the result
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
