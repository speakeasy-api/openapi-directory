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
            PageNumber: 320452589942240589,
            PageSize: 8077343311452570016,
            Provider: "whatsapp",
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