# Subscriptions

### Available Operations

* [PostV05SubscriptionRequestsCmInitJSON](#postv05subscriptionrequestscminitjson) - Request for subscription
* [PostV05SubscriptionRequestsCmInitRaw](#postv05subscriptionrequestscminitraw) - Request for subscription
* [PostV05SubscriptionRequestsCmOnInit](#postv05subscriptionrequestscmoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [PostV05SubscriptionRequestsHiuNotifyJSON](#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionRequestsHiuNotifyRaw](#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionRequestsHiuOnNotify](#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [PostV05SubscriptionsHiuNotifyJSON](#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [PostV05SubscriptionsHiuNotifyRaw](#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription
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
        Authorization: "aperiam",
        SubscriptionRequest: shared.SubscriptionRequest{
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Subscription: shared.SubscriptionRequestSubscription{
                Categories: []shared.SubscriptionCategoryEnum{
                    shared.SubscriptionCategoryEnumLink,
                },
                Hips: []shared.OrganizationRepresentation{
                    shared.OrganizationRepresentation{
                        ID: "72165765-0664-4187-8d9d-21f9ad030c4e",
                    },
                    shared.OrganizationRepresentation{
                        ID: "cc11a083-6429-4068-b850-2a55e7f73bc8",
                    },
                    shared.OrganizationRepresentation{
                        ID: "45e320a3-19f4-4bad-b947-c9a867bc4242",
                    },
                    shared.OrganizationRepresentation{
                        ID: "6665816d-dca8-4ef5-9fcb-4c593ec12cda",
                    },
                },
                Hiu: shared.OrganizationRepresentation{
                    ID: "ad0ec7af-edbd-480d-b448-a47f9390c588",
                },
                Patient: shared.ConsentManagerPatientID{
                    ID: sdk.String("hinapatel79@ndhm"),
                },
                Period: shared.SubscriptionPeriod{
                    From: types.MustTimeFromString("2022-12-11T07:04:52.187Z"),
                    To: types.MustTimeFromString("2021-11-18T17:58:10.750Z"),
                },
                Purpose: shared.UsePurpose{
                    Code: "ipsum",
                    RefURI: sdk.String("https://real-psychology.org"),
                    Text: "error",
                },
            },
            Timestamp: types.MustTimeFromString("2020-02-19T05:19:30.502Z"),
        },
        XCmID: "consectetur",
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
        Authorization: "sapiente",
        RequestBody: []byte("voluptatibus"),
        XCmID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsCmOnInit

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
    res, err := s.Subscriptions.PostV05SubscriptionRequestsCmOnInit(ctx, operations.PostV05SubscriptionRequestsCmOnInitRequest{
        Authorization: "repellendus",
        HIUSubscriptionRequestReceipt: shared.HIUSubscriptionRequestReceipt{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("delectus"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "7f079af4-d357-424c-9b0f-4d281187d568",
            },
            SubscriptionRequest: &shared.HIUSubscriptionRequestReceiptSubscriptionRequest{
                ID: "f29f0e59-8388-4698-9fe6-05db67aeac46",
            },
            Timestamp: types.MustTimeFromString("2022-09-12T21:05:38.468Z"),
        },
        XHiuID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

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
        Authorization: "nulla",
        SubscriptionApprovalNotification: shared.SubscriptionApprovalNotification{
            Notification: shared.SubscriptionApprovalNotificationNotification{
                Status: shared.SubscriptionStatusEnumDenied,
                Subscription: &shared.HIUSubscription{
                    Hiu: shared.OrganizationRepresentation{
                        ID: "d85a9065-e628-4bdf-8203-2b6c879923b7",
                    },
                    ID: "subscription Id",
                    Patient: shared.ConsentManagerPatientID{
                        ID: sdk.String("hinapatel79@ndhm"),
                    },
                    Sources: []shared.HIUSubscriptionContext{
                        shared.HIUSubscriptionContext{
                            Categories: []shared.SubscriptionCategoryEnum{
                                shared.SubscriptionCategoryEnumLink,
                            },
                            Hip: &shared.OrganizationRepresentation{
                                ID: "3584f7ae-12c6-4891-b82c-e11571723053",
                            },
                            Period: shared.SubscriptionPeriod{
                                From: types.MustTimeFromString("2022-07-19T04:55:29.262Z"),
                                To: types.MustTimeFromString("2020-08-17T09:27:28.131Z"),
                            },
                        },
                        shared.HIUSubscriptionContext{
                            Categories: []shared.SubscriptionCategoryEnum{
                                shared.SubscriptionCategoryEnumLink,
                                shared.SubscriptionCategoryEnumLink,
                                shared.SubscriptionCategoryEnumLink,
                                shared.SubscriptionCategoryEnumLink,
                            },
                            Hip: &shared.OrganizationRepresentation{
                                ID: "a89df975-e356-4686-892e-9c3ddc5f111d",
                            },
                            Period: shared.SubscriptionPeriod{
                                From: types.MustTimeFromString("2020-12-25T20:40:11.724Z"),
                                To: types.MustTimeFromString("2022-12-20T01:12:56.919Z"),
                            },
                        },
                        shared.HIUSubscriptionContext{
                            Categories: []shared.SubscriptionCategoryEnum{
                                shared.SubscriptionCategoryEnumLink,
                            },
                            Hip: &shared.OrganizationRepresentation{
                                ID: "6d541a4d-190f-4eb2-9780-bccc0dbbddb4",
                            },
                            Period: shared.SubscriptionPeriod{
                                From: types.MustTimeFromString("2022-06-15T23:25:35.619Z"),
                                To: types.MustTimeFromString("2022-12-16T14:45:25.198Z"),
                            },
                        },
                        shared.HIUSubscriptionContext{
                            Categories: []shared.SubscriptionCategoryEnum{
                                shared.SubscriptionCategoryEnumLink,
                                shared.SubscriptionCategoryEnumLink,
                                shared.SubscriptionCategoryEnumLink,
                            },
                            Hip: &shared.OrganizationRepresentation{
                                ID: "fb4e391e-6bc1-458c-8c4e-54599ea34226",
                            },
                            Period: shared.SubscriptionPeriod{
                                From: types.MustTimeFromString("2022-02-02T16:48:44.255Z"),
                                To: types.MustTimeFromString("2021-07-02T20:06:53.380Z"),
                            },
                        },
                    },
                },
                SubscriptionRequestID: sdk.String("request id of the subscription"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-12-18T07:41:43.002Z"),
        },
        XHiuID: "consequatur",
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
        Authorization: "impedit",
        RequestBody: []byte("recusandae"),
        XHiuID: "voluptate",
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
        Authorization: "deleniti",
        HIUSubscriptionRequestNotificationAcknowledgement: shared.HIUSubscriptionRequestNotificationAcknowledgement{
            Acknowledgement: &shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement{
                Status: shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnumOk,
                SubscriptionRequestID: "subscription Id",
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("et"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "bd8fb7a0-a116-4ce7-a3d4-097fa30e9af7",
            },
            Timestamp: types.MustTimeFromString("2022-08-18T21:05:22.267Z"),
        },
        XCmID: "libero",
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
        Authorization: "quia",
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
                                shared.HITypeEnumEnumOpConsultation,
                            },
                        },
                        shared.EventCategoryDetail{
                            CareContext: shared.CareContextDefinition{
                                CareContextReference: "Episode1",
                                PatientReference: "batman@tmh",
                            },
                            HiTypes: []shared.HITypeEnumEnum{
                                shared.HITypeEnumEnumOpConsultation,
                            },
                        },
                        shared.EventCategoryDetail{
                            CareContext: shared.CareContextDefinition{
                                CareContextReference: "Episode1",
                                PatientReference: "batman@tmh",
                            },
                            HiTypes: []shared.HITypeEnumEnum{
                                shared.HITypeEnumEnumOpConsultation,
                            },
                        },
                    },
                    Hip: shared.OrganizationRepresentation{
                        ID: "d83f5aeb-7799-4d22-a8c1-f8493825fdc4",
                    },
                    Patient: shared.ConsentManagerPatientID{
                        ID: sdk.String("hinapatel79@ndhm"),
                    },
                },
                ID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
                Published: types.MustTimeFromString("2022-03-28T03:59:40.787Z"),
                SubscriptionID: "subscription Id",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-02-07T14:35:35.312Z"),
        },
        XHiuID: "commodi",
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
        Authorization: "maxime",
        RequestBody: []byte("sed"),
        XHiuID: "minus",
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
        Authorization: "consequuntur",
        HIUSubscriptionNotificationAcknowledgment: shared.HIUSubscriptionNotificationAcknowledgment{
            Acknowledgement: &shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgement{
                EventID: "subscription event Id",
                Status: shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("delectus"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "b4cfc1c7-6230-4f84-9fb1-bd23fdb14db6",
            },
            Timestamp: types.MustTimeFromString("2021-02-24T21:04:05.286Z"),
        },
        XCmID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
