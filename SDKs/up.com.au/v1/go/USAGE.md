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
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        }),
    )

    req := operations.GetAccountsRequest{
        QueryParams: operations.GetAccountsQueryParams{
            FilterAccountType: "TRANSACTIONAL",
            FilterOwnershipType: "JOINT",
            PageSize: 715190,
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.GetAccounts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->