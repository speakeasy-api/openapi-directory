<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateAssistant(ctx, operations.CreateAssistantCreateAssistantRequest{
        CallbackEvents: sdk.String("corrupti"),
        CallbackURL: sdk.String("https://salty-stag.name"),
        Defaults: sdk.String("nulla"),
        FriendlyName: sdk.String("corrupti"),
        LogQueries: sdk.Bool(false),
        StyleSheet: sdk.String("illum"),
        UniqueName: sdk.String("vel"),
    }, operations.CreateAssistantSecurity{
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