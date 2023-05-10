# subscriptions

## Overview

Operations to manage event subscriptions.

### Available Operations

* [deleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchive](#deletewebhooksv3appidsubscriptionssubscriptionidarchive)
* [getWebhooksV3AppIdSubscriptionsSubscriptionIdGetById](#getwebhooksv3appidsubscriptionssubscriptionidgetbyid)
* [getWebhooksV3AppIdSubscriptionsGetAll](#getwebhooksv3appidsubscriptionsgetall)
* [patchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdate](#patchwebhooksv3appidsubscriptionssubscriptionidupdate)
* [postWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatch](#postwebhooksv3appidsubscriptionsbatchupdateupdatebatch)
* [postWebhooksV3AppIdSubscriptionsCreate](#postwebhooksv3appidsubscriptionscreate)

## deleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchive

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest();
    $request->appId = 847252;
    $request->subscriptionId = 423655;

    $requestSecurity = new DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->subscriptions->deleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchive($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooksV3AppIdSubscriptionsSubscriptionIdGetById

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest();
    $request->appId = 623564;
    $request->subscriptionId = 645894;

    $requestSecurity = new GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->subscriptions->getWebhooksV3AppIdSubscriptionsSubscriptionIdGetById($request, $requestSecurity);

    if ($response->subscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooksV3AppIdSubscriptionsGetAll

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksV3AppIdSubscriptionsGetAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksV3AppIdSubscriptionsGetAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksV3AppIdSubscriptionsGetAllRequest();
    $request->appId = 384382;

    $requestSecurity = new GetWebhooksV3AppIdSubscriptionsGetAllSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->subscriptions->getWebhooksV3AppIdSubscriptionsGetAll($request, $requestSecurity);

    if ($response->subscriptionListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest();
    $request->subscriptionPatchRequest = new SubscriptionPatchRequest();
    $request->subscriptionPatchRequest->active = false;
    $request->appId = 437587;
    $request->subscriptionId = 297534;

    $requestSecurity = new PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->subscriptions->patchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdate($request, $requestSecurity);

    if ($response->subscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchInputSubscriptionBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest();
    $request->batchInputSubscriptionBatchUpdateRequest = new BatchInputSubscriptionBatchUpdateRequest();
    $request->batchInputSubscriptionBatchUpdateRequest->inputs = [
        new SubscriptionBatchUpdateRequest(),
        new SubscriptionBatchUpdateRequest(),
        new SubscriptionBatchUpdateRequest(),
        new SubscriptionBatchUpdateRequest(),
    ];
    $request->appId = 56713;

    $requestSecurity = new PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->subscriptions->postWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatch($request, $requestSecurity);

    if ($response->batchResponseSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooksV3AppIdSubscriptionsCreate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksV3AppIdSubscriptionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionCreateRequestEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksV3AppIdSubscriptionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhooksV3AppIdSubscriptionsCreateRequest();
    $request->subscriptionCreateRequest = new SubscriptionCreateRequest();
    $request->subscriptionCreateRequest->active = false;
    $request->subscriptionCreateRequest->eventType = SubscriptionCreateRequestEventTypeEnum::TICKET_ASSOCIATION_CHANGE;
    $request->subscriptionCreateRequest->propertyName = 'tempora';
    $request->appId = 383441;

    $requestSecurity = new PostWebhooksV3AppIdSubscriptionsCreateSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->subscriptions->postWebhooksV3AppIdSubscriptionsCreate($request, $requestSecurity);

    if ($response->subscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
