<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTimestagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTimestagsFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimestagsRequest();
    $request->filter = GetTimestagsFilterEnum::ORG;
    $request->max = 592845;
    $request->query = 'distinctio';

    $response = $sdk->getTimestags($request);

    if ($response->getTimestags200ApplicationJSONArrays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->