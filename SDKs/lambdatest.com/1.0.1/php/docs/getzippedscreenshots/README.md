# getZippedScreenshots

### Available Operations

* [zippedScreenshots](#zippedscreenshots) - Fetch Zipped Screenshots

## zippedScreenshots

Fetch Zipped Screenshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ZippedScreenshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ZippedScreenshotsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ZippedScreenshotsRequest();
    $request->testId = 'unde';

    $requestSecurity = new ZippedScreenshotsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->getZippedScreenshots->zippedScreenshots($request, $requestSecurity);

    if ($response->zippedScreenshotsSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
