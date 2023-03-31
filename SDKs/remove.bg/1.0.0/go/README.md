# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/remove.bg/1.0.0/go
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
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    req := shared.RemoveBgJSON{
        AddShadow: false,
        BgColor: "corrupti",
        BgImageURL: "provident",
        Channels: "alpha",
        Crop: false,
        CropMargin: "quibusdam",
        Format: "jpg",
        ImageFileB64: "nulla",
        ImageURL: "https://www.remove.bg/example-hd.jpg",
        Position: "corrupti",
        Roi: "illum",
        Scale: "vel",
        Semitransparency: false,
        Size: "full",
        Type: "product",
        TypeLevel: "1",
    }

    ctx := context.Background()
    res, err := s.BackgroundRemoval.PostRemovebgForm(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveBgJSONResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### BackgroundRemoval

* `PostRemovebgForm` - Remove the background of an image
* `PostRemovebgJSON` - Remove the background of an image
* `PostRemovebgMultipart` - Remove the background of an image

### FetchAccountInfo

* `GetAccount` - Fetch credit balance and free API calls.

### ImprovementProgram

* `PostImproveForm` - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.

* `PostImproveJSON` - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.

* `PostImproveMultipart` - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
