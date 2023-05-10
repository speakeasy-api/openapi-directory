# riskParameters

### Available Operations

* [getRiskParameters](#getriskparameters) - /risk_parameters

## getRiskParameters

### Get risk parameters

Get a list of [risk parameters](https://www.heraldapi.com/docs/risk-and-coverage-parameters).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->riskParameters->getRiskParameters();

    if ($response->getRiskParameters200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
