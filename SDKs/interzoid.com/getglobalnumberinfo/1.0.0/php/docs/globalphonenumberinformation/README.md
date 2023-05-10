# globalPhoneNumberInformation

### Available Operations

* [getglobalnumberinfo](#getglobalnumberinfo) - Get demographic information for a global telephone number

## getglobalnumberinfo

Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetglobalnumberinfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetglobalnumberinfoRequest();
    $request->intlnumber = 'distinctio';
    $request->license = 'quibusdam';

    $response = $sdk->globalPhoneNumberInformation->getglobalnumberinfo($request);

    if ($response->getglobalnumberinfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
