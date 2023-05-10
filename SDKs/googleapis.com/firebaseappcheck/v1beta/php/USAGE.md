<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->names = [
        'illum',
        'vel',
        'error',
    ];
    $request->oauthToken = 'deserunt';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsAppAttestConfigBatchGet($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->