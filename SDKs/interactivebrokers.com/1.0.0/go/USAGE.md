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
                CookieAuth: shared.SchemeCookieAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetAccountsRequest{
        QueryParams: operations.GetAccountsQueryParams{
            Account: "praesentium",
        },
    }
    
    res, err := s.AccountAndPortfolio.GetAccounts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccounts200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->