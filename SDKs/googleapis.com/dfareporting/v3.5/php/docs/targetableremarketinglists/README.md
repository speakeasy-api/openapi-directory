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
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloremque';
    $request->fields = 'ut';
    $request->id = 'c3752512-beae-41d8-becc-5fdcea8e7a88';
    $request->key = 'adipisci';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->profileId = 'et';
    $request->quotaUser = 'commodi';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'ratione';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'at';
    $request->active = false;
    $request->advertiserId = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quibusdam';
    $request->fields = 'iusto';
    $request->key = 'voluptate';
    $request->maxResults = 763768;
    $request->name = 'Janis Ledner III';
    $request->oauthToken = 'eum';
    $request->pageToken = 'odit';
    $request->prettyPrint = false;
    $request->profileId = 'nesciunt';
    $request->quotaUser = 'esse';
    $request->sortField = DfareportingTargetableRemarketingListsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingTargetableRemarketingListsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'magni';

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
