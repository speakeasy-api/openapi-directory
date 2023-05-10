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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'minus';
    $request->id = '7a17a82e-5e82-4fd2-8d10-40a7e91392ab';
    $request->key = 'incidunt';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->profileId = 'eligendi';
    $request->quotaUser = 'expedita';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'totam';

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
    $request->accessToken = 'nemo';
    $request->active = false;
    $request->advertiserId = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'reiciendis';
    $request->key = 'eius';
    $request->maxResults = 380012;
    $request->name = 'Rosalie Thompson';
    $request->oauthToken = 'necessitatibus';
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->profileId = 'illo';
    $request->quotaUser = 'tempora';
    $request->sortField = DfareportingTargetableRemarketingListsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingTargetableRemarketingListsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'animi';

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
