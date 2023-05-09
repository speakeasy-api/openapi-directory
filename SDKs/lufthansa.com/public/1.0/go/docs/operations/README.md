# Operations

### Available Operations

* [OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet](#operationsflightstatusarrivalsbyairportcodeandfromdatetimeget) - Flight Status at Arrival Airport
* [OperationsFlightstatusByFlightNumberAndDateGet](#operationsflightstatusbyflightnumberanddateget) - Flight Status
* [OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet](#operationsflightstatusdeparturesbyairportcodeandfromdatetimeget) - Flight Status at Departure Airport
* [OperationsFlightstatusRouteDateByOriginAndDestinationGet](#operationsflightstatusroutedatebyoriginanddestinationget) - Flight Status by Route
* [OperationsSchedulesFromDateTimeByOriginAndDestinationGet](#operationsschedulesfromdatetimebyoriginanddestinationget) - Flight Schedules

## OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet

Status of all arrivals at a given airport up to 4 hours from the provided date time.

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
    res, err := s.Operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(ctx, operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest{
        Accept: "excepturi",
        AirportCode: "nisi",
        FromDateTime: "recusandae",
        Limit: sdk.String("temporibus"),
        Offset: sdk.String("ab"),
    }, operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OperationsFlightstatusByFlightNumberAndDateGet

Status of a particular flight (boarding, delayed, etc.).

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
    res, err := s.Operations.OperationsFlightstatusByFlightNumberAndDateGet(ctx, operations.OperationsFlightstatusByFlightNumberAndDateGetRequest{
        Accept: "quis",
        Date: "veritatis",
        FlightNumber: "deserunt",
        Limit: sdk.String("perferendis"),
        Offset: sdk.String("ipsam"),
    }, operations.OperationsFlightstatusByFlightNumberAndDateGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationsFlightstatusByFlightNumberAndDateGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet

Status of all departures from a given airport up to 4 hours from the provided date time.

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
    res, err := s.Operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(ctx, operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest{
        Accept: "repellendus",
        AirportCode: "sapiente",
        FromDateTime: "quo",
        Limit: sdk.String("odit"),
        Offset: sdk.String("at"),
    }, operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OperationsFlightstatusRouteDateByOriginAndDestinationGet

Status of flights between a given origin and destination on a given date.

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
    res, err := s.Operations.OperationsFlightstatusRouteDateByOriginAndDestinationGet(ctx, operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest{
        Accept: "at",
        Date: "maiores",
        Destination: "molestiae",
        Limit: sdk.String("quod"),
        Offset: sdk.String("quod"),
        Origin: "esse",
    }, operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OperationsSchedulesFromDateTimeByOriginAndDestinationGet

Scheduled flights between given airports on a given date.

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
    res, err := s.Operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGet(ctx, operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest{
        Accept: "totam",
        Destination: "porro",
        DirectFlights: sdk.Bool(false),
        FromDateTime: "dolorum",
        Limit: sdk.String("dicta"),
        Offset: sdk.String("nam"),
        Origin: "officia",
    }, operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```
