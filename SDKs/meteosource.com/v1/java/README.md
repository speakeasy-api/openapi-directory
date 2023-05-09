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
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetLanguageLanguageEnum;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetRequest;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetResponse;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindPlacesFindPlacesGetRequest req = new FindPlacesFindPlacesGetRequest("corrupti") {{
                key = "provident";
                language = FindPlacesFindPlacesGetLanguageLanguageEnum.PL;
            }};            

            FindPlacesFindPlacesGetResponse res = sdk.locationEndpoints.findPlacesFindPlacesGet(req, new FindPlacesFindPlacesGetSecurity("quibusdam") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.findPlacesModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [locationEndpoints](docs/locationendpoints/README.md)

* [findPlacesFindPlacesGet](docs/locationendpoints/README.md#findplacesfindplacesget) - Search for places. Complete words required.
* [findPlacesPrefixFindPlacesPrefixGet](docs/locationendpoints/README.md#findplacesprefixfindplacesprefixget) - Prefix search for places. Useful for autocomplete forms.
* [nearestPlaceNearestPlaceGet](docs/locationendpoints/README.md#nearestplacenearestplaceget) - Returns the nearest named location for a given GPS coordinates.

### [pointWeather](docs/pointweather/README.md)

* [airQualityAirQualityGet](docs/pointweather/README.md#airqualityairqualityget) - Returns air quality data for a single point (geographic name or GPS)
* [pointPointGet](docs/pointweather/README.md#pointpointget) - Returns weather data for a single point (geographic name or GPS)

### [timeMachineHistoricalWeather](docs/timemachinehistoricalweather/README.md)

* [timeMachineTimeMachineGet](docs/timemachinehistoricalweather/README.md#timemachinetimemachineget) - Returns weather data for a single location and given day in the past

### [weatherMaps](docs/weathermaps/README.md)

* [mapMapGet](docs/weathermaps/README.md#mapmapget) - Returns PNG weather map for given area and variable
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
