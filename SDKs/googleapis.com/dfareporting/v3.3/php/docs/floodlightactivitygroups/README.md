# floodlightActivityGroups

### Available Operations

* [dfareportingFloodlightActivityGroupsGet](#dfareportingfloodlightactivitygroupsget) - Gets one floodlight activity group by ID.
* [dfareportingFloodlightActivityGroupsInsert](#dfareportingfloodlightactivitygroupsinsert) - Inserts a new floodlight activity group.
* [dfareportingFloodlightActivityGroupsList](#dfareportingfloodlightactivitygroupslist) - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* [dfareportingFloodlightActivityGroupsPatch](#dfareportingfloodlightactivitygroupspatch) - Updates an existing floodlight activity group. This method supports patch semantics.
* [dfareportingFloodlightActivityGroupsUpdate](#dfareportingfloodlightactivitygroupsupdate) - Updates an existing floodlight activity group.

## dfareportingFloodlightActivityGroupsGet

Gets one floodlight activity group by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivityGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'aperiam';
    $request->id = 'd51a44bf-01ba-4d87-86d4-6082bfbdc41f';
    $request->key = 'delectus';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->profileId = 'at';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new DfareportingFloodlightActivityGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivityGroups->dfareportingFloodlightActivityGroupsGet($request, $requestSecurity);

    if ($response->floodlightActivityGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightActivityGroupsInsert

Inserts a new floodlight activity group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityGroup;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivityGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->floodlightActivityGroup = new FloodlightActivityGroup();
    $request->floodlightActivityGroup->accountId = 'saepe';
    $request->floodlightActivityGroup->advertiserId = 'labore';
    $request->floodlightActivityGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->advertiserIdDimensionValue->dimensionName = 'doloribus';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->etag = 'facilis';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->id = '5cb35d17-638f-41ed-b783-59ecc5cb860f';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->kind = 'quas';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivityGroup->advertiserIdDimensionValue->value = 'illum';
    $request->floodlightActivityGroup->floodlightConfigurationId = 'ullam';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->dimensionName = 'praesentium';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->etag = 'perferendis';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->id = 'ba73810e-4fe4-4447-a97c-d3b1dd3bbce2';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->kind = 'ut';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->value = 'harum';
    $request->floodlightActivityGroup->id = 'voluptate';
    $request->floodlightActivityGroup->idDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->idDimensionValue->dimensionName = 'aliquid';
    $request->floodlightActivityGroup->idDimensionValue->etag = 'blanditiis';
    $request->floodlightActivityGroup->idDimensionValue->id = '4eff5012-6d71-4cff-bd0e-b74b8421953b';
    $request->floodlightActivityGroup->idDimensionValue->kind = 'ut';
    $request->floodlightActivityGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivityGroup->idDimensionValue->value = 'quidem';
    $request->floodlightActivityGroup->kind = 'nulla';
    $request->floodlightActivityGroup->name = 'Alexandra Green II';
    $request->floodlightActivityGroup->subaccountId = 'unde';
    $request->floodlightActivityGroup->tagString = 'assumenda';
    $request->floodlightActivityGroup->type = FloodlightActivityGroupTypeEnum::COUNTER;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->fields = 'provident';
    $request->key = 'nostrum';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->profileId = 'quod';
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DfareportingFloodlightActivityGroupsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivityGroups->dfareportingFloodlightActivityGroupsInsert($request, $requestSecurity);

    if ($response->floodlightActivityGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightActivityGroupsList

Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsListTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivityGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'amet';
    $request->advertiserId = 'occaecati';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'sequi';
    $request->floodlightConfigurationId = 'culpa';
    $request->ids = [
        'modi',
        'et',
        'eveniet',
    ];
    $request->key = 'aliquid';
    $request->maxResults = 760942;
    $request->oauthToken = 'adipisci';
    $request->pageToken = 'ab';
    $request->prettyPrint = false;
    $request->profileId = 'maxime';
    $request->quotaUser = 'porro';
    $request->searchString = 'explicabo';
    $request->sortField = DfareportingFloodlightActivityGroupsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingFloodlightActivityGroupsListSortOrderEnum::ASCENDING;
    $request->type = DfareportingFloodlightActivityGroupsListTypeEnum::SALE;
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new DfareportingFloodlightActivityGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivityGroups->dfareportingFloodlightActivityGroupsList($request, $requestSecurity);

    if ($response->floodlightActivityGroupsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightActivityGroupsPatch

Updates an existing floodlight activity group. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityGroup;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivityGroupsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->floodlightActivityGroup = new FloodlightActivityGroup();
    $request->floodlightActivityGroup->accountId = 'sunt';
    $request->floodlightActivityGroup->advertiserId = 'quisquam';
    $request->floodlightActivityGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->advertiserIdDimensionValue->dimensionName = 'sint';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->etag = 'id';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->id = '41ffbe9c-bd79-45ee-a5e0-76cc7abf616e';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->kind = 'mollitia';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivityGroup->advertiserIdDimensionValue->value = 'porro';
    $request->floodlightActivityGroup->floodlightConfigurationId = 'molestiae';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->dimensionName = 'inventore';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->etag = 'vel';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->id = '41934b90-f2e0-49d1-9d2f-c2f9e2e10594';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->kind = 'numquam';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->value = 'molestias';
    $request->floodlightActivityGroup->id = 'amet';
    $request->floodlightActivityGroup->idDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->idDimensionValue->dimensionName = 'enim';
    $request->floodlightActivityGroup->idDimensionValue->etag = 'illum';
    $request->floodlightActivityGroup->idDimensionValue->id = '237a72f9-0849-4d6a-ad4a-ecb7537cd922';
    $request->floodlightActivityGroup->idDimensionValue->kind = 'quia';
    $request->floodlightActivityGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivityGroup->idDimensionValue->value = 'excepturi';
    $request->floodlightActivityGroup->kind = 'sapiente';
    $request->floodlightActivityGroup->name = 'Greg Kutch';
    $request->floodlightActivityGroup->subaccountId = 'inventore';
    $request->floodlightActivityGroup->tagString = 'error';
    $request->floodlightActivityGroup->type = FloodlightActivityGroupTypeEnum::SALE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'aspernatur';
    $request->id = 'e761f0ca-4d45-46ef-9031-e6899f0c2001';
    $request->key = 'saepe';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->profileId = 'aspernatur';
    $request->quotaUser = 'minus';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'veniam';

    $requestSecurity = new DfareportingFloodlightActivityGroupsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivityGroups->dfareportingFloodlightActivityGroupsPatch($request, $requestSecurity);

    if ($response->floodlightActivityGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightActivityGroupsUpdate

Updates an existing floodlight activity group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityGroup;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivityGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivityGroupsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->floodlightActivityGroup = new FloodlightActivityGroup();
    $request->floodlightActivityGroup->accountId = 'quod';
    $request->floodlightActivityGroup->advertiserId = 'quod';
    $request->floodlightActivityGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->advertiserIdDimensionValue->dimensionName = 'alias';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->etag = 'nemo';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->id = '84a184d7-6d97-41fc-820c-65b037bb8e0c';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->kind = 'impedit';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivityGroup->advertiserIdDimensionValue->value = 'quas';
    $request->floodlightActivityGroup->floodlightConfigurationId = 'ullam';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->dimensionName = 'veritatis';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->etag = 'quas';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->id = '7e4de04a-f28c-45dd-9b46-aa1cfd6d828d';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->kind = 'culpa';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->value = 'inventore';
    $request->floodlightActivityGroup->id = 'nesciunt';
    $request->floodlightActivityGroup->idDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->idDimensionValue->dimensionName = 'et';
    $request->floodlightActivityGroup->idDimensionValue->etag = 'error';
    $request->floodlightActivityGroup->idDimensionValue->id = '11296466-45c1-4d81-b290-42f569b7aff0';
    $request->floodlightActivityGroup->idDimensionValue->kind = 'voluptates';
    $request->floodlightActivityGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivityGroup->idDimensionValue->value = 'fugit';
    $request->floodlightActivityGroup->kind = 'eos';
    $request->floodlightActivityGroup->name = 'Kristin Schowalter';
    $request->floodlightActivityGroup->subaccountId = 'ipsa';
    $request->floodlightActivityGroup->tagString = 'dignissimos';
    $request->floodlightActivityGroup->type = FloodlightActivityGroupTypeEnum::COUNTER;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'ex';
    $request->key = 'dolor';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->profileId = 'sed';
    $request->quotaUser = 'quam';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new DfareportingFloodlightActivityGroupsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivityGroups->dfareportingFloodlightActivityGroupsUpdate($request, $requestSecurity);

    if ($response->floodlightActivityGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
