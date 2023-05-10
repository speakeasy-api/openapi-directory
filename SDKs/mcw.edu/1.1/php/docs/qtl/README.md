# qtl

### Available Operations

* [getMappedQTLByPositionUsingGET](#getmappedqtlbypositionusingget) - Returns a list QTL for given position and assembly map
* [getQTLByRgdIdUsingGET](#getqtlbyrgdidusingget) - Return a QTL for provided RGD ID
* [getQtlListByPositionUsingGET](#getqtllistbypositionusingget) - Returns a list QTL for given position and assembly map

## getMappedQTLByPositionUsingGET

Returns a list QTL for given position and assembly map

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMappedQTLByPositionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMappedQTLByPositionUsingGETRequest();
    $request->chr = 'laborum';
    $request->mapKey = 96098;
    $request->start = 971945;
    $request->stop = 976460;

    $response = $sdk->qtl->getMappedQTLByPositionUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQTLByRgdIdUsingGET

Return a QTL for provided RGD ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETQTLByRgdIdUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETQTLByRgdIdUsingGETRequest();
    $request->rgdId = 878194;

    $response = $sdk->qtl->getQTLByRgdIdUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQtlListByPositionUsingGET

Returns a list QTL for given position and assembly map

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETQtlListByPositionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETQtlListByPositionUsingGETRequest();
    $request->chr = 'nihil';
    $request->mapKey = 509624;
    $request->start = 976762;
    $request->stop = 55714;

    $response = $sdk->qtl->getQtlListByPositionUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
