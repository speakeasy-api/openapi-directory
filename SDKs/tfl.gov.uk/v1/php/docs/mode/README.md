# mode

### Available Operations

* [modeArrivals](#modearrivals) - Gets the next arrival predictions for all stops of a given mode
* [modeGetActiveServiceTypes](#modegetactiveservicetypes) - Returns the service type active for a mode.
            Currently only supports tube

## modeArrivals

Gets the next arrival predictions for all stops of a given mode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ModeArrivalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModeArrivalsRequest();
    $request->count = 569965;
    $request->mode = 'ullam';

    $response = $sdk->mode->modeArrivals($request);

    if ($response->tflApiPresentationEntitiesPredictions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modeGetActiveServiceTypes

Returns the service type active for a mode.
            Currently only supports tube

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->mode->modeGetActiveServiceTypes();

    if ($response->tflApiPresentationEntitiesActiveServiceTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
