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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'rem';
    $request->id = 'e935c2c9-e81f-430b-a3e4-3202d7216576';
    $request->key = 'minima';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->profileId = 'vel';
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'quasi';

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
    $request->creativeGroup->accountId = 'dignissimos';
    $request->creativeGroup->advertiserId = 'doloremque';
    $request->creativeGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeGroup->advertiserIdDimensionValue->dimensionName = 'assumenda';
    $request->creativeGroup->advertiserIdDimensionValue->etag = 'provident';
    $request->creativeGroup->advertiserIdDimensionValue->id = 'd21f9ad0-30c4-4ecc-91a0-836429068b85';
    $request->creativeGroup->advertiserIdDimensionValue->kind = 'aut';
    $request->creativeGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->creativeGroup->advertiserIdDimensionValue->value = 'officia';
    $request->creativeGroup->groupNumber = 312690;
    $request->creativeGroup->id = 'corporis';
    $request->creativeGroup->kind = 'accusamus';
    $request->creativeGroup->name = 'Miranda Koelpin';
    $request->creativeGroup->subaccountId = 'quisquam';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'officiis';
    $request->key = 'sequi';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->profileId = 'voluptatem';
    $request->quotaUser = 'est';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'veritatis';

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
    $request->accessToken = 'voluptatibus';
    $request->advertiserIds = [
        'rerum',
        'dolorum',
    ];
    $request->alt = AltEnum::PROTO;
    $request->callback = 'earum';
    $request->fields = 'excepturi';
    $request->groupNumber = 256567;
    $request->ids = [
        'impedit',
        'error',
    ];
    $request->key = 'animi';
    $request->maxResults = 528742;
    $request->oauthToken = 'aliquid';
    $request->pageToken = 'nihil';
    $request->prettyPrint = false;
    $request->profileId = 'facilis';
    $request->quotaUser = 'optio';
    $request->searchString = 'incidunt';
    $request->sortField = DfareportingCreativeGroupsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingCreativeGroupsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'aliquid';

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
    $request->creativeGroup->accountId = 'vel';
    $request->creativeGroup->advertiserId = 'ad';
    $request->creativeGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeGroup->advertiserIdDimensionValue->dimensionName = 'quos';
    $request->creativeGroup->advertiserIdDimensionValue->etag = 'illo';
    $request->creativeGroup->advertiserIdDimensionValue->id = '6ddca8ef-51fc-4b4c-993e-c12cdaad0ec7';
    $request->creativeGroup->advertiserIdDimensionValue->kind = 'similique';
    $request->creativeGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creativeGroup->advertiserIdDimensionValue->value = 'saepe';
    $request->creativeGroup->groupNumber = 813975;
    $request->creativeGroup->id = 'nobis';
    $request->creativeGroup->kind = 'at';
    $request->creativeGroup->name = 'Richard Smith';
    $request->creativeGroup->subaccountId = 'numquam';
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'esse';
    $request->id = 'f9390c58-8809-483d-abf9-ef3ffdd9f7f0';
    $request->key = 'quam';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->profileId = 'similique';
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'facere';

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
    $request->creativeGroup->accountId = 'quis';
    $request->creativeGroup->advertiserId = 'in';
    $request->creativeGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeGroup->advertiserIdDimensionValue->dimensionName = 'sed';
    $request->creativeGroup->advertiserIdDimensionValue->etag = 'non';
    $request->creativeGroup->advertiserIdDimensionValue->id = 'cdb0f4d2-8118-47d5-a844-eded85a9065e';
    $request->creativeGroup->advertiserIdDimensionValue->kind = 'laboriosam';
    $request->creativeGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->creativeGroup->advertiserIdDimensionValue->value = 'blanditiis';
    $request->creativeGroup->groupNumber = 697729;
    $request->creativeGroup->id = 'illum';
    $request->creativeGroup->kind = 'reiciendis';
    $request->creativeGroup->name = 'Todd Altenwerth';
    $request->creativeGroup->subaccountId = 'quidem';
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'dignissimos';
    $request->key = 'omnis';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->profileId = 'fugit';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestiae';

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
