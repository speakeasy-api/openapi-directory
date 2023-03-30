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
            OccurredAt: "2022-10-26T11:52:58.825Z",
            Properties: map[string]string{
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Utk: "delectus",
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