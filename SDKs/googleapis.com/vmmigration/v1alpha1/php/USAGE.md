<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddGroupMigrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addGroupMigrationRequest = new AddGroupMigrationRequest();
    $request->addGroupMigrationRequest->migratingVm = 'provident';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->group = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsGroupsAddGroupMigration($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->