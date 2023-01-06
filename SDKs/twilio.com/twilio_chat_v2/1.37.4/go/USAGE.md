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
            ServiceSid: "voluptatem",
        },
        Headers: operations.CreateChannelHeaders{
            XTwilioWebhookEnabled: "false",
        },
        Request: &operations.CreateChannelCreateChannelRequest{
            Attributes: "perferendis",
            CreatedBy: "velit",
            DateCreated: "1997-12-18T00:02:12Z",
            DateUpdated: "1992-09-30T16:24:15Z",
            FriendlyName: "porro",
            Type: "public",
            UniqueName: "facere",
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