# remarketingLists

### Available Operations

* [dfareportingRemarketingListsGet](#dfareportingremarketinglistsget) - Gets one remarketing list by ID.
* [dfareportingRemarketingListsInsert](#dfareportingremarketinglistsinsert) - Inserts a new remarketing list.
* [dfareportingRemarketingListsList](#dfareportingremarketinglistslist) - Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
* [dfareportingRemarketingListsPatch](#dfareportingremarketinglistspatch) - Updates an existing remarketing list. This method supports patch semantics.
* [dfareportingRemarketingListsUpdate](#dfareportingremarketinglistsupdate) - Updates an existing remarketing list.

## dfareportingRemarketingListsGet

Gets one remarketing list by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingRemarketingListsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'odit';
    $request->id = 'b7a7ab03-44b1-4710-a88d-eebef897f3dd';
    $request->key = 'voluptatem';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->profileId = 'minus';
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new DfareportingRemarketingListsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->remarketingLists->dfareportingRemarketingListsGet($request, $requestSecurity);

    if ($response->remarketingList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingRemarketingListsInsert

Inserts a new remarketing list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemarketingList;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationRule;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationClause;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationTerm;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationTermOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationTermTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemarketingListListSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingRemarketingListsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->remarketingList = new RemarketingList();
    $request->remarketingList->accountId = 'quasi';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'dicta';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'rerum';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'neque';
    $request->remarketingList->advertiserIdDimensionValue->id = 'e4e080aa-1041-486e-8759-e02f3702c5c8';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'recusandae';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->remarketingList->advertiserIdDimensionValue->value = 'fugiat';
    $request->remarketingList->description = 'sequi';
    $request->remarketingList->id = 'consequatur';
    $request->remarketingList->kind = 'voluptates';
    $request->remarketingList->lifeSpan = 'culpa';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'at';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'dolorem';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'ipsa';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_XFP;
    $request->remarketingList->name = 'Trevor Grimes';
    $request->remarketingList->subaccountId = 'alias';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'sequi';
    $request->key = 'ducimus';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->profileId = 'libero';
    $request->quotaUser = 'ut';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new DfareportingRemarketingListsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->remarketingLists->dfareportingRemarketingListsInsert($request, $requestSecurity);

    if ($response->remarketingList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingRemarketingListsList

Retrieves a list of remarketing lists, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingRemarketingListsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aspernatur';
    $request->active = false;
    $request->advertiserId = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'et';
    $request->fields = 'reiciendis';
    $request->floodlightActivityId = 'nulla';
    $request->key = 'libero';
    $request->maxResults = 153639;
    $request->name = 'Andre Marquardt';
    $request->oauthToken = 'unde';
    $request->pageToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->profileId = 'laboriosam';
    $request->quotaUser = 'iusto';
    $request->sortField = DfareportingRemarketingListsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingRemarketingListsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new DfareportingRemarketingListsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->remarketingLists->dfareportingRemarketingListsList($request, $requestSecurity);

    if ($response->remarketingListsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingRemarketingListsPatch

Updates an existing remarketing list. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemarketingList;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationRule;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationClause;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationTerm;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationTermOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationTermTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemarketingListListSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingRemarketingListsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->remarketingList = new RemarketingList();
    $request->remarketingList->accountId = 'voluptatum';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'pariatur';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'sequi';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'quo';
    $request->remarketingList->advertiserIdDimensionValue->id = 'd4258d03-58a8-42c8-88fe-2751a2047c04';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'numquam';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->remarketingList->advertiserIdDimensionValue->value = 'repudiandae';
    $request->remarketingList->description = 'inventore';
    $request->remarketingList->id = 'quaerat';
    $request->remarketingList->kind = 'nesciunt';
    $request->remarketingList->lifeSpan = 'hic';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'natus';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'laboriosam';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'excepturi';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_DBM;
    $request->remarketingList->name = 'Harvey Skiles PhD';
    $request->remarketingList->subaccountId = 'corporis';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'voluptatibus';
    $request->id = 'a436e625-9233-4f95-89d2-37397c785b5d';
    $request->key = 'tempore';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->profileId = 'maiores';
    $request->quotaUser = 'quis';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatem';

    $requestSecurity = new DfareportingRemarketingListsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->remarketingLists->dfareportingRemarketingListsPatch($request, $requestSecurity);

    if ($response->remarketingList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingRemarketingListsUpdate

Updates an existing remarketing list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemarketingList;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationRule;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationClause;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationTerm;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationTermOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListPopulationTermTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemarketingListListSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingRemarketingListsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->remarketingList = new RemarketingList();
    $request->remarketingList->accountId = 'quos';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'adipisci';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'reiciendis';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'accusamus';
    $request->remarketingList->advertiserIdDimensionValue->id = 'bdf676b7-206d-4ab7-9005-2a5647edc439';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'saepe';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->remarketingList->advertiserIdDimensionValue->value = 'corrupti';
    $request->remarketingList->description = 'maxime';
    $request->remarketingList->id = 'aliquam';
    $request->remarketingList->kind = 'adipisci';
    $request->remarketingList->lifeSpan = 'explicabo';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'eaque';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'hic';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'quae';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_ADX;
    $request->remarketingList->name = 'Betty Smitham';
    $request->remarketingList->subaccountId = 'totam';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'voluptas';
    $request->key = 'provident';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->profileId = 'expedita';
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new DfareportingRemarketingListsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->remarketingLists->dfareportingRemarketingListsUpdate($request, $requestSecurity);

    if ($response->remarketingList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
