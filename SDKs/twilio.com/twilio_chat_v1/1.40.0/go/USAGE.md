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
        RequestBody: &operations.CreateChannelCreateChannelRequest{
            Attributes: "corrupti",
            FriendlyName: "provident",
            Type: "private",
            UniqueName: "quibusdam",
        },
        ServiceSid: "unde",
    }

    ctx := context.Background()
    res, err := s.CreateChannel(ctx, req, operations.CreateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV1ServiceChannel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->