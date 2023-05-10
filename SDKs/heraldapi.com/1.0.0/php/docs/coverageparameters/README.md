# coverageParameters

### Available Operations

* [getCoverageParameters](#getcoverageparameters) - /coverage_parameters

## getCoverageParameters

### Get coverage parameters

Get a list of [coverage parameters](https://www.heraldapi.com/docs/risk-and-coverage-parameters).

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
    $response = $sdk->coverageParameters->getCoverageParameters();

    if ($response->getCoverageParameters200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
