<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetAllAccountsRequest{
        Security: operations.GetAllAccountsSecurity{
            BearerAuth: &shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetAllAccountsQueryParams{
            PageNumber: 8717895732742165505,
            PageSize: 2259404117704393152,
            Provider: "viber_service_msg",
        },
    }
    
    res, err := s.Account.GetAllAccounts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllAccounts200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->