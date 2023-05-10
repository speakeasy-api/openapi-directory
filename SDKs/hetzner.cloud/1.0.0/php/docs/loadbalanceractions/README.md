# loadBalancerActions

### Available Operations

* [getLoadBalancersIdActions](#getloadbalancersidactions) - Get all Actions for a Load Balancer
* [getLoadBalancersIdActionsActionId](#getloadbalancersidactionsactionid) - Get an Action for a Load Balancer
* [postLoadBalancersIdActionsAddService](#postloadbalancersidactionsaddservice) - Add Service
* [postLoadBalancersIdActionsAddTarget](#postloadbalancersidactionsaddtarget) - Add Target
* [postLoadBalancersIdActionsAttachToNetwork](#postloadbalancersidactionsattachtonetwork) - Attach a Load Balancer to a Network
* [postLoadBalancersIdActionsChangeAlgorithm](#postloadbalancersidactionschangealgorithm) - Change Algorithm
* [postLoadBalancersIdActionsChangeDnsPtr](#postloadbalancersidactionschangednsptr) - Change reverse DNS entry for this Load Balancer
* [postLoadBalancersIdActionsChangeProtection](#postloadbalancersidactionschangeprotection) - Change Load Balancer Protection
* [postLoadBalancersIdActionsChangeType](#postloadbalancersidactionschangetype) - Change the Type of a Load Balancer
* [postLoadBalancersIdActionsDeleteService](#postloadbalancersidactionsdeleteservice) - Delete Service
* [postLoadBalancersIdActionsDetachFromNetwork](#postloadbalancersidactionsdetachfromnetwork) - Detach a Load Balancer from a Network
* [postLoadBalancersIdActionsDisablePublicInterface](#postloadbalancersidactionsdisablepublicinterface) - Disable the public interface of a Load Balancer
* [postLoadBalancersIdActionsEnablePublicInterface](#postloadbalancersidactionsenablepublicinterface) - Enable the public interface of a Load Balancer
* [postLoadBalancersIdActionsRemoveTarget](#postloadbalancersidactionsremovetarget) - Remove Target
* [postLoadBalancersIdActionsUpdateService](#postloadbalancersidactionsupdateservice) - Update Service

## getLoadBalancersIdActions

Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersIdActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersIdActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersIdActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancersIdActionsRequest();
    $request->id = 441711;
    $request->sort = GetLoadBalancersIdActionsSortParameterSortEnum::COMMAND_DESC;
    $request->status = GetLoadBalancersIdActionsStatusParameterStatusEnum::ERROR;

    $response = $sdk->loadBalancerActions->getLoadBalancersIdActions($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoadBalancersIdActionsActionId

Returns a specific Action for a Load Balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersIdActionsActionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancersIdActionsActionIdRequest();
    $request->actionId = 120196;
    $request->id = 359444;

    $response = $sdk->loadBalancerActions->getLoadBalancersIdActionsActionId($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsAddService

Adds a service to a Load Balancer.

#### Call specific error codes

| Code                       | Description                                             |
|----------------------------|---------------------------------------------------------|
| `source_port_already_used` | The source port you are trying to add is already in use |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddServiceLoadBalancerService;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHTTP;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsAddServiceRequest();
    $request->requestBody = new PostLoadBalancersIdActionsAddServiceLoadBalancerService();
    $request->requestBody->destinationPort = 80;
    $request->requestBody->healthCheck = new PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck();
    $request->requestBody->healthCheck->http = new PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp();
    $request->requestBody->healthCheck->http->domain = 'example.com';
    $request->requestBody->healthCheck->http->path = '/';
    $request->requestBody->healthCheck->http->response = '{"status": "ok"}';
    $request->requestBody->healthCheck->http->statusCodes = [
        'iusto',
        'dicta',
    ];
    $request->requestBody->healthCheck->http->tls = false;
    $request->requestBody->healthCheck->interval = 15;
    $request->requestBody->healthCheck->port = 4711;
    $request->requestBody->healthCheck->protocol = PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum::HTTP;
    $request->requestBody->healthCheck->retries = 3;
    $request->requestBody->healthCheck->timeout = 10;
    $request->requestBody->http = new PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHTTP();
    $request->requestBody->http->certificates = [
        317983,
        880476,
        414263,
    ];
    $request->requestBody->http->cookieLifetime = 300;
    $request->requestBody->http->cookieName = 'HCLBSTICKY';
    $request->requestBody->http->redirectHttp = true;
    $request->requestBody->http->stickySessions = true;
    $request->requestBody->listenPort = 443;
    $request->requestBody->protocol = PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum::HTTPS;
    $request->requestBody->proxyprotocol = false;
    $request->id = 918236;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsAddService($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsAddTarget

Adds a target to a Load Balancer.

#### Call specific error codes

| Code                                    | Description                                                                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------|
| `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
| `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
| `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
| `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddTargetAddTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddTargetAddTargetRequestLoadBalancerTargetIP;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddTargetAddTargetRequestServer;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsAddTargetRequest();
    $request->requestBody = new PostLoadBalancersIdActionsAddTargetAddTargetRequest();
    $request->requestBody->ip = new PostLoadBalancersIdActionsAddTargetAddTargetRequestLoadBalancerTargetIP();
    $request->requestBody->ip->ip = '203.0.113.1';
    $request->requestBody->labelSelector = new PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector();
    $request->requestBody->labelSelector->selector = 'env=prod';
    $request->requestBody->server = new PostLoadBalancersIdActionsAddTargetAddTargetRequestServer();
    $request->requestBody->server->id = 80;
    $request->requestBody->type = PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum::SERVER;
    $request->requestBody->usePrivateIp = true;
    $request->id = 216822;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsAddTarget($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsAttachToNetwork

Attach a Load Balancer to a Network.

**Call specific error codes**

| Code                             | Description                                                           |
|----------------------------------|-----------------------------------------------------------------------|
| `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
| `ip_not_available`               | The provided Network IP is not available                              |
| `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAttachToNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsAttachToNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsAttachToNetworkRequest();
    $request->requestBody = new PostLoadBalancersIdActionsAttachToNetworkRequestBody();
    $request->requestBody->ip = '10.0.1.1';
    $request->requestBody->network = 4711;
    $request->id = 692472;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsAttachToNetwork($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsChangeAlgorithm

Change the algorithm that determines to which target new requests are sent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsChangeAlgorithmRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsChangeAlgorithmRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsChangeAlgorithmRequest();
    $request->requestBody = new PostLoadBalancersIdActionsChangeAlgorithmRequestBody();
    $request->requestBody->type = PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum::LEAST_CONNECTIONS;
    $request->id = 566602;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsChangeAlgorithm($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsChangeDnsPtr

Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.

Floating IPs assigned to the Server are not affected by this.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsChangeDnsPtrRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsChangeDnsPtrRequest();
    $request->requestBody = new PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest();
    $request->requestBody->dnsPtr = 'lb1.example.com';
    $request->requestBody->ip = '1.2.3.4';
    $request->id = 865103;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsChangeDnsPtr($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsChangeProtection

Changes the protection configuration of a Load Balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsChangeProtectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsChangeProtectionRequest();
    $request->requestBody = new PostLoadBalancersIdActionsChangeProtectionRequestBody();
    $request->requestBody->delete = true;
    $request->id = 265389;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsChangeProtection($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsChangeType

Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.

**Call specific error codes**

| Code                         | Description                                                     |
|------------------------------|-----------------------------------------------------------------|
| `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsChangeTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsChangeTypeChangeTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsChangeTypeRequest();
    $request->requestBody = new PostLoadBalancersIdActionsChangeTypeChangeTypeRequest();
    $request->requestBody->loadBalancerType = 'lb21';
    $request->id = 508969;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsChangeType($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsDeleteService

Delete a service of a Load Balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsDeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsDeleteServiceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsDeleteServiceRequest();
    $request->requestBody = new PostLoadBalancersIdActionsDeleteServiceRequestBody();
    $request->requestBody->listenPort = 4711;
    $request->id = 523248;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsDeleteService($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsDetachFromNetwork

Detaches a Load Balancer from a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsDetachFromNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsDetachFromNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsDetachFromNetworkRequest();
    $request->requestBody = new PostLoadBalancersIdActionsDetachFromNetworkRequestBody();
    $request->requestBody->network = 4711;
    $request->id = 916723;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsDetachFromNetwork($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsDisablePublicInterface

Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.

#### Call specific error codes

| Code                                      | Description                                                                    |
|-------------------------------------------|--------------------------------------------------------------------------------|
| `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
| `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsDisablePublicInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsDisablePublicInterfaceRequest();
    $request->id = 93940;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsDisablePublicInterface($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsEnablePublicInterface

Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsEnablePublicInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsEnablePublicInterfaceRequest();
    $request->id = 921158;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsEnablePublicInterface($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsRemoveTarget

Removes a target from a Load Balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsRemoveTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLoadBalancerTargetIP;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsRemoveTargetRequest();
    $request->requestBody = new PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest();
    $request->requestBody->ip = new PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLoadBalancerTargetIP();
    $request->requestBody->ip->ip = '203.0.113.1';
    $request->requestBody->labelSelector = new PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector();
    $request->requestBody->labelSelector->selector = 'env=prod';
    $request->requestBody->server = new PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer();
    $request->requestBody->server->id = 80;
    $request->requestBody->type = PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum::LABEL_SELECTOR;
    $request->id = 83112;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsRemoveTarget($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoadBalancersIdActionsUpdateService

Updates a Load Balancer Service.

#### Call specific error codes

| Code                       | Description                                             |
|----------------------------|---------------------------------------------------------|
| `source_port_already_used` | The source port you are trying to add is already in use |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsUpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsUpdateServiceLoadBalancerService;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHTTP;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoadBalancersIdActionsUpdateServiceRequest();
    $request->requestBody = new PostLoadBalancersIdActionsUpdateServiceLoadBalancerService();
    $request->requestBody->destinationPort = 80;
    $request->requestBody->healthCheck = new PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck();
    $request->requestBody->healthCheck->http = new PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp();
    $request->requestBody->healthCheck->http->domain = 'example.com';
    $request->requestBody->healthCheck->http->path = '/';
    $request->requestBody->healthCheck->http->response = '{"status": "ok"}';
    $request->requestBody->healthCheck->http->statusCodes = [
        'incidunt',
        'enim',
        'consequatur',
        'est',
    ];
    $request->requestBody->healthCheck->http->tls = false;
    $request->requestBody->healthCheck->interval = 15;
    $request->requestBody->healthCheck->port = 4711;
    $request->requestBody->healthCheck->protocol = PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum::HTTP;
    $request->requestBody->healthCheck->retries = 3;
    $request->requestBody->healthCheck->timeout = 10;
    $request->requestBody->http = new PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHTTP();
    $request->requestBody->http->certificates = [
        131797,
        647174,
        716327,
        841386,
    ];
    $request->requestBody->http->cookieLifetime = 300;
    $request->requestBody->http->cookieName = 'HCLBSTICKY';
    $request->requestBody->http->redirectHttp = true;
    $request->requestBody->http->stickySessions = true;
    $request->requestBody->listenPort = 443;
    $request->requestBody->protocol = PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum::HTTPS;
    $request->requestBody->proxyprotocol = false;
    $request->id = 289406;

    $response = $sdk->loadBalancerActions->postLoadBalancersIdActionsUpdateService($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
