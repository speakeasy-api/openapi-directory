# resourceGroups

### Available Operations

* [getConsumerV1Resourcegroups](#getconsumerv1resourcegroups) - List Resource Groups
* [getConsumerV1ResourcegroupsId](#getconsumerv1resourcegroupsid) - Get Resource Group

## getConsumerV1Resourcegroups

<p>Use this endpoint to return a list of <b>Resource Groups</b> for the requested location. If not specified, the business location defaults to the primary business location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ResourcegroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ResourcegroupsRequest();
    $request->deleted = false;
    $request->limit = 174112;
    $request->locationId = 'deserunt';
    $request->offset = 475289;

    $response = $sdk->resourceGroups->getConsumerV1Resourcegroups($request);

    if ($response->resourceGroupListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1ResourcegroupsId

<p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET /consumer/v1/resourceGroups</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ResourcegroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ResourcegroupsIdRequest();
    $request->id = '0c688282-aa48-4256-af22-2e9817ee17cb';

    $response = $sdk->resourceGroups->getConsumerV1ResourcegroupsId($request);

    if ($response->resourceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
