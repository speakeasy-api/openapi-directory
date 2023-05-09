# Weather

## Overview

#### Hourly forecast values for the following flight-impacting weather elements:
* Cloud Ceiling (CIG)
* Dewpoint Temperature (DEWPT)
* Cloud Cover (SKY)
* Air Temperature (TEMP)
* Visibility (VIS)
* Wind Direction (WINDDIR)
* Wind Speed (WINDSPEED)
* Wind Gust Speed (WINDGUST)

### Available Operations

* [WxByDistanceUsV1WxForecastDistanceQueryPost](#wxbydistanceusv1wxforecastdistancequerypost) - Retrieve forecast values within given distance of location for all requested weather elements and time periods.
* [WxByPolyUsV1WxForecastPolygonQueryPost](#wxbypolyusv1wxforecastpolygonquerypost) - Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
* [WxByRouteUsV1WxForecastRouteQueryPost](#wxbyrouteusv1wxforecastroutequerypost) - Retrieve forecast values along a route for all requested weather elements and time periods.

## WxByDistanceUsV1WxForecastDistanceQueryPost

Retrieve forecast values for selected weather elements and time period. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)
* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.


The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
* CIG: meters AGL
* DEWPT: degrees Celsius
* SKY: % cloud cover
* TEMP: degrees Celsius
* VIS: meters
* WINDDIR: degrees true
* WINDGUST: meters/sec
* WINDSPEED: meters/sec

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Weather.WxByDistanceUsV1WxForecastDistanceQueryPost(ctx, operations.WxByDistanceUsV1WxForecastDistanceQueryPostRequest{
        WxByDistance: shared.WxByDistance{
            Distance: 93940,
            Hours: 921158,
            Latitude: 83112,
            Longitude: 277718,
            Wxtypes: []string{
                "consequatur",
                "est",
            },
        },
        XAPIKey: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WxDistanceResponse != nil {
        // handle response
    }
}
```

## WxByPolyUsV1WxForecastPolygonQueryPost

Retrieve forecast values located within given area for requested weather elements and time period. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.


The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
* CIG: meters AGL
* DEWPT: degrees Celsius
* SKY: % cloud cover
* TEMP: degrees Celsius
* VIS: meters
* WINDDIR: degrees true
* WINDGUST: meters/sec
* WINDSPEED: meters/sec

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Weather.WxByPolyUsV1WxForecastPolygonQueryPost(ctx, operations.WxByPolyUsV1WxForecastPolygonQueryPostRequest{
        WxByPolygon: shared.WxByPolygon{
            Hours: 131797,
            Poly: map[string]interface{}{
                "distinctio": "quibusdam",
                "labore": "modi",
                "qui": "aliquid",
            },
            Wxtypes: []string{
                "quos",
                "perferendis",
                "magni",
            },
        },
        XAPIKey: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WxPolyResponse != nil {
        // handle response
    }
}
```

## WxByRouteUsV1WxForecastRouteQueryPost

Retrieve forecast values along route for requested weather elements and time period. Request body parameters are:
* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.


The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
* CIG: meters AGL
* DEWPT: degrees Celsius
* SKY: % cloud cover
* TEMP: degrees Celsius
* VIS: meters
* WINDDIR: degrees true
* WINDGUST: meters/sec
* WINDSPEED: meters/sec

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Weather.WxByRouteUsV1WxForecastRouteQueryPost(ctx, operations.WxByRouteUsV1WxForecastRouteQueryPostRequest{
        WxByRoute: shared.WxByRoute{
            Hours: 369808,
            Route: map[string]interface{}{
                "fugit": "dolorum",
            },
            Wxtypes: []string{
                "tempora",
                "facilis",
                "tempore",
            },
        },
        XAPIKey: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WxRouteResponse != nil {
        // handle response
    }
}
```
