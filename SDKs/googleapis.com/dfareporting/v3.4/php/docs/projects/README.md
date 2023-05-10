# projects

### Available Operations

* [dfareportingProjectsGet](#dfareportingprojectsget) - Gets one project by ID.
* [dfareportingProjectsList](#dfareportingprojectslist) - Retrieves a list of projects, possibly filtered. This method supports paging .

## dfareportingProjectsGet

Gets one project by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingProjectsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingProjectsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingProjectsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'nesciunt';
    $request->id = '7726d153-21b8-432a-96d6-9180ff60eb9a';
    $request->key = 'ex';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->profileId = 'nostrum';
    $request->quotaUser = 'atque';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new DfareportingProjectsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dfareportingProjectsGet($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingProjectsList

Retrieves a list of projects, possibly filtered. This method supports paging .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingProjectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingProjectsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingProjectsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingProjectsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingProjectsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->advertiserIds = [
        'nam',
        'totam',
    ];
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'illum';
    $request->ids = [
        'totam',
    ];
    $request->key = 'explicabo';
    $request->maxResults = 844703;
    $request->oauthToken = 'harum';
    $request->pageToken = 'itaque';
    $request->prettyPrint = false;
    $request->profileId = 'porro';
    $request->quotaUser = 'ducimus';
    $request->searchString = 'ad';
    $request->sortField = DfareportingProjectsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingProjectsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new DfareportingProjectsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dfareportingProjectsList($request, $requestSecurity);

    if ($response->projectsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
