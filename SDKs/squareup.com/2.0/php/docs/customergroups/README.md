# customerGroups

### Available Operations

* [createCustomerGroup](#createcustomergroup) - CreateCustomerGroup
* [deleteCustomerGroup](#deletecustomergroup) - DeleteCustomerGroup
* [listCustomerGroups](#listcustomergroups) - ListCustomerGroups
* [retrieveCustomerGroup](#retrievecustomergroup) - RetrieveCustomerGroup
* [updateCustomerGroup](#updatecustomergroup) - UpdateCustomerGroup

## createCustomerGroup

Creates a new customer group for a business.

The request must include the `name` value of the group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomerGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerGroup;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomerGroupRequest();
    $request->group = new CustomerGroup();
    $request->group->createdAt = 'praesentium';
    $request->group->id = 'c10ab3cd-ca42-4519-84e5-23c7e0bc7178';
    $request->group->name = 'Tom Kuhn';
    $request->group->updatedAt = 'sapiente';
    $request->idempotencyKey = 'dolores';

    $requestSecurity = new CreateCustomerGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerGroups->createCustomerGroup($request, $requestSecurity);

    if ($response->createCustomerGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomerGroup

Deletes a customer group as identified by the `group_id` value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomerGroupRequest();
    $request->groupId = 'deserunt';

    $requestSecurity = new DeleteCustomerGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerGroups->deleteCustomerGroup($request, $requestSecurity);

    if ($response->deleteCustomerGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomerGroups

Retrieves the list of customer groups of a business.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerGroupsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomerGroupsRequest();
    $request->cursor = 'molestiae';
    $request->limit = 35362;

    $requestSecurity = new ListCustomerGroupsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerGroups->listCustomerGroups($request, $requestSecurity);

    if ($response->listCustomerGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveCustomerGroup

Retrieves a specific customer group as identified by the `group_id` value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCustomerGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCustomerGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveCustomerGroupRequest();
    $request->groupId = 'porro';

    $requestSecurity = new RetrieveCustomerGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerGroups->retrieveCustomerGroup($request, $requestSecurity);

    if ($response->retrieveCustomerGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomerGroup

Updates a customer group as identified by the `group_id` value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomerGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCustomerGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerGroup;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomerGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomerGroupRequest();
    $request->updateCustomerGroupRequest = new UpdateCustomerGroupRequest();
    $request->updateCustomerGroupRequest->group = new CustomerGroup();
    $request->updateCustomerGroupRequest->group->createdAt = 'eum';
    $request->updateCustomerGroupRequest->group->id = '88282aa4-8256-42f2-a2e9-817ee17cbe61';
    $request->updateCustomerGroupRequest->group->name = 'Cecil Pollich';
    $request->updateCustomerGroupRequest->group->updatedAt = 'occaecati';
    $request->groupId = 'minima';

    $requestSecurity = new UpdateCustomerGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerGroups->updateCustomerGroup($request, $requestSecurity);

    if ($response->updateCustomerGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
