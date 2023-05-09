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
    res, err := s.CreateConfigurationAddress(ctx, operations.CreateConfigurationAddressCreateConfigurationAddressRequest{
        Address: "5786 Little Streets",
        AutoCreationConversationServiceSid: sdk.String("vel"),
        AutoCreationEnabled: sdk.Bool(false),
        AutoCreationStudioFlowSid: sdk.String("error"),
        AutoCreationStudioRetryCount: sdk.Int64(645894),
        AutoCreationType: shared.ConfigurationAddressEnumAutoCreationTypeEnumStudio.ToPointer(),
        AutoCreationWebhookFilters: []string{
            "magnam",
            "debitis",
        },
        AutoCreationWebhookMethod: shared.ConfigurationAddressEnumMethodEnumGet.ToPointer(),
        AutoCreationWebhookURL: sdk.String("delectus"),
        FriendlyName: sdk.String("tempora"),
        Type: shared.ConfigurationAddressEnumTypeEnumWhatsapp,
    }, operations.CreateConfigurationAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConfigurationAddress != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->