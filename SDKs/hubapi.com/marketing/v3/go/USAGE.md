<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest{
        Security: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity{
            PrivateAppsLegacy: &shared.SchemePrivateAppsLegacy{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreatePathParams{
            ExternalEventID: "illum",
            SubscriberState: "non",
        },
        QueryParams: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams{
            ExternalAccountID: "omnis",
        },
        Request: shared.BatchInputMarketingEventSubscriber{
            Inputs: []shared.MarketingEventSubscriber{
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 6625460606341040745,
                    Properties: map[string]string{
                        "repellendus": "quasi",
                        "sequi": "illo",
                    },
                    Vid: 8018450455142408820,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 3807802538545777848,
                    Properties: map[string]string{
                        "velit": "enim",
                        "repellendus": "sed",
                    },
                    Vid: 558040594850452455,
                },
            },
        },
    }
    
    res, err := s.AttendanceSubscriberStateChanges.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchResponseSubscriberVidResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->