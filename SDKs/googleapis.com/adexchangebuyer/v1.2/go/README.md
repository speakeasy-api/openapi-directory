# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/adexchangebuyer/v1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.AdexchangebuyerAccountsGet(ctx, operations.AdexchangebuyerAccountsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("corrupti"),
        ID: 592845,
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        UserIP: sdk.String("nulla"),
    }, operations.AdexchangebuyerAccountsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [AdexchangebuyerAccountsGet](docs/accounts/README.md#adexchangebuyeraccountsget) - Gets one account by ID.
* [AdexchangebuyerAccountsList](docs/accounts/README.md#adexchangebuyeraccountslist) - Retrieves the authenticated user's list of accounts.
* [AdexchangebuyerAccountsPatch](docs/accounts/README.md#adexchangebuyeraccountspatch) - Updates an existing account. This method supports patch semantics.
* [AdexchangebuyerAccountsUpdate](docs/accounts/README.md#adexchangebuyeraccountsupdate) - Updates an existing account.

### [Creatives](docs/creatives/README.md)

* [AdexchangebuyerCreativesGet](docs/creatives/README.md#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [AdexchangebuyerCreativesInsert](docs/creatives/README.md#adexchangebuyercreativesinsert) - Submit a new creative.
* [AdexchangebuyerCreativesList](docs/creatives/README.md#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
