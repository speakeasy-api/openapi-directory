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
    
    req := operations.CreateMessageInteractionRequest{
        Security: operations.CreateMessageInteractionSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateMessageInteractionPathParams{
            ParticipantSid: "sed",
            ServiceSid: "esse",
            SessionSid: "non",
        },
        Request: &operations.CreateMessageInteractionCreateMessageInteractionRequest{
            Body: "ipsa",
            MediaURL: []string{
                "repudiandae",
            },
        },
    }
    
    res, err := s.CreateMessageInteraction(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSessionParticipantMessageInteraction != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->