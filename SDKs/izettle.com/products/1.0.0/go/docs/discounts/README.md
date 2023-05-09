# Discounts

### Available Operations

* [CreateDiscount](#creatediscount) - Create a discount
* [DeleteDiscount](#deletediscount) - Delete a single discount 
* [GetAllDiscounts](#getalldiscounts) - Retrieve all discounts
* [GetDiscount](#getdiscount) - Retrieve a single discount
* [UpdateDiscount](#updatediscount) - Update a single discount

## CreateDiscount

Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Discounts.CreateDiscount(ctx, operations.CreateDiscountRequest{
        DiscountRequest: &shared.DiscountRequest{
            Amount: &shared.Price{
                Amount: 586784,
                CurrencyID: shared.PriceCurrencyIDEnumTjs,
            },
            Description: sdk.String("pariatur"),
            ExternalReference: sdk.String("soluta"),
            ImageLookupKeys: []string{
                "laborum",
            },
            Name: sdk.String("Randall Cole"),
            Percentage: sdk.Float64(7044.74),
            UUID: "679d2322-715b-4f0c-bb1e-31b8b90f3443",
        },
        OrganizationUUID: "a1108e0a-dcf4-4b92-9879-fce953f73ef7",
    }, operations.CreateDiscountSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDiscount

Delete a single discount 

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
    res, err := s.Discounts.DeleteDiscount(ctx, operations.DeleteDiscountRequest{
        DiscountUUID: "fbc7abd7-4dd3-49c0-b5d2-cff7c70a4562",
        OrganizationUUID: "6d436813-f16d-49f5-bce6-c556146c3e25",
    }, operations.DeleteDiscountSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllDiscounts

Retrieve all discounts

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
    res, err := s.Discounts.GetAllDiscounts(ctx, operations.GetAllDiscountsRequest{
        OrganizationUUID: "0fb008c4-2e14-41aa-8366-c8dd6b144290",
    }, operations.GetAllDiscountsSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscountResponses != nil {
        // handle response
    }
}
```

## GetDiscount

Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.

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
    res, err := s.Discounts.GetDiscount(ctx, operations.GetDiscountRequest{
        IfNoneMatch: sdk.String("molestiae"),
        DiscountUUID: "474778a7-bd46-46d2-8c10-ab3cdca42519",
        OrganizationUUID: "04e523c7-e0bc-4717-8e47-96f2a70c6882",
    }, operations.GetDiscountSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscountResponse != nil {
        // handle response
    }
}
```

## UpdateDiscount

Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Discounts.UpdateDiscount(ctx, operations.UpdateDiscountRequest{
        DiscountRequest: shared.DiscountRequest{
            Amount: &shared.Price{
                Amount: 536178,
                CurrencyID: shared.PriceCurrencyIDEnumBzd,
            },
            Description: sdk.String("fuga"),
            ExternalReference: sdk.String("mollitia"),
            ImageLookupKeys: []string{
                "atque",
                "explicabo",
            },
            Name: sdk.String("Sue Corkery"),
            Percentage: sdk.Float64(1871.31),
            UUID: "2e9817ee-17cb-4e61-a6b7-b95bc0ab3c20",
        },
        IfMatch: sdk.String("minus"),
        DiscountUUID: "4f3789fd-871f-499d-92ef-d121aa6f1e67",
        OrganizationUUID: "4bdb04f1-5756-4082-968e-a19f1d170513",
    }, operations.UpdateDiscountSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
