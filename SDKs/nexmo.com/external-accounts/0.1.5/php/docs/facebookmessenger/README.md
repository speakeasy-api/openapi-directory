# facebookMessenger

## Overview

Managing your [Facebook Messenger](https://developer.nexmo.com/messages/concepts/facebook) account

### Available Operations

* [createMessengerAccount](#createmessengeraccount) - Create a Messenger account
* [deleteMessengerAccount](#deletemessengeraccount) - Delete a Messenger account
* [getMessengerAccount](#getmessengeraccount) - Retrieve a Messenger account
* [updateMessengerAccount](#updatemessengeraccount) - Update a Messenger account

## createMessengerAccount

Create a Messenger account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessengerAccountRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessengerAccountSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMessengerAccountRequestBody();
    $request->accessToken = 'myAccessToken';
    $request->applications = [
        'vel',
        'error',
        'deserunt',
        'suscipit',
    ];
    $request->externalId = '12345678';
    $request->name = 'optionalName';

    $requestSecurity = new CreateMessengerAccountSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->facebookMessenger->createMessengerAccount($request, $requestSecurity);

    if ($response->messengerAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMessengerAccount

Delete a Messenger account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessengerAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessengerAccountSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMessengerAccountRequest();
    $request->externalId = 'iure';

    $requestSecurity = new DeleteMessengerAccountSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->facebookMessenger->deleteMessengerAccount($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessengerAccount

Retrieve a Messenger account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMessengerAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMessengerAccountSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessengerAccountRequest();
    $request->externalId = 'magnam';

    $requestSecurity = new GetMessengerAccountSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->facebookMessenger->getMessengerAccount($request, $requestSecurity);

    if ($response->messengerAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMessengerAccount

Update a Messenger account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessengerAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessengerAccountRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessengerAccountSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMessengerAccountRequest();
    $request->requestBody = new UpdateMessengerAccountRequestBody();
    $request->requestBody->accessToken = 'updatedAccessToken';
    $request->requestBody->applications = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->requestBody->name = 'newName';
    $request->externalId = 'molestiae';

    $requestSecurity = new UpdateMessengerAccountSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->facebookMessenger->updateMessengerAccount($request, $requestSecurity);

    if ($response->updateMessengerAccount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
