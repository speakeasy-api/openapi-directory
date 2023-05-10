# serviceGroups

### Available Operations

* [getConsumerV1Servicegroups](#getconsumerv1servicegroups) - List Service Groups
* [getConsumerV1ServicegroupsId](#getconsumerv1servicegroupsid) - Get Service Group

## getConsumerV1Servicegroups

<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ServicegroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ServicegroupsRequest();
    $request->limit = 959167;
    $request->locationId = 'consectetur';
    $request->offset = 458139;

    $response = $sdk->serviceGroups->getConsumerV1Servicegroups($request);

    if ($response->serviceGroupListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1ServicegroupsId

<p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find serviceGroup id's by using the <i>GET /consumer/v1/serviceGroups</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ServicegroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ServicegroupsIdRequest();
    $request->id = 503427;

    $response = $sdk->serviceGroups->getConsumerV1ServicegroupsId($request);

    if ($response->serviceGroupViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
