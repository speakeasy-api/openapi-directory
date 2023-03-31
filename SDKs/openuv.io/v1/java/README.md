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

import org.openapis.openapi.models.operations.GetForecastQueryParams;
import org.openapis.openapi.models.operations.GetForecastHeaders;
import org.openapis.openapi.models.operations.GetForecastRequest;
import org.openapis.openapi.models.operations.GetForecastResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetForecastRequest req = new GetForecastRequest() {{
                queryParams = new GetForecastQueryParams() {{
                    alt = 1050;
                    dt = "2018-02-04T04:39:06.467Z";
                    lat = 78.67;
                    lng = 115.67;
                    ozone = 304.5;
                }};
                headers = new GetForecastHeaders() {{
                    xAccessToken = "corrupti";
                }};
            }};            

            GetForecastResponse res = sdk.getForecast(req);

            if (res.forecastResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getForecast` - Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.
* `getProtection` - Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.
* `getUv` - Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
