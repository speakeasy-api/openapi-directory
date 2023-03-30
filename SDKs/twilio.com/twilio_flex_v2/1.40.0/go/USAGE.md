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

    req := operations.CreateWebChannelRequest{
        Security: operations.CreateWebChannelSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateWebChannelCreateWebChannelRequest{
            AddressSid: "corrupti",
            ChatFriendlyName: "provident",
            CustomerFriendlyName: "distinctio",
            PreEngagementData: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.CreateWebChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV2WebChannel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->