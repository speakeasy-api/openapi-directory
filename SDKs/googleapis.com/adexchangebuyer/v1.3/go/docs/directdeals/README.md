# DirectDeals

### Available Operations

* [AdexchangebuyerDirectDealsGet](#adexchangebuyerdirectdealsget) - Gets one direct deal by ID.
* [AdexchangebuyerDirectDealsList](#adexchangebuyerdirectdealslist) - Retrieves the authenticated user's list of direct deals.

## AdexchangebuyerDirectDealsGet

Gets one direct deal by ID.

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
    res, err := s.DirectDeals.AdexchangebuyerDirectDealsGet(ctx, operations.AdexchangebuyerDirectDealsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("accusantium"),
        ID: "afa563e2-516f-4e4c-8b71-1e5b7fd2ed02",
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UserIP: sdk.String("sunt"),
    }, operations.AdexchangebuyerDirectDealsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DirectDeal != nil {
        // handle response
    }
}
```

## AdexchangebuyerDirectDealsList

Retrieves the authenticated user's list of direct deals.

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
    res, err := s.DirectDeals.AdexchangebuyerDirectDealsList(ctx, operations.AdexchangebuyerDirectDealsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UserIP: sdk.String("ea"),
    }, operations.AdexchangebuyerDirectDealsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DirectDealsList != nil {
        // handle response
    }
}
```
