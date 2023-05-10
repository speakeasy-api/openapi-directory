# statistics

### Available Operations

* [getStatistics](#getstatistics) - Get clicks statistics

## getStatistics

Retrieve the raw click statistics for your account. Clicks are retrieved by creation date in descending order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ClicksFilterModel;
use \OpenAPI\OpenAPI\Models\Operations\GetStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClicksFilterModel();
    $request->aliasId = 'aBcDe012';
    $request->dateFrom = '2001-05-02';
    $request->dateTo = '2001-05-02';
    $request->domain = 'short.fyi';
    $request->lastId = 100;

    $requestSecurity = new GetStatisticsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->statistics->getStatistics($request, $requestSecurity);

    if ($response->clickModelPg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
