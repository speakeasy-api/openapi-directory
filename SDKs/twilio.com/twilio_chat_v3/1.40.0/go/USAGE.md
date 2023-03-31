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

    req := operations.UpdateChannelRequest{
        RequestBody: &operations.UpdateChannelUpdateChannelRequest{
            MessagingServiceSid: "corrupti",
            Type: "private",
        },
        ServiceSid: "distinctio",
        Sid: "quibusdam",
        XTwilioWebhookEnabled: "false",
    }

    ctx := context.Background()
    res, err := s.UpdateChannel(ctx, req, operations.UpdateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV3Channel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->