# areas

### Available Operations

* [areasGet](#areasget) - Returns list of areas
* [getVVersionAreasAreaIds](#getvversionareasareaids) - Returns details of selected area

## areasGet

Returns list of areas

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AreasGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AreasGetRequest();
    $request->version = 'provident';

    $response = $sdk->areas->areasGet($request);

    if ($response->areaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVVersionAreasAreaIds

Returns details of selected area

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVVersionAreasAreaIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVVersionAreasAreaIdsRequest();
    $request->areaIds = 'distinctio';
    $request->version = 'quibusdam';

    $response = $sdk->areas->getVVersionAreasAreaIds($request);

    if ($response->areaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
