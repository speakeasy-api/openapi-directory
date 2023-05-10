# projectWebhooks

### Available Operations

* [deleteProjectWebhook](#deleteprojectwebhook) - Delete project webhooks
* [getProjectWebhooks](#getprojectwebhooks) - View project webhooks
* [postProjectWebhook](#postprojectwebhook) - Update project webhook
* [updateProjectWebhook](#updateprojectwebhook) - Update project webhook

## deleteProjectWebhook

Delete project webhooks. Projects currently support registering only 1 webhook. This endpoint deletes the previously registered webhook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectWebhookRequest();
    $request->id = 11427;

    $response = $sdk->projectWebhooks->deleteProjectWebhook($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectWebhooks

This endpoint returns Project entity which contains `callback_url` field for webhook URL. Currently projects can have only 1 webhook registered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectWebhooksRequest();
    $request->id = 533466;

    $response = $sdk->projectWebhooks->getProjectWebhooks($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjectWebhook

Update project webhook URL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\Webhook;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectWebhookRequest();
    $request->webhook = new Webhook();
    $request->webhook->callbackUrl = 'impedit';
    $request->id = 304582;

    $response = $sdk->projectWebhooks->postProjectWebhook($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectWebhook

Update project webhook URL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\Webhook;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectWebhookRequest();
    $request->webhook = new Webhook();
    $request->webhook->callbackUrl = 'fugit';
    $request->id = 882860;

    $response = $sdk->projectWebhooks->updateProjectWebhook($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
