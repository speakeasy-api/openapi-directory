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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.GetAccounts(ctx, operations.GetAccountsRequest{
        FilterAccountType: shared.AccountTypeEnumEnumTransactional.ToPointer(),
        FilterOwnershipType: shared.OwnershipTypeEnumEnumJoint.ToPointer(),
        PageSize: sdk.Int64(715190),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->