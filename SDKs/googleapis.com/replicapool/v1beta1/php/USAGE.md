<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ReplicapoolPoolsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicapoolPoolsDeleteRequest();
    $request->poolsDeleteRequest = new PoolsDeleteRequest();
    $request->poolsDeleteRequest->abandonInstances = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->poolName = 'illum';
    $request->prettyPrint = false;
    $request->projectName = 'vel';
    $request->quotaUser = 'error';
    $request->userIp = 'deserunt';
    $request->zone = 'suscipit';

    $requestSecurity = new ReplicapoolPoolsDeleteSecurity();
    $requestSecurity->option1 = new ReplicapoolPoolsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pools->replicapoolPoolsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->