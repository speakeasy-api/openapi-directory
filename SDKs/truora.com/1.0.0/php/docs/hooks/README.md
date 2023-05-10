# hooks

## Overview

Hooks allows configuring Truora Platform to notify via requests to your service (or another third-party service) whenever an event occurs in Truora Platform. They are the easiest way to get a warning when something happens in another system, in this case, Truora platform. This service allows sending notifications via requests to your service or another third-party service whenever certain events occur.

### Available Operations

* [createHook](#createhook) - Creates a hook subscription
* [deletHook](#delethook) - Deletes hook
* [listHook](#listhook) - Lists all hooks
* [updateHook](#updatehook) - Updates hook

## createHook

Creates a hook subscription to notify events in Truora plataform. Subscriptions broadcast data as events occur and additional subscription instances are not required in order to refresh the information. Events are received in an array as a JWT and are decoded using the signing key returned by this endpoint. Their structure is as follows:

```
{
    "events": [
        {
            "event_action": "created",
            "event_type": "check",
            "id": "HKEdd28c569cf5eb74e45f0f4c092096e62c1c95ba2",
            "object": {
                "check_id": "CHK9c39003424c521aec8566ce59e1ddc86",
                "country": "CO",
                "creation_date": "2020-04-01T23:00:30.581232281Z",
                "homonym_score": 0,
                "id_score": 0,
                "national_id": "1151959906",
                "previous_check": "CHK4ec814fecd147eaae41027081d7d5caf",
                "score": -1,
                "status": "not_started",
                "type": "person",
                "update_date": "2020-04-01T23:00:30.680937413Z"
            },
            "timestamp": "2020-04-01T23:00:30Z",
            "version": "1.0"
        }
    ],
    "iat": 1585782031,
    "iss": "Truora"
}
```

Keep in mind that the object attribute varies depending on the event_type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateHookInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateHookInputEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateHookInputStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateHookInputSubscriberLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateHookInputSubscriberTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateHookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHookInput();
    $request->actions = [
        'molestiae',
        'velit',
    ];
    $request->eventType = CreateHookInputEventTypeEnum::CHECK;
    $request->status = CreateHookInputStatusEnum::ENABLED;
    $request->subscriberAddress = 'quis';
    $request->subscriberLanguage = CreateHookInputSubscriberLanguageEnum::CS;
    $request->subscriberName = 'laborum';
    $request->subscriberType = CreateHookInputSubscriberTypeEnum::EMAIL;
    $request->subscriberUrl = 'enim';

    $requestSecurity = new CreateHookSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->hooks->createHook($request, $requestSecurity);

    if ($response->hook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletHook

Deletes hook configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletHookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletHookRequest();
    $request->hookId = 'odit';

    $requestSecurity = new DeletHookSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->hooks->deletHook($request, $requestSecurity);

    if ($response->deletHook200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHook

Lists all the configured hooks in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListHookSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->hooks->listHook($requestSecurity);

    if ($response->hookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHook

Updates a hook configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHookRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHookInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateHookInputEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateHookInputStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateHookInputSubscriberLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateHookInputSubscriberTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHookRequest();
    $request->createHookInput = new CreateHookInput();
    $request->createHookInput->actions = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->createHookInput->eventType = CreateHookInputEventTypeEnum::CONTINUOUS_CHECK;
    $request->createHookInput->status = CreateHookInputStatusEnum::ENABLED;
    $request->createHookInput->subscriberAddress = 'quasi';
    $request->createHookInput->subscriberLanguage = CreateHookInputSubscriberLanguageEnum::NL;
    $request->createHookInput->subscriberName = 'temporibus';
    $request->createHookInput->subscriberType = CreateHookInputSubscriberTypeEnum::EMAIL;
    $request->createHookInput->subscriberUrl = 'quasi';
    $request->hookId = 'reiciendis';

    $requestSecurity = new UpdateHookSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->hooks->updateHook($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
