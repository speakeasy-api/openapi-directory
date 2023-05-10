<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokenRequest();
    $request->clientId = '00000000-0000-0000-0000-00000000000';
    $request->clientSecret = '00000000-0000-0000-0000-00000000000';
    $request->grantType = 'client_credentials';

    $response = $sdk->authentication->authToken($request);

    if ($response->tokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->