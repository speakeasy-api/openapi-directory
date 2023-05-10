<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleContactGroupsBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->groupFields = 'nulla';
    $request->key = 'corrupti';
    $request->maxMembers = 847252;
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->resourceNames = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new PeopleContactGroupsBatchGetSecurity();
    $requestSecurity->option1 = new PeopleContactGroupsBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contactGroups->peopleContactGroupsBatchGet($request, $requestSecurity);

    if ($response->batchGetContactGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->