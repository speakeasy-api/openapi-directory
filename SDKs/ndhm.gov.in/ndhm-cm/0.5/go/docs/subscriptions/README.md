# Subscriptions

### Available Operations

* [PostV05SubscriptionRequestsCmInitJSON](#postv05subscriptionrequestscminitjson) - Request for subscription
* [PostV05SubscriptionRequestsCmInitRaw](#postv05subscriptionrequestscminitraw) - Request for subscription
* [PostV05SubscriptionRequestsHiuOnNotify](#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [PostV05SubscriptionsHiuOnNotify](#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

## PostV05SubscriptionRequestsCmInitJSON

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

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
    res, err := s.Subscriptions.PostV05SubscriptionRequestsCmInitJSON(ctx, operations.PostV05SubscriptionRequestsCmInitJSONRequest{
        Authorization: "saepe",
        SubscriptionRequest: shared.SubscriptionRequest{
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Subscription: shared.SubscriptionRequestSubscription{
                Categories: []shared.SubscriptionCategoryEnum{
                    shared.SubscriptionCategoryEnumLink,
                    shared.SubscriptionCategoryEnumLink,
                },
                Hips: []shared.OrganizationRepresentation{
                    shared.OrganizationRepresentation{
                        ID: "7b95bc0a-b3c2-40c4-b378-9fd871f99dd2",
                    },
                    shared.OrganizationRepresentation{
                        ID: "efd121aa-6f1e-4674-bdb0-4f15756082d6",
                    },
                    shared.OrganizationRepresentation{
                        ID: "8ea19f1d-1705-4133-9d08-086a1840394c",
                    },
                },
                Hiu: shared.OrganizationRepresentation{
                    ID: "26071f93-f5f0-4642-9ac7-af515cc413aa",
                },
                Patient: shared.ConsentManagerPatientID{
                    ID: "hinapatel79@ndhm",
                },
                Period: shared.SubscriptionPeriod{
                    From: types.MustTimeFromString("2022-10-03T04:29:10.698Z"),
                    To: types.MustTimeFromString("2021-09-01T22:08:53.618Z"),
                },
                Purpose: shared.UsePurpose{
                    Code: "recusandae",
                    RefURI: sdk.String("https://those-helo.info"),
                    Text: "quos",
                },
            },
            Timestamp: types.MustTimeFromString("2022-09-18T05:25:42.565Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsCmInitRaw

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

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
    res, err := s.Subscriptions.PostV05SubscriptionRequestsCmInitRaw(ctx, operations.PostV05SubscriptionRequestsCmInitRawRequest{
        Authorization: "possimus",
        RequestBody: []byte("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsHiuOnNotify

This API is called by HIU as acknowledgement to subscription request relevant notifications. 


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
    res, err := s.Subscriptions.PostV05SubscriptionRequestsHiuOnNotify(ctx, operations.PostV05SubscriptionRequestsHiuOnNotifyRequest{
        Authorization: "cum",
        HIUSubscriptionRequestNotificationAcknowledgement: shared.HIUSubscriptionRequestNotificationAcknowledgement{
            Acknowledgement: &shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement{
                Status: shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnumOk,
                SubscriptionRequestID: "subscription Id",
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "in",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "5fd5e60b-375e-4d4f-afbe-e41f33317fe3",
            },
            Timestamp: types.MustTimeFromString("2022-04-24T05:37:47.670Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


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
    res, err := s.Subscriptions.PostV05SubscriptionsHiuOnNotify(ctx, operations.PostV05SubscriptionsHiuOnNotifyRequest{
        Authorization: "laboriosam",
        HIUSubscriptionNotificationAcknowledgment: shared.HIUSubscriptionNotificationAcknowledgment{
            Acknowledgement: &shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgement{
                EventID: "subscription event Id",
                Status: shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "voluptates",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "b1ea4265-55ba-43c2-8744-ed53b88f3a8d",
            },
            Timestamp: types.MustTimeFromString("2021-02-13T15:31:34.151Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
