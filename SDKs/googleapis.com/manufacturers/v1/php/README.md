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
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsLanguagesProductCertificationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManufacturersAccountsLanguagesProductCertificationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->name = 'Dallas Kassulke';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->manufacturersAccountsLanguagesProductCertificationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [manufacturersAccountsLanguagesProductCertificationsDelete](docs/accounts/README.md#manufacturersaccountslanguagesproductcertificationsdelete) - Deletes a product certification by its name. This method can only be called by certification bodies.
* [manufacturersAccountsLanguagesProductCertificationsGet](docs/accounts/README.md#manufacturersaccountslanguagesproductcertificationsget) - Gets a product certification by its name. This method can only be called by certification bodies.
* [manufacturersAccountsLanguagesProductCertificationsList](docs/accounts/README.md#manufacturersaccountslanguagesproductcertificationslist) - Lists product certifications from a specified certification body. This method can only be called by certification bodies.
* [manufacturersAccountsLanguagesProductCertificationsPatch](docs/accounts/README.md#manufacturersaccountslanguagesproductcertificationspatch) - Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.
* [manufacturersAccountsProductsDelete](docs/accounts/README.md#manufacturersaccountsproductsdelete) - Deletes the product from a Manufacturer Center account.
* [manufacturersAccountsProductsGet](docs/accounts/README.md#manufacturersaccountsproductsget) - Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
* [manufacturersAccountsProductsList](docs/accounts/README.md#manufacturersaccountsproductslist) - Lists all the products in a Manufacturer Center account.
* [manufacturersAccountsProductsUpdate](docs/accounts/README.md#manufacturersaccountsproductsupdate) - Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
