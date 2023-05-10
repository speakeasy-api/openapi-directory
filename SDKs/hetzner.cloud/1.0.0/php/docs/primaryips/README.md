# primaryIPs

## Overview

Primary IPs help you to create more flexible networking setups. You can assign at most one Primary IP of type `ipv4` and one of type `ipv6` per Server. This Server then uses these IPs.

You can only unassign a Primary IP from a Server when it's powered off. This Primary IP can then be assigned to a different powered off Server, or you can keep it around for later use.

Primary IPs are bound to a specific Datacenter. You can not assign a Primary IP from one Datacenter to a Server in a different Datacenter. If you need this capability use Floating IPs instead.

If your Server's operating system supports cloud-init there is no further configuration needed to make Primary IPs work.

Primary IPs of type `ipv4` use a single IPv4 address as their `ip` property. Primary IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.

Primary IPs are billed on an hourly basis.


### Available Operations

* [deletePrimaryIpsId](#deleteprimaryipsid) - Delete a Primary IP
* [getPrimaryIps](#getprimaryips) - Get all Primary IPs
* [getPrimaryIpsId](#getprimaryipsid) - Get a Primary IP
* [postPrimaryIps](#postprimaryips) - Create a Primary IP
* [putPrimaryIpsId](#putprimaryipsid) - Update a Primary IP

## deletePrimaryIpsId

Deletes a Primary IP.

The Primary IP may be assigned to a Server. In this case it is unassigned automatically. The Server must be powered off (status `off`) in order for this operation to succeed.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePrimaryIpsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePrimaryIpsIdRequest();
    $request->id = 896547;

    $response = $sdk->primaryIPs->deletePrimaryIpsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPrimaryIps

Returns all Primary IP objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPrimaryIpsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPrimaryIpsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPrimaryIpsRequest();
    $request->ip = 'odit';
    $request->labelSelector = 'nemo';
    $request->name = 'Vera Wyman';
    $request->sort = GetPrimaryIpsSortEnum::CREATED_ASC;

    $response = $sdk->primaryIPs->getPrimaryIps($request);

    if ($response->primaryIPsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPrimaryIpsId

Returns a specific Primary IP object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPrimaryIpsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPrimaryIpsIdRequest();
    $request->id = 537023;

    $response = $sdk->primaryIPs->getPrimaryIpsId($request);

    if ($response->primaryIPResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPrimaryIps

Creates a new Primary IP, optionally assigned to a Server.

If you want to create a Primary IP that is not assigned to a Server, you need to provide the `datacenter` key instead of `assignee_id`. This can be either the ID or the name of the Datacenter this Primary IP shall be created in.

Note that a Primary IP can only be assigned to a Server in the same Datacenter later on.

#### Call specific error codes

| Code                          | Description                                                   |
|------------------------------ |-------------------------------------------------------------- |
| `server_not_stopped`          | The specified server is running, but needs to be powered off  |
| `server_has_ipv4`             | The server already has an ipv4 address                        |
| `server_has_ipv6`             | The server already has an ipv6 address                        |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsCreatePrimaryIPRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsCreatePrimaryIPRequestAssigneeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsCreatePrimaryIPRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPrimaryIpsCreatePrimaryIPRequest();
    $request->assigneeId = 17;
    $request->assigneeType = PostPrimaryIpsCreatePrimaryIPRequestAssigneeTypeEnum::SERVER;
    $request->autoDelete = false;
    $request->datacenter = 'fsn1-dc8';
    $request->labels = [
        'in' => 'architecto',
        'architecto' => 'repudiandae',
        'ullam' => 'expedita',
    ];
    $request->name = 'my-ip';
    $request->type = PostPrimaryIpsCreatePrimaryIPRequestTypeEnum::IPV4;

    $response = $sdk->primaryIPs->postPrimaryIps($request);

    if ($response->createPrimaryIPResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPrimaryIpsId

Updates the Primary IP.

Note that when updating labels, the Primary IP's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

If the Primary IP object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPrimaryIpsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutPrimaryIpsIdUpdatePrimaryIPRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPrimaryIpsIdRequest();
    $request->requestBody = new PutPrimaryIpsIdUpdatePrimaryIPRequest();
    $request->requestBody->autoDelete = true;
    $request->requestBody->labels = [
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
        'accusantium' => 'consequuntur',
        'praesentium' => 'natus',
    ];
    $request->requestBody->name = 'my-ip';
    $request->id = 166847;

    $response = $sdk->primaryIPs->putPrimaryIpsId($request);

    if ($response->primaryIPResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
