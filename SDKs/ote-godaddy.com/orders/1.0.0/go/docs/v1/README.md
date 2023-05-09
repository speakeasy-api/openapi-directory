# V1

### Available Operations

* [Get](#get) - Retrieve details for specified order
* [List](#list) - Retrieve a list of orders for the authenticated shopper. Only one filter may be used at a time

## Get

<strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>

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
    res, err := s.V1.Get(ctx, operations.GetRequest{
        XMarketID: sdk.String("quibusdam"),
        XShopperID: sdk.String("unde"),
        OrderID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## List

<strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>

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
    res, err := s.V1.List(ctx, operations.ListRequest{
        XMarketID: sdk.String("corrupti"),
        XShopperID: sdk.String("illum"),
        Domain: sdk.String("vel"),
        Limit: sdk.Int64(623564),
        Offset: sdk.Int64(645894),
        ParentOrderID: sdk.String("suscipit"),
        PaymentProfileID: sdk.Int64(437587),
        PeriodEnd: sdk.String("magnam"),
        PeriodStart: sdk.String("debitis"),
        ProductGroupID: sdk.Int64(56713),
        Sort: operations.ListSortEnumMinusPricingTotal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
