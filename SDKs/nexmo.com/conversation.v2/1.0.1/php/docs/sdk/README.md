# SDK

## Overview

The Conversation API enables you to build conversation features where communication can take place across multiple mediums including IP Messaging, PSTN Voice, SMS and WebRTC Audio and Video. The context of the conversations is maintained though each communication event taking place within a conversation, no matter the medium.

### Available Operations

* [getUsers](#getusers) - List Users

## getUsers

List Users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->cursor = 'quibusdam';
    $request->order = OrderEnum::DESC;
    $request->pageSize = 857946;

    $response = $sdk->sdk->getUsers($request);

    if ($response->getUsers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
