# ratStrain

### Available Operations

* [getAllStrainsUsingGET](#getallstrainsusingget) - Return all active strains in RGD
* [getStrainByRgdIdUsingGET](#getstrainbyrgdidusingget) - Return a strain by RGD ID
* [getStrainsByPositionUsingGET](#getstrainsbypositionusingget) - Return all active strains by position

## getAllStrainsUsingGET

Return all active strains in RGD

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->ratStrain->getAllStrainsUsingGET();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStrainByRgdIdUsingGET

Return a strain by RGD ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETStrainByRgdIdUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStrainByRgdIdUsingGETRequest();
    $request->rgdId = 441711;

    $response = $sdk->ratStrain->getStrainByRgdIdUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStrainsByPositionUsingGET

Return all active strains by position

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETStrainsByPositionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStrainsByPositionUsingGETRequest();
    $request->chr = 'ut';
    $request->mapKey = 979587;
    $request->start = 120196;
    $request->stop = 359444;

    $response = $sdk->ratStrain->getStrainsByPositionUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
