# rootSnapshot

### Available Operations

* [getSnapshotStorageStatsV1](#getsnapshotstoragestatsv1) - Returns storage stats for a snapshot

## getSnapshotStorageStatsV1

Returns the storage statistics for a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSnapshotStorageStatsV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSnapshotStorageStatsV1Request();
    $request->id = '3512c737-8489-4307-90a0-0e966ec736d4';

    $response = $sdk->rootSnapshot->getSnapshotStorageStatsV1($request);

    if ($response->snapshotStorageStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
