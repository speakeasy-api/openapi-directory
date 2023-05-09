# SDK

## Overview

papinet API is a global initiative for the Forst and Paper supply chain.

### Available Operations

* [GetOrders](#getorders) - List `orders`
* [GetOrdersOrderID](#getordersorderid) - Get an `order`

## GetOrders

Gets a paginated list of all `orders`.

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
    res, err := s.SDK.GetOrders(ctx, operations.GetOrdersRequest{
        Limit: sdk.String("quibusdam"),
        Offset: sdk.String("unde"),
        OrderStatus: operations.GetOrdersOrderStatusEnumCompleted.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOfOrders != nil {
        // handle response
    }
}
```

## GetOrdersOrderID

Gets the details of a specific `order`, including a paginated list of all its lines.

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
    res, err := s.SDK.GetOrdersOrderID(ctx, operations.GetOrdersOrderIDRequest{
        OrderID: "8d69a674-e0f4-467c-8879-6ed151a05dfc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrder != nil {
        // handle response
    }
}
```
