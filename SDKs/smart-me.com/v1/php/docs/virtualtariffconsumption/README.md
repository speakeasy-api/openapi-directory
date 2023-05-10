# virtualTariffConsumption

### Available Operations

* [virtualTariffConsumptionGet](#virtualtariffconsumptionget) - Gets the consumption of a folder with a virtuall tariffs.

## virtualTariffConsumptionGet

Gets the consumption of a folder with a virtuall tariffs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VirtualTariffConsumptionGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VirtualTariffConsumptionGetRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-02T14:16:44.513Z');
    $request->folderId = 'maiores';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-05T01:08:19.216Z');

    $response = $sdk->virtualTariffConsumption->virtualTariffConsumptionGet($request);

    if ($response->virtualTariffConsumptionData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
