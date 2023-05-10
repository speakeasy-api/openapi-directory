# creators

### Available Operations

* [creatorsList](#creatorslist) - Get a list of game creators.
* [creatorsRead](#creatorsread) - Get details of the creator.

## creatorsList

Get a list of game creators.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatorsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatorsListRequest();
    $request->page = 602763;
    $request->pageSize = 857946;

    $response = $sdk->creators->creatorsList($request);

    if ($response->creatorsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creatorsRead

Get details of the creator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatorsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatorsReadRequest();
    $request->id = '8d69a674-e0f4-467c-8879-6ed151a05dfc';

    $response = $sdk->creators->creatorsRead($request);

    if ($response->personSingle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
