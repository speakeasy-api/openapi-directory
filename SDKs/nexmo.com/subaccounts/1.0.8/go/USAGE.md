<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SubaccountManagement.CreateSubAccount(ctx, operations.CreateSubAccountRequest{
        NewSubaccountRequest: shared.NewSubaccountRequest{
            Name: "Subaccount department A",
            Secret: sdk.String("Password123"),
            UsePrimaryAccountBalance: sdk.Bool(false),
        },
        APIKey: "corrupti",
    }, operations.CreateSubAccountSecurity{
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