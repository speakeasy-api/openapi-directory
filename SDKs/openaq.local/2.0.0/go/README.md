# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openaq.local/2.0.0/go
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

    ctx := context.Background()
    res, err := s.FavicoFaviconIcoGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.FavicoFaviconIcoGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `FavicoFaviconIcoGet` - Favico
* `PongPingGet` - Pong

### V1

* `CitiesGetv1V1CitiesGet` - Provides a simple listing of cities within the platform
* `CountriesGetV1CountriesCountryIDGet` - Countries Get
* `CountriesGetv1V1CountriesGet` - Countries Getv1
* `LatestV1GetV1LatestLocationIDGet` - Latest V1 Get
* `LatestV1GetV1LatestGet` - Latest V1 Get
* `Locationsv1GetV1LocationsLocationIDGet` - Locationsv1 Get
* `Locationsv1GetV1LocationsGet` - Locationsv1 Get
* `MeasurementsGetV1V1MeasurementsGet` - Measurements Get V1
* `ParametersGetv1V1ParametersGet` - Parameters Getv1
* `SourcesV1GetV1SourcesGet` - Sources V1 Get

### V2

* `AveragesV2GetV2AveragesGet` - Averages V2 Get
* `CitiesGetV2CitiesGet` - Provides a simple listing of cities within the platform
* `CountriesGetV2CountriesCountryIDGet` - Countries Get
* `CountriesGetV2CountriesGet` - Countries Get
* `DemoV2LocationsTilesViewerGet` - Demo
* `GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet` - Get Mobilegentile
* `GetMobiletileV2LocationsTilesMobileZXYPbfGet` - Get Mobiletile
* `GetTileV2LocationsTilesZXYPbfGet` - Get Tile
* `LatestGetV2LatestLocationIDGet` - Latest Get
* `LatestGetV2LatestGet` - Latest Get
* `LocationsGetV2LocationsLocationIDGet` - Locations Get
* `LocationsGetV2LocationsGet` - Locations Get
* `MeasurementsGetV2MeasurementsGet` - Measurements Get
* `MfrGetV2ManufacturersGet` - Mfr Get
* `MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJSONGet` - Mobilegentilejson
* `MobiletilejsonV2LocationsTilesMobileTilesJSONGet` - Mobiletilejson
* `ModelGetV2ModelsGet` - Model Get
* `ParametersGetV2ParametersGet` - Parameters Get
* `ProjectsGetV2ProjectsProjectIDGet` - Projects Get
* `ProjectsGetV2ProjectsGet` - Projects Get
* `ReadmeGetV2SourcesReadmeSlugGet` - Readme Get
* `SourcesGetV2SourcesGet` - Sources Get
* `SummaryGetV2SummaryGet` - Summary Get
* `TilejsonV2LocationsTilesTilesJSONGet` - Tilejson
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
