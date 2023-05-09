# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-Prediction/1.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [ImagePredictionAPI](docs/imagepredictionapi/README.md)

* [PredictImage](docs/imagepredictionapi/README.md#predictimage) - Predict an image and saves the result
* [PredictImageURLWithNoStoreForm](docs/imagepredictionapi/README.md#predictimageurlwithnostoreform) - Predict an image url without saving the result
* [PredictImageURLWithNoStoreJSON](docs/imagepredictionapi/README.md#predictimageurlwithnostorejson) - Predict an image url without saving the result
* [PredictImageURLWithNoStoreRaw](docs/imagepredictionapi/README.md#predictimageurlwithnostoreraw) - Predict an image url without saving the result
* [PredictImageURLForm](docs/imagepredictionapi/README.md#predictimageurlform) - Predict an image url and saves the result
* [PredictImageURLJSON](docs/imagepredictionapi/README.md#predictimageurljson) - Predict an image url and saves the result
* [PredictImageURLRaw](docs/imagepredictionapi/README.md#predictimageurlraw) - Predict an image url and saves the result
* [PredictImageWithNoStore](docs/imagepredictionapi/README.md#predictimagewithnostore) - Predict an image without saving the result
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
