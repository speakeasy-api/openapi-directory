# Directions

### Available Operations

* [DirectionsForDirection](#directionsfordirection) - View all routes for a direction of travel
* [DirectionsForDirectionAndType](#directionsfordirectionandtype) - View all routes of a particular type for a direction of travel
* [DirectionsForRoute](#directionsforroute) - View directions that a route travels in

## DirectionsForDirection

View all routes for a direction of travel

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
    res, err := s.Directions.DirectionsForDirection(ctx, operations.DirectionsForDirectionRequest{
        Devid: sdk.String("occaecati"),
        DirectionID: 143353,
        Signature: sdk.String("deleniti"),
        Token: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DirectionsResponse != nil {
        // handle response
    }
}
```

## DirectionsForDirectionAndType

View all routes of a particular type for a direction of travel

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
    res, err := s.Directions.DirectionsForDirectionAndType(ctx, operations.DirectionsForDirectionAndTypeRequest{
        Devid: sdk.String("optio"),
        DirectionID: 521848,
        RouteType: operations.DirectionsForDirectionAndTypeRouteTypeEnumZero,
        Signature: sdk.String("commodi"),
        Token: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DirectionsResponse != nil {
        // handle response
    }
}
```

## DirectionsForRoute

View directions that a route travels in

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
    res, err := s.Directions.DirectionsForRoute(ctx, operations.DirectionsForRouteRequest{
        Devid: sdk.String("modi"),
        RouteID: 186332,
        Signature: sdk.String("impedit"),
        Token: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DirectionsResponse != nil {
        // handle response
    }
}
```
