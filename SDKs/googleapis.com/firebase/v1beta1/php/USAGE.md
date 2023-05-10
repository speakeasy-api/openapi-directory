<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseAvailableProjectsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->pageSize = 847252;
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new FirebaseAvailableProjectsListSecurity();
    $requestSecurity->option1 = new FirebaseAvailableProjectsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->availableProjects->firebaseAvailableProjectsList($request, $requestSecurity);

    if ($response->listAvailableProjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->