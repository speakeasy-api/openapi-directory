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
        Request: &operations.CreateChannelCreateChannelRequest{
            Attributes: "provident",
            FriendlyName: "ullam",
            Type: "public",
            UniqueName: "libero",
        },
    }
    
    res, err := s.CreateChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->