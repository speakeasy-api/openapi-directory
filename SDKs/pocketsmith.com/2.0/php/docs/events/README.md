# events

### Available Operations

* [deleteEventsId](#deleteeventsid) - Delete event
* [getEventsId](#geteventsid) - Get event
* [getScenariosIdEvents](#getscenariosidevents) - List events in scenario.
* [getUsersIdEvents](#getusersidevents) - List events in user.
* [postScenariosIdEvents](#postscenariosidevents) - Create event in scenario
* [putEventsId](#puteventsid) - Update event

## deleteEventsId

Deletes an event by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventsIdBehaviourEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEventsIdRequest();
    $request->behaviour = DeleteEventsIdBehaviourEnum::FORWARD;
    $request->id = '396fea75-96eb-410f-aaa2-352c5955907a';

    $response = $sdk->events->deleteEventsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventsId

Gets a particular event by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsIdRequest();
    $request->id = 'ff1a3a2f-a946-4773-9251-aa52c3f5ad01';

    $response = $sdk->events->getEventsId($request);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScenariosIdEvents

Lists events belonging to a scenario by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetScenariosIdEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScenariosIdEventsRequest();
    $request->endDate = 'error';
    $request->id = 837945;
    $request->startDate = 'laborum';

    $response = $sdk->events->getScenariosIdEvents($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdEvents

Lists events belonging to a user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdEventsRequest();
    $request->endDate = 'quasi';
    $request->id = 971945;
    $request->startDate = 'voluptatibus';

    $response = $sdk->events->getUsersIdEvents($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postScenariosIdEvents

Creates an event in a scenario by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostScenariosIdEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostScenariosIdEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostScenariosIdEventsRequestBodyRepeatTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostScenariosIdEventsRequest();
    $request->requestBody = new PostScenariosIdEventsRequestBody();
    $request->requestBody->amount = 11.5;
    $request->requestBody->categoryId = 42;
    $request->requestBody->date = '2020-10-27';
    $request->requestBody->note = 'New beers for sampling over the weekends.';
    $request->requestBody->repeatInterval = 1;
    $request->requestBody->repeatType = PostScenariosIdEventsRequestBodyRepeatTypeEnum::WEEKLY;
    $request->id = 878194;

    $response = $sdk->events->postScenariosIdEvents($request);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEventsId

Updates an event by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsIdRequestBodyBehaviourEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsIdRequestBodyRepeatTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEventsIdRequest();
    $request->requestBody = new PutEventsIdRequestBody();
    $request->requestBody->amount = 11.5;
    $request->requestBody->behaviour = PutEventsIdRequestBodyBehaviourEnum::ALL;
    $request->requestBody->note = 'Need more beer.';
    $request->requestBody->repeatInterval = 1;
    $request->requestBody->repeatType = PutEventsIdRequestBodyRepeatTypeEnum::WEEKLY;
    $request->id = '78f097b0-074f-4154-b1b5-e6e13b99d488';

    $response = $sdk->events->putEventsId($request);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
