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

import(
	"context"
	"log"
	"openapi"
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

### [SDK](docs/sdk/README.md)

* [FavicoFaviconIcoGet](docs/sdk/README.md#favicofaviconicoget) - Favico
* [PongPingGet](docs/sdk/README.md#pongpingget) - Pong

### [V1](docs/v1/README.md)

* [CitiesGetv1V1CitiesGet](docs/v1/README.md#citiesgetv1v1citiesget) - Provides a simple listing of cities within the platform
* [CountriesGetV1CountriesCountryIDGet](docs/v1/README.md#countriesgetv1countriescountryidget) - Countries Get
* [CountriesGetv1V1CountriesGet](docs/v1/README.md#countriesgetv1v1countriesget) - Countries Getv1
* [LatestV1GetV1LatestLocationIDGet](docs/v1/README.md#latestv1getv1latestlocationidget) - Latest V1 Get
* [LatestV1GetV1LatestGet](docs/v1/README.md#latestv1getv1latestget) - Latest V1 Get
* [Locationsv1GetV1LocationsLocationIDGet](docs/v1/README.md#locationsv1getv1locationslocationidget) - Locationsv1 Get
* [Locationsv1GetV1LocationsGet](docs/v1/README.md#locationsv1getv1locationsget) - Locationsv1 Get
* [MeasurementsGetV1V1MeasurementsGet](docs/v1/README.md#measurementsgetv1v1measurementsget) - Measurements Get V1
* [ParametersGetv1V1ParametersGet](docs/v1/README.md#parametersgetv1v1parametersget) - Parameters Getv1
* [SourcesV1GetV1SourcesGet](docs/v1/README.md#sourcesv1getv1sourcesget) - Sources V1 Get

### [V2](docs/v2/README.md)

* [AveragesV2GetV2AveragesGet](docs/v2/README.md#averagesv2getv2averagesget) - Averages V2 Get
* [CitiesGetV2CitiesGet](docs/v2/README.md#citiesgetv2citiesget) - Provides a simple listing of cities within the platform
* [CountriesGetV2CountriesCountryIDGet](docs/v2/README.md#countriesgetv2countriescountryidget) - Countries Get
* [CountriesGetV2CountriesGet](docs/v2/README.md#countriesgetv2countriesget) - Countries Get
* [DemoV2LocationsTilesViewerGet](docs/v2/README.md#demov2locationstilesviewerget) - Demo
* [GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet](docs/v2/README.md#getmobilegentilev2locationstilesmobilegeneralizedzxypbfget) - Get Mobilegentile
* [GetMobiletileV2LocationsTilesMobileZXYPbfGet](docs/v2/README.md#getmobiletilev2locationstilesmobilezxypbfget) - Get Mobiletile
* [GetTileV2LocationsTilesZXYPbfGet](docs/v2/README.md#gettilev2locationstileszxypbfget) - Get Tile
* [LatestGetV2LatestLocationIDGet](docs/v2/README.md#latestgetv2latestlocationidget) - Latest Get
* [LatestGetV2LatestGet](docs/v2/README.md#latestgetv2latestget) - Latest Get
* [LocationsGetV2LocationsLocationIDGet](docs/v2/README.md#locationsgetv2locationslocationidget) - Locations Get
* [LocationsGetV2LocationsGet](docs/v2/README.md#locationsgetv2locationsget) - Locations Get
* [MeasurementsGetV2MeasurementsGet](docs/v2/README.md#measurementsgetv2measurementsget) - Measurements Get
* [MfrGetV2ManufacturersGet](docs/v2/README.md#mfrgetv2manufacturersget) - Mfr Get
* [MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJSONGet](docs/v2/README.md#mobilegentilejsonv2locationstilesmobilegeneralizedtilesjsonget) - Mobilegentilejson
* [MobiletilejsonV2LocationsTilesMobileTilesJSONGet](docs/v2/README.md#mobiletilejsonv2locationstilesmobiletilesjsonget) - Mobiletilejson
* [ModelGetV2ModelsGet](docs/v2/README.md#modelgetv2modelsget) - Model Get
* [ParametersGetV2ParametersGet](docs/v2/README.md#parametersgetv2parametersget) - Parameters Get
* [ProjectsGetV2ProjectsProjectIDGet](docs/v2/README.md#projectsgetv2projectsprojectidget) - Projects Get
* [ProjectsGetV2ProjectsGet](docs/v2/README.md#projectsgetv2projectsget) - Projects Get
* [ReadmeGetV2SourcesReadmeSlugGet](docs/v2/README.md#readmegetv2sourcesreadmeslugget) - Readme Get
* [SourcesGetV2SourcesGet](docs/v2/README.md#sourcesgetv2sourcesget) - Sources Get
* [SummaryGetV2SummaryGet](docs/v2/README.md#summarygetv2summaryget) - Summary Get
* [TilejsonV2LocationsTilesTilesJSONGet](docs/v2/README.md#tilejsonv2locationstilestilesjsonget) - Tilejson
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
