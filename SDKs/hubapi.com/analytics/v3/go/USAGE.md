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
    
    req := operations.PostEventsV3SendRequest{
        Security: operations.PostEventsV3SendSecurity{
            Hapikey: &shared.SchemeHapikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.BehavioralEventHTTPCompletionRequest{
            Email: "omnis",
            EventName: "consequatur",
            ObjectID: "qui",
            OccurredAt: "2005-12-13T12:52:56Z",
            Properties: map[string]string{
                "qui": "voluptate",
                "laboriosam": "est",
            },
            Utk: "ipsam",
        },
    }
    
    res, err := s.BehavioralEventsTracking.PostEventsV3Send(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->