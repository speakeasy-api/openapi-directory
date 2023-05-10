# rootVmwareVcenter

## Overview

VMware vCenter.

### Available Operations

* [createRefresh](#createrefresh) - Refresh vCenter Server metadata
* [createRefreshVmV1](#createrefreshvmv1) - Refresh single virtual machine metadata in a vcenter
* [createVcenter](#createvcenter) - Add vCenter Server
* [deleteVcenter](#deletevcenter) - Remove vCenter Server
* [getHotAddBandwidth](#gethotaddbandwidth) - Get the ingest and export bandwidth limits for HotAdd with the vCenter
* [getHotAddNetwork](#gethotaddnetwork) - Retrieve the user-configured network for HotAdd operations
* [getNetworks](#getnetworks) - Get the user-configured networks in the vCenter
* [getNumProxiesNeeded](#getnumproxiesneeded) - Get the number of HotAdd proxies needed for the vCenter
* [getVcenter](#getvcenter) - Get the details of a vCenter Server
* [getVcenterAsyncRequestStatus](#getvcenterasyncrequeststatus) - Get vCenter Server async request
* [patchVcenter](#patchvcenter) - Update the SLA Domain for a vCenter Server
* [queryHotAddProxyVm](#queryhotaddproxyvm) - Get a list of HotAdd proxy virtual machines
* [queryVcenter](#queryvcenter) - Get list of vCenters
* [setHotAddBandwidth](#sethotaddbandwidth) - Set the ingest and export bandwidth limits for HotAdd with the vCenter
* [setHotAddNetwork](#sethotaddnetwork) - Set the user-configured network for HotAdd backup and recovery
* [updateVcenter](#updatevcenter) - Update vCenter Server

## createRefresh

Create a job to refresh the metadata for the specified vCenter Server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateRefreshRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRefreshRequest();
    $request->id = '304d8849-bf82-414c-b37f-96bb0c69e372';

    $response = $sdk->rootVmwareVcenter->createRefresh($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRefreshVmV1

Refresh the metadata for a single virtual machine controlled by vCenter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateRefreshVmV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRefreshVmV1Request();
    $request->requestBody = 'facere';
    $request->id = 'b1344ba9-f78a-45c0-ad7a-ab62e97261fb';

    $response = $sdk->rootVmwareVcenter->createRefreshVmV1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVcenter

(DEPRECATED) Create a vCenter Server object by providing the address and account credentials of the vCenter Server. Initiates an asynchronous job to establish a connection with the vCenter Server and retrieve all metadata. Use GET /vcenter/{id}/status to check status. The recommended endpoint is /v2/vmware/vcenter. This endpoint will remain available in future releases despite deprecation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\VcenterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClusterVisibilityConfig;
use \OpenAPI\OpenAPI\Models\Shared\VcenterConfigConflictResolutionAuthzEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VcenterConfig();
    $request->caCerts = 'alias';
    $request->computeVisibilityFilter = [
        new ClusterVisibilityConfig(),
        new ClusterVisibilityConfig(),
        new ClusterVisibilityConfig(),
        new ClusterVisibilityConfig(),
    ];
    $request->conflictResolutionAuthz = VcenterConfigConflictResolutionAuthzEnum::ALLOW_AUTO_CONFLICT_RESOLUTION;
    $request->hostname = 'mountainous-spokeswoman.com';
    $request->password = 'voluptate';
    $request->username = 'Nellie58';

    $response = $sdk->rootVmwareVcenter->createVcenter($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVcenter

Initiates an asynchronous job to remove a vCenter Server object. The vCenter Server cannot have VMs mounted through the Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVcenterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVcenterRequest();
    $request->id = '96b5b4b5-0eef-4712-b7a7-ab0344b17106';

    $response = $sdk->rootVmwareVcenter->deleteVcenter($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHotAddBandwidth

Get the ingest and export bandwidth limits in Mbps when using HotAdd with the vCenter. These limits are shared across all HotAdd proxies for the Center.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetHotAddBandwidthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHotAddBandwidthRequest();
    $request->id = '88deebef-897f-43dd-8ccd-33f11b3e4e08';

    $response = $sdk->rootVmwareVcenter->getHotAddBandwidth($request);

    if ($response->hotAddBandwidthInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHotAddNetwork

Retrieve the user-configured network for HotAdd backup and recovery operations on VMware on AWS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetHotAddNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHotAddNetworkRequest();
    $request->id = '0aa10418-6ec7-459e-82f3-702c5c8e2d30';

    $response = $sdk->rootVmwareVcenter->getHotAddNetwork($request);

    if ($response->hotAddNetworkConfigWithName !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworks

Get the names and IDs of the user configured networks in the vCenter. This information enables users to choose a desired network for backups to go through for VMware Cloud on AWS setups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworksRequest();
    $request->id = 'ead3104f-a447-407b-b375-b44282821fdb';

    $response = $sdk->rootVmwareVcenter->getNetworks($request);

    if ($response->networkInfoListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumProxiesNeeded

Get the number of HotAdd proxies that need to be deployed to the vCenter to support the maximum number of ingest jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetNumProxiesNeededRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumProxiesNeededRequest();
    $request->id = '2f69e592-67c7-41cc-8d3c-d4258d0358a8';

    $response = $sdk->rootVmwareVcenter->getNumProxiesNeeded($request);

    if ($response->hotAddProxiesNeededInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVcenter

Retrieve detailed information for a vCenter Server object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVcenterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVcenterRequest();
    $request->id = '2c808fe2-751a-4204-bc04-49e143f9619b';

    $response = $sdk->rootVmwareVcenter->getVcenter($request);

    if ($response->vcenterDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVcenterAsyncRequestStatus

Get details about a vcenter related async request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVcenterAsyncRequestStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVcenterAsyncRequestStatusRequest();
    $request->id = 'b7d40d5a-11fa-4436-a625-9233f95c9d23';

    $response = $sdk->rootVmwareVcenter->getVcenterAsyncRequestStatus($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchVcenter

Update the SLA Domain that is configured for a vCenter Server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PatchVcenterRequest;
use \OpenAPI\OpenAPI\Models\Shared\VcenterPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchVcenterRequest();
    $request->vcenterPatch = new VcenterPatch();
    $request->vcenterPatch->caCerts = 'iusto';
    $request->vcenterPatch->configuredSlaDomainId = 'ratione';
    $request->id = '97c785b5-db4f-4500-983f-ebdf676b7206';

    $response = $sdk->rootVmwareVcenter->patchVcenter($request);

    if ($response->vcenterSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryHotAddProxyVm

Retrieve summary information for all HotAdd proxy virtual machines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryHotAddProxyVmRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryHotAddProxyVmSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryHotAddProxyVmSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryHotAddProxyVmRequest();
    $request->name = 'Gerard Purdy';
    $request->sortBy = QueryHotAddProxyVmSortByEnum::NAME;
    $request->sortOrder = QueryHotAddProxyVmSortOrderEnum::ASC;

    $response = $sdk->rootVmwareVcenter->queryHotAddProxyVm($request);

    if ($response->hotAddProxyVmInfoListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVcenter

Retrieve information for each managed vCenter, including: ID, managed ID, address, username, SLA ID, and primary cluster ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcenterRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcenterSnappableStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVcenterRequest();
    $request->ignoreConnectionStatus = false;
    $request->primaryClusterId = 'sit';
    $request->snappableStatus = QueryVcenterSnappableStatusEnum::PROTECTABLE;

    $response = $sdk->rootVmwareVcenter->queryVcenter($request);

    if ($response->vcenterSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setHotAddBandwidth

Set the ingest and export bandwidth limits in Mbps when using HotAdd with the vCenter. These limits are shared across all HotAdd proxies for the Center.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SetHotAddBandwidthRequest;
use \OpenAPI\OpenAPI\Models\Shared\HotAddBandwidthInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetHotAddBandwidthRequest();
    $request->hotAddBandwidthInfo = new HotAddBandwidthInfo();
    $request->hotAddBandwidthInfo->exportLimit = 316842;
    $request->hotAddBandwidthInfo->ingestLimit = 181615;
    $request->id = 'a5647edc-439e-4d8c-8320-f41240d4487a';

    $response = $sdk->rootVmwareVcenter->setHotAddBandwidth($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setHotAddNetwork

Set the user-configured network for HotAdd backup and recovery operations on VMware on AWS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SetHotAddNetworkRequest;
use \OpenAPI\OpenAPI\Models\Shared\HotAddNetworkConfigWithId;
use \OpenAPI\OpenAPI\Models\Shared\StaticIpInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetHotAddNetworkRequest();
    $request->hotAddNetworkConfigWithId = new HotAddNetworkConfigWithId();
    $request->hotAddNetworkConfigWithId->networkId = 'porro';
    $request->hotAddNetworkConfigWithId->staticIpInfo = new StaticIpInfo();
    $request->hotAddNetworkConfigWithId->staticIpInfo->dnsServers = [
        'provident',
        'neque',
    ];
    $request->hotAddNetworkConfigWithId->staticIpInfo->gateway = 'expedita';
    $request->hotAddNetworkConfigWithId->staticIpInfo->ipAddresses = [
        'quaerat',
        'nobis',
        'nesciunt',
    ];
    $request->hotAddNetworkConfigWithId->staticIpInfo->subnetMask = 'quidem';
    $request->id = '9d2488d7-95aa-442f-8405-669f69a006d2';

    $response = $sdk->rootVmwareVcenter->setHotAddNetwork($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVcenter

Update the address, username and password of the specified vCenter Server object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVcenterRequest;
use \OpenAPI\OpenAPI\Models\Shared\VcenterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClusterVisibilityConfig;
use \OpenAPI\OpenAPI\Models\Shared\VcenterConfigConflictResolutionAuthzEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVcenterRequest();
    $request->vcenterConfig = new VcenterConfig();
    $request->vcenterConfig->caCerts = 'inventore';
    $request->vcenterConfig->computeVisibilityFilter = [
        new ClusterVisibilityConfig(),
    ];
    $request->vcenterConfig->conflictResolutionAuthz = VcenterConfigConflictResolutionAuthzEnum::ALLOW_AUTO_CONFLICT_RESOLUTION;
    $request->vcenterConfig->hostname = 'organic-earthworm.info';
    $request->vcenterConfig->password = 'aut';
    $request->vcenterConfig->username = 'Kamryn_Botsford';
    $request->id = '7c3b1b41-8440-460e-8031-0d023dc901f5';

    $response = $sdk->rootVmwareVcenter->updateVcenter($request);

    if ($response->vcenterSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
