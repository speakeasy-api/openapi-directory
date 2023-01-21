<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BearerAuth: shared.SchemeBearerAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetAccountsRequest{
        QueryParams: operations.GetAccountsQueryParams{
            PageSize: 8717895732742165505,
        },
    }
    
    res, err := s.Accounts.GetAccounts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->