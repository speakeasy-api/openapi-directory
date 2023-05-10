<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostCheckCodeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCheckCodeRequestBody();
    $request->code = 'corrupti';
    $request->email = 'Micheal_Sporer@yahoo.com';

    $response = $sdk->postCheckCode($request);

    if ($response->postCheckCode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->