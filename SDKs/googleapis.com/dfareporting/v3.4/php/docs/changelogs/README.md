# changeLogs

### Available Operations

* [dfareportingChangeLogsGet](#dfareportingchangelogsget) - Gets one change log by ID.
* [dfareportingChangeLogsList](#dfareportingchangelogslist) - Retrieves a list of change logs. This method supports paging.

## dfareportingChangeLogsGet

Gets one change log by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingChangeLogsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingChangeLogsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingChangeLogsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'commodi';
    $request->fields = 'eveniet';
    $request->id = 'cbb4e243-cf78-49ff-afed-a53e5ae6e0ac';
    $request->key = 'quasi';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->profileId = 'eius';
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new DfareportingChangeLogsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changeLogs->dfareportingChangeLogsGet($request, $requestSecurity);

    if ($response->changeLog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingChangeLogsList

Retrieves a list of change logs. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingChangeLogsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingChangeLogsListActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingChangeLogsListObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingChangeLogsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingChangeLogsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'minus';
    $request->action = DfareportingChangeLogsListActionEnum::ACTION_DELETE;
    $request->alt = AltEnum::JSON;
    $request->callback = 'reprehenderit';
    $request->fields = 'quod';
    $request->ids = [
        'corrupti',
        'amet',
        'molestiae',
    ];
    $request->key = 'amet';
    $request->maxChangeTime = 'laborum';
    $request->maxResults = 266946;
    $request->minChangeTime = 'perferendis';
    $request->oauthToken = 'necessitatibus';
    $request->objectIds = [
        'molestias',
    ];
    $request->objectType = DfareportingChangeLogsListObjectTypeEnum::OBJECT_ADVERTISER_GROUP;
    $request->pageToken = 'sunt';
    $request->prettyPrint = false;
    $request->profileId = 'maiores';
    $request->quotaUser = 'neque';
    $request->searchString = 'odit';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'veniam';
    $request->userProfileIds = [
        'eaque',
        'exercitationem',
    ];

    $requestSecurity = new DfareportingChangeLogsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changeLogs->dfareportingChangeLogsList($request, $requestSecurity);

    if ($response->changeLogsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
