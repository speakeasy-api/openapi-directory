# getLocations

### Available Operations

* [locations](#locations) - Fetch Locations

## locations

Fetch list of available Geolocations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new LocationsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->getLocations->locations($requestSecurity);

    if ($response->locations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
