# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/meteosource.com/v1/go
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

    req := operations.FindPlacesFindPlacesGetRequest{
        Key: "corrupti",
        Language: "fr",
        Text: "distinctio",
    }

    ctx := context.Background()
    res, err := s.LocationEndpoints.FindPlacesFindPlacesGet(ctx, req, operations.FindPlacesFindPlacesGetSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindPlacesModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### LocationEndpoints

* `FindPlacesFindPlacesGet` - Search for places. Complete words required.
* `FindPlacesPrefixFindPlacesPrefixGet` - Prefix search for places. Useful for autocomplete forms.
* `NearestPlaceNearestPlaceGet` - Returns the nearest named location for a given GPS coordinates.

### PointWeather

* `AirQualityAirQualityGet` - Returns air quality data for a single point (geographic name or GPS)
* `PointPointGet` - Returns weather data for a single point (geographic name or GPS)

### TimeMachineHistoricalWeather

* `TimeMachineTimeMachineGet` - Returns weather data for a single location and given day in the past

### WeatherMaps

* `MapMapGet` - Returns PNG weather map for given area and variable
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
