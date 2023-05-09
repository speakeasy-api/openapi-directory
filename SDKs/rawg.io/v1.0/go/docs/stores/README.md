# Stores

### Available Operations

* [StoresList](#storeslist) - Get a list of video game storefronts.
* [StoresRead](#storesread) - Get details of the store.

## StoresList

Get a list of video game storefronts.

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
    res, err := s.Stores.StoresList(ctx, operations.StoresListRequest{
        Ordering: sdk.String("illum"),
        Page: sdk.Int64(864934),
        PageSize: sdk.Int64(807319),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoresList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StoresRead

Get details of the store.

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
    res, err := s.Stores.StoresRead(ctx, operations.StoresReadRequest{
        ID: 411397,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreSingle != nil {
        // handle response
    }
}
```
