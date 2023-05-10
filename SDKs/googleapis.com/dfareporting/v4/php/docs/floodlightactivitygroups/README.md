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
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->fields = 'et';
    $request->id = 'ffbe9cbd-795e-4e65-a076-cc7abf616ea5';
    $request->key = 'porro';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->profileId = 'inventore';
    $request->quotaUser = 'vel';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'dicta';

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
    $request->floodlightActivityGroup->accountId = 'non';
    $request->floodlightActivityGroup->advertiserId = 'dolore';
    $request->floodlightActivityGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->advertiserIdDimensionValue->dimensionName = 'soluta';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->etag = 'occaecati';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->id = '0f2e09d1-9d2f-4c2f-9e2e-105944b935d2';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->kind = 'adipisci';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivityGroup->advertiserIdDimensionValue->value = 'id';
    $request->floodlightActivityGroup->floodlightConfigurationId = 'ducimus';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->dimensionName = 'dolores';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->etag = 'asperiores';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->id = '90849d6a-ed4a-4ecb-b537-cd9222c9ff57';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->kind = 'dolore';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->value = 'inventore';
    $request->floodlightActivityGroup->id = 'error';
    $request->floodlightActivityGroup->idDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->idDimensionValue->dimensionName = 'id';
    $request->floodlightActivityGroup->idDimensionValue->etag = 'harum';
    $request->floodlightActivityGroup->idDimensionValue->id = 'fa2e761f-0ca4-4d45-aef1-031e6899f0c2';
    $request->floodlightActivityGroup->idDimensionValue->kind = 'accusantium';
    $request->floodlightActivityGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivityGroup->idDimensionValue->value = 'quasi';
    $request->floodlightActivityGroup->kind = 'saepe';
    $request->floodlightActivityGroup->name = 'Nicole Schinner';
    $request->floodlightActivityGroup->subaccountId = 'exercitationem';
    $request->floodlightActivityGroup->tagString = 'quod';
    $request->floodlightActivityGroup->type = FloodlightActivityGroupTypeEnum::SALE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestias';
    $request->fields = 'modi';
    $request->key = 'similique';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->profileId = 'laudantium';
    $request->quotaUser = 'ut';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'nihil';

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
    $request->accessToken = 'facere';
    $request->advertiserId = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'reiciendis';
    $request->floodlightConfigurationId = 'cumque';
    $request->ids = [
        'explicabo',
        'sit',
        'eligendi',
    ];
    $request->key = 'commodi';
    $request->maxResults = 317166;
    $request->oauthToken = 'harum';
    $request->pageToken = 'aut';
    $request->prettyPrint = false;
    $request->profileId = 'consectetur';
    $request->quotaUser = 'in';
    $request->searchString = 'rerum';
    $request->sortField = DfareportingFloodlightActivityGroupsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingFloodlightActivityGroupsListSortOrderEnum::DESCENDING;
    $request->type = DfareportingFloodlightActivityGroupsListTypeEnum::SALE;
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'optio';

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
    $request->floodlightActivityGroup->accountId = 'corrupti';
    $request->floodlightActivityGroup->advertiserId = 'quas';
    $request->floodlightActivityGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->advertiserIdDimensionValue->dimensionName = 'ullam';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->etag = 'veritatis';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->id = '87e4de04-af28-4c5d-9db4-6aa1cfd6d828';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->kind = 'assumenda';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivityGroup->advertiserIdDimensionValue->value = 'ipsa';
    $request->floodlightActivityGroup->floodlightConfigurationId = 'inventore';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->dimensionName = 'nesciunt';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->etag = 'et';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->id = '91129646-645c-41d8-9f29-042f569b7aff';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->kind = 'consequatur';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->value = 'dolorum';
    $request->floodlightActivityGroup->id = 'fugit';
    $request->floodlightActivityGroup->idDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->idDimensionValue->dimensionName = 'eos';
    $request->floodlightActivityGroup->idDimensionValue->etag = 'veritatis';
    $request->floodlightActivityGroup->idDimensionValue->id = '6cbe071b-c163-4e27-9a3b-084da99257d0';
    $request->floodlightActivityGroup->idDimensionValue->kind = 'incidunt';
    $request->floodlightActivityGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivityGroup->idDimensionValue->value = 'eius';
    $request->floodlightActivityGroup->kind = 'ipsa';
    $request->floodlightActivityGroup->name = 'Troy Kris';
    $request->floodlightActivityGroup->subaccountId = 'numquam';
    $request->floodlightActivityGroup->tagString = 'quia';
    $request->floodlightActivityGroup->type = FloodlightActivityGroupTypeEnum::SALE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eius';
    $request->fields = 'cupiditate';
    $request->id = '6cbdeecf-6b99-4bc6-b562-ebfdf55c294c';
    $request->key = 'eaque';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->profileId = 'consequatur';
    $request->quotaUser = 'nobis';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ea';

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
    $request->floodlightActivityGroup->accountId = 'et';
    $request->floodlightActivityGroup->advertiserId = 'fugit';
    $request->floodlightActivityGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->advertiserIdDimensionValue->dimensionName = 'quos';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->etag = 'molestiae';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->id = '764eef6d-0c6d-46ed-9c73-dd634571509a';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->kind = 'blanditiis';
    $request->floodlightActivityGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivityGroup->advertiserIdDimensionValue->value = 'deleniti';
    $request->floodlightActivityGroup->floodlightConfigurationId = 'dignissimos';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->dimensionName = 'doloremque';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->etag = 'quibusdam';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->id = '3c5a1f9c-242c-47b6-aa1f-30c73df5b671';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->kind = 'excepturi';
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivityGroup->floodlightConfigurationIdDimensionValue->value = 'iste';
    $request->floodlightActivityGroup->id = 'eaque';
    $request->floodlightActivityGroup->idDimensionValue = new DimensionValue();
    $request->floodlightActivityGroup->idDimensionValue->dimensionName = 'reiciendis';
    $request->floodlightActivityGroup->idDimensionValue->etag = 'magnam';
    $request->floodlightActivityGroup->idDimensionValue->id = '2a4bb438-d85b-4260-991d-745e3c2059c9';
    $request->floodlightActivityGroup->idDimensionValue->kind = 'porro';
    $request->floodlightActivityGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivityGroup->idDimensionValue->value = 'maiores';
    $request->floodlightActivityGroup->kind = 'veniam';
    $request->floodlightActivityGroup->name = 'Dr. Joy Torphy';
    $request->floodlightActivityGroup->subaccountId = 'corporis';
    $request->floodlightActivityGroup->tagString = 'consequuntur';
    $request->floodlightActivityGroup->type = FloodlightActivityGroupTypeEnum::COUNTER;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'beatae';
    $request->key = 'repellendus';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->profileId = 'consequuntur';
    $request->quotaUser = 'delectus';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'possimus';

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
