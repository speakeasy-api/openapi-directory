<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'corrupti';
    $request->entity = 'provident';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->userIp = 'corrupti';

    $requestSecurity = new StorageBucketAccessControlsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bucketAccessControls->storageBucketAccessControlsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->