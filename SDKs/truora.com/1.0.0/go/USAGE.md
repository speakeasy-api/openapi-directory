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

    req := operations.ReportBehaviorRequest{
        Security: operations.ReportBehaviorSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.CreateBehaviorInput{
            BirthDate: "2022-09-10T05:10:14.392Z",
            Country: "gt",
            DocumentID: "porro",
            DocumentType: "general-registration",
            Email: "Ruthie.Little62@yahoo.com",
            FeedbackDate: "2022-08-05T18:44:40.292Z",
            FirstName: "Gerard",
            LastName: "Kertzmann",
            PhoneNumber: "ullam",
            Reason: "confidentiality-breach",
        },
    }

    ctx := context.Background()
    res, err := s.Behavior.ReportBehavior(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BehaviourOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->