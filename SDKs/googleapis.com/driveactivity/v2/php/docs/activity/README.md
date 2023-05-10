# activity

### Available Operations

* [driveactivityActivityQuery](#driveactivityactivityquery) - Query past activity in Google Drive.

## driveactivityActivityQuery

Query past activity in Google Drive.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->queryDriveActivityRequest = new QueryDriveActivityRequest();
    $request->queryDriveActivityRequest->ancestorName = 'veritatis';
    $request->queryDriveActivityRequest->consolidationStrategy = new ConsolidationStrategy();
    $request->queryDriveActivityRequest->consolidationStrategy->legacy = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->queryDriveActivityRequest->consolidationStrategy->none = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->queryDriveActivityRequest->filter = 'dolorum';
    $request->queryDriveActivityRequest->itemName = 'dicta';
    $request->queryDriveActivityRequest->pageSize = 720633;
    $request->queryDriveActivityRequest->pageToken = 'officia';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'hic';
    $request->key = 'optio';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

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
