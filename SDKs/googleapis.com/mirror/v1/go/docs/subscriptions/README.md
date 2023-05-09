# Subscriptions

### Available Operations

* [MirrorSubscriptionsDelete](#mirrorsubscriptionsdelete) - Deletes a subscription.
* [MirrorSubscriptionsInsert](#mirrorsubscriptionsinsert) - Creates a new subscription.
* [MirrorSubscriptionsList](#mirrorsubscriptionslist) - Retrieves a list of subscriptions for the authenticated user and service.
* [MirrorSubscriptionsUpdate](#mirrorsubscriptionsupdate) - Updates an existing subscription in place.

## MirrorSubscriptionsDelete

Deletes a subscription.

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
    res, err := s.Subscriptions.MirrorSubscriptionsDelete(ctx, operations.MirrorSubscriptionsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("similique"),
        ID: "0d446ce2-af7a-473c-b3be-453f870b326b",
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UserIP: sdk.String("ipsum"),
    }, operations.MirrorSubscriptionsDeleteSecurity{
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

## MirrorSubscriptionsInsert

Creates a new subscription.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Subscriptions.MirrorSubscriptionsInsert(ctx, operations.MirrorSubscriptionsInsertRequest{
        Subscription: &shared.Subscription{
            CallbackURL: sdk.String("incidunt"),
            Collection: sdk.String("qui"),
            ID: sdk.String("9cdb1a84-22bb-4679-9232-2715bf0cbb1e"),
            Kind: sdk.String("ipsum"),
            Notification: &shared.Notification{
                Collection: sdk.String("veritatis"),
                ItemID: sdk.String("nobis"),
                Operation: sdk.String("quos"),
                UserActions: []shared.UserAction{
                    shared.UserAction{
                        Payload: sdk.String("cupiditate"),
                        Type: sdk.String("aperiam"),
                    },
                    shared.UserAction{
                        Payload: sdk.String("delectus"),
                        Type: sdk.String("dolorem"),
                    },
                    shared.UserAction{
                        Payload: sdk.String("dolore"),
                        Type: sdk.String("labore"),
                    },
                },
                UserToken: sdk.String("adipisci"),
                VerifyToken: sdk.String("dolorum"),
            },
            Operation: []string{
                "quae",
            },
            Updated: types.MustTimeFromString("2022-06-12T04:30:45.210Z"),
            UserToken: sdk.String("itaque"),
            VerifyToken: sdk.String("consequatur"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("est"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UserIP: sdk.String("ut"),
    }, operations.MirrorSubscriptionsInsertSecurity{
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

## MirrorSubscriptionsList

Retrieves a list of subscriptions for the authenticated user and service.

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
    res, err := s.Subscriptions.MirrorSubscriptionsList(ctx, operations.MirrorSubscriptionsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("facilis"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UserIP: sdk.String("laudantium"),
    }, operations.MirrorSubscriptionsListSecurity{
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

## MirrorSubscriptionsUpdate

Updates an existing subscription in place.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Subscriptions.MirrorSubscriptionsUpdate(ctx, operations.MirrorSubscriptionsUpdateRequest{
        Subscription: &shared.Subscription{
            CallbackURL: sdk.String("odio"),
            Collection: sdk.String("occaecati"),
            ID: sdk.String("fce953f7-3ef7-4fbc-babd-74dd39c0f5d2"),
            Kind: sdk.String("porro"),
            Notification: &shared.Notification{
                Collection: sdk.String("maiores"),
                ItemID: sdk.String("doloribus"),
                Operation: sdk.String("iusto"),
                UserActions: []shared.UserAction{
                    shared.UserAction{
                        Payload: sdk.String("ducimus"),
                        Type: sdk.String("alias"),
                    },
                    shared.UserAction{
                        Payload: sdk.String("officia"),
                        Type: sdk.String("tempora"),
                    },
                    shared.UserAction{
                        Payload: sdk.String("ipsam"),
                        Type: sdk.String("ea"),
                    },
                    shared.UserAction{
                        Payload: sdk.String("aspernatur"),
                        Type: sdk.String("vel"),
                    },
                },
                UserToken: sdk.String("possimus"),
                VerifyToken: sdk.String("magnam"),
            },
            Operation: []string{
                "ex",
            },
            Updated: types.MustTimeFromString("2022-10-04T22:05:21.038Z"),
            UserToken: sdk.String("dolor"),
            VerifyToken: sdk.String("maiores"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quasi"),
        ID: "6d9f5fce-6c55-4614-ac3e-250fb008c42e",
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UserIP: sdk.String("dolorum"),
    }, operations.MirrorSubscriptionsUpdateSecurity{
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
