# webhooks

## Overview

Webhooks allow your own system to be automatically notified upon certin events, such as a new message received from one of your contacts or a status change notification for your messages

### Available Operations

* [webhooksFetchAll](#webhooksfetchall) - Fetch active webhooks
* [webhooksSubscribe](#webhookssubscribe) - Subscribe to message events
* [webhooksUnsubscribe](#webhooksunsubscribe) - Unsubscribe to message events

## webhooksFetchAll

When messages are acknowledge by carriers, a notification is sent to the specified URL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksFetchAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksFetchAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksFetchAllRequest();
    $request->accountId = 'quibusdam';

    $requestSecurity = new WebhooksFetchAllSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webhooks->webhooksFetchAll($request, $requestSecurity);

    if ($response->webhooksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhooksSubscribe

When messages are acknowledge by carriers, a notification is sent to the specified URL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksSubscribeRequest;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksSubscribeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksSubscribeRequestBodyEventTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksSubscribeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksSubscribeRequest();
    $request->requestBody = new WebhooksSubscribeRequestBody();
    $request->requestBody->eventTypes = [
        WebhooksSubscribeRequestBodyEventTypesEnum::CONTACT_REMOVED,
        WebhooksSubscribeRequestBodyEventTypesEnum::CONTACT_REMOVED,
    ];
    $request->requestBody->url = 'https://myserver.com/send/callback/here';
    $request->accountId = 'aliquid';

    $requestSecurity = new WebhooksSubscribeSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webhooks->webhooksSubscribe($request, $requestSecurity);

    if ($response->webhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhooksUnsubscribe

Delete subscription for receiving notifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksUnsubscribeRequest;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksUnsubscribeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksUnsubscribeRequest();
    $request->accountId = 'cupiditate';
    $request->url = 'quos';

    $requestSecurity = new WebhooksUnsubscribeSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webhooks->webhooksUnsubscribe($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
