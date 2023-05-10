# ads

### Available Operations

* [dfareportingAdsGet](#dfareportingadsget) - Gets one ad by ID.
* [dfareportingAdsInsert](#dfareportingadsinsert) - Inserts a new ad.
* [dfareportingAdsList](#dfareportingadslist) - Retrieves a list of ads, possibly filtered. This method supports paging.
* [dfareportingAdsPatch](#dfareportingadspatch) - Updates an existing ad. This method supports patch semantics.
* [dfareportingAdsUpdate](#dfareportingadsupdate) - Updates an existing ad.

## dfareportingAdsGet

Gets one ad by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'facilis';
    $request->id = 'd74dd39c-0f5d-42cf-b7c7-0a45626d4368';
    $request->key = 'dicta';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->profileId = 'maiores';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new DfareportingAdsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->ads->dfareportingAdsGet($request, $requestSecurity);

    if ($response->ad !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdsInsert

Inserts a new ad.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ad;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClickThroughUrl;
use \OpenAPI\OpenAPI\Models\Shared\ClickThroughUrlSuffixProperties;
use \OpenAPI\OpenAPI\Models\Shared\AdCompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\CreativeGroupAssignment;
use \OpenAPI\OpenAPI\Models\Shared\CreativeGroupAssignmentCreativeGroupNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRotation;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssignment;
use \OpenAPI\OpenAPI\Models\Shared\CompanionClickThroughOverride;
use \OpenAPI\OpenAPI\Models\Shared\RichMediaExitOverride;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRotationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRotationWeightCalculationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargetingDaysOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultClickThroughEventTagProperties;
use \OpenAPI\OpenAPI\Models\Shared\DeliverySchedule;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\DeliverySchedulePriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagOverride;
use \OpenAPI\OpenAPI\Models\Shared\GeoTargeting;
use \OpenAPI\OpenAPI\Models\Shared\City;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\Metro;
use \OpenAPI\OpenAPI\Models\Shared\PostalCode;
use \OpenAPI\OpenAPI\Models\Shared\Region;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\LanguageTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Language;
use \OpenAPI\OpenAPI\Models\Shared\PlacementAssignment;
use \OpenAPI\OpenAPI\Models\Shared\ListTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Browser;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionType;
use \OpenAPI\OpenAPI\Models\Shared\MobileCarrier;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemVersion;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystem;
use \OpenAPI\OpenAPI\Models\Shared\PlatformType;
use \OpenAPI\OpenAPI\Models\Shared\AdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ad = new Ad();
    $request->ad->accountId = 'voluptatibus';
    $request->ad->active = false;
    $request->ad->advertiserId = 'nostrum';
    $request->ad->advertiserIdDimensionValue = new DimensionValue();
    $request->ad->advertiserIdDimensionValue->dimensionName = 'sapiente';
    $request->ad->advertiserIdDimensionValue->etag = 'quisquam';
    $request->ad->advertiserIdDimensionValue->id = 'e6c55614-6c3e-4250-bb00-8c42e141aac3';
    $request->ad->advertiserIdDimensionValue->kind = 'eum';
    $request->ad->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->ad->advertiserIdDimensionValue->value = 'nobis';
    $request->ad->archived = false;
    $request->ad->audienceSegmentId = 'quas';
    $request->ad->campaignId = 'assumenda';
    $request->ad->campaignIdDimensionValue = new DimensionValue();
    $request->ad->campaignIdDimensionValue->dimensionName = 'nulla';
    $request->ad->campaignIdDimensionValue->etag = 'voluptas';
    $request->ad->campaignIdDimensionValue->id = 'b1442907-4747-478a-bbd4-66d28c10ab3c';
    $request->ad->campaignIdDimensionValue->kind = 'illum';
    $request->ad->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->ad->campaignIdDimensionValue->value = 'fuga';
    $request->ad->clickThroughUrl = new ClickThroughUrl();
    $request->ad->clickThroughUrl->computedClickThroughUrl = 'eius';
    $request->ad->clickThroughUrl->customClickThroughUrl = 'eos';
    $request->ad->clickThroughUrl->defaultLandingPage = false;
    $request->ad->clickThroughUrl->landingPageId = 'voluptas';
    $request->ad->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->ad->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'ab';
    $request->ad->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->ad->comments = 'cupiditate';
    $request->ad->compatibility = AdCompatibilityEnum::DISPLAY;
    $request->ad->createInfo = new LastModifiedInfo();
    $request->ad->createInfo->time = 'tempora';
    $request->ad->creativeGroupAssignments = [
        new CreativeGroupAssignment(),
        new CreativeGroupAssignment(),
        new CreativeGroupAssignment(),
        new CreativeGroupAssignment(),
    ];
    $request->ad->creativeRotation = new CreativeRotation();
    $request->ad->creativeRotation->creativeAssignments = [
        new CreativeAssignment(),
        new CreativeAssignment(),
    ];
    $request->ad->creativeRotation->creativeOptimizationConfigurationId = 'aspernatur';
    $request->ad->creativeRotation->type = CreativeRotationTypeEnum::CREATIVE_ROTATION_TYPE_SEQUENTIAL;
    $request->ad->creativeRotation->weightCalculationStrategy = CreativeRotationWeightCalculationStrategyEnum::WEIGHT_STRATEGY_OPTIMIZED;
    $request->ad->dayPartTargeting = new DayPartTargeting();
    $request->ad->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::SUNDAY,
        DayPartTargetingDaysOfWeekEnum::MONDAY,
    ];
    $request->ad->dayPartTargeting->hoursOfDay = [
        799796,
        490819,
        76956,
    ];
    $request->ad->dayPartTargeting->userLocalTime = false;
    $request->ad->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->ad->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'nihil';
    $request->ad->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->ad->deliverySchedule = new DeliverySchedule();
    $request->ad->deliverySchedule->frequencyCap = new FrequencyCap();
    $request->ad->deliverySchedule->frequencyCap->duration = 'totam';
    $request->ad->deliverySchedule->frequencyCap->impressions = 'accusamus';
    $request->ad->deliverySchedule->hardCutoff = false;
    $request->ad->deliverySchedule->impressionRatio = 'aliquam';
    $request->ad->deliverySchedule->priority = DeliverySchedulePriorityEnum::AD_PRIORITY08;
    $request->ad->dynamicClickTracker = false;
    $request->ad->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-04T08:46:39.442Z');
    $request->ad->eventTagOverrides = [
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
    ];
    $request->ad->geoTargeting = new GeoTargeting();
    $request->ad->geoTargeting->cities = [
        new City(),
    ];
    $request->ad->geoTargeting->countries = [
        new Country(),
        new Country(),
        new Country(),
    ];
    $request->ad->geoTargeting->excludeCountries = false;
    $request->ad->geoTargeting->metros = [
        new Metro(),
        new Metro(),
    ];
    $request->ad->geoTargeting->postalCodes = [
        new PostalCode(),
    ];
    $request->ad->geoTargeting->regions = [
        new Region(),
        new Region(),
        new Region(),
        new Region(),
    ];
    $request->ad->id = 'eum';
    $request->ad->idDimensionValue = new DimensionValue();
    $request->ad->idDimensionValue->dimensionName = 'quas';
    $request->ad->idDimensionValue->etag = 'praesentium';
    $request->ad->idDimensionValue->id = '282aa482-562f-4222-a981-7ee17cbe61e6';
    $request->ad->idDimensionValue->kind = 'harum';
    $request->ad->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->ad->idDimensionValue->value = 'rerum';
    $request->ad->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->ad->keyValueTargetingExpression->expression = 'occaecati';
    $request->ad->kind = 'minima';
    $request->ad->languageTargeting = new LanguageTargeting();
    $request->ad->languageTargeting->languages = [
        new Language(),
        new Language(),
        new Language(),
    ];
    $request->ad->lastModifiedInfo = new LastModifiedInfo();
    $request->ad->lastModifiedInfo->time = 'eligendi';
    $request->ad->name = 'Kristi Renner';
    $request->ad->placementAssignments = [
        new PlacementAssignment(),
    ];
    $request->ad->remarketingListExpression = new ListTargetingExpression();
    $request->ad->remarketingListExpression->expression = 'consequatur';
    $request->ad->size = new Size();
    $request->ad->size->height = 796392;
    $request->ad->size->iab = false;
    $request->ad->size->id = 'quaerat';
    $request->ad->size->kind = 'sapiente';
    $request->ad->size->width = 232865;
    $request->ad->sslCompliant = false;
    $request->ad->sslRequired = false;
    $request->ad->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-01T05:58:32.179Z');
    $request->ad->subaccountId = 'provident';
    $request->ad->targetingTemplateId = 'a';
    $request->ad->technologyTargeting = new TechnologyTargeting();
    $request->ad->technologyTargeting->browsers = [
        new Browser(),
        new Browser(),
        new Browser(),
        new Browser(),
    ];
    $request->ad->technologyTargeting->connectionTypes = [
        new ConnectionType(),
        new ConnectionType(),
        new ConnectionType(),
    ];
    $request->ad->technologyTargeting->mobileCarriers = [
        new MobileCarrier(),
        new MobileCarrier(),
    ];
    $request->ad->technologyTargeting->operatingSystemVersions = [
        new OperatingSystemVersion(),
    ];
    $request->ad->technologyTargeting->operatingSystems = [
        new OperatingSystem(),
        new OperatingSystem(),
        new OperatingSystem(),
        new OperatingSystem(),
    ];
    $request->ad->technologyTargeting->platformTypes = [
        new PlatformType(),
        new PlatformType(),
        new PlatformType(),
    ];
    $request->ad->type = AdTypeEnum::AD_SERVING_CLICK_TRACKER;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quia';
    $request->fields = 'eveniet';
    $request->key = 'asperiores';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->profileId = 'veritatis';
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new DfareportingAdsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->ads->dfareportingAdsInsert($request, $requestSecurity);

    if ($response->ad !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdsList

Retrieves a list of ads, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsListCompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsListTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->active = false;
    $request->advertiserId = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->archived = false;
    $request->audienceSegmentIds = [
        'vel',
        'in',
        'eius',
        'libero',
    ];
    $request->callback = 'illum';
    $request->campaignIds = [
        'accusantium',
        'aliquam',
        'sapiente',
    ];
    $request->compatibility = DfareportingAdsListCompatibilityEnum::DISPLAY;
    $request->creativeIds = [
        'reprehenderit',
        'ullam',
    ];
    $request->creativeOptimizationConfigurationIds = [
        'aut',
        'voluptatum',
    ];
    $request->dynamicClickTracker = false;
    $request->fields = 'qui';
    $request->ids = [
        'ex',
        'deleniti',
        'itaque',
        'dolorum',
    ];
    $request->key = 'architecto';
    $request->landingPageIds = [
        'tenetur',
        'quasi',
        'at',
    ];
    $request->maxResults = 92027;
    $request->oauthToken = 'voluptate';
    $request->overriddenEventTagId = 'ipsa';
    $request->pageToken = 'minima';
    $request->placementIds = [
        'consectetur',
    ];
    $request->prettyPrint = false;
    $request->profileId = 'adipisci';
    $request->quotaUser = 'iste';
    $request->remarketingListIds = [
        'accusantium',
        'rem',
        'aut',
        'laudantium',
    ];
    $request->searchString = 'eum';
    $request->sizeIds = [
        'ab',
        'corrupti',
        'non',
    ];
    $request->sortField = DfareportingAdsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingAdsListSortOrderEnum::ASCENDING;
    $request->sslCompliant = false;
    $request->sslRequired = false;
    $request->type = [
        DfareportingAdsListTypeEnum::AD_SERVING_DEFAULT_AD,
        DfareportingAdsListTypeEnum::AD_SERVING_TRACKING,
        DfareportingAdsListTypeEnum::AD_SERVING_STANDARD_AD,
    ];
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new DfareportingAdsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->ads->dfareportingAdsList($request, $requestSecurity);

    if ($response->adsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdsPatch

Updates an existing ad. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ad;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClickThroughUrl;
use \OpenAPI\OpenAPI\Models\Shared\ClickThroughUrlSuffixProperties;
use \OpenAPI\OpenAPI\Models\Shared\AdCompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\CreativeGroupAssignment;
use \OpenAPI\OpenAPI\Models\Shared\CreativeGroupAssignmentCreativeGroupNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRotation;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssignment;
use \OpenAPI\OpenAPI\Models\Shared\CompanionClickThroughOverride;
use \OpenAPI\OpenAPI\Models\Shared\RichMediaExitOverride;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRotationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRotationWeightCalculationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargetingDaysOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultClickThroughEventTagProperties;
use \OpenAPI\OpenAPI\Models\Shared\DeliverySchedule;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\DeliverySchedulePriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagOverride;
use \OpenAPI\OpenAPI\Models\Shared\GeoTargeting;
use \OpenAPI\OpenAPI\Models\Shared\City;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\Metro;
use \OpenAPI\OpenAPI\Models\Shared\PostalCode;
use \OpenAPI\OpenAPI\Models\Shared\Region;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\LanguageTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Language;
use \OpenAPI\OpenAPI\Models\Shared\PlacementAssignment;
use \OpenAPI\OpenAPI\Models\Shared\ListTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Browser;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionType;
use \OpenAPI\OpenAPI\Models\Shared\MobileCarrier;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemVersion;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystem;
use \OpenAPI\OpenAPI\Models\Shared\PlatformType;
use \OpenAPI\OpenAPI\Models\Shared\AdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ad = new Ad();
    $request->ad->accountId = 'dicta';
    $request->ad->active = false;
    $request->ad->advertiserId = 'maiores';
    $request->ad->advertiserIdDimensionValue = new DimensionValue();
    $request->ad->advertiserIdDimensionValue->dimensionName = 'natus';
    $request->ad->advertiserIdDimensionValue->etag = 'velit';
    $request->ad->advertiserIdDimensionValue->id = 'f5f0642d-ac7a-4f51-9cc4-13aa63aae8d6';
    $request->ad->advertiserIdDimensionValue->kind = 'ducimus';
    $request->ad->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->ad->advertiserIdDimensionValue->value = 'vel';
    $request->ad->archived = false;
    $request->ad->audienceSegmentId = 'labore';
    $request->ad->campaignId = 'possimus';
    $request->ad->campaignIdDimensionValue = new DimensionValue();
    $request->ad->campaignIdDimensionValue->dimensionName = 'facilis';
    $request->ad->campaignIdDimensionValue->etag = 'cum';
    $request->ad->campaignIdDimensionValue->id = '675fd5e6-0b37-45ed-8f6f-bee41f33317f';
    $request->ad->campaignIdDimensionValue->kind = 'debitis';
    $request->ad->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->ad->campaignIdDimensionValue->value = 'corporis';
    $request->ad->clickThroughUrl = new ClickThroughUrl();
    $request->ad->clickThroughUrl->computedClickThroughUrl = 'harum';
    $request->ad->clickThroughUrl->customClickThroughUrl = 'laboriosam';
    $request->ad->clickThroughUrl->defaultLandingPage = false;
    $request->ad->clickThroughUrl->landingPageId = 'ipsa';
    $request->ad->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->ad->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'voluptates';
    $request->ad->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->ad->comments = 'libero';
    $request->ad->compatibility = AdCompatibilityEnum::DISPLAY;
    $request->ad->createInfo = new LastModifiedInfo();
    $request->ad->createInfo->time = 'accusamus';
    $request->ad->creativeGroupAssignments = [
        new CreativeGroupAssignment(),
        new CreativeGroupAssignment(),
        new CreativeGroupAssignment(),
    ];
    $request->ad->creativeRotation = new CreativeRotation();
    $request->ad->creativeRotation->creativeAssignments = [
        new CreativeAssignment(),
        new CreativeAssignment(),
    ];
    $request->ad->creativeRotation->creativeOptimizationConfigurationId = 'aspernatur';
    $request->ad->creativeRotation->type = CreativeRotationTypeEnum::CREATIVE_ROTATION_TYPE_SEQUENTIAL;
    $request->ad->creativeRotation->weightCalculationStrategy = CreativeRotationWeightCalculationStrategyEnum::WEIGHT_STRATEGY_CUSTOM;
    $request->ad->dayPartTargeting = new DayPartTargeting();
    $request->ad->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::WEDNESDAY,
        DayPartTargetingDaysOfWeekEnum::SATURDAY,
    ];
    $request->ad->dayPartTargeting->hoursOfDay = [
        237807,
        795535,
        171853,
    ];
    $request->ad->dayPartTargeting->userLocalTime = false;
    $request->ad->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->ad->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'blanditiis';
    $request->ad->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->ad->deliverySchedule = new DeliverySchedule();
    $request->ad->deliverySchedule->frequencyCap = new FrequencyCap();
    $request->ad->deliverySchedule->frequencyCap->duration = 'in';
    $request->ad->deliverySchedule->frequencyCap->impressions = 'dolore';
    $request->ad->deliverySchedule->hardCutoff = false;
    $request->ad->deliverySchedule->impressionRatio = 'aliquam';
    $request->ad->deliverySchedule->priority = DeliverySchedulePriorityEnum::AD_PRIORITY15;
    $request->ad->dynamicClickTracker = false;
    $request->ad->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-11T16:50:29.051Z');
    $request->ad->eventTagOverrides = [
        new EventTagOverride(),
    ];
    $request->ad->geoTargeting = new GeoTargeting();
    $request->ad->geoTargeting->cities = [
        new City(),
        new City(),
        new City(),
    ];
    $request->ad->geoTargeting->countries = [
        new Country(),
        new Country(),
        new Country(),
    ];
    $request->ad->geoTargeting->excludeCountries = false;
    $request->ad->geoTargeting->metros = [
        new Metro(),
        new Metro(),
        new Metro(),
    ];
    $request->ad->geoTargeting->postalCodes = [
        new PostalCode(),
        new PostalCode(),
        new PostalCode(),
        new PostalCode(),
    ];
    $request->ad->geoTargeting->regions = [
        new Region(),
    ];
    $request->ad->id = 'culpa';
    $request->ad->idDimensionValue = new DimensionValue();
    $request->ad->idDimensionValue->dimensionName = 'corrupti';
    $request->ad->idDimensionValue->etag = 'pariatur';
    $request->ad->idDimensionValue->id = '8f5c0b2f-2fb7-4b19-8a27-6b26916fe1f0';
    $request->ad->idDimensionValue->kind = 'corrupti';
    $request->ad->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->ad->idDimensionValue->value = 'incidunt';
    $request->ad->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->ad->keyValueTargetingExpression->expression = 'sed';
    $request->ad->kind = 'provident';
    $request->ad->languageTargeting = new LanguageTargeting();
    $request->ad->languageTargeting->languages = [
        new Language(),
        new Language(),
    ];
    $request->ad->lastModifiedInfo = new LastModifiedInfo();
    $request->ad->lastModifiedInfo->time = 'necessitatibus';
    $request->ad->name = 'Rosemary McClure';
    $request->ad->placementAssignments = [
        new PlacementAssignment(),
        new PlacementAssignment(),
    ];
    $request->ad->remarketingListExpression = new ListTargetingExpression();
    $request->ad->remarketingListExpression->expression = 'tempora';
    $request->ad->size = new Size();
    $request->ad->size->height = 455444;
    $request->ad->size->iab = false;
    $request->ad->size->id = 'reiciendis';
    $request->ad->size->kind = 'ex';
    $request->ad->size->width = 25497;
    $request->ad->sslCompliant = false;
    $request->ad->sslRequired = false;
    $request->ad->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-10T20:44:13.580Z');
    $request->ad->subaccountId = 'praesentium';
    $request->ad->targetingTemplateId = 'facilis';
    $request->ad->technologyTargeting = new TechnologyTargeting();
    $request->ad->technologyTargeting->browsers = [
        new Browser(),
        new Browser(),
    ];
    $request->ad->technologyTargeting->connectionTypes = [
        new ConnectionType(),
        new ConnectionType(),
    ];
    $request->ad->technologyTargeting->mobileCarriers = [
        new MobileCarrier(),
        new MobileCarrier(),
    ];
    $request->ad->technologyTargeting->operatingSystemVersions = [
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
    ];
    $request->ad->technologyTargeting->operatingSystems = [
        new OperatingSystem(),
        new OperatingSystem(),
        new OperatingSystem(),
    ];
    $request->ad->technologyTargeting->platformTypes = [
        new PlatformType(),
    ];
    $request->ad->type = AdTypeEnum::AD_SERVING_TRACKING;
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'recusandae';
    $request->id = 'fd20e457-e185-48b6-a89f-be3a5aa8e482';
    $request->key = 'ut';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->profileId = 'voluptatem';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new DfareportingAdsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->ads->dfareportingAdsPatch($request, $requestSecurity);

    if ($response->ad !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdsUpdate

Updates an existing ad.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ad;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClickThroughUrl;
use \OpenAPI\OpenAPI\Models\Shared\ClickThroughUrlSuffixProperties;
use \OpenAPI\OpenAPI\Models\Shared\AdCompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\CreativeGroupAssignment;
use \OpenAPI\OpenAPI\Models\Shared\CreativeGroupAssignmentCreativeGroupNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRotation;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssignment;
use \OpenAPI\OpenAPI\Models\Shared\CompanionClickThroughOverride;
use \OpenAPI\OpenAPI\Models\Shared\RichMediaExitOverride;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRotationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRotationWeightCalculationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargetingDaysOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultClickThroughEventTagProperties;
use \OpenAPI\OpenAPI\Models\Shared\DeliverySchedule;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\DeliverySchedulePriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagOverride;
use \OpenAPI\OpenAPI\Models\Shared\GeoTargeting;
use \OpenAPI\OpenAPI\Models\Shared\City;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\Metro;
use \OpenAPI\OpenAPI\Models\Shared\PostalCode;
use \OpenAPI\OpenAPI\Models\Shared\Region;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\LanguageTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Language;
use \OpenAPI\OpenAPI\Models\Shared\PlacementAssignment;
use \OpenAPI\OpenAPI\Models\Shared\ListTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Browser;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionType;
use \OpenAPI\OpenAPI\Models\Shared\MobileCarrier;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemVersion;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystem;
use \OpenAPI\OpenAPI\Models\Shared\PlatformType;
use \OpenAPI\OpenAPI\Models\Shared\AdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ad = new Ad();
    $request->ad->accountId = 'esse';
    $request->ad->active = false;
    $request->ad->advertiserId = 'ipsam';
    $request->ad->advertiserIdDimensionValue = new DimensionValue();
    $request->ad->advertiserIdDimensionValue->dimensionName = 'sit';
    $request->ad->advertiserIdDimensionValue->etag = 'voluptatum';
    $request->ad->advertiserIdDimensionValue->id = '8e518620-65e9-404f-bb11-94b8abf603a7';
    $request->ad->advertiserIdDimensionValue->kind = 'unde';
    $request->ad->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->ad->advertiserIdDimensionValue->value = 'provident';
    $request->ad->archived = false;
    $request->ad->audienceSegmentId = 'repellendus';
    $request->ad->campaignId = 'delectus';
    $request->ad->campaignIdDimensionValue = new DimensionValue();
    $request->ad->campaignIdDimensionValue->dimensionName = 'voluptates';
    $request->ad->campaignIdDimensionValue->etag = 'perferendis';
    $request->ad->campaignIdDimensionValue->id = 'ab7da8a5-0ce1-487f-86bc-173d689eee95';
    $request->ad->campaignIdDimensionValue->kind = 'aspernatur';
    $request->ad->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->ad->campaignIdDimensionValue->value = 'maiores';
    $request->ad->clickThroughUrl = new ClickThroughUrl();
    $request->ad->clickThroughUrl->computedClickThroughUrl = 'corrupti';
    $request->ad->clickThroughUrl->customClickThroughUrl = 'at';
    $request->ad->clickThroughUrl->defaultLandingPage = false;
    $request->ad->clickThroughUrl->landingPageId = 'error';
    $request->ad->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->ad->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'blanditiis';
    $request->ad->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->ad->comments = 'suscipit';
    $request->ad->compatibility = AdCompatibilityEnum::IN_STREAM_AUDIO;
    $request->ad->createInfo = new LastModifiedInfo();
    $request->ad->createInfo->time = 'atque';
    $request->ad->creativeGroupAssignments = [
        new CreativeGroupAssignment(),
        new CreativeGroupAssignment(),
        new CreativeGroupAssignment(),
    ];
    $request->ad->creativeRotation = new CreativeRotation();
    $request->ad->creativeRotation->creativeAssignments = [
        new CreativeAssignment(),
    ];
    $request->ad->creativeRotation->creativeOptimizationConfigurationId = 'recusandae';
    $request->ad->creativeRotation->type = CreativeRotationTypeEnum::CREATIVE_ROTATION_TYPE_RANDOM;
    $request->ad->creativeRotation->weightCalculationStrategy = CreativeRotationWeightCalculationStrategyEnum::WEIGHT_STRATEGY_OPTIMIZED;
    $request->ad->dayPartTargeting = new DayPartTargeting();
    $request->ad->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::SUNDAY,
        DayPartTargetingDaysOfWeekEnum::MONDAY,
    ];
    $request->ad->dayPartTargeting->hoursOfDay = [
        116098,
        36033,
        106429,
        174772,
    ];
    $request->ad->dayPartTargeting->userLocalTime = false;
    $request->ad->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->ad->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'enim';
    $request->ad->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->ad->deliverySchedule = new DeliverySchedule();
    $request->ad->deliverySchedule->frequencyCap = new FrequencyCap();
    $request->ad->deliverySchedule->frequencyCap->duration = 'laboriosam';
    $request->ad->deliverySchedule->frequencyCap->impressions = 'velit';
    $request->ad->deliverySchedule->hardCutoff = false;
    $request->ad->deliverySchedule->impressionRatio = 'a';
    $request->ad->deliverySchedule->priority = DeliverySchedulePriorityEnum::AD_PRIORITY10;
    $request->ad->dynamicClickTracker = false;
    $request->ad->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-04T04:20:12.809Z');
    $request->ad->eventTagOverrides = [
        new EventTagOverride(),
    ];
    $request->ad->geoTargeting = new GeoTargeting();
    $request->ad->geoTargeting->cities = [
        new City(),
        new City(),
        new City(),
    ];
    $request->ad->geoTargeting->countries = [
        new Country(),
        new Country(),
        new Country(),
        new Country(),
    ];
    $request->ad->geoTargeting->excludeCountries = false;
    $request->ad->geoTargeting->metros = [
        new Metro(),
        new Metro(),
        new Metro(),
    ];
    $request->ad->geoTargeting->postalCodes = [
        new PostalCode(),
        new PostalCode(),
    ];
    $request->ad->geoTargeting->regions = [
        new Region(),
    ];
    $request->ad->id = 'eveniet';
    $request->ad->idDimensionValue = new DimensionValue();
    $request->ad->idDimensionValue->dimensionName = 'occaecati';
    $request->ad->idDimensionValue->etag = 'consequuntur';
    $request->ad->idDimensionValue->id = '2a57a15b-e3e0-4608-87e2-b6e3ab8845f0';
    $request->ad->idDimensionValue->kind = 'corporis';
    $request->ad->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->ad->idDimensionValue->value = 'nihil';
    $request->ad->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->ad->keyValueTargetingExpression->expression = 'mollitia';
    $request->ad->kind = 'voluptas';
    $request->ad->languageTargeting = new LanguageTargeting();
    $request->ad->languageTargeting->languages = [
        new Language(),
    ];
    $request->ad->lastModifiedInfo = new LastModifiedInfo();
    $request->ad->lastModifiedInfo->time = 'maiores';
    $request->ad->name = 'Todd O'Reilly';
    $request->ad->placementAssignments = [
        new PlacementAssignment(),
        new PlacementAssignment(),
        new PlacementAssignment(),
    ];
    $request->ad->remarketingListExpression = new ListTargetingExpression();
    $request->ad->remarketingListExpression->expression = 'nesciunt';
    $request->ad->size = new Size();
    $request->ad->size->height = 63207;
    $request->ad->size->iab = false;
    $request->ad->size->id = 'recusandae';
    $request->ad->size->kind = 'omnis';
    $request->ad->size->width = 309251;
    $request->ad->sslCompliant = false;
    $request->ad->sslRequired = false;
    $request->ad->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-06T19:48:35.360Z');
    $request->ad->subaccountId = 'ut';
    $request->ad->targetingTemplateId = 'culpa';
    $request->ad->technologyTargeting = new TechnologyTargeting();
    $request->ad->technologyTargeting->browsers = [
        new Browser(),
    ];
    $request->ad->technologyTargeting->connectionTypes = [
        new ConnectionType(),
        new ConnectionType(),
        new ConnectionType(),
        new ConnectionType(),
    ];
    $request->ad->technologyTargeting->mobileCarriers = [
        new MobileCarrier(),
        new MobileCarrier(),
        new MobileCarrier(),
    ];
    $request->ad->technologyTargeting->operatingSystemVersions = [
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
    ];
    $request->ad->technologyTargeting->operatingSystems = [
        new OperatingSystem(),
        new OperatingSystem(),
    ];
    $request->ad->technologyTargeting->platformTypes = [
        new PlatformType(),
        new PlatformType(),
        new PlatformType(),
        new PlatformType(),
    ];
    $request->ad->type = AdTypeEnum::AD_SERVING_CLICK_TRACKER;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eum';
    $request->fields = 'reiciendis';
    $request->key = 'provident';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->profileId = 'ullam';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'nostrum';

    $requestSecurity = new DfareportingAdsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->ads->dfareportingAdsUpdate($request, $requestSecurity);

    if ($response->ad !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
