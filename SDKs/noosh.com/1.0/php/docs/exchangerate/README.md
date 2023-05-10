# exchangeRate

### Available Operations

* [getExchangeRateList](#getexchangeratelist) - Get Exchange Rate List
* [postExchangeRateJson](#postexchangeratejson) - Create Exchange Rates
* [postExchangeRateRaw](#postexchangerateraw) - Create Exchange Rates

## getExchangeRateList

Get Exchange Rate List

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExchangeRateListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExchangeRateListRequest();
    $request->workgroupId = 'molestiae';

    $response = $sdk->exchangeRate->getExchangeRateList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postExchangeRateJson

Create Exchange Rates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostExchangeRateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\MultiExchangeRatePersistListVO;
use \OpenAPI\OpenAPI\Models\Shared\MultiExchangeRatePersisitVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostExchangeRateJsonRequest();
    $request->multiExchangeRatePersistListVO = new MultiExchangeRatePersistListVO();
    $request->multiExchangeRatePersistListVO->exchangeRates = [
        new MultiExchangeRatePersisitVO(),
        new MultiExchangeRatePersisitVO(),
        new MultiExchangeRatePersisitVO(),
        new MultiExchangeRatePersisitVO(),
    ];
    $request->workgroupId = 'placeat';

    $response = $sdk->exchangeRate->postExchangeRateJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postExchangeRateRaw

Create Exchange Rates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostExchangeRateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostExchangeRateRawRequest();
    $request->requestBody = 'voluptatum';
    $request->workgroupId = 'iusto';

    $response = $sdk->exchangeRate->postExchangeRateRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
