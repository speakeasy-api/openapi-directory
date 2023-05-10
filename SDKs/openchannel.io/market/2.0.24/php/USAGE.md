<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsAppIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppsAppIdRequest();
    $request->appId = 'corrupti';
    $request->developerId = 'provident';

    $response = $sdk->appsFindAndModifyApps->deleteAppsAppId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->