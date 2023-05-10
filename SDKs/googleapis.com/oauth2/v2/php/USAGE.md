<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Oauth2TokeninfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Oauth2TokeninfoRequest();
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::JSON;
    $request->fields = 'provident';
    $request->idToken = 'distinctio';
    $request->key = 'quibusdam';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->userIp = 'corrupti';

    $response = $sdk->oauth2Tokeninfo($request);

    if ($response->tokeninfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->