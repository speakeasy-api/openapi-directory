# conversations

## Overview

Conversations group your message history with each contact into one thread

### Available Operations

* [conversationsClose](#conversationsclose) - Closes a conversation
* [conversationsFetch](#conversationsfetch) - Fetch conversation by ID
* [conversationsFetchAll](#conversationsfetchall) - Fetch conversations

## conversationsClose

Closes a conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConversationsCloseRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConversationsCloseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversationsCloseRequest();
    $request->accountId = 'minima';
    $request->conversationId = 'excepturi';

    $requestSecurity = new ConversationsCloseSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversations->conversationsClose($request, $requestSecurity);

    if ($response->conversationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversationsFetch

Fetch conversation by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConversationsFetchRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConversationsFetchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversationsFetchRequest();
    $request->accountId = 'accusantium';
    $request->conversationId = 'iure';

    $requestSecurity = new ConversationsFetchSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversations->conversationsFetch($request, $requestSecurity);

    if ($response->conversationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversationsFetchAll

Fetch conversations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConversationsFetchAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConversationsFetchAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversationsFetchAllRequest();
    $request->accountId = 'culpa';
    $request->limit = 988374;
    $request->offset = 958950;

    $requestSecurity = new ConversationsFetchAllSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversations->conversationsFetchAll($request, $requestSecurity);

    if ($response->conversationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
