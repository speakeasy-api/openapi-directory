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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.DeleteAccountsIDRequest{
        ID: 548814,
    }

    ctx := context.Background()
    res, err := s.Accounts.DeleteAccountsID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->