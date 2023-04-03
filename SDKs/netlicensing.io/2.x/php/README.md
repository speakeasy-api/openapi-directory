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


### license

* `createLicense` - Create License
* `deleteLicense` - Delete License
* `getLicense` - Get License
* `listLicenses` - List Licenses
* `updateLicense` - Update License

### licenseTemplate

* `createLicenseTemplate` - Create License Template
* `deleteLicenseTemplate` - Delete License Template
* `getLicenseTemplate` - Get License Template
* `listLicenseTemplates` - List License Templates
* `updateLicenseTemplate` - Update License Template

### licensee

* `createLicensee` - Create Licensee
* `deleteLicensee` - Delete Licensee
* `getLicensee` - Get Licensee
* `listLicensees` - List Licensees
* `transferLicenses` - Transfer Licenses
* `updateLicensee` - Update Licensee
* `validateLicensee` - Validate Licensee

### paymentMethod

* `getPaymentMethod` - Get Payment Method
* `listPaymentMethods` - List Payment Methods
* `updatePaymentMethod` - Update Payment Method

### product

* `createProduct` - Create Product
* `deleteProduct` - Delete Product
* `listProducts` - List Products
* `productNumber` - Get Product
* `updateProduct` - Update Product

### productModule

* `createProductModule` - Create Product Module
* `deleteProductModule` - Delete Product Module
* `getProductModule` - Get Product Module
* `listProductModules` - List Product Modules
* `updateProductModule` - Update Product Module

### token

* `createToken` - Create token
* `deleteToken` - Delete token
* `getToken` - Get token
* `listTokens` - List Tokens

### transaction

* `createTransaction` - Create Transaction
* `getTransaction` - Get Transaction 
* `listTransactions` - List Transactions
* `updateTransaction` - Update Transaction

### utility

* `licenseTypes` - List License Types
* `licensingModels` - List Licensing Models
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
