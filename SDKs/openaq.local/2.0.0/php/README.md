# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->favicoFaviconIcoGet();

    if ($response->favicoFaviconIcoGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [favicoFaviconIcoGet](docs/sdk/README.md#favicofaviconicoget) - Favico
* [pongPingGet](docs/sdk/README.md#pongpingget) - Pong

### [v1](docs/v1/README.md)

* [citiesGetv1V1CitiesGet](docs/v1/README.md#citiesgetv1v1citiesget) - Provides a simple listing of cities within the platform
* [countriesGetV1CountriesCountryIdGet](docs/v1/README.md#countriesgetv1countriescountryidget) - Countries Get
* [countriesGetv1V1CountriesGet](docs/v1/README.md#countriesgetv1v1countriesget) - Countries Getv1
* [latestV1GetV1LatestLocationIdGet](docs/v1/README.md#latestv1getv1latestlocationidget) - Latest V1 Get
* [latestV1GetV1LatestGet](docs/v1/README.md#latestv1getv1latestget) - Latest V1 Get
* [locationsv1GetV1LocationsLocationIdGet](docs/v1/README.md#locationsv1getv1locationslocationidget) - Locationsv1 Get
* [locationsv1GetV1LocationsGet](docs/v1/README.md#locationsv1getv1locationsget) - Locationsv1 Get
* [measurementsGetV1V1MeasurementsGet](docs/v1/README.md#measurementsgetv1v1measurementsget) - Measurements Get V1
* [parametersGetv1V1ParametersGet](docs/v1/README.md#parametersgetv1v1parametersget) - Parameters Getv1
* [sourcesV1GetV1SourcesGet](docs/v1/README.md#sourcesv1getv1sourcesget) - Sources V1 Get

### [v2](docs/v2/README.md)

* [averagesV2GetV2AveragesGet](docs/v2/README.md#averagesv2getv2averagesget) - Averages V2 Get
* [citiesGetV2CitiesGet](docs/v2/README.md#citiesgetv2citiesget) - Provides a simple listing of cities within the platform
* [countriesGetV2CountriesCountryIdGet](docs/v2/README.md#countriesgetv2countriescountryidget) - Countries Get
* [countriesGetV2CountriesGet](docs/v2/README.md#countriesgetv2countriesget) - Countries Get
* [demoV2LocationsTilesViewerGet](docs/v2/README.md#demov2locationstilesviewerget) - Demo
* [getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet](docs/v2/README.md#getmobilegentilev2locationstilesmobilegeneralizedzxypbfget) - Get Mobilegentile
* [getMobiletileV2LocationsTilesMobileZXYPbfGet](docs/v2/README.md#getmobiletilev2locationstilesmobilezxypbfget) - Get Mobiletile
* [getTileV2LocationsTilesZXYPbfGet](docs/v2/README.md#gettilev2locationstileszxypbfget) - Get Tile
* [latestGetV2LatestLocationIdGet](docs/v2/README.md#latestgetv2latestlocationidget) - Latest Get
* [latestGetV2LatestGet](docs/v2/README.md#latestgetv2latestget) - Latest Get
* [locationsGetV2LocationsLocationIdGet](docs/v2/README.md#locationsgetv2locationslocationidget) - Locations Get
* [locationsGetV2LocationsGet](docs/v2/README.md#locationsgetv2locationsget) - Locations Get
* [measurementsGetV2MeasurementsGet](docs/v2/README.md#measurementsgetv2measurementsget) - Measurements Get
* [mfrGetV2ManufacturersGet](docs/v2/README.md#mfrgetv2manufacturersget) - Mfr Get
* [mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet](docs/v2/README.md#mobilegentilejsonv2locationstilesmobilegeneralizedtilesjsonget) - Mobilegentilejson
* [mobiletilejsonV2LocationsTilesMobileTilesJsonGet](docs/v2/README.md#mobiletilejsonv2locationstilesmobiletilesjsonget) - Mobiletilejson
* [modelGetV2ModelsGet](docs/v2/README.md#modelgetv2modelsget) - Model Get
* [parametersGetV2ParametersGet](docs/v2/README.md#parametersgetv2parametersget) - Parameters Get
* [projectsGetV2ProjectsProjectIdGet](docs/v2/README.md#projectsgetv2projectsprojectidget) - Projects Get
* [projectsGetV2ProjectsGet](docs/v2/README.md#projectsgetv2projectsget) - Projects Get
* [readmeGetV2SourcesReadmeSlugGet](docs/v2/README.md#readmegetv2sourcesreadmeslugget) - Readme Get
* [sourcesGetV2SourcesGet](docs/v2/README.md#sourcesgetv2sourcesget) - Sources Get
* [summaryGetV2SummaryGet](docs/v2/README.md#summarygetv2summaryget) - Summary Get
* [tilejsonV2LocationsTilesTilesJsonGet](docs/v2/README.md#tilejsonv2locationstilestilesjsonget) - Tilejson
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
