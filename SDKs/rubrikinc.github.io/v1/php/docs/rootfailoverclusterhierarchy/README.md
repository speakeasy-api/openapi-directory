# rootFailoverClusterHierarchy

## Overview

Failover cluster hierarchy.

### Available Operations

* [getFailoverClusterHierarchyChildren](#getfailoverclusterhierarchychildren) - Get list of immediate descendant objects
* [getFailoverClusterHierarchyDescendants](#getfailoverclusterhierarchydescendants) - Get list of descendant objects
* [getFailoverClusterHierarchyObject](#getfailoverclusterhierarchyobject) - Get summary of a hierarchy object

## getFailoverClusterHierarchyChildren

Retrieve the list of immediate descendant objects for the specified parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyChildrenRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyChildrenObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyChildrenOperatingSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyChildrenSLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyChildrenSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyChildrenSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFailoverClusterHierarchyChildrenRequest();
    $request->configuredSlaDomainId = 'labore';
    $request->id = 'c02644cf-5e9d-49a4-978a-dc1ac600dec0';
    $request->limit = 51007;
    $request->name = 'Marguerite Sawayn Sr.';
    $request->objectType = GetFailoverClusterHierarchyChildrenObjectTypeEnum::WINDOWS_CLUSTER;
    $request->offset = 148379;
    $request->operatingSystemType = GetFailoverClusterHierarchyChildrenOperatingSystemTypeEnum::WINDOWS;
    $request->primaryClusterId = 'impedit';
    $request->slaAssignment = GetFailoverClusterHierarchyChildrenSLAAssignmentEnum::DERIVED;
    $request->sortBy = GetFailoverClusterHierarchyChildrenSortByEnum::EFFECTIVE_SLA_DOMAIN_NAME;
    $request->sortOrder = GetFailoverClusterHierarchyChildrenSortOrderEnum::DESC;

    $response = $sdk->rootFailoverClusterHierarchy->getFailoverClusterHierarchyChildren($request);

    if ($response->failoverClusterHierarchyObjectSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailoverClusterHierarchyDescendants

Retrieve the list of descendant objects for the specified parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyDescendantsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyDescendantsObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyDescendantsOperatingSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyDescendantsSLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyDescendantsSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyDescendantsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFailoverClusterHierarchyDescendantsRequest();
    $request->configuredSlaDomainId = 'maiores';
    $request->id = '8f0f816f-f347-47c1-be90-2c14125b0960';
    $request->limit = 664197;
    $request->name = 'Mrs. Vicki Luettgen V';
    $request->objectType = GetFailoverClusterHierarchyDescendantsObjectTypeEnum::FILESET;
    $request->offset = 462583;
    $request->operatingSystemType = GetFailoverClusterHierarchyDescendantsOperatingSystemTypeEnum::AIX;
    $request->primaryClusterId = 'deserunt';
    $request->slaAssignment = GetFailoverClusterHierarchyDescendantsSLAAssignmentEnum::UNASSIGNED;
    $request->sortBy = GetFailoverClusterHierarchyDescendantsSortByEnum::EFFECTIVE_SLA_DOMAIN_NAME;
    $request->sortOrder = GetFailoverClusterHierarchyDescendantsSortOrderEnum::ASC;

    $response = $sdk->rootFailoverClusterHierarchy->getFailoverClusterHierarchyDescendants($request);

    if ($response->failoverClusterHierarchyObjectSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailoverClusterHierarchyObject

Retrieve details for the specified hierarchy object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterHierarchyObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFailoverClusterHierarchyObjectRequest();
    $request->id = '3c5949f8-3f35-40cf-876f-fb901c6ecbb4';

    $response = $sdk->rootFailoverClusterHierarchy->getFailoverClusterHierarchyObject($request);

    if ($response->failoverClusterHierarchyObjectSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
