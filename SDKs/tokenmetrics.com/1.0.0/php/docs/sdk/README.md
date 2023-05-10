# SDK

### Available Operations

* [correlation](#correlation) - Correlation
* [indices](#indices) - Indices
* [investorGrades](#investorgrades) - Investor Grades
* [marketIndicator](#marketindicator) - Market Indicator
* [price](#price) - Price
* [pricePrediction](#priceprediction) - Price Prediction
* [quantmetricsTier1](#quantmetricstier1) - Quantmetrics Tier 1
* [quantmetricsTier2](#quantmetricstier2) - Quantmetrics Tier 2
* [resistanceSupport](#resistancesupport) - Resistance & Support
* [scenarioAnalysis](#scenarioanalysis) - Scenario Analysis
* [sentiments](#sentiments) - Sentiments
* [tokens](#tokens) - Tokens
* [traderGrades](#tradergrades) - Trader Grades
* [tradingIndicator](#tradingindicator) - Trading Indicator

## correlation

Correlation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CorrelationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CorrelationRequest();
    $request->limit = '1000';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->correlation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## indices

Indices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IndicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IndicesRequest();
    $request->endDate = '2023-01-11';
    $request->exchanges = 'binance';
    $request->limit = '1000';
    $request->lowCap = 'true';
    $request->startDate = '2023-01-10';
    $request->timeHorizon = 'daily';

    $response = $sdk->sdk->indices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## investorGrades

Investor Grades

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvestorGradesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvestorGradesRequest();
    $request->endDate = '2023-01-11';
    $request->limit = '1000';
    $request->startDate = '2023-01-10';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->investorGrades($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## marketIndicator

Market Indicator

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MarketIndicatorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MarketIndicatorRequest();
    $request->endDate = '2023-01-11';
    $request->limit = '1000';
    $request->startDate = '2023-01-10';

    $response = $sdk->sdk->marketIndicator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## price

Price

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PriceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PriceRequest();
    $request->endDate = '2023-01-11';
    $request->limit = '1000';
    $request->page = '1';
    $request->startDate = '2023-01-10';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->price($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pricePrediction

Price Prediction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PricePredictionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PricePredictionRequest();
    $request->date = '2023-02-01';
    $request->limit = '1000';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->pricePrediction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quantmetricsTier1

Quantmetrics Tier 1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuantmetricsTier1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuantmetricsTier1Request();
    $request->date = '2023-02-01';
    $request->limit = '1000';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->quantmetricsTier1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quantmetricsTier2

Quantmetrics Tier 2

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuantmetricsTier2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuantmetricsTier2Request();
    $request->date = '2023-02-01';
    $request->limit = '1000';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->quantmetricsTier2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resistanceSupport

Resistance & Support

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResistanceSupportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResistanceSupportRequest();
    $request->endDate = '2023-01-11';
    $request->limit = '1000';
    $request->startDate = '2023-01-10';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->resistanceSupport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scenarioAnalysis

Scenario Analysis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScenarioAnalysisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScenarioAnalysisRequest();
    $request->limit = '1000';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->scenarioAnalysis($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sentiments

Sentiments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SentimentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SentimentsRequest();
    $request->endDate = '2023-01-11';
    $request->limit = '1000';
    $request->startDate = '2023-01-10';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->sentiments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tokens

Tokens

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TokensRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokensRequest();
    $request->tokenIds = '3375, 3306';
    $request->tokenNames = 'Hivemapper, Sei_Network, Layer_Zero, Lyra Huobi';
    $request->tokenSymbols = 'bds, bds, btc';

    $response = $sdk->sdk->tokens($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## traderGrades

Trader Grades

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TraderGradesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TraderGradesRequest();
    $request->endDate = '2023-01-11';
    $request->limit = '1000';
    $request->startDate = '2023-01-10';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->traderGrades($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tradingIndicator

Trading Indicator

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TradingIndicatorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TradingIndicatorRequest();
    $request->limit = '1000';
    $request->tokens = '3375, 3306';

    $response = $sdk->sdk->tradingIndicator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
