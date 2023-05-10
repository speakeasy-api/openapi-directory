# creativeGroups

### Available Operations

* [dfareportingCreativeGroupsGet](#dfareportingcreativegroupsget) - Gets one creative group by ID.
* [dfareportingCreativeGroupsInsert](#dfareportingcreativegroupsinsert) - Inserts a new creative group.
* [dfareportingCreativeGroupsList](#dfareportingcreativegroupslist) - Retrieves a list of creative groups, possibly filtered. This method supports paging.
* [dfareportingCreativeGroupsPatch](#dfareportingcreativegroupspatch) - Updates an existing creative group. This method supports patch semantics.
* [dfareportingCreativeGroupsUpdate](#dfareportingcreativegroupsupdate) - Updates an existing creative group.

## dfareportingCreativeGroupsGet

Gets one creative group by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quibusdam';
    $request->fields = 'ipsa';
    $request->id = 'ec7afedb-d80d-4f44-8a47-f9390c588809';
    $request->key = 'quas';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->profileId = 'vero';
    $request->quotaUser = 'fuga';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new DfareportingCreativeGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeGroups->dfareportingCreativeGroupsGet($request, $requestSecurity);

    if ($response->creativeGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeGroupsInsert

Inserts a new creative group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeGroup;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creativeGroup = new CreativeGroup();
    $request->creativeGroup->accountId = 'recusandae';
    $request->creativeGroup->advertiserId = 'a';
    $request->creativeGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeGroup->advertiserIdDimensionValue->dimensionName = 'consectetur';
    $request->creativeGroup->advertiserIdDimensionValue->etag = 'sapiente';
    $request->creativeGroup->advertiserIdDimensionValue->id = 'fdd9f7f0-79af-44d3-9724-cdb0f4d28118';
    $request->creativeGroup->advertiserIdDimensionValue->kind = 'iusto';
    $request->creativeGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creativeGroup->advertiserIdDimensionValue->value = 'enim';
    $request->creativeGroup->groupNumber = 435713;
    $request->creativeGroup->id = 'laudantium';
    $request->creativeGroup->kind = 'modi';
    $request->creativeGroup->name = 'Eloise Stoltenberg';
    $request->creativeGroup->subaccountId = 'praesentium';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'unde';
    $request->fields = 'quae';
    $request->key = 'eum';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->profileId = 'eveniet';
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new DfareportingCreativeGroupsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeGroups->dfareportingCreativeGroupsInsert($request, $requestSecurity);

    if ($response->creativeGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeGroupsList

Retrieves a list of creative groups, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->advertiserIds = [
        'placeat',
        'dolores',
        'consequatur',
        'nesciunt',
    ];
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'voluptas';
    $request->groupNumber = 779154;
    $request->ids = [
        'dignissimos',
        'omnis',
        'omnis',
    ];
    $request->key = 'fugit';
    $request->maxResults = 212682;
    $request->oauthToken = 'quidem';
    $request->pageToken = 'molestiae';
    $request->prettyPrint = false;
    $request->profileId = 'debitis';
    $request->quotaUser = 'vitae';
    $request->searchString = 'dolor';
    $request->sortField = DfareportingCreativeGroupsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingCreativeGroupsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'asperiores';

    $requestSecurity = new DfareportingCreativeGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeGroups->dfareportingCreativeGroupsList($request, $requestSecurity);

    if ($response->creativeGroupsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeGroupsPatch

Updates an existing creative group. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeGroup;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeGroupsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeGroup = new CreativeGroup();
    $request->creativeGroup->accountId = 'deserunt';
    $request->creativeGroup->advertiserId = 'itaque';
    $request->creativeGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeGroup->advertiserIdDimensionValue->dimensionName = 'et';
    $request->creativeGroup->advertiserIdDimensionValue->etag = 'eos';
    $request->creativeGroup->advertiserIdDimensionValue->id = 'c6891f82-ce11-4571-b230-5377dcfa89df';
    $request->creativeGroup->advertiserIdDimensionValue->kind = 'omnis';
    $request->creativeGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creativeGroup->advertiserIdDimensionValue->value = 'exercitationem';
    $request->creativeGroup->groupNumber = 915145;
    $request->creativeGroup->id = 'sequi';
    $request->creativeGroup->kind = 'quis';
    $request->creativeGroup->name = 'Kristin Ledner V';
    $request->creativeGroup->subaccountId = 'fugit';
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cumque';
    $request->fields = 'dolor';
    $request->id = 'ddc5f111-dea1-4026-9541-a4d190feb217';
    $request->key = 'quas';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->profileId = 'distinctio';
    $request->quotaUser = 'placeat';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new DfareportingCreativeGroupsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeGroups->dfareportingCreativeGroupsPatch($request, $requestSecurity);

    if ($response->creativeGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeGroupsUpdate

Updates an existing creative group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeGroup;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeGroupsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeGroup = new CreativeGroup();
    $request->creativeGroup->accountId = 'possimus';
    $request->creativeGroup->advertiserId = 'distinctio';
    $request->creativeGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeGroup->advertiserIdDimensionValue->dimensionName = 'distinctio';
    $request->creativeGroup->advertiserIdDimensionValue->etag = 'assumenda';
    $request->creativeGroup->advertiserIdDimensionValue->id = 'db484708-fb4e-4391-a6bc-158c4c4e5459';
    $request->creativeGroup->advertiserIdDimensionValue->kind = 'occaecati';
    $request->creativeGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creativeGroup->advertiserIdDimensionValue->value = 'fuga';
    $request->creativeGroup->groupNumber = 234845;
    $request->creativeGroup->id = 'modi';
    $request->creativeGroup->kind = 'aspernatur';
    $request->creativeGroup->name = 'Jeanette Beer';
    $request->creativeGroup->subaccountId = 'nobis';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'impedit';
    $request->key = 'recusandae';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->profileId = 'deleniti';
    $request->quotaUser = 'est';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'expedita';

    $requestSecurity = new DfareportingCreativeGroupsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeGroups->dfareportingCreativeGroupsUpdate($request, $requestSecurity);

    if ($response->creativeGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
