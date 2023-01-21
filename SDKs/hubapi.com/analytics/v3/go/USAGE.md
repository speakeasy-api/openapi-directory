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
            Email: "sit",
            EventName: "voluptas",
            ObjectID: "culpa",
            OccurredAt: "2019-04-21T07:38:14Z",
            Properties: map[string]string{
                "dolor": "expedita",
                "voluptas": "fugit",
                "et": "nihil",
            },
            Utk: "rerum",
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