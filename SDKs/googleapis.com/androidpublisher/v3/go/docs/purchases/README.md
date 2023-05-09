# Purchases

### Available Operations

* [AndroidpublisherPurchasesProductsAcknowledge](#androidpublisherpurchasesproductsacknowledge) - Acknowledges a purchase of an inapp item.
* [AndroidpublisherPurchasesProductsConsume](#androidpublisherpurchasesproductsconsume) - Consumes a purchase for an inapp item.
* [AndroidpublisherPurchasesProductsGet](#androidpublisherpurchasesproductsget) - Checks the purchase and consumption status of an inapp item.
* [AndroidpublisherPurchasesSubscriptionsAcknowledge](#androidpublisherpurchasessubscriptionsacknowledge) - Acknowledges a subscription purchase.
* [AndroidpublisherPurchasesSubscriptionsCancel](#androidpublisherpurchasessubscriptionscancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [AndroidpublisherPurchasesSubscriptionsDefer](#androidpublisherpurchasessubscriptionsdefer) - Defers a user's subscription purchase until a specified future expiration time.
* [AndroidpublisherPurchasesSubscriptionsGet](#androidpublisherpurchasessubscriptionsget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
* [AndroidpublisherPurchasesSubscriptionsRefund](#androidpublisherpurchasessubscriptionsrefund) - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* [AndroidpublisherPurchasesSubscriptionsRevoke](#androidpublisherpurchasessubscriptionsrevoke) - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* [AndroidpublisherPurchasesSubscriptionsv2Get](#androidpublisherpurchasessubscriptionsv2get) - Get metadata about a subscription
* [AndroidpublisherPurchasesVoidedpurchasesList](#androidpublisherpurchasesvoidedpurchaseslist) - Lists the purchases that were canceled, refunded or charged-back.

## AndroidpublisherPurchasesProductsAcknowledge

Acknowledges a purchase of an inapp item.

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
    res, err := s.Purchases.AndroidpublisherPurchasesProductsAcknowledge(ctx, operations.AndroidpublisherPurchasesProductsAcknowledgeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ProductPurchasesAcknowledgeRequest: &shared.ProductPurchasesAcknowledgeRequest{
            DeveloperPayload: sdk.String("quis"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("quidem"),
        PackageName: "repellendus",
        PrettyPrint: sdk.Bool(false),
        ProductID: "perferendis",
        QuotaUser: sdk.String("id"),
        Token: "sapiente",
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.AndroidpublisherPurchasesProductsAcknowledgeSecurity{
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

## AndroidpublisherPurchasesProductsConsume

Consumes a purchase for an inapp item.

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
    res, err := s.Purchases.AndroidpublisherPurchasesProductsConsume(ctx, operations.AndroidpublisherPurchasesProductsConsumeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("dolore"),
        PackageName: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        ProductID: "iure",
        QuotaUser: sdk.String("explicabo"),
        Token: "minus",
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.AndroidpublisherPurchasesProductsConsumeSecurity{
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("non"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("mollitia"),
        PackageName: "accusamus",
        PrettyPrint: sdk.Bool(false),
        ProductID: "harum",
        QuotaUser: sdk.String("cumque"),
        Token: "doloremque",
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("corrupti"),
    }, operations.AndroidpublisherPurchasesProductsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductPurchase != nil {
        // handle response
    }
}
```

## AndroidpublisherPurchasesSubscriptionsAcknowledge

Acknowledges a subscription purchase.

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
    res, err := s.Purchases.AndroidpublisherPurchasesSubscriptionsAcknowledge(ctx, operations.AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SubscriptionPurchasesAcknowledgeRequest: &shared.SubscriptionPurchasesAcknowledgeRequest{
            DeveloperPayload: sdk.String("deserunt"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("dolor"),
        PackageName: "rerum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        SubscriptionID: "accusamus",
        Token: "optio",
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("minus"),
    }, operations.AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity{
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("iste"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("accusantium"),
        PackageName: "illo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        SubscriptionID: "doloribus",
        Token: "nostrum",
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("possimus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SubscriptionPurchasesDeferRequest: &shared.SubscriptionPurchasesDeferRequest{
            DeferralInfo: &shared.SubscriptionDeferralInfo{
                DesiredExpiryTimeMillis: sdk.String("pariatur"),
                ExpectedExpiryTimeMillis: sdk.String("vel"),
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("quos"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("non"),
        PackageName: "voluptates",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        SubscriptionID: "aliquam",
        Token: "quisquam",
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.AndroidpublisherPurchasesSubscriptionsDeferSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionPurchasesDeferResponse != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("est"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("aliquid"),
        PackageName: "consectetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        SubscriptionID: "rem",
        Token: "voluptatum",
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.AndroidpublisherPurchasesSubscriptionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionPurchase != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("sit"),
        PackageName: "rerum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        SubscriptionID: "tenetur",
        Token: "autem",
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("totam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("commodi"),
        PackageName: "alias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        SubscriptionID: "aut",
        Token: "dolore",
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("aliquam"),
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

## AndroidpublisherPurchasesSubscriptionsv2Get

Get metadata about a subscription

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
    res, err := s.Purchases.AndroidpublisherPurchasesSubscriptionsv2Get(ctx, operations.AndroidpublisherPurchasesSubscriptionsv2GetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("unde"),
        PackageName: "illo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        Token: "inventore",
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.AndroidpublisherPurchasesSubscriptionsv2GetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionPurchaseV2 != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        EndTime: sdk.String("facere"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("beatae"),
        MaxResults: sdk.Int64(767210),
        OauthToken: sdk.String("delectus"),
        PackageName: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        StartIndex: sdk.Int64(548256),
        StartTime: sdk.String("rem"),
        Token: sdk.String("atque"),
        Type: sdk.Int64(886118),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.AndroidpublisherPurchasesVoidedpurchasesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoidedPurchasesListResponse != nil {
        // handle response
    }
}
```
