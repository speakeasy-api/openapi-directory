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
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensingLicenseAssignmentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->productId = 'illum';
    $request->quotaUser = 'vel';
    $request->skuId = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';
    $request->userId = 'iure';

    $requestSecurity = new LicensingLicenseAssignmentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseAssignments->licensingLicenseAssignmentsDelete($request, $requestSecurity);

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


### [licenseAssignments](docs/licenseassignments/README.md)

* [licensingLicenseAssignmentsDelete](docs/licenseassignments/README.md#licensinglicenseassignmentsdelete) - Revoke a license.
* [licensingLicenseAssignmentsGet](docs/licenseassignments/README.md#licensinglicenseassignmentsget) - Get a specific user's license by product SKU.
* [licensingLicenseAssignmentsInsert](docs/licenseassignments/README.md#licensinglicenseassignmentsinsert) - Assign a license.
* [licensingLicenseAssignmentsListForProduct](docs/licenseassignments/README.md#licensinglicenseassignmentslistforproduct) - List all users assigned licenses for a specific product SKU.
* [licensingLicenseAssignmentsListForProductAndSku](docs/licenseassignments/README.md#licensinglicenseassignmentslistforproductandsku) - List all users assigned licenses for a specific product SKU.
* [licensingLicenseAssignmentsPatch](docs/licenseassignments/README.md#licensinglicenseassignmentspatch) - Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
* [licensingLicenseAssignmentsUpdate](docs/licenseassignments/README.md#licensinglicenseassignmentsupdate) - Reassign a user's product SKU with a different SKU in the same product.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
