# Fulfillments

### Available Operations

* [GetFulfillmentsJSON](#getfulfillmentsjson) - Retrieve all Fulfillments.
* [GetFulfillmentsCountJSON](#getfulfillmentscountjson) - Count all Fulfillments.
* [GetFulfillmentsIDJSON](#getfulfillmentsidjson) - Retrieve a single Fulfillment.
* [GetOrderIDFulfillmentsJSON](#getorderidfulfillmentsjson) - Retrieve the Fulfillments associated with the Order.

## GetFulfillmentsJSON

Retrieve all Fulfillments.

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
    res, err := s.Fulfillments.GetFulfillmentsJSON(ctx, operations.GetFulfillmentsJSONRequest{
        Authtoken: "dolorum",
        Limit: sdk.Int64(536579),
        Login: "omnis",
        Page: sdk.Int64(896672),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Fulfillments != nil {
        // handle response
    }
}
```

## GetFulfillmentsCountJSON

Count all Fulfillments.

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
    res, err := s.Fulfillments.GetFulfillmentsCountJSON(ctx, operations.GetFulfillmentsCountJSONRequest{
        Authtoken: "distinctio",
        Login: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetFulfillmentsIDJSON

Retrieve a single Fulfillment.

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
    res, err := s.Fulfillments.GetFulfillmentsIDJSON(ctx, operations.GetFulfillmentsIDJSONRequest{
        Authtoken: "nihil",
        ID: 216897,
        Login: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Fulfillment != nil {
        // handle response
    }
}
```

## GetOrderIDFulfillmentsJSON

Retrieve the Fulfillments associated with the Order.

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
    res, err := s.Fulfillments.GetOrderIDFulfillmentsJSON(ctx, operations.GetOrderIDFulfillmentsJSONRequest{
        Authtoken: "id",
        ID: 906418,
        Login: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Fulfillments != nil {
        // handle response
    }
}
```
