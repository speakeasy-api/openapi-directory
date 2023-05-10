# activities

### Available Operations

* [reportsActivitiesList](#reportsactivitieslist) - Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 
* [reportsActivitiesWatch](#reportsactivitieswatch) - Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

## reportsActivitiesList

Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReportsActivitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportsActivitiesListApplicationNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportsActivitiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportsActivitiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->actorIpAddress = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->applicationName = ReportsActivitiesListApplicationNameEnum::DATA_STUDIO;
    $request->callback = 'temporibus';
    $request->customerId = 'ab';
    $request->endTime = 'quis';
    $request->eventName = 'veritatis';
    $request->fields = 'deserunt';
    $request->filters = 'perferendis';
    $request->groupIdFilter = 'ipsam';
    $request->key = 'repellendus';
    $request->maxResults = 957156;
    $request->oauthToken = 'quo';
    $request->orgUnitID = 'odit';
    $request->pageToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->startTime = 'maiores';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'quod';
    $request->userKey = 'quod';

    $requestSecurity = new ReportsActivitiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->reportsActivitiesList($request, $requestSecurity);

    if ($response->activities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reportsActivitiesWatch

Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReportsActivitiesWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportsActivitiesWatchApplicationNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportsActivitiesWatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportsActivitiesWatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->channel = new Channel();
    $request->channel->address = '7617 McCullough Coves';
    $request->channel->expiration = 'deleniti';
    $request->channel->id = 'fc816742-cb73-4920-9929-396fea7596eb';
    $request->channel->kind = 'architecto';
    $request->channel->params = [
        'reiciendis' => 'est',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'mollitia';
    $request->channel->resourceUri = 'laborum';
    $request->channel->token = 'dolores';
    $request->channel->type = 'dolorem';
    $request->accessToken = 'corporis';
    $request->actorIpAddress = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->applicationName = ReportsActivitiesWatchApplicationNameEnum::GPLUS;
    $request->callback = 'omnis';
    $request->customerId = 'nemo';
    $request->endTime = 'minima';
    $request->eventName = 'excepturi';
    $request->fields = 'accusantium';
    $request->filters = 'iure';
    $request->groupIdFilter = 'culpa';
    $request->key = 'doloribus';
    $request->maxResults = 958950;
    $request->oauthToken = 'architecto';
    $request->orgUnitID = 'mollitia';
    $request->pageToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->startTime = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';
    $request->userKey = 'occaecati';

    $requestSecurity = new ReportsActivitiesWatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->reportsActivitiesWatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
