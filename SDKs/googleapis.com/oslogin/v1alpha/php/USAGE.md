<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileOperatingSystemTypeEnum;
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
    $request->operatingSystemType = OsloginUsersGetLoginProfileOperatingSystemTypeEnum::LINUX;
    $request->prettyPrint = false;
    $request->projectId = 'magnam';
    $request->quotaUser = 'debitis';
    $request->systemId = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';
    $request->view = OsloginUsersGetLoginProfileViewEnum::BASIC;

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