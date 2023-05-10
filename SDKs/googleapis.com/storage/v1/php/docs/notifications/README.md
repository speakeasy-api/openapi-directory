# notifications

### Available Operations

* [storageNotificationsDelete](#storagenotificationsdelete) - Permanently deletes a notification subscription.
* [storageNotificationsGet](#storagenotificationsget) - View a notification configuration.
* [storageNotificationsInsert](#storagenotificationsinsert) - Creates a notification subscription for a given bucket.
* [storageNotificationsList](#storagenotificationslist) - Retrieves a list of notification subscriptions for a given bucket.

## storageNotificationsDelete

Permanently deletes a notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageNotificationsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'minima';
    $request->fields = 'veritatis';
    $request->key = 'consectetur';
    $request->notification = 'adipisci';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'accusantium';
    $request->userIp = 'rem';
    $request->userProject = 'aut';

    $requestSecurity = new StorageNotificationsDeleteSecurity();
    $requestSecurity->option1 = new StorageNotificationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notifications->storageNotificationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageNotificationsGet

View a notification configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsGetSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageNotificationsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'laudantium';
    $request->fields = 'eum';
    $request->key = 'mollitia';
    $request->notification = 'ab';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'voluptatem';
    $request->userIp = 'dolor';
    $request->userProject = 'occaecati';

    $requestSecurity = new StorageNotificationsGetSecurity();
    $requestSecurity->option1 = new StorageNotificationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notifications->storageNotificationsGet($request, $requestSecurity);

    if ($response->notification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageNotificationsInsert

Creates a notification subscription for a given bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageNotificationsInsertRequest();
    $request->notification = new Notification();
    $request->notification->customAttributes = [
        'impedit' => 'explicabo',
        'voluptas' => 'aut',
    ];
    $request->notification->etag = 'dignissimos';
    $request->notification->eventTypes = [
        'maiores',
    ];
    $request->notification->id = '93f5f064-2dac-47af-915c-c413aa63aae8';
    $request->notification->kind = 'fugiat';
    $request->notification->objectNamePrefix = 'vel';
    $request->notification->payloadFormat = 'ducimus';
    $request->notification->selfLink = 'quos';
    $request->notification->topic = 'vel';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'labore';
    $request->fields = 'possimus';
    $request->key = 'facilis';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'in';
    $request->userIp = 'corporis';
    $request->userProject = 'reiciendis';

    $requestSecurity = new StorageNotificationsInsertSecurity();
    $requestSecurity->option1 = new StorageNotificationsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notifications->storageNotificationsInsert($request, $requestSecurity);

    if ($response->notification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageNotificationsList

Retrieves a list of notification subscriptions for a given bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageNotificationsListSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageNotificationsListRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'assumenda';
    $request->fields = 'nemo';
    $request->key = 'recusandae';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'cum';
    $request->userIp = 'consectetur';
    $request->userProject = 'in';

    $requestSecurity = new StorageNotificationsListSecurity();
    $requestSecurity->option1 = new StorageNotificationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notifications->storageNotificationsList($request, $requestSecurity);

    if ($response->notifications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
