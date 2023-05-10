# serviceGroups

### Available Operations

* [deleteSetupV1ServicegroupsId](#deletesetupv1servicegroupsid) - Delete Service Group
* [getSetupV1Servicegroups](#getsetupv1servicegroups) - List Service Groups
* [getSetupV1ServicegroupsId](#getsetupv1servicegroupsid) - Get Service Group
* [postSetupV1Servicegroups](#postsetupv1servicegroups) - Create Service Group
* [putSetupV1ServicegroupsId](#putsetupv1servicegroupsid) - Update Service Group
* [putSetupV1ServicegroupsIdRecover](#putsetupv1servicegroupsidrecover) - Recover Service Group

## deleteSetupV1ServicegroupsId

<p>Use this endpoint to <b>Delete</b> a Service Group object. A valid <b>serviceGroup id</b> is required. The service group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/servicegroups​/{id}​/recover</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1ServicegroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1ServicegroupsIdRequest();
    $request->id = 998527;

    $response = $sdk->serviceGroups->deleteSetupV1ServicegroupsId($request);

    if ($response->serviceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1Servicegroups

<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If no business location is specified it will default to the Primary Business Location of the company. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicegroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicegroupsRequest();
    $request->limit = 607631;
    $request->locationId = 'explicabo';
    $request->offset = 425817;

    $response = $sdk->serviceGroups->getSetupV1Servicegroups($request);

    if ($response->serviceGroupListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1ServicegroupsId

<p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find service group id's by using the <i>GET /setup/v1/serviceGroups</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1ServicegroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1ServicegroupsIdRequest();
    $request->id = 740347;

    $response = $sdk->serviceGroups->getSetupV1ServicegroupsId($request);

    if ($response->serviceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1Servicegroups

<p>Use this endpoint to <b>Create</b> a Service Group. If no locationId is specified in the body, the business location will default to the primary business location. Service groups are used to categorize services. Service groups are optional and only make sense if you have multiple services that will be easier read if categorized. Only the service group Type of 0 is supported by the API. It defaults to 0 if not supplied.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ServiceGroupInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceGroupInputModel();
    $request->description = 'id';
    $request->locationId = 'possimus';
    $request->name = 'Brittany Heathcote';
    $request->type = 98759;

    $response = $sdk->serviceGroups->postSetupV1Servicegroups($request);

    if ($response->serviceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ServicegroupsId

<p>Use this endpoint to <b>Update</b> a Service Group object. A valid <b>serviceGroup id</b> is required. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ServicegroupsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceGroupInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ServicegroupsIdRequest();
    $request->serviceGroupInputModel = new ServiceGroupInputModel();
    $request->serviceGroupInputModel->description = 'error';
    $request->serviceGroupInputModel->locationId = 'nobis';
    $request->serviceGroupInputModel->name = 'Colleen Gibson DVM';
    $request->serviceGroupInputModel->type = 822711;
    $request->id = 146583;

    $response = $sdk->serviceGroups->putSetupV1ServicegroupsId($request);

    if ($response->serviceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1ServicegroupsIdRecover

<p>Use this endpoint to <b>Recover</b> a deleted Service Group. A valid <b>serviceGroup id</b> is required. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1ServicegroupsIdRecoverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1ServicegroupsIdRecoverRequest();
    $request->id = 27946;

    $response = $sdk->serviceGroups->putSetupV1ServicegroupsIdRecover($request);

    if ($response->serviceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
