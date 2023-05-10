# rootVmwareHierarchy

## Overview

VMware hierarchy.

### Available Operations

* [getVmwareHierarchyExport](#getvmwarehierarchyexport) - Get Available VMware Hierarchy Objects for Export Operations
* [getVmwareHierarchyObject](#getvmwarehierarchyobject) - Get VMware Hierarchy Object Information

## getVmwareHierarchyExport

Get VMware Clusters, Hosts, and Resource Pool hierarchy objects that are available as the target for Virtual Machine Export operations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVmwareHierarchyExportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmwareHierarchyExportRequest();
    $request->rootId = 'qui';

    $response = $sdk->rootVmwareHierarchy->getVmwareHierarchyExport($request);

    if ($response->vmwareHierarchyInfoListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmwareHierarchyObject

Get VMware Clusters, Hosts, and Resource Pool hierarchy object detail information by object ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVmwareHierarchyObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmwareHierarchyObjectRequest();
    $request->id = 'c969c4cc-6b78-4890-a3fd-3c81da10f8c2';

    $response = $sdk->rootVmwareHierarchy->getVmwareHierarchyObject($request);

    if ($response->vmwareHierarchyInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
