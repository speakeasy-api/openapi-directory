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
            TokenAuth: shared.SchemeTokenAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.RetrieveAccountBalancesRequest{
        PathParams: operations.RetrieveAccountBalancesPathParams{
            ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.RetrieveAccountBalances(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->