<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Address: "sit",
            AutoCreationConversationServiceSid: "voluptas",
            AutoCreationEnabled: true,
            AutoCreationStudioFlowSid: "expedita",
            AutoCreationStudioRetryCount: 3390393562759376202,
            AutoCreationType: "studio",
            AutoCreationWebhookFilters: []string{
                "voluptas",
                "fugit",
            },
            AutoCreationWebhookMethod: "GET",
            AutoCreationWebhookURL: "nihil",
            FriendlyName: "rerum",
            Type: "gbm",
        },
    }
    
    res, err := s.CreateConfigurationAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConfigurationAddress != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->