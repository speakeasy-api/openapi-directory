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

    req := operations.CreateConfigurationAddressCreateConfigurationAddressRequest{
        Address: "5786 Little Streets",
        AutoCreationConversationServiceSid: "vel",
        AutoCreationEnabled: false,
        AutoCreationStudioFlowSid: "error",
        AutoCreationStudioRetryCount: 645894,
        AutoCreationType: "studio",
        AutoCreationWebhookFilters: []string{
            "magnam",
            "debitis",
        },
        AutoCreationWebhookMethod: "GET",
        AutoCreationWebhookURL: "delectus",
        FriendlyName: "tempora",
        Type: "whatsapp",
    }

    ctx := context.Background()
    res, err := s.CreateConfigurationAddress(ctx, req, operations.CreateConfigurationAddressSecurity{
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