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

    req := operations.CreateConfigurationAddressRequest{
        Security: operations.CreateConfigurationAddressSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateConfigurationAddressCreateConfigurationAddressRequest{
            Address: "5786 Roselyn Throughway",
            AutoCreationConversationServiceSid: "nihil",
            AutoCreationEnabled: false,
            AutoCreationStudioFlowSid: "fuga",
            AutoCreationStudioRetryCount: 645894,
            AutoCreationType: "studio",
            AutoCreationWebhookFilters: []string{
                "ullam",
                "saepe",
            },
            AutoCreationWebhookMethod: "GET",
            AutoCreationWebhookURL: "sapiente",
            FriendlyName: "enim",
            Type: "whatsapp",
        },
    }

    ctx := context.Background()
    res, err := s.CreateConfigurationAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConfigurationAddress != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->