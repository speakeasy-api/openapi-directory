<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest{
        BatchInputMarketingEventSubscriber: shared.BatchInputMarketingEventSubscriber{
            Inputs: []shared.MarketingEventSubscriber{
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 592845,
                    Properties: map[string]string{
                        "quibusdam": "unde",
                        "nulla": "corrupti",
                        "illum": "vel",
                    },
                    Vid: 623564,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 645894,
                    Properties: map[string]string{
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    Vid: 963663,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 272656,
                    Properties: map[string]string{
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    Vid: 479977,
                },
            },
        },
        ExternalAccountID: "excepturi",
        ExternalEventID: "nisi",
        SubscriberState: "recusandae",
    }

    ctx := context.Background()
    res, err := s.AttendanceSubscriberStateChanges.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate(ctx, req, operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity{
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
<!-- End SDK Example Usage -->