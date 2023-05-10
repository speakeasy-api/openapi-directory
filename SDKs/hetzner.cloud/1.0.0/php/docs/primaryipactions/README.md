# primaryIPActions

### Available Operations

* [postPrimaryIpsIdActionsAssign](#postprimaryipsidactionsassign) - Assign a Primary IP to a resource
* [postPrimaryIpsIdActionsChangeDnsPtr](#postprimaryipsidactionschangednsptr) - Change reverse DNS entry for a Primary IP
* [postPrimaryIpsIdActionsChangeProtection](#postprimaryipsidactionschangeprotection) - Change Primary IP Protection
* [postPrimaryIpsIdActionsUnassign](#postprimaryipsidactionsunassign) - Unassign a Primary IP from a resource

## postPrimaryIpsIdActionsAssign

Assigns a Primary IP to a Server.

A Server can only have one Primary IP of type `ipv4` and one of type `ipv6` assigned. If you need more IPs use Floating IPs.

The Server must be powered off (status `off`) in order for this operation to succeed.

#### Call specific error codes

| Code                          | Description                                                   |
|------------------------------ |-------------------------------------------------------------- |
| `server_not_stopped`          | The server is running, but needs to be powered off            |
| `primary_ip_already_assigned` | Primary ip is already assigned to a different server          |
| `server_has_ipv4`             | The server already has an ipv4 address                        |
| `server_has_ipv6`             | The server already has an ipv6 address                        |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsIdActionsAssignRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequestAssigneeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPrimaryIpsIdActionsAssignRequest();
    $request->requestBody = new PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequest();
    $request->requestBody->assigneeId = 4711;
    $request->requestBody->assigneeType = PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequestAssigneeTypeEnum::SERVER;
    $request->id = 652103;

    $response = $sdk->primaryIPActions->postPrimaryIpsIdActionsAssign($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPrimaryIpsIdActionsChangeDnsPtr

Changes the hostname that will appear when getting the hostname belonging to this Primary IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsIdActionsChangeDnsPtrRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsIdActionsChangeDnsPtrChangeDNSPTRRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPrimaryIpsIdActionsChangeDnsPtrRequest();
    $request->requestBody = new PostPrimaryIpsIdActionsChangeDnsPtrChangeDNSPTRRequest();
    $request->requestBody->dnsPtr = 'server02.example.com';
    $request->requestBody->ip = '1.2.3.4';
    $request->id = 320997;

    $response = $sdk->primaryIPActions->postPrimaryIpsIdActionsChangeDnsPtr($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPrimaryIpsIdActionsChangeProtection

Changes the protection configuration of a Primary IP.

A Primary IP can only be delete protected if its `auto_delete` property is set to `false`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsIdActionsChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsIdActionsChangeProtectionChangeProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPrimaryIpsIdActionsChangeProtectionRequest();
    $request->requestBody = new PostPrimaryIpsIdActionsChangeProtectionChangeProtectionRequest();
    $request->requestBody->delete = true;
    $request->id = 431418;

    $response = $sdk->primaryIPActions->postPrimaryIpsIdActionsChangeProtection($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPrimaryIpsIdActionsUnassign

Unassigns a Primary IP from a Server.

The Server must be powered off (status `off`) in order for this operation to succeed.

Note that only Servers that have at least one network interface (public or private) attached can be powered on.

#### Call specific error codes

| Code                              | Description                                                   |
|---------------------------------- |-------------------------------------------------------------- |
| `server_not_stopped`              | The server is running, but needs to be powered off            |
| `server_is_load_balancer_target`  | The server ipv4 address is a loadbalancer target              |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPrimaryIpsIdActionsUnassignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPrimaryIpsIdActionsUnassignRequest();
    $request->id = 221262;

    $response = $sdk->primaryIPActions->postPrimaryIpsIdActionsUnassign($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
