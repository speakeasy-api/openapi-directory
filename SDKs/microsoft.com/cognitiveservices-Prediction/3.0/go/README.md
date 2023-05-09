# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-Prediction/3.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImage(ctx, operations.ClassifyImageRequest{
        RequestBody: operations.ClassifyImageRequestBody{
            ImageData: operations.ClassifyImageRequestBodyImageData{
                Content: []byte("corrupti"),
                ImageData: "provident",
            },
        },
        Application: sdk.String("distinctio"),
        ProjectID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
        PublishedName: "repellendus",
    })
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


### [ImagePredictionAPI](docs/imagepredictionapi/README.md)

* [ClassifyImage](docs/imagepredictionapi/README.md#classifyimage) - Classify an image and saves the result.
* [ClassifyImageURLWithNoStoreForm](docs/imagepredictionapi/README.md#classifyimageurlwithnostoreform) - Classify an image url without saving the result.
* [ClassifyImageURLWithNoStoreJSON](docs/imagepredictionapi/README.md#classifyimageurlwithnostorejson) - Classify an image url without saving the result.
* [ClassifyImageURLWithNoStoreRaw](docs/imagepredictionapi/README.md#classifyimageurlwithnostoreraw) - Classify an image url without saving the result.
* [ClassifyImageURLForm](docs/imagepredictionapi/README.md#classifyimageurlform) - Classify an image url and saves the result.
* [ClassifyImageURLJSON](docs/imagepredictionapi/README.md#classifyimageurljson) - Classify an image url and saves the result.
* [ClassifyImageURLRaw](docs/imagepredictionapi/README.md#classifyimageurlraw) - Classify an image url and saves the result.
* [ClassifyImageWithNoStore](docs/imagepredictionapi/README.md#classifyimagewithnostore) - Classify an image without saving the result.
* [DetectImage](docs/imagepredictionapi/README.md#detectimage) - Detect objects in an image and saves the result.
* [DetectImageURLWithNoStoreForm](docs/imagepredictionapi/README.md#detectimageurlwithnostoreform) - Detect objects in an image url without saving the result.
* [DetectImageURLWithNoStoreJSON](docs/imagepredictionapi/README.md#detectimageurlwithnostorejson) - Detect objects in an image url without saving the result.
* [DetectImageURLWithNoStoreRaw](docs/imagepredictionapi/README.md#detectimageurlwithnostoreraw) - Detect objects in an image url without saving the result.
* [DetectImageURLForm](docs/imagepredictionapi/README.md#detectimageurlform) - Detect objects in an image url and saves the result.
* [DetectImageURLJSON](docs/imagepredictionapi/README.md#detectimageurljson) - Detect objects in an image url and saves the result.
* [DetectImageURLRaw](docs/imagepredictionapi/README.md#detectimageurlraw) - Detect objects in an image url and saves the result.
* [DetectImageWithNoStore](docs/imagepredictionapi/README.md#detectimagewithnostore) - Detect objects in an image without saving the result.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
