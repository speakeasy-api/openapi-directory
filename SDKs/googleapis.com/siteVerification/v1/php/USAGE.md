<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SiteVerificationWebResourceDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteVerificationWebResourceDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'corrupti';
    $request->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->userIp = 'sapiente';

    $requestSecurity = new SiteVerificationWebResourceDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webResource->siteVerificationWebResourceDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->