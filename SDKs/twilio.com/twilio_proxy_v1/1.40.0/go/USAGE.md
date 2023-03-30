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
            ParticipantSid: "corrupti",
            ServiceSid: "provident",
            SessionSid: "distinctio",
        },
        Request: &operations.CreateMessageInteractionCreateMessageInteractionRequest{
            Body: "quibusdam",
            MediaURL: []string{
                "https://moral-star.info",
                "https://present-giggle.info",
                "http://unique-baboon.org",
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