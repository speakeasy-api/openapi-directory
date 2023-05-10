# resourceGroups

### Available Operations

* [deleteSetupV1ResourcegroupsId](#deletesetupv1resourcegroupsid) - Delete Resource Group
* [getSetupV1Resourcegroups](#getsetupv1resourcegroups) - List Resource Groups
* [getSetupV1ResourcegroupsId](#getsetupv1resourcegroupsid) - Get Resource Group
* [postSetupV1Resourcegroups](#postsetupv1resourcegroups) - Create Resource Group
* [putSetupV1ResourcegroupsId](#putsetupv1resourcegroupsid) - Update Resource Group
* [putSetupV1ResourcegroupsIdRecover](#putsetupv1resourcegroupsidrecover) - Recover Resource Group

## deleteSetupV1ResourcegroupsId

<p>Use this endpoint to <b>Delete</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. The resource group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/resourcegroups​/{id}​/recover</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ResourcegroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ResourcegroupsIdRequest();
    $request->id = '57eb809e-2810-4331-b398-1d4c700b607f';

    $response = $sdk->resourceGroups->deleteSetupV1ResourcegroupsId($request);

    if ($response->resourceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1Resourcegroups

<p>Use this endpoint to <b>List Resource Groups</b> for the specified location. If not specified, the business location defaults to the primary business location. <b>Name</b> is a required field.</p>
<p>Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcegroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcegroupsRequest();
    $request->deleted = false;
    $request->limit = 243678;
    $request->locationId = 'porro';
    $request->offset = 588639;

    $response = $sdk->resourceGroups->getSetupV1Resourcegroups($request);

    if ($response->resourceGroupListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ResourcegroupsId

<p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET setup/v1/resourceGroups</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ResourcegroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ResourcegroupsIdRequest();
    $request->id = '3c73b9da-3f2c-4eda-be23-f2257411faf4';

    $response = $sdk->resourceGroups->getSetupV1ResourcegroupsId($request);

    if ($response->resourceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1Resourcegroups

<p>Use this endpoint to <b>Create</b> a resourceGroup object. Resource groups are used to categorize your resources.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ResourceGroupInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResourceGroupInputModel();
    $request->description = 'distinctio';
    $request->email = 'Faye92@yahoo.com';
    $request->locationId = 'modi';
    $request->name = 'Judith Thompson Sr.';

    $response = $sdk->resourceGroups->postSetupV1Resourcegroups($request);

    if ($response->resourceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ResourcegroupsId

<p>Use this endpoint to <b>Update</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ResourcegroupsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceGroupUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ResourcegroupsIdRequest();
    $request->resourceGroupUpdateModel = new ResourceGroupUpdateModel();
    $request->resourceGroupUpdateModel->description = 'deleniti';
    $request->resourceGroupUpdateModel->email = 'Jabari72@gmail.com';
    $request->resourceGroupUpdateModel->name = 'Karen Gleichner';
    $request->id = 'a7d575f1-400e-4764-ad73-34ec1b781b36';

    $response = $sdk->resourceGroups->putSetupV1ResourcegroupsId($request);

    if ($response->resourceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ResourcegroupsIdRecover

<p>Use this endpoint to <b>Recover</b> a deleted resourceGroup object. A valid <b>resourceGroup id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ResourcegroupsIdRecoverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ResourcegroupsIdRecoverRequest();
    $request->id = 'a08088d1-00ef-4ada-a00e-f0422eb2164c';

    $response = $sdk->resourceGroups->putSetupV1ResourcegroupsIdRecover($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
