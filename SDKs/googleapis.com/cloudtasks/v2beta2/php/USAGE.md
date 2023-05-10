<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksApiQueueUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpBody;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtasksApiQueueUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtasksApiQueueUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->httpBody = new HttpBody();
    $request->httpBody->contentType = 'provident';
    $request->httpBody->data = 'distinctio';
    $request->httpBody->extensions = [
        [
            'nulla' => 'corrupti',
            'illum' => 'vel',
            'error' => 'deserunt',
        ],
        [
            'iure' => 'magnam',
            'debitis' => 'ipsa',
        ],
        [
            'tempora' => 'suscipit',
            'molestiae' => 'minus',
            'placeat' => 'voluptatum',
            'iusto' => 'excepturi',
        ],
        [
            'recusandae' => 'temporibus',
            'ab' => 'quis',
        ],
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->appId = 'perferendis';
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

    $requestSecurity = new CloudtasksApiQueueUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->api->cloudtasksApiQueueUpdate($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->