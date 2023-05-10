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
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'earum';
    $request->fields = 'tenetur';
    $request->id = 'd455906d-1263-4d48-a935-c2c9e81f30be';
    $request->key = 'sequi';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->profileId = 'labore';
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'aperiam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeGroup = new CreativeGroup();
    $request->creativeGroup->accountId = 'illum';
    $request->creativeGroup->advertiserId = 'iusto';
    $request->creativeGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeGroup->advertiserIdDimensionValue->dimensionName = 'magni';
    $request->creativeGroup->advertiserIdDimensionValue->etag = 'beatae';
    $request->creativeGroup->advertiserIdDimensionValue->id = '65765066-4187-40d9-921f-9ad030c4ecc1';
    $request->creativeGroup->advertiserIdDimensionValue->kind = 'beatae';
    $request->creativeGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->creativeGroup->advertiserIdDimensionValue->value = 'consequatur';
    $request->creativeGroup->groupNumber = 551576;
    $request->creativeGroup->id = 'ratione';
    $request->creativeGroup->kind = 'iure';
    $request->creativeGroup->name = 'Mrs. Julia Morissette';
    $request->creativeGroup->subaccountId = 'facilis';
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aut';
    $request->fields = 'quia';
    $request->key = 'officia';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->profileId = 'corporis';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'sapiente';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'neque';
    $request->advertiserIds = [
        'quisquam',
        'praesentium',
        'tempora',
    ];
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->fields = 'sequi';
    $request->groupNumber = 165545;
    $request->ids = [
        'est',
    ];
    $request->key = 'amet';
    $request->maxResults = 84211;
    $request->oauthToken = 'error';
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->profileId = 'numquam';
    $request->quotaUser = 'rerum';
    $request->searchString = 'dolorum';
    $request->sortField = DfareportingCreativeGroupsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingCreativeGroupsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'numquam';

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
    $request->creativeGroup->accountId = 'impedit';
    $request->creativeGroup->advertiserId = 'error';
    $request->creativeGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeGroup->advertiserIdDimensionValue->dimensionName = 'animi';
    $request->creativeGroup->advertiserIdDimensionValue->etag = 'voluptatum';
    $request->creativeGroup->advertiserIdDimensionValue->id = '67bc4242-6665-4816-9dca-8ef51fcb4c59';
    $request->creativeGroup->advertiserIdDimensionValue->kind = 'ipsum';
    $request->creativeGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creativeGroup->advertiserIdDimensionValue->value = 'quisquam';
    $request->creativeGroup->groupNumber = 97922;
    $request->creativeGroup->id = 'fugit';
    $request->creativeGroup->kind = 'quo';
    $request->creativeGroup->name = 'Shaun Olson PhD';
    $request->creativeGroup->subaccountId = 'placeat';
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'delectus';
    $request->fields = 'saepe';
    $request->id = 'dbd80df4-48a4-47f9-b90c-58880983dabf';
    $request->key = 'error';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->profileId = 'a';
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'voluptatibus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creativeGroup = new CreativeGroup();
    $request->creativeGroup->accountId = 'repellendus';
    $request->creativeGroup->advertiserId = 'omnis';
    $request->creativeGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeGroup->advertiserIdDimensionValue->dimensionName = 'delectus';
    $request->creativeGroup->advertiserIdDimensionValue->etag = 'odio';
    $request->creativeGroup->advertiserIdDimensionValue->id = 'f079af4d-3572-44cd-b0f4-d281187d5684';
    $request->creativeGroup->advertiserIdDimensionValue->kind = 'magnam';
    $request->creativeGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creativeGroup->advertiserIdDimensionValue->value = 'nulla';
    $request->creativeGroup->groupNumber = 921127;
    $request->creativeGroup->id = 'quibusdam';
    $request->creativeGroup->kind = 'praesentium';
    $request->creativeGroup->name = 'Ms. Madeline Miller';
    $request->creativeGroup->subaccountId = 'eveniet';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'quidem';
    $request->key = 'illum';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->profileId = 'placeat';
    $request->quotaUser = 'dolores';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'nesciunt';

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
