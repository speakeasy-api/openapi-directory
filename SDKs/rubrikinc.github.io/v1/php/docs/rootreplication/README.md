# rootReplication

## Overview

Replication.

### Available Operations

* [disablePerLocationPause](#disableperlocationpause) - Resume replication from specified source clusters
* [enablePerLocationPause](#enableperlocationpause) - Pause replication from specified source clusters

## disablePerLocationPause

A single Rubrik cluster can be the replication target for multiple source Rubrik clusters. For each source cluster specified, this resumes replication from that source cluster to the target cluster. This call must be made on the target cluster.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\DisablePerLocationPause;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisablePerLocationPause();
    $request->shouldSkipOldSnapshots = false;
    $request->sourceClusterUuids = [
        'impedit',
        'ducimus',
        'incidunt',
        'voluptatibus',
    ];

    $response = $sdk->rootReplication->disablePerLocationPause($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enablePerLocationPause

A single Rubrik cluster can be the replication target for multiple source Rubrik clusters. For each source cluster specified, this pauses replication from that source cluster to the target cluster. This call must be made on the target cluster.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\EnablePerLocationPause;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnablePerLocationPause();
    $request->shouldCancelImmediately = false;
    $request->sourceClusterUuids = [
        'ducimus',
        'nam',
    ];

    $response = $sdk->rootReplication->enablePerLocationPause($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
