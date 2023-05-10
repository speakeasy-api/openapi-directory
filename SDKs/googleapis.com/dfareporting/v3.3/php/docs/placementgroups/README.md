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
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'porro';
    $request->id = '74b86cec-c74f-477b-8848-bd6a6f0441d2';
    $request->key = 'maxime';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->profileId = 'soluta';
    $request->quotaUser = 'quos';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'laudantium';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->placementGroup = new PlacementGroup();
    $request->placementGroup->accountId = 'perspiciatis';
    $request->placementGroup->advertiserId = 'quaerat';
    $request->placementGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->placementGroup->advertiserIdDimensionValue->dimensionName = 'nesciunt';
    $request->placementGroup->advertiserIdDimensionValue->etag = 'molestiae';
    $request->placementGroup->advertiserIdDimensionValue->id = '3e060459-bebb-4ad0-af25-86bcf152558d';
    $request->placementGroup->advertiserIdDimensionValue->kind = 'fuga';
    $request->placementGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->advertiserIdDimensionValue->value = 'excepturi';
    $request->placementGroup->archived = false;
    $request->placementGroup->campaignId = 'corporis';
    $request->placementGroup->campaignIdDimensionValue = new DimensionValue();
    $request->placementGroup->campaignIdDimensionValue->dimensionName = 'nam';
    $request->placementGroup->campaignIdDimensionValue->etag = 'itaque';
    $request->placementGroup->campaignIdDimensionValue->id = '6cd02756-c354-4aa4-b2b4-7e1763c5208c';
    $request->placementGroup->campaignIdDimensionValue->kind = 'qui';
    $request->placementGroup->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->campaignIdDimensionValue->value = 'recusandae';
    $request->placementGroup->childPlacementIds = [
        'corrupti',
        'sit',
        'magni',
    ];
    $request->placementGroup->comment = 'repellendus';
    $request->placementGroup->contentCategoryId = 'quas';
    $request->placementGroup->createInfo = new LastModifiedInfo();
    $request->placementGroup->createInfo->time = 'ratione';
    $request->placementGroup->directorySiteId = 'sapiente';
    $request->placementGroup->directorySiteIdDimensionValue = new DimensionValue();
    $request->placementGroup->directorySiteIdDimensionValue->dimensionName = 'alias';
    $request->placementGroup->directorySiteIdDimensionValue->etag = 'repellendus';
    $request->placementGroup->directorySiteIdDimensionValue->id = '45eb4a8b-674e-4e5c-bc18-edc7f787e32e';
    $request->placementGroup->directorySiteIdDimensionValue->kind = 'voluptatem';
    $request->placementGroup->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->directorySiteIdDimensionValue->value = 'rerum';
    $request->placementGroup->externalId = 'nesciunt';
    $request->placementGroup->id = 'pariatur';
    $request->placementGroup->idDimensionValue = new DimensionValue();
    $request->placementGroup->idDimensionValue->dimensionName = 'velit';
    $request->placementGroup->idDimensionValue->etag = 'necessitatibus';
    $request->placementGroup->idDimensionValue->id = 'd0c5670e-f42b-4d3c-9f1c-c503f6c39bcd';
    $request->placementGroup->idDimensionValue->kind = 'alias';
    $request->placementGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->idDimensionValue->value = 'vel';
    $request->placementGroup->kind = 'qui';
    $request->placementGroup->lastModifiedInfo = new LastModifiedInfo();
    $request->placementGroup->lastModifiedInfo->time = 'perspiciatis';
    $request->placementGroup->name = 'Tami McClure';
    $request->placementGroup->placementGroupType = PlacementGroupPlacementGroupTypeEnum::PLACEMENT_ROADBLOCK;
    $request->placementGroup->placementStrategyId = 'nesciunt';
    $request->placementGroup->pricingSchedule = new PricingSchedule();
    $request->placementGroup->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_MONTHLY;
    $request->placementGroup->pricingSchedule->disregardOverdelivery = false;
    $request->placementGroup->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-06');
    $request->placementGroup->pricingSchedule->flighted = false;
    $request->placementGroup->pricingSchedule->floodlightActivityId = 'atque';
    $request->placementGroup->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placementGroup->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
    $request->placementGroup->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2021-07-28');
    $request->placementGroup->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2020-02-02');
    $request->placementGroup->primaryPlacementId = 'voluptatum';
    $request->placementGroup->primaryPlacementIdDimensionValue = new DimensionValue();
    $request->placementGroup->primaryPlacementIdDimensionValue->dimensionName = 'aperiam';
    $request->placementGroup->primaryPlacementIdDimensionValue->etag = 'reprehenderit';
    $request->placementGroup->primaryPlacementIdDimensionValue->id = 'aae03f33-ca79-4fb9-9e40-32ba26fd368b';
    $request->placementGroup->primaryPlacementIdDimensionValue->kind = 'animi';
    $request->placementGroup->primaryPlacementIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->primaryPlacementIdDimensionValue->value = 'dolores';
    $request->placementGroup->siteId = 'dicta';
    $request->placementGroup->siteIdDimensionValue = new DimensionValue();
    $request->placementGroup->siteIdDimensionValue->dimensionName = 'laboriosam';
    $request->placementGroup->siteIdDimensionValue->etag = 'distinctio';
    $request->placementGroup->siteIdDimensionValue->id = 'cb415835-c736-4417-a313-3edc046bc516';
    $request->placementGroup->siteIdDimensionValue->kind = 'amet';
    $request->placementGroup->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->siteIdDimensionValue->value = 'libero';
    $request->placementGroup->subaccountId = 'maxime';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'molestias';
    $request->fields = 'dolores';
    $request->key = 'dolores';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->profileId = 'minus';
    $request->quotaUser = 'non';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'maxime';

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
    $request->accessToken = 'magni';
    $request->advertiserIds = [
        'minima',
        'ipsam',
        'sequi',
        'quaerat',
    ];
    $request->alt = AltEnum::JSON;
    $request->archived = false;
    $request->callback = 'incidunt';
    $request->campaignIds = [
        'minima',
        'quo',
        'quis',
    ];
    $request->contentCategoryIds = [
        'quidem',
        'harum',
        'adipisci',
        'optio',
    ];
    $request->directorySiteIds = [
        'reprehenderit',
        'quo',
    ];
    $request->fields = 'vitae';
    $request->ids = [
        'tempora',
        'iste',
        'molestias',
        'beatae',
    ];
    $request->key = 'itaque';
    $request->maxEndDate = 'atque';
    $request->maxResults = 679962;
    $request->maxStartDate = 'similique';
    $request->minEndDate = 'qui';
    $request->minStartDate = 'enim';
    $request->oauthToken = 'quam';
    $request->pageToken = 'assumenda';
    $request->placementGroupType = DfareportingPlacementGroupsListPlacementGroupTypeEnum::PLACEMENT_ROADBLOCK;
    $request->placementStrategyIds = [
        'quasi',
        'sint',
        'inventore',
        'fugit',
    ];
    $request->prettyPrint = false;
    $request->pricingTypes = [
        DfareportingPlacementGroupsListPricingTypesEnum::PRICING_TYPE_FLAT_RATE_CLICKS,
        DfareportingPlacementGroupsListPricingTypesEnum::PRICING_TYPE_CPM_ACTIVEVIEW,
        DfareportingPlacementGroupsListPricingTypesEnum::PRICING_TYPE_CPM_ACTIVEVIEW,
        DfareportingPlacementGroupsListPricingTypesEnum::PRICING_TYPE_CPA,
    ];
    $request->profileId = 'non';
    $request->quotaUser = 'nam';
    $request->searchString = 'sapiente';
    $request->siteIds = [
        'impedit',
        'veniam',
        'magnam',
        'iure',
    ];
    $request->sortField = DfareportingPlacementGroupsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingPlacementGroupsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'aut';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->placementGroup = new PlacementGroup();
    $request->placementGroup->accountId = 'quis';
    $request->placementGroup->advertiserId = 'possimus';
    $request->placementGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->placementGroup->advertiserIdDimensionValue->dimensionName = 'reiciendis';
    $request->placementGroup->advertiserIdDimensionValue->etag = 'est';
    $request->placementGroup->advertiserIdDimensionValue->id = '796206be-f2b0-4a3e-82c1-aa010e9aac2e';
    $request->placementGroup->advertiserIdDimensionValue->kind = 'iste';
    $request->placementGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->advertiserIdDimensionValue->value = 'adipisci';
    $request->placementGroup->archived = false;
    $request->placementGroup->campaignId = 'quis';
    $request->placementGroup->campaignIdDimensionValue = new DimensionValue();
    $request->placementGroup->campaignIdDimensionValue->dimensionName = 'quis';
    $request->placementGroup->campaignIdDimensionValue->etag = 'quos';
    $request->placementGroup->campaignIdDimensionValue->id = '6d18f9f9-7a4b-4fad-abf7-d67ca84ad99b';
    $request->placementGroup->campaignIdDimensionValue->kind = 'eius';
    $request->placementGroup->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->campaignIdDimensionValue->value = 'quibusdam';
    $request->placementGroup->childPlacementIds = [
        'quasi',
        'magni',
    ];
    $request->placementGroup->comment = 'numquam';
    $request->placementGroup->contentCategoryId = 'velit';
    $request->placementGroup->createInfo = new LastModifiedInfo();
    $request->placementGroup->createInfo->time = 'quis';
    $request->placementGroup->directorySiteId = 'nesciunt';
    $request->placementGroup->directorySiteIdDimensionValue = new DimensionValue();
    $request->placementGroup->directorySiteIdDimensionValue->dimensionName = 'sunt';
    $request->placementGroup->directorySiteIdDimensionValue->etag = 'blanditiis';
    $request->placementGroup->directorySiteIdDimensionValue->id = '70cf68b0-3ad4-421b-943d-1f0cb0a0003e';
    $request->placementGroup->directorySiteIdDimensionValue->kind = 'facilis';
    $request->placementGroup->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->directorySiteIdDimensionValue->value = 'sed';
    $request->placementGroup->externalId = 'fugiat';
    $request->placementGroup->id = 'sint';
    $request->placementGroup->idDimensionValue = new DimensionValue();
    $request->placementGroup->idDimensionValue->dimensionName = 'tempore';
    $request->placementGroup->idDimensionValue->etag = 'dolorem';
    $request->placementGroup->idDimensionValue->id = 'a70d94fa-a741-4c57-91fe-dc2050d38dc3';
    $request->placementGroup->idDimensionValue->kind = 'quo';
    $request->placementGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->idDimensionValue->value = 'ab';
    $request->placementGroup->kind = 'praesentium';
    $request->placementGroup->lastModifiedInfo = new LastModifiedInfo();
    $request->placementGroup->lastModifiedInfo->time = 'nostrum';
    $request->placementGroup->name = 'Marlene Cassin';
    $request->placementGroup->placementGroupType = PlacementGroupPlacementGroupTypeEnum::PLACEMENT_ROADBLOCK;
    $request->placementGroup->placementStrategyId = 'necessitatibus';
    $request->placementGroup->pricingSchedule = new PricingSchedule();
    $request->placementGroup->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_MONTHLY;
    $request->placementGroup->pricingSchedule->disregardOverdelivery = false;
    $request->placementGroup->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-23');
    $request->placementGroup->pricingSchedule->flighted = false;
    $request->placementGroup->pricingSchedule->floodlightActivityId = 'iure';
    $request->placementGroup->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placementGroup->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
    $request->placementGroup->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2021-07-13');
    $request->placementGroup->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-04-14');
    $request->placementGroup->primaryPlacementId = 'dolore';
    $request->placementGroup->primaryPlacementIdDimensionValue = new DimensionValue();
    $request->placementGroup->primaryPlacementIdDimensionValue->dimensionName = 'tempora';
    $request->placementGroup->primaryPlacementIdDimensionValue->etag = 'quaerat';
    $request->placementGroup->primaryPlacementIdDimensionValue->id = 'eac8b3a2-875c-46c1-be60-6d07d2a9c87a';
    $request->placementGroup->primaryPlacementIdDimensionValue->kind = 'repudiandae';
    $request->placementGroup->primaryPlacementIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->primaryPlacementIdDimensionValue->value = 'voluptatem';
    $request->placementGroup->siteId = 'quod';
    $request->placementGroup->siteIdDimensionValue = new DimensionValue();
    $request->placementGroup->siteIdDimensionValue->dimensionName = 'vitae';
    $request->placementGroup->siteIdDimensionValue->etag = 'vel';
    $request->placementGroup->siteIdDimensionValue->id = '661a1d91-36a7-4e8d-9321-3f3f658752db';
    $request->placementGroup->siteIdDimensionValue->kind = 'molestiae';
    $request->placementGroup->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->siteIdDimensionValue->value = 'aliquam';
    $request->placementGroup->subaccountId = 'maxime';
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->fields = 'doloremque';
    $request->id = 'a56cebca-da29-4ca7-9181-c95671663c53';
    $request->key = 'ipsa';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->profileId = 'minima';
    $request->quotaUser = 'vel';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'minima';

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
    $request->placementGroup->accountId = 'autem';
    $request->placementGroup->advertiserId = 'dolor';
    $request->placementGroup->advertiserIdDimensionValue = new DimensionValue();
    $request->placementGroup->advertiserIdDimensionValue->dimensionName = 'culpa';
    $request->placementGroup->advertiserIdDimensionValue->etag = 'non';
    $request->placementGroup->advertiserIdDimensionValue->id = '638512ab-2521-4b9f-ae07-2467b8a40bc0';
    $request->placementGroup->advertiserIdDimensionValue->kind = 'quis';
    $request->placementGroup->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->advertiserIdDimensionValue->value = 'dolorum';
    $request->placementGroup->archived = false;
    $request->placementGroup->campaignId = 'libero';
    $request->placementGroup->campaignIdDimensionValue = new DimensionValue();
    $request->placementGroup->campaignIdDimensionValue->dimensionName = 'voluptatem';
    $request->placementGroup->campaignIdDimensionValue->etag = 'at';
    $request->placementGroup->campaignIdDimensionValue->id = '650edf22-a94d-420e-890e-a41d1f465e85';
    $request->placementGroup->campaignIdDimensionValue->kind = 'ab';
    $request->placementGroup->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->campaignIdDimensionValue->value = 'nisi';
    $request->placementGroup->childPlacementIds = [
        'sapiente',
        'a',
        'molestiae',
        'amet',
    ];
    $request->placementGroup->comment = 'voluptatibus';
    $request->placementGroup->contentCategoryId = 'temporibus';
    $request->placementGroup->createInfo = new LastModifiedInfo();
    $request->placementGroup->createInfo->time = 'tenetur';
    $request->placementGroup->directorySiteId = 'nostrum';
    $request->placementGroup->directorySiteIdDimensionValue = new DimensionValue();
    $request->placementGroup->directorySiteIdDimensionValue->dimensionName = 'tempora';
    $request->placementGroup->directorySiteIdDimensionValue->etag = 'maiores';
    $request->placementGroup->directorySiteIdDimensionValue->id = 'dd5ea954-3398-4daf-b42a-8d63388e4d80';
    $request->placementGroup->directorySiteIdDimensionValue->kind = 'nesciunt';
    $request->placementGroup->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placementGroup->directorySiteIdDimensionValue->value = 'necessitatibus';
    $request->placementGroup->externalId = 'culpa';
    $request->placementGroup->id = 'quis';
    $request->placementGroup->idDimensionValue = new DimensionValue();
    $request->placementGroup->idDimensionValue->dimensionName = 'asperiores';
    $request->placementGroup->idDimensionValue->etag = 'iste';
    $request->placementGroup->idDimensionValue->id = 'b18a244f-d619-4039-9acd-38ed0dc671dc';
    $request->placementGroup->idDimensionValue->kind = 'quam';
    $request->placementGroup->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placementGroup->idDimensionValue->value = 'quae';
    $request->placementGroup->kind = 'vero';
    $request->placementGroup->lastModifiedInfo = new LastModifiedInfo();
    $request->placementGroup->lastModifiedInfo->time = 'amet';
    $request->placementGroup->name = 'Emanuel Boyer';
    $request->placementGroup->placementGroupType = PlacementGroupPlacementGroupTypeEnum::PLACEMENT_PACKAGE;
    $request->placementGroup->placementStrategyId = 'aut';
    $request->placementGroup->pricingSchedule = new PricingSchedule();
    $request->placementGroup->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_CUMULATIVE;
    $request->placementGroup->pricingSchedule->disregardOverdelivery = false;
    $request->placementGroup->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-11-29');
    $request->placementGroup->pricingSchedule->flighted = false;
    $request->placementGroup->pricingSchedule->floodlightActivityId = 'repellendus';
    $request->placementGroup->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
    ];
    $request->placementGroup->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_FLAT_RATE_CLICKS;
    $request->placementGroup->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-21');
    $request->placementGroup->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-11-17');
    $request->placementGroup->primaryPlacementId = 'repellat';
    $request->placementGroup->primaryPlacementIdDimensionValue = new DimensionValue();
    $request->placementGroup->primaryPlacementIdDimensionValue->dimensionName = 'dolores';
    $request->placementGroup->primaryPlacementIdDimensionValue->etag = 'harum';
    $request->placementGroup->primaryPlacementIdDimensionValue->id = 'd89c8a32-639d-4a5b-bb69-02b881a94f64';
    $request->placementGroup->primaryPlacementIdDimensionValue->kind = 'sequi';
    $request->placementGroup->primaryPlacementIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placementGroup->primaryPlacementIdDimensionValue->value = 'autem';
    $request->placementGroup->siteId = 'tempora';
    $request->placementGroup->siteIdDimensionValue = new DimensionValue();
    $request->placementGroup->siteIdDimensionValue->dimensionName = 'mollitia';
    $request->placementGroup->siteIdDimensionValue->etag = 'quas';
    $request->placementGroup->siteIdDimensionValue->id = 'f0af8c69-1d73-42d9-bbaf-9476a2ae8dcc';
    $request->placementGroup->siteIdDimensionValue->kind = 'ullam';
    $request->placementGroup->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placementGroup->siteIdDimensionValue->value = 'placeat';
    $request->placementGroup->subaccountId = 'quas';
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nostrum';
    $request->fields = 'dicta';
    $request->key = 'eos';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->profileId = 'iusto';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'blanditiis';

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
