# subscriptions

### Available Operations

* [mirrorSubscriptionsDelete](#mirrorsubscriptionsdelete) - Deletes a subscription.
* [mirrorSubscriptionsInsert](#mirrorsubscriptionsinsert) - Creates a new subscription.
* [mirrorSubscriptionsList](#mirrorsubscriptionslist) - Retrieves a list of subscriptions for the authenticated user and service.
* [mirrorSubscriptionsUpdate](#mirrorsubscriptionsupdate) - Updates an existing subscription in place.

## mirrorSubscriptionsDelete

Deletes a subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorSubscriptionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorSubscriptionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorSubscriptionsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'fugiat';
    $request->id = '1ba77a89-ebf7-437a-a420-3ce5e6a95d8a';
    $request->key = 'alias';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->userIp = 'tempora';

    $requestSecurity = new MirrorSubscriptionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->mirrorSubscriptionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorSubscriptionsInsert

Creates a new subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorSubscriptionsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\UserAction;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorSubscriptionsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorSubscriptionsInsertRequest();
    $request->subscription = new Subscription();
    $request->subscription->callbackUrl = 'vel';
    $request->subscription->collection = 'quod';
    $request->subscription->id = 'e2af7a73-cf3b-4e45-bf87-0b326b5a7342';
    $request->subscription->kind = 'cupiditate';
    $request->subscription->notification = new Notification();
    $request->subscription->notification->collection = 'maxime';
    $request->subscription->notification->itemId = 'pariatur';
    $request->subscription->notification->operation = 'soluta';
    $request->subscription->notification->userActions = [
        new UserAction(),
    ];
    $request->subscription->notification->userToken = 'laborum';
    $request->subscription->notification->verifyToken = 'totam';
    $request->subscription->operation = [
        'aspernatur',
        'dolores',
    ];
    $request->subscription->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-04T17:36:39.068Z');
    $request->subscription->userToken = 'aliquid';
    $request->subscription->verifyToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'molestias';
    $request->key = 'temporibus';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->userIp = 'fugit';

    $requestSecurity = new MirrorSubscriptionsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->mirrorSubscriptionsInsert($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorSubscriptionsList

Retrieves a list of subscriptions for the authenticated user and service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorSubscriptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorSubscriptionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorSubscriptionsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'magni';
    $request->key = 'odio';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->userIp = 'nam';

    $requestSecurity = new MirrorSubscriptionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->mirrorSubscriptionsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mirrorSubscriptionsUpdate

Updates an existing subscription in place.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorSubscriptionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\UserAction;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorSubscriptionsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorSubscriptionsUpdateRequest();
    $request->subscription = new Subscription();
    $request->subscription->callbackUrl = 'hic';
    $request->subscription->collection = 'voluptatem';
    $request->subscription->id = 'cbb1e31b-8b90-4f34-83a1-108e0adcf4b9';
    $request->subscription->kind = 'qui';
    $request->subscription->notification = new Notification();
    $request->subscription->notification->collection = 'quae';
    $request->subscription->notification->itemId = 'laudantium';
    $request->subscription->notification->operation = 'odio';
    $request->subscription->notification->userActions = [
        new UserAction(),
        new UserAction(),
        new UserAction(),
    ];
    $request->subscription->notification->userToken = 'voluptatibus';
    $request->subscription->notification->verifyToken = 'quisquam';
    $request->subscription->operation = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->subscription->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T10:17:36.770Z');
    $request->subscription->userToken = 'vero';
    $request->subscription->verifyToken = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->fields = 'dignissimos';
    $request->id = 'fbc7abd7-4dd3-49c0-b5d2-cff7c70a4562';
    $request->key = 'vel';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->userIp = 'ratione';

    $requestSecurity = new MirrorSubscriptionsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->mirrorSubscriptionsUpdate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
