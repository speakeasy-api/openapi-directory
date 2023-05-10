# ongoingActions

## Overview

Ongoing Actions

### Available Operations

* [postV2OngoingActionsJson](#postv2ongoingactionsjson) - Create an ongoing action

## postV2OngoingActionsJson

Creates an ongoing action. An ongoing action is an action that is not yet completed,
but progress has been made towards the completion. The user should not need to do
anything for an ongoing action to be completed. An ongoing action can be later completed
by creating an activity.

Ongoing actions are marked as status=pending_activity.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2OngoingActionsJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2OngoingActionsJsonRequestBody();
    $request->actionId = 564667;

    $response = $sdk->ongoingActions->postV2OngoingActionsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
