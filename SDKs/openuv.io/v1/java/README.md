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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetForecastRequest;
import org.openapis.openapi.models.operations.GetForecastResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetForecastRequest req = new GetForecastRequest(78.67, 115.67, "corrupti") {{
                alt = 1050;
                dt = OffsetDateTime.parse("2018-02-04T04:39:06.467Z");
                ozone = 304.5;
            }};            

            GetForecastResponse res = sdk.getForecast(req);

            if (res.forecastResults != null) {
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

### [SDK](docs/sdk/README.md)

* [getForecast](docs/sdk/README.md#getforecast) - Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.
* [getProtection](docs/sdk/README.md#getprotection) - Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.
* [getUv](docs/sdk/README.md#getuv) - Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
