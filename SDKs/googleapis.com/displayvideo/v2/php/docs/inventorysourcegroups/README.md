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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkEditAssignedInventorySourcesRequestInput = new BulkEditAssignedInventorySourcesRequestInput();
    $request->bulkEditAssignedInventorySourcesRequestInput->advertiserId = 'impedit';
    $request->bulkEditAssignedInventorySourcesRequestInput->createdAssignedInventorySources = [
        new AssignedInventorySourceInput(),
    ];
    $request->bulkEditAssignedInventorySourcesRequestInput->deletedAssignedInventorySources = [
        'quod',
        'laboriosam',
        'doloremque',
    ];
    $request->bulkEditAssignedInventorySourcesRequestInput->partnerId = 'voluptatem';
    $request->accessToken = 'facere';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'consequatur';
    $request->inventorySourceGroupId = 'eaque';
    $request->key = 'architecto';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'quae';

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
    $request->assignedInventorySourceInput->inventorySourceId = 'officiis';
    $request->accessToken = 'sed';
    $request->advertiserId = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'excepturi';
    $request->inventorySourceGroupId = 'a';
    $request->key = 'maiores';
    $request->oauthToken = 'laudantium';
    $request->partnerId = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'rem';

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
    $request->accessToken = 'suscipit';
    $request->advertiserId = 'earum';
    $request->alt = AltEnum::PROTO;
    $request->assignedInventorySourceId = 'velit';
    $request->callback = 'eius';
    $request->fields = 'esse';
    $request->inventorySourceGroupId = 'in';
    $request->key = 'eligendi';
    $request->oauthToken = 'quasi';
    $request->partnerId = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'accusantium';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->advertiserId = 'beatae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dicta';
    $request->fields = 'odit';
    $request->filter = 'corporis';
    $request->inventorySourceGroupId = 'rerum';
    $request->key = 'alias';
    $request->oauthToken = 'error';
    $request->orderBy = 'vel';
    $request->pageSize = 35581;
    $request->pageToken = 'id';
    $request->partnerId = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'veritatis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->inventorySourceGroupInput = new InventorySourceGroupInput();
    $request->inventorySourceGroupInput->displayName = 'quae';
    $request->accessToken = 'similique';
    $request->advertiserId = 'incidunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->fields = 'deserunt';
    $request->key = 'delectus';
    $request->oauthToken = 'omnis';
    $request->partnerId = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'quis';

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
    $request->accessToken = 'aliquam';
    $request->advertiserId = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'velit';
    $request->inventorySourceGroupId = 'reiciendis';
    $request->key = 'amet';
    $request->oauthToken = 'nemo';
    $request->partnerId = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quas';

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
    $request->accessToken = 'aliquid';
    $request->advertiserId = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'perspiciatis';
    $request->inventorySourceGroupId = 'accusantium';
    $request->key = 'dicta';
    $request->oauthToken = 'minus';
    $request->partnerId = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'tempore';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'modi';
    $request->advertiserId = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eius';
    $request->fields = 'sequi';
    $request->filter = 'eligendi';
    $request->key = 'asperiores';
    $request->oauthToken = 'esse';
    $request->orderBy = 'blanditiis';
    $request->pageSize = 573610;
    $request->pageToken = 'repellat';
    $request->partnerId = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'itaque';

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
