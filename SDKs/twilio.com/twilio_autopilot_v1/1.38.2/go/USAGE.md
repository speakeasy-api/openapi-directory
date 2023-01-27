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
            CallbackEvents: "sit",
            CallbackURL: "voluptas",
            Defaults: "culpa",
            FriendlyName: "expedita",
            LogQueries: true,
            StyleSheet: "dolor",
            UniqueName: "expedita",
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