# rates

## Overview

Make sure you ship as cost-effectively as possible by [quickly comparing rates](https://www.shipengine.com/docs/rates/) using the ShipEngine Rates API. As long as you have the carrier connected to your account, you'll be able to see and compare different rates and services.


This quick start guide shows you how to get shipping rates for multiple carriers so you can choose the fastest, cheapest, or most reliable option.

<https://www.shipengine.com/docs/rates/>
### Available Operations

* [calculateRates](#calculaterates) - Get Shipping Rates
* [compareBulkRates](#comparebulkrates) - Get Bulk Rates
* [estimateRates](#estimaterates) - Estimate Rates
* [getRateById](#getratebyid) - Get Rate By ID

## calculateRates

It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
so we provide functionality to show you all your options!


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CalculateRatesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalculateRatesRequestBody();
    $request->rateOptions = new RateRequestBody();
    $request->rateOptions->calculateTaxAmount = false;
    $request->rateOptions->carrierIds = [
        'se-28529731',
    ];
    $request->rateOptions->isReturn = false;
    $request->rateOptions->packageTypes = [
        'ipsam',
        'alias',
        'fugit',
        'dolorum',
    ];
    $request->rateOptions->preferredCurrency = 'excepturi';
    $request->rateOptions->serviceCodes = [
        'facilis',
        'tempore',
    ];

    $response = $sdk->rates->calculateRates($request);

    if ($response->calculateRatesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## compareBulkRates

Get Bulk Shipment Rates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CompareBulkRatesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompareBulkRatesRequestBody();
    $request->rateOptions = new RateRequestBody();
    $request->rateOptions->calculateTaxAmount = false;
    $request->rateOptions->carrierIds = [
        'se-28529731',
        'se-28529731',
    ];
    $request->rateOptions->isReturn = false;
    $request->rateOptions->packageTypes = [
        'eum',
        'non',
        'eligendi',
        'sint',
    ];
    $request->rateOptions->preferredCurrency = 'aliquid';
    $request->rateOptions->serviceCodes = [
        'necessitatibus',
        'sint',
        'officia',
    ];

    $response = $sdk->rates->compareBulkRates($request);

    if ($response->compareBulkRatesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimateRates

Get Rate Estimates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\EstimateRatesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AddressResidentialIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryConfirmationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\DimensionsDimensionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\WeightUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimateRatesRequestBody();
    $request->addressResidentialIndicator = AddressResidentialIndicatorEnum::UNKNOWN;
    $request->confirmation = DeliveryConfirmationEnum::VERBAL_CONFIRMATION;
    $request->dimensions = new Dimensions();
    $request->dimensions->height = 9527.49;
    $request->dimensions->length = 6800.56;
    $request->dimensions->unit = DimensionsDimensionUnitEnum::INCH;
    $request->dimensions->width = 4491.98;
    $request->fromCityLocality = 'Austin';
    $request->fromCountryCode = 'CA';
    $request->fromPostalCode = '78756-3717';
    $request->fromStateProvince = 'Austin';
    $request->shipDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2018-09-23T15:00:00.000Z');
    $request->toCityLocality = 'Austin';
    $request->toCountryCode = 'CA';
    $request->toPostalCode = '78756-3717';
    $request->toStateProvince = 'Houston';
    $request->weight = new Weight();
    $request->weight->unit = WeightUnitEnum::KILOGRAM;
    $request->weight->value = 9785.71;

    $response = $sdk->rates->estimateRates($request);

    if ($response->estimateRatesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRateById

Retrieve a previously queried rate by its ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRateByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRateByIdRequest();
    $request->rateId = 'se-28529731';

    $response = $sdk->rates->getRateById($request);

    if ($response->getRateByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
