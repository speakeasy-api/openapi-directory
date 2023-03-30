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
            BirthDate: "2021-10-25T05:21:43.948Z",
            Country: "cr",
            DocumentID: "quibusdam",
            DocumentType: "name",
            Email: "Karley_Stamm@hotmail.com",
            FeedbackDate: "2022-03-26T09:37:56.283Z",
            FirstName: "Hunter",
            LastName: "Gulgowski",
            PhoneNumber: "debitis",
            Reason: "rape",
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