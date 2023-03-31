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

    req := operations.CreateChannelCreateChannelRequest{
        ChatFriendlyName: "corrupti",
        ChatUniqueName: "provident",
        ChatUserFriendlyName: "distinctio",
        FlexFlowSid: "quibusdam",
        Identity: "unde",
        LongLived: false,
        PreEngagementData: "nulla",
        Target: "corrupti",
        TaskAttributes: "illum",
        TaskSid: "vel",
    }

    ctx := context.Background()
    res, err := s.CreateChannel(ctx, req, operations.CreateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1Channel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->