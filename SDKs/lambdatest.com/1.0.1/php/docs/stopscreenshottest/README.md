# stopScreenshotTest

### Available Operations

* [stopScreenshotsTest](#stopscreenshotstest) - Stop specified screenshot test

## stopScreenshotsTest

Stop specified screenshot test

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopScreenshotsTestRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopScreenshotsTestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopScreenshotsTestRequest();
    $request->testId = 'deserunt';

    $requestSecurity = new StopScreenshotsTestSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->stopScreenshotTest->stopScreenshotsTest($request, $requestSecurity);

    if ($response->stopScreenshotSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
