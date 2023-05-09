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
    res, err := s.CreateWebChannel(ctx, operations.CreateWebChannelCreateWebChannelRequest{
        AddressSid: "corrupti",
        ChatFriendlyName: sdk.String("provident"),
        CustomerFriendlyName: sdk.String("distinctio"),
        PreEngagementData: sdk.String("quibusdam"),
    }, operations.CreateWebChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV2WebChannel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->