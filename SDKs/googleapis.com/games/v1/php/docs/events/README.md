# events

### Available Operations

* [gamesEventsListByPlayer](#gameseventslistbyplayer) - Returns a list showing the current progress on events in this application for the currently authenticated user.
* [gamesEventsListDefinitions](#gameseventslistdefinitions) - Returns a list of the event definitions in this application.
* [gamesEventsRecord](#gameseventsrecord) - Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

## gamesEventsListByPlayer

Returns a list showing the current progress on events in this application for the currently authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesEventsListByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesEventsListByPlayerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesEventsListByPlayerRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->language = 'ut';
    $request->maxResults = 979587;
    $request->oauthToken = 'dicta';
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new GamesEventsListByPlayerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->gamesEventsListByPlayer($request, $requestSecurity);

    if ($response->playerEventListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesEventsListDefinitions

Returns a list of the event definitions in this application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesEventsListDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesEventsListDefinitionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesEventsListDefinitionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'commodi';
    $request->fields = 'repudiandae';
    $request->key = 'quae';
    $request->language = 'ipsum';
    $request->maxResults = 692472;
    $request->oauthToken = 'molestias';
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new GamesEventsListDefinitionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->gamesEventsListDefinitions($request, $requestSecurity);

    if ($response->eventDefinitionListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesEventsRecord

Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesEventsRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\EventPeriodUpdate;
use \OpenAPI\OpenAPI\Models\Shared\EventPeriodRange;
use \OpenAPI\OpenAPI\Models\Shared\EventUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesEventsRecordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesEventsRecordRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->eventRecordRequest = new EventRecordRequest();
    $request->eventRecordRequest->currentTimeMillis = 'voluptates';
    $request->eventRecordRequest->kind = 'quasi';
    $request->eventRecordRequest->requestId = 'repudiandae';
    $request->eventRecordRequest->timePeriods = [
        new EventPeriodUpdate(),
        new EventPeriodUpdate(),
        new EventPeriodUpdate(),
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'enim';
    $request->key = 'consequatur';
    $request->language = 'est';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new GamesEventsRecordSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->gamesEventsRecord($request, $requestSecurity);

    if ($response->eventUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
