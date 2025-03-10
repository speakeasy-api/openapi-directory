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
    
    req := operations.UpdateChannelRequest{
        Security: operations.UpdateChannelSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.UpdateChannelPathParams{
            ServiceSid: "sit",
            Sid: "voluptas",
        },
        Headers: operations.UpdateChannelHeaders{
            XTwilioWebhookEnabled: "false",
        },
        Request: &operations.UpdateChannelUpdateChannelRequest{
            MessagingServiceSid: "expedita",
            Type: "private",
        },
    }
    
    res, err := s.UpdateChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV3Channel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->