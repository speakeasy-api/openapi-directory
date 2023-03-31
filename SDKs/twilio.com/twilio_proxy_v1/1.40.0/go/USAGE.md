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
        ParticipantSid: "corrupti",
        RequestBody: &operations.CreateMessageInteractionCreateMessageInteractionRequest{
            Body: "provident",
            MediaURL: []string{
                "https://outstanding-strait.name",
                "https://impressive-ox.name",
                "http://innocent-effect.org",
            },
        },
        ServiceSid: "ipsa",
        SessionSid: "delectus",
    }

    ctx := context.Background()
    res, err := s.CreateMessageInteraction(ctx, req, operations.CreateMessageInteractionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSessionParticipantMessageInteraction != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->