# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### atm

* `getAtms` - Gets a list of all `ATM` objects.
* `headAtms` - Gets header information on the current set of `ATM` data

### bca

* `getBusinessCurrentAccounts` - Gets a list of all `Branch Current Account` objects.
* `headBusinessCurrentAccounts` - Gets header information on the current set of `Business Current Account` data

### branch

* `getBranches` - Gets a list of all `Branch` objects.
* `headBranches` - Gets header information on the current set of `Branch` data

### ccc

* `getCommercialCreditCards` - Gets a list of all `Commerical Credit Card` objects.
* `headCommercialCreditCards` - Gets header information on the current set of `Commerical Credit Card` data

### pca

* `getPersonalCurrentAccounts` - Gets a list of all `Personal Current Account` objects.
* `headPersonalCurrentAccounts` - Gets header information on the current set of `Personal Current Account` data

### sme

* `getUnsecuredSmeLoans` - Gets a list of all `Unsercured SME Lending` objects.
* `headUnsecuredSmeLoans` - Gets header information on the current set of `Unsercured SME Lending` data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
