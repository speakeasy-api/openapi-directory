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
            ExternalEventID: "amet",
            SubscriberState: "consectetur",
        },
        QueryParams: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams{
            ExternalAccountID: "doloremque",
        },
        Request: shared.BatchInputMarketingEventSubscriber{
            Inputs: []shared.MarketingEventSubscriber{
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 1596208050830488021,
                    Properties: map[string]string{
                        "harum": "ut",
                    },
                    Vid: 7630631086049095972,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 5340899317600091008,
                    Properties: map[string]string{
                        "sit": "voluptas",
                        "sit": "et",
                    },
                    Vid: 7215831375494083812,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 8602367534737535781,
                    Properties: map[string]string{
                        "impedit": "neque",
                        "ipsam": "commodi",
                    },
                    Vid: 3732851331951527695,
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