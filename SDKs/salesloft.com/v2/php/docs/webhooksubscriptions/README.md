# webhookSubscriptions

## Overview

Webhook Subscriptions

### Available Operations

* [deleteV2WebhookSubscriptionsId](#deletev2webhooksubscriptionsid) - Delete a webhook subscription
* [getV2WebhookSubscriptions](#getv2webhooksubscriptions) - List webhook subscriptions
* [getV2WebhookSubscriptionsId](#getv2webhooksubscriptionsid) - Fetch a webhook subscription
* [postV2WebhookSubscriptions](#postv2webhooksubscriptions) - Create a webhook subscription
* [putV2WebhookSubscriptionsId](#putv2webhooksubscriptionsid) - Update a webhook subscription

## deleteV2WebhookSubscriptionsId

Deletes a webhook subscription. This operation is not reversible without contacting support. This operation can be called multiple times successfully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2WebhookSubscriptionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2WebhookSubscriptionsIdRequest();
    $request->id = 506966;

    $response = $sdk->webhookSubscriptions->deleteV2WebhookSubscriptionsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2WebhookSubscriptions

Fetches all of the customer's webhook subscriptions for your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2WebhookSubscriptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2WebhookSubscriptionsRequest();
    $request->enabled = false;

    $response = $sdk->webhookSubscriptions->getV2WebhookSubscriptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2WebhookSubscriptionsId

Fetches a webhook subscription, by ID only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2WebhookSubscriptionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2WebhookSubscriptionsIdRequest();
    $request->id = 907899;

    $response = $sdk->webhookSubscriptions->getV2WebhookSubscriptionsId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2WebhookSubscriptions

Creates a webhook subscription. Visit the <a href="/webhooks.html" target="_blank" rel="noopener noreferrer">webhooks page</a> for additional details and a list of available webhooks.
Request must be made with a valid Oauth token or API key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2WebhookSubscriptionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2WebhookSubscriptionsRequestBody();
    $request->callbackToken = 'dolor';
    $request->callbackUrl = 'expedita';
    $request->eventType = 'libero';

    $response = $sdk->webhookSubscriptions->postV2WebhookSubscriptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2WebhookSubscriptionsId

Updates a webhook subscription.
Request must be made with a valid Oauth token or API key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2WebhookSubscriptionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2WebhookSubscriptionsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2WebhookSubscriptionsIdRequest();
    $request->requestBody = new PutV2WebhookSubscriptionsIdRequestBody();
    $request->requestBody->enabled = false;
    $request->id = 615277;

    $response = $sdk->webhookSubscriptions->putV2WebhookSubscriptionsId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
