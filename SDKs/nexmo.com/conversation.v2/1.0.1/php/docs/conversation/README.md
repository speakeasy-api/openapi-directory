# conversation

## Overview

A conversation is a shared core component that Vonage APIs rely on. Conversations happen over multiple mediums and and can have associated Users through Memberships.

### Available Operations

* [getConversations](#getconversations) - List Conversations

## getConversations

Please note that not all data is available in the list endpoint. Once 
you've identified the conversation you need to work with, use the 
[GET /conversations/:id](#get-conversation) endpoint to fetch all of the conversation details


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConversationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConversationsRequest();
    $request->cursor = 'corrupti';
    $request->dateEnd = 'illum';
    $request->dateStart = 'vel';
    $request->order = OrderEnum::DESC;
    $request->pageSize = 645894;

    $response = $sdk->conversation->getConversations($request);

    if ($response->getConversations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
