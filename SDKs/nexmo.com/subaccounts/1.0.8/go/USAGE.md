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

    req := operations.CreateSubAccountRequest{
        NewSubaccountRequest: shared.NewSubaccountRequest{
            Name: "Subaccount department A",
            Secret: "Password123",
            UsePrimaryAccountBalance: false,
        },
        APIKey: "corrupti",
    }

    ctx := context.Background()
    res, err := s.SubaccountManagement.CreateSubAccount(ctx, req, operations.CreateSubAccountSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubaccountCreateResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->