# namedTagScope

### Available Operations

* [createNetworkSmTargetGroup](#createnetworksmtargetgroup) - Add a target group
* [deleteNetworkSmTargetGroup](#deletenetworksmtargetgroup) - Delete a target group from a network
* [getNetworkSmTargetGroup](#getnetworksmtargetgroup) - Return a target group
* [getNetworkSmTargetGroups](#getnetworksmtargetgroups) - List the target groups in this network
* [updateNetworkSmTargetGroup](#updatenetworksmtargetgroup) - Update a target group

## createNetworkSmTargetGroup

Add a target group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmTargetGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSmTargetGroupRequest();
    $request->requestBody = new CreateNetworkSmTargetGroupRequestBody();
    $request->requestBody->name = 'Stephanie Gutkowski';
    $request->requestBody->scope = 'consectetur';
    $request->networkId = 'recusandae';

    $response = $sdk->namedTagScope->createNetworkSmTargetGroup($request);

    if ($response->createNetworkSmTargetGroup201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSmTargetGroup

Delete a target group from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSmTargetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSmTargetGroupRequest();
    $request->networkId = 'aspernatur';
    $request->targetGroupId = 'minima';

    $response = $sdk->namedTagScope->deleteNetworkSmTargetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmTargetGroup

Return a target group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmTargetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmTargetGroupRequest();
    $request->networkId = 'eaque';
    $request->targetGroupId = 'a';
    $request->withDetails = false;

    $response = $sdk->namedTagScope->getNetworkSmTargetGroup($request);

    if ($response->getNetworkSmTargetGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmTargetGroups

List the target groups in this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmTargetGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmTargetGroupsRequest();
    $request->networkId = 'libero';
    $request->withDetails = false;

    $response = $sdk->namedTagScope->getNetworkSmTargetGroups($request);

    if ($response->getNetworkSmTargetGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSmTargetGroup

Update a target group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmTargetGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSmTargetGroupRequest();
    $request->requestBody = new UpdateNetworkSmTargetGroupRequestBody();
    $request->requestBody->name = 'Jennifer Lesch';
    $request->requestBody->scope = 'fugit';
    $request->networkId = 'accusamus';
    $request->targetGroupId = 'inventore';

    $response = $sdk->namedTagScope->updateNetworkSmTargetGroup($request);

    if ($response->updateNetworkSmTargetGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
