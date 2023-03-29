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

    req := operations.CreateAssistantRequest{
        Security: operations.CreateAssistantSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateAssistantCreateAssistantRequest{
            CallbackEvents: "unde",
            CallbackURL: "https://michale.org",
            Defaults: "id",
            FriendlyName: "vero",
            LogQueries: false,
            StyleSheet: "perspiciatis",
            UniqueName: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.CreateAssistant(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1Assistant != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->