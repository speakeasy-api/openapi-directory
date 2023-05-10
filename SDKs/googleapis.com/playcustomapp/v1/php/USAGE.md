<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaycustomappAccountsCustomAppsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlaycustomappAccountsCustomAppsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaycustomappAccountsCustomAppsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'provident';
    $request->accessToken = 'distinctio';
    $request->account = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new PlaycustomappAccountsCustomAppsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->playcustomappAccountsCustomAppsCreate($request, $requestSecurity);

    if ($response->customApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->