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
            AccessToken: "blanditiis",
            ClientID: "ut",
            Options: &shared.AccountsBalanceGetRequestOptions{
                AccountIds: []string{
                    "est",
                    "exercitationem",
                    "similique",
                },
                MinLastUpdatedDatetime: "2022-01-29T17:57:03Z",
            },
            Secret: "voluptates",
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