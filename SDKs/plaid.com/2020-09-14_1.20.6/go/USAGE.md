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
                ClientID: shared.SchemeClientID{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                PlaidVersion: shared.SchemePlaidVersion{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                Secret: shared.SchemeSecret{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AccountsBalanceGetRequest{
        Request: shared.AccountsBalanceGetRequest{
            AccessToken: "sit",
            ClientID: "voluptas",
            Options: &shared.AccountsBalanceGetRequestOptions{
                AccountIds: []string{
                    "expedita",
                    "consequuntur",
                },
                MinLastUpdatedDatetime: "2003-04-20T23:11:44Z",
            },
            Secret: "expedita",
        },
    }
    
    res, err := s.Plaid.AccountsBalanceGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsGetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->