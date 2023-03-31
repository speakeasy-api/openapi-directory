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

    ctx := context.Background()
    res, err := s.Definition.GetCommunicationPreferencesV3DefinitionsGetPage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionDefinitionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->