# archive

### Available Operations

* [getYearMonthJson](#getyearmonthjson) - Archive API

## getYearMonthJson

The Archive API provides lists of NYT articles by month going back to 1851.  Simply pass in the year and month you want and it returns a JSON object with all articles for that month.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetYearMonthJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetYearMonthJsonRequest();
    $request->month = 715190;
    $request->year = 844266;

    $response = $sdk->archive->getYearMonthJson($request);

    if ($response->getYearMonthJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
