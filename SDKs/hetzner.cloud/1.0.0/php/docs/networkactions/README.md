# networkActions

### Available Operations

* [getNetworksIdActions](#getnetworksidactions) - Get all Actions for a Network
* [getNetworksIdActionsActionId](#getnetworksidactionsactionid) - Get an Action for a Network
* [postNetworksIdActionsAddRoute](#postnetworksidactionsaddroute) - Add a route to a Network
* [postNetworksIdActionsAddSubnet](#postnetworksidactionsaddsubnet) - Add a subnet to a Network
* [postNetworksIdActionsChangeIpRange](#postnetworksidactionschangeiprange) - Change IP range of a Network
* [postNetworksIdActionsChangeProtection](#postnetworksidactionschangeprotection) - Change Network Protection
* [postNetworksIdActionsDeleteRoute](#postnetworksidactionsdeleteroute) - Delete a route from a Network
* [postNetworksIdActionsDeleteSubnet](#postnetworksidactionsdeletesubnet) - Delete a subnet from a Network

## getNetworksIdActions

Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksIdActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksIdActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksIdActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworksIdActionsRequest();
    $request->id = 411820;
    $request->sort = GetNetworksIdActionsSortParameterSortEnum::STATUS_ASC;
    $request->status = GetNetworksIdActionsStatusParameterStatusEnum::ERROR;

    $response = $sdk->networkActions->getNetworksIdActions($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworksIdActionsActionId

Returns a specific Action for a Network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksIdActionsActionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworksIdActionsActionIdRequest();
    $request->actionId = 881104;
    $request->id = 249796;

    $response = $sdk->networkActions->getNetworksIdActionsActionId($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNetworksIdActionsAddRoute

Adds a route entry to a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsAddRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsAddRouteAddDeleteRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNetworksIdActionsAddRouteRequest();
    $request->requestBody = new PostNetworksIdActionsAddRouteAddDeleteRouteRequest();
    $request->requestBody->destination = '10.100.1.0/24';
    $request->requestBody->gateway = '10.0.1.1';
    $request->id = 581273;

    $response = $sdk->networkActions->postNetworksIdActionsAddRoute($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNetworksIdActionsAddSubnet

Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.

Note: if the parent Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsAddSubnetRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsAddSubnetAddSubnetRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNetworksIdActionsAddSubnetRequest();
    $request->requestBody = new PostNetworksIdActionsAddSubnetAddSubnetRequest();
    $request->requestBody->ipRange = '10.0.1.0/24';
    $request->requestBody->networkZone = 'eu-central';
    $request->requestBody->type = PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum::CLOUD;
    $request->requestBody->vswitchId = 1000;
    $request->id = 881736;

    $response = $sdk->networkActions->postNetworksIdActionsAddSubnet($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNetworksIdActionsChangeIpRange

Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.

For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.

After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsChangeIpRangeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsChangeIPRangeChangeIPRangeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNetworksIdActionsChangeIpRangeRequest();
    $request->requestBody = new PostNetworksIdActionsChangeIPRangeChangeIPRangeRequest();
    $request->requestBody->ipRange = '10.0.0.0/12';
    $request->id = 965417;

    $response = $sdk->networkActions->postNetworksIdActionsChangeIpRange($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNetworksIdActionsChangeProtection

Changes the protection configuration of a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsChangeProtectionChangeProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNetworksIdActionsChangeProtectionRequest();
    $request->requestBody = new PostNetworksIdActionsChangeProtectionChangeProtectionRequest();
    $request->requestBody->delete = true;
    $request->id = 692532;

    $response = $sdk->networkActions->postNetworksIdActionsChangeProtection($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNetworksIdActionsDeleteRoute

Delete a route entry from a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsDeleteRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNetworksIdActionsDeleteRouteRequest();
    $request->requestBody = new PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest();
    $request->requestBody->destination = '10.100.1.0/24';
    $request->requestBody->gateway = '10.0.1.1';
    $request->id = 588465;

    $response = $sdk->networkActions->postNetworksIdActionsDeleteRoute($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNetworksIdActionsDeleteSubnet

Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsDeleteSubnetRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNetworksIdActionsDeleteSubnetRequest();
    $request->requestBody = new PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest();
    $request->requestBody->ipRange = '10.0.1.0/24';
    $request->id = 725255;

    $response = $sdk->networkActions->postNetworksIdActionsDeleteSubnet($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
