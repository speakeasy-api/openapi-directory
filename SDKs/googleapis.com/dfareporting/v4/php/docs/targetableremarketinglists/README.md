# targetableRemarketingLists

### Available Operations

* [dfareportingTargetableRemarketingListsGet](#dfareportingtargetableremarketinglistsget) - Gets one remarketing list by ID.
* [dfareportingTargetableRemarketingListsList](#dfareportingtargetableremarketinglistslist) - Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

## dfareportingTargetableRemarketingListsGet

Gets one remarketing list by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetableRemarketingListsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetableRemarketingListsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingTargetableRemarketingListsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'est';
    $request->id = '29aaa1e1-6915-46f7-92ee-209505bf03a9';
    $request->key = 'dolorem';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->profileId = 'provident';
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new DfareportingTargetableRemarketingListsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetableRemarketingLists->dfareportingTargetableRemarketingListsGet($request, $requestSecurity);

    if ($response->targetableRemarketingList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingTargetableRemarketingListsList

Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetableRemarketingListsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetableRemarketingListsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetableRemarketingListsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetableRemarketingListsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingTargetableRemarketingListsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->active = false;
    $request->advertiserId = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'in';
    $request->fields = 'voluptatibus';
    $request->key = 'nam';
    $request->maxResults = 69569;
    $request->name = 'Caroline Lehner I';
    $request->oauthToken = 'fugit';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->profileId = 'porro';
    $request->quotaUser = 'amet';
    $request->sortField = DfareportingTargetableRemarketingListsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingTargetableRemarketingListsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'et';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new DfareportingTargetableRemarketingListsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetableRemarketingLists->dfareportingTargetableRemarketingListsList($request, $requestSecurity);

    if ($response->targetableRemarketingListsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
