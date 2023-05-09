<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateChannel(ctx, operations.CreateChannelRequest{
        RequestBody: &operations.CreateChannelCreateChannelRequest{
            Attributes: sdk.String("corrupti"),
            CreatedBy: sdk.String("provident"),
            DateCreated: types.MustTimeFromString("2021-04-24T16:27:50.833Z"),
            DateUpdated: types.MustTimeFromString("2021-04-14T16:47:33.722Z"),
            FriendlyName: sdk.String("corrupti"),
            Type: shared.ChannelEnumChannelTypeEnumPrivate.ToPointer(),
            UniqueName: sdk.String("vel"),
        },
        ServiceSid: "error",
        XTwilioWebhookEnabled: shared.ChannelEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.CreateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV2ServiceChannel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->