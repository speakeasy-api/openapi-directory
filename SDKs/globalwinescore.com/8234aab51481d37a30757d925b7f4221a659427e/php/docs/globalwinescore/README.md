# globalWineScore

### Available Operations

* [getGlobalwinescoresLatest](#getglobalwinescoreslatest) - List all latest GWS
* [listHistoricalGWS](#listhistoricalgws) - List all historical GWS

## getGlobalwinescoresLatest

Returns the latest GWS available per wine/vintage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalwinescoresLatestRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalwinescoresLatestColorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalwinescoresLatestOrderingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGlobalwinescoresLatestRequest();
    $request->authorization = 'suscipit';
    $request->color = GetGlobalwinescoresLatestColorEnum::WHITE;
    $request->isPrimeurs = false;
    $request->limit = 297534;
    $request->lwin = 'debitis';
    $request->lwin11 = 'ipsa';
    $request->offset = 963663;
    $request->ordering = GetGlobalwinescoresLatestOrderingEnum::MINUS_DATE;
    $request->vintage = 'suscipit';
    $request->wineId = [
        791725,
        812169,
    ];

    $response = $sdk->globalWineScore->getGlobalwinescoresLatest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHistoricalGWS

Returns all available GWS

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHistoricalGWSRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListHistoricalGWSColorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListHistoricalGWSOrderingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHistoricalGWSRequest();
    $request->authorization = 'voluptatum';
    $request->color = ListHistoricalGWSColorEnum::WHITE;
    $request->isPrimeurs = false;
    $request->limit = 568045;
    $request->lwin = 'nisi';
    $request->lwin11 = 'recusandae';
    $request->offset = 836079;
    $request->ordering = ListHistoricalGWSOrderingEnum::DATE;
    $request->vintage = 'quis';
    $request->wineId = [
        648172,
    ];

    $response = $sdk->globalWineScore->listHistoricalGWS($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
