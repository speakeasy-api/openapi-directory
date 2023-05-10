<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudServicebrokerV1beta1Broker;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudServicebrokerV1beta1Broker = new GoogleCloudServicebrokerV1beta1Broker();
    $request->googleCloudServicebrokerV1beta1Broker->createTime = 'provident';
    $request->googleCloudServicebrokerV1beta1Broker->name = 'Ellis Mitchell';
    $request->googleCloudServicebrokerV1beta1Broker->title = 'Dr.';
    $request->googleCloudServicebrokerV1beta1Broker->url = 'vel';
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new ServicebrokerProjectsBrokersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersCreate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->