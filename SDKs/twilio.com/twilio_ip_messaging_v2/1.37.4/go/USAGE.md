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
            ServiceSid: "nemo",
        },
        Headers: operations.CreateChannelHeaders{
            XTwilioWebhookEnabled: "true",
        },
        Request: &operations.CreateChannelCreateChannelRequest{
            Attributes: "occaecati",
            CreatedBy: "consequatur",
            DateCreated: "2020-02-23T18:59:01Z",
            DateUpdated: "1978-01-03T06:54:16Z",
            FriendlyName: "fuga",
            Type: "public",
            UniqueName: "quis",
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