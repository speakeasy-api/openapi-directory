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
            ApplyPretargetingToNonGuaranteedDeals: sdk.Bool(false),
            BidderLocation: []shared.AccountBidderLocation{
                shared.AccountBidderLocation{
                    BidProtocol: sdk.String("suscipit"),
                    MaximumQPS: sdk.Int(477665),
                    Region: sdk.String("minus"),
                    URL: sdk.String("placeat"),
                },
                shared.AccountBidderLocation{
                    BidProtocol: sdk.String("voluptatum"),
                    MaximumQPS: sdk.Int(479977),
                    Region: sdk.String("excepturi"),
                    URL: sdk.String("nisi"),
                },
            },
            CookieMatchingNid: sdk.String("recusandae"),
            CookieMatchingURL: sdk.String("temporibus"),
            ID: sdk.Int(71036),
            Kind: sdk.String("quis"),
            MaximumActiveCreatives: sdk.Int(87129),
            MaximumTotalQPS: sdk.Int(648172),
            NumberActiveCreatives: sdk.Int(20218),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        ConfirmUnsafeAccountChange: sdk.Bool(false),
        Fields: sdk.String("ipsam"),
        ID: 832620,
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UserIP: sdk.String("at"),
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
            ApplyPretargetingToNonGuaranteedDeals: sdk.Bool(false),
            BidderLocation: []shared.AccountBidderLocation{
                shared.AccountBidderLocation{
                    BidProtocol: sdk.String("maiores"),
                    MaximumQPS: sdk.Int(473608),
                    Region: sdk.String("quod"),
                    URL: sdk.String("quod"),
                },
                shared.AccountBidderLocation{
                    BidProtocol: sdk.String("esse"),
                    MaximumQPS: sdk.Int(520478),
                    Region: sdk.String("porro"),
                    URL: sdk.String("dolorum"),
                },
                shared.AccountBidderLocation{
                    BidProtocol: sdk.String("dicta"),
                    MaximumQPS: sdk.Int(720633),
                    Region: sdk.String("officia"),
                    URL: sdk.String("occaecati"),
                },
                shared.AccountBidderLocation{
                    BidProtocol: sdk.String("fugit"),
                    MaximumQPS: sdk.Int(537373),
                    Region: sdk.String("hic"),
                    URL: sdk.String("optio"),
                },
            },
            CookieMatchingNid: sdk.String("totam"),
            CookieMatchingURL: sdk.String("beatae"),
            ID: sdk.Int(414662),
            Kind: sdk.String("molestiae"),
            MaximumActiveCreatives: sdk.Int(264555),
            MaximumTotalQPS: sdk.Int(186332),
            NumberActiveCreatives: sdk.Int(774234),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        ConfirmUnsafeAccountChange: sdk.Bool(false),
        Fields: sdk.String("cum"),
        ID: 456150,
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UserIP: sdk.String("perferendis"),
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
