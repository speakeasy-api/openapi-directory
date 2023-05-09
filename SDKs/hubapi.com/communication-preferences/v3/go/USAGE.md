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
    res, err := s.Definition.GetCommunicationPreferencesV3DefinitionsGetPage(ctx, operations.GetCommunicationPreferencesV3DefinitionsGetPageSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionDefinitionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->