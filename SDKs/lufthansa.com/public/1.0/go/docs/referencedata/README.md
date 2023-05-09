# ReferenceData

### Available Operations

* [ReferencesAircraftByAircraftCodeGet](#referencesaircraftbyaircraftcodeget) - Aircraft
* [ReferencesAirlinesByAirlineCodeGet](#referencesairlinesbyairlinecodeget) - Airlines
* [ReferencesAirportsByAirportCodeGet](#referencesairportsbyairportcodeget) - Airports
* [ReferencesAirportsNearestByLatitudeAndLongitudeGet](#referencesairportsnearestbylatitudeandlongitudeget) - Nearest Airports
* [ReferencesCitiesByCityCodeGet](#referencescitiesbycitycodeget) - Cities
* [ReferencesCountriesByCountryCodeGet](#referencescountriesbycountrycodeget) - Countries

## ReferencesAircraftByAircraftCodeGet

List all aircraft types or one specific aircraft type.

### Example Usage

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
    res, err := s.ReferenceData.ReferencesAircraftByAircraftCodeGet(ctx, operations.ReferencesAircraftByAircraftCodeGetRequest{
        Accept: "occaecati",
        AircraftCode: "fugit",
        Limit: sdk.String("deleniti"),
        Offset: sdk.String("hic"),
    }, operations.ReferencesAircraftByAircraftCodeGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReferencesAircraftByAircraftCodeGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReferencesAirlinesByAirlineCodeGet

List all airlines or one specific airline.

### Example Usage

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
    res, err := s.ReferenceData.ReferencesAirlinesByAirlineCodeGet(ctx, operations.ReferencesAirlinesByAirlineCodeGetRequest{
        Accept: "optio",
        AirlineCode: "totam",
        Limit: sdk.String("beatae"),
        Offset: sdk.String("commodi"),
    }, operations.ReferencesAirlinesByAirlineCodeGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReferencesAirlinesByAirlineCodeGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReferencesAirportsByAirportCodeGet

List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.

### Example Usage

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
    res, err := s.ReferenceData.ReferencesAirportsByAirportCodeGet(ctx, operations.ReferencesAirportsByAirportCodeGetRequest{
        Accept: "molestiae",
        LHoperated: sdk.Bool(false),
        AirportCode: "modi",
        Lang: sdk.String("qui"),
        Limit: sdk.String("impedit"),
        Offset: sdk.String("cum"),
    }, operations.ReferencesAirportsByAirportCodeGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AirportResponse != nil {
        // handle response
    }
}
```

## ReferencesAirportsNearestByLatitudeAndLongitudeGet

List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.

### Example Usage

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
    res, err := s.ReferenceData.ReferencesAirportsNearestByLatitudeAndLongitudeGet(ctx, operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest{
        Accept: "esse",
        Lang: sdk.String("ipsum"),
        Latitude: 568434,
        Longitude: 135218,
    }, operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReferencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReferencesCitiesByCityCodeGet

List all cities or one specific city. It is possible to request the response in a specific language.

### Example Usage

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
    res, err := s.ReferenceData.ReferencesCitiesByCityCodeGet(ctx, operations.ReferencesCitiesByCityCodeGetRequest{
        Accept: "perferendis",
        CityCode: "ad",
        Lang: sdk.String("natus"),
        Limit: sdk.String("sed"),
        Offset: sdk.String("iste"),
    }, operations.ReferencesCitiesByCityCodeGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReferencesCitiesByCityCodeGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReferencesCountriesByCountryCodeGet

List all countries or one specific country. It is possible to request the response in a specific language.

### Example Usage

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
    res, err := s.ReferenceData.ReferencesCountriesByCountryCodeGet(ctx, operations.ReferencesCountriesByCountryCodeGetRequest{
        Accept: "dolor",
        CountryCode: "MU",
        Lang: sdk.String("laboriosam"),
        Limit: sdk.String("hic"),
        Offset: sdk.String("saepe"),
    }, operations.ReferencesCountriesByCountryCodeGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReferencesCountriesByCountryCodeGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```
