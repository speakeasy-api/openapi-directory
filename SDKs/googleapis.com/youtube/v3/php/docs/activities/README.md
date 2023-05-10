# activities

### Available Operations

* [youtubeActivitiesList](#youtubeactivitieslist) - Retrieves a list of resources, possibly filtered.

## youtubeActivitiesList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeActivitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeActivitiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeActivitiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeActivitiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeActivitiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeActivitiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->channelId = 'culpa';
    $request->fields = 'doloribus';
    $request->home = false;
    $request->key = 'sapiente';
    $request->maxResults = 102044;
    $request->mine = false;
    $request->oauthToken = 'mollitia';
    $request->pageToken = 'dolorem';
    $request->part = [
        'consequuntur',
        'repellat',
        'mollitia',
    ];
    $request->prettyPrint = false;
    $request->publishedAfter = 'occaecati';
    $request->publishedBefore = 'numquam';
    $request->quotaUser = 'commodi';
    $request->regionCode = 'quam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new YoutubeActivitiesListSecurity();
    $requestSecurity->option1 = new YoutubeActivitiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->youtubeActivitiesList($request, $requestSecurity);

    if ($response->activityListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
