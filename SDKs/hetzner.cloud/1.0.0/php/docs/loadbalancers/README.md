# loadBalancers

### Available Operations

* [deleteLoadBalancersId](#deleteloadbalancersid) - Delete a Load Balancer
* [getLoadBalancers](#getloadbalancers) - Get all Load Balancers
* [getLoadBalancersId](#getloadbalancersid) - Get a Load Balancer
* [getLoadBalancersIdMetrics](#getloadbalancersidmetrics) - Get Metrics for a LoadBalancer
* [postLoadBalancers](#postloadbalancers) - Create a Load Balancer
* [putLoadBalancersId](#putloadbalancersid) - Update a Load Balancer

## deleteLoadBalancersId

Deletes a Load Balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoadBalancersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLoadBalancersIdRequest();
    $request->id = 164940;

    $response = $sdk->loadBalancers->deleteLoadBalancersId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoadBalancers

Gets all existing Load Balancers that you have available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancersRequest();
    $request->labelSelector = 'assumenda';
    $request->name = 'Linda Corkery';
    $request->sort = GetLoadBalancersSortEnum::ID_DESC;

    $response = $sdk->loadBalancers->getLoadBalancers($request);

    if ($response->getLoadBalancers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoadBalancersId

Gets a specific Load Balancer object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancersIdRequest();
    $request->id = 703737;

    $response = $sdk->loadBalancers->getLoadBalancersId($request);

    if ($response->getLoadBalancersId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoadBalancersIdMetrics

You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.

Depending on the type you will get different time series data:

|Type | Timeseries | Unit | Description |
|---- |------------|------|-------------|
| open_connections | open_connections | number | Open connections |
| connections_per_second | connections_per_second | connections/s | Connections per second |
| requests_per_second | requests_per_second | requests/s | Requests per second |
| bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
|| bandwidth.out | bytes/s | Egress bandwidth |

Metrics are available for the last 30 days only.

If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.

We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersIdMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersIdMetricsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancersIdMetricsRequest();
    $request->end = 'tempore';
    $request->id = 288476;
    $request->start = 'delectus';
    $request->step = 'eum';
    $request->type = GetLoadBalancersIdMetricsTypeEnum::OPEN_CONNECTIONS;

    $response = $sdk->loadBalancers->getLoadBalancersIdMetrics($request);

    if ($response->getLoadBalancersIdMetrics200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancers

Creates a Load Balancer.

#### Call specific error codes

| Code                                    | Description                                                                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------|
| `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
| `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
| `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
| `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `source_port_already_used`              | The source port you are trying to add is already in use                                               |
| `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLabels;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHTTP;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetIP;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetLabelSelector;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTarget;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetLoadBalancerTargetServer;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersCreateLoadBalancerRequest();
    $request->algorithm = new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm();
    $request->algorithm->type = PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum::LEAST_CONNECTIONS;
    $request->labels = new PostLoadBalancersCreateLoadBalancerRequestLabels();
    $request->labels->labelkey = 'value';
    $request->loadBalancerType = 'lb11';
    $request->location = 'sint';
    $request->name = 'Web Frontend';
    $request->network = 123;
    $request->networkZone = 'eu-central';
    $request->publicInterface = true;
    $request->services = [
        new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService(),
        new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService(),
    ];
    $request->targets = [
        new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget(),
        new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget(),
        new PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget(),
    ];

    $response = $sdk->loadBalancers->postLoadBalancers($request);

    if ($response->postLoadBalancers201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLoadBalancersId

Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.

Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutLoadBalancersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutLoadBalancersIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLoadBalancersIdRequest();
    $request->requestBody = new PutLoadBalancersIdRequestBody();
    $request->requestBody->labels = [
        'sint' => 'officia',
        'dolor' => 'debitis',
        'a' => 'dolorum',
        'in' => 'in',
    ];
    $request->requestBody->name = 'new-name';
    $request->id = 846409;

    $response = $sdk->loadBalancers->putLoadBalancersId($request);

    if ($response->putLoadBalancersId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
