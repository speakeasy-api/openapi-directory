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
    $request->accessToken = 'ad';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quia';
    $request->fields = 'dicta';
    $request->id = 'b832a56d-6918-40ff-a0eb-9a6658e69a4b';
    $request->key = 'totam';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->profileId = 'non';
    $request->quotaUser = 'illum';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'totam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quibusdam';
    $request->advertiserIds = [
        'itaque',
        'porro',
        'ducimus',
    ];
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'ea';
    $request->ids = [
        'minus',
        'autem',
        'aut',
    ];
    $request->key = 'nisi';
    $request->maxResults = 332831;
    $request->oauthToken = 'cupiditate';
    $request->pageToken = 'aliquam';
    $request->prettyPrint = false;
    $request->profileId = 'suscipit';
    $request->quotaUser = 'atque';
    $request->searchString = 'minus';
    $request->sortField = DfareportingProjectsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingProjectsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'tempora';

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
