# Routes

### Available Operations

* [RoutesOneOrMoreRoutes](#routesoneormoreroutes) - View route names and numbers for all routes
* [RoutesRouteFromID](#routesroutefromid) - View route name and number for specific route ID

## RoutesOneOrMoreRoutes

View route names and numbers for all routes

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
    res, err := s.Routes.RoutesOneOrMoreRoutes(ctx, operations.RoutesOneOrMoreRoutesRequest{
        Devid: sdk.String("error"),
        RouteName: sdk.String("temporibus"),
        RouteTypes: []RoutesOneOrMoreRoutesRouteTypesEnum{
            operations.RoutesOneOrMoreRoutesRouteTypesEnumZero,
            operations.RoutesOneOrMoreRoutesRouteTypesEnumFour,
            operations.RoutesOneOrMoreRoutesRouteTypesEnumFour,
        },
        Signature: sdk.String("vero"),
        Token: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3RouteResponse != nil {
        // handle response
    }
}
```

## RoutesRouteFromID

View route name and number for specific route ID

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
    res, err := s.Routes.RoutesRouteFromID(ctx, operations.RoutesRouteFromIDRequest{
        Devid: sdk.String("praesentium"),
        GeopathUtc: types.MustTimeFromString("2022-10-31T23:49:03.388Z"),
        IncludeGeopath: sdk.Bool(false),
        RouteID: 604846,
        Signature: sdk.String("voluptate"),
        Token: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3RouteResponse != nil {
        // handle response
    }
}
```
