# floatingIPActions

### Available Operations

* [getFloatingIpsIdActions](#getfloatingipsidactions) - Get all Actions for a Floating IP
* [getFloatingIpsIdActionsActionId](#getfloatingipsidactionsactionid) - Get an Action for a Floating IP
* [postFloatingIpsIdActionsAssign](#postfloatingipsidactionsassign) - Assign a Floating IP to a Server
* [postFloatingIpsIdActionsChangeDnsPtr](#postfloatingipsidactionschangednsptr) - Change reverse DNS entry for a Floating IP
* [postFloatingIpsIdActionsChangeProtection](#postfloatingipsidactionschangeprotection) - Change Floating IP Protection
* [postFloatingIpsIdActionsUnassign](#postfloatingipsidactionsunassign) - Unassign a Floating IP

## getFloatingIpsIdActions

Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFloatingIpsIdActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFloatingIpsIdActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFloatingIpsIdActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFloatingIpsIdActionsRequest();
    $request->id = 666767;
    $request->sort = GetFloatingIpsIdActionsSortParameterSortEnum::PROGRESS_DESC;
    $request->status = GetFloatingIpsIdActionsStatusParameterStatusEnum::ERROR;

    $response = $sdk->floatingIPActions->getFloatingIpsIdActions($request);

    if ($response->getFloatingIpsIdActions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFloatingIpsIdActionsActionId

Returns a specific Action object for a Floating IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFloatingIpsIdActionsActionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFloatingIpsIdActionsActionIdRequest();
    $request->actionId = 170909;
    $request->id = 210382;

    $response = $sdk->floatingIPActions->getFloatingIpsIdActionsActionId($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFloatingIpsIdActionsAssign

Assigns a Floating IP to a Server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFloatingIpsIdActionsAssignRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFloatingIpsIdActionsAssignAssignFloatingIPRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFloatingIpsIdActionsAssignRequest();
    $request->requestBody = new PostFloatingIpsIdActionsAssignAssignFloatingIPRequest();
    $request->requestBody->server = 42;
    $request->id = 358152;

    $response = $sdk->floatingIPActions->postFloatingIpsIdActionsAssign($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFloatingIpsIdActionsChangeDnsPtr

Changes the hostname that will appear when getting the hostname belonging to this Floating IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFloatingIpsIdActionsChangeDnsPtrRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFloatingIpsIdActionsChangeDnsPtrChangeDNSPTRRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFloatingIpsIdActionsChangeDnsPtrRequest();
    $request->requestBody = new PostFloatingIpsIdActionsChangeDnsPtrChangeDNSPTRRequest();
    $request->requestBody->dnsPtr = 'server02.example.com';
    $request->requestBody->ip = '1.2.3.4';
    $request->id = 128926;

    $response = $sdk->floatingIPActions->postFloatingIpsIdActionsChangeDnsPtr($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFloatingIpsIdActionsChangeProtection

Changes the protection configuration of the Floating IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFloatingIpsIdActionsChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFloatingIpsIdActionsChangeProtectionRequest();
    $request->requestBody = new PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest();
    $request->requestBody->delete = true;
    $request->id = 750686;

    $response = $sdk->floatingIPActions->postFloatingIpsIdActionsChangeProtection($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFloatingIpsIdActionsUnassign

Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFloatingIpsIdActionsUnassignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFloatingIpsIdActionsUnassignRequest();
    $request->id = 315428;

    $response = $sdk->floatingIPActions->postFloatingIpsIdActionsUnassign($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
