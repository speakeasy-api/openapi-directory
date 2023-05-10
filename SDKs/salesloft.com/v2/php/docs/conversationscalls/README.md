# conversationsCalls

## Overview

Conversations Calls

### Available Operations

* [postV2ConversationsCalls](#postv2conversationscalls) - Create Conversations Call

## postV2ConversationsCalls

Enqueue a Conversations Call for processing

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2ConversationsCallsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2ConversationsCallsRequestBody();
    $request->callCreatedAt = 'corrupti';
    $request->direction = 'at';
    $request->duration = 6216.93;
    $request->from = 'blanditiis';
    $request->recording = [
        'repudiandae' => 'atque',
        'atque' => 'sunt',
    ];
    $request->to = 'recusandae';
    $request->userGuid = 'dolorum';

    $response = $sdk->conversationsCalls->postV2ConversationsCalls($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
