# member

## Overview

Memberships connect users with conversations. Each membership has one conversation and one user however a user can have many memberships to conversations just as conversations can have many members.

### Available Operations

* [getMembers](#getmembers) - List Members

## getMembers

List Members

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMembersRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMembersRequest();
    $request->conversationId = 'suscipit';
    $request->cursor = 'molestiae';
    $request->order = OrderEnum::DESC;
    $request->pageSize = 812169;

    $response = $sdk->member->getMembers($request);

    if ($response->getMembers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
