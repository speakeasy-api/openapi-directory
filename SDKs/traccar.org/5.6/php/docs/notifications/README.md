# notifications

## Overview

User notifications management

### Available Operations

* [deleteNotificationsId](#deletenotificationsid) - Delete a Notification
* [getNotifications](#getnotifications) - Fetch a list of Notifications
* [getNotificationsTypes](#getnotificationstypes) - Fetch a list of available Notification types
* [postNotifications](#postnotifications) - Create a Notification
* [postNotificationsTest](#postnotificationstest) - Send test notification to current user via Email and SMS
* [putNotificationsId](#putnotificationsid) - Update a Notification

## deleteNotificationsId

Delete a Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotificationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNotificationsIdRequest();
    $request->id = 615560;

    $response = $sdk->notifications->deleteNotificationsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNotifications

Without params, it returns a list of Notifications the user has access to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNotificationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotificationsRequest();
    $request->all = false;
    $request->deviceId = 166847;
    $request->groupId = 123820;
    $request->refresh = false;
    $request->userId = 779051;

    $response = $sdk->notifications->getNotifications($request);

    if ($response->notifications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNotificationsTypes

Fetch a list of available Notification types

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
    $response = $sdk->notifications->getNotificationsTypes();

    if ($response->notificationTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNotifications

Create a Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Notification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Notification();
    $request->always = false;
    $request->attributes = [
        'pariatur' => 'maxime',
        'ea' => 'excepturi',
        'odit' => 'ea',
        'accusantium' => 'ab',
    ];
    $request->calendarId = 982575;
    $request->id = 697429;
    $request->mail = false;
    $request->sms = false;
    $request->type = 'ipsam';
    $request->web = false;

    $response = $sdk->notifications->postNotifications($request);

    if ($response->notification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNotificationsTest

Send test notification to current user via Email and SMS

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
    $response = $sdk->notifications->postNotificationsTest();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putNotificationsId

Update a Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutNotificationsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Notification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutNotificationsIdRequest();
    $request->notification = new Notification();
    $request->notification->always = false;
    $request->notification->attributes = [
        'autem' => 'nam',
        'eaque' => 'pariatur',
    ];
    $request->notification->calendarId = 365496;
    $request->notification->id = 975522;
    $request->notification->mail = false;
    $request->notification->sms = false;
    $request->notification->type = 'perferendis';
    $request->notification->web = false;
    $request->id = 855804;

    $response = $sdk->notifications->putNotificationsId($request);

    if ($response->notification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
