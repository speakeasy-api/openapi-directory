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
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'sit';
    $request->id = '688deebe-f897-4f3d-90cc-d33f11b3e4e0';
    $request->key = 'voluptatum';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->profileId = 'officia';
    $request->quotaUser = 'officia';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'ipsa';

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
    $request->remarketingList->accountId = 'architecto';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'deleniti';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'eum';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'accusamus';
    $request->remarketingList->advertiserIdDimensionValue->id = 'c759e02f-3702-4c5c-8e2d-30ead3104fa4';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'eius';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->remarketingList->advertiserIdDimensionValue->value = 'alias';
    $request->remarketingList->description = 'molestiae';
    $request->remarketingList->id = 'rerum';
    $request->remarketingList->kind = 'voluptatibus';
    $request->remarketingList->lifeSpan = 'sequi';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'ducimus';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'minima';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
        new ListPopulationClause(),
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'ut';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_DFP;
    $request->remarketingList->name = 'Tracey Collins';
    $request->remarketingList->subaccountId = 'et';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'sed';
    $request->key = 'hic';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->profileId = 'sint';
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'unde';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laboriosam';
    $request->active = false;
    $request->advertiserId = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'ab';
    $request->floodlightActivityId = 'quo';
    $request->key = 'optio';
    $request->maxResults = 528440;
    $request->name = 'Earl Sanford';
    $request->oauthToken = 'fugit';
    $request->pageToken = 'quis';
    $request->prettyPrint = false;
    $request->profileId = 'voluptatum';
    $request->quotaUser = 'temporibus';
    $request->sortField = DfareportingRemarketingListsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingRemarketingListsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'deleniti';

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
    $request->remarketingList->accountId = 'quas';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'odit';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'placeat';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'rem';
    $request->remarketingList->advertiserIdDimensionValue->id = '08fe2751-a204-47c0-849e-143f9619bb7d';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'incidunt';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->remarketingList->advertiserIdDimensionValue->value = 'vero';
    $request->remarketingList->description = 'corporis';
    $request->remarketingList->id = 'laborum';
    $request->remarketingList->kind = 'quae';
    $request->remarketingList->lifeSpan = 'quae';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'voluptatibus';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'est';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'nesciunt';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_DFA;
    $request->remarketingList->name = 'Edgar Cremin';
    $request->remarketingList->subaccountId = 'explicabo';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'hic';
    $request->fields = 'natus';
    $request->id = '5c9d2373-97c7-485b-9db4-f500183febdf';
    $request->key = 'ea';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->profileId = 'aliquid';
    $request->quotaUser = 'nobis';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'consequuntur';

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
    $request->remarketingList->accountId = 'autem';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'pariatur';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'deserunt';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'facilis';
    $request->remarketingList->advertiserIdDimensionValue->id = '750052a5-647e-4dc4-b9ed-8c4320f41240';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'temporibus';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->remarketingList->advertiserIdDimensionValue->value = 'incidunt';
    $request->remarketingList->description = 'totam';
    $request->remarketingList->id = 'iusto';
    $request->remarketingList->kind = 'mollitia';
    $request->remarketingList->lifeSpan = 'porro';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'voluptas';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'provident';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'expedita';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_YOUTUBE;
    $request->remarketingList->name = 'Vicky Donnelly';
    $request->remarketingList->subaccountId = 'fugiat';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->fields = 'blanditiis';
    $request->key = 'quibusdam';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->profileId = 'unde';
    $request->quotaUser = 'ad';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'fuga';

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
