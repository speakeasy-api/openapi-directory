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

    req := operations.CreateAssistantCreateAssistantRequest{
        CallbackEvents: "corrupti",
        CallbackURL: "https://salty-stag.name",
        Defaults: "nulla",
        FriendlyName: "corrupti",
        LogQueries: false,
        StyleSheet: "illum",
        UniqueName: "vel",
    }

    ctx := context.Background()
    res, err := s.CreateAssistant(ctx, req, operations.CreateAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1Assistant != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->