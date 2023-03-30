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
            BirthDate: "2022-09-10T19:07:35.911Z",
            Country: "gt",
            DocumentID: "distinctio",
            DocumentType: "general-registration",
            Email: "Ryan.Little62@yahoo.com",
            FeedbackDate: "2022-08-06T08:42:01.806Z",
            FirstName: "Gerda",
            LastName: "Kertzmann",
            PhoneNumber: "magnam",
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