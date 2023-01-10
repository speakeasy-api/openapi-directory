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
    
    req := operations.CreateAssistantRequest{
        Security: operations.CreateAssistantSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateAssistantCreateAssistantRequest{
            CallbackEvents: "accusantium",
            CallbackURL: "blanditiis",
            Defaults: "itaque",
            FriendlyName: "quo",
            LogQueries: true,
            StyleSheet: "temporibus",
            UniqueName: "ut",
        },
    }
    
    res, err := s.CreateAssistant(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1Assistant != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->