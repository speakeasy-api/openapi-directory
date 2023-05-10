# views

### Available Operations

* [sessionsIdViewsGet](#sessionsidviewsget) - Views: List Session Views
* [sessionsIdViewsPost](#sessionsidviewspost) - Views: Create A Session View
* [viewsIdDelete](#viewsiddelete) - Views: Delete by Id
* [viewsIdGet](#viewsidget) - Views: Get View

## sessionsIdViewsGet

Get data for all views in a session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SessionsIdViewsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionsIdViewsGetRequest();
    $request->sessionId = 'd782259e-3ea4-4b51-97f9-2443da7ce52b';

    $response = $sdk->views->sessionsIdViewsGet($request);

    if ($response->views !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sessionsIdViewsPost

Create a page view object for a viewing session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SessionsIdViewsPostRequest;
use \OpenAPI\OpenAPI\Models\Operations\SessionsIdViewsPostRequiredParametersToCreateAView;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionsIdViewsPostRequest();
    $request->requestBody = new SessionsIdViewsPostRequiredParametersToCreateAView();
    $request->requestBody->activeMSecs = 532669;
    $request->requestBody->additional = 'cupiditate';
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-11T11:57:42.986Z');
    $request->requestBody->pageNumber = 316542;
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T21:21:27.684Z');
    $request->sessionId = 'c6454efb-0b34-4896-83ca-5acfbe2fd570';

    $response = $sdk->views->sessionsIdViewsPost($request);

    if ($response->view !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## viewsIdDelete

Remove a view and dependant data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ViewsIdDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ViewsIdDeleteRequest();
    $request->viewId = '75779291-77de-4ac6-86ec-b573409e3eb1';

    $response = $sdk->views->viewsIdDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## viewsIdGet

Get view meta data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ViewsIdGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ViewsIdGetRequest();
    $request->viewId = 'e5a2b12e-b07f-4116-9b99-545fc95fa889';

    $response = $sdk->views->viewsIdGet($request);

    if ($response->view !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
