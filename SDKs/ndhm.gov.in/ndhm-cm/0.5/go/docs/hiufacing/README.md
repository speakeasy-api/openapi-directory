# HiuFacing

### Available Operations

* [PostV05SubscriptionsHiuOnNotify](#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [PostV05UsersAuthOnNotifyJSON](#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [PostV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

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
    res, err := s.HiuFacing.PostV05SubscriptionsHiuOnNotify(ctx, operations.PostV05SubscriptionsHiuOnNotifyRequest{
        Authorization: "cupiditate",
        HIUSubscriptionNotificationAcknowledgment: shared.HIUSubscriptionNotificationAcknowledgment{
            Acknowledgement: &shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgement{
                EventID: "subscription event Id",
                Status: shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "delectus",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "3443a110-8e0a-4dcf-8b92-1879fce953f7",
            },
            Timestamp: types.MustTimeFromString("2022-02-14T05:06:03.793Z"),
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

## PostV05UsersAuthOnNotifyJSON

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


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
    res, err := s.HiuFacing.PostV05UsersAuthOnNotifyJSON(ctx, operations.PostV05UsersAuthOnNotifyJSONRequest{
        Authorization: "tenetur",
        PatientAuthNotificationAcknowledgement: shared.PatientAuthNotificationAcknowledgement{
            Acknowledgement: &shared.PatientAuthNotificationAcknowledgementAcknowledgement{
                Status: shared.PatientAuthNotificationAcknowledgementAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "hic",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "bc7abd74-dd39-4c0f-9d2c-ff7c70a45626",
            },
            Timestamp: types.MustTimeFromString("2022-02-08T20:43:00.221Z"),
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

## PostV05UsersAuthOnNotifyRaw

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


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
    res, err := s.HiuFacing.PostV05UsersAuthOnNotifyRaw(ctx, operations.PostV05UsersAuthOnNotifyRawRequest{
        Authorization: "ratione",
        RequestBody: []byte("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
