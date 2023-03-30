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
            JwtAuth: shared.SchemeJwtAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        }),
    )

    req := operations.AccountsBalancesRetrieveRequest{
        PathParams: operations.AccountsBalancesRetrievePathParams{
            ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AccountsBalancesRetrieve(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->