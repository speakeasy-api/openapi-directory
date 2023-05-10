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
    $request->accessToken = 'illo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'consequatur';
    $request->id = '7b200a58-ffd2-4967-9f8f-d882a8e60be6';
    $request->key = 'eos';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->profileId = 'eligendi';
    $request->quotaUser = 'facere';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'quisquam';

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
    $request->accessToken = 'officia';
    $request->active = false;
    $request->advertiserId = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'doloremque';
    $request->key = 'ut';
    $request->maxResults = 756102;
    $request->name = 'Allison Herzog';
    $request->oauthToken = 'quasi';
    $request->pageToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->profileId = 'harum';
    $request->quotaUser = 'earum';
    $request->sortField = DfareportingTargetableRemarketingListsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingTargetableRemarketingListsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'vero';

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
