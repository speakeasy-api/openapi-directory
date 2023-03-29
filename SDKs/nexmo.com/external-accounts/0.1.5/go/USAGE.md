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

    req := operations.GetAllAccountsRequest{
        Security: operations.GetAllAccountsSecurity{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        QueryParams: operations.GetAllAccountsQueryParams{
            PageNumber: 1,
            PageSize: 1,
            Provider: "viber_service_msg",
        },
    }

    ctx := context.Background()
    res, err := s.Account.GetAllAccounts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllAccounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->