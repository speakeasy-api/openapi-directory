<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UpdateChannel(ctx, operations.UpdateChannelRequest{
        RequestBody: &operations.UpdateChannelUpdateChannelRequest{
            MessagingServiceSid: sdk.String("corrupti"),
            Type: shared.ChannelEnumChannelTypeEnumPrivate.ToPointer(),
        },
        ServiceSid: "distinctio",
        Sid: "quibusdam",
        XTwilioWebhookEnabled: shared.ChannelEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.UpdateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV3Channel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->