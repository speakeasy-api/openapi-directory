# activities

### Available Operations

* [appsactivityActivitiesList](#appsactivityactivitieslist) - Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.

## appsactivityActivitiesList

Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsactivityActivitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsactivityActivitiesListGroupingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsactivityActivitiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsactivityActivitiesListRequest();
    $request->alt = AltEnum::JSON;
    $request->driveAncestorId = 'iure';
    $request->driveFileId = 'magnam';
    $request->fields = 'debitis';
    $request->groupingStrategy = AppsactivityActivitiesListGroupingStrategyEnum::DRIVE_UI;
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->pageSize = 383441;
    $request->pageToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->source = 'placeat';
    $request->userId = 'voluptatum';
    $request->userIp = 'iusto';

    $requestSecurity = new AppsactivityActivitiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->appsactivityActivitiesList($request, $requestSecurity);

    if ($response->listActivitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
