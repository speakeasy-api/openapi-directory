<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->pageSize = 423655;
    $request->pageToken = 'error';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCollectionGroupsFieldsList($request, $requestSecurity);

    if ($response->googleFirestoreAdminV1beta2ListFieldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->