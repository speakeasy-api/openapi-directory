# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/pressassociation.io/2.0/go
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
    res, err := s.Asset.GetAsset(ctx, operations.GetAssetRequest{
        Aliases: sdk.Bool(false),
        AssetID: "corrupti",
    }, operations.GetAssetSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAsset200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Asset](docs/asset/README.md)

* [GetAsset](docs/asset/README.md#getasset) - Asset Detail
* [GetAssetContributors](docs/asset/README.md#getassetcontributors) - Asset Contributors
* [ListAssets](docs/asset/README.md#listassets) - Asset Collection

### [Catalogue](docs/catalogue/README.md)

* [GetCatalogue](docs/catalogue/README.md#getcatalogue) - Catalogue Detail
* [GetCatalogueAsset](docs/catalogue/README.md#getcatalogueasset) - Catalogue Asset Collection
* [GetCatalogueAssetDetail](docs/catalogue/README.md#getcatalogueassetdetail) - Catalogue Asset Detail
* [ListCatalogues](docs/catalogue/README.md#listcatalogues) - Catalogue Collection

### [Channel](docs/channel/README.md)

* [GetChannel](docs/channel/README.md#getchannel) - Channel Detail
* [ListChannels](docs/channel/README.md#listchannels) - Channel Collection

### [Contributor](docs/contributor/README.md)

* [GetContributor](docs/contributor/README.md#getcontributor) - Contributor Detail
* [ListContributor](docs/contributor/README.md#listcontributor) - Contributor Collection

### [Feature](docs/feature/README.md)

* [GetFeature](docs/feature/README.md#getfeature) - Feature Detail
* [ListFeatureTypes](docs/feature/README.md#listfeaturetypes) - Feature Type Collection
* [ListFeatures](docs/feature/README.md#listfeatures) - Feature Collection

### [Platform](docs/platform/README.md)

* [GetPlatform](docs/platform/README.md#getplatform) - Platform Detail
* [ListPlatformRegions](docs/platform/README.md#listplatformregions) - Platform Region Collection
* [ListPlatforms](docs/platform/README.md#listplatforms) - Platform Collection

### [Schedule](docs/schedule/README.md)

* [ListSchedule](docs/schedule/README.md#listschedule) - Schedule Collection
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
