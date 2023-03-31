# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/oceandrivers.com/1.0/go
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

    req := operations.CompareStationRequest{
        StationName: "corrupti",
    }

    ctx := context.Background()
    res, err := s.ODWeather.CompareStation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ODWeather

* `CompareStation` - Get forecast and realtime information for known points<br/>None
* `GetAemetStation` - Get data from the aemet stations<br/>None
* `GetEasywind` - Get data from the easywind weather stations<br/>None
* `GetEventStations` - Get stations in an event<br/>None
* `GetForecastPoints` - Get forecast points of a yatchclub<br/>None
* `GetForecastTimeSeries` - Get timeseries forecast information<br/>None
* `GetForecastTimeSeriesWrf` - Get timeseries forecast information<br/>None
* `GetSocibWeatherStation` - Get data from the socib bahia de palma buoy<br/>None
* `GetWeatherDisplay` - Get data from the weather display software<br/>None
* `GetWebCams` - Get forecast and realtime information for known points<br/>None
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
