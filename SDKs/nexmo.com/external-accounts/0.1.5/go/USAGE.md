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
            PageNumber: 2490157273402513042,
            PageSize: 3513062419350002252,
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