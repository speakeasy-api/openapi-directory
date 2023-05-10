<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlatesByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfsSlatesByDateRequest();
    $request->date = 'corrupti';
    $request->format = DfsSlatesByDateFormatEnum::JSON;

    $response = $sdk->dfsSlatesByDate($request);

    if ($response->dfsSlates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->