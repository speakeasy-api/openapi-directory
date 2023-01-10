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
            ServiceSid: "et",
        },
        Headers: operations.CreateChannelHeaders{
            XTwilioWebhookEnabled: "true",
        },
        Request: &operations.CreateChannelCreateChannelRequest{
            Attributes: "et",
            CreatedBy: "aspernatur",
            DateCreated: "1971-04-03T10:19:30Z",
            DateUpdated: "2000-05-30T07:11:36Z",
            FriendlyName: "deleniti",
            Type: "private",
            UniqueName: "assumenda",
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