# webhooks

## Overview

[Webhooks](https://www.shipengine.com/docs/tracking/webhooks/) are a powerful feature of ShipEngine that can save you from sending repeated polling requests to check on the state of something.  With webhooks, ShipEngine will automatically contact your servers when the stage changes.  This can include [parcel tracking](https://www.shipengine.com/docs/tracking/) events, notification of the completion of a [batch operation](https://www.shipengine.com/docs/labels/bulk/),  or new [salses orders](https://www.shipengine.com/docs/orders/).


Learn how to setup webhooks and start listening to ShipEngine events.
<https://www.shipengine.com/docs/tracking/webhooks/>
### Available Operations

* [createWebhook](#createwebhook) - Create a Webhook
* [deleteWebhook](#deletewebhook) - Delete Webhook By ID
* [getWebhookById](#getwebhookbyid) - Get Webhook By ID
* [listWebhooks](#listwebhooks) - List Webhooks
* [updateWebhook](#updatewebhook) - Update a Webhook

## createWebhook

Create a webook for specific events in the environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEventEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebhookRequestBody();
    $request->event = WebhookEventEnum::SALES_ORDERS_IMPORTED;
    $request->url = 'http://api.shipengine.com/v1/labels/se-28529731';

    $response = $sdk->webhooks->createWebhook($request);

    if ($response->createWebhookResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhook

Delete a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhookRequest();
    $request->webhookId = 'se-28529731';

    $response = $sdk->webhooks->deleteWebhook($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhookById

Retrieve individual webhook by an ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhookByIdRequest();
    $request->webhookId = 'se-28529731';

    $response = $sdk->webhooks->getWebhookById($request);

    if ($response->getWebhookByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWebhooks

List all webhooks currently enabled for the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->webhooks->listWebhooks();

    if ($response->listWebhooksResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWebhook

Update the webhook url property

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWebhookRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWebhookRequest();
    $request->updateWebhookRequestBody = new UpdateWebhookRequestBody();
    $request->updateWebhookRequestBody->url = 'http://api.shipengine.com/v1/labels/se-28529731';
    $request->webhookId = 'se-28529731';

    $response = $sdk->webhooks->updateWebhook($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
