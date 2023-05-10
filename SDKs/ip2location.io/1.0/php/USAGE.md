<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLangEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->format = GetFormatEnum::XML;
    $request->ip = '8.8.8.8';
    $request->key = 'provident';
    $request->lang = GetLangEnum::PT;

    $response = $sdk->get($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->