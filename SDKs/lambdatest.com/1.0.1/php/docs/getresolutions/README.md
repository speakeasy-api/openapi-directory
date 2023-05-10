# getResolutions

### Available Operations

* [resolutions](#resolutions) - Fetch all available resolution on different OS

## resolutions

Fetch all available resolution on different OS

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResolutionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ResolutionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->getResolutions->resolutions($requestSecurity);

    if ($response->resolutions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
