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

    req := operations.GetCommunicationPreferencesV3DefinitionsGetPageRequest{
        Security: operations.GetCommunicationPreferencesV3DefinitionsGetPageSecurity{
            Hapikey: &shared.SchemeHapikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Definition.GetCommunicationPreferencesV3DefinitionsGetPage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionDefinitionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->