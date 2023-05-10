<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasestorageProjectsBucketsAddFirebaseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->bucket = 'deserunt';
    $request->callback = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new FirebasestorageProjectsBucketsAddFirebaseSecurity();
    $requestSecurity->option1 = new FirebasestorageProjectsBucketsAddFirebaseSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasestorageProjectsBucketsAddFirebase($request, $requestSecurity);

    if ($response->bucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->