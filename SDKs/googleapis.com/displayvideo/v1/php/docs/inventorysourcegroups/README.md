# inventorySourceGroups

### Available Operations

* [displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit](#displayvideoinventorysourcegroupsassignedinventorysourcesbulkedit) - Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
* [displayvideoInventorySourceGroupsAssignedInventorySourcesCreate](#displayvideoinventorysourcegroupsassignedinventorysourcescreate) - Creates an assignment between an inventory source and an inventory source group.
* [displayvideoInventorySourceGroupsAssignedInventorySourcesDelete](#displayvideoinventorysourcegroupsassignedinventorysourcesdelete) - Deletes the assignment between an inventory source and an inventory source group.
* [displayvideoInventorySourceGroupsAssignedInventorySourcesList](#displayvideoinventorysourcegroupsassignedinventorysourceslist) - Lists inventory sources assigned to an inventory source group.
* [displayvideoInventorySourceGroupsCreate](#displayvideoinventorysourcegroupscreate) - Creates a new inventory source group. Returns the newly created inventory source group if successful.
* [displayvideoInventorySourceGroupsDelete](#displayvideoinventorysourcegroupsdelete) - Deletes an inventory source group.
* [displayvideoInventorySourceGroupsGet](#displayvideoinventorysourcegroupsget) - Gets an inventory source group.
* [displayvideoInventorySourceGroupsList](#displayvideoinventorysourcegroupslist) - Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

## displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit

Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkEditAssignedInventorySourcesRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedInventorySourceInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkEditAssignedInventorySourcesRequestInput = new BulkEditAssignedInventorySourcesRequestInput();
    $request->bulkEditAssignedInventorySourcesRequestInput->advertiserId = 'nihil';
    $request->bulkEditAssignedInventorySourcesRequestInput->createdAssignedInventorySources = [
        new AssignedInventorySourceInput(),
        new AssignedInventorySourceInput(),
    ];
    $request->bulkEditAssignedInventorySourcesRequestInput->deletedAssignedInventorySources = [
        'illo',
    ];
    $request->bulkEditAssignedInventorySourcesRequestInput->partnerId = 'hic';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'non';
    $request->fields = 'distinctio';
    $request->inventorySourceGroupId = 'in';
    $request->key = 'exercitationem';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySourceGroups->displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit($request, $requestSecurity);

    if ($response->bulkEditAssignedInventorySourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourceGroupsAssignedInventorySourcesCreate

Creates an assignment between an inventory source and an inventory source group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignedInventorySourceInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->assignedInventorySourceInput = new AssignedInventorySourceInput();
    $request->assignedInventorySourceInput->inventorySourceId = 'explicabo';
    $request->accessToken = 'accusamus';
    $request->advertiserId = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odit';
    $request->fields = 'deleniti';
    $request->inventorySourceGroupId = 'enim';
    $request->key = 'voluptate';
    $request->oauthToken = 'similique';
    $request->partnerId = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySourceGroups->displayvideoInventorySourceGroupsAssignedInventorySourcesCreate($request, $requestSecurity);

    if ($response->assignedInventorySource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourceGroupsAssignedInventorySourcesDelete

Deletes the assignment between an inventory source and an inventory source group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eum';
    $request->advertiserId = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->assignedInventorySourceId = 'dignissimos';
    $request->callback = 'fugiat';
    $request->fields = 'nostrum';
    $request->inventorySourceGroupId = 'molestiae';
    $request->key = 'veniam';
    $request->oauthToken = 'reiciendis';
    $request->partnerId = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySourceGroups->displayvideoInventorySourceGroupsAssignedInventorySourcesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourceGroupsAssignedInventorySourcesList

Lists inventory sources assigned to an inventory source group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odio';
    $request->advertiserId = 'commodi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'possimus';
    $request->filter = 'voluptate';
    $request->inventorySourceGroupId = 'consectetur';
    $request->key = 'nesciunt';
    $request->oauthToken = 'quaerat';
    $request->orderBy = 'itaque';
    $request->pageSize = 791228;
    $request->pageToken = 'sunt';
    $request->partnerId = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'et';

    $requestSecurity = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySourceGroups->displayvideoInventorySourceGroupsAssignedInventorySourcesList($request, $requestSecurity);

    if ($response->listAssignedInventorySourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourceGroupsCreate

Creates a new inventory source group. Returns the newly created inventory source group if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourceGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->inventorySourceGroupInput = new InventorySourceGroupInput();
    $request->inventorySourceGroupInput->displayName = 'amet';
    $request->accessToken = 'autem';
    $request->advertiserId = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rem';
    $request->fields = 'aut';
    $request->key = 'quos';
    $request->oauthToken = 'laudantium';
    $request->partnerId = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new DisplayvideoInventorySourceGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySourceGroups->displayvideoInventorySourceGroupsCreate($request, $requestSecurity);

    if ($response->inventorySourceGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourceGroupsDelete

Deletes an inventory source group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourceGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->advertiserId = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'sed';
    $request->inventorySourceGroupId = 'voluptatem';
    $request->key = 'alias';
    $request->oauthToken = 'eveniet';
    $request->partnerId = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new DisplayvideoInventorySourceGroupsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySourceGroups->displayvideoInventorySourceGroupsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourceGroupsGet

Gets an inventory source group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourceGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'necessitatibus';
    $request->advertiserId = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'beatae';
    $request->fields = 'aliquid';
    $request->inventorySourceGroupId = 'modi';
    $request->key = 'optio';
    $request->oauthToken = 'voluptatibus';
    $request->partnerId = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new DisplayvideoInventorySourceGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySourceGroups->displayvideoInventorySourceGroupsGet($request, $requestSecurity);

    if ($response->inventorySourceGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoInventorySourceGroupsList

Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoInventorySourceGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoInventorySourceGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->advertiserId = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ducimus';
    $request->fields = 'odit';
    $request->filter = 'velit';
    $request->key = 'reiciendis';
    $request->oauthToken = 'repellat';
    $request->orderBy = 'nulla';
    $request->pageSize = 671116;
    $request->pageToken = 'natus';
    $request->partnerId = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new DisplayvideoInventorySourceGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventorySourceGroups->displayvideoInventorySourceGroupsList($request, $requestSecurity);

    if ($response->listInventorySourceGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
