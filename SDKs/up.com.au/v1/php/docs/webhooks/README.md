# webhooks

## Overview

Webhooks provide a mechanism for a configured URL to receive
events when transaction activity occurs on Up. You can think of
webhooks as being like push notifications for your server-side
application.


### Available Operations

* [deleteWebhooksId](#deletewebhooksid) - Delete webhook
* [getWebhooks](#getwebhooks) - List webhooks
* [getWebhooksId](#getwebhooksid) - Retrieve webhook
* [getWebhooksWebhookIdLogs](#getwebhookswebhookidlogs) - List webhook logs
* [postWebhooks](#postwebhooks) - Create webhook
* [postWebhooksWebhookIdPing](#postwebhookswebhookidping) - Ping webhook

## deleteWebhooksId

Delete a specific webhook by providing its unique identifier. Once
deleted, webhook events will no longer be sent to the configured URL.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksIdRequest();
    $request->id = '5471b5e6-e13b-499d-888e-1e91e450ad2a';

    $response = $sdk->webhooks->deleteWebhooksId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooks

Retrieve a list of configured webhooks. The returned list is
[paginated](#pagination) and can be scrolled by following the `next`
and `prev` links where present. Results are ordered oldest first to
newest last.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksRequest();
    $request->pageSize = 716327;

    $response = $sdk->webhooks->getWebhooks($request);

    if ($response->listWebhooksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooksId

Retrieve a specific webhook by providing its unique identifier.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksIdRequest();
    $request->id = 'd4426980-2d50-42a9-8bb4-f63c969e9a3e';

    $response = $sdk->webhooks->getWebhooksId($request);

    if ($response->getWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooksWebhookIdLogs

Retrieve a list of delivery logs for a webhook by providing its unique
identifier. This is useful for analysis and debugging purposes. The
returned list is [paginated](#pagination) and can be scrolled by
following the `next` and `prev` links where present. Results are ordered
newest first to oldest last. Logs may be automatically purged after a
period of time.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksWebhookIdLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksWebhookIdLogsRequest();
    $request->pageSize = 952749;
    $request->webhookId = 'dolorum';

    $response = $sdk->webhooks->getWebhooksWebhookIdLogs($request);

    if ($response->listWebhookDeliveryLogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooks

Create a new webhook with a given URL. The URL will receive webhook
events as JSON-encoded `POST` requests. The URL must respond with a HTTP
`200` status on success.

There is currently a limit of 10 webhooks at any given time. Once this
limit is reached, existing webhooks will need to be deleted before new
webhooks can be created.

Event delivery is retried with exponential backoff if the URL is
unreachable or it does not respond with a `200` status. The response
includes a `secretKey` attribute, which is used to sign requests sent to
the webhook URL. It will not be returned from any other endpoints within
the Up API. If the `secretKey` is lost, simply create a new webhook with
the same URL, capture its `secretKey` and then delete the original
webhook. See [Handling webhook events](#callback_post_webhookURL) for
details on how to process webhook events.

It is probably a good idea to test the webhook by
[sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
it.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookInputResource;
use \OpenAPI\OpenAPI\Models\Shared\WebhookInputResourceAttributes;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebhookRequest();
    $request->data = new WebhookInputResource();
    $request->data->attributes = new WebhookInputResourceAttributes();
    $request->data->attributes->description = 'in';
    $request->data->attributes->url = 'http://thankful-wheat.net';

    $response = $sdk->webhooks->postWebhooks($request);

    if ($response->createWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooksWebhookIdPing

Send a `PING` event to a webhook by providing its unique identifier.
This is useful for testing and debugging purposes. The event is delivered
asynchronously and its data is returned in the response to this request.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksWebhookIdPingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhooksWebhookIdPingRequest();
    $request->webhookId = 'dicta';

    $response = $sdk->webhooks->postWebhooksWebhookIdPing($request);

    if ($response->webhookEventCallback !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
