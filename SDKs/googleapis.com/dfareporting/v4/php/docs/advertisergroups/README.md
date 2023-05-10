# advertiserGroups

### Available Operations

* [dfareportingAdvertiserGroupsDelete](#dfareportingadvertisergroupsdelete) - Deletes an existing advertiser group.
* [dfareportingAdvertiserGroupsGet](#dfareportingadvertisergroupsget) - Gets one advertiser group by ID.
* [dfareportingAdvertiserGroupsInsert](#dfareportingadvertisergroupsinsert) - Inserts a new advertiser group.
* [dfareportingAdvertiserGroupsList](#dfareportingadvertisergroupslist) - Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
* [dfareportingAdvertiserGroupsPatch](#dfareportingadvertisergroupspatch) - Updates an existing advertiser group. This method supports patch semantics.
* [dfareportingAdvertiserGroupsUpdate](#dfareportingadvertisergroupsupdate) - Updates an existing advertiser group.

## dfareportingAdvertiserGroupsDelete

Deletes an existing advertiser group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'ex';
    $request->id = '60ff57bf-aad4-4f9e-bc1b-4512c1032648';
    $request->key = 'at';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->profileId = 'eos';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DfareportingAdvertiserGroupsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserGroups->dfareportingAdvertiserGroupsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertiserGroupsGet

Gets one advertiser group by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'earum';
    $request->id = 'bfd0e9fe-6c63-42ca-baed-0117996312fd';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->profileId = 'tempora';
    $request->quotaUser = 'nihil';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DfareportingAdvertiserGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserGroups->dfareportingAdvertiserGroupsGet($request, $requestSecurity);

    if ($response->advertiserGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertiserGroupsInsert

Inserts a new advertiser group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserGroup;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->advertiserGroup = new AdvertiserGroup();
    $request->advertiserGroup->accountId = 'esse';
    $request->advertiserGroup->id = 'praesentium';
    $request->advertiserGroup->kind = 'maiores';
    $request->advertiserGroup->name = 'Ben Bradtke Sr.';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'ex';
    $request->key = 'consectetur';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->profileId = 'ipsa';
    $request->quotaUser = 'laborum';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'nostrum';

    $requestSecurity = new DfareportingAdvertiserGroupsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserGroups->dfareportingAdvertiserGroupsInsert($request, $requestSecurity);

    if ($response->advertiserGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertiserGroupsList

Retrieves a list of advertiser groups, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'suscipit';
    $request->ids = [
        'perferendis',
        'eum',
    ];
    $request->key = 'voluptas';
    $request->maxResults = 614528;
    $request->oauthToken = 'id';
    $request->pageToken = 'ab';
    $request->prettyPrint = false;
    $request->profileId = 'error';
    $request->quotaUser = 'possimus';
    $request->searchString = 'voluptates';
    $request->sortField = DfareportingAdvertiserGroupsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingAdvertiserGroupsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new DfareportingAdvertiserGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserGroups->dfareportingAdvertiserGroupsList($request, $requestSecurity);

    if ($response->advertiserGroupsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertiserGroupsPatch

Updates an existing advertiser group. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserGroup;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserGroupsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->advertiserGroup = new AdvertiserGroup();
    $request->advertiserGroup->accountId = 'enim';
    $request->advertiserGroup->id = 'vitae';
    $request->advertiserGroup->kind = 'repellendus';
    $request->advertiserGroup->name = 'Krista Jakubowski';
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'molestias';
    $request->fields = 'cum';
    $request->id = '61891baa-0fe1-4ade-808e-6f8c5f350d8c';
    $request->key = 'quibusdam';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->profileId = 'ipsam';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new DfareportingAdvertiserGroupsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserGroups->dfareportingAdvertiserGroupsPatch($request, $requestSecurity);

    if ($response->advertiserGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertiserGroupsUpdate

Updates an existing advertiser group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserGroup;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserGroupsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->advertiserGroup = new AdvertiserGroup();
    $request->advertiserGroup->accountId = 'deleniti';
    $request->advertiserGroup->id = 'veritatis';
    $request->advertiserGroup->kind = 'tempora';
    $request->advertiserGroup->name = 'Mrs. Elizabeth Bradtke';
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quae';
    $request->fields = 'dolor';
    $request->key = 'fugiat';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->profileId = 'consequuntur';
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'eveniet';

    $requestSecurity = new DfareportingAdvertiserGroupsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserGroups->dfareportingAdvertiserGroupsUpdate($request, $requestSecurity);

    if ($response->advertiserGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
