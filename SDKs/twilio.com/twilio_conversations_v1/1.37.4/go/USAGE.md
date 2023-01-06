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
            Address: "nisi",
            AutoCreationConversationServiceSid: "doloribus",
            AutoCreationEnabled: false,
            AutoCreationStudioFlowSid: "cum",
            AutoCreationStudioRetryCount: 1660654173279779136,
            AutoCreationType: "webhook",
            AutoCreationWebhookFilters: []string{
                "alias",
            },
            AutoCreationWebhookMethod: "GET",
            AutoCreationWebhookURL: "deleniti",
            FriendlyName: "quo",
            Type: "sms",
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