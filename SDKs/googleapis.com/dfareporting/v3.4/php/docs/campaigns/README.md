# campaigns

### Available Operations

* [dfareportingCampaignsGet](#dfareportingcampaignsget) - Gets one campaign by ID.
* [dfareportingCampaignsInsert](#dfareportingcampaignsinsert) - Inserts a new campaign.
* [dfareportingCampaignsList](#dfareportingcampaignslist) - Retrieves a list of campaigns, possibly filtered. This method supports paging.
* [dfareportingCampaignsPatch](#dfareportingcampaignspatch) - Updates an existing campaign. This method supports patch semantics.
* [dfareportingCampaignsUpdate](#dfareportingcampaignsupdate) - Updates an existing campaign.

## dfareportingCampaignsGet

Gets one campaign by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCampaignsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rerum';
    $request->fields = 'ea';
    $request->id = '07f3c93c-73b9-4da3-b2ce-da7e23f22574';
    $request->key = 'ab';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->profileId = 'hic';
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DfareportingCampaignsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaigns->dfareportingCampaignsGet($request, $requestSecurity);

    if ($response->campaign !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCampaignsInsert

Inserts a new campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Campaign;
use \OpenAPI\OpenAPI\Models\Shared\AdBlockingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CreativeOptimizationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OptimizationActivity;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeOptimizationConfigurationOptimizationModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudienceSegmentGroup;
use \OpenAPI\OpenAPI\Models\Shared\AudienceSegment;
use \OpenAPI\OpenAPI\Models\Shared\ClickThroughUrlSuffixProperties;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\DefaultClickThroughEventTagProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventTagOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCampaignsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->campaign = new Campaign();
    $request->campaign->accountId = 'in';
    $request->campaign->adBlockingConfiguration = new AdBlockingConfiguration();
    $request->campaign->adBlockingConfiguration->clickThroughUrl = 'exercitationem';
    $request->campaign->adBlockingConfiguration->creativeBundleId = 'labore';
    $request->campaign->adBlockingConfiguration->enabled = false;
    $request->campaign->adBlockingConfiguration->overrideClickThroughUrl = false;
    $request->campaign->additionalCreativeOptimizationConfigurations = [
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
    ];
    $request->campaign->advertiserGroupId = 'repudiandae';
    $request->campaign->advertiserId = 'modi';
    $request->campaign->advertiserIdDimensionValue = new DimensionValue();
    $request->campaign->advertiserIdDimensionValue->dimensionName = 'in';
    $request->campaign->advertiserIdDimensionValue->etag = 'explicabo';
    $request->campaign->advertiserIdDimensionValue->id = 'e802857a-5b40-4463-a7d5-75f1400e764a';
    $request->campaign->advertiserIdDimensionValue->kind = 'possimus';
    $request->campaign->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->campaign->advertiserIdDimensionValue->value = 'consectetur';
    $request->campaign->archived = false;
    $request->campaign->audienceSegmentGroups = [
        new AudienceSegmentGroup(),
    ];
    $request->campaign->billingInvoiceCode = 'quaerat';
    $request->campaign->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->campaign->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'itaque';
    $request->campaign->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->campaign->comment = 'minus';
    $request->campaign->createInfo = new LastModifiedInfo();
    $request->campaign->createInfo->time = 'sunt';
    $request->campaign->creativeGroupIds = [
        'iusto',
        'quas',
        'et',
    ];
    $request->campaign->creativeOptimizationConfiguration = new CreativeOptimizationConfiguration();
    $request->campaign->creativeOptimizationConfiguration->id = 'facilis';
    $request->campaign->creativeOptimizationConfiguration->name = 'Ms. Ella Pfannerstill V';
    $request->campaign->creativeOptimizationConfiguration->optimizationActivitys = [
        new OptimizationActivity(),
        new OptimizationActivity(),
        new OptimizationActivity(),
    ];
    $request->campaign->creativeOptimizationConfiguration->optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum::VIDEO_COMPLETION;
    $request->campaign->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->campaign->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'veritatis';
    $request->campaign->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->campaign->defaultLandingPageId = 'quae';
    $request->campaign->endDate = DateTime::createFromFormat('Y-m-d', '2022-02-04');
    $request->campaign->eventTagOverrides = [
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
    ];
    $request->campaign->externalId = 'mollitia';
    $request->campaign->id = 'nulla';
    $request->campaign->idDimensionValue = new DimensionValue();
    $request->campaign->idDimensionValue->dimensionName = 'officia';
    $request->campaign->idDimensionValue->etag = 'sed';
    $request->campaign->idDimensionValue->id = '00ef0422-eb21-464c-b9ab-8366c723ffda';
    $request->campaign->idDimensionValue->kind = 'natus';
    $request->campaign->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->campaign->idDimensionValue->value = 'doloremque';
    $request->campaign->kind = 'nisi';
    $request->campaign->lastModifiedInfo = new LastModifiedInfo();
    $request->campaign->lastModifiedInfo->time = 'rerum';
    $request->campaign->name = 'Pat Fritsch';
    $request->campaign->nielsenOcrEnabled = false;
    $request->campaign->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-19');
    $request->campaign->subaccountId = 'dicta';
    $request->campaign->traffickerEmails = [
        'eligendi',
        'quae',
        'officiis',
        'architecto',
    ];
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'rem';
    $request->key = 'perferendis';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->profileId = 'reiciendis';
    $request->quotaUser = 'a';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DfareportingCampaignsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaigns->dfareportingCampaignsInsert($request, $requestSecurity);

    if ($response->campaign !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCampaignsList

Retrieves a list of campaigns, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCampaignsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ullam';
    $request->advertiserGroupIds = [
        'modi',
        'itaque',
    ];
    $request->advertiserIds = [
        'modi',
        'consequuntur',
        'assumenda',
        'vero',
    ];
    $request->alt = AltEnum::PROTO;
    $request->archived = false;
    $request->atLeastOneOptimizationActivity = false;
    $request->callback = 'impedit';
    $request->excludedIds = [
        'accusamus',
        'totam',
        'reiciendis',
        'ab',
    ];
    $request->fields = 'sint';
    $request->ids = [
        'esse',
        'iure',
    ];
    $request->key = 'odio';
    $request->maxResults = 202796;
    $request->oauthToken = 'debitis';
    $request->overriddenEventTagId = 'vel';
    $request->pageToken = 'neque';
    $request->prettyPrint = false;
    $request->profileId = 'corporis';
    $request->quotaUser = 'voluptas';
    $request->searchString = 'consequuntur';
    $request->sortField = DfareportingCampaignsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingCampaignsListSortOrderEnum::ASCENDING;
    $request->subaccountId = 'distinctio';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new DfareportingCampaignsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaigns->dfareportingCampaignsList($request, $requestSecurity);

    if ($response->campaignsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCampaignsPatch

Updates an existing campaign. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Campaign;
use \OpenAPI\OpenAPI\Models\Shared\AdBlockingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CreativeOptimizationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OptimizationActivity;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeOptimizationConfigurationOptimizationModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudienceSegmentGroup;
use \OpenAPI\OpenAPI\Models\Shared\AudienceSegment;
use \OpenAPI\OpenAPI\Models\Shared\ClickThroughUrlSuffixProperties;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\DefaultClickThroughEventTagProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventTagOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCampaignsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->campaign = new Campaign();
    $request->campaign->accountId = 'maiores';
    $request->campaign->adBlockingConfiguration = new AdBlockingConfiguration();
    $request->campaign->adBlockingConfiguration->clickThroughUrl = 'accusantium';
    $request->campaign->adBlockingConfiguration->creativeBundleId = 'veniam';
    $request->campaign->adBlockingConfiguration->enabled = false;
    $request->campaign->adBlockingConfiguration->overrideClickThroughUrl = false;
    $request->campaign->additionalCreativeOptimizationConfigurations = [
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
    ];
    $request->campaign->advertiserGroupId = 'neque';
    $request->campaign->advertiserId = 'facere';
    $request->campaign->advertiserIdDimensionValue = new DimensionValue();
    $request->campaign->advertiserIdDimensionValue->dimensionName = 'aliquam';
    $request->campaign->advertiserIdDimensionValue->etag = 'quos';
    $request->campaign->advertiserIdDimensionValue->id = 'fdaf313a-1f5f-4d94-a59c-0b36f25ea944';
    $request->campaign->advertiserIdDimensionValue->kind = 'tenetur';
    $request->campaign->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->campaign->advertiserIdDimensionValue->value = 'libero';
    $request->campaign->archived = false;
    $request->campaign->audienceSegmentGroups = [
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
    ];
    $request->campaign->billingInvoiceCode = 'minima';
    $request->campaign->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->campaign->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'ex';
    $request->campaign->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->campaign->comment = 'minus';
    $request->campaign->createInfo = new LastModifiedInfo();
    $request->campaign->createInfo->time = 'ab';
    $request->campaign->creativeGroupIds = [
        'hic',
    ];
    $request->campaign->creativeOptimizationConfiguration = new CreativeOptimizationConfiguration();
    $request->campaign->creativeOptimizationConfiguration->id = 'nisi';
    $request->campaign->creativeOptimizationConfiguration->name = 'Rodney Kunze';
    $request->campaign->creativeOptimizationConfiguration->optimizationActivitys = [
        new OptimizationActivity(),
    ];
    $request->campaign->creativeOptimizationConfiguration->optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum::CLICK;
    $request->campaign->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->campaign->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'aliquid';
    $request->campaign->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->campaign->defaultLandingPageId = 'magni';
    $request->campaign->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-05');
    $request->campaign->eventTagOverrides = [
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
    ];
    $request->campaign->externalId = 'dolor';
    $request->campaign->id = 'exercitationem';
    $request->campaign->idDimensionValue = new DimensionValue();
    $request->campaign->idDimensionValue->dimensionName = 'expedita';
    $request->campaign->idDimensionValue->etag = 'facilis';
    $request->campaign->idDimensionValue->id = 'c05a23a4-5cef-4c5f-9e10-a0ce2169e510';
    $request->campaign->idDimensionValue->kind = 'perferendis';
    $request->campaign->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->campaign->idDimensionValue->value = 'provident';
    $request->campaign->kind = 'cumque';
    $request->campaign->lastModifiedInfo = new LastModifiedInfo();
    $request->campaign->lastModifiedInfo->time = 'iure';
    $request->campaign->name = 'Jermaine Hettinger';
    $request->campaign->nielsenOcrEnabled = false;
    $request->campaign->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-04');
    $request->campaign->subaccountId = 'laboriosam';
    $request->campaign->traffickerEmails = [
        'odio',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'doloribus';
    $request->id = 'bbe6949f-b2bb-44ec-ae6c-3d5db3adebd5';
    $request->key = 'facere';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->profileId = 'eveniet';
    $request->quotaUser = 'laborum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new DfareportingCampaignsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaigns->dfareportingCampaignsPatch($request, $requestSecurity);

    if ($response->campaign !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCampaignsUpdate

Updates an existing campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Campaign;
use \OpenAPI\OpenAPI\Models\Shared\AdBlockingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CreativeOptimizationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OptimizationActivity;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeOptimizationConfigurationOptimizationModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudienceSegmentGroup;
use \OpenAPI\OpenAPI\Models\Shared\AudienceSegment;
use \OpenAPI\OpenAPI\Models\Shared\ClickThroughUrlSuffixProperties;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\DefaultClickThroughEventTagProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventTagOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCampaignsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->campaign = new Campaign();
    $request->campaign->accountId = 'alias';
    $request->campaign->adBlockingConfiguration = new AdBlockingConfiguration();
    $request->campaign->adBlockingConfiguration->clickThroughUrl = 'suscipit';
    $request->campaign->adBlockingConfiguration->creativeBundleId = 'deserunt';
    $request->campaign->adBlockingConfiguration->enabled = false;
    $request->campaign->adBlockingConfiguration->overrideClickThroughUrl = false;
    $request->campaign->additionalCreativeOptimizationConfigurations = [
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
    ];
    $request->campaign->advertiserGroupId = 'laborum';
    $request->campaign->advertiserId = 'est';
    $request->campaign->advertiserIdDimensionValue = new DimensionValue();
    $request->campaign->advertiserIdDimensionValue->dimensionName = 'occaecati';
    $request->campaign->advertiserIdDimensionValue->etag = 'labore';
    $request->campaign->advertiserIdDimensionValue->id = 'c02644cf-5e9d-49a4-978a-dc1ac600dec0';
    $request->campaign->advertiserIdDimensionValue->kind = 'eaque';
    $request->campaign->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->campaign->advertiserIdDimensionValue->value = 'similique';
    $request->campaign->archived = false;
    $request->campaign->audienceSegmentGroups = [
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
    ];
    $request->campaign->billingInvoiceCode = 'blanditiis';
    $request->campaign->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->campaign->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'quae';
    $request->campaign->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->campaign->comment = 'magni';
    $request->campaign->createInfo = new LastModifiedInfo();
    $request->campaign->createInfo->time = 'officiis';
    $request->campaign->creativeGroupIds = [
        'necessitatibus',
    ];
    $request->campaign->creativeOptimizationConfiguration = new CreativeOptimizationConfiguration();
    $request->campaign->creativeOptimizationConfiguration->id = 'impedit';
    $request->campaign->creativeOptimizationConfiguration->name = 'Sonia Wiegand';
    $request->campaign->creativeOptimizationConfiguration->optimizationActivitys = [
        new OptimizationActivity(),
        new OptimizationActivity(),
        new OptimizationActivity(),
        new OptimizationActivity(),
    ];
    $request->campaign->creativeOptimizationConfiguration->optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum::CLICK;
    $request->campaign->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->campaign->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'asperiores';
    $request->campaign->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->campaign->defaultLandingPageId = 'rem';
    $request->campaign->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-15');
    $request->campaign->eventTagOverrides = [
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
    ];
    $request->campaign->externalId = 'doloribus';
    $request->campaign->id = 'velit';
    $request->campaign->idDimensionValue = new DimensionValue();
    $request->campaign->idDimensionValue->dimensionName = 'eius';
    $request->campaign->idDimensionValue->etag = 'esse';
    $request->campaign->idDimensionValue->id = '7c13e902-c141-425b-8960-a668151a472a';
    $request->campaign->idDimensionValue->kind = 'delectus';
    $request->campaign->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->campaign->idDimensionValue->value = 'sed';
    $request->campaign->kind = 'nesciunt';
    $request->campaign->lastModifiedInfo = new LastModifiedInfo();
    $request->campaign->lastModifiedInfo->time = 'maxime';
    $request->campaign->name = 'Shelly Gutmann';
    $request->campaign->nielsenOcrEnabled = false;
    $request->campaign->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-06');
    $request->campaign->subaccountId = 'reiciendis';
    $request->campaign->traffickerEmails = [
        'nemo',
    ];
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->fields = 'quas';
    $request->key = 'molestiae';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->profileId = 'asperiores';
    $request->quotaUser = 'a';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'perspiciatis';

    $requestSecurity = new DfareportingCampaignsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaigns->dfareportingCampaignsUpdate($request, $requestSecurity);

    if ($response->campaign !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
