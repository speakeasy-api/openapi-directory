# rootVmwareHost

## Overview

VMware hypervisor hosts.

### Available Operations

* [getVmwareHost](#getvmwarehost) - Get details of a ESXi hypervisor
* [getVmwareHostDatastore](#getvmwarehostdatastore) - Get details of datastores in a ESXi hypervisor
* [queryVmwareHost](#queryvmwarehost) - Get summary of all the ESXi hypervisor
* [updateVmwareHost](#updatevmwarehost) - Update the SLA Domain for an ESXi hypervisor

## getVmwareHost

Get details of a ESXi hypervisor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVmwareHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmwareHostRequest();
    $request->id = '3df931da-3edb-451f-ad94-acc943513772';

    $response = $sdk->rootVmwareHost->getVmwareHost($request);

    if ($response->vmwareHostDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmwareHostDatastore

Get details of datastores in a ESXi hypervisor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVmwareHostDatastoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmwareHostDatastoreRequest();
    $request->id = '6d15321b-832a-456d-a918-0ff60eb9a665';

    $response = $sdk->rootVmwareHost->getVmwareHostDatastore($request);

    if ($response->vmwareHostDatastoreDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVmwareHost

Get summary of all the ESXi hypervisor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVmwareHostRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryVmwareHostSnappableStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVmwareHostRequest();
    $request->computeClusterId = 'atque';
    $request->primaryClusterId = 'saepe';
    $request->snappableStatus = QueryVmwareHostSnappableStatusEnum::PROTECTABLE;

    $response = $sdk->rootVmwareHost->queryVmwareHost($request);

    if ($response->vmwareHostSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVmwareHost

Update the SLA Domain that is configured for an ESXi hypervisor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVmwareHostRequest;
use \OpenAPI\OpenAPI\Models\Shared\VmwareHostUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVmwareHostRequest();
    $request->vmwareHostUpdate = new VmwareHostUpdate();
    $request->vmwareHostUpdate->configuredSlaDomainId = 'eum';
    $request->id = '9a4b843d-382d-4bec-b5c6-8c60659468ce';

    $response = $sdk->rootVmwareHost->updateVmwareHost($request);

    if ($response->vmwareHostDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
