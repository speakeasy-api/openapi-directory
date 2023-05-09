# Budget

### Available Operations

* [AdexchangebuyerBudgetGet](#adexchangebuyerbudgetget) - Returns the budget information for the adgroup specified by the accountId and billingId.
* [AdexchangebuyerBudgetPatch](#adexchangebuyerbudgetpatch) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* [AdexchangebuyerBudgetUpdate](#adexchangebuyerbudgetupdate) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

## AdexchangebuyerBudgetGet

Returns the budget information for the adgroup specified by the accountId and billingId.

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
    res, err := s.Budget.AdexchangebuyerBudgetGet(ctx, operations.AdexchangebuyerBudgetGetRequest{
        AccountID: "corporis",
        Alt: shared.AltEnumJSON.ToPointer(),
        BillingID: "iste",
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UserIP: sdk.String("ipsa"),
    }, operations.AdexchangebuyerBudgetGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Budget != nil {
        // handle response
    }
}
```

## AdexchangebuyerBudgetPatch

Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.

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
    res, err := s.Budget.AdexchangebuyerBudgetPatch(ctx, operations.AdexchangebuyerBudgetPatchRequest{
        Budget: &shared.Budget{
            AccountID: sdk.String("reiciendis"),
            BillingID: sdk.String("est"),
            BudgetAmount: sdk.String("mollitia"),
            CurrencyCode: sdk.String("laborum"),
            ID: sdk.String("2352c595-5907-4aff-9a3a-2fa946773925"),
            Kind: sdk.String("vitae"),
        },
        AccountID: "laborum",
        Alt: shared.AltEnumJSON.ToPointer(),
        BillingID: "animi",
        Fields: sdk.String("enim"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UserIP: sdk.String("tenetur"),
    }, operations.AdexchangebuyerBudgetPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Budget != nil {
        // handle response
    }
}
```

## AdexchangebuyerBudgetUpdate

Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

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
    res, err := s.Budget.AdexchangebuyerBudgetUpdate(ctx, operations.AdexchangebuyerBudgetUpdateRequest{
        Budget: &shared.Budget{
            AccountID: sdk.String("ipsam"),
            BillingID: sdk.String("id"),
            BudgetAmount: sdk.String("possimus"),
            CurrencyCode: sdk.String("aut"),
            ID: sdk.String("19da1ffe-78f0-497b-8074-f15471b5e6e1"),
            Kind: sdk.String("ipsum"),
        },
        AccountID: "quidem",
        Alt: shared.AltEnumJSON.ToPointer(),
        BillingID: "molestias",
        Fields: sdk.String("excepturi"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UserIP: sdk.String("rem"),
    }, operations.AdexchangebuyerBudgetUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Budget != nil {
        // handle response
    }
}
```
