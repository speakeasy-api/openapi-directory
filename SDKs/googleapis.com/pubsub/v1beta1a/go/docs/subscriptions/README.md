# Subscriptions

### Available Operations

* [PubsubSubscriptionsAcknowledge](#pubsubsubscriptionsacknowledge) - Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
* [PubsubSubscriptionsCreate](#pubsubsubscriptionscreate) - Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
* [PubsubSubscriptionsDelete](#pubsubsubscriptionsdelete) - Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
* [PubsubSubscriptionsGet](#pubsubsubscriptionsget) - Gets the configuration details of a subscription.
* [PubsubSubscriptionsList](#pubsubsubscriptionslist) - Lists matching subscriptions.
* [PubsubSubscriptionsModifyAckDeadline](#pubsubsubscriptionsmodifyackdeadline) - Modifies the Ack deadline for a message received from a pull request.
* [PubsubSubscriptionsModifyPushConfig](#pubsubsubscriptionsmodifypushconfig) - Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
* [PubsubSubscriptionsPull](#pubsubsubscriptionspull) - Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
* [PubsubSubscriptionsPullBatch](#pubsubsubscriptionspullbatch) - Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

## PubsubSubscriptionsAcknowledge

Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.

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
    res, err := s.Subscriptions.PubsubSubscriptionsAcknowledge(ctx, operations.PubsubSubscriptionsAcknowledgeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AcknowledgeRequest: &shared.AcknowledgeRequest{
            AckID: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
            Subscription: sdk.String("placeat"),
        },
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.PubsubSubscriptionsAcknowledgeSecurity{
        Option1: &operations.PubsubSubscriptionsAcknowledgeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PubsubSubscriptionsCreate

Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.

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
    res, err := s.Subscriptions.PubsubSubscriptionsCreate(ctx, operations.PubsubSubscriptionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Subscription: &shared.Subscription{
            AckDeadlineSeconds: sdk.Int(20218),
            Name: sdk.String("Estelle Will"),
            PushConfig: &shared.PushConfig{
                PushEndpoint: sdk.String("at"),
            },
            Topic: sdk.String("at"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.PubsubSubscriptionsCreateSecurity{
        Option1: &operations.PubsubSubscriptionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## PubsubSubscriptionsDelete

Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.

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
    res, err := s.Subscriptions.PubsubSubscriptionsDelete(ctx, operations.PubsubSubscriptionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        Subscription: "beatae",
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.PubsubSubscriptionsDeleteSecurity{
        Option1: &operations.PubsubSubscriptionsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PubsubSubscriptionsGet

Gets the configuration details of a subscription.

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
    res, err := s.Subscriptions.PubsubSubscriptionsGet(ctx, operations.PubsubSubscriptionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        Subscription: "perferendis",
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("natus"),
    }, operations.PubsubSubscriptionsGetSecurity{
        Option1: &operations.PubsubSubscriptionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## PubsubSubscriptionsList

Lists matching subscriptions.

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
    res, err := s.Subscriptions.PubsubSubscriptionsList(ctx, operations.PubsubSubscriptionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        MaxResults: sdk.Int64(902599),
        OauthToken: sdk.String("fuga"),
        PageToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("corporis"),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.PubsubSubscriptionsListSecurity{
        Option1: &operations.PubsubSubscriptionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscriptionsResponse != nil {
        // handle response
    }
}
```

## PubsubSubscriptionsModifyAckDeadline

Modifies the Ack deadline for a message received from a pull request.

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
    res, err := s.Subscriptions.PubsubSubscriptionsModifyAckDeadline(ctx, operations.PubsubSubscriptionsModifyAckDeadlineRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ModifyAckDeadlineRequest: &shared.ModifyAckDeadlineRequest{
            AckDeadlineSeconds: sdk.Int(99280),
            AckID: sdk.String("ipsa"),
            AckIds: []string{
                "est",
                "mollitia",
                "laborum",
                "dolores",
            },
            Subscription: sdk.String("dolorem"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("enim"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.PubsubSubscriptionsModifyAckDeadlineSecurity{
        Option1: &operations.PubsubSubscriptionsModifyAckDeadlineSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PubsubSubscriptionsModifyPushConfig

Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.

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
    res, err := s.Subscriptions.PubsubSubscriptionsModifyPushConfig(ctx, operations.PubsubSubscriptionsModifyPushConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ModifyPushConfigRequest: &shared.ModifyPushConfigRequest{
            PushConfig: &shared.PushConfig{
                PushEndpoint: sdk.String("culpa"),
            },
            Subscription: sdk.String("doloribus"),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.PubsubSubscriptionsModifyPushConfigSecurity{
        Option1: &operations.PubsubSubscriptionsModifyPushConfigSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PubsubSubscriptionsPull

Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).

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
    res, err := s.Subscriptions.PubsubSubscriptionsPull(ctx, operations.PubsubSubscriptionsPullRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PullRequest: &shared.PullRequest{
            ReturnImmediately: sdk.Bool(false),
            Subscription: sdk.String("commodi"),
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("animi"),
    }, operations.PubsubSubscriptionsPullSecurity{
        Option1: &operations.PubsubSubscriptionsPullSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullResponse != nil {
        // handle response
    }
}
```

## PubsubSubscriptionsPullBatch

Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

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
    res, err := s.Subscriptions.PubsubSubscriptionsPullBatch(ctx, operations.PubsubSubscriptionsPullBatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PullBatchRequest: &shared.PullBatchRequest{
            MaxEvents: sdk.Int(138183),
            ReturnImmediately: sdk.Bool(false),
            Subscription: sdk.String("quo"),
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("id"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.PubsubSubscriptionsPullBatchSecurity{
        Option1: &operations.PubsubSubscriptionsPullBatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullBatchResponse != nil {
        // handle response
    }
}
```
