# organization

## Overview

Requires Organization Key

### Available Operations

* [clearBulkAssetTags](#clearbulkassettags) - Clear all tags across multiple assets based on a search query
* [createScan](#createscan) - Create a scan task for a given site
* [createSite](#createsite) - Create a new site
* [getAgent](#getagent) - Get details for a single agent
* [getAgents](#getagents) - Get all agents
* [getAsset](#getasset) - Get asset details
* [getAssets](#getassets) - Get all assets
* [getKey](#getkey) - Get API key details
* [getOrganization](#getorganization) - Get organization details
* [getService](#getservice) - Get service details
* [getServices](#getservices) - Get all services
* [getSite](#getsite) - Get site details
* [getSites](#getsites) - Get all sites
* [getTask](#gettask) - Get task details
* [getTaskChangeReport](#gettaskchangereport) - Returns a temporary task change report data url
* [getTaskLog](#gettasklog) - Returns a temporary task log data url
* [getTaskScanData](#gettaskscandata) - Returns a temporary task scan data url
* [getTasks](#gettasks) - Get all tasks (last 1000)
* [getWirelessLAN](#getwirelesslan) - Get wireless LAN details
* [getWirelessLANs](#getwirelesslans) - Get all wireless LANs
* [hideTask](#hidetask) - Signal that a completed task should be hidden
* [importNessusScanData](#importnessusscandata) - Import a Nessus scan data file into a site
* [importScanData](#importscandata) - Import a scan data file into a site
* [removeAgent](#removeagent) - Remove and uninstall an agent
* [removeAsset](#removeasset) - Remove an asset
* [removeKey](#removekey) - Remove the current API key
* [removeService](#removeservice) - Remove a service
* [removeSite](#removesite) - Remove a site and associated assets
* [removeWirelessLAN](#removewirelesslan) - Remove a wireless LAN
* [rotateKey](#rotatekey) - Rotate the API key secret and return the updated key
* [stopTask](#stoptask) - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
* [updateAgentSite](#updateagentsite) - Update the site associated with agent
* [updateAssetComments](#updateassetcomments) - Update asset comments
* [updateAssetTags](#updateassettags) - Update asset tags
* [updateBulkAssetTags](#updatebulkassettags) - Update tags across multiple assets based on a search query
* [updateOrganization](#updateorganization) - Update organization details
* [updateSite](#updatesite) - Update a site definition
* [updateTask](#updatetask) - Update task parameters
* [upgradeAgent](#upgradeagent) - Force an agent to update and restart

## clearBulkAssetTags

Clear all tags across multiple assets based on a search query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Search;
use \OpenAPI\OpenAPI\Models\Operations\ClearBulkAssetTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Search();
    $request->search = 'alive:true and os:windows';

    $requestSecurity = new ClearBulkAssetTagsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->clearBulkAssetTags($request, $requestSecurity);

    if ($response->statusMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScan

Create a scan task for a given site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateScanRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScanOptions;
use \OpenAPI\OpenAPI\Models\Shared\ScanOptionsScanFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateScanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateScanRequest();
    $request->scanOptions = new ScanOptions();
    $request->scanOptions->agent = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->scanOptions->excludes = 'voluptatum';
    $request->scanOptions->hostPing = 'false';
    $request->scanOptions->maxAttempts = '3';
    $request->scanOptions->maxGroupSize = '4096';
    $request->scanOptions->maxHostRate = '100';
    $request->scanOptions->maxSockets = '500';
    $request->scanOptions->maxTtl = '255';
    $request->scanOptions->nameservers = '8.8.8.8';
    $request->scanOptions->passes = '3';
    $request->scanOptions->probes = 'arp,bacnet,connect,dns,echo,ike,ipmi,mdns,memcache,mssql,natpmp,netbios,pca,rdns,rpcbind,sip,snmp,ssdp,syn,ubnt,wlan-list,wsd';
    $request->scanOptions->rate = '10000';
    $request->scanOptions->scanDescription = 'Scan of Wireless';
    $request->scanOptions->scanFrequency = ScanOptionsScanFrequencyEnum::HOURLY;
    $request->scanOptions->scanGracePeriod = '4';
    $request->scanOptions->scanName = 'My Scan';
    $request->scanOptions->scanStart = '0';
    $request->scanOptions->scanTags = 'owner=IT location=Texas';
    $request->scanOptions->screenshots = 'true';
    $request->scanOptions->subnetPing = 'true';
    $request->scanOptions->subnetPingNetSize = '256';
    $request->scanOptions->subnetPingSampleRate = '3';
    $request->scanOptions->targets = 'defaults';
    $request->scanOptions->tcpExcludes = '9500';
    $request->scanOptions->tcpPorts = '1-1000,5000-6000';
    $request->siteId = 'd68ea19f-1d17-4051-b39d-08086a184039';

    $requestSecurity = new CreateScanSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->createScan($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSite

Create a new site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SiteOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteOptions();
    $request->description = 'County Office';
    $request->excludes = '192.168.10.1';
    $request->name = 'New Site';
    $request->scope = '192.168.10.0/24';

    $requestSecurity = new CreateSiteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->createSite($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAgent

Get details for a single agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAgentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAgentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAgentRequest();
    $request->agentId = '4c26071f-93f5-4f06-82da-c7af515cc413';

    $requestSecurity = new GetAgentSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getAgent($request, $requestSecurity);

    if ($response->agent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAgents

Get all agents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAgentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAgentsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getAgents($requestSecurity);

    if ($response->agents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAsset

Get asset details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetRequest();
    $request->assetId = 'aa63aae8-d678-464d-bb67-5fd5e60b375e';

    $requestSecurity = new GetAssetSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getAsset($request, $requestSecurity);

    if ($response->asset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssets

Get all assets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetsRequest();
    $request->search = 'facere';

    $requestSecurity = new GetAssetsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getAssets($request, $requestSecurity);

    if ($response->assets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKey

Get API key details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetKeySecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getKey($requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganization

Get organization details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetOrganizationSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getOrganization($requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getService

Get service details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceRequest();
    $request->serviceId = '4f6fbee4-1f33-4317-be35-b60eb1ea4265';

    $requestSecurity = new GetServiceSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getService($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServices

Get all services

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServicesRequest();
    $request->search = 'voluptas';

    $requestSecurity = new GetServicesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getServices($request, $requestSecurity);

    if ($response->services !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSite

Get site details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSiteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSiteRequest();
    $request->siteId = '5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2';

    $requestSecurity = new GetSiteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getSite($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSites

Get all sites

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetSitesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getSites($requestSecurity);

    if ($response->sites !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTask

Get task details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskRequest();
    $request->taskId = 'fb7b194a-276b-4269-96fe-1f08f4294e36';

    $requestSecurity = new GetTaskSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getTask($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskChangeReport

Returns a temporary task change report data url

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskChangeReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskChangeReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskChangeReportRequest();
    $request->taskId = '98f447f6-03e8-4b44-9e80-ca55efd20e45';

    $requestSecurity = new GetTaskChangeReportSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getTaskChangeReport($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskLog

Returns a temporary task log data url

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskLogRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskLogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskLogRequest();
    $request->taskId = '7e1858b6-a89f-4be3-a5aa-8e4824d0ab40';

    $requestSecurity = new GetTaskLogSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getTaskLog($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskScanData

Returns a temporary task scan data url

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskScanDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskScanDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskScanDataRequest();
    $request->taskId = '75088e51-8620-465e-904f-3b1194b8abf6';

    $requestSecurity = new GetTaskScanDataSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getTaskScanData($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTasks

Get all tasks (last 1000)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTasksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTasksRequest();
    $request->search = 'alias';
    $request->status = 'amet';

    $requestSecurity = new GetTasksSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getTasks($request, $requestSecurity);

    if ($response->tasks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWirelessLAN

Get wireless LAN details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWirelessLANRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWirelessLANSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWirelessLANRequest();
    $request->wirelessId = 'a79f9dfe-0ab7-4da8-a50c-e187f86bc173';

    $requestSecurity = new GetWirelessLANSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getWirelessLAN($request, $requestSecurity);

    if ($response->wireless !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWirelessLANs

Get all wireless LANs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWirelessLANsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWirelessLANsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWirelessLANsRequest();
    $request->search = 'assumenda';

    $requestSecurity = new GetWirelessLANsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->getWirelessLANs($request, $requestSecurity);

    if ($response->wirelesses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hideTask

Signal that a completed task should be hidden

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HideTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\HideTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HideTaskRequest();
    $request->taskId = '689eee95-26f8-4d98-ae88-1ead4f0e1012';

    $requestSecurity = new HideTaskSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->hideTask($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importNessusScanData

Import a Nessus scan data file into a site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportNessusScanDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportNessusScanDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportNessusScanDataRequest();
    $request->requestBody = 'enim';
    $request->siteId = '63f94e29-e973-4e92-aa57-a15be3e06080';

    $requestSecurity = new ImportNessusScanDataSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->importNessusScanData($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importScanData

Import a scan data file into a site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportScanDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportScanDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportScanDataRequest();
    $request->requestBody = 'molestiae';
    $request->siteId = 'e2b6e3ab-8845-4f05-97a6-0ff2a54a31e9';

    $requestSecurity = new ImportScanDataSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->importScanData($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAgent

Remove and uninstall an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAgentRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAgentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAgentRequest();
    $request->agentId = '4764a3e8-65e7-4956-b925-1a5a9da660ff';

    $requestSecurity = new RemoveAgentSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->removeAgent($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAsset

Remove an asset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAssetRequest();
    $request->assetId = '57bfaad4-f9ef-4c1b-8512-c1032648dc2f';

    $requestSecurity = new RemoveAssetSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->removeAsset($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeKey

Remove the current API key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new RemoveKeySecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->removeKey($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeService

Remove a service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveServiceRequest();
    $request->serviceId = '615199eb-fd0e-49fe-ac63-2ca3aed01179';

    $requestSecurity = new RemoveServiceSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->removeService($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeSite

Remove a site and associated assets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSiteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveSiteRequest();
    $request->siteId = '96312fde-0477-4177-8ff6-1d017476360a';

    $requestSecurity = new RemoveSiteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->removeSite($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeWirelessLAN

Remove a wireless LAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveWirelessLANRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveWirelessLANSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveWirelessLANRequest();
    $request->wirelessId = '15db6a66-0659-4a1a-9eaa-b5851d6c645b';

    $requestSecurity = new RemoveWirelessLANSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->removeWirelessLAN($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rotateKey

Rotate the API key secret and return the updated key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RotateKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new RotateKeySecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->rotateKey($requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTask

Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTaskRequest();
    $request->taskId = '08b61891-baa0-4fe1-ade0-08e6f8c5f350';

    $requestSecurity = new StopTaskSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->stopTask($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAgentSite

Update the site associated with agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAgentSiteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AgentSiteID;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAgentSiteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAgentSiteRequest();
    $request->agentSiteID = new AgentSiteID();
    $request->agentSiteID->siteId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->agentId = 'd8cdb5a3-4181-4430-9042-1813d5208ece';

    $requestSecurity = new UpdateAgentSiteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->updateAgentSite($request, $requestSecurity);

    if ($response->agent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssetComments

Update asset comments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetCommentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetComments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetCommentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssetCommentsRequest();
    $request->assetComments = new AssetComments();
    $request->assetComments->comments = 'Sales Laptop';
    $request->assetId = '7e253b66-8451-4c6c-ae20-5e16deab3fec';

    $requestSecurity = new UpdateAssetCommentsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->updateAssetComments($request, $requestSecurity);

    if ($response->asset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssetTags

Update asset tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetTags;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssetTagsRequest();
    $request->assetTags = new AssetTags();
    $request->assetTags->tags = 'ThisTag=Value -OldTag';
    $request->assetId = '9578a645-8427-43a8-818d-162309fb0929';

    $requestSecurity = new UpdateAssetTagsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->updateAssetTags($request, $requestSecurity);

    if ($response->asset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBulkAssetTags

Update tags across multiple assets based on a search query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AssetTagsWithSearch;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBulkAssetTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssetTagsWithSearch();
    $request->search = 'alive:true and os:windows';
    $request->tags = 'ThisTag=Value -OldTag';

    $requestSecurity = new UpdateBulkAssetTagsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->updateBulkAssetTags($request, $requestSecurity);

    if ($response->statusMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganization

Update organization details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OrgOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgOptions();
    $request->description = 'Wobbly Widgets, Inc.';
    $request->expirationAssetsOffline = '365';
    $request->expirationAssetsStale = '365';
    $request->expirationScans = '365';
    $request->exportToken = 'ETXXXXXXXXXXXXXXXX';
    $request->name = 'My Organization';
    $request->parentId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->project = 'iste';

    $requestSecurity = new UpdateOrganizationSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->updateOrganization($request, $requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSite

Update a site definition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRequest;
use \OpenAPI\OpenAPI\Models\Shared\SiteOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSiteRequest();
    $request->siteOptions = new SiteOptions();
    $request->siteOptions->description = 'County Office';
    $request->siteOptions->excludes = '192.168.10.1';
    $request->siteOptions->name = 'New Site';
    $request->siteOptions->scope = '192.168.10.0/24';
    $request->siteId = '21aefb9f-58c4-4d86-a68e-4be056013f59';

    $requestSecurity = new UpdateSiteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->updateSite($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTask

Update task parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\Task;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskRequest();
    $request->task = new Task();
    $request->task->agentId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->task->clientId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->task->createdAt = 1576300370;
    $request->task->createdBy = 'user@example.com';
    $request->task->createdByUserId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->task->cruncherId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->task->description = 'Scan the headquarters hourly';
    $request->task->error = 'agent unavailable';
    $request->task->hidden = false;
    $request->task->id = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->task->name = 'Hourly Scan';
    $request->task->organizationId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->task->params = [
        'deserunt' => 'esse',
        'nemo' => 'reprehenderit',
        'est' => 'quis',
        'sint' => 'accusamus',
    ];
    $request->task->parentId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->task->recur = false;
    $request->task->recurFrequency = 'hour';
    $request->task->recurLast = 1576300370;
    $request->task->recurLastTaskId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->task->recurNext = 1576300370;
    $request->task->siteId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->task->startTime = 1576300370;
    $request->task->stats = [
        'hic' => 'necessitatibus',
        'asperiores' => 'ex',
        'voluptas' => 'debitis',
        'delectus' => 'quae',
    ];
    $request->task->status = 'processed';
    $request->task->templateId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->task->type = 'scan';
    $request->task->updatedAt = 1576300370;
    $request->taskId = 'caa3383c-2beb-4477-b73c-8d72f64d1db1';

    $requestSecurity = new UpdateTaskSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->updateTask($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upgradeAgent

Force an agent to update and restart

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpgradeAgentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpgradeAgentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpgradeAgentRequest();
    $request->agentId = 'f2c43106-61e9-4634-9e1c-f9e06e3a4370';

    $requestSecurity = new UpgradeAgentSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organization->upgradeAgent($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
