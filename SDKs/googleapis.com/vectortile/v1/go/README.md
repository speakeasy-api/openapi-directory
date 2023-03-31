# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/vectortile/v1/go
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

    req := operations.VectortileTerraintilesGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        AltitudePrecisionCentimeters: 844266,
        Callback: "unde",
        ClientInfoAPIClient: "nulla",
        ClientInfoApplicationID: "corrupti",
        ClientInfoApplicationVersion: "illum",
        ClientInfoDeviceModel: "vel",
        ClientInfoOperatingSystem: "error",
        ClientInfoPlatform: "ANDROID",
        ClientInfoUserID: "suscipit",
        EnableModeledVolumes: false,
        EnablePoliticalFeatures: false,
        EnablePrivateRoads: false,
        EnableUnclippedBuildings: false,
        Fields: "iure",
        Key: "magnam",
        LanguageCode: "debitis",
        MaxElevationResolutionCells: 56713,
        MinElevationResolutionCells: 963663,
        Name: "tempora",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        RegionCode: "minus",
        TerrainFormats: []VectortileTerraintilesGetTerrainFormatsEnum{
            "FIRST_DERIVATIVE",
            "FIRST_DERIVATIVE",
            "FIRST_DERIVATIVE",
            "FIRST_DERIVATIVE",
        },
        UploadType: "recusandae",
        UploadProtocol: "temporibus",
    }

    ctx := context.Background()
    res, err := s.Terraintiles.VectortileTerraintilesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TerrainTile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Terraintiles

* `VectortileTerraintilesGet` - Gets a terrain tile by its tile resource name.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
