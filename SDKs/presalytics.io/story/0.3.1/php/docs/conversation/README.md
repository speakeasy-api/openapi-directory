# conversation

### Available Operations

* [storyIdMessagesGet](#storyidmessagesget) - Conversation: List Conversation Messages
* [storyIdMessagesPost](#storyidmessagespost) - Conversation: Send a Message

## storyIdMessagesGet

Get a list of messages that have been send in this story

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdMessagesGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdMessagesGetRequest();
    $request->id = '2c595590-7aff-41a3-a2fa-9467739251aa';

    $response = $sdk->conversation->storyIdMessagesGet($request);

    if ($response->messages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdMessagesPost

Add a message to the Story's conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdMessagesPostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdMessagesPostRequest();
    $request->requestBody = 'enim';
    $request->id = '2c3f5ad0-19da-41ff-a78f-097b0074f154';

    $response = $sdk->conversation->storyIdMessagesPost($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
