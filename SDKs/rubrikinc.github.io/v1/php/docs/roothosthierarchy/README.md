# rootHostHierarchy

## Overview

Host hierarchy.

### Available Operations

* [getHostHierarchyChildren](#gethosthierarchychildren) - Get immediate descendant objects
* [getHostHierarchyObject](#gethosthierarchyobject) - Get summary of a host/share hierarchy object

## getHostHierarchyChildren

Retrieve the list of immediate descendant objects for the specified parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetHostHierarchyChildrenRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetHostHierarchyChildrenObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetHostHierarchyChildrenOperatingSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetHostHierarchyChildrenSLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetHostHierarchyChildrenSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetHostHierarchyChildrenSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetHostHierarchyChildrenVendorTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHostHierarchyChildrenRequest();
    $request->effectiveSlaDomainId = 'commodi';
    $request->exportPoint = 'commodi';
    $request->id = '2550a283-82ac-4483-afd2-315bba650164';
    $request->limit = 908274;
    $request->name = 'Eileen Yundt';
    $request->objectType = GetHostHierarchyChildrenObjectTypeEnum::SHARE;
    $request->offset = 431893;
    $request->operatingSystemType = GetHostHierarchyChildrenOperatingSystemTypeEnum::UNIX_LIKE;
    $request->primaryClusterId = 'repudiandae';
    $request->slaAssignment = GetHostHierarchyChildrenSLAAssignmentEnum::DIRECT;
    $request->sortBy = GetHostHierarchyChildrenSortByEnum::EXPORT_POINT;
    $request->sortOrder = GetHostHierarchyChildrenSortOrderEnum::ASC;
    $request->templateId = 'expedita';
    $request->vendorType = GetHostHierarchyChildrenVendorTypeEnum::FLASH_BLADE;

    $response = $sdk->rootHostHierarchy->getHostHierarchyChildren($request);

    if ($response->hostHierarchyObjectSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHostHierarchyObject

Retrieve details for the specified object in the host/share hierarchy.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetHostHierarchyObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHostHierarchyObjectRequest();
    $request->id = '8bdef361-2b63-4c20-9fda-840774a68a9a';

    $response = $sdk->rootHostHierarchy->getHostHierarchyObject($request);

    if ($response->getHostHierarchyObject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
