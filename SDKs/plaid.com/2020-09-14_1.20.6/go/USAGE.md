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
            AccessToken: "cum",
            ClientID: "unde",
            Options: &shared.AccountsBalanceGetRequestOptions{
                AccountIds: []string{
                    "possimus",
                    "voluptate",
                },
                MinLastUpdatedDatetime: "1974-05-29T19:38:19Z",
            },
            Secret: "quo",
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