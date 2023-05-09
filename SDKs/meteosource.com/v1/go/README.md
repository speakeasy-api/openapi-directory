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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LocationEndpoints.FindPlacesFindPlacesGet(ctx, operations.FindPlacesFindPlacesGetRequest{
        Key: sdk.String("corrupti"),
        Language: operations.FindPlacesFindPlacesGetLanguageLanguageEnumFr.ToPointer(),
        Text: "distinctio",
    }, operations.FindPlacesFindPlacesGetSecurity{
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


### [LocationEndpoints](docs/locationendpoints/README.md)

* [FindPlacesFindPlacesGet](docs/locationendpoints/README.md#findplacesfindplacesget) - Search for places. Complete words required.
* [FindPlacesPrefixFindPlacesPrefixGet](docs/locationendpoints/README.md#findplacesprefixfindplacesprefixget) - Prefix search for places. Useful for autocomplete forms.
* [NearestPlaceNearestPlaceGet](docs/locationendpoints/README.md#nearestplacenearestplaceget) - Returns the nearest named location for a given GPS coordinates.

### [PointWeather](docs/pointweather/README.md)

* [AirQualityAirQualityGet](docs/pointweather/README.md#airqualityairqualityget) - Returns air quality data for a single point (geographic name or GPS)
* [PointPointGet](docs/pointweather/README.md#pointpointget) - Returns weather data for a single point (geographic name or GPS)

### [TimeMachineHistoricalWeather](docs/timemachinehistoricalweather/README.md)

* [TimeMachineTimeMachineGet](docs/timemachinehistoricalweather/README.md#timemachinetimemachineget) - Returns weather data for a single location and given day in the past

### [WeatherMaps](docs/weathermaps/README.md)

* [MapMapGet](docs/weathermaps/README.md#mapmapget) - Returns PNG weather map for given area and variable
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
