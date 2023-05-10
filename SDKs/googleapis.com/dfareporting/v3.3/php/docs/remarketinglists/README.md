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
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'occaecati';
    $request->id = '6bb0c69e-372d-4b13-84ba-9f78a5c0ed7a';
    $request->key = 'officia';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->profileId = 'suscipit';
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'unde';

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
    $request->remarketingList->accountId = 'aspernatur';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'ea';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'architecto';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'earum';
    $request->remarketingList->advertiserIdDimensionValue->id = 'b0c58d27-b519-496b-9b4b-50eef712b7a7';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'similique';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->remarketingList->advertiserIdDimensionValue->value = 'voluptatem';
    $request->remarketingList->description = 'adipisci';
    $request->remarketingList->id = 'tempora';
    $request->remarketingList->kind = 'modi';
    $request->remarketingList->lifeSpan = 'soluta';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'inventore';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'ducimus';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'sit';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_DFA;
    $request->remarketingList->name = 'Alfredo Stanton';
    $request->remarketingList->subaccountId = 'facilis';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rem';
    $request->fields = 'perspiciatis';
    $request->key = 'quam';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->profileId = 'velit';
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'voluptatem';

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
    $request->accessToken = 'minus';
    $request->active = false;
    $request->advertiserId = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'amet';
    $request->fields = 'tenetur';
    $request->floodlightActivityId = 'quasi';
    $request->key = 'dicta';
    $request->maxResults = 698445;
    $request->name = 'Alexis Gutmann IV';
    $request->oauthToken = 'aut';
    $request->pageToken = 'officia';
    $request->prettyPrint = false;
    $request->profileId = 'officia';
    $request->quotaUser = 'vitae';
    $request->sortField = DfareportingRemarketingListsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingRemarketingListsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'architecto';
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->remarketingList = new RemarketingList();
    $request->remarketingList->accountId = 'accusamus';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'optio';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'odio';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'ullam';
    $request->remarketingList->advertiserIdDimensionValue->id = '9e02f370-2c5c-48e2-930e-ad3104fa4470';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'molestiae';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->remarketingList->advertiserIdDimensionValue->value = 'voluptatibus';
    $request->remarketingList->description = 'sequi';
    $request->remarketingList->id = 'ducimus';
    $request->remarketingList->kind = 'minima';
    $request->remarketingList->lifeSpan = 'libero';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'ut';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'tempora';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'quas';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_ADX;
    $request->remarketingList->name = 'Billy Bosco';
    $request->remarketingList->subaccountId = 'libero';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'sint';
    $request->id = 'e59267c7-1cc8-4d3c-9425-8d0358a82c80';
    $request->key = 'atque';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->profileId = 'eveniet';
    $request->quotaUser = 'odit';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'ullam';

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
    $request->remarketingList->accountId = 'laborum';
    $request->remarketingList->active = false;
    $request->remarketingList->advertiserId = 'fugit';
    $request->remarketingList->advertiserIdDimensionValue = new DimensionValue();
    $request->remarketingList->advertiserIdDimensionValue->dimensionName = 'perferendis';
    $request->remarketingList->advertiserIdDimensionValue->etag = 'incidunt';
    $request->remarketingList->advertiserIdDimensionValue->id = '7c0449e1-43f9-4619-bb7d-40d5a11fa436';
    $request->remarketingList->advertiserIdDimensionValue->kind = 'repudiandae';
    $request->remarketingList->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->remarketingList->advertiserIdDimensionValue->value = 'sed';
    $request->remarketingList->description = 'exercitationem';
    $request->remarketingList->id = 'natus';
    $request->remarketingList->kind = 'explicabo';
    $request->remarketingList->lifeSpan = 'velit';
    $request->remarketingList->listPopulationRule = new ListPopulationRule();
    $request->remarketingList->listPopulationRule->floodlightActivityId = 'adipisci';
    $request->remarketingList->listPopulationRule->floodlightActivityName = 'hic';
    $request->remarketingList->listPopulationRule->listPopulationClauses = [
        new ListPopulationClause(),
        new ListPopulationClause(),
        new ListPopulationClause(),
    ];
    $request->remarketingList->listSize = 'minima';
    $request->remarketingList->listSource = RemarketingListListSourceEnum::REMARKETING_LIST_SOURCE_GPLUS;
    $request->remarketingList->name = 'Taylor Christiansen';
    $request->remarketingList->subaccountId = 'ratione';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'iusto';
    $request->key = 'quas';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->profileId = 'facilis';
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'tempore';

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
