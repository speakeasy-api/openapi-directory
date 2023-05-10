# emailAddressInformation

### Available Operations

* [getemailinfo](#getemailinfo) - Gets email validation information for an email address

## getemailinfo

Get email validation information and other demographics for an email address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetemailinfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetemailinfoRequest();
    $request->email = 'Henry.Mueller@hotmail.com';
    $request->license = 'iure';

    $response = $sdk->emailAddressInformation->getemailinfo($request);

    if ($response->getemailinfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
