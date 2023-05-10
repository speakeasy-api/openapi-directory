<!-- Start SDK Example Usage -->
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
    $request->additionalRate->changeReason = 'corrupti';
    $request->additionalRate->costCenter1 = 'provident';
    $request->additionalRate->costCenter2 = 'distinctio';
    $request->additionalRate->costCenter3 = 'quibusdam';
    $request->additionalRate->effectiveDate = 'unde';
    $request->additionalRate->endCheckDate = 'nulla';
    $request->additionalRate->job = 'corrupti';
    $request->additionalRate->rate = 8472.52;
    $request->additionalRate->rateCode = 'vel';
    $request->additionalRate->rateNotes = 'error';
    $request->additionalRate->ratePer = 'deserunt';
    $request->additionalRate->shift = 'suscipit';
    $request->companyId = 'iure';
    $request->employeeId = 'magnam';

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
<!-- End SDK Example Usage -->