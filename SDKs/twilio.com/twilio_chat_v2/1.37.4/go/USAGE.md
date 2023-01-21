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
    
    req := operations.CreateChannelRequest{
        Security: operations.CreateChannelSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateChannelPathParams{
            ServiceSid: "sit",
        },
        Headers: operations.CreateChannelHeaders{
            XTwilioWebhookEnabled: "true",
        },
        Request: &operations.CreateChannelCreateChannelRequest{
            Attributes: "culpa",
            CreatedBy: "expedita",
            DateCreated: "1997-12-26T13:41:25Z",
            DateUpdated: "2003-04-20T23:11:44Z",
            FriendlyName: "expedita",
            Type: "private",
            UniqueName: "fugit",
        },
    }
    
    res, err := s.CreateChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->