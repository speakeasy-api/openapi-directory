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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateSubAccountRequest{
        NewSubaccountRequest: shared.NewSubaccountRequest{
            Name: "Subaccount department A",
            Secret: "Password123",
            UsePrimaryAccountBalance: false,
        },
        APIKey: "corrupti",
    }

    ctx := context.Background()
    res, err := s.SubaccountManagement.CreateSubAccount(ctx, req, operations.CreateSubAccountSecurity{
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


### SubaccountManagement

* `CreateSubAccount` - Create subaccount
* `ModifySubaccount` - Modify a subaccount
* `RetrieveSubaccount` - Retrieve a subaccount
* `RetrieveSubaccountsList` - Retrieve list of subaccounts

### Transfers

* `RetrieveBalanceTransfers` - Retrieve list of balance transfers
* `RetrieveCreditTransfers` - Retrieve list of credit transfers
* `TransferBalance` - Transfer balance
* `TransferCredit` - Transfer credit
* `TransferNumber` - Transfer number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
