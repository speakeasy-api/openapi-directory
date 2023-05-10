# metals

### Available Operations

* [metalsBenchmarkHistoryGET](#metalsbenchmarkhistoryget) - Get historical benchmark prices for requested metals
* [metalsBenchmarkSummaryGET](#metalsbenchmarksummaryget) - Get latest Benchmark prices for requested metals
* [metalsBenchmarkSupportedMetalsGET](#metalsbenchmarksupportedmetalsget) - Get list of symbols supported by the benchmark endpoints
* [metalsSpotAnnualHistoricalPerformanceGET](#metalsspotannualhistoricalperformanceget) - Get Historical Annual Performance for requested metals
* [metalsSpotHistoricalPerformanceGET](#metalsspothistoricalperformanceget) - Get Historical Performance for requested metals
* [metalsSpotHistoryGET](#metalsspothistoryget) - Get historical Spot prices for requested metals
* [metalsSpotRatioHistoryGET](#metalsspotratiohistoryget) - Get historical Spot Ratio prices for requested metals
* [metalsSpotRatioSummaryGET](#metalsspotratiosummaryget) - Get latest Spot Summary for requested metal ratios
* [metalsSpotSummaryGET](#metalsspotsummaryget) - Get latest Spot Summary for requested metals
* [metalsSpotSupportedMetalsGET](#metalsspotsupportedmetalsget) - Get list of symbols supported by the spot endpoints
* [metalsSupportedCurrenciesMetalsGET](#metalssupportedcurrenciesmetalsget) - Get list of currencies supported by metals endpoints for currency conversion

## metalsBenchmarkHistoryGET

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsBenchmarkHistoryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsBenchmarkHistoryGETFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetalsBenchmarkHistoryGETUnitofmeasureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsBenchmarkHistoryGETRequest();
    $request->currency = 'placeat';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T14:47:59.325Z');
    $request->format = MetalsBenchmarkHistoryGETFormatEnum::XML;
    $request->historicalfx = false;
    $request->interval = 'nisi';
    $request->metals = 'recusandae';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T05:10:19.629Z');
    $request->unitofmeasure = MetalsBenchmarkHistoryGETUnitofmeasureEnum::KG;

    $response = $sdk->metals->metalsBenchmarkHistoryGET($request);

    if ($response->intervalCollectionResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metalsBenchmarkSummaryGET

Benchmark price information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsBenchmarkSummaryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsBenchmarkSummaryGETFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetalsBenchmarkSummaryGETUnitofmeasureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsBenchmarkSummaryGETRequest();
    $request->currency = 'veritatis';
    $request->format = MetalsBenchmarkSummaryGETFormatEnum::XML;
    $request->metals = 'perferendis';
    $request->unitofmeasure = MetalsBenchmarkSummaryGETUnitofmeasureEnum::KG;

    $response = $sdk->metals->metalsBenchmarkSummaryGET($request);

    if ($response->summaryResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metalsBenchmarkSupportedMetalsGET

Get list of symbols supported by the benchmark endpoints

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsBenchmarkSupportedMetalsGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsBenchmarkSupportedMetalsGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsBenchmarkSupportedMetalsGETRequest();
    $request->format = MetalsBenchmarkSupportedMetalsGETFormatEnum::XML;

    $response = $sdk->metals->metalsBenchmarkSupportedMetalsGET($request);

    if ($response->metalsBenchmarkSupportedMetalsGET200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metalsSpotAnnualHistoricalPerformanceGET

Annual Historical Performance information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotAnnualHistoricalPerformanceGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotAnnualHistoricalPerformanceGETFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotAnnualHistoricalPerformanceGETUnitofmeasureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsSpotAnnualHistoricalPerformanceGETRequest();
    $request->currency = 'sapiente';
    $request->format = MetalsSpotAnnualHistoricalPerformanceGETFormatEnum::XML;
    $request->metals = 'odit';
    $request->unitofmeasure = MetalsSpotAnnualHistoricalPerformanceGETUnitofmeasureEnum::CT;
    $request->years = 870088;

    $response = $sdk->metals->metalsSpotAnnualHistoricalPerformanceGET($request);

    if ($response->intervalCollectionResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metalsSpotHistoricalPerformanceGET

Historical Performance information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotHistoricalPerformanceGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotHistoricalPerformanceGETFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotHistoricalPerformanceGETUnitofmeasureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsSpotHistoricalPerformanceGETRequest();
    $request->currency = 'maiores';
    $request->format = MetalsSpotHistoricalPerformanceGETFormatEnum::JSON;
    $request->metals = 'quod';
    $request->unitofmeasure = MetalsSpotHistoricalPerformanceGETUnitofmeasureEnum::CT;

    $response = $sdk->metals->metalsSpotHistoricalPerformanceGET($request);

    if ($response->intervalCollectionResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metalsSpotHistoryGET

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotHistoryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotHistoryGETFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotHistoryGETUnitofmeasureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsSpotHistoryGETRequest();
    $request->currency = 'esse';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-10T05:07:43.614Z');
    $request->format = MetalsSpotHistoryGETFormatEnum::XML;
    $request->historicalfx = false;
    $request->interval = 'dicta';
    $request->metals = 'nam';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-02T03:00:47.309Z');
    $request->unitofmeasure = MetalsSpotHistoryGETUnitofmeasureEnum::G;

    $response = $sdk->metals->metalsSpotHistoryGET($request);

    if ($response->intervalCollectionResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metalsSpotRatioHistoryGET

Historical data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotRatioHistoryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotRatioHistoryGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsSpotRatioHistoryGETRequest();
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-10T09:24:01.909Z');
    $request->format = MetalsSpotRatioHistoryGETFormatEnum::XML;
    $request->interval = 'totam';
    $request->pairs = 'beatae';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-12T03:15:36.542Z');

    $response = $sdk->metals->metalsSpotRatioHistoryGET($request);

    if ($response->intervalCollectionResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metalsSpotRatioSummaryGET

Ratios between prices of two metals

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotRatioSummaryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotRatioSummaryGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsSpotRatioSummaryGETRequest();
    $request->format = MetalsSpotRatioSummaryGETFormatEnum::JSON;
    $request->pairs = 'qui';

    $response = $sdk->metals->metalsSpotRatioSummaryGET($request);

    if ($response->summaryResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metalsSpotSummaryGET

Current and daily summary information combined into a single quote

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotSummaryGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotSummaryGETFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotSummaryGETUnitofmeasureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsSpotSummaryGETRequest();
    $request->currency = 'impedit';
    $request->format = MetalsSpotSummaryGETFormatEnum::XML;
    $request->metals = 'esse';
    $request->unitofmeasure = MetalsSpotSummaryGETUnitofmeasureEnum::G;

    $response = $sdk->metals->metalsSpotSummaryGET($request);

    if ($response->summaryResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metalsSpotSupportedMetalsGET

Get list of symbols supported by the spot endpoints

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotSupportedMetalsGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSpotSupportedMetalsGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsSpotSupportedMetalsGETRequest();
    $request->format = MetalsSpotSupportedMetalsGETFormatEnum::XML;

    $response = $sdk->metals->metalsSpotSupportedMetalsGET($request);

    if ($response->metalsSpotSupportedMetalsGET200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metalsSupportedCurrenciesMetalsGET

Get list of currencies supported by metals endpoints for currency conversion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSupportedCurrenciesMetalsGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\MetalsSupportedCurrenciesMetalsGETFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetalsSupportedCurrenciesMetalsGETRequest();
    $request->format = MetalsSupportedCurrenciesMetalsGETFormatEnum::JSON;

    $response = $sdk->metals->metalsSupportedCurrenciesMetalsGET($request);

    if ($response->metalsSupportedCurrenciesMetalsGET200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
