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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->fields = 'natus';
    $request->id = 'da3f2ced-a7e2-43f2-a574-11faf4b7544e';
    $request->key = 'modi';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->profileId = 'explicabo';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'aperiam';

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
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerCampaignLink;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerCampaignLinkLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerCampaignLinkMeasurementPartnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCampaignsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->campaign = new Campaign();
    $request->campaign->accountId = 'deleniti';
    $request->campaign->adBlockingConfiguration = new AdBlockingConfiguration();
    $request->campaign->adBlockingConfiguration->enabled = false;
    $request->campaign->additionalCreativeOptimizationConfigurations = [
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
    ];
    $request->campaign->advertiserGroupId = 'voluptate';
    $request->campaign->advertiserId = 'similique';
    $request->campaign->advertiserIdDimensionValue = new DimensionValue();
    $request->campaign->advertiserIdDimensionValue->dimensionName = 'minima';
    $request->campaign->advertiserIdDimensionValue->etag = 'libero';
    $request->campaign->advertiserIdDimensionValue->id = '40463a7d-575f-4140-8e76-4ad7334ec1b7';
    $request->campaign->advertiserIdDimensionValue->kind = 'quas';
    $request->campaign->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->campaign->advertiserIdDimensionValue->value = 'facilis';
    $request->campaign->archived = false;
    $request->campaign->audienceSegmentGroups = [
        new AudienceSegmentGroup(),
    ];
    $request->campaign->billingInvoiceCode = 'autem';
    $request->campaign->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->campaign->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'fuga';
    $request->campaign->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->campaign->comment = 'alias';
    $request->campaign->createInfo = new LastModifiedInfo();
    $request->campaign->createInfo->time = 'rem';
    $request->campaign->creativeGroupIds = [
        'quos',
    ];
    $request->campaign->creativeOptimizationConfiguration = new CreativeOptimizationConfiguration();
    $request->campaign->creativeOptimizationConfiguration->id = 'laudantium';
    $request->campaign->creativeOptimizationConfiguration->name = 'Dr. Patrick Beier';
    $request->campaign->creativeOptimizationConfiguration->optimizationActivitys = [
        new OptimizationActivity(),
        new OptimizationActivity(),
        new OptimizationActivity(),
    ];
    $request->campaign->creativeOptimizationConfiguration->optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum::VIDEO_COMPLETION;
    $request->campaign->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->campaign->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'officia';
    $request->campaign->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->campaign->defaultLandingPageId = 'sed';
    $request->campaign->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-31');
    $request->campaign->eventTagOverrides = [
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
    ];
    $request->campaign->externalId = 'hic';
    $request->campaign->id = 'voluptatem';
    $request->campaign->idDimensionValue = new DimensionValue();
    $request->campaign->idDimensionValue->dimensionName = 'incidunt';
    $request->campaign->idDimensionValue->etag = 'qui';
    $request->campaign->idDimensionValue->id = '2eb2164c-f9ab-4836-ac72-3ffda9e06bee';
    $request->campaign->idDimensionValue->kind = 'non';
    $request->campaign->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->campaign->idDimensionValue->value = 'quia';
    $request->campaign->kind = 'ullam';
    $request->campaign->lastModifiedInfo = new LastModifiedInfo();
    $request->campaign->lastModifiedInfo->time = 'quisquam';
    $request->campaign->measurementPartnerLink = new MeasurementPartnerCampaignLink();
    $request->campaign->measurementPartnerLink->linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum::MEASUREMENT_PARTNER_UNLINKED;
    $request->campaign->measurementPartnerLink->measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum::DOUBLE_VERIFY;
    $request->campaign->measurementPartnerLink->partnerCampaignId = 'eligendi';
    $request->campaign->name = 'Mrs. Rochelle Bradtke';
    $request->campaign->nielsenOcrEnabled = false;
    $request->campaign->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-19');
    $request->campaign->subaccountId = 'facilis';
    $request->campaign->traffickerEmails = [
        'a',
        'iste',
        'dicta',
        'quos',
    ];
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->fields = 'itaque';
    $request->key = 'maxime';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->profileId = 'consequuntur';
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'doloribus';

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
    $request->accessToken = 'porro';
    $request->advertiserGroupIds = [
        'totam',
        'reiciendis',
        'ab',
        'sint',
    ];
    $request->advertiserIds = [
        'esse',
        'iure',
    ];
    $request->alt = AltEnum::MEDIA;
    $request->archived = false;
    $request->atLeastOneOptimizationActivity = false;
    $request->callback = 'nesciunt';
    $request->excludedIds = [
        'vel',
        'neque',
        'corporis',
        'voluptas',
    ];
    $request->fields = 'consequuntur';
    $request->ids = [
        'reprehenderit',
        'distinctio',
        'eius',
    ];
    $request->key = 'ipsa';
    $request->maxResults = 522062;
    $request->oauthToken = 'maiores';
    $request->overriddenEventTagId = 'accusantium';
    $request->pageToken = 'veniam';
    $request->prettyPrint = false;
    $request->profileId = 'saepe';
    $request->quotaUser = 'neque';
    $request->searchString = 'facere';
    $request->sortField = DfareportingCampaignsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingCampaignsListSortOrderEnum::DESCENDING;
    $request->subaccountId = 'doloribus';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'est';

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
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerCampaignLink;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerCampaignLinkLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerCampaignLinkMeasurementPartnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCampaignsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->campaign = new Campaign();
    $request->campaign->accountId = 'velit';
    $request->campaign->adBlockingConfiguration = new AdBlockingConfiguration();
    $request->campaign->adBlockingConfiguration->enabled = false;
    $request->campaign->additionalCreativeOptimizationConfigurations = [
        new CreativeOptimizationConfiguration(),
    ];
    $request->campaign->advertiserGroupId = 'nesciunt';
    $request->campaign->advertiserId = 'similique';
    $request->campaign->advertiserIdDimensionValue = new DimensionValue();
    $request->campaign->advertiserIdDimensionValue->dimensionName = 'illo';
    $request->campaign->advertiserIdDimensionValue->etag = 'repellat';
    $request->campaign->advertiserIdDimensionValue->id = '5fd94259-c0b3-46f2-9ea9-44f3b756c11f';
    $request->campaign->advertiserIdDimensionValue->kind = 'nisi';
    $request->campaign->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->campaign->advertiserIdDimensionValue->value = 'dolor';
    $request->campaign->archived = false;
    $request->campaign->audienceSegmentGroups = [
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
    ];
    $request->campaign->billingInvoiceCode = 'fuga';
    $request->campaign->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->campaign->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'minima';
    $request->campaign->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->campaign->comment = 'architecto';
    $request->campaign->createInfo = new LastModifiedInfo();
    $request->campaign->createInfo->time = 'qui';
    $request->campaign->creativeGroupIds = [
        'magni',
        'incidunt',
    ];
    $request->campaign->creativeOptimizationConfiguration = new CreativeOptimizationConfiguration();
    $request->campaign->creativeOptimizationConfiguration->id = 'adipisci';
    $request->campaign->creativeOptimizationConfiguration->name = 'Rodney Heller';
    $request->campaign->creativeOptimizationConfiguration->optimizationActivitys = [
        new OptimizationActivity(),
        new OptimizationActivity(),
        new OptimizationActivity(),
        new OptimizationActivity(),
    ];
    $request->campaign->creativeOptimizationConfiguration->optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum::CLICK;
    $request->campaign->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->campaign->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'nemo';
    $request->campaign->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->campaign->defaultLandingPageId = 'culpa';
    $request->campaign->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-08');
    $request->campaign->eventTagOverrides = [
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
    ];
    $request->campaign->externalId = 'modi';
    $request->campaign->id = 'veniam';
    $request->campaign->idDimensionValue = new DimensionValue();
    $request->campaign->idDimensionValue->dimensionName = 'quod';
    $request->campaign->idDimensionValue->etag = 'itaque';
    $request->campaign->idDimensionValue->id = 'fc5fde10-a0ce-4216-9e51-0019c6dc5e34';
    $request->campaign->idDimensionValue->kind = 'dignissimos';
    $request->campaign->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->campaign->idDimensionValue->value = 'sed';
    $request->campaign->kind = 'odio';
    $request->campaign->lastModifiedInfo = new LastModifiedInfo();
    $request->campaign->lastModifiedInfo->time = 'natus';
    $request->campaign->measurementPartnerLink = new MeasurementPartnerCampaignLink();
    $request->campaign->measurementPartnerLink->linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum::MEASUREMENT_PARTNER_LINK_OPT_OUT;
    $request->campaign->measurementPartnerLink->measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum::DOUBLE_VERIFY;
    $request->campaign->measurementPartnerLink->partnerCampaignId = 'doloribus';
    $request->campaign->name = 'Rickey Waters';
    $request->campaign->nielsenOcrEnabled = false;
    $request->campaign->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-28');
    $request->campaign->subaccountId = 'hic';
    $request->campaign->traffickerEmails = [
        'aspernatur',
        'libero',
        'nam',
    ];
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'id';
    $request->id = 'e6c3d5db-3ade-4bd5-9aea-4c506a8aa94c';
    $request->key = 'perferendis';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->profileId = 'aliquid';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'eligendi';

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
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerCampaignLink;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerCampaignLinkLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerCampaignLinkMeasurementPartnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCampaignsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->campaign = new Campaign();
    $request->campaign->accountId = 'nostrum';
    $request->campaign->adBlockingConfiguration = new AdBlockingConfiguration();
    $request->campaign->adBlockingConfiguration->enabled = false;
    $request->campaign->additionalCreativeOptimizationConfigurations = [
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
    ];
    $request->campaign->advertiserGroupId = 'unde';
    $request->campaign->advertiserId = 'nulla';
    $request->campaign->advertiserIdDimensionValue = new DimensionValue();
    $request->campaign->advertiserIdDimensionValue->dimensionName = 'error';
    $request->campaign->advertiserIdDimensionValue->etag = 'mollitia';
    $request->campaign->advertiserIdDimensionValue->id = '4578adc1-ac60-40de-8001-ac802e2ec09f';
    $request->campaign->advertiserIdDimensionValue->kind = 'maiores';
    $request->campaign->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->campaign->advertiserIdDimensionValue->value = 'maiores';
    $request->campaign->archived = false;
    $request->campaign->audienceSegmentGroups = [
        new AudienceSegmentGroup(),
    ];
    $request->campaign->billingInvoiceCode = 'asperiores';
    $request->campaign->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->campaign->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'rem';
    $request->campaign->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->campaign->comment = 'dicta';
    $request->campaign->createInfo = new LastModifiedInfo();
    $request->campaign->createInfo->time = 'suscipit';
    $request->campaign->creativeGroupIds = [
        'doloribus',
        'velit',
        'eius',
        'esse',
    ];
    $request->campaign->creativeOptimizationConfiguration = new CreativeOptimizationConfiguration();
    $request->campaign->creativeOptimizationConfiguration->id = 'in';
    $request->campaign->creativeOptimizationConfiguration->name = 'Arthur Doyle';
    $request->campaign->creativeOptimizationConfiguration->optimizationActivitys = [
        new OptimizationActivity(),
    ];
    $request->campaign->creativeOptimizationConfiguration->optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum::CLICK;
    $request->campaign->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->campaign->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'impedit';
    $request->campaign->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->campaign->defaultLandingPageId = 'beatae';
    $request->campaign->endDate = DateTime::createFromFormat('Y-m-d', '2022-11-19');
    $request->campaign->eventTagOverrides = [
        new EventTagOverride(),
    ];
    $request->campaign->externalId = 'corporis';
    $request->campaign->id = 'rerum';
    $request->campaign->idDimensionValue = new DimensionValue();
    $request->campaign->idDimensionValue->dimensionName = 'alias';
    $request->campaign->idDimensionValue->etag = 'error';
    $request->campaign->idDimensionValue->id = '60a66815-1a47-42af-923c-5949f83f350c';
    $request->campaign->idDimensionValue->kind = 'tenetur';
    $request->campaign->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->campaign->idDimensionValue->value = 'molestiae';
    $request->campaign->kind = 'aliquid';
    $request->campaign->lastModifiedInfo = new LastModifiedInfo();
    $request->campaign->lastModifiedInfo->time = 'asperiores';
    $request->campaign->measurementPartnerLink = new MeasurementPartnerCampaignLink();
    $request->campaign->measurementPartnerLink->linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum::MEASUREMENT_PARTNER_MODE_CHANGE_PENDING;
    $request->campaign->measurementPartnerLink->measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum::DOUBLE_VERIFY;
    $request->campaign->measurementPartnerLink->partnerCampaignId = 'perspiciatis';
    $request->campaign->name = 'Mildred Schinner';
    $request->campaign->nielsenOcrEnabled = false;
    $request->campaign->startDate = DateTime::createFromFormat('Y-m-d', '2020-10-17');
    $request->campaign->subaccountId = 'quidem';
    $request->campaign->traffickerEmails = [
        'voluptates',
        'fugit',
    ];
    $request->accessToken = 'eius';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'asperiores';
    $request->key = 'esse';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->profileId = 'sint';
    $request->quotaUser = 'repellat';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'animi';

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
