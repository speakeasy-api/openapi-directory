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
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevel;
use \OpenAPI\OpenAPI\Models\Shared\BasicLevel;
use \OpenAPI\OpenAPI\Models\Shared\BasicLevelCombiningFunctionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicy;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicyAllowedDeviceManagementLevelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicyAllowedEncryptionStatusesEnum;
use \OpenAPI\OpenAPI\Models\Shared\OsConstraint;
use \OpenAPI\OpenAPI\Models\Shared\OsConstraintOsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomLevel;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessLevel = new AccessLevel();
    $request->accessLevel->basic = new BasicLevel();
    $request->accessLevel->basic->combiningFunction = BasicLevelCombiningFunctionEnum::OR;
    $request->accessLevel->basic->conditions = [
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->accessLevel->custom = new CustomLevel();
    $request->accessLevel->custom->expr = new Expr();
    $request->accessLevel->custom->expr->description = 'quibusdam';
    $request->accessLevel->custom->expr->expression = 'unde';
    $request->accessLevel->custom->expr->location = 'nulla';
    $request->accessLevel->custom->expr->title = 'Ms.';
    $request->accessLevel->description = 'illum';
    $request->accessLevel->name = 'Sabrina Oberbrunner';
    $request->accessLevel->title = 'Mrs.';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->parent = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesAccessLevelsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accessPolicies](docs/accesspolicies/README.md)

* [accesscontextmanagerAccessPoliciesAccessLevelsCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelscreate) - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* [accesscontextmanagerAccessPoliciesAccessLevelsList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelslist) - List all Access Levels for an access policy.
* [accesscontextmanagerAccessPoliciesCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciescreate) - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* [accesscontextmanagerAccessPoliciesList](docs/accesspolicies/README.md#accesscontextmanageraccesspolicieslist) - List all AccessPolicies under a container.
* [accesscontextmanagerAccessPoliciesServicePerimetersCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* [accesscontextmanagerAccessPoliciesServicePerimetersDelete](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimetersdelete) - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* [accesscontextmanagerAccessPoliciesServicePerimetersList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterslist) - List all Service Perimeters for an access policy.
* [accesscontextmanagerAccessPoliciesServicePerimetersPatch](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterspatch) - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### [operations](docs/operations/README.md)

* [accesscontextmanagerOperationsGet](docs/operations/README.md#accesscontextmanageroperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
