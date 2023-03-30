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
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
            PlaidVersion: shared.SchemePlaidVersion{
                APIKey: "YOUR_API_KEY_HERE",
            },
            Secret: shared.SchemeSecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AccountsBalanceGetRequest{
        Request: shared.AccountsBalanceGetRequest{
            AccessToken: "corrupti",
            ClientID: "provident",
            Options: &shared.AccountsBalanceGetRequestOptions{
                AccountIds: []string{
                    "quibusdam",
                    "unde",
                    "nulla",
                },
                MinLastUpdatedDatetime: "2022-09-12T05:31:49.907Z",
            },
            Secret: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.Plaid.AccountsBalanceGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsGetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->