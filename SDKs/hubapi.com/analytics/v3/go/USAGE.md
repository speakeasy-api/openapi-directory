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

    req := operations.PostEventsV3SendRequest{
        Security: operations.PostEventsV3SendSecurity{
            Hapikey: &shared.SchemeHapikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.BehavioralEventHTTPCompletionRequest{
            Email: "Larue_Rau85@yahoo.com",
            EventName: "corrupti",
            ObjectID: "illum",
            OccurredAt: "2022-05-18T09:34:54.894Z",
            Properties: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            Utk: "tempora",
        },
    }

    ctx := context.Background()
    res, err := s.BehavioralEventsTracking.PostEventsV3Send(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->