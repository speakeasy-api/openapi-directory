# rootVcdHierarchy

## Overview

vCloud hierarchy.

### Available Operations

* [getVcdHierarchyChildrenV1](#getvcdhierarchychildrenv1) - Get immediate descendant objects
* [getVcdHierarchyDescendantsV1](#getvcdhierarchydescendantsv1) - Get list of descendant objects
* [getVcdHierarchyObjectV1](#getvcdhierarchyobjectv1) - Get summary of a vCD hierarchy object

## getVcdHierarchyChildrenV1

Retrieve the list of immediate descendant objects for the specified parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyChildrenV1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyChildrenV1ObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyChildrenV1SLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyChildrenV1SnappableStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyChildrenV1SortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyChildrenV1SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVcdHierarchyChildrenV1Request();
    $request->effectiveSlaDomainId = 'adipisci';
    $request->id = '5d5e65da-028c-43e9-91a1-e30fda966489';
    $request->isRelic = false;
    $request->limit = 824062;
    $request->name = 'Candice Koepp';
    $request->objectType = GetVcdHierarchyChildrenV1ObjectTypeEnum::ORG;
    $request->offset = 241236;
    $request->primaryClusterId = 'necessitatibus';
    $request->slaAssignment = GetVcdHierarchyChildrenV1SLAAssignmentEnum::DERIVED;
    $request->snappableStatus = GetVcdHierarchyChildrenV1SnappableStatusEnum::PROTECTABLE;
    $request->sortBy = GetVcdHierarchyChildrenV1SortByEnum::EFFECTIVE_SLA_DOMAIN_NAME;
    $request->sortOrder = GetVcdHierarchyChildrenV1SortOrderEnum::DESC;

    $response = $sdk->rootVcdHierarchy->getVcdHierarchyChildrenV1($request);

    if ($response->vcdHierarchyObjectSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVcdHierarchyDescendantsV1

Retrieve the list of descendant objects for the specified parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyDescendantsV1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyDescendantsV1ObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyDescendantsV1SLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyDescendantsV1SnappableStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyDescendantsV1SortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyDescendantsV1SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVcdHierarchyDescendantsV1Request();
    $request->effectiveSlaDomainId = 'quasi';
    $request->id = '2a6b9924-9459-4448-bf5c-843836b86b3c';
    $request->isRelic = false;
    $request->limit = 858421;
    $request->name = 'Mrs. Marc Grimes';
    $request->objectType = GetVcdHierarchyDescendantsV1ObjectTypeEnum::CLUSTER;
    $request->offset = 279972;
    $request->primaryClusterId = 'magnam';
    $request->slaAssignment = GetVcdHierarchyDescendantsV1SLAAssignmentEnum::DIRECT;
    $request->snappableStatus = GetVcdHierarchyDescendantsV1SnappableStatusEnum::PROTECTABLE;
    $request->sortBy = GetVcdHierarchyDescendantsV1SortByEnum::VAPP_COUNT;
    $request->sortOrder = GetVcdHierarchyDescendantsV1SortOrderEnum::DESC;

    $response = $sdk->rootVcdHierarchy->getVcdHierarchyDescendantsV1($request);

    if ($response->vcdHierarchyObjectSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVcdHierarchyObjectV1

Retrieve details for the specified object in the vCD hierarchy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdHierarchyObjectV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVcdHierarchyObjectV1Request();
    $request->id = 'df13f4ee-dbe7-48bf-a068-25894ea763d5';

    $response = $sdk->rootVcdHierarchy->getVcdHierarchyObjectV1($request);

    if ($response->vcdHierarchyObjectSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
