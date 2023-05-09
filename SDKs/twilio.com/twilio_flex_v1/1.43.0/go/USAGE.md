<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateChannel(ctx, operations.CreateChannelCreateChannelRequest{
        ChatFriendlyName: "corrupti",
        ChatUniqueName: sdk.String("provident"),
        ChatUserFriendlyName: "distinctio",
        FlexFlowSid: "quibusdam",
        Identity: "unde",
        LongLived: sdk.Bool(false),
        PreEngagementData: sdk.String("nulla"),
        Target: sdk.String("corrupti"),
        TaskAttributes: sdk.String("illum"),
        TaskSid: sdk.String("vel"),
    }, operations.CreateChannelSecurity{
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