<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ReportBehaviorRequest{
        Security: operations.ReportBehaviorSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.CreateBehaviorInput{
            BirthDate: "2006-05-01T09:38:06Z",
            Country: "culpa",
            DocumentID: "expedita",
            DocumentType: "consequuntur",
            Email: "dolor",
            FeedbackDate: "2009-11-26T21:53:53Z",
            FirstName: "voluptas",
            LastName: "fugit",
            PhoneNumber: "et",
            Reason: "nihil",
        },
    }
    
    res, err := s.Behavior.ReportBehavior(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BehaviourOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->