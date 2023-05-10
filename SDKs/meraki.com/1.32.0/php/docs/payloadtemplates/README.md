# payloadTemplates

### Available Operations

* [createNetworkWebhooksPayloadTemplate](#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [deleteNetworkWebhooksPayloadTemplate](#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [getNetworkWebhooksPayloadTemplate](#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [getNetworkWebhooksPayloadTemplates](#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [updateNetworkWebhooksPayloadTemplate](#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network

## createNetworkWebhooksPayloadTemplate

Create a webhook payload template for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksPayloadTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksPayloadTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWebhooksPayloadTemplateRequest();
    $request->requestBody = new CreateNetworkWebhooksPayloadTemplateRequestBody();
    $request->requestBody->body = 'totam';
    $request->requestBody->bodyFile = 'incidunt';
    $request->requestBody->headers = [
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
    ];
    $request->requestBody->headersFile = 'quasi';
    $request->requestBody->name = 'Pat Schiller';
    $request->networkId = 'itaque';

    $response = $sdk->payloadTemplates->createNetworkWebhooksPayloadTemplate($request);

    if ($response->createNetworkWebhooksPayloadTemplate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWebhooksPayloadTemplate

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWebhooksPayloadTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWebhooksPayloadTemplateRequest();
    $request->networkId = 'incidunt';
    $request->payloadTemplateId = 'asperiores';

    $response = $sdk->payloadTemplates->deleteNetworkWebhooksPayloadTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksPayloadTemplate

Get the webhook payload template for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksPayloadTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksPayloadTemplateRequest();
    $request->networkId = 'alias';
    $request->payloadTemplateId = 'eligendi';

    $response = $sdk->payloadTemplates->getNetworkWebhooksPayloadTemplate($request);

    if ($response->getNetworkWebhooksPayloadTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksPayloadTemplates

List the webhook payload templates for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksPayloadTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksPayloadTemplatesRequest();
    $request->networkId = 'accusantium';

    $response = $sdk->payloadTemplates->getNetworkWebhooksPayloadTemplates($request);

    if ($response->getNetworkWebhooksPayloadTemplates200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWebhooksPayloadTemplate

Update a webhook payload template for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksPayloadTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksPayloadTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWebhooksPayloadTemplateRequest();
    $request->requestBody = new UpdateNetworkWebhooksPayloadTemplateRequestBody();
    $request->requestBody->body = 'voluptatem';
    $request->requestBody->bodyFile = 'non';
    $request->requestBody->headers = [
        new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
    ];
    $request->requestBody->headersFile = 'minima';
    $request->requestBody->name = 'Jean Krajcik';
    $request->networkId = 'minus';
    $request->payloadTemplateId = 'nobis';

    $response = $sdk->payloadTemplates->updateNetworkWebhooksPayloadTemplate($request);

    if ($response->updateNetworkWebhooksPayloadTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
