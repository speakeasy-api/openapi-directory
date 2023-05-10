# rootHost

## Overview

Linux hosts and Windows hosts.

### Available Operations

* [bulkRegisterHostAsync](#bulkregisterhostasync) - Register hosts
* [deleteHost](#deletehost) - Delete a registered host
* [discoverNasShares](#discovernasshares) - Discover and return all shares on a NAS host
* [getHost](#gethost) - Get summary information for a host
* [getRbsHostInfo](#getrbshostinfo) - Get the Rubrik Backup Service details for a host
* [hostMakePrimary](#hostmakeprimary) - Make this cluster the primary for agents on a set of hosts
* [queryHost](#queryhost) - Get summary information for hosts
* [queryHostVolume](#queryhostvolume) - Get list of Volume Group volumes
* [rbsInstall](#rbsinstall) - Install Rubrik Backup Service on a host
* [rbsUninstall](#rbsuninstall) - Uninstall Rubrik Backup Service from a host
* [rbsUpgrade](#rbsupgrade) - Upgrade Rubrik Backup Service on a host
* [refreshHost](#refreshhost) - Refresh a host
* [registerHost](#registerhost) - Register a host
* [registerHostAsync](#registerhostasync) - Register a host
* [searchHost](#searchhost) - Search for a file within the host
* [updateCertificateHost](#updatecertificatehost) - Update certificate
* [updateHost](#updatehost) - Modify information for a registered host

## bulkRegisterHostAsync

Register multiple hosts and perform discovery for databases and Microsoft SQL Server instances. When called, this API returns a success message, but completes the host registration in the background. Monitor the status of the background host discovery with the "status" field in GET API on /hosts. The POST API on /hosts can take longer for discovery, depending on the number of hosts on the system. POST on this API can be used instead to perform the discovery in the background and quickly register the host. Doing this requires that you install RBS for Linux and Windows hosts, similar to regular register using POST on /hosts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\HostRegister;
use \OpenAPI\OpenAPI\Models\Shared\HdfsBaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\HdfsHost;
use \OpenAPI\OpenAPI\Models\Shared\NasConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new HostRegister(),
        new HostRegister(),
    ]

    $response = $sdk->rootHost->bulkRegisterHostAsync($request);

    if ($response->hostDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHost

Delete host by specifying the host ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHostRequest();
    $request->id = 'e54599ea-3422-460e-9b20-0ce78a1bd8fb';

    $response = $sdk->rootHost->deleteHost($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoverNasShares

Discover and return all shares on the identified NAS host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DiscoverNasSharesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoverNasSharesRequest();
    $request->id = '7a0a116c-e723-4d40-97fa-30e9af725b29';

    $response = $sdk->rootHost->discoverNasShares($request);

    if ($response->discoveredNasShares !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHost

Retrieve summary information for a registered host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHostRequest();
    $request->id = '122030d8-3f5a-4eb7-b99d-22e8c1f84938';

    $response = $sdk->rootHost->getHost($request);

    if ($response->hostDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRbsHostInfo

Get the details of the Rubrik Backup Service (RBS) installed on a specific host. Specify the details of the host to check whether RBS is installed on the host or not. If RBS is installed, the response will include the RBS details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetRbsHostInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRbsHostInfoRequest();
    $request->name = 'Ida Wintheiser';
    $request->operationTimeout = 309634;
    $request->password = 'magni';
    $request->username = 'Norma.Lueilwitz';

    $response = $sdk->rootHost->getRbsHostInfo($request);

    if ($response->rbsHostSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hostMakePrimary

Migrate the primary cluster with which the agent is able to perform regular operations (backup, restore etc). This can be done on a specified set of hosts or for all hosts that currently have a specified primary cluster for disaster recovery. Specify exactly one of `ids` or `oldPrimaryClusterUuid`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\HostMakePrimaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HostMakePrimaryRequest();
    $request->ids = [
        'sed',
        'minus',
        'consequuntur',
        'possimus',
    ];
    $request->oldPrimaryClusterUuid = 'delectus';

    $response = $sdk->rootHost->hostMakePrimary($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryHost

Retrieve summary information for all hosts that are registered with a Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryHostRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryHostOperatingSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryHostSnappableStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryHostSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryHostSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryHostRequest();
    $request->hostname = 'remorseful-emotion.net';
    $request->name = 'Cedric Blanda';
    $request->operatingSystem = 'nisi';
    $request->operatingSystemType = QueryHostOperatingSystemTypeEnum::ANY;
    $request->primaryClusterId = 'sequi';
    $request->snappableStatus = QueryHostSnappableStatusEnum::PROTECTABLE;
    $request->sortBy = QueryHostSortByEnum::HOSTNAME;
    $request->sortOrder = QueryHostSortOrderEnum::ASC;

    $response = $sdk->rootHost->queryHost($request);

    if ($response->hostSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryHostVolume

Retrieve summary information for each volume on a specified Volume Group host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryHostVolumeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryHostVolumeRequest();
    $request->id = 'f841fb1b-d23f-4db1-8db6-be5a685998e2';

    $response = $sdk->rootHost->queryHostVolume($request);

    if ($response->hostVolumeSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rbsInstall

Install Rubrik Backup Service on a host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\RbsHostOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperationModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RbsHostOperationRequest();
    $request->name = 'Janie Swift PhD';
    $request->operationMode = OperationModeEnum::ASYNCHRONOUS;
    $request->operationTimeout = 62907;
    $request->password = 'commodi';
    $request->username = 'Velva72';

    $response = $sdk->rootHost->rbsInstall($request);

    if ($response->rbsHostOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rbsUninstall

Uninstall Rubrik Backup Service from a host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\RbsHostOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperationModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RbsHostOperationRequest();
    $request->name = 'Heidi Bernier';
    $request->operationMode = OperationModeEnum::ASYNCHRONOUS;
    $request->operationTimeout = 573994;
    $request->password = 'placeat';
    $request->username = 'Fletcher_Kreiger36';

    $response = $sdk->rootHost->rbsUninstall($request);

    if ($response->rbsHostOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rbsUpgrade

Upgrade Rubrik Backup Service on a host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\RbsHostOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperationModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RbsHostOperationRequest();
    $request->name = 'Mrs. Kate Moen';
    $request->operationMode = OperationModeEnum::ASYNCHRONOUS;
    $request->operationTimeout = 842678;
    $request->password = 'magni';
    $request->username = 'Cary41';

    $response = $sdk->rootHost->rbsUpgrade($request);

    if ($response->rbsHostOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refreshHost

Refresh the properties of a host object when changes on the host are not seen in the Rubrik web UI.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RefreshHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefreshHostRequest();
    $request->id = '56946240-7084-4f7a-b37c-ef02225194db';

    $response = $sdk->rootHost->refreshHost($request);

    if ($response->hostDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerHost

Register a host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\HostRegister;
use \OpenAPI\OpenAPI\Models\Shared\HdfsBaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\HdfsHost;
use \OpenAPI\OpenAPI\Models\Shared\NasConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HostRegister();
    $request->alias = 'exercitationem';
    $request->hasAgent = false;
    $request->hdfsConfig = new HdfsBaseConfig();
    $request->hdfsConfig->apiToken = 'veniam';
    $request->hdfsConfig->hosts = [
        new HdfsHost(),
        new HdfsHost(),
    ];
    $request->hdfsConfig->kerberosTicket = 'quasi';
    $request->hdfsConfig->nameservices = 'quae';
    $request->hdfsConfig->username = 'Lolita.Schuster40';
    $request->hostname = 'noisy-plane.org';
    $request->isOracleHost = false;
    $request->nasConfig = new NasConfig();
    $request->nasConfig->apiCertificate = 'provident';
    $request->nasConfig->apiEndpoint = 'alias';
    $request->nasConfig->apiHostname = 'deserunt';
    $request->nasConfig->apiPassword = 'fugit';
    $request->nasConfig->apiToken = 'autem';
    $request->nasConfig->apiUsername = 'quo';
    $request->nasConfig->isIsilonChangelistEnabled = false;
    $request->nasConfig->isNetAppSnapDiffEnabled = false;
    $request->nasConfig->isShareAutoDiscoveryEnabled = false;
    $request->nasConfig->vendorType = 'molestiae';
    $request->nasConfig->zoneName = 'maxime';
    $request->oracleQueryUser = 'facere';
    $request->oracleSysDbaUser = 'impedit';
    $request->organizationId = 'cupiditate';

    $response = $sdk->rootHost->registerHost($request);

    if ($response->hostDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerHostAsync

Register a host and perform discovery for databases and Microsoft SQL Server instances. When called, this API returns a success message, but completes the host registration in the background. Monitor the status of the background host discovery with the "status" field in GET API on /hosts. The POST API on /hosts can take longer for discovery, depending on the number of hosts on the system. POST on this API can be used instead to perform the discovery in the background and quickly register the host. Doing this requires that you install RBS for Linux and Windows hosts, similar to regular register using POST on /hosts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\HostRegister;
use \OpenAPI\OpenAPI\Models\Shared\HdfsBaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\HdfsHost;
use \OpenAPI\OpenAPI\Models\Shared\NasConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HostRegister();
    $request->alias = 'deleniti';
    $request->hasAgent = false;
    $request->hdfsConfig = new HdfsBaseConfig();
    $request->hdfsConfig->apiToken = 'quasi';
    $request->hdfsConfig->hosts = [
        new HdfsHost(),
        new HdfsHost(),
        new HdfsHost(),
        new HdfsHost(),
    ];
    $request->hdfsConfig->kerberosTicket = 'voluptatem';
    $request->hdfsConfig->nameservices = 'aliquid';
    $request->hdfsConfig->username = 'Johnpaul.Mills';
    $request->hostname = 'stylish-ham.net';
    $request->isOracleHost = false;
    $request->nasConfig = new NasConfig();
    $request->nasConfig->apiCertificate = 'nam';
    $request->nasConfig->apiEndpoint = 'amet';
    $request->nasConfig->apiHostname = 'adipisci';
    $request->nasConfig->apiPassword = 'minus';
    $request->nasConfig->apiToken = 'hic';
    $request->nasConfig->apiUsername = 'similique';
    $request->nasConfig->isIsilonChangelistEnabled = false;
    $request->nasConfig->isNetAppSnapDiffEnabled = false;
    $request->nasConfig->isShareAutoDiscoveryEnabled = false;
    $request->nasConfig->vendorType = 'fuga';
    $request->nasConfig->zoneName = 'consectetur';
    $request->oracleQueryUser = 'labore';
    $request->oracleSysDbaUser = 'laudantium';
    $request->organizationId = 'cumque';

    $response = $sdk->rootHost->registerHostAsync($request);

    if ($response->hostDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchHost

Search for a file within the host. Search via full path prefix or filename prefix.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SearchHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchHostRequest();
    $request->id = '31bf407e-e4fc-4f0c-82b7-8f15626398a0';
    $request->path = 'quibusdam';

    $response = $sdk->rootHost->searchHost($request);

    if ($response->searchResponseListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCertificateHost

Provide an updated certificate for a specified host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCertificateHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCertificateHostRequest();
    $request->id = 'c766324c-cb06-4c8c-a12d-02529270b8d5';

    $response = $sdk->rootHost->updateCertificateHost($request);

    if ($response->hostDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHost

Change the FQDN and IPv4 address that is assigned to a host object. Enable or disable pre-transfer data compression. Enable or disable change block tracking (CBT) for backups of SQL Server databases on Windows hosts. Enable or disable volume filter driver (VFD) for volume backups on Windows hosts. Set an Oracle user with sysdba privileges to permit Oracle discovery queries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostRequest;
use \OpenAPI\OpenAPI\Models\Shared\HostUpdate;
use \OpenAPI\OpenAPI\Models\Shared\HdfsBaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\HdfsHost;
use \OpenAPI\OpenAPI\Models\Shared\HostVfdInstallConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\MssqlCbtStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NasConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHostRequest();
    $request->hostUpdate = new HostUpdate();
    $request->hostUpdate->alias = 'odio';
    $request->hostUpdate->compressionEnabled = false;
    $request->hostUpdate->hdfsConfig = new HdfsBaseConfig();
    $request->hostUpdate->hdfsConfig->apiToken = 'fugit';
    $request->hostUpdate->hdfsConfig->hosts = [
        new HdfsHost(),
    ];
    $request->hostUpdate->hdfsConfig->kerberosTicket = 'at';
    $request->hostUpdate->hdfsConfig->nameservices = 'illum';
    $request->hostUpdate->hdfsConfig->username = 'Jody_Marvin';
    $request->hostUpdate->hostVfdDriverInstalled = false;
    $request->hostUpdate->hostVfdEnabled = HostVfdInstallConfigEnum::DISABLED;
    $request->hostUpdate->hostname = 'rotten-sister-in-law.org';
    $request->hostUpdate->isOracleHost = false;
    $request->hostUpdate->mssqlCbtDriverInstalled = false;
    $request->hostUpdate->mssqlCbtEnabled = MssqlCbtStatusTypeEnum::ENABLED;
    $request->hostUpdate->nasConfig = new NasConfig();
    $request->hostUpdate->nasConfig->apiCertificate = 'dolore';
    $request->hostUpdate->nasConfig->apiEndpoint = 'pariatur';
    $request->hostUpdate->nasConfig->apiHostname = 'facilis';
    $request->hostUpdate->nasConfig->apiPassword = 'cupiditate';
    $request->hostUpdate->nasConfig->apiToken = 'nemo';
    $request->hostUpdate->nasConfig->apiUsername = 'natus';
    $request->hostUpdate->nasConfig->isIsilonChangelistEnabled = false;
    $request->hostUpdate->nasConfig->isNetAppSnapDiffEnabled = false;
    $request->hostUpdate->nasConfig->isShareAutoDiscoveryEnabled = false;
    $request->hostUpdate->nasConfig->vendorType = 'nisi';
    $request->hostUpdate->nasConfig->zoneName = 'provident';
    $request->hostUpdate->oracleQueryUser = 'amet';
    $request->hostUpdate->oracleSysDbaUser = 'dolor';
    $request->id = '52f74533-994d-478d-a3b6-e9389f5abb7f';

    $response = $sdk->rootHost->updateHost($request);

    if ($response->hostDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
