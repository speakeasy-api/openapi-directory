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
        Security: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity{
            Oauth2Legacy: &shared.SchemeOauth2Legacy{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreatePathParams{
            ExternalEventID: "unde",
            SubscriberState: "deserunt",
        },
        QueryParams: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams{
            ExternalAccountID: "porro",
        },
        Request: shared.BatchInputMarketingEventSubscriber{
            Inputs: []shared.MarketingEventSubscriber{
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 602763,
                    Properties: map[string]string{
                        "perspiciatis": "nulla",
                        "nihil": "fuga",
                        "facilis": "eum",
                        "iusto": "ullam",
                    },
                    Vid: 891773,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 56713,
                    Properties: map[string]string{
                        "enim": "eum",
                        "voluptatum": "autem",
                        "vel": "non",
                        "deleniti": "similique",
                    },
                    Vid: 392785,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 925597,
                    Properties: map[string]string{
                        "quasi": "laboriosam",
                        "dicta": "est",
                        "voluptatem": "consequatur",
                        "fugiat": "a",
                    },
                    Vid: 778157,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 140350,
                    Properties: map[string]string{
                        "accusamus": "reiciendis",
                        "rem": "quibusdam",
                        "et": "praesentium",
                        "occaecati": "dolor",
                    },
                    Vid: 678880,
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.AttendanceSubscriberStateChanges.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchResponseSubscriberVidResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->