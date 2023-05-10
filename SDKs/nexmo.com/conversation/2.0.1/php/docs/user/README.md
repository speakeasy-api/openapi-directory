# user

## Overview

The concept of a user exists in Vonage APIs, you can associate one with a user in your own application if you choose. A user can have multiple memberships to conversations and can communicate with other users through various different mediums.

### Available Operations

* [createUser](#createuser) - Create a user
* [deleteUser](#deleteuser) - Delete a user
* [getUser](#getuser) - Retrieve a user
* [~~getUsers~~](#getusers) - List users :warning: **Deprecated**
* [getuserConversations](#getuserconversations) - List user conversations
* [updateUser](#updateuser) - Update a user

## createUser

Note: Users must be created with an admin JWT.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserRequestBody();
    $request->displayName = 'My User Name';
    $request->imageUrl = 'https://example.com/image.png';
    $request->name = 'my_user_name';

    $response = $sdk->user->createUser($request);

    if ($response->createUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUser

Delete a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->userId = 'porro';

    $response = $sdk->user->deleteUser($request);

    if ($response->deleteUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUser

Retrieve a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserRequest();
    $request->userId = 'dolorum';

    $response = $sdk->user->getUser($request);

    if ($response->getUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getUsers~~

This endpoint is **DEPRECATED**. Please use [/v0.2/users](/api/conversation.v2#get-users).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    $response = $sdk->user->getUsers();

    if ($response->getUsers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getuserConversations

List user conversations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetuserConversationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetuserConversationsRequest();
    $request->userId = 'dicta';

    $response = $sdk->user->getuserConversations($request);

    if ($response->getuserConversations200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUser

Update a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\ChannelLegIds;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserRequest();
    $request->requestBody = new UpdateUserRequestBody();
    $request->requestBody->channels = new Channel();
    $request->requestBody->channels->from = new ChannelFrom4();
    $request->requestBody->channels->from->contentType = ChannelFrom4ContentTypeEnum::AUDIO_L16_RATE_EQUAL16000;
    $request->requestBody->channels->from->headers = new ChannelFrom4Headers();
    $request->requestBody->channels->from->headers->customerId = 'ABC123';
    $request->requestBody->channels->from->type = 'websocket';
    $request->requestBody->channels->from->uri = 'wss://example.com/socket';
    $request->requestBody->channels->legId = 'a595959595959595995';
    $request->requestBody->channels->legIds = [
        new ChannelLegIds(),
        new ChannelLegIds(),
        new ChannelLegIds(),
    ];
    $request->requestBody->channels->to = new Two();
    $request->requestBody->channels->to->type = 'sip';
    $request->requestBody->channels->to->uri = 'sip:rebekka@sip.example.com';
    $request->requestBody->channels->type = ChannelTypeEnum::PHONE;
    $request->requestBody->displayName = 'My User Name';
    $request->requestBody->imageUrl = 'https://example.com/image.png';
    $request->requestBody->name = 'my_user_name';
    $request->userId = 'fugit';

    $response = $sdk->user->updateUser($request);

    if ($response->updateUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
