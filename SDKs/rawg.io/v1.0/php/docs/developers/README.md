# developers

### Available Operations

* [developersList](#developerslist) - Get a list of game developers.
* [developersRead](#developersread) - Get details of the developer.

## developersList

Get a list of game developers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevelopersListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevelopersListRequest();
    $request->page = 140350;
    $request->pageSize = 870013;

    $response = $sdk->developers->developersList($request);

    if ($response->developersList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## developersRead

Get details of the developer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevelopersReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevelopersReadRequest();
    $request->id = 870088;

    $response = $sdk->developers->developersRead($request);

    if ($response->developerSingle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
