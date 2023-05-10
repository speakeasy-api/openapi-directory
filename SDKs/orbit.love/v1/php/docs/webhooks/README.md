# webhooks

### Available Operations

* [deleteWorkspaceSlugWebhooksId](#deleteworkspaceslugwebhooksid) - Delete a webhook
* [getWorkspaceSlugWebhooks](#getworkspaceslugwebhooks) - List webhooks in a workspace
* [getWorkspaceSlugWebhooksId](#getworkspaceslugwebhooksid) - Get a webhook
* [postWorkspaceSlugWebhooks](#postworkspaceslugwebhooks) - Create a webhook
* [putWorkspaceSlugWebhooksId](#putworkspaceslugwebhooksid) - Update a webhook

## deleteWorkspaceSlugWebhooksId

Delete a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugWebhooksIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugWebhooksIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceSlugWebhooksIdRequest();
    $request->id = '5a73429c-db1a-4842-abb6-79d2322715bf';
    $request->workspaceSlug = 'voluptatem';

    $requestSecurity = new DeleteWorkspaceSlugWebhooksIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->webhooks->deleteWorkspaceSlugWebhooksId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugWebhooks

List webhooks in a workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugWebhooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugWebhooksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugWebhooksRequest();
    $request->workspaceSlug = 'cumque';

    $requestSecurity = new GetWorkspaceSlugWebhooksSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->webhooks->getWorkspaceSlugWebhooks($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugWebhooksId

Get a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugWebhooksIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugWebhooksIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugWebhooksIdRequest();
    $request->id = 'bb1e31b8-b90f-4344-ba11-08e0adcf4b92';
    $request->workspaceSlug = 'quae';

    $requestSecurity = new GetWorkspaceSlugWebhooksIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->webhooks->getWorkspaceSlugWebhooksId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWorkspaceSlugWebhooks

Create a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugWebhooksRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookSubscription;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugWebhooksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWorkspaceSlugWebhooksRequest();
    $request->webhookSubscription = new WebhookSubscription();
    $request->webhookSubscription->activityTags = [
        'odio',
        'occaecati',
        'voluptatibus',
    ];
    $request->webhookSubscription->activityTypes = [
        'vero',
        'omnis',
        'quis',
        'ipsum',
    ];
    $request->webhookSubscription->eventType = 'delectus';
    $request->webhookSubscription->memberTags = [
        'consectetur',
        'vero',
    ];
    $request->webhookSubscription->name = 'Julio Weissnat';
    $request->webhookSubscription->secret = 'odio';
    $request->webhookSubscription->url = 'similique';
    $request->workspaceSlug = 'facilis';

    $requestSecurity = new PostWorkspaceSlugWebhooksSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->webhooks->postWorkspaceSlugWebhooks($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkspaceSlugWebhooksId

Update a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspaceSlugWebhooksIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookSubscription;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspaceSlugWebhooksIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkspaceSlugWebhooksIdRequest();
    $request->id = 'd74dd39c-0f5d-42cf-b7c7-0a45626d4368';
    $request->webhookSubscription = new WebhookSubscription();
    $request->webhookSubscription->activityTags = [
        'dolor',
    ];
    $request->webhookSubscription->activityTypes = [
        'quasi',
        'ex',
        'nulla',
        'excepturi',
    ];
    $request->webhookSubscription->eventType = 'voluptatibus';
    $request->webhookSubscription->memberTags = [
        'sapiente',
        'quisquam',
    ];
    $request->webhookSubscription->name = 'Nathaniel Ryan';
    $request->webhookSubscription->secret = 'aliquid';
    $request->webhookSubscription->url = 'inventore';
    $request->workspaceSlug = 'magnam';

    $requestSecurity = new PutWorkspaceSlugWebhooksIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->webhooks->putWorkspaceSlugWebhooksId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
