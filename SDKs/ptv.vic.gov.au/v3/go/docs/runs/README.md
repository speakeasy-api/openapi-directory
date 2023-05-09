# Runs

### Available Operations

* [RunsForRoute](#runsforroute) - View all trip/service runs for a specific route ID
* [RunsForRouteAndRouteType](#runsforrouteandroutetype) - View all trip/service runs for a specific route ID and route type
* [RunsForRun](#runsforrun) - View all trip/service runs for a specific run_ref
* [RunsForRunAndRouteType](#runsforrunandroutetype) - View the trip/service run for a specific run_ref and route type

## RunsForRoute

View all trip/service runs for a specific route ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Runs.RunsForRoute(ctx, operations.RunsForRouteRequest{
        DateUtc: types.MustTimeFromString("2022-12-17T16:42:52.927Z"),
        Devid: sdk.String("reprehenderit"),
        Expand: []RunsForRouteExpandEnum{
            operations.RunsForRouteExpandEnumNone,
            operations.RunsForRouteExpandEnumAll,
        },
        RouteID: 359444,
        Signature: sdk.String("dolore"),
        Token: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3RunsResponse != nil {
        // handle response
    }
}
```

## RunsForRouteAndRouteType

View all trip/service runs for a specific route ID and route type

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Runs.RunsForRouteAndRouteType(ctx, operations.RunsForRouteAndRouteTypeRequest{
        DateUtc: types.MustTimeFromString("2022-04-24T15:19:40.519Z"),
        Devid: sdk.String("enim"),
        Expand: []RunsForRouteAndRouteTypeExpandEnum{
            operations.RunsForRouteAndRouteTypeExpandEnumVehicleDescriptor,
            operations.RunsForRouteAndRouteTypeExpandEnumNone,
            operations.RunsForRouteAndRouteTypeExpandEnumAll,
            operations.RunsForRouteAndRouteTypeExpandEnumAll,
        },
        RouteID: 692472,
        RouteType: operations.RunsForRouteAndRouteTypeRouteTypeEnumTwo,
        Signature: sdk.String("excepturi"),
        Token: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3RunsResponse != nil {
        // handle response
    }
}
```

## RunsForRun

View all trip/service runs for a specific run_ref

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Runs.RunsForRun(ctx, operations.RunsForRunRequest{
        DateUtc: types.MustTimeFromString("2022-06-29T05:25:54.356Z"),
        Devid: sdk.String("rem"),
        Expand: []RunsForRunExpandEnum{
            operations.RunsForRunExpandEnumAll,
            operations.RunsForRunExpandEnumNone,
            operations.RunsForRunExpandEnumVehiclePosition,
            operations.RunsForRunExpandEnumAll,
        },
        IncludeGeopath: sdk.Bool(false),
        RunRef: "itaque",
        Signature: sdk.String("incidunt"),
        Token: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3RunsResponse != nil {
        // handle response
    }
}
```

## RunsForRunAndRouteType

View the trip/service run for a specific run_ref and route type

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Runs.RunsForRunAndRouteType(ctx, operations.RunsForRunAndRouteTypeRequest{
        DateUtc: types.MustTimeFromString("2022-05-02T09:29:06.042Z"),
        Devid: sdk.String("quibusdam"),
        Expand: []RunsForRunAndRouteTypeExpandEnum{
            operations.RunsForRunAndRouteTypeExpandEnumVehiclePosition,
        },
        IncludeGeopath: sdk.Bool(false),
        RouteType: operations.RunsForRunAndRouteTypeRouteTypeEnumThree,
        RunRef: "quibusdam",
        Signature: sdk.String("labore"),
        Token: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3RunResponse != nil {
        // handle response
    }
}
```
