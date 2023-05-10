# sessions

### Available Operations

* [sessionIdDelete](#sessioniddelete) - Sessions: Delete by Id
* [sessionIdGet](#sessionidget) - Sessions: Get
* [storyIdSessionPost](#storyidsessionpost) - Sessions: Create a Session
* [storyIdSessionsGet](#storyidsessionsget) - Sessions: List Story Sessions

## sessionIdDelete

Remove a session and dependant data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SessionIdDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionIdDeleteRequest();
    $request->sessionId = 'd5f0d30c-5fbb-4258-b053-202c73d5fe9b';

    $response = $sdk->sessions->sessionIdDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sessionIdGet

Get session metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SessionIdGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionIdGetRequest();
    $request->includeRelationships = false;
    $request->sessionId = '90c28909-b3fe-449a-8d9c-bf48633323f9';

    $response = $sdk->sessions->sessionIdGet($request);

    if ($response->session !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdSessionPost

Create a new session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdSessionPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdSessionPostRequest();
    $request->createSessionRequest = new CreateSessionRequest();
    $request->createSessionRequest->collaboratorUserId = 'b77f3a41-0067-44eb-b692-80d1ba77a89e';
    $request->createSessionRequest->host = 'distinctio';
    $request->id = 'f737ae42-03ce-45e6-a95d-8a0d446ce2af';

    $response = $sdk->sessions->storyIdSessionPost($request);

    if ($response->session !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdSessionsGet

Get a list of sessions asscoaited with this story

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdSessionsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdSessionsGetRequest();
    $request->id = '7a73cf3b-e453-4f87-8b32-6b5a73429cdb';
    $request->includeRelationships = false;

    $response = $sdk->sessions->storyIdSessionsGet($request);

    if ($response->sessions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
