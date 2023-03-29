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

    req := operations.CreateAlphaSenderRequest{
        Security: operations.CreateAlphaSenderSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateAlphaSenderPathParams{
            ServiceSid: "unde",
        },
        Request: &operations.CreateAlphaSenderCreateAlphaSenderRequest{
            AlphaSender: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.CreateAlphaSender(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceAlphaSender != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->