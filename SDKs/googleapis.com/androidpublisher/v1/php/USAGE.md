<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesCancelRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'corrupti';
    $request->key = 'provident';
    $request->oauthToken = 'distinctio';
    $request->packageName = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'unde';
    $request->subscriptionId = 'nulla';
    $request->token = 'corrupti';
    $request->userIp = 'illum';

    $requestSecurity = new AndroidpublisherPurchasesCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesCancel($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->