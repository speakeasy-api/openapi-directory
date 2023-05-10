# firewalls

## Overview

Firewalls can limit the network access to or from your resources.

* When applying a firewall with no `in` rule all inbound traffic will be dropped. The default for `in` is `DROP`.
* When applying a firewall with no `out` rule all outbound traffic will be accepted. The default for `out` is `ACCEPT`.


### Available Operations

* [deleteFirewallsId](#deletefirewallsid) - Delete a Firewall
* [getFirewalls](#getfirewalls) - Get all Firewalls
* [getFirewallsId](#getfirewallsid) - Get a Firewall
* [postFirewalls](#postfirewalls) - Create a Firewall
* [putFirewallsId](#putfirewallsid) - Update a Firewall

## deleteFirewallsId

Deletes a Firewall.

#### Call specific error codes

| Code                 | Description                               |
|--------------------- |-------------------------------------------|
| `resource_in_use`    | Firewall must not be in use to be deleted |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFirewallsIdRequest();
    $request->id = 736918;

    $response = $sdk->firewalls->deleteFirewallsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFirewalls

Returns all Firewall objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallsRequest();
    $request->labelSelector = 'esse';
    $request->name = 'Mrs. Miriam Collier';
    $request->sort = GetFirewallsSortEnum::ID_ASC;

    $response = $sdk->firewalls->getFirewalls($request);

    if ($response->firewallsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFirewallsId

Gets a specific Firewall object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallsIdRequest();
    $request->id = 612096;

    $response = $sdk->firewalls->getFirewallsId($request);

    if ($response->firewallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFirewalls

Creates a new Firewall.

#### Call specific error codes

| Code                          | Description                                                   |
|------------------------------ |-------------------------------------------------------------- |
| `server_already_added`        | Server added more than one time to resource                   |
| `incompatible_network_type`   | The Network type is incompatible for the given resource       |
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsCreateFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsCreateFirewallRequestApplyTo;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsCreateFirewallRequestApplyToLabelSelector;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsCreateFirewallRequestApplyToServer;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsCreateFirewallRequestApplyToTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsCreateFirewallRequestRule;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsCreateFirewallRequestRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsCreateFirewallRequestRuleProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFirewallsCreateFirewallRequest();
    $request->applyTo = [
        new PostFirewallsCreateFirewallRequestApplyTo(),
    ];
    $request->labels = [
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
        'in' => 'corporis',
    ];
    $request->name = 'Corporate Intranet Protection';
    $request->rules = [
        new PostFirewallsCreateFirewallRequestRule(),
        new PostFirewallsCreateFirewallRequestRule(),
        new PostFirewallsCreateFirewallRequestRule(),
    ];

    $response = $sdk->firewalls->postFirewalls($request);

    if ($response->createFirewallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFirewallsId

Updates the Firewall.

Note that when updating labels, the Firewall's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Firewall object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutFirewallsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutFirewallsIdUpdateFirewallRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFirewallsIdRequest();
    $request->requestBody = new PutFirewallsIdUpdateFirewallRequest();
    $request->requestBody->labels = [
        'saepe' => 'quidem',
        'architecto' => 'ipsa',
    ];
    $request->requestBody->name = 'new-name';
    $request->id = 969810;

    $response = $sdk->firewalls->putFirewallsId($request);

    if ($response->firewallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
