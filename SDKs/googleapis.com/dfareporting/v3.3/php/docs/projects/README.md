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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'porro';
    $request->fields = 'atque';
    $request->id = '6492386f-62c9-469c-8cc6-b78890a3fd3c';
    $request->key = 'corrupti';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->profileId = 'quibusdam';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'perferendis';

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
    $request->accessToken = 'deleniti';
    $request->advertiserIds = [
        'consequuntur',
        'non',
        'fugiat',
        'voluptatibus',
    ];
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->fields = 'quae';
    $request->ids = [
        'officia',
        'velit',
        'debitis',
        'facere',
    ];
    $request->key = 'tempore';
    $request->maxResults = 326712;
    $request->oauthToken = 'vitae';
    $request->pageToken = 'repellat';
    $request->prettyPrint = false;
    $request->profileId = 'est';
    $request->quotaUser = 'facere';
    $request->searchString = 'iste';
    $request->sortField = DfareportingProjectsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingProjectsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'optio';
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
