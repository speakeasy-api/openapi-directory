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
    res, err := s.CreateChannel(ctx, operations.CreateChannelRequest{
        RequestBody: &operations.CreateChannelCreateChannelRequest{
            Attributes: sdk.String("corrupti"),
            FriendlyName: sdk.String("provident"),
            Type: shared.ChannelEnumChannelTypeEnumPrivate.ToPointer(),
            UniqueName: sdk.String("quibusdam"),
        },
        ServiceSid: "unde",
    }, operations.CreateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->