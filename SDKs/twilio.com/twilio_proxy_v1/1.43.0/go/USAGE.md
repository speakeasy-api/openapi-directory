<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateMessageInteraction(ctx, operations.CreateMessageInteractionRequest{
        ParticipantSid: "corrupti",
        RequestBody: &operations.CreateMessageInteractionCreateMessageInteractionRequest{
            Body: sdk.String("provident"),
            MediaURL: []string{
                "https://outstanding-strait.name",
                "https://impressive-ox.name",
                "http://innocent-effect.org",
            },
        },
        ServiceSid: "ipsa",
        SessionSid: "delectus",
    }, operations.CreateMessageInteractionSecurity{
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