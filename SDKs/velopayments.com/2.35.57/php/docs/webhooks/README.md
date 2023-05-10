# webhooks

### Available Operations

* [createWebhookV1](#createwebhookv1) - Create Webhook
* [getWebhookV1](#getwebhookv1) - Get details about the given webhook.
* [listWebhooksV1](#listwebhooksv1) - List the details about the webhooks for the given payor.
* [pingWebhookV1](#pingwebhookv1)
* [updateWebhookV1](#updatewebhookv1) - Update Webhook

## createWebhookV1

Create Webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebhookRequest();
    $request->authorizationHeader = 'delectus';
    $request->categories = [
        CategoryEnum::PAYEE,
        CategoryEnum::DEBIT,
        CategoryEnum::PAYEE,
    ];
    $request->enabled = false;
    $request->payorId = '5f2eac55-65d3-407c-bee8-1206e2813fa4';
    $request->webhookUrl = 'deserunt';

    $response = $sdk->webhooks->createWebhookV1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhookV1

Get details about the given webhook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhookV1Request();
    $request->webhookId = '41c480d3-f213-42af-8310-2d514f4cc6f1';

    $response = $sdk->webhooks->getWebhookV1($request);

    if ($response->webhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWebhooksV1

List the details about the webhooks for the given payor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWebhooksV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWebhooksV1Request();
    $request->page = 533978;
    $request->pageSize = 711615;
    $request->payorId = 'f9621a6a-4f77-4a87-ae3e-4be752c65b34';

    $response = $sdk->webhooks->listWebhooksV1($request);

    if ($response->webhooksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pingWebhookV1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PingWebhookV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PingWebhookV1Request();
    $request->webhookId = '418e3bb9-1c8d-4975-a0e8-419d8f84f144';

    $response = $sdk->webhooks->pingWebhookV1($request);

    if ($response->pingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWebhookV1

Update Webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookV1Request;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWebhookV1Request();
    $request->updateWebhookRequest = new UpdateWebhookRequest();
    $request->updateWebhookRequest->authorizationHeader = 'maiores';
    $request->updateWebhookRequest->categories = [
        CategoryEnum::DEBIT,
    ];
    $request->updateWebhookRequest->enabled = false;
    $request->updateWebhookRequest->webhookUrl = 'consequatur';
    $request->webhookId = '7edcc4aa-5f3c-4abd-905a-972e05672822';

    $response = $sdk->webhooks->updateWebhookV1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
