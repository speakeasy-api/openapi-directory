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
        Security: operations.CreateChannelSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateChannelPathParams{
            ServiceSid: "corrupti",
        },
        Headers: operations.CreateChannelHeaders{
            XTwilioWebhookEnabled: "false",
        },
        Request: &operations.CreateChannelCreateChannelRequest{
            Attributes: "distinctio",
            CreatedBy: "quibusdam",
            DateCreated: "2022-08-22T02:57:43.009Z",
            DateUpdated: "2022-05-20T23:33:55.845Z",
            FriendlyName: "corrupti",
            Type: "private",
            UniqueName: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.CreateChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->