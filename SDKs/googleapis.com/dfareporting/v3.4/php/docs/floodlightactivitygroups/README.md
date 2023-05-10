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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'officiis';
    $request->id = '2ae4fb5c-b35d-4176-b8f1-edb78359ecc5';
    $request->key = 'cumque';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->profileId = 'praesentium';
    $request->quotaUser = 'vel';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'delectus';

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
    $request->floodlightActivityGroup->accountId = 'impedit';
    $request->floodlightActivityGroup->advertiserId = 'illum';
    $request->floodlightActivityGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->advertiserIdDimensionValue->dimensionName = 'ullam';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->etag = 'praesentium';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->id = '0ba73810-e4fe-4444-b297-cd3b1dd3bbce';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->kind = 'dolores';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivityGroup->advertiserIdDimensionValue->value = 'nihil';
    $request->floodlightActivityGroup->floodlightConfigurationId = 'harum';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->dimensionName = 'voluptate';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->etag = 'aliquid';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->id = '84eff501-26d7-41cf-bbd0-eb74b8421953';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->kind = 'rerum';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->value = 'tempora';
    $request->floodlightActivityGroup->id = 'quidem';
    $request->floodlightActivityGroup->idDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->idDimensionValue->dimensionName = 'nulla';
    $request->floodlightActivityGroup->idDimensionValue->etag = 'nesciunt';
    $request->floodlightActivityGroup->idDimensionValue->id = 'c43159d3-3e59-453c-8011-39863aa41e6c';
    $request->floodlightActivityGroup->idDimensionValue->kind = 'adipisci';
    $request->floodlightActivityGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivityGroup->idDimensionValue->value = 'maxime';
    $request->floodlightActivityGroup->kind = 'porro';
    $request->floodlightActivityGroup->name = 'Lela Cartwright';
    $request->floodlightActivityGroup->subaccountId = 'tempore';
    $request->floodlightActivityGroup->tagString = 'ullam';
    $request->floodlightActivityGroup->type = FloodlightActivityGroupTypeEnum::COUNTER;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'ut';
    $request->key = 'et';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->profileId = 'reiciendis';
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'iste';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->advertiserId = 'temporibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'ipsam';
    $request->floodlightConfigurationId = 'repudiandae';
    $request->ids = [
        'commodi',
        'veniam',
        'debitis',
        'doloremque',
    ];
    $request->key = 'esse';
    $request->maxResults = 400840;
    $request->oauthToken = 'porro';
    $request->pageToken = 'quisquam';
    $request->prettyPrint = false;
    $request->profileId = 'molestiae';
    $request->quotaUser = 'mollitia';
    $request->searchString = 'quidem';
    $request->sortField = DfareportingFloodlightActivityGroupsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingFloodlightActivityGroupsListSortOrderEnum::ASCENDING;
    $request->type = DfareportingFloodlightActivityGroupsListTypeEnum::COUNTER;
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'eveniet';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->floodlightActivityGroup = new FloodlightActivityGroup();
    $request->floodlightActivityGroup->accountId = 'ipsam';
    $request->floodlightActivityGroup->advertiserId = 'porro';
    $request->floodlightActivityGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->advertiserIdDimensionValue->dimensionName = 'molestiae';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->etag = 'inventore';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->id = '641934b9-0f2e-409d-99d2-fc2f9e2e1059';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->kind = 'numquam';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivityGroup->advertiserIdDimensionValue->value = 'tempore';
    $request->floodlightActivityGroup->floodlightConfigurationId = 'molestias';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->dimensionName = 'amet';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->etag = 'enim';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->id = 'd237a72f-9084-49d6-aed4-aecb7537cd92';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->kind = 'odit';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->value = 'maxime';
    $request->floodlightActivityGroup->id = 'excepturi';
    $request->floodlightActivityGroup->idDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->idDimensionValue->dimensionName = 'sapiente';
    $request->floodlightActivityGroup->idDimensionValue->etag = 'maiores';
    $request->floodlightActivityGroup->idDimensionValue->id = '57491aab-fa2e-4761-b0ca-4d456ef1031e';
    $request->floodlightActivityGroup->idDimensionValue->kind = 'iure';
    $request->floodlightActivityGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivityGroup->idDimensionValue->value = 'perspiciatis';
    $request->floodlightActivityGroup->kind = 'omnis';
    $request->floodlightActivityGroup->name = 'Mr. Brian Schimmel Sr.';
    $request->floodlightActivityGroup->subaccountId = 'saepe';
    $request->floodlightActivityGroup->tagString = 'quia';
    $request->floodlightActivityGroup->type = FloodlightActivityGroupTypeEnum::COUNTER;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->fields = 'exercitationem';
    $request->id = 'cc0584a1-84d7-46d9-b1fc-820c65b037bb';
    $request->key = 'blanditiis';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->profileId = 'sit';
    $request->quotaUser = 'optio';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'corrupti';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->floodlightActivityGroup = new FloodlightActivityGroup();
    $request->floodlightActivityGroup->accountId = 'ullam';
    $request->floodlightActivityGroup->advertiserId = 'veritatis';
    $request->floodlightActivityGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->advertiserIdDimensionValue->dimensionName = 'quas';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->etag = 'molestiae';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->id = 'e4de04af-28c5-4ddd-b46a-a1cfd6d828da';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->kind = 'ipsa';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivityGroup->advertiserIdDimensionValue->value = 'nesciunt';
    $request->floodlightActivityGroup->floodlightConfigurationId = 'et';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->dimensionName = 'error';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->etag = 'inventore';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->id = '12964664-5c1d-481f-a904-2f569b7aff0e';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->kind = 'dolorum';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->value = 'eos';
    $request->floodlightActivityGroup->id = 'veritatis';
    $request->floodlightActivityGroup->idDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->idDimensionValue->dimensionName = 'vel';
    $request->floodlightActivityGroup->idDimensionValue->etag = 'placeat';
    $request->floodlightActivityGroup->idDimensionValue->id = 'be071bc1-63e2-479a-bb08-4da99257d04f';
    $request->floodlightActivityGroup->idDimensionValue->kind = 'eius';
    $request->floodlightActivityGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivityGroup->idDimensionValue->value = 'quas';
    $request->floodlightActivityGroup->kind = 'incidunt';
    $request->floodlightActivityGroup->name = 'Kayla Kilback';
    $request->floodlightActivityGroup->subaccountId = 'repellendus';
    $request->floodlightActivityGroup->tagString = 'blanditiis';
    $request->floodlightActivityGroup->type = FloodlightActivityGroupTypeEnum::COUNTER;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'placeat';
    $request->key = 'tempore';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->profileId = 'earum';
    $request->quotaUser = 'debitis';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'reiciendis';

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
