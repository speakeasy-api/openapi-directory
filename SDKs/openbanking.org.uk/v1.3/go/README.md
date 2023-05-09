# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openbanking.org.uk/v1.3/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Atm.GetAtms(ctx, operations.GetAtmsRequest{
        IfModifiedSince: sdk.String("corrupti"),
        IfNoneMatch: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Atm](docs/atm/README.md)

* [GetAtms](docs/atm/README.md#getatms) - Gets a list of all `ATM` objects.
* [HeadAtms](docs/atm/README.md#headatms) - Gets header information on the current set of `ATM` data

### [Bca](docs/bca/README.md)

* [GetBusinessCurrentAccounts](docs/bca/README.md#getbusinesscurrentaccounts) - Gets a list of all `Branch Current Account` objects.
* [HeadBusinessCurrentAccounts](docs/bca/README.md#headbusinesscurrentaccounts) - Gets header information on the current set of `Business Current Account` data

### [Branch](docs/branch/README.md)

* [GetBranches](docs/branch/README.md#getbranches) - Gets a list of all `Branch` objects.
* [HeadBranches](docs/branch/README.md#headbranches) - Gets header information on the current set of `Branch` data

### [Ccc](docs/ccc/README.md)

* [GetCommercialCreditCards](docs/ccc/README.md#getcommercialcreditcards) - Gets a list of all `Commerical Credit Card` objects.
* [HeadCommercialCreditCards](docs/ccc/README.md#headcommercialcreditcards) - Gets header information on the current set of `Commerical Credit Card` data

### [Pca](docs/pca/README.md)

* [GetPersonalCurrentAccounts](docs/pca/README.md#getpersonalcurrentaccounts) - Gets a list of all `Personal Current Account` objects.
* [HeadPersonalCurrentAccounts](docs/pca/README.md#headpersonalcurrentaccounts) - Gets header information on the current set of `Personal Current Account` data

### [Sme](docs/sme/README.md)

* [GetUnsecuredSmeLoans](docs/sme/README.md#getunsecuredsmeloans) - Gets a list of all `Unsercured SME Lending` objects.
* [HeadUnsecuredSmeLoans](docs/sme/README.md#headunsecuredsmeloans) - Gets header information on the current set of `Unsercured SME Lending` data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
