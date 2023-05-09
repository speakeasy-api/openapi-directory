# AttendanceSubscriberStateChanges

## Overview

Operations to mark HubSpot contacts as registered, attended or cancelled a registration to a Marketing Event.

### Available Operations

* [PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate](#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstatecreatecreate) - Record
* [PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmail](#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstateemailcreatecreatebyemail) - Record

## PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate

Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.

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
    res, err := s.AttendanceSubscriberStateChanges.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate(ctx, operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest{
        BatchInputMarketingEventSubscriber: shared.BatchInputMarketingEventSubscriber{
            Inputs: []shared.MarketingEventSubscriber{
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 71036,
                    Properties: map[string]string{
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                    },
                    Vid: sdk.Int(832620),
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 957156,
                    Properties: map[string]string{
                        "odit": "at",
                        "at": "maiores",
                        "molestiae": "quod",
                        "quod": "esse",
                    },
                    Vid: sdk.Int(520478),
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 780529,
                    Properties: map[string]string{
                        "dicta": "nam",
                        "officia": "occaecati",
                        "fugit": "deleniti",
                    },
                    Vid: sdk.Int(944669),
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 758616,
                    Properties: map[string]string{
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                    Vid: sdk.Int(736918),
                },
            },
        },
        ExternalAccountID: sdk.String("esse"),
        ExternalEventID: "ipsum",
        SubscriberState: "excepturi",
    }, operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchResponseSubscriberVidResponse != nil {
        // handle response
    }
}
```

## PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmail

Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. If you set params 

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
    res, err := s.AttendanceSubscriberStateChanges.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmail(ctx, operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailRequest{
        BatchInputMarketingEventEmailSubscriber: shared.BatchInputMarketingEventEmailSubscriber{
            Inputs: []shared.MarketingEventEmailSubscriber{
                shared.MarketingEventEmailSubscriber{
                    ContactProperties: map[string]string{
                        "ad": "natus",
                    },
                    Email: "Leora.Fadel@gmail.com",
                    InteractionDateTime: 943749,
                    Properties: map[string]string{
                        "fuga": "in",
                        "corporis": "iste",
                        "iure": "saepe",
                        "quidem": "architecto",
                    },
                },
            },
        },
        ExternalAccountID: sdk.String("ipsa"),
        ExternalEventID: "reiciendis",
        SubscriberState: "est",
    }, operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchResponseSubscriberEmailResponse != nil {
        // handle response
    }
}
```
