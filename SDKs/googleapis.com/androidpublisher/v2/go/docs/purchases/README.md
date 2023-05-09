# Purchases

### Available Operations

* [AndroidpublisherPurchasesProductsGet](#androidpublisherpurchasesproductsget) - Checks the purchase and consumption status of an inapp item.
* [AndroidpublisherPurchasesSubscriptionsCancel](#androidpublisherpurchasessubscriptionscancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [AndroidpublisherPurchasesSubscriptionsDefer](#androidpublisherpurchasessubscriptionsdefer) - Defers a user's subscription purchase until a specified future expiration time.
* [AndroidpublisherPurchasesSubscriptionsGet](#androidpublisherpurchasessubscriptionsget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
* [AndroidpublisherPurchasesSubscriptionsRefund](#androidpublisherpurchasessubscriptionsrefund) - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* [AndroidpublisherPurchasesSubscriptionsRevoke](#androidpublisherpurchasessubscriptionsrevoke) - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* [AndroidpublisherPurchasesVoidedpurchasesList](#androidpublisherpurchasesvoidedpurchaseslist) - Lists the purchases that were canceled, refunded or charged-back.

## AndroidpublisherPurchasesProductsGet

Checks the purchase and consumption status of an inapp item.

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
    res, err := s.Purchases.AndroidpublisherPurchasesProductsGet(ctx, operations.AndroidpublisherPurchasesProductsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ratione"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("laudantium"),
        PackageName: "dicta",
        PrettyPrint: sdk.Bool(false),
        ProductID: "dolor",
        QuotaUser: sdk.String("maiores"),
        Token: "quasi",
        UserIP: sdk.String("ex"),
    }, operations.AndroidpublisherPurchasesProductsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherPurchasesSubscriptionsCancel

Cancels a user's subscription purchase. The subscription remains valid until its expiration time.

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
    res, err := s.Purchases.AndroidpublisherPurchasesSubscriptionsCancel(ctx, operations.AndroidpublisherPurchasesSubscriptionsCancelRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("nulla"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("voluptatibus"),
        PackageName: "nostrum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        SubscriptionID: "quisquam",
        Token: "saepe",
        UserIP: sdk.String("ea"),
    }, operations.AndroidpublisherPurchasesSubscriptionsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AndroidpublisherPurchasesSubscriptionsDefer

Defers a user's subscription purchase until a specified future expiration time.

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
    res, err := s.Purchases.AndroidpublisherPurchasesSubscriptionsDefer(ctx, operations.AndroidpublisherPurchasesSubscriptionsDeferRequest{
        SubscriptionPurchasesDeferRequest: &shared.SubscriptionPurchasesDeferRequest{
            DeferralInfo: &shared.SubscriptionDeferralInfo{
                DesiredExpiryTimeMillis: sdk.String("impedit"),
                ExpectedExpiryTimeMillis: sdk.String("corporis"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("veniam"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("inventore"),
        PackageName: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        SubscriptionID: "quo",
        Token: "consectetur",
        UserIP: sdk.String("recusandae"),
    }, operations.AndroidpublisherPurchasesSubscriptionsDeferSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherPurchasesSubscriptionsGet

Checks whether a user's subscription purchase is valid and returns its expiry time.

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
    res, err := s.Purchases.AndroidpublisherPurchasesSubscriptionsGet(ctx, operations.AndroidpublisherPurchasesSubscriptionsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("eaque"),
        PackageName: "a",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        SubscriptionID: "aut",
        Token: "aut",
        UserIP: sdk.String("deleniti"),
    }, operations.AndroidpublisherPurchasesSubscriptionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherPurchasesSubscriptionsRefund

Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.

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
    res, err := s.Purchases.AndroidpublisherPurchasesSubscriptionsRefund(ctx, operations.AndroidpublisherPurchasesSubscriptionsRefundRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("impedit"),
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("fugit"),
        PackageName: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        SubscriptionID: "non",
        Token: "et",
        UserIP: sdk.String("dolorum"),
    }, operations.AndroidpublisherPurchasesSubscriptionsRefundSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AndroidpublisherPurchasesSubscriptionsRevoke

Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.

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
    res, err := s.Purchases.AndroidpublisherPurchasesSubscriptionsRevoke(ctx, operations.AndroidpublisherPurchasesSubscriptionsRevokeRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("laborum"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("velit"),
        PackageName: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        SubscriptionID: "nobis",
        Token: "quas",
        UserIP: sdk.String("assumenda"),
    }, operations.AndroidpublisherPurchasesSubscriptionsRevokeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AndroidpublisherPurchasesVoidedpurchasesList

Lists the purchases that were canceled, refunded or charged-back.

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
    res, err := s.Purchases.AndroidpublisherPurchasesVoidedpurchasesList(ctx, operations.AndroidpublisherPurchasesVoidedpurchasesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        EndTime: sdk.String("nulla"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("libero"),
        MaxResults: sdk.Int64(96549),
        OauthToken: sdk.String("tempora"),
        PackageName: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        StartIndex: sdk.Int64(591935),
        StartTime: sdk.String("ipsa"),
        Token: sdk.String("molestiae"),
        UserIP: sdk.String("magnam"),
    }, operations.AndroidpublisherPurchasesVoidedpurchasesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
