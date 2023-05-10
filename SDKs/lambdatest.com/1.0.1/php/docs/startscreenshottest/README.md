# startScreenshotTest

### Available Operations

* [startScreenshotTest](#startscreenshottest) - Start Screenshot Test

## startScreenshotTest

Start Screenshot Test

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ScreenshotPayload;
use \OpenAPI\OpenAPI\Models\Shared\ScreenshotPayloadConfigs;
use \OpenAPI\OpenAPI\Models\Shared\Browsers;
use \OpenAPI\OpenAPI\Models\Operations\StartScreenshotTestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScreenshotPayload();
    $request->callbackUrl = 'https://www.example.com';
    $request->configs = new ScreenshotPayloadConfigs();
    $request->configs->macosMojave = new Browsers();
    $request->configs->macosMojave->chrome = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->configs->macosMojave->firefox = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->configs->macosMojave->opera = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->configs->windows10 = new Browsers();
    $request->configs->windows10->chrome = [
        'minus',
        'placeat',
    ];
    $request->configs->windows10->firefox = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->configs->windows10->opera = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->deferTime = 5;
    $request->email = true;
    $request->macRes = '1024x768';
    $request->password = 'password';
    $request->tunnel = true;
    $request->tunnelIdentifier = 'tunnel';
    $request->url = 'https://www.lambdatest.com';
    $request->username = 'admin';
    $request->winRes = '1366X768';

    $requestSecurity = new StartScreenshotTestSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->startScreenshotTest->startScreenshotTest($request, $requestSecurity);

    if ($response->startScreenshotSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
