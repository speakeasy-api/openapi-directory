# ServicePoints

### Available Operations

* [ServicePointsGetByID](#servicepointsgetbyid) - Get Service Point By ID
* [ServicePointsList](#servicepointslist) - List Service Points

## ServicePointsGetByID

Returns a carrier service point by using the service_point_id

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ServicePoints.ServicePointsGetByID(ctx, operations.ServicePointsGetByIDRequest{
        CarrierCode: "magnam",
        CountryCode: "PL",
        ServicePointID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServicePointByIDResponseBody != nil {
        // handle response
    }
}
```

## ServicePointsList

List carrier service points by location

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ServicePoints.ServicePointsList(ctx, shared.GetServicePointsRequest{})
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicePointsResponseBody != nil {
        // handle response
    }
}
```
