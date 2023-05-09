# RouteTypes

### Available Operations

* [RouteTypesGetRouteTypes](#routetypesgetroutetypes) - View all route types and their names

## RouteTypesGetRouteTypes

View all route types and their names

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
    res, err := s.RouteTypes.RouteTypesGetRouteTypes(ctx, operations.RouteTypesGetRouteTypesRequest{
        Devid: sdk.String("possimus"),
        Signature: sdk.String("aut"),
        Token: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3RouteTypesResponse != nil {
        // handle response
    }
}
```
