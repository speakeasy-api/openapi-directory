# webhooks

### Available Operations

* [createNetworkWebhooksHttpServer](#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [createNetworkWebhooksPayloadTemplate](#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [createNetworkWebhooksWebhookTest](#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [deleteNetworkWebhooksHttpServer](#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [deleteNetworkWebhooksPayloadTemplate](#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [getNetworkWebhooksHttpServer](#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [getNetworkWebhooksHttpServers](#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [getNetworkWebhooksPayloadTemplate](#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [getNetworkWebhooksPayloadTemplates](#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [getNetworkWebhooksWebhookTest](#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [getOrganizationWebhooksAlertTypes](#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [getOrganizationWebhooksLogs](#getorganizationwebhookslogs) - Return the log of webhook POSTs sent
* [updateNetworkWebhooksHttpServer](#updatenetworkwebhookshttpserver) - Update an HTTP server
* [updateNetworkWebhooksPayloadTemplate](#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network

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
    $request->requestBody->name = 'Ms. Wanda Wyman';
    $request->requestBody->payloadTemplate = new CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate();
    $request->requestBody->payloadTemplate->name = 'Louis Dibbert';
    $request->requestBody->payloadTemplate->payloadTemplateId = 'nemo';
    $request->requestBody->sharedSecret = 'ex';
    $request->requestBody->url = 'aperiam';
    $request->networkId = 'nisi';

    $response = $sdk->webhooks->createNetworkWebhooksHttpServer($request);

    if ($response->createNetworkWebhooksHttpServer201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->requestBody->body = 'enim';
    $request->requestBody->bodyFile = 'similique';
    $request->requestBody->headers = [
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
    ];
    $request->requestBody->headersFile = 'voluptatem';
    $request->requestBody->name = 'Marjorie Quigley';
    $request->networkId = 'cum';

    $response = $sdk->webhooks->createNetworkWebhooksPayloadTemplate($request);

    if ($response->createNetworkWebhooksPayloadTemplate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->requestBody->alertTypeId = 'totam';
    $request->requestBody->payloadTemplateId = 'laborum';
    $request->requestBody->payloadTemplateName = 'hic';
    $request->requestBody->sharedSecret = 'eum';
    $request->requestBody->url = 'rem';
    $request->networkId = 'ut';

    $response = $sdk->webhooks->createNetworkWebhooksWebhookTest($request);

    if ($response->createNetworkWebhooksWebhookTest201ApplicationJSONObject !== null) {
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
    $request->httpServerId = 'perspiciatis';
    $request->networkId = 'possimus';

    $response = $sdk->webhooks->deleteNetworkWebhooksHttpServer($request);

    if ($response->statusCode === 200) {
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
    $request->networkId = 'odit';
    $request->payloadTemplateId = 'harum';

    $response = $sdk->webhooks->deleteNetworkWebhooksPayloadTemplate($request);

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
    $request->httpServerId = 'excepturi';
    $request->networkId = 'iste';

    $response = $sdk->webhooks->getNetworkWebhooksHttpServer($request);

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
    $request->networkId = 'eius';

    $response = $sdk->webhooks->getNetworkWebhooksHttpServers($request);

    if ($response->getNetworkWebhooksHttpServers200ApplicationJSONObjects !== null) {
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
    $request->networkId = 'consequatur';
    $request->payloadTemplateId = 'tempora';

    $response = $sdk->webhooks->getNetworkWebhooksPayloadTemplate($request);

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
    $request->networkId = 'neque';

    $response = $sdk->webhooks->getNetworkWebhooksPayloadTemplates($request);

    if ($response->getNetworkWebhooksPayloadTemplates200ApplicationJSONObjects !== null) {
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
    $request->networkId = 'eum';
    $request->webhookTestId = 'adipisci';

    $response = $sdk->webhooks->getNetworkWebhooksWebhookTest($request);

    if ($response->getNetworkWebhooksWebhookTest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationWebhooksAlertTypes

Return a list of alert types to be used with managing webhook alerts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWebhooksAlertTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWebhooksAlertTypesProductTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationWebhooksAlertTypesRequest();
    $request->organizationId = 'mollitia';
    $request->productType = GetOrganizationWebhooksAlertTypesProductTypeEnum::APPLIANCE;

    $response = $sdk->webhooks->getOrganizationWebhooksAlertTypes($request);

    if ($response->getOrganizationWebhooksAlertTypes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationWebhooksLogs

Return the log of webhook POSTs sent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWebhooksLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationWebhooksLogsRequest();
    $request->endingBefore = 'natus';
    $request->organizationId = 'nisi';
    $request->perPage = 306275;
    $request->startingAfter = 'impedit';
    $request->t0 = 'voluptatem';
    $request->t1 = 'ipsam';
    $request->timespan = 2440.46;
    $request->url = 'praesentium';

    $response = $sdk->webhooks->getOrganizationWebhooksLogs($request);

    if ($response->getOrganizationWebhooksLogs200ApplicationJSONObjects !== null) {
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
    $request->requestBody->name = 'Eileen Vandervort';
    $request->requestBody->payloadTemplate = new UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate();
    $request->requestBody->payloadTemplate->payloadTemplateId = 'fugiat';
    $request->requestBody->sharedSecret = 'vero';
    $request->httpServerId = 'tenetur';
    $request->networkId = 'perspiciatis';

    $response = $sdk->webhooks->updateNetworkWebhooksHttpServer($request);

    if ($response->updateNetworkWebhooksHttpServer200ApplicationJSONObject !== null) {
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
    $request->requestBody->body = 'quisquam';
    $request->requestBody->bodyFile = 'reprehenderit';
    $request->requestBody->headers = [
        new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
    ];
    $request->requestBody->headersFile = 'minima';
    $request->requestBody->name = 'Dominick Stehr';
    $request->networkId = 'corporis';
    $request->payloadTemplateId = 'tempora';

    $response = $sdk->webhooks->updateNetworkWebhooksPayloadTemplate($request);

    if ($response->updateNetworkWebhooksPayloadTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
