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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deserunt';
    $request->fields = 'corporis';
    $request->id = '3e5ae6e0-ac18-44c2-b9c2-47c88373a40e';
    $request->key = 'architecto';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->profileId = 'dolore';
    $request->quotaUser = 'sunt';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'neque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'earum';
    $request->action = DfareportingChangeLogsListActionEnum::ACTION_ADD;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'exercitationem';
    $request->ids = [
        'nihil',
        'ad',
    ];
    $request->key = 'nisi';
    $request->maxChangeTime = 'tenetur';
    $request->maxResults = 338281;
    $request->minChangeTime = 'quibusdam';
    $request->oauthToken = 'nemo';
    $request->objectIds = [
        'pariatur',
        'sit',
    ];
    $request->objectType = DfareportingChangeLogsListObjectTypeEnum::OBJECT_EVENT_TAG;
    $request->pageToken = 'repellendus';
    $request->prettyPrint = false;
    $request->profileId = 'perferendis';
    $request->quotaUser = 'id';
    $request->searchString = 'sapiente';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'possimus';
    $request->userProfileIds = [
        'repudiandae',
        'architecto',
        'adipisci',
        'pariatur',
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
