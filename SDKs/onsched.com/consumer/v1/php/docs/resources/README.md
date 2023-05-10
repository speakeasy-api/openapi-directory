# resources

### Available Operations

* [getConsumerV1Resources](#getconsumerv1resources) - List Resources
* [getConsumerV1ResourcesId](#getconsumerv1resourcesid) - Get Resource
* [getConsumerV1ResourcesIdServices](#getconsumerv1resourcesidservices) - Get Resource Linked Services

## getConsumerV1Resources

<p>Use this endpoint to return a <b>List of Resources</b> associated with a business location. If not specified, the business location defaults to the primary business location. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ResourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ResourcesRequest();
    $request->email = 'Green.Botsford69@hotmail.com';
    $request->limit = 473221;
    $request->locationId = 'rerum';
    $request->name = 'Warren Rau V';
    $request->offset = 731398;
    $request->resourceGroupId = 240020;
    $request->sortOrder = 'cumque';

    $response = $sdk->resources->getConsumerV1Resources($request);

    if ($response->resourceListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1ResourcesId

<p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the <i>GET consumer/v1/resources</i> endpoint. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ResourcesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ResourcesIdRequest();
    $request->id = 160538;

    $response = $sdk->resources->getConsumerV1ResourcesId($request);

    if ($response->resourceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1ResourcesIdServices

<p>Use this endpoint to get a <b>List of Linked Services</b> associated with the resource requested. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, the maximum limit is 100. Use the other query parameters to filter the results further.</p>
<p>Resource linked services are used to explicitly define the services that can be booked for a specified resource. By default, all services are bookable for any resource. For more information: <a href="https://docs.onsched.com/docs/linked-services">Linked Services Overview</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ResourcesIdServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ResourcesIdServicesRequest();
    $request->id = 9766;
    $request->limit = 796392;
    $request->offset = 308286;

    $response = $sdk->resources->getConsumerV1ResourcesIdServices($request);

    if ($response->resourceServiceListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
