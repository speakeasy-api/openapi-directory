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
            ExternalEventID: "sit",
            SubscriberState: "voluptas",
        },
        QueryParams: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams{
            ExternalAccountID: "culpa",
        },
        Request: shared.BatchInputMarketingEventSubscriber{
            Inputs: []shared.MarketingEventSubscriber{
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 3390393562759376202,
                    Properties: map[string]string{
                        "expedita": "voluptas",
                        "fugit": "et",
                    },
                    Vid: 2661732831099943416,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 8325060299420976708,
                    Properties: map[string]string{
                        "debitis": "voluptatum",
                        "et": "ut",
                        "dolorem": "et",
                    },
                    Vid: 7373105480197164748,
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