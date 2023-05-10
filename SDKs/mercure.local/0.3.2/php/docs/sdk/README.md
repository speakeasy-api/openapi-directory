# SDK

## Overview

[Mercure](https://mercure.rocks) is a protocol allowing to push data updates to web browsers and other HTTP clients in a convenient, fast, reliable and battery-efficient way.

The Mercure protocol specification
<https://mercure.rocks/spec>
### Available Operations

* [getWellKnownMercure](#getwellknownmercure) - Subscribe to updates
* [getWellKnownMercureSubscriptions](#getwellknownmercuresubscriptions) - Active subscriptions
* [getWellKnownMercureSubscriptionsTopic](#getwellknownmercuresubscriptionstopic) - Active subscriptions for the given topic
* [getWellKnownMercureSubscriptionsTopicSubscriber](#getwellknownmercuresubscriptionstopicsubscriber) - Active subscription for the given topic and subscriber
* [postWellKnownMercure](#postwellknownmercure) - Publish an update

## getWellKnownMercure

Subscribe to updates

Subscription specification
<https://mercure.rocks/spec#subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWellKnownMercureRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWellKnownMercureRequest();
    $request->lastEventID = 'corrupti';
    $request->lastEventIDQueryParameter = 'illum';
    $request->topic = [
        'error',
        'deserunt',
    ];

    $response = $sdk->sdk->getWellKnownMercure($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWellKnownMercureSubscriptions

Active subscriptions

Subscription API
<https://mercure.rocks/spec#subscription-api>

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
    $response = $sdk->sdk->getWellKnownMercureSubscriptions();

    if ($response->subscriptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWellKnownMercureSubscriptionsTopic

Active subscriptions for the given topic

Subscription API
<https://mercure.rocks/spec#subscription-api>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWellKnownMercureSubscriptionsTopicRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWellKnownMercureSubscriptionsTopicRequest();
    $request->topic = 'suscipit';

    $response = $sdk->sdk->getWellKnownMercureSubscriptionsTopic($request);

    if ($response->subscriptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWellKnownMercureSubscriptionsTopicSubscriber

Active subscription for the given topic and subscriber

Subscription API
<https://mercure.rocks/spec#active-subscriptions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWellKnownMercureSubscriptionsTopicSubscriberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWellKnownMercureSubscriptionsTopicSubscriberRequest();
    $request->subscriber = 'iure';
    $request->topic = 'magnam';

    $response = $sdk->sdk->getWellKnownMercureSubscriptionsTopicSubscriber($request);

    if ($response->subscriptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWellKnownMercure

Publish an update

Publishing specification
<https://mercure.rocks/spec#publication>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostWellKnownMercureRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWellKnownMercureRequestBody();
    $request->data = 'debitis';
    $request->id = '0f467cc8-796e-4d15-9a05-dfc2ddf7cc78';
    $request->private = false;
    $request->retry = 780529;
    $request->topic = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->type = 'occaecati';

    $response = $sdk->sdk->postWellKnownMercure($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
