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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.ClassifyImageRequest{
        RequestBody: operations.ClassifyImageRequestBody{
            ImageData: operations.ClassifyImageRequestBodyImageData{
                Content: []byte("corrupti"),
                ImageData: "provident",
            },
        },
        Application: "distinctio",
        ProjectID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
        PublishedName: "repellendus",
    }

    ctx := context.Background()
    res, err := s.ImagePredictionAPI.ClassifyImage(ctx, req)
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

* `ClassifyImage` - Classify an image and saves the result.
* `ClassifyImageURLWithNoStoreForm` - Classify an image url without saving the result.
* `ClassifyImageURLWithNoStoreJSON` - Classify an image url without saving the result.
* `ClassifyImageURLWithNoStoreRaw` - Classify an image url without saving the result.
* `ClassifyImageURLForm` - Classify an image url and saves the result.
* `ClassifyImageURLJSON` - Classify an image url and saves the result.
* `ClassifyImageURLRaw` - Classify an image url and saves the result.
* `ClassifyImageWithNoStore` - Classify an image without saving the result.
* `DetectImage` - Detect objects in an image and saves the result.
* `DetectImageURLWithNoStoreForm` - Detect objects in an image url without saving the result.
* `DetectImageURLWithNoStoreJSON` - Detect objects in an image url without saving the result.
* `DetectImageURLWithNoStoreRaw` - Detect objects in an image url without saving the result.
* `DetectImageURLForm` - Detect objects in an image url and saves the result.
* `DetectImageURLJSON` - Detect objects in an image url and saves the result.
* `DetectImageURLRaw` - Detect objects in an image url and saves the result.
* `DetectImageWithNoStore` - Detect objects in an image without saving the result.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
