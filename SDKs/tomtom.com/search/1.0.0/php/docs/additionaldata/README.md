# additionalData

### Available Operations

* [getSearchVersionNumberAdditionalDataExt](#getsearchversionnumberadditionaldataext) - Additional Data

## getSearchVersionNumberAdditionalDataExt

Additional Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberAdditionalDataExtRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberAdditionalDataExtExtEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberAdditionalDataExtRequest();
    $request->ext = GetSearchVersionNumberAdditionalDataExtExtEnum::JSON;
    $request->geometries = 'distinctio';
    $request->geometriesZoom = GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum::NINETEEN;
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->additionalData->getSearchVersionNumberAdditionalDataExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
