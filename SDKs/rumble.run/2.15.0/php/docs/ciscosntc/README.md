# ciscoSNTC

### Available Operations

* [exportAssetsCiscoCSV](#exportassetsciscocsv) - Cisco serial number and model name export for Cisco Smart Net Total Care Service.

## exportAssetsCiscoCSV

Cisco serial number and model name export for Cisco Smart Net Total Care Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetsCiscoCSVRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetsCiscoCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportAssetsCiscoCSVRequest();
    $request->search = 'quasi';

    $requestSecurity = new ExportAssetsCiscoCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->ciscoSNTC->exportAssetsCiscoCSV($request, $requestSecurity);

    if ($response->exportAssetsCiscoCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
