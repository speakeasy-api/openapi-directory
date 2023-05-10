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
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'numquam';
    $request->id = '380b1f6b-8ca2-475a-a0a0-4c495cc69917';
    $request->key = 'inventore';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->profileId = 'ipsam';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'dicta';

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
    $request->accessToken = 'facere';
    $request->action = DfareportingChangeLogsListActionEnum::ACTION_LINK;
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'delectus';
    $request->ids = [
        'expedita',
        'corrupti',
    ];
    $request->key = 'rem';
    $request->maxChangeTime = 'atque';
    $request->maxResults = 886118;
    $request->minChangeTime = 'cum';
    $request->oauthToken = 'pariatur';
    $request->objectIds = [
        'quo',
        'incidunt',
        'quod',
        'minus',
    ];
    $request->objectType = DfareportingChangeLogsListObjectTypeEnum::OBJECT_RATE_CARD;
    $request->pageToken = 'id';
    $request->prettyPrint = false;
    $request->profileId = 'excepturi';
    $request->quotaUser = 'occaecati';
    $request->searchString = 'libero';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'esse';
    $request->userProfileIds = [
        'maxime',
        'accusantium',
        'soluta',
        'fugit',
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
