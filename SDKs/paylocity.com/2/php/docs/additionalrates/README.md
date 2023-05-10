# additionalRates

### Available Operations

* [addOrUpdateAdditionalRates](#addorupdateadditionalrates) - Add/update additional rates

## addOrUpdateAdditionalRates

Sends new or updated employee additional rates information directly to Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateAdditionalRatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalRate;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateAdditionalRatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrUpdateAdditionalRatesRequest();
    $request->additionalRate = new AdditionalRate();
    $request->additionalRate->changeReason = 'debitis';
    $request->additionalRate->costCenter1 = 'ipsa';
    $request->additionalRate->costCenter2 = 'delectus';
    $request->additionalRate->costCenter3 = 'tempora';
    $request->additionalRate->effectiveDate = 'suscipit';
    $request->additionalRate->endCheckDate = 'molestiae';
    $request->additionalRate->job = 'minus';
    $request->additionalRate->rate = 8121.69;
    $request->additionalRate->rateCode = 'voluptatum';
    $request->additionalRate->rateNotes = 'iusto';
    $request->additionalRate->ratePer = 'excepturi';
    $request->additionalRate->shift = 'nisi';
    $request->companyId = 'recusandae';
    $request->employeeId = 'temporibus';

    $requestSecurity = new AddOrUpdateAdditionalRatesSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->additionalRates->addOrUpdateAdditionalRates($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
