# Accounts

### Available Operations

* [AdexchangebuyerAccountsGet](#adexchangebuyeraccountsget) - Gets one account by ID.
* [AdexchangebuyerAccountsList](#adexchangebuyeraccountslist) - Retrieves the authenticated user's list of accounts.
* [AdexchangebuyerAccountsPatch](#adexchangebuyeraccountspatch) - Updates an existing account. This method supports patch semantics.
* [AdexchangebuyerAccountsUpdate](#adexchangebuyeraccountsupdate) - Updates an existing account.

## AdexchangebuyerAccountsGet

Gets one account by ID.

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
    res, err := s.Accounts.AdexchangebuyerAccountsGet(ctx, operations.AdexchangebuyerAccountsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("corrupti"),
        ID: 847252,
        Key: sdk.String("vel"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UserIP: sdk.String("suscipit"),
    }, operations.AdexchangebuyerAccountsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## AdexchangebuyerAccountsList

Retrieves the authenticated user's list of accounts.

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
    res, err := s.Accounts.AdexchangebuyerAccountsList(ctx, operations.AdexchangebuyerAccountsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UserIP: sdk.String("delectus"),
    }, operations.AdexchangebuyerAccountsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsList != nil {
        // handle response
    }
}
```

## AdexchangebuyerAccountsPatch

Updates an existing account. This method supports patch semantics.

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
    res, err := s.Accounts.AdexchangebuyerAccountsPatch(ctx, operations.AdexchangebuyerAccountsPatchRequest{
        Account: &shared.Account{
            BidderLocation: []shared.AccountBidderLocation{
                shared.AccountBidderLocation{
                    MaximumQPS: sdk.Int(383441),
                    Region: sdk.String("molestiae"),
                    URL: sdk.String("minus"),
                },
                shared.AccountBidderLocation{
                    MaximumQPS: sdk.Int(812169),
                    Region: sdk.String("voluptatum"),
                    URL: sdk.String("iusto"),
                },
            },
            CookieMatchingNid: sdk.String("excepturi"),
            CookieMatchingURL: sdk.String("nisi"),
            ID: sdk.Int(925597),
            Kind: sdk.String("temporibus"),
            MaximumActiveCreatives: sdk.Int(71036),
            MaximumTotalQPS: sdk.Int(337396),
            NumberActiveCreatives: sdk.Int(87129),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("deserunt"),
        ID: 20218,
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UserIP: sdk.String("quo"),
    }, operations.AdexchangebuyerAccountsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## AdexchangebuyerAccountsUpdate

Updates an existing account.

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
    res, err := s.Accounts.AdexchangebuyerAccountsUpdate(ctx, operations.AdexchangebuyerAccountsUpdateRequest{
        Account: &shared.Account{
            BidderLocation: []shared.AccountBidderLocation{
                shared.AccountBidderLocation{
                    MaximumQPS: sdk.Int(870013),
                    Region: sdk.String("at"),
                    URL: sdk.String("maiores"),
                },
            },
            CookieMatchingNid: sdk.String("molestiae"),
            CookieMatchingURL: sdk.String("quod"),
            ID: sdk.Int(800911),
            Kind: sdk.String("esse"),
            MaximumActiveCreatives: sdk.Int(520478),
            MaximumTotalQPS: sdk.Int(780529),
            NumberActiveCreatives: sdk.Int(678880),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("dicta"),
        ID: 720633,
        Key: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UserIP: sdk.String("deleniti"),
    }, operations.AdexchangebuyerAccountsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
