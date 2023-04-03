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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### odWeather

* `compareStation` - Get forecast and realtime information for known points<br/>None
* `getAemetStation` - Get data from the aemet stations<br/>None
* `getEasywind` - Get data from the easywind weather stations<br/>None
* `getEventStations` - Get stations in an event<br/>None
* `getForecastPoints` - Get forecast points of a yatchclub<br/>None
* `getForecastTimeSeries` - Get timeseries forecast information<br/>None
* `getForecastTimeSeriesWrf` - Get timeseries forecast information<br/>None
* `getSocibWeatherStation` - Get data from the socib bahia de palma buoy<br/>None
* `getWeatherDisplay` - Get data from the weather display software<br/>None
* `getWebCams` - Get forecast and realtime information for known points<br/>None
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
