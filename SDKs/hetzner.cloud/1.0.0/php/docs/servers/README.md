# servers

## Overview

Servers are virtual machines that can be provisioned.

### Available Operations

* [deleteServersId](#deleteserversid) - Delete a Server
* [getServers](#getservers) - Get all Servers
* [getServersId](#getserversid) - Get a Server
* [getServersIdMetrics](#getserversidmetrics) - Get Metrics for a Server
* [postServers](#postservers) - Create a Server
* [putServersId](#putserversid) - Update a Server

## deleteServersId

Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServersIdRequest();
    $request->id = 55;

    $response = $sdk->servers->deleteServersId($request);

    if ($response->deleteServersId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServers

Returns all existing Server objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServersSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetServersStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServersRequest();
    $request->labelSelector = 'at';
    $request->name = 'Rhonda Kautzer';
    $request->sort = GetServersSortEnum::ID_ASC;
    $request->status = GetServersStatusEnum::REBUILDING;

    $response = $sdk->servers->getServers($request);

    if ($response->getServers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServersId

Returns a specific Server object. The Server must exist inside the Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServersIdRequest();
    $request->id = 952792;

    $response = $sdk->servers->getServersId($request);

    if ($response->getServersId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServersIdMetrics

Get Metrics for specified Server.

You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.

Depending on the type you will get different time series data

| Type    | Timeseries              | Unit      | Description                                          |
|---------|-------------------------|-----------|------------------------------------------------------|
| cpu     | cpu                     | percent   | Percent CPU usage                                    |
| disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
|         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
|         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
|         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
| network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
|         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
|         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
|         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |

Metrics are available for the last 30 days only.

If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.

We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServersIdMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServersIdMetricsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServersIdMetricsRequest();
    $request->end = 'esse';
    $request->id = 687488;
    $request->start = 'iusto';
    $request->step = 'ipsum';
    $request->type = GetServersIdMetricsTypeEnum::NETWORK;

    $response = $sdk->servers->getServersIdMetrics($request);

    if ($response->getServersIdMetrics200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postServers

Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostServersCreateServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostServersCreateServerRequestFirewalls;
use \OpenAPI\OpenAPI\Models\Operations\PostServersCreateServerRequestPublicNet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostServersCreateServerRequest();
    $request->automount = false;
    $request->datacenter = 'nbg1-dc3';
    $request->firewalls = [
        new PostServersCreateServerRequestFirewalls(),
        new PostServersCreateServerRequestFirewalls(),
        new PostServersCreateServerRequestFirewalls(),
        new PostServersCreateServerRequestFirewalls(),
    ];
    $request->image = 'ubuntu-20.04';
    $request->labels = [
        'tempore' => 'accusamus',
    ];
    $request->location = 'nbg1';
    $request->name = 'my-server';
    $request->networks = [
        313692,
        213312,
    ];
    $request->placementGroup = 1;
    $request->publicNet = new PostServersCreateServerRequestPublicNet();
    $request->publicNet->enableIpv4 = false;
    $request->publicNet->enableIpv6 = false;
    $request->publicNet->ipv4 = 957451;
    $request->publicNet->ipv6 = 518201;
    $request->serverType = 'cx11';
    $request->sshKeys = [
        'sit',
        'expedita',
    ];
    $request->startAfterCreate = true;
    $request->userData = '#cloud-config
    runcmd:
    - [touch, /root/cloud-init-worked]
    ';
    $request->volumes = [
        153694,
    ];

    $response = $sdk->servers->postServers($request);

    if ($response->createServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putServersId

Updates a Server. You can update a Server’s name and a Server’s labels.
Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
Also note that when updating labels, the Server’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutServersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutServersIdUpdateServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutServersIdRequest();
    $request->requestBody = new PutServersIdUpdateServerRequest();
    $request->requestBody->labels = [
        'libero' => 'voluptas',
        'deserunt' => 'quam',
    ];
    $request->requestBody->name = 'my-server';
    $request->id = 214880;

    $response = $sdk->servers->putServersId($request);

    if ($response->putServersId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
