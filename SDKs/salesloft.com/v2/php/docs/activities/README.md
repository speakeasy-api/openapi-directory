# activities

## Overview

Activities

### Available Operations

* [postV2ActivitiesJson](#postv2activitiesjson) - Create an activity

## postV2ActivitiesJson

Creates an activity. An activity will mark the associated action as completed. Currently,
only certain action types can have an activity explicitly created for them.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2ActivitiesJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2ActivitiesJsonRequestBody();
    $request->actionId = 770581;
    $request->taskId = 304582;

    $response = $sdk->activities->postV2ActivitiesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
