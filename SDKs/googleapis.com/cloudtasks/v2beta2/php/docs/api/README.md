# api

### Available Operations

* [cloudtasksApiQueueUpdate](#cloudtasksapiqueueupdate) - Update queue list by uploading a queue.yaml file. The queue.yaml file is supplied in the request body as a YAML encoded string. This method was added to support gcloud clients versions before 322.0.0. New clients should use CreateQueue instead of this method.

## cloudtasksApiQueueUpdate

Update queue list by uploading a queue.yaml file. The queue.yaml file is supplied in the request body as a YAML encoded string. This method was added to support gcloud clients versions before 322.0.0. New clients should use CreateQueue instead of this method.

### Example Usage

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
    $request->httpBody->contentType = 'molestiae';
    $request->httpBody->data = 'quod';
    $request->httpBody->extensions = [
        [
            'totam' => 'porro',
            'dolorum' => 'dicta',
        ],
        [
            'officia' => 'occaecati',
            'fugit' => 'deleniti',
            'hic' => 'optio',
        ],
        [
            'beatae' => 'commodi',
            'molestiae' => 'modi',
            'qui' => 'impedit',
        ],
        [
            'esse' => 'ipsum',
            'excepturi' => 'aspernatur',
            'perferendis' => 'ad',
        ],
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->appId = 'iste';
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

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
