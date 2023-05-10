# webhookTests

### Available Operations

* [createNetworkWebhooksWebhookTest](#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [getNetworkWebhooksWebhookTest](#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network

## createNetworkWebhooksWebhookTest

Send a test webhook for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksWebhookTestRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksWebhookTestRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWebhooksWebhookTestRequest();
    $request->requestBody = new CreateNetworkWebhooksWebhookTestRequestBody();
    $request->requestBody->alertTypeId = 'quos';
    $request->requestBody->payloadTemplateId = 'repellendus';
    $request->requestBody->payloadTemplateName = 'in';
    $request->requestBody->sharedSecret = 'ipsum';
    $request->requestBody->url = 'corrupti';
    $request->networkId = 'aut';

    $response = $sdk->webhookTests->createNetworkWebhooksWebhookTest($request);

    if ($response->createNetworkWebhooksWebhookTest201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksWebhookTest

Return the status of a webhook test for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksWebhookTestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksWebhookTestRequest();
    $request->networkId = 'iste';
    $request->webhookTestId = 'deserunt';

    $response = $sdk->webhookTests->getNetworkWebhooksWebhookTest($request);

    if ($response->getNetworkWebhooksWebhookTest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
