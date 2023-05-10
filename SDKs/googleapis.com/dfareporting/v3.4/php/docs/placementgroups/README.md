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
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'nesciunt';
    $request->id = '73e06045-9beb-4bad-82f2-586bcf152558';
    $request->key = 'quibusdam';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->profileId = 'fuga';
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'nam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placementGroup = new PlacementGroup();
    $request->placementGroup->accountId = 'suscipit';
    $request->placementGroup->advertiserId = 'porro';
    $request->placementGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->placementGroup->advertiserIdDimensionValue->dimensionName = 'nulla';
    $request->placementGroup->advertiserIdDimensionValue->etag = 'consequatur';
    $request->placementGroup->advertiserIdDimensionValue->id = '2756c354-aa43-42b4-be17-63c5208c23e9';
    $request->placementGroup->advertiserIdDimensionValue->kind = 'corrupti';
    $request->placementGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->advertiserIdDimensionValue->value = 'magni';
    $request->placementGroup->archived = false;
    $request->placementGroup->campaignId = 'repellendus';
    $request->placementGroup->campaignIdDimensionValue = new DimensionValue();
    $request->placementGroup->campaignIdDimensionValue->dimensionName = 'quas';
    $request->placementGroup->campaignIdDimensionValue->etag = 'ratione';
    $request->placementGroup->campaignIdDimensionValue->id = 'f0d45eb4-a8b6-474e-a5cf-c18edc7f787e';
    $request->placementGroup->campaignIdDimensionValue->kind = 'adipisci';
    $request->placementGroup->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->campaignIdDimensionValue->value = 'recusandae';
    $request->placementGroup->childPlacementIds = [
        'eius',
    ];
    $request->placementGroup->comment = 'rerum';
    $request->placementGroup->contentCategoryId = 'nesciunt';
    $request->placementGroup->createInfo = new LastModifiedInfo();
    $request->placementGroup->createInfo->time = 'pariatur';
    $request->placementGroup->directorySiteId = 'velit';
    $request->placementGroup->directorySiteIdDimensionValue = new DimensionValue();
    $request->placementGroup->directorySiteIdDimensionValue->dimensionName = 'necessitatibus';
    $request->placementGroup->directorySiteIdDimensionValue->etag = 'facere';
    $request->placementGroup->directorySiteIdDimensionValue->id = '0c5670ef-42bd-43c9-b1cc-503f6c39bcd0';
    $request->placementGroup->directorySiteIdDimensionValue->kind = 'deserunt';
    $request->placementGroup->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->directorySiteIdDimensionValue->value = 'qui';
    $request->placementGroup->externalId = 'perspiciatis';
    $request->placementGroup->id = 'accusantium';
    $request->placementGroup->idDimensionValue = new DimensionValue();
    $request->placementGroup->idDimensionValue->dimensionName = 'voluptatibus';
    $request->placementGroup->idDimensionValue->etag = 'occaecati';
    $request->placementGroup->idDimensionValue->id = '57f38518-9ad7-4ef8-87aa-e03f33ca79fb';
    $request->placementGroup->idDimensionValue->kind = 'provident';
    $request->placementGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->idDimensionValue->value = 'recusandae';
    $request->placementGroup->kind = 'non';
    $request->placementGroup->lastModifiedInfo = new LastModifiedInfo();
    $request->placementGroup->lastModifiedInfo->time = 'aut';
    $request->placementGroup->name = 'Lori Rodriguez';
    $request->placementGroup->placementGroupType = PlacementGroupPlacementGroupTypeEnum::PLACEMENT_PACKAGE;
    $request->placementGroup->placementStrategyId = 'a';
    $request->placementGroup->pricingSchedule = new PricingSchedule();
    $request->placementGroup->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_CUMULATIVE;
    $request->placementGroup->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-07-28');
    $request->placementGroup->pricingSchedule->flighted = false;
    $request->placementGroup->pricingSchedule->floodlightActivityId = 'rem';
    $request->placementGroup->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placementGroup->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
    $request->placementGroup->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-29');
    $request->placementGroup->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-08-13');
    $request->placementGroup->primaryPlacementId = 'distinctio';
    $request->placementGroup->primaryPlacementIdDimensionValue = new DimensionValue();
    $request->placementGroup->primaryPlacementIdDimensionValue->dimensionName = 'quo';
    $request->placementGroup->primaryPlacementIdDimensionValue->etag = 'facilis';
    $request->placementGroup->primaryPlacementIdDimensionValue->id = '415835c7-3641-4723-933e-dc046bc5163b';
    $request->placementGroup->primaryPlacementIdDimensionValue->kind = 'libero';
    $request->placementGroup->primaryPlacementIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->primaryPlacementIdDimensionValue->value = 'deserunt';
    $request->placementGroup->siteId = 'eius';
    $request->placementGroup->siteIdDimensionValue = new DimensionValue();
    $request->placementGroup->siteIdDimensionValue->dimensionName = 'molestias';
    $request->placementGroup->siteIdDimensionValue->etag = 'dolores';
    $request->placementGroup->siteIdDimensionValue->id = '27c42c22-c553-4504-95c5-dbb3c57c1e49';
    $request->placementGroup->siteIdDimensionValue->kind = 'molestias';
    $request->placementGroup->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->siteIdDimensionValue->value = 'itaque';
    $request->placementGroup->subaccountId = 'atque';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'qui';
    $request->fields = 'enim';
    $request->key = 'quam';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->profileId = 'temporibus';
    $request->quotaUser = 'porro';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'sint';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugit';
    $request->advertiserIds = [
        'quidem',
        'at',
        'debitis',
        'eum',
    ];
    $request->alt = AltEnum::JSON;
    $request->archived = false;
    $request->callback = 'nam';
    $request->campaignIds = [
        'porro',
        'impedit',
        'veniam',
        'magnam',
    ];
    $request->contentCategoryIds = [
        'natus',
        'nulla',
    ];
    $request->directorySiteIds = [
        'aut',
        'architecto',
    ];
    $request->fields = 'quis';
    $request->ids = [
        'reiciendis',
        'est',
        'esse',
        'iste',
    ];
    $request->key = 'ex';
    $request->maxEndDate = 'odit';
    $request->maxResults = 32545;
    $request->maxStartDate = 'voluptas';
    $request->minEndDate = 'libero';
    $request->minStartDate = 'vero';
    $request->oauthToken = 'hic';
    $request->pageToken = 'consequuntur';
    $request->placementGroupType = DfareportingPlacementGroupsListPlacementGroupTypeEnum::PLACEMENT_ROADBLOCK;
    $request->placementStrategyIds = [
        'animi',
    ];
    $request->prettyPrint = false;
    $request->pricingTypes = [
        DfareportingPlacementGroupsListPricingTypesEnum::PRICING_TYPE_CPM_ACTIVEVIEW,
    ];
    $request->profileId = 'non';
    $request->quotaUser = 'quia';
    $request->searchString = 'porro';
    $request->siteIds = [
        'deserunt',
    ];
    $request->sortField = DfareportingPlacementGroupsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingPlacementGroupsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'perferendis';

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
    $request->placementGroup->accountId = 'excepturi';
    $request->placementGroup->advertiserId = 'fuga';
    $request->placementGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->placementGroup->advertiserIdDimensionValue->dimensionName = 'culpa';
    $request->placementGroup->advertiserIdDimensionValue->etag = 'quo';
    $request->placementGroup->advertiserIdDimensionValue->id = '2e913558-6d18-4f9f-97a4-bfad2bf7d67c';
    $request->placementGroup->advertiserIdDimensionValue->kind = 'deserunt';
    $request->placementGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->advertiserIdDimensionValue->value = 'modi';
    $request->placementGroup->archived = false;
    $request->placementGroup->campaignId = 'id';
    $request->placementGroup->campaignIdDimensionValue = new DimensionValue();
    $request->placementGroup->campaignIdDimensionValue->dimensionName = 'repellendus';
    $request->placementGroup->campaignIdDimensionValue->etag = 'excepturi';
    $request->placementGroup->campaignIdDimensionValue->id = '9b41d612-4353-4187-8cf6-8b03ad421bd4';
    $request->placementGroup->campaignIdDimensionValue->kind = 'nesciunt';
    $request->placementGroup->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->campaignIdDimensionValue->value = 'beatae';
    $request->placementGroup->childPlacementIds = [
        'ipsa',
        'quo',
        'libero',
        'eaque',
    ];
    $request->placementGroup->comment = 'animi';
    $request->placementGroup->contentCategoryId = 'doloremque';
    $request->placementGroup->createInfo = new LastModifiedInfo();
    $request->placementGroup->createInfo->time = 'consequatur';
    $request->placementGroup->directorySiteId = 'perferendis';
    $request->placementGroup->directorySiteIdDimensionValue = new DimensionValue();
    $request->placementGroup->directorySiteIdDimensionValue->dimensionName = 'dolor';
    $request->placementGroup->directorySiteIdDimensionValue->etag = 'earum';
    $request->placementGroup->directorySiteIdDimensionValue->id = 'b22d9b3a-70d9-44fa-a741-c57d1fedc205';
    $request->placementGroup->directorySiteIdDimensionValue->kind = 'doloremque';
    $request->placementGroup->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->directorySiteIdDimensionValue->value = 'ratione';
    $request->placementGroup->externalId = 'quos';
    $request->placementGroup->id = 'pariatur';
    $request->placementGroup->idDimensionValue = new DimensionValue();
    $request->placementGroup->idDimensionValue->dimensionName = 'quo';
    $request->placementGroup->idDimensionValue->etag = 'sequi';
    $request->placementGroup->idDimensionValue->id = 'ce185472-f9ee-4691-a6a8-be3444eac8b3';
    $request->placementGroup->idDimensionValue->kind = 'laborum';
    $request->placementGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->idDimensionValue->value = 'totam';
    $request->placementGroup->kind = 'dignissimos';
    $request->placementGroup->lastModifiedInfo = new LastModifiedInfo();
    $request->placementGroup->lastModifiedInfo->time = 'corporis';
    $request->placementGroup->name = 'Dr. Ramon Satterfield';
    $request->placementGroup->placementGroupType = PlacementGroupPlacementGroupTypeEnum::PLACEMENT_PACKAGE;
    $request->placementGroup->placementStrategyId = 'perferendis';
    $request->placementGroup->pricingSchedule = new PricingSchedule();
    $request->placementGroup->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_MONTHLY;
    $request->placementGroup->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-30');
    $request->placementGroup->pricingSchedule->flighted = false;
    $request->placementGroup->pricingSchedule->floodlightActivityId = 'voluptate';
    $request->placementGroup->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placementGroup->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPC;
    $request->placementGroup->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2021-10-03');
    $request->placementGroup->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2021-06-18');
    $request->placementGroup->primaryPlacementId = 'nihil';
    $request->placementGroup->primaryPlacementIdDimensionValue = new DimensionValue();
    $request->placementGroup->primaryPlacementIdDimensionValue->dimensionName = 'officia';
    $request->placementGroup->primaryPlacementIdDimensionValue->etag = 'repudiandae';
    $request->placementGroup->primaryPlacementIdDimensionValue->id = '50c16661-a1d9-4136-a7e8-d53213f3f658';
    $request->placementGroup->primaryPlacementIdDimensionValue->kind = 'esse';
    $request->placementGroup->primaryPlacementIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->primaryPlacementIdDimensionValue->value = 'fugit';
    $request->placementGroup->siteId = 'assumenda';
    $request->placementGroup->siteIdDimensionValue = new DimensionValue();
    $request->placementGroup->siteIdDimensionValue->dimensionName = 'expedita';
    $request->placementGroup->siteIdDimensionValue->etag = 'molestiae';
    $request->placementGroup->siteIdDimensionValue->id = '64c59f0a-56ce-4bca-9a29-ca79181c9567';
    $request->placementGroup->siteIdDimensionValue->kind = 'ab';
    $request->placementGroup->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->siteIdDimensionValue->value = 'iure';
    $request->placementGroup->subaccountId = 'dolorem';
    $request->accessToken = 'minus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'ipsa';
    $request->id = 'b5665163-a363-4851-aab2-521b9f2e0724';
    $request->key = 'autem';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->profileId = 'quidem';
    $request->quotaUser = 'quas';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'modi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->placementGroup = new PlacementGroup();
    $request->placementGroup->accountId = 'nam';
    $request->placementGroup->advertiserId = 'minus';
    $request->placementGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->placementGroup->advertiserIdDimensionValue->dimensionName = 'sit';
    $request->placementGroup->advertiserIdDimensionValue->etag = 'quis';
    $request->placementGroup->advertiserIdDimensionValue->id = 'fab0d650-edf2-42a9-8d20-ec90ea41d1f4';
    $request->placementGroup->advertiserIdDimensionValue->kind = 'nisi';
    $request->placementGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->advertiserIdDimensionValue->value = 'saepe';
    $request->placementGroup->archived = false;
    $request->placementGroup->campaignId = 'praesentium';
    $request->placementGroup->campaignIdDimensionValue = new DimensionValue();
    $request->placementGroup->campaignIdDimensionValue->dimensionName = 'veniam';
    $request->placementGroup->campaignIdDimensionValue->etag = 'ab';
    $request->placementGroup->campaignIdDimensionValue->id = '56fff73f-df54-4fdd-9ea9-543398dafb42';
    $request->placementGroup->campaignIdDimensionValue->kind = 'dolorum';
    $request->placementGroup->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->campaignIdDimensionValue->value = 'assumenda';
    $request->placementGroup->childPlacementIds = [
        'dolorem',
        'neque',
    ];
    $request->placementGroup->comment = 'laudantium';
    $request->placementGroup->contentCategoryId = 'quos';
    $request->placementGroup->createInfo = new LastModifiedInfo();
    $request->placementGroup->createInfo->time = 'saepe';
    $request->placementGroup->directorySiteId = 'incidunt';
    $request->placementGroup->directorySiteIdDimensionValue = new DimensionValue();
    $request->placementGroup->directorySiteIdDimensionValue->dimensionName = 'pariatur';
    $request->placementGroup->directorySiteIdDimensionValue->etag = 'deleniti';
    $request->placementGroup->directorySiteIdDimensionValue->id = '039ea5f9-b18a-4244-bd61-9039dacd38ed';
    $request->placementGroup->directorySiteIdDimensionValue->kind = 'doloremque';
    $request->placementGroup->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->directorySiteIdDimensionValue->value = 'nobis';
    $request->placementGroup->externalId = 'laboriosam';
    $request->placementGroup->id = 'esse';
    $request->placementGroup->idDimensionValue = new DimensionValue();
    $request->placementGroup->idDimensionValue->dimensionName = 'et';
    $request->placementGroup->idDimensionValue->etag = 'temporibus';
    $request->placementGroup->idDimensionValue->id = 'c7f1e3af-1592-40c9-8d1b-4901f2bd89c8';
    $request->placementGroup->idDimensionValue->kind = 'id';
    $request->placementGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->idDimensionValue->value = 'dolores';
    $request->placementGroup->kind = 'vel';
    $request->placementGroup->lastModifiedInfo = new LastModifiedInfo();
    $request->placementGroup->lastModifiedInfo->time = 'ipsum';
    $request->placementGroup->name = 'Dewey Murphy';
    $request->placementGroup->placementGroupType = PlacementGroupPlacementGroupTypeEnum::PLACEMENT_PACKAGE;
    $request->placementGroup->placementStrategyId = 'nobis';
    $request->placementGroup->pricingSchedule = new PricingSchedule();
    $request->placementGroup->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_MONTHLY;
    $request->placementGroup->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-11-24');
    $request->placementGroup->pricingSchedule->flighted = false;
    $request->placementGroup->pricingSchedule->floodlightActivityId = 'quia';
    $request->placementGroup->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placementGroup->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
    $request->placementGroup->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-11-07');
    $request->placementGroup->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2021-10-26');
    $request->placementGroup->primaryPlacementId = 'incidunt';
    $request->placementGroup->primaryPlacementIdDimensionValue = new DimensionValue();
    $request->placementGroup->primaryPlacementIdDimensionValue->dimensionName = 'maiores';
    $request->placementGroup->primaryPlacementIdDimensionValue->etag = 'ea';
    $request->placementGroup->primaryPlacementIdDimensionValue->id = '43664a8f-0af8-4c69-9d73-2d9fbaf9476a';
    $request->placementGroup->primaryPlacementIdDimensionValue->kind = 'qui';
    $request->placementGroup->primaryPlacementIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->primaryPlacementIdDimensionValue->value = 'vero';
    $request->placementGroup->siteId = 'quas';
    $request->placementGroup->siteIdDimensionValue = new DimensionValue();
    $request->placementGroup->siteIdDimensionValue->dimensionName = 'possimus';
    $request->placementGroup->siteIdDimensionValue->etag = 'optio';
    $request->placementGroup->siteIdDimensionValue->id = 'c50c8a35-12c7-4378-8893-0750a00e966e';
    $request->placementGroup->siteIdDimensionValue->kind = 'eligendi';
    $request->placementGroup->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->siteIdDimensionValue->value = 'dolorem';
    $request->placementGroup->subaccountId = 'eum';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'neque';
    $request->fields = 'inventore';
    $request->key = 'omnis';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->profileId = 'nesciunt';
    $request->quotaUser = 'omnis';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'optio';

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
