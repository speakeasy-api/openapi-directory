# events

### Available Operations

* [getQueryJson](#getqueryjson) - Geographic API

## getQueryJson

Geographic API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryJsonFacetsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryJsonRequest();
    $request->dateRange = 'delectus';
    $request->elevation = 272656;
    $request->facets = GetQueryJsonFacetsEnum::ZERO;
    $request->filter = 'molestiae';
    $request->latitude = 'minus';
    $request->limit = 812169;
    $request->longitude = 'voluptatum';
    $request->name = 'Miriam Huel';
    $request->offset = 71036;
    $request->query = 'quis';
    $request->sort = 'veritatis';
    $request->sw = 'deserunt';

    $response = $sdk->events->getQueryJson($request);

    if ($response->getQueryJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
