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
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileSecurity;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsloginUsersGetLoginProfileRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->name = 'Dallas Kassulke';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->projectId = 'iure';
    $request->quotaUser = 'magnam';
    $request->systemId = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';
    $request->view = OsloginUsersGetLoginProfileViewEnum::LOGIN_PROFILE_VIEW_UNSPECIFIED;

    $requestSecurity = new OsloginUsersGetLoginProfileSecurity();
    $requestSecurity->option1 = new OsloginUsersGetLoginProfileSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->osloginUsersGetLoginProfile($request, $requestSecurity);

    if ($response->loginProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [users](docs/users/README.md)

* [osloginUsersGetLoginProfile](docs/users/README.md#osloginusersgetloginprofile) - Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
* [osloginUsersImportSshPublicKey](docs/users/README.md#osloginusersimportsshpublickey) - Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
* [osloginUsersSshPublicKeysCreate](docs/users/README.md#osloginuserssshpublickeyscreate) - Create an SSH public key
* [osloginUsersSshPublicKeysDelete](docs/users/README.md#osloginuserssshpublickeysdelete) - Deletes an SSH public key.
* [osloginUsersSshPublicKeysGet](docs/users/README.md#osloginuserssshpublickeysget) - Retrieves an SSH public key.
* [osloginUsersSshPublicKeysPatch](docs/users/README.md#osloginuserssshpublickeyspatch) - Updates an SSH public key and returns the profile information. This method supports patch semantics.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
