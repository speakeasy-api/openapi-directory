<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocateIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsAllocateIdsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->allocateIdsRequest = new AllocateIdsRequest();
    $request->allocateIdsRequest->keys = [
        new Key(),
        new Key(),
        new Key(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->projectId = 'vel';
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DatastoreProjectsAllocateIdsSecurity();
    $requestSecurity->option1 = new DatastoreProjectsAllocateIdsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsAllocateIds($request, $requestSecurity);

    if ($response->allocateIdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->