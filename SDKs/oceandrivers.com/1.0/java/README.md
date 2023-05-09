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
import org.openapis.openapi.models.operations.CompareStationRequest;
import org.openapis.openapi.models.operations.CompareStationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompareStationRequest req = new CompareStationRequest("corrupti");            

            CompareStationResponse res = sdk.odWeather.compareStation(req);

            if (res.statusCode == 200) {
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


### [odWeather](docs/odweather/README.md)

* [compareStation](docs/odweather/README.md#comparestation) - Get forecast and realtime information for known points<br/>None
* [getAemetStation](docs/odweather/README.md#getaemetstation) - Get data from the aemet stations<br/>None
* [getEasywind](docs/odweather/README.md#geteasywind) - Get data from the easywind weather stations<br/>None
* [getEventStations](docs/odweather/README.md#geteventstations) - Get stations in an event<br/>None
* [getForecastPoints](docs/odweather/README.md#getforecastpoints) - Get forecast points of a yatchclub<br/>None
* [getForecastTimeSeries](docs/odweather/README.md#getforecasttimeseries) - Get timeseries forecast information<br/>None
* [getForecastTimeSeriesWrf](docs/odweather/README.md#getforecasttimeserieswrf) - Get timeseries forecast information<br/>None
* [getSocibWeatherStation](docs/odweather/README.md#getsocibweatherstation) - Get data from the socib bahia de palma buoy<br/>None
* [getWeatherDisplay](docs/odweather/README.md#getweatherdisplay) - Get data from the weather display software<br/>None
* [getWebCams](docs/odweather/README.md#getwebcams) - Get forecast and realtime information for known points<br/>None
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
