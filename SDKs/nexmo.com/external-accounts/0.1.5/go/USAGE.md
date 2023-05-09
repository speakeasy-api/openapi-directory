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
    res, err := s.Account.GetAllAccounts(ctx, operations.GetAllAccountsRequest{
        PageNumber: sdk.Int64(1),
        PageSize: sdk.Int64(1),
        Provider: operations.GetAllAccountsProviderEnumViberServiceMsg.ToPointer(),
    }, operations.GetAllAccountsSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllAccounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->