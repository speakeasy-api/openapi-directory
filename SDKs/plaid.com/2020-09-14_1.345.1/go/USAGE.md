<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ClientID: "YOUR_API_KEY_HERE",
            PlaidVersion: "YOUR_API_KEY_HERE",
            Secret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plaid.AccountsBalanceGet(ctx, shared.AccountsBalanceGetRequest{
        AccessToken: "corrupti",
        ClientID: sdk.String("provident"),
        Options: &shared.AccountsBalanceGetRequestOptions{
            AccountIds: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
            MinLastUpdatedDatetime: types.MustTimeFromString("2021-04-22T12:08:58.275Z"),
        },
        Secret: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsGetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->