# placementGroups

### Available Operations

* [dfareportingPlacementGroupsGet](#dfareportingplacementgroupsget) - Gets one placement group by ID.
* [dfareportingPlacementGroupsInsert](#dfareportingplacementgroupsinsert) - Inserts a new placement group.
* [dfareportingPlacementGroupsList](#dfareportingplacementgroupslist) - Retrieves a list of placement groups, possibly filtered. This method supports paging.
* [dfareportingPlacementGroupsPatch](#dfareportingplacementgroupspatch) - Updates an existing placement group. This method supports patch semantics.
* [dfareportingPlacementGroupsUpdate](#dfareportingplacementgroupsupdate) - Updates an existing placement group.

## dfareportingPlacementGroupsGet

Gets one placement group by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perspiciatis';
    $request->fields = 'accusantium';
    $request->id = 'f957f385-189a-4d7e-b807-aae03f33ca79';
    $request->key = 'asperiores';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->profileId = 'provident';
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DfareportingPlacementGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementGroups->dfareportingPlacementGroupsGet($request, $requestSecurity);

    if ($response->placementGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementGroupsInsert

Inserts a new placement group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroup;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroupActiveStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroupPlacementGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedule;
use \OpenAPI\OpenAPI\Models\Shared\PricingScheduleCapCostOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingPeriod;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->placementGroup = new PlacementGroup();
    $request->placementGroup->accountId = 'neque';
    $request->placementGroup->activeStatus = PlacementGroupActiveStatusEnum::PLACEMENT_STATUS_UNKNOWN;
    $request->placementGroup->advertiserId = 'soluta';
    $request->placementGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->placementGroup->advertiserIdDimensionValue->dimensionName = 'fuga';
    $request->placementGroup->advertiserIdDimensionValue->etag = 'qui';
    $request->placementGroup->advertiserIdDimensionValue->id = '6fd368ba-9216-4bcb-8158-35c736417231';
    $request->placementGroup->advertiserIdDimensionValue->kind = 'amet';
    $request->placementGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->advertiserIdDimensionValue->value = 'recusandae';
    $request->placementGroup->campaignId = 'fugiat';
    $request->placementGroup->campaignIdDimensionValue = new DimensionValue();
    $request->placementGroup->campaignIdDimensionValue->dimensionName = 'quod';
    $request->placementGroup->campaignIdDimensionValue->etag = 'sit';
    $request->placementGroup->campaignIdDimensionValue->id = '46bc5163-bbca-4492-a7c4-2c22c5535049';
    $request->placementGroup->campaignIdDimensionValue->kind = 'minima';
    $request->placementGroup->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->campaignIdDimensionValue->value = 'quis';
    $request->placementGroup->childPlacementIds = [
        'quidem',
        'harum',
        'adipisci',
        'optio',
    ];
    $request->placementGroup->comment = 'minima';
    $request->placementGroup->contentCategoryId = 'reprehenderit';
    $request->placementGroup->createInfo = new LastModifiedInfo();
    $request->placementGroup->createInfo->time = 'quo';
    $request->placementGroup->directorySiteId = 'vitae';
    $request->placementGroup->directorySiteIdDimensionValue = new DimensionValue();
    $request->placementGroup->directorySiteIdDimensionValue->dimensionName = 'voluptates';
    $request->placementGroup->directorySiteIdDimensionValue->etag = 'tempora';
    $request->placementGroup->directorySiteIdDimensionValue->id = '981e8aa2-57dd-4c19-92eb-de64bfcc5469';
    $request->placementGroup->directorySiteIdDimensionValue->kind = 'nulla';
    $request->placementGroup->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->directorySiteIdDimensionValue->value = 'aut';
    $request->placementGroup->externalId = 'architecto';
    $request->placementGroup->id = 'quis';
    $request->placementGroup->idDimensionValue = new DimensionValue();
    $request->placementGroup->idDimensionValue->dimensionName = 'possimus';
    $request->placementGroup->idDimensionValue->etag = 'reiciendis';
    $request->placementGroup->idDimensionValue->id = 'a796206b-ef2b-40a3-a42c-1aa010e9aac2';
    $request->placementGroup->idDimensionValue->kind = 'necessitatibus';
    $request->placementGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->idDimensionValue->value = 'veritatis';
    $request->placementGroup->kind = 'adipisci';
    $request->placementGroup->lastModifiedInfo = new LastModifiedInfo();
    $request->placementGroup->lastModifiedInfo->time = 'quis';
    $request->placementGroup->name = 'Billie Jast V';
    $request->placementGroup->placementGroupType = PlacementGroupPlacementGroupTypeEnum::PLACEMENT_ROADBLOCK;
    $request->placementGroup->placementStrategyId = 'sint';
    $request->placementGroup->pricingSchedule = new PricingSchedule();
    $request->placementGroup->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_CUMULATIVE;
    $request->placementGroup->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-02-10');
    $request->placementGroup->pricingSchedule->flighted = false;
    $request->placementGroup->pricingSchedule->floodlightActivityId = 'est';
    $request->placementGroup->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placementGroup->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_FLAT_RATE_CLICKS;
    $request->placementGroup->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2020-12-10');
    $request->placementGroup->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-08-02');
    $request->placementGroup->primaryPlacementId = 'nam';
    $request->placementGroup->primaryPlacementIdDimensionValue = new DimensionValue();
    $request->placementGroup->primaryPlacementIdDimensionValue->dimensionName = 'asperiores';
    $request->placementGroup->primaryPlacementIdDimensionValue->etag = 'quam';
    $request->placementGroup->primaryPlacementIdDimensionValue->id = 'd67ca84a-d99b-441d-a124-3531870cf68b';
    $request->placementGroup->primaryPlacementIdDimensionValue->kind = 'eaque';
    $request->placementGroup->primaryPlacementIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->primaryPlacementIdDimensionValue->value = 'fuga';
    $request->placementGroup->siteId = 'assumenda';
    $request->placementGroup->siteIdDimensionValue = new DimensionValue();
    $request->placementGroup->siteIdDimensionValue->dimensionName = 'modi';
    $request->placementGroup->siteIdDimensionValue->etag = 'dolores';
    $request->placementGroup->siteIdDimensionValue->id = '1bd43d1f-0cb0-4a00-83eb-22d9b3a70d94';
    $request->placementGroup->siteIdDimensionValue->kind = 'voluptatibus';
    $request->placementGroup->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->siteIdDimensionValue->value = 'deserunt';
    $request->placementGroup->subaccountId = 'iure';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'corporis';
    $request->key = 'odio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->profileId = 'dicta';
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new DfareportingPlacementGroupsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementGroups->dfareportingPlacementGroupsInsert($request, $requestSecurity);

    if ($response->placementGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementGroupsList

Retrieves a list of placement groups, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListActiveStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListPlacementGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListPricingTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->activeStatus = [
        DfareportingPlacementGroupsListActiveStatusEnum::PLACEMENT_STATUS_ACTIVE,
    ];
    $request->advertiserIds = [
        'repellendus',
    ];
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->campaignIds = [
        'quo',
        'sequi',
        'quo',
        'repudiandae',
    ];
    $request->contentCategoryIds = [
        'praesentium',
    ];
    $request->directorySiteIds = [
        'labore',
        'iusto',
    ];
    $request->fields = 'sunt';
    $request->ids = [
        'occaecati',
        'necessitatibus',
        'necessitatibus',
        'autem',
    ];
    $request->key = 'natus';
    $request->maxEndDate = 'quasi';
    $request->maxResults = 434306;
    $request->maxStartDate = 'ex';
    $request->minEndDate = 'error';
    $request->minStartDate = 'deleniti';
    $request->oauthToken = 'tempore';
    $request->pageToken = 'saepe';
    $request->placementGroupType = DfareportingPlacementGroupsListPlacementGroupTypeEnum::PLACEMENT_PACKAGE;
    $request->placementStrategyIds = [
        'tempora',
        'quaerat',
    ];
    $request->prettyPrint = false;
    $request->pricingTypes = [
        DfareportingPlacementGroupsListPricingTypesEnum::PRICING_TYPE_FLAT_RATE_IMPRESSIONS,
        DfareportingPlacementGroupsListPricingTypesEnum::PRICING_TYPE_FLAT_RATE_CLICKS,
        DfareportingPlacementGroupsListPricingTypesEnum::PRICING_TYPE_FLAT_RATE_IMPRESSIONS,
        DfareportingPlacementGroupsListPricingTypesEnum::PRICING_TYPE_FLAT_RATE_CLICKS,
    ];
    $request->profileId = 'sequi';
    $request->quotaUser = 'laborum';
    $request->searchString = 'fugit';
    $request->siteIds = [
        'dignissimos',
        'corporis',
        'quo',
    ];
    $request->sortField = DfareportingPlacementGroupsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingPlacementGroupsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new DfareportingPlacementGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementGroups->dfareportingPlacementGroupsList($request, $requestSecurity);

    if ($response->placementGroupsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementGroupsPatch

Updates an existing placement group. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroup;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroupActiveStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroupPlacementGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedule;
use \OpenAPI\OpenAPI\Models\Shared\PricingScheduleCapCostOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingPeriod;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementGroupsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placementGroup = new PlacementGroup();
    $request->placementGroup->accountId = 'suscipit';
    $request->placementGroup->activeStatus = PlacementGroupActiveStatusEnum::PLACEMENT_STATUS_UNKNOWN;
    $request->placementGroup->advertiserId = 'nisi';
    $request->placementGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->placementGroup->advertiserIdDimensionValue->dimensionName = 'quibusdam';
    $request->placementGroup->advertiserIdDimensionValue->etag = 'alias';
    $request->placementGroup->advertiserIdDimensionValue->id = '7d2a9c87-ae50-4c16-a61a-1d9136a7e8d5';
    $request->placementGroup->advertiserIdDimensionValue->kind = 'non';
    $request->placementGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->advertiserIdDimensionValue->value = 'et';
    $request->placementGroup->campaignId = 'amet';
    $request->placementGroup->campaignIdDimensionValue = new DimensionValue();
    $request->placementGroup->campaignIdDimensionValue->dimensionName = 'tenetur';
    $request->placementGroup->campaignIdDimensionValue->etag = 'velit';
    $request->placementGroup->campaignIdDimensionValue->id = 'f658752d-b764-4c59-b0a5-6cebcada29ca';
    $request->placementGroup->campaignIdDimensionValue->kind = 'iusto';
    $request->placementGroup->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->campaignIdDimensionValue->value = 'ab';
    $request->placementGroup->childPlacementIds = [
        'et',
        'eligendi',
        'sint',
    ];
    $request->placementGroup->comment = 'ipsam';
    $request->placementGroup->contentCategoryId = 'laboriosam';
    $request->placementGroup->createInfo = new LastModifiedInfo();
    $request->placementGroup->createInfo->time = 'molestiae';
    $request->placementGroup->directorySiteId = 'ab';
    $request->placementGroup->directorySiteIdDimensionValue = new DimensionValue();
    $request->placementGroup->directorySiteIdDimensionValue->dimensionName = 'ex';
    $request->placementGroup->directorySiteIdDimensionValue->etag = 'iure';
    $request->placementGroup->directorySiteIdDimensionValue->id = '3c530b56-6516-43a3-a385-12ab2521b9f2';
    $request->placementGroup->directorySiteIdDimensionValue->kind = 'saepe';
    $request->placementGroup->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->directorySiteIdDimensionValue->value = 'esse';
    $request->placementGroup->externalId = 'consequuntur';
    $request->placementGroup->id = 'aliquam';
    $request->placementGroup->idDimensionValue = new DimensionValue();
    $request->placementGroup->idDimensionValue->dimensionName = 'autem';
    $request->placementGroup->idDimensionValue->etag = 'reprehenderit';
    $request->placementGroup->idDimensionValue->id = 'b8a40bc0-5fab-40d6-90ed-f22a94d20ec9';
    $request->placementGroup->idDimensionValue->kind = 'accusantium';
    $request->placementGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->idDimensionValue->value = 'animi';
    $request->placementGroup->kind = 'aliquam';
    $request->placementGroup->lastModifiedInfo = new LastModifiedInfo();
    $request->placementGroup->lastModifiedInfo->time = 'quasi';
    $request->placementGroup->name = 'Joe Weissnat';
    $request->placementGroup->placementGroupType = PlacementGroupPlacementGroupTypeEnum::PLACEMENT_PACKAGE;
    $request->placementGroup->placementStrategyId = 'saepe';
    $request->placementGroup->pricingSchedule = new PricingSchedule();
    $request->placementGroup->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_MONTHLY;
    $request->placementGroup->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-07');
    $request->placementGroup->pricingSchedule->flighted = false;
    $request->placementGroup->pricingSchedule->floodlightActivityId = 'minima';
    $request->placementGroup->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placementGroup->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPM_ACTIVEVIEW;
    $request->placementGroup->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2020-02-23');
    $request->placementGroup->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-10-09');
    $request->placementGroup->primaryPlacementId = 'voluptatibus';
    $request->placementGroup->primaryPlacementIdDimensionValue = new DimensionValue();
    $request->placementGroup->primaryPlacementIdDimensionValue->dimensionName = 'temporibus';
    $request->placementGroup->primaryPlacementIdDimensionValue->etag = 'tenetur';
    $request->placementGroup->primaryPlacementIdDimensionValue->id = '54fdd5ea-9543-4398-9afb-42a8d63388e4';
    $request->placementGroup->primaryPlacementIdDimensionValue->kind = 'pariatur';
    $request->placementGroup->primaryPlacementIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->primaryPlacementIdDimensionValue->value = 'aut';
    $request->placementGroup->siteId = 'nesciunt';
    $request->placementGroup->siteIdDimensionValue = new DimensionValue();
    $request->placementGroup->siteIdDimensionValue->dimensionName = 'error';
    $request->placementGroup->siteIdDimensionValue->etag = 'necessitatibus';
    $request->placementGroup->siteIdDimensionValue->id = 'a5f9b18a-244f-4d61-9039-dacd38ed0dc6';
    $request->placementGroup->siteIdDimensionValue->kind = 'esse';
    $request->placementGroup->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->siteIdDimensionValue->value = 'temporibus';
    $request->placementGroup->subaccountId = 'optio';
    $request->accessToken = 'quam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'vero';
    $request->id = '3af15920-c90d-41b4-901f-2bd89c8a3263';
    $request->key = 'occaecati';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->profileId = 'similique';
    $request->quotaUser = 'quis';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $requestSecurity = new DfareportingPlacementGroupsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementGroups->dfareportingPlacementGroupsPatch($request, $requestSecurity);

    if ($response->placementGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementGroupsUpdate

Updates an existing placement group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroup;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroupActiveStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroupPlacementGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedule;
use \OpenAPI\OpenAPI\Models\Shared\PricingScheduleCapCostOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingPeriod;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementGroupsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placementGroup = new PlacementGroup();
    $request->placementGroup->accountId = 'nisi';
    $request->placementGroup->activeStatus = PlacementGroupActiveStatusEnum::PLACEMENT_STATUS_ARCHIVED;
    $request->placementGroup->advertiserId = 'eaque';
    $request->placementGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->placementGroup->advertiserIdDimensionValue->dimensionName = 'quia';
    $request->placementGroup->advertiserIdDimensionValue->etag = 'facilis';
    $request->placementGroup->advertiserIdDimensionValue->id = '881a94f6-4366-44a8-b0af-8c691d732d9f';
    $request->placementGroup->advertiserIdDimensionValue->kind = 'libero';
    $request->placementGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->advertiserIdDimensionValue->value = 'tenetur';
    $request->placementGroup->campaignId = 'molestias';
    $request->placementGroup->campaignIdDimensionValue = new DimensionValue();
    $request->placementGroup->campaignIdDimensionValue->dimensionName = 'magnam';
    $request->placementGroup->campaignIdDimensionValue->etag = 'voluptate';
    $request->placementGroup->campaignIdDimensionValue->id = '6a2ae8dc-c50c-48a3-912c-737848930750';
    $request->placementGroup->campaignIdDimensionValue->kind = 'mollitia';
    $request->placementGroup->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->campaignIdDimensionValue->value = 'sit';
    $request->placementGroup->childPlacementIds = [
        'sint',
        'commodi',
        'voluptas',
        'eveniet',
    ];
    $request->placementGroup->comment = 'eligendi';
    $request->placementGroup->contentCategoryId = 'ducimus';
    $request->placementGroup->createInfo = new LastModifiedInfo();
    $request->placementGroup->createInfo->time = 'dolorem';
    $request->placementGroup->directorySiteId = 'eum';
    $request->placementGroup->directorySiteIdDimensionValue = new DimensionValue();
    $request->placementGroup->directorySiteIdDimensionValue->dimensionName = 'possimus';
    $request->placementGroup->directorySiteIdDimensionValue->etag = 'dolore';
    $request->placementGroup->directorySiteIdDimensionValue->id = '3194398c-783c-4923-98ed-3d3ab7ca3c5c';
    $request->placementGroup->directorySiteIdDimensionValue->kind = 'similique';
    $request->placementGroup->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->directorySiteIdDimensionValue->value = 'aliquid';
    $request->placementGroup->externalId = 'aliquam';
    $request->placementGroup->id = 'error';
    $request->placementGroup->idDimensionValue = new DimensionValue();
    $request->placementGroup->idDimensionValue->dimensionName = 'animi';
    $request->placementGroup->idDimensionValue->etag = 'ducimus';
    $request->placementGroup->idDimensionValue->id = '0cfd5d69-89b7-4206-8510-77d19ea83d49';
    $request->placementGroup->idDimensionValue->kind = 'consequuntur';
    $request->placementGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->idDimensionValue->value = 'quibusdam';
    $request->placementGroup->kind = 'inventore';
    $request->placementGroup->lastModifiedInfo = new LastModifiedInfo();
    $request->placementGroup->lastModifiedInfo->time = 'ut';
    $request->placementGroup->name = 'Ross Parker';
    $request->placementGroup->placementGroupType = PlacementGroupPlacementGroupTypeEnum::PLACEMENT_PACKAGE;
    $request->placementGroup->placementStrategyId = 'sint';
    $request->placementGroup->pricingSchedule = new PricingSchedule();
    $request->placementGroup->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_MONTHLY;
    $request->placementGroup->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-02');
    $request->placementGroup->pricingSchedule->flighted = false;
    $request->placementGroup->pricingSchedule->floodlightActivityId = 'quaerat';
    $request->placementGroup->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placementGroup->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPM_ACTIVEVIEW;
    $request->placementGroup->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-04-17');
    $request->placementGroup->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-03-09');
    $request->placementGroup->primaryPlacementId = 'cumque';
    $request->placementGroup->primaryPlacementIdDimensionValue = new DimensionValue();
    $request->placementGroup->primaryPlacementIdDimensionValue->dimensionName = 'cumque';
    $request->placementGroup->primaryPlacementIdDimensionValue->etag = 'et';
    $request->placementGroup->primaryPlacementIdDimensionValue->id = '85ea4901-c7c4-43ad-adaa-784aba3d230e';
    $request->placementGroup->primaryPlacementIdDimensionValue->kind = 'nulla';
    $request->placementGroup->primaryPlacementIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->primaryPlacementIdDimensionValue->value = 'dignissimos';
    $request->placementGroup->siteId = 'dolor';
    $request->placementGroup->siteIdDimensionValue = new DimensionValue();
    $request->placementGroup->siteIdDimensionValue->dimensionName = 'totam';
    $request->placementGroup->siteIdDimensionValue->etag = 'beatae';
    $request->placementGroup->siteIdDimensionValue->id = '1a115382-bd7e-4d56-9076-21c58f4d7396';
    $request->placementGroup->siteIdDimensionValue->kind = 'nostrum';
    $request->placementGroup->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->siteIdDimensionValue->value = 'modi';
    $request->placementGroup->subaccountId = 'cumque';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->profileId = 'veritatis';
    $request->quotaUser = 'similique';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new DfareportingPlacementGroupsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementGroups->dfareportingPlacementGroupsUpdate($request, $requestSecurity);

    if ($response->placementGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
