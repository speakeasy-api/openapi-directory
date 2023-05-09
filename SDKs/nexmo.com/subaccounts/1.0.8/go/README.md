# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nexmo.com/subaccounts/1.0.8/go
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
    res, err := s.SubaccountManagement.CreateSubAccount(ctx, operations.CreateSubAccountRequest{
        NewSubaccountRequest: shared.NewSubaccountRequest{
            Name: "Subaccount department A",
            Secret: sdk.String("Password123"),
            UsePrimaryAccountBalance: sdk.Bool(false),
        },
        APIKey: "corrupti",
    }, operations.CreateSubAccountSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubaccountCreateResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [SubaccountManagement](docs/subaccountmanagement/README.md)

* [CreateSubAccount](docs/subaccountmanagement/README.md#createsubaccount) - Create subaccount
* [ModifySubaccount](docs/subaccountmanagement/README.md#modifysubaccount) - Modify a subaccount
* [RetrieveSubaccount](docs/subaccountmanagement/README.md#retrievesubaccount) - Retrieve a subaccount
* [RetrieveSubaccountsList](docs/subaccountmanagement/README.md#retrievesubaccountslist) - Retrieve list of subaccounts

### [Transfers](docs/transfers/README.md)

* [RetrieveBalanceTransfers](docs/transfers/README.md#retrievebalancetransfers) - Retrieve list of balance transfers
* [RetrieveCreditTransfers](docs/transfers/README.md#retrievecredittransfers) - Retrieve list of credit transfers
* [TransferBalance](docs/transfers/README.md#transferbalance) - Transfer balance
* [TransferCredit](docs/transfers/README.md#transfercredit) - Transfer credit
* [TransferNumber](docs/transfers/README.md#transfernumber) - Transfer number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
