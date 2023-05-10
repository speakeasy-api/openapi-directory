<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInapppurchasesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInapppurchasesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInapppurchasesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'corrupti';
    $request->key = 'provident';
    $request->oauthToken = 'distinctio';
    $request->packageName = 'quibusdam';
    $request->prettyPrint = false;
    $request->productId = 'unde';
    $request->quotaUser = 'nulla';
    $request->token = 'corrupti';
    $request->userIp = 'illum';

    $requestSecurity = new AndroidpublisherInapppurchasesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inapppurchases->androidpublisherInapppurchasesGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->