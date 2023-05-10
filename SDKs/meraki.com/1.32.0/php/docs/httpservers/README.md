# httpServers

### Available Operations

* [createNetworkWebhooksHttpServer](#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [deleteNetworkWebhooksHttpServer](#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [getNetworkWebhooksHttpServer](#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [getNetworkWebhooksHttpServers](#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [updateNetworkWebhooksHttpServer](#updatenetworkwebhookshttpserver) - Update an HTTP server

## createNetworkWebhooksHttpServer

Add an HTTP server to a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksHttpServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksHttpServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWebhooksHttpServerRequest();
    $request->requestBody = new CreateNetworkWebhooksHttpServerRequestBody();
    $request->requestBody->name = 'Jean Goldner';
    $request->requestBody->payloadTemplate = new CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate();
    $request->requestBody->payloadTemplate->name = 'Darrell Yost';
    $request->requestBody->payloadTemplate->payloadTemplateId = 'debitis';
    $request->requestBody->sharedSecret = 'neque';
    $request->requestBody->url = 'mollitia';
    $request->networkId = 'tenetur';

    $response = $sdk->httpServers->createNetworkWebhooksHttpServer($request);

    if ($response->createNetworkWebhooksHttpServer201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWebhooksHttpServer

Delete an HTTP server from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWebhooksHttpServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWebhooksHttpServerRequest();
    $request->httpServerId = 'non';
    $request->networkId = 'pariatur';

    $response = $sdk->httpServers->deleteNetworkWebhooksHttpServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksHttpServer

Return an HTTP server for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksHttpServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksHttpServerRequest();
    $request->httpServerId = 'vero';
    $request->networkId = 'natus';

    $response = $sdk->httpServers->getNetworkWebhooksHttpServer($request);

    if ($response->getNetworkWebhooksHttpServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksHttpServers

List the HTTP servers for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksHttpServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksHttpServersRequest();
    $request->networkId = 'quibusdam';

    $response = $sdk->httpServers->getNetworkWebhooksHttpServers($request);

    if ($response->getNetworkWebhooksHttpServers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWebhooksHttpServer

Update an HTTP server. To change a URL, create a new HTTP server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksHttpServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksHttpServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWebhooksHttpServerRequest();
    $request->requestBody = new UpdateNetworkWebhooksHttpServerRequestBody();
    $request->requestBody->name = 'Luke Ebert';
    $request->requestBody->payloadTemplate = new UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate();
    $request->requestBody->payloadTemplate->payloadTemplateId = 'placeat';
    $request->requestBody->sharedSecret = 'pariatur';
    $request->httpServerId = 'vel';
    $request->networkId = 'non';

    $response = $sdk->httpServers->updateNetworkWebhooksHttpServer($request);

    if ($response->updateNetworkWebhooksHttpServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
