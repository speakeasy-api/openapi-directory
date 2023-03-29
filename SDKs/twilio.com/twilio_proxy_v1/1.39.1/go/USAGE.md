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

    req := operations.CreateMessageInteractionRequest{
        Security: operations.CreateMessageInteractionSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateMessageInteractionPathParams{
            ParticipantSid: "unde",
            ServiceSid: "deserunt",
            SessionSid: "porro",
        },
        Request: &operations.CreateMessageInteractionCreateMessageInteractionRequest{
            Body: "nulla",
            MediaURL: []string{
                "https://karlee.org",
                "http://linda.name",
                "http://humberto.biz",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateMessageInteraction(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSessionParticipantMessageInteraction != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->