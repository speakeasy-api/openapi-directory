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
            Address: "eligendi",
            AutoCreationConversationServiceSid: "autem",
            AutoCreationEnabled: false,
            AutoCreationStudioFlowSid: "exercitationem",
            AutoCreationStudioRetryCount: 4393547049641346161,
            AutoCreationType: "webhook",
            AutoCreationWebhookFilters: []string{
                "sequi",
            },
            AutoCreationWebhookMethod: "GET",
            AutoCreationWebhookURL: "occaecati",
            FriendlyName: "officia",
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