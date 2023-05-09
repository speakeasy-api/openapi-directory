# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/versionhistory/v1/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Platforms.VersionhistoryPlatformsChannelsList(ctx, operations.VersionhistoryPlatformsChannelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PageSize: sdk.Int64(847252),
        PageToken: sdk.String("vel"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Platforms](docs/platforms/README.md)

* [VersionhistoryPlatformsChannelsList](docs/platforms/README.md#versionhistoryplatformschannelslist) - Returns list of channels that are available for a given platform.
* [VersionhistoryPlatformsChannelsVersionsList](docs/platforms/README.md#versionhistoryplatformschannelsversionslist) - Returns list of version for the given platform/channel.
* [VersionhistoryPlatformsChannelsVersionsReleasesList](docs/platforms/README.md#versionhistoryplatformschannelsversionsreleaseslist) - Returns list of releases of the given version.
* [VersionhistoryPlatformsList](docs/platforms/README.md#versionhistoryplatformslist) - Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
