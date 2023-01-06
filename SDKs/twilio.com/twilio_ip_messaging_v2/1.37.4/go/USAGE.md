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
            ServiceSid: "eos",
        },
        Headers: operations.CreateChannelHeaders{
            XTwilioWebhookEnabled: "false",
        },
        Request: &operations.CreateChannelCreateChannelRequest{
            Attributes: "ut",
            CreatedBy: "maiores",
            DateCreated: "1989-03-09T19:12:40Z",
            DateUpdated: "1980-12-24T21:03:57Z",
            FriendlyName: "ipsum",
            Type: "private",
            UniqueName: "ut",
        },
    }
    
    res, err := s.CreateChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV2ServiceChannel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->