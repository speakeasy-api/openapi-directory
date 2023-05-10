<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersAddPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddMatterPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MatterPermission;
use \OpenAPI\OpenAPI\Models\Shared\MatterPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersAddPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersAddPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addMatterPermissionsRequest = new AddMatterPermissionsRequest();
    $request->addMatterPermissionsRequest->ccMe = false;
    $request->addMatterPermissionsRequest->matterPermission = new MatterPermission();
    $request->addMatterPermissionsRequest->matterPermission->accountId = 'provident';
    $request->addMatterPermissionsRequest->matterPermission->role = MatterPermissionRoleEnum::OWNER;
    $request->addMatterPermissionsRequest->sendEmails = false;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->matterId = 'vel';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new VaultMattersAddPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersAddPermissions($request, $requestSecurity);

    if ($response->matterPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->