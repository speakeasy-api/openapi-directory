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
        Request: &operations.CreateChannelCreateChannelRequest{
            ChatFriendlyName: "unde",
            ChatUniqueName: "deserunt",
            ChatUserFriendlyName: "porro",
            FlexFlowSid: "nulla",
            Identity: "id",
            LongLived: false,
            PreEngagementData: "vero",
            Target: "perspiciatis",
            TaskAttributes: "nulla",
            TaskSid: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.CreateChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1Channel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->