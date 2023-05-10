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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLicenseRequestBody();
    $request->active = false;
    $request->currency = 'corrupti';
    $request->hidden = false;
    $request->licenseTemplateNumber = 'provident';
    $request->licenseeNumber = 'distinctio';
    $request->name = 'Stuart Stiedemann';
    $request->number = 'vel';
    $request->parentfeature = 'error';
    $request->price = 6458.94;
    $request->quantity = 'suscipit';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T09:35:47.986Z');
    $request->timeVolume = 'debitis';
    $request->timeVolumePeriod = 'ipsa';
    $request->usedQuantity = 'delectus';

    $requestSecurity = new CreateLicenseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->license->createLicense($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [license](docs/license/README.md)

* [createLicense](docs/license/README.md#createlicense) - Create License
* [deleteLicense](docs/license/README.md#deletelicense) - Delete License
* [getLicense](docs/license/README.md#getlicense) - Get License
* [listLicenses](docs/license/README.md#listlicenses) - List Licenses
* [updateLicense](docs/license/README.md#updatelicense) - Update License

### [licenseTemplate](docs/licensetemplate/README.md)

* [createLicenseTemplate](docs/licensetemplate/README.md#createlicensetemplate) - Create License Template
* [deleteLicenseTemplate](docs/licensetemplate/README.md#deletelicensetemplate) - Delete License Template
* [getLicenseTemplate](docs/licensetemplate/README.md#getlicensetemplate) - Get License Template
* [listLicenseTemplates](docs/licensetemplate/README.md#listlicensetemplates) - List License Templates
* [updateLicenseTemplate](docs/licensetemplate/README.md#updatelicensetemplate) - Update License Template

### [licensee](docs/licensee/README.md)

* [createLicensee](docs/licensee/README.md#createlicensee) - Create Licensee
* [deleteLicensee](docs/licensee/README.md#deletelicensee) - Delete Licensee
* [getLicensee](docs/licensee/README.md#getlicensee) - Get Licensee
* [listLicensees](docs/licensee/README.md#listlicensees) - List Licensees
* [transferLicenses](docs/licensee/README.md#transferlicenses) - Transfer Licenses
* [updateLicensee](docs/licensee/README.md#updatelicensee) - Update Licensee
* [validateLicensee](docs/licensee/README.md#validatelicensee) - Validate Licensee

### [paymentMethod](docs/paymentmethod/README.md)

* [getPaymentMethod](docs/paymentmethod/README.md#getpaymentmethod) - Get Payment Method
* [listPaymentMethods](docs/paymentmethod/README.md#listpaymentmethods) - List Payment Methods
* [updatePaymentMethod](docs/paymentmethod/README.md#updatepaymentmethod) - Update Payment Method

### [product](docs/product/README.md)

* [createProduct](docs/product/README.md#createproduct) - Create Product
* [deleteProduct](docs/product/README.md#deleteproduct) - Delete Product
* [listProducts](docs/product/README.md#listproducts) - List Products
* [productNumber](docs/product/README.md#productnumber) - Get Product
* [updateProduct](docs/product/README.md#updateproduct) - Update Product

### [productModule](docs/productmodule/README.md)

* [createProductModule](docs/productmodule/README.md#createproductmodule) - Create Product Module
* [deleteProductModule](docs/productmodule/README.md#deleteproductmodule) - Delete Product Module
* [getProductModule](docs/productmodule/README.md#getproductmodule) - Get Product Module
* [listProductModules](docs/productmodule/README.md#listproductmodules) - List Product Modules
* [updateProductModule](docs/productmodule/README.md#updateproductmodule) - Update Product Module

### [token](docs/token/README.md)

* [createToken](docs/token/README.md#createtoken) - Create token
* [deleteToken](docs/token/README.md#deletetoken) - Delete token
* [getToken](docs/token/README.md#gettoken) - Get token
* [listTokens](docs/token/README.md#listtokens) - List Tokens

### [transaction](docs/transaction/README.md)

* [createTransaction](docs/transaction/README.md#createtransaction) - Create Transaction
* [getTransaction](docs/transaction/README.md#gettransaction) - Get Transaction 
* [listTransactions](docs/transaction/README.md#listtransactions) - List Transactions
* [updateTransaction](docs/transaction/README.md#updatetransaction) - Update Transaction

### [utility](docs/utility/README.md)

* [licenseTypes](docs/utility/README.md#licensetypes) - List License Types
* [licensingModels](docs/utility/README.md#licensingmodels) - List Licensing Models
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
