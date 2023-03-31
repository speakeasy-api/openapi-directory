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

import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetSecurity;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetLanguageLanguageEnum;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetQueryParams;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetRequest;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetResponse;
import org.openapis.openapi.models.shared.SchemeAPIKeyHeader;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindPlacesFindPlacesGetRequest req = new FindPlacesFindPlacesGetRequest() {{
                security = new FindPlacesFindPlacesGetSecurity() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new FindPlacesFindPlacesGetQueryParams() {{
                    key = "corrupti";
                    language = "fr";
                    text = "distinctio";
                }};
            }};            

            FindPlacesFindPlacesGetResponse res = sdk.locationEndpoints.findPlacesFindPlacesGet(req);

            if (res.findPlacesModels.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### locationEndpoints

* `findPlacesFindPlacesGet` - Search for places. Complete words required.
* `findPlacesPrefixFindPlacesPrefixGet` - Prefix search for places. Useful for autocomplete forms.
* `nearestPlaceNearestPlaceGet` - Returns the nearest named location for a given GPS coordinates.

### pointWeather

* `airQualityAirQualityGet` - Returns air quality data for a single point (geographic name or GPS)
* `pointPointGet` - Returns weather data for a single point (geographic name or GPS)

### timeMachineHistoricalWeather

* `timeMachineTimeMachineGet` - Returns weather data for a single location and given day in the past

### weatherMaps

* `mapMapGet` - Returns PNG weather map for given area and variable
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
