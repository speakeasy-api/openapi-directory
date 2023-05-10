# serviceNow

### Available Operations

* [snowExportAssetsCSV](#snowexportassetscsv) - Export an asset inventory as CSV for ServiceNow integration
* [snowExportAssetsJSON](#snowexportassetsjson) - Exports the asset inventory as JSON
* [snowExportServicesCSV](#snowexportservicescsv) - Export a service inventory as CSV for ServiceNow integration

## snowExportAssetsCSV

Export an asset inventory as CSV for ServiceNow integration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SnowExportAssetsCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new SnowExportAssetsCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->serviceNow->snowExportAssetsCSV($requestSecurity);

    if ($response->snowExportAssetsCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## snowExportAssetsJSON

Exports the asset inventory as JSON

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SnowExportAssetsJSONSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new SnowExportAssetsJSONSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->serviceNow->snowExportAssetsJSON($requestSecurity);

    if ($response->assetServiceNows !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## snowExportServicesCSV

Export a service inventory as CSV for ServiceNow integration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SnowExportServicesCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new SnowExportServicesCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->serviceNow->snowExportServicesCSV($requestSecurity);

    if ($response->snowExportServicesCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
