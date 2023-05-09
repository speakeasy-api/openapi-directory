<!-- Start SDK Example Usage -->
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
                    InteractionDateTime: 592845,
                    Properties: map[string]string{
                        "quibusdam": "unde",
                        "nulla": "corrupti",
                        "illum": "vel",
                    },
                    Vid: sdk.Int(623564),
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 645894,
                    Properties: map[string]string{
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    Vid: sdk.Int(963663),
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 272656,
                    Properties: map[string]string{
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    Vid: sdk.Int(479977),
                },
            },
        },
        ExternalAccountID: sdk.String("excepturi"),
        ExternalEventID: "nisi",
        SubscriberState: "recusandae",
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
<!-- End SDK Example Usage -->