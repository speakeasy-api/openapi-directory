# getProfiles

### Available Operations

* [profiles](#profiles) - Fetch login profiles

## profiles

Fetch login profiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProfilesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ProfilesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->getProfiles->profiles($requestSecurity);

    if ($response->profiles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
