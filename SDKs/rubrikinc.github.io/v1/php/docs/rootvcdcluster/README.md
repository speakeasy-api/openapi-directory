# rootVcdCluster

## Overview

vCloud cluster.

### Available Operations

* [createVcdClusterV1](#createvcdclusterv1) - Add a vCD Cluster
* [deleteVcdClusterV1](#deletevcdclusterv1) - Remove vCD Cluster
* [getVcdClusterAsyncRequestStatusV1](#getvcdclusterasyncrequeststatusv1) - Get vCD Cluster job status
* [getVcdClusterV1](#getvcdclusterv1) - Get vCD Cluster details
* [queryVcdClusterV1](#queryvcdclusterv1) - Get summary for all vCD Clusters
* [queryVcdVimServerV1](#queryvcdvimserverv1) - Get VimServers of a vCD Cluster
* [refreshVcdClusterV1](#refreshvcdclusterv1) - Refresh a vCD Cluster
* [updateVcdClusterV1](#updatevcdclusterv1) - Change vCD Cluster object

## createVcdClusterV1

Create a vCD Cluster object by providing the address of the vCD Cluster and the credentials for an account on the vCD Cluster that has administrator privileges. This request initiates an asynchronous job to connect with the vCD Cluster and retrieve the required metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\VcdClusterConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VcdClusterConfig();
    $request->caCerts = 'natus';
    $request->hostname = 'near-thirst.biz';
    $request->password = 'assumenda';
    $request->username = 'Wilford_Doyle';

    $response = $sdk->rootVcdCluster->createVcdClusterV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVcdClusterV1

Start an asynchronous job to remove a vCD Cluster object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVcdClusterV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVcdClusterV1Request();
    $request->id = '45b8955d-413e-413a-8823-10907bd354c0';

    $response = $sdk->rootVcdCluster->deleteVcdClusterV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVcdClusterAsyncRequestStatusV1

Retrieve the details of a specified asynchronous job for a vCD Cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdClusterAsyncRequestStatusV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVcdClusterAsyncRequestStatusV1Request();
    $request->id = '92bd734f-0244-49d8-af4b-b20fe5d911cb';

    $response = $sdk->rootVcdCluster->getVcdClusterAsyncRequestStatusV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVcdClusterV1

Retrieve detailed information for a vCD Cluster object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVcdClusterV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVcdClusterV1Request();
    $request->id = 'fe749caf-45a2-47f6-9e2c-9e6d10e9db3a';

    $response = $sdk->rootVcdCluster->getVcdClusterV1($request);

    if ($response->vcdClusterSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVcdClusterV1

Retrieve summary information for all vCD cluster objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdClusterV1Request;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdClusterV1SortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdClusterV1SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdClusterV1StatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVcdClusterV1Request();
    $request->name = 'Eddie Schaefer';
    $request->sortBy = QueryVcdClusterV1SortByEnum::NAME;
    $request->sortOrder = QueryVcdClusterV1SortOrderEnum::ASC;
    $request->status = QueryVcdClusterV1StatusEnum::DISCONNECTED;

    $response = $sdk->rootVcdCluster->queryVcdClusterV1($request);

    if ($response->vcdClusterSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryVcdVimServerV1

Retrieves the VimServer representation of the vCenter Servers that are attached to a specified vCD Cluster object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdVimServerV1Request;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdVimServerV1SortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryVcdVimServerV1SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryVcdVimServerV1Request();
    $request->id = '08d9c337-4730-482b-94f2-ab1fd5671e9c';
    $request->sortBy = QueryVcdVimServerV1SortByEnum::NAME;
    $request->sortOrder = QueryVcdVimServerV1SortOrderEnum::ASC;

    $response = $sdk->rootVcdCluster->queryVcdVimServerV1($request);

    if ($response->vimserverSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refreshVcdClusterV1

Start an asynchronous job to refresh the metadata for a specified vCD Cluster object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RefreshVcdClusterV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefreshVcdClusterV1Request();
    $request->id = '6350a467-1437-489c-a0e9-91594d93a74c';

    $response = $sdk->rootVcdCluster->refreshVcdClusterV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVcdClusterV1

Modify the hostname and credentials of a specified vCD Cluster object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVcdClusterV1Request;
use \OpenAPI\OpenAPI\Models\Shared\VcdClusterPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVcdClusterV1Request();
    $request->vcdClusterPatch = new VcdClusterPatch();
    $request->vcdClusterPatch->caCerts = 'ipsa';
    $request->vcdClusterPatch->configuredSlaDomainId = 'dolores';
    $request->vcdClusterPatch->hostname = 'gripping-cheese.org';
    $request->vcdClusterPatch->password = 'saepe';
    $request->vcdClusterPatch->username = 'Dana73';
    $request->id = '4db8b778-ebb6-4e1d-acf5-02bafb2cbc46';

    $response = $sdk->rootVcdCluster->updateVcdClusterV1($request);

    if ($response->vcdClusterSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
