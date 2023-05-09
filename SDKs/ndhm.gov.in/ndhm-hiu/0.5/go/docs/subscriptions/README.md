# Subscriptions

### Available Operations

* [PostV05SubscriptionRequestsHiuNotifyJSON](#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionRequestsHiuNotifyRaw](#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionRequestsHiuOnInit](#postv05subscriptionrequestshiuoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [PostV05SubscriptionsHiuNotifyJSON](#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [PostV05SubscriptionsHiuNotifyRaw](#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription

## PostV05SubscriptionRequestsHiuNotifyJSON

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


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
    res, err := s.Subscriptions.PostV05SubscriptionRequestsHiuNotifyJSON(ctx, operations.PostV05SubscriptionRequestsHiuNotifyJSONRequest{
        Authorization: "dignissimos",
        SubscriptionApprovalNotification: shared.SubscriptionApprovalNotification{
            Notification: shared.SubscriptionApprovalNotificationNotification{
                Status: shared.SubscriptionStatusEnumDenied,
                Subscription: &shared.HIUSubscription{
                    Hiu: shared.OrganizationRepresentation{
                        ID: "e35b60eb-1ea4-4265-95ba-3c28744ed53b",
                    },
                    ID: "subscription Id",
                    Patient: shared.ConsentManagerPatientID{
                        ID: "hinapatel@ndhm",
                    },
                    Sources: []shared.HIUSubscriptionContext{
                        shared.HIUSubscriptionContext{
                            Categories: []shared.SubscriptionCategoryEnum{
                                shared.SubscriptionCategoryEnumLink,
                                shared.SubscriptionCategoryEnumLink,
                                shared.SubscriptionCategoryEnumLink,
                            },
                            Hip: &shared.OrganizationRepresentation{
                                ID: "f3a8d8f5-c0b2-4f2f-b7b1-94a276b26916",
                            },
                            Period: shared.SubscriptionPeriod{
                                From: types.MustTimeFromString("2020-04-25T13:15:32.117Z"),
                                To: types.MustTimeFromString("2022-01-12T18:07:07.173Z"),
                            },
                        },
                        shared.HIUSubscriptionContext{
                            Categories: []shared.SubscriptionCategoryEnum{
                                shared.SubscriptionCategoryEnumLink,
                            },
                            Hip: &shared.OrganizationRepresentation{
                                ID: "8f4294e3-698f-4447-b603-e8b445e80ca5",
                            },
                            Period: shared.SubscriptionPeriod{
                                From: types.MustTimeFromString("2022-01-28T16:22:09.125Z"),
                                To: types.MustTimeFromString("2020-05-31T18:16:06.681Z"),
                            },
                        },
                        shared.HIUSubscriptionContext{
                            Categories: []shared.SubscriptionCategoryEnum{
                                shared.SubscriptionCategoryEnumLink,
                            },
                            Hip: &shared.OrganizationRepresentation{
                                ID: "0e457e18-58b6-4a89-bbe3-a5aa8e4824d0",
                            },
                            Period: shared.SubscriptionPeriod{
                                From: types.MustTimeFromString("2021-07-31T10:53:55.286Z"),
                                To: types.MustTimeFromString("2022-12-29T02:56:05.947Z"),
                            },
                        },
                    },
                },
                SubscriptionRequestID: sdk.String("request id of the subscription"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-08-17T23:19:52.079Z"),
        },
        XHiuID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsHiuNotifyRaw

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


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
    res, err := s.Subscriptions.PostV05SubscriptionRequestsHiuNotifyRaw(ctx, operations.PostV05SubscriptionRequestsHiuNotifyRawRequest{
        Authorization: "voluptatum",
        RequestBody: []byte("quas"),
        XHiuID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsHiuOnInit

This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription. 


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
    res, err := s.Subscriptions.PostV05SubscriptionRequestsHiuOnInit(ctx, operations.PostV05SubscriptionRequestsHiuOnInitRequest{
        Authorization: "corporis",
        HIUSubscriptionRequestReceipt: shared.HIUSubscriptionRequestReceipt{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "blanditiis",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "62065e90-4f3b-4119-8b8a-bf603a79f9df",
            },
            SubscriptionRequest: &shared.HIUSubscriptionRequestReceiptSubscriptionRequest{
                ID: "f29f0e59-8388-4698-9fe6-05db67aeac46",
            },
            Timestamp: types.MustTimeFromString("2022-12-13T12:36:43.531Z"),
        },
        XHiuID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionsHiuNotifyJSON

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


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
    res, err := s.Subscriptions.PostV05SubscriptionsHiuNotifyJSON(ctx, operations.PostV05SubscriptionsHiuNotifyJSONRequest{
        Authorization: "quidem",
        HIUSubscriptionNotification: shared.HIUSubscriptionNotification{
            Event: shared.HIUSubscriptionNotificationEvent{
                Category: shared.SubscriptionCategoryEnumLink,
                Content: shared.HIUSubscriptionEventContent{
                    Context: []shared.EventCategoryDetail{
                        shared.EventCategoryDetail{
                            CareContext: shared.CareContextDefinition{
                                CareContextReference: "Episode1",
                                PatientReference: "batman@tmh",
                            },
                            HiTypes: []shared.HITypeEnumEnum{
                                shared.HITypeEnumEnumDischargeSummary,
                                shared.HITypeEnumEnumDischargeSummary,
                                shared.HITypeEnumEnumDischargeSummary,
                                shared.HITypeEnumEnumPrescription,
                            },
                        },
                        shared.EventCategoryDetail{
                            CareContext: shared.CareContextDefinition{
                                CareContextReference: "Episode1",
                                PatientReference: "batman@tmh",
                            },
                            HiTypes: []shared.HITypeEnumEnum{
                                shared.HITypeEnumEnumDiagnosticReport,
                            },
                        },
                    },
                    Hip: shared.OrganizationRepresentation{
                        ID: "e187f86b-c173-4d68-9eee-9526f8d986e8",
                    },
                    Patient: shared.ConsentManagerPatientID{
                        ID: "hinapatel@ndhm",
                    },
                },
                ID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
                Published: types.MustTimeFromString("2022-10-04T17:29:33.184Z"),
                SubscriptionID: "subscription Id",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2020-12-16T15:16:35.557Z"),
        },
        XHiuID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionsHiuNotifyRaw

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


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
    res, err := s.Subscriptions.PostV05SubscriptionsHiuNotifyRaw(ctx, operations.PostV05SubscriptionsHiuNotifyRawRequest{
        Authorization: "labore",
        RequestBody: []byte("reiciendis"),
        XHiuID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
