<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClearUserSessionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearUserSessionsRequest();
    $request->requestBody = 'corrupti';
    $request->userId = 'provident';

    $response = $sdk->clearUserSessions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->