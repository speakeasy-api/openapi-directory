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
    $request->accessToken = 'velit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'voluptatem';
    $request->id = 'ccd33f11-b3e4-4e08-8aa1-04186ec759e0';
    $request->key = 'eos';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->profileId = 'dolor';
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'consequuntur';

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
    $request->accessToken = 'quis';
    $request->advertiserIds = [
        'laudantium',
        'recusandae',
        'odit',
        'fugiat',
    ];
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'voluptates';
    $request->ids = [
        'at',
        'dolorem',
        'sunt',
    ];
    $request->key = 'ipsa';
    $request->maxResults = 278998;
    $request->oauthToken = 'maiores';
    $request->pageToken = 'culpa';
    $request->prettyPrint = false;
    $request->profileId = 'dolore';
    $request->quotaUser = 'eius';
    $request->searchString = 'iure';
    $request->sortField = DfareportingProjectsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingProjectsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'voluptatibus';

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
