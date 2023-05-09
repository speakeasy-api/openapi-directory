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
        AccountID: "ipsum",
        Alt: shared.AltEnumJSON.ToPointer(),
        BillingID: "excepturi",
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UserIP: sdk.String("sed"),
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
            AccountID: sdk.String("iste"),
            BillingID: sdk.String("dolor"),
            BudgetAmount: sdk.String("natus"),
            CurrencyCode: sdk.String("laboriosam"),
            ID: sdk.String("fea7596e-b10f-4aaa-a352-c5955907aff1"),
            Kind: sdk.String("mollitia"),
        },
        AccountID: "dolorem",
        Alt: shared.AltEnumJSON.ToPointer(),
        BillingID: "culpa",
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UserIP: sdk.String("numquam"),
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
            AccountID: sdk.String("commodi"),
            BillingID: sdk.String("quam"),
            BudgetAmount: sdk.String("molestiae"),
            CurrencyCode: sdk.String("velit"),
            ID: sdk.String("9251aa52-c3f5-4ad0-99da-1ffe78f097b0"),
            Kind: sdk.String("doloremque"),
        },
        AccountID: "reprehenderit",
        Alt: shared.AltEnumJSON.ToPointer(),
        BillingID: "ut",
        Fields: sdk.String("maiores"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UserIP: sdk.String("iusto"),
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
