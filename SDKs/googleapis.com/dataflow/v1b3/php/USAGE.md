<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsDeleteSnapshotsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->location = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->projectId = 'vel';
    $request->quotaUser = 'error';
    $request->snapshotId = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DataflowProjectsDeleteSnapshotsSecurity();
    $requestSecurity->option1 = new DataflowProjectsDeleteSnapshotsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsDeleteSnapshots($request, $requestSecurity);

    if ($response->deleteSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->