# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FavicoFaviconIcoGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FavicoFaviconIcoGetResponse res = sdk.favicoFaviconIcoGet();

            if (res.favicoFaviconIcoGet200ApplicationJSONAny.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `favicoFaviconIcoGet` - Favico
* `pongPingGet` - Pong

### v1

* `citiesGetv1V1CitiesGet` - Provides a simple listing of cities within the platform
* `countriesGetV1CountriesCountryIdGet` - Countries Get
* `countriesGetv1V1CountriesGet` - Countries Getv1
* `latestV1GetV1LatestLocationIdGet` - Latest V1 Get
* `latestV1GetV1LatestGet` - Latest V1 Get
* `locationsv1GetV1LocationsLocationIdGet` - Locationsv1 Get
* `locationsv1GetV1LocationsGet` - Locationsv1 Get
* `measurementsGetV1V1MeasurementsGet` - Measurements Get V1
* `parametersGetv1V1ParametersGet` - Parameters Getv1
* `sourcesV1GetV1SourcesGet` - Sources V1 Get

### v2

* `averagesV2GetV2AveragesGet` - Averages V2 Get
* `citiesGetV2CitiesGet` - Provides a simple listing of cities within the platform
* `countriesGetV2CountriesCountryIdGet` - Countries Get
* `countriesGetV2CountriesGet` - Countries Get
* `demoV2LocationsTilesViewerGet` - Demo
* `getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet` - Get Mobilegentile
* `getMobiletileV2LocationsTilesMobileZXYPbfGet` - Get Mobiletile
* `getTileV2LocationsTilesZXYPbfGet` - Get Tile
* `latestGetV2LatestLocationIdGet` - Latest Get
* `latestGetV2LatestGet` - Latest Get
* `locationsGetV2LocationsLocationIdGet` - Locations Get
* `locationsGetV2LocationsGet` - Locations Get
* `measurementsGetV2MeasurementsGet` - Measurements Get
* `mfrGetV2ManufacturersGet` - Mfr Get
* `mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet` - Mobilegentilejson
* `mobiletilejsonV2LocationsTilesMobileTilesJsonGet` - Mobiletilejson
* `modelGetV2ModelsGet` - Model Get
* `parametersGetV2ParametersGet` - Parameters Get
* `projectsGetV2ProjectsProjectIdGet` - Projects Get
* `projectsGetV2ProjectsGet` - Projects Get
* `readmeGetV2SourcesReadmeSlugGet` - Readme Get
* `sourcesGetV2SourcesGet` - Sources Get
* `summaryGetV2SummaryGet` - Summary Get
* `tilejsonV2LocationsTilesTilesJsonGet` - Tilejson
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
