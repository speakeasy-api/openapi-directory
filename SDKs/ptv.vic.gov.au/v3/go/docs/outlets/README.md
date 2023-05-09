# Outlets

### Available Operations

* [OutletsGetAllOutlets](#outletsgetalloutlets) - List all ticket outlets
* [OutletsGetOutletsByGeolocation](#outletsgetoutletsbygeolocation) - List ticket outlets near a specific location

## OutletsGetAllOutlets

List all ticket outlets

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
    res, err := s.Outlets.OutletsGetAllOutlets(ctx, operations.OutletsGetAllOutletsRequest{
        Devid: sdk.String("culpa"),
        MaxResults: sdk.Int(161309),
        Signature: sdk.String("repellat"),
        Token: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3OutletResponse != nil {
        // handle response
    }
}
```

## OutletsGetOutletsByGeolocation

List ticket outlets near a specific location

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
    res, err := s.Outlets.OutletsGetOutletsByGeolocation(ctx, operations.OutletsGetOutletsByGeolocationRequest{
        Devid: sdk.String("occaecati"),
        Latitude: 2532.91,
        Longitude: 4143.69,
        MaxDistance: sdk.Float64(4663.11),
        MaxResults: sdk.Int(474697),
        Signature: sdk.String("velit"),
        Token: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3OutletGeolocationResponse != nil {
        // handle response
    }
}
```
