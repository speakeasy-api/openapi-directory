# getOSBrowsers

### Available Operations

* [osBrowsers](#osbrowsers) - Fetch all available os-browser combinations.

## osBrowsers

Fetch all os browsers combinations available on lambdatest platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsBrowsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\OsBrowsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsBrowsersRequest();
    $request->os = 'distinctio';

    $requestSecurity = new OsBrowsersSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->getOSBrowsers->osBrowsers($request, $requestSecurity);

    if ($response->osBrowsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
