# currencies

### Available Operations

* [currenciesHistoryGET](#currencieshistoryget) - Get historical prices for requested currency pairs
* [currenciesRateGET](#currenciesrateget) - Get latest mid rate for requested currency pairs
* [currenciesSummaryGET](#currenciessummaryget) - Get latest Summary for requested currency pairs
* [currenciesSupportedCurrenciesHistoryGET](#currenciessupportedcurrencieshistoryget) - Get list of currency pairs supported by the history endpoint
* [currenciesSupportedCurrenciesRateGET](#currenciessupportedcurrenciesrateget) - Get list of currencies supported by the rate endpoint
* [currenciesSupportedCurrenciesSummaryGET](#currenciessupportedcurrenciessummaryget) - Get list of currency pairs supported by the Summary endpoint

## currenciesHistoryGET

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesHistoryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesHistoryGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrenciesHistoryGETRequest();
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-24T02:21:06.409Z');
    $request->format = CurrenciesHistoryGETFormatEnum::XML;
    $request->interval = 'deserunt';
    $request->pairs = 'suscipit';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T09:35:47.986Z');

    $response = $sdk->currencies->currenciesHistoryGET($request);

    if ($response->intervalCollectionResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## currenciesRateGET

Current Mid Rate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesRateGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesRateGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrenciesRateGETRequest();
    $request->format = CurrenciesRateGETFormatEnum::XML;
    $request->pairs = 'ipsa';

    $response = $sdk->currencies->currenciesRateGET($request);

    if ($response->rateResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## currenciesSummaryGET

Current and daily summary information combined into a single quote

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesSummaryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesSummaryGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrenciesSummaryGETRequest();
    $request->format = CurrenciesSummaryGETFormatEnum::XML;
    $request->pairs = 'tempora';

    $response = $sdk->currencies->currenciesSummaryGET($request);

    if ($response->summaryResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## currenciesSupportedCurrenciesHistoryGET

Only the currency pairs in the direction noted can be used with the history endpoint.
For example: USD/CAD is not the same as CAD/USD

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesSupportedCurrenciesHistoryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesSupportedCurrenciesHistoryGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrenciesSupportedCurrenciesHistoryGETRequest();
    $request->format = CurrenciesSupportedCurrenciesHistoryGETFormatEnum::JSON;

    $response = $sdk->currencies->currenciesSupportedCurrenciesHistoryGET($request);

    if ($response->currenciesSupportedCurrenciesHistoryGET200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## currenciesSupportedCurrenciesRateGET

Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesSupportedCurrenciesRateGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesSupportedCurrenciesRateGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrenciesSupportedCurrenciesRateGETRequest();
    $request->format = CurrenciesSupportedCurrenciesRateGETFormatEnum::JSON;

    $response = $sdk->currencies->currenciesSupportedCurrenciesRateGET($request);

    if ($response->currenciesSupportedCurrenciesRateGET200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## currenciesSupportedCurrenciesSummaryGET

Only the currency pairs in the direction noted can be used with the Summary endpoint.
For example: USD/CAD is not the same as CAD/USD

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesSupportedCurrenciesSummaryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\CurrenciesSupportedCurrenciesSummaryGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CurrenciesSupportedCurrenciesSummaryGETRequest();
    $request->format = CurrenciesSupportedCurrenciesSummaryGETFormatEnum::XML;

    $response = $sdk->currencies->currenciesSupportedCurrenciesSummaryGET($request);

    if ($response->currenciesSupportedCurrenciesSummaryGET200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
