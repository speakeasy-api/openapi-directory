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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BackgroundRemoval.PostRemovebgForm(ctx, shared.RemoveBgJSON{
        AddShadow: sdk.Bool(false),
        BgColor: sdk.String("corrupti"),
        BgImageURL: sdk.String("provident"),
        Channels: shared.RemoveBgJSONChannelsEnumAlpha.ToPointer(),
        Crop: sdk.Bool(false),
        CropMargin: sdk.String("quibusdam"),
        Format: shared.RemoveBgJSONFormatEnumJpg.ToPointer(),
        ImageFileB64: sdk.String("nulla"),
        ImageURL: sdk.String("https://www.remove.bg/example-hd.jpg"),
        Position: sdk.String("corrupti"),
        Roi: sdk.String("illum"),
        Scale: sdk.String("vel"),
        Semitransparency: sdk.Bool(false),
        Size: shared.RemoveBgJSONSizeEnumFull.ToPointer(),
        Type: shared.RemoveBgJSONTypeEnumProduct.ToPointer(),
        TypeLevel: shared.RemoveBgJSONTypeLevelEnumOne.ToPointer(),
    })
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


### [BackgroundRemoval](docs/backgroundremoval/README.md)

* [PostRemovebgForm](docs/backgroundremoval/README.md#postremovebgform) - Remove the background of an image
* [PostRemovebgJSON](docs/backgroundremoval/README.md#postremovebgjson) - Remove the background of an image
* [PostRemovebgMultipart](docs/backgroundremoval/README.md#postremovebgmultipart) - Remove the background of an image

### [FetchAccountInfo](docs/fetchaccountinfo/README.md)

* [GetAccount](docs/fetchaccountinfo/README.md#getaccount) - Fetch credit balance and free API calls.

### [ImprovementProgram](docs/improvementprogram/README.md)

* [PostImproveForm](docs/improvementprogram/README.md#postimproveform) - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.

* [PostImproveJSON](docs/improvementprogram/README.md#postimprovejson) - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.

* [PostImproveMultipart](docs/improvementprogram/README.md#postimprovemultipart) - Submit an image to the remove.bg Improvement program
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
