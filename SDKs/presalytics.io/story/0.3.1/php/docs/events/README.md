# events

### Available Operations

* [storyIdEventsGet](#storyideventsget) - Events: List Events
* [storyIdEventsPost](#storyideventspost) - Events: Manage Events

## storyIdEventsGet

Get a list of Events available to users of this story

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdEventsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdEventsGetRequest();
    $request->id = '71b5e6e1-3b99-4d48-8e1e-91e450ad2abd';

    $response = $sdk->events->storyIdEventsGet($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdEventsPost

Add a message to the Story's conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdEventsPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\ManageEvent;
use \OpenAPI\OpenAPI\Models\Shared\ManageEventActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdEventsPostRequest();
    $request->id = '44269802-d502-4a94-bb4f-63c969e9a3ef';
    $request->manageEvent = new ManageEvent();
    $request->manageEvent->action = ManageEventActionEnum::CHANGE;
    $request->manageEvent->actionParams = [
        'in' => 'illum',
        'maiores' => 'rerum',
    ];
    $request->manageEvent->name = 'Valerie Runolfsson';

    $response = $sdk->events->storyIdEventsPost($request);

    if ($response->storyIdEventsPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
