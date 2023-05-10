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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'explicabo';
    $request->id = '33f95c9d-2373-497c-b85b-5db4f500183f';
    $request->key = 'accusamus';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->profileId = 'vero';
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'voluptate';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->remarketingList = new RemarketingList();
    $request->remarketingList->accountId = 'nobis';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'reprehenderit';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'consequuntur';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'accusantium';
    $request->remarketingList->advertiserIdDimensionValue->id = '6dab7500-52a5-4647-adc4-39ed8c4320f4';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'quae';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->remarketingList->advertiserIdDimensionValue->value = 'eius';
    $request->remarketingList->description = 'voluptatem';
    $request->remarketingList->id = 'temporibus';
    $request->remarketingList->kind = 'aliquam';
    $request->remarketingList->lifeSpan = 'incidunt';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'totam';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'iusto';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
        new ListPopulationClause(),
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'porro';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_DFA;
    $request->remarketingList->name = 'Tony Ratke';
    $request->remarketingList->subaccountId = 'nobis';
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'fugiat';
    $request->key = 'magni';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->profileId = 'atque';
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'odio';

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
    $request->accessToken = 'ad';
    $request->active = false;
    $request->advertiserId = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'aspernatur';
    $request->floodlightActivityId = 'asperiores';
    $request->key = 'maxime';
    $request->maxResults = 294102;
    $request->name = 'Dana Howell';
    $request->oauthToken = 'tenetur';
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->profileId = 'iste';
    $request->quotaUser = 'animi';
    $request->sortField = DfareportingRemarketingListsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingRemarketingListsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'pariatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->remarketingList = new RemarketingList();
    $request->remarketingList->accountId = 'inventore';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'odit';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'labore';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'perspiciatis';
    $request->remarketingList->advertiserIdDimensionValue->id = '450819d7-c3b1-4b41-8440-60e00310d023';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'repellendus';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->remarketingList->advertiserIdDimensionValue->value = 'error';
    $request->remarketingList->description = 'ipsa';
    $request->remarketingList->id = 'beatae';
    $request->remarketingList->kind = 'doloribus';
    $request->remarketingList->lifeSpan = 'veniam';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'animi';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'delectus';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
        new ListPopulationClause(),
        new ListPopulationClause(),
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'eos';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_DBM;
    $request->remarketingList->name = 'Roxanne Hackett';
    $request->remarketingList->subaccountId = 'numquam';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'itaque';
    $request->fields = 'molestias';
    $request->id = 'd89253c8-962f-4489-abf5-1e4652d3c343';
    $request->key = 'at';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->profileId = 'quae';
    $request->quotaUser = 'quam';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'atque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->remarketingList = new RemarketingList();
    $request->remarketingList->accountId = 'earum';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'quaerat';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'excepturi';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'ab';
    $request->remarketingList->advertiserIdDimensionValue->id = '247725e6-2190-49e9-9044-a5de59ac7706';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'ea';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->remarketingList->advertiserIdDimensionValue->value = 'voluptatem';
    $request->remarketingList->description = 'quisquam';
    $request->remarketingList->id = 'delectus';
    $request->remarketingList->kind = 'et';
    $request->remarketingList->lifeSpan = 'optio';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'a';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'quis';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
        new ListPopulationClause(),
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'consectetur';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_DFP;
    $request->remarketingList->name = 'Mrs. Laura Halvorson DVM';
    $request->remarketingList->subaccountId = 'ex';
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'non';
    $request->key = 'quia';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->profileId = 'deleniti';
    $request->quotaUser = 'molestias';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'facere';

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
