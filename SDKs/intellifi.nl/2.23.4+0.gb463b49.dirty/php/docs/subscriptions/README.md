# subscriptions

## Overview

The `subscriptions` resource contains rules to store and/or deliver events from the Brain event system.

See also the `events` resource.


<https://intellifi.zendesk.com/hc/en-us/sections/360001588534>
### Available Operations

* [addSubscription](#addsubscription) - Create subscription
* [deleteSubscription](#deletesubscription) - Delete subscription
* [getEventsForSubscriptionById](#geteventsforsubscriptionbyid) - Get subscription events
* [getSubscriptionById](#getsubscriptionbyid) - Get subscription
* [getSubscriptions](#getsubscriptions) - Get all subscriptions
* [updateSubscription](#updatesubscription) - Update existing subscription

## addSubscription

Create subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscriptionInput();
    $request->custom = 'quae';
    $request->databaseHoldTimeH = 2;
    $request->description = 'Item events';
    $request->populateEvents = false;
    $request->targetRetry = false;
    $request->targetUrl = 'quae';
    $request->topicFilter = 'items/#';
    $request->verifyTargetCertificate = false;

    $response = $sdk->subscriptions->addSubscription($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubscription

Delete subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriptionRequest();
    $request->id = '435e139d-bc22-459b-9abd-a8c070e1084c';

    $response = $sdk->subscriptions->deleteSubscription($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventsForSubscriptionById

Get subscription events

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsForSubscriptionByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\EventTopicActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTopicResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsForSubscriptionByIdRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T10:34:18.161Z');
    $request->afterId = 'autem';
    $request->before = 'esse';
    $request->beforeId = 'dolores';
    $request->from = 'assumenda';
    $request->fromId = 'beatae';
    $request->idPathParameter = 'est';
    $request->idQueryParameter = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->limit = 817339;
    $request->populate = 'corrupti';
    $request->resultsOnly = false;
    $request->select = 'molestiae';
    $request->sort = 'provident';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeEvent = '2018-08-30T09:51:59.737Z';
    $request->timeExpire = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 8822.84;
    $request->topicAction = EventTopicActionEnum::CREATED;
    $request->topicResource = '5b7d6cbd7503c445552a1664';
    $request->topicResourceType = EventTopicResourceTypeEnum::ITEMS;
    $request->until = 'necessitatibus';
    $request->untilId = 'tempore';

    $response = $sdk->subscriptions->getEventsForSubscriptionById($request);

    if ($response->getEventsForSubscriptionById200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionById

Get subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionByIdRequest();
    $request->id = '9665b85e-fbd0-42ba-a0be-2d782259e3ea';

    $response = $sdk->subscriptions->getSubscriptionById($request);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptions

Get all subscriptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionsRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-22T18:47:14.845Z');
    $request->afterId = 'quis';
    $request->before = 'beatae';
    $request->beforeId = 'unde';
    $request->databaseHoldTimeH = 476946;
    $request->description = 'delectus';
    $request->from = 'cupiditate';
    $request->fromId = 'fugit';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->limit = 253625;
    $request->populate = 'numquam';
    $request->populateEvents = false;
    $request->resultsOnly = false;
    $request->select = 'nesciunt';
    $request->sort = 'at';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 6378.56;
    $request->topicFilter = 'dignissimos';
    $request->until = 'optio';
    $request->untilId = 'necessitatibus';
    $request->verifyTargetCertificate = false;

    $response = $sdk->subscriptions->getSubscriptions($request);

    if ($response->getSubscriptions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscription

Update existing subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionRequest();
    $request->subscriptionInput = new SubscriptionInput();
    $request->subscriptionInput->custom = 'corporis';
    $request->subscriptionInput->databaseHoldTimeH = 2;
    $request->subscriptionInput->description = 'Item events';
    $request->subscriptionInput->populateEvents = false;
    $request->subscriptionInput->targetRetry = false;
    $request->subscriptionInput->targetUrl = 'qui';
    $request->subscriptionInput->topicFilter = 'items/#';
    $request->subscriptionInput->verifyTargetCertificate = false;
    $request->id = 'b895c537-c645-44ef-b0b3-4896c3ca5acf';

    $response = $sdk->subscriptions->updateSubscription($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
