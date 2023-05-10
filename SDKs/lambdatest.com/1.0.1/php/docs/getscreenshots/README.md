# getScreenshots

### Available Operations

* [screenshots](#screenshots) - Fetch specified screenshot details

## screenshots

To fetch specified screenshot details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScreenshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ScreenshotsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScreenshotsRequest();
    $request->testId = 'quibusdam';

    $requestSecurity = new ScreenshotsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->getScreenshots->screenshots($request, $requestSecurity);

    if ($response->screenshotDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
