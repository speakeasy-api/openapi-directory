# conversation

## Overview

A conversation is a shared core component that Vonage APIs rely on. Conversations happen over multiple mediums and and can have associated Users through Memberships.

### Available Operations

* [createConversation](#createconversation) - Create a conversation
* [deleteConversation](#deleteconversation) - Delete a conversation
* [~~listConversations~~](#listconversations) - List conversations :warning: **Deprecated**
* [recordConversation](#recordconversation) - Record a conversation
* [replaceConversation](#replaceconversation) - Update a conversation
* [retrieveConversation](#retrieveconversation) - Retrieve a conversation

## createConversation

Create a conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ConversationProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConversationRequestBody();
    $request->displayName = 'Customer Chat';
    $request->imageUrl = 'https://example.com/image.png';
    $request->name = 'customer_chat';
    $request->properties = new ConversationProperties();
    $request->properties->ttl = 60;

    $response = $sdk->conversation->createConversation($request);

    if ($response->createConversation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConversation

Delete a conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConversationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConversationRequest();
    $request->conversationId = 'corrupti';

    $response = $sdk->conversation->deleteConversation($request);

    if ($response->deleteConversation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listConversations~~

This endpoint is **DEPRECATED**. Please use [/v0.2/conversations](/api/conversation.v2#get-conversations).

List all conversations associated with your application. This endpoint required an admin JWT. To find all conversations for the currently logged in user, see [GET /users/:id/conversations](#getuserConversations)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConversationsRequest();
    $request->dateEnd = '2018-01-01 12:00:00';
    $request->dateStart = '2018-01-01 10:00:00';
    $request->order = OrderEnum::ASC_UPPER;
    $request->pageSize = 50;
    $request->recordIndex = 7151.9;

    $response = $sdk->conversation->listConversations($request);

    if ($response->listConversations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recordConversation

Record a conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RecordConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RecordConversationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecordConversationRequest();
    $request->requestBody = new RecordConversationRequestBody();
    $request->requestBody->action = ActionEnum::START;
    $request->requestBody->eventMethod = 'POST';
    $request->requestBody->eventUrl = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->requestBody->format = FormatEnum::MP3;
    $request->requestBody->split = 'conversation';
    $request->conversationId = 'vel';

    $response = $sdk->conversation->recordConversation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replaceConversation

Update a conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReplaceConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReplaceConversationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ConversationProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplaceConversationRequest();
    $request->requestBody = new ReplaceConversationRequestBody();
    $request->requestBody->displayName = 'Customer Chat';
    $request->requestBody->imageUrl = 'https://example.com/image.png';
    $request->requestBody->name = 'customer_chat';
    $request->requestBody->properties = new ConversationProperties();
    $request->requestBody->properties->ttl = 60;
    $request->conversationId = 'error';

    $response = $sdk->conversation->replaceConversation($request);

    if ($response->replaceConversation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveConversation

Retrieve a conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveConversationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveConversationRequest();
    $request->conversationId = 'deserunt';

    $response = $sdk->conversation->retrieveConversation($request);

    if ($response->retrieveConversation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
