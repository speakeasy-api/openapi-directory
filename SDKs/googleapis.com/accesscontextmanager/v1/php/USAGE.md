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