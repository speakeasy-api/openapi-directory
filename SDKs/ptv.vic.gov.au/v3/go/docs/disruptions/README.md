# Disruptions

### Available Operations

* [DisruptionsGetAllDisruptions](#disruptionsgetalldisruptions) - View all disruptions for all route types
* [DisruptionsGetDisruptionByID](#disruptionsgetdisruptionbyid) - View a specific disruption
* [DisruptionsGetDisruptionModes](#disruptionsgetdisruptionmodes) - Get all disruption modes
* [DisruptionsGetDisruptionsByRoute](#disruptionsgetdisruptionsbyroute) - View all disruptions for a particular route
* [DisruptionsGetDisruptionsByRouteAndStop](#disruptionsgetdisruptionsbyrouteandstop) - View all disruptions for a particular route and stop
* [DisruptionsGetDisruptionsByStop](#disruptionsgetdisruptionsbystop) - View all disruptions for a particular stop

## DisruptionsGetAllDisruptions

View all disruptions for all route types

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
    res, err := s.Disruptions.DisruptionsGetAllDisruptions(ctx, operations.DisruptionsGetAllDisruptionsRequest{
        Devid: sdk.String("esse"),
        DisruptionModes: []DisruptionsGetAllDisruptionsDisruptionModesEnum{
            operations.DisruptionsGetAllDisruptionsDisruptionModesEnumNine,
        },
        DisruptionStatus: operations.DisruptionsGetAllDisruptionsDisruptionStatusEnumCurrent.ToPointer(),
        RouteTypes: []DisruptionsGetAllDisruptionsRouteTypesEnum{
            operations.DisruptionsGetAllDisruptionsRouteTypesEnumOne,
        },
        Signature: sdk.String("natus"),
        Token: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DisruptionsResponse != nil {
        // handle response
    }
}
```

## DisruptionsGetDisruptionByID

View a specific disruption

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
    res, err := s.Disruptions.DisruptionsGetDisruptionByID(ctx, operations.DisruptionsGetDisruptionByIDRequest{
        Devid: sdk.String("iste"),
        DisruptionID: 222321,
        Signature: sdk.String("natus"),
        Token: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DisruptionResponse != nil {
        // handle response
    }
}
```

## DisruptionsGetDisruptionModes

Get all disruption modes

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
    res, err := s.Disruptions.DisruptionsGetDisruptionModes(ctx, operations.DisruptionsGetDisruptionModesRequest{
        Devid: sdk.String("hic"),
        Signature: sdk.String("saepe"),
        Token: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DisruptionModesResponse != nil {
        // handle response
    }
}
```

## DisruptionsGetDisruptionsByRoute

View all disruptions for a particular route

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
    res, err := s.Disruptions.DisruptionsGetDisruptionsByRoute(ctx, operations.DisruptionsGetDisruptionsByRouteRequest{
        Devid: sdk.String("in"),
        DisruptionStatus: operations.DisruptionsGetDisruptionsByRouteDisruptionStatusEnumCurrent.ToPointer(),
        RouteID: 613064,
        Signature: sdk.String("iure"),
        Token: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DisruptionsResponse != nil {
        // handle response
    }
}
```

## DisruptionsGetDisruptionsByRouteAndStop

View all disruptions for a particular route and stop

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
    res, err := s.Disruptions.DisruptionsGetDisruptionsByRouteAndStop(ctx, operations.DisruptionsGetDisruptionsByRouteAndStopRequest{
        Devid: sdk.String("quidem"),
        DisruptionStatus: operations.DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnumCurrent.ToPointer(),
        RouteID: 60225,
        Signature: sdk.String("reiciendis"),
        StopID: 666767,
        Token: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DisruptionsResponse != nil {
        // handle response
    }
}
```

## DisruptionsGetDisruptionsByStop

View all disruptions for a particular stop

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
    res, err := s.Disruptions.DisruptionsGetDisruptionsByStop(ctx, operations.DisruptionsGetDisruptionsByStopRequest{
        Devid: sdk.String("laborum"),
        DisruptionStatus: operations.DisruptionsGetDisruptionsByStopDisruptionStatusEnumCurrent.ToPointer(),
        Signature: sdk.String("dolorem"),
        StopID: 358152,
        Token: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DisruptionsResponse != nil {
        // handle response
    }
}
```
