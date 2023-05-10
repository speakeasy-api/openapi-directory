# rootVmwareComputeCluster

## Overview

VMware compute clusters.

### Available Operations

* [getAsyncRequestStatusForComputeCluster](#getasyncrequeststatusforcomputecluster) - Get asynchronous request details for VMware cluster
* [getComputeCluster](#getcomputecluster) - Get details for the compute cluster
* [getIoFilters](#getiofilters) - Get the ioFilters on the VMware compute cluster with a specific ID
* [installIoFilter](#installiofilter) - Install the Rubrik ioFilter to the VMware cluster with a specific ID
* [queryComputeCluster](#querycomputecluster) - Get all the clusters belonging to this datacenter
* [uninstallIoFilter](#uninstalliofilter) - Uninstall the Rubrik ioFilter from the VMware cluster with a specific ID
* [updateComputeCluster](#updatecomputecluster) - Modify information for a VMware compute cluster
* [upgradeIoFilter](#upgradeiofilter) - Upgrade the Rubrik ioFilter for the VMware cluster with a specific ID

## getAsyncRequestStatusForComputeCluster

Get the details of an asynchronous request that involves a VMware compute cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetAsyncRequestStatusForComputeClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAsyncRequestStatusForComputeClusterRequest();
    $request->id = '8162c6be-b68a-40f6-97b7-d03a1480f8de';

    $response = $sdk->rootVmwareComputeCluster->getAsyncRequestStatusForComputeCluster($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComputeCluster

Get details for the compute cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetComputeClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComputeClusterRequest();
    $request->id = '30f069d8-1061-48d9-be15-2297510da803';

    $response = $sdk->rootVmwareComputeCluster->getComputeCluster($request);

    if ($response->computeClusterDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIoFilters

Get the summary of the ioFilters on the VMware compute cluster with a specific ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetIoFiltersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIoFiltersRequest();
    $request->id = '12292cc6-1c2a-4702-bb97-ee102da2de35';

    $response = $sdk->rootVmwareComputeCluster->getIoFilters($request);

    if ($response->ioFilterSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## installIoFilter

Install the latest version of Rubrik ioFilter to the VMware cluster with a specific ID. The cluster must be in maintenance mode to install the ioFilter successfully. The vCenter of the VMware compute cluster must be of version 6.7 and above.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\InstallIoFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\FullyQualifiedDomainNameInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstallIoFilterRequest();
    $request->fullyQualifiedDomainNameInfo = new FullyQualifiedDomainNameInfo();
    $request->fullyQualifiedDomainNameInfo->fqdn = 'tenetur';
    $request->id = '8e01bf33-eaab-4454-82ac-1704bf1cc9fc';

    $response = $sdk->rootVmwareComputeCluster->installIoFilter($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryComputeCluster

Get all the clusters belonging to this datacenter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryComputeClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryComputeClusterSnappableStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryComputeClusterRequest();
    $request->datacenterId = 'ex';
    $request->primaryClusterId = 'dicta';
    $request->snappableStatus = QueryComputeClusterSnappableStatusEnum::PROTECTABLE;

    $response = $sdk->rootVmwareComputeCluster->queryComputeCluster($request);

    if ($response->computeClusterSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uninstallIoFilter

Uninstall the Rubrik ioFilter from the VMware cluster with a specific ID. The cluster must be in maintenance mode to uninstall the ioFilter successfully. The vCenter of the VMware compute cluster must be of version 6.7 and above.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UninstallIoFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UninstallIoFilterRequest();
    $request->id = 'aae5eb5f-0c49-42b5-b44d-08a2267aaee7';

    $response = $sdk->rootVmwareComputeCluster->uninstallIoFilter($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateComputeCluster

Update the configuredSlaDomainId for a VMware compute cluster with a specific ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComputeClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComputeClusterUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateComputeClusterRequest();
    $request->computeClusterUpdate = new ComputeClusterUpdate();
    $request->computeClusterUpdate->configuredSlaDomainId = 'omnis';
    $request->id = 'e3c71ad3-1bec-4b83-9237-8ae3bfc23d94';

    $response = $sdk->rootVmwareComputeCluster->updateComputeCluster($request);

    if ($response->computeClusterDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upgradeIoFilter

Upgrade the Rubrik ioFilter for a VMware cluster with a specific ID. The cluster must be in maintenance mode to upgrade the ioFilter successfully. The vCenter of the VMware compute cluster must be of version 6.7 and above.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpgradeIoFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\FullyQualifiedDomainNameInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpgradeIoFilterRequest();
    $request->fullyQualifiedDomainNameInfo = new FullyQualifiedDomainNameInfo();
    $request->fullyQualifiedDomainNameInfo->fqdn = 'ad';
    $request->id = '0a986a49-5bac-4707-b06b-28ecc8649238';

    $response = $sdk->rootVmwareComputeCluster->upgradeIoFilter($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
