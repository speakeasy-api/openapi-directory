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

    req := operations.CreateChannelRequest{
        RequestBody: &operations.CreateChannelCreateChannelRequest{
            Attributes: "corrupti",
            CreatedBy: "provident",
            DateCreated: "2021-04-24T16:27:50.833Z",
            DateUpdated: "2021-04-14T16:47:33.722Z",
            FriendlyName: "corrupti",
            Type: "private",
            UniqueName: "vel",
        },
        ServiceSid: "error",
        XTwilioWebhookEnabled: "false",
    }

    ctx := context.Background()
    res, err := s.CreateChannel(ctx, req, operations.CreateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV2ServiceChannel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->