<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlBackupRunsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlBackupRunsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->id = 'd8d69a67-4e0f-4467-8c87-96ed151a05df';
    $request->instance = 'quo';
    $request->key = 'odit';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'maiores';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new SqlBackupRunsDeleteSecurity();
    $requestSecurity->option1 = new SqlBackupRunsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backupRuns->sqlBackupRunsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->