# floatingIPs

## Overview

Floating IPs help you to create highly available setups. You can assign a Floating IP to any Server. The Server can then use this IP. You can reassign it to a different Server at any time, or you can choose to unassign the IP from Servers all together.

Floating IPs can be used globally. This means you can assign a Floating IP to a Server in one Location and later reassign it to a Server in a different Location. For optimal routing and latency Floating IPs should be used in the Location they were created in.

For Floating IPs to work with your Server, you must configure them inside your operation system.

Floating IPs of type `ipv4` use a single IPv4 address as their `ip` property. Floating IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.

Floating IPs are billed on a monthly basis.


### Available Operations

* [deleteFloatingIpsId](#deletefloatingipsid) - Delete a Floating IP
* [getFloatingIps](#getfloatingips) - Get all Floating IPs
* [getFloatingIpsId](#getfloatingipsid) - Get a Floating IP
* [postFloatingIps](#postfloatingips) - Create a Floating IP
* [putFloatingIpsId](#putfloatingipsid) - Update a Floating IP

## deleteFloatingIpsId

Deletes a Floating IP. If it is currently assigned to a Server it will automatically get unassigned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFloatingIpsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFloatingIpsIdRequest();
    $request->id = 607831;

    $response = $sdk->floatingIPs->deleteFloatingIpsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFloatingIps

Returns all Floating IP objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFloatingIpsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFloatingIpsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFloatingIpsRequest();
    $request->labelSelector = 'nemo';
    $request->name = 'Velma Batz';
    $request->sort = GetFloatingIpsSortEnum::CREATED_DESC;

    $response = $sdk->floatingIPs->getFloatingIps($request);

    if ($response->getFloatingIps200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFloatingIpsId

Returns a specific Floating IP object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFloatingIpsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFloatingIpsIdRequest();
    $request->id = 958950;

    $response = $sdk->floatingIPs->getFloatingIpsId($request);

    if ($response->getFloatingIpsId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFloatingIps

Creates a new Floating IP assigned to a Server. If you want to create a Floating IP that is not bound to a Server, you need to provide the `home_location` key instead of `server`. This can be either the ID or the name of the Location this IP shall be created in. Note that a Floating IP can be assigned to a Server in any Location later on. For optimal routing it is advised to use the Floating IP in the same Location it was created in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFloatingIpsCreateFloatingIPRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFloatingIpsCreateFloatingIPRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFloatingIpsCreateFloatingIPRequest();
    $request->description = 'Web Frontend';
    $request->homeLocation = 'fsn1';
    $request->labels = [
        'mollitia' => 'dolorem',
    ];
    $request->name = 'Web Frontend';
    $request->server = 42;
    $request->type = PostFloatingIpsCreateFloatingIPRequestTypeEnum::IPV6;

    $response = $sdk->floatingIPs->postFloatingIps($request);

    if ($response->postFloatingIps201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFloatingIpsId

Updates the description or labels of a Floating IP.
Also note that when updating labels, the Floating IP’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutFloatingIpsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutFloatingIpsIdUpdateFloatingIPRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFloatingIpsIdRequest();
    $request->requestBody = new PutFloatingIpsIdUpdateFloatingIPRequest();
    $request->requestBody->description = 'Web Frontend';
    $request->requestBody->labels = [
        'repellat' => 'mollitia',
    ];
    $request->requestBody->name = 'Web Frontend';
    $request->id = 581850;

    $response = $sdk->floatingIPs->putFloatingIpsId($request);

    if ($response->putFloatingIpsId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
