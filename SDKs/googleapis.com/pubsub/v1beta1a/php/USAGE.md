<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsAcknowledgeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsAcknowledgeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PubsubSubscriptionsAcknowledgeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubsubSubscriptionsAcknowledgeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->acknowledgeRequest = new AcknowledgeRequest();
    $request->acknowledgeRequest->ackId = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->acknowledgeRequest->subscription = 'nulla';
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new PubsubSubscriptionsAcknowledgeSecurity();
    $requestSecurity->option1 = new PubsubSubscriptionsAcknowledgeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->pubsubSubscriptionsAcknowledge($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->