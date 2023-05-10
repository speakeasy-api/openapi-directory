<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveactivityActivityQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryDriveActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsolidationStrategy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveactivityActivityQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveactivityActivityQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveactivityActivityQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveactivityActivityQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queryDriveActivityRequest = new QueryDriveActivityRequest();
    $request->queryDriveActivityRequest->ancestorName = 'provident';
    $request->queryDriveActivityRequest->consolidationStrategy = new ConsolidationStrategy();
    $request->queryDriveActivityRequest->consolidationStrategy->legacy = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->queryDriveActivityRequest->consolidationStrategy->none = [
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->queryDriveActivityRequest->filter = 'delectus';
    $request->queryDriveActivityRequest->itemName = 'tempora';
    $request->queryDriveActivityRequest->pageSize = 383441;
    $request->queryDriveActivityRequest->pageToken = 'molestiae';
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new DriveactivityActivityQuerySecurity();
    $requestSecurity->option1 = new DriveactivityActivityQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activity->driveactivityActivityQuery($request, $requestSecurity);

    if ($response->queryDriveActivityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->