# splunk

### Available Operations

* [splunkAssetSyncCreatedJSON](#splunkassetsynccreatedjson) - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
* [splunkAssetSyncUpdatedJSON](#splunkassetsyncupdatedjson) - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.

## splunkAssetSyncCreatedJSON

Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SplunkAssetSyncCreatedJSONRequest;
use \OpenAPI\OpenAPI\Models\Operations\SplunkAssetSyncCreatedJSONSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SplunkAssetSyncCreatedJSONRequest();
    $request->fields = 'doloremque';
    $request->search = 'consequatur';
    $request->since = 1576300370;

    $requestSecurity = new SplunkAssetSyncCreatedJSONSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->splunk->splunkAssetSyncCreatedJSON($request, $requestSecurity);

    if ($response->assetsWithCheckpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## splunkAssetSyncUpdatedJSON

Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SplunkAssetSyncUpdatedJSONRequest;
use \OpenAPI\OpenAPI\Models\Operations\SplunkAssetSyncUpdatedJSONSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SplunkAssetSyncUpdatedJSONRequest();
    $request->fields = 'officia';
    $request->search = 'recusandae';
    $request->since = 1576300370;

    $requestSecurity = new SplunkAssetSyncUpdatedJSONSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->splunk->splunkAssetSyncUpdatedJSON($request, $requestSecurity);

    if ($response->assetsWithCheckpoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
