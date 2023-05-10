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
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'ullam';
    $request->id = '44ec42de-fcce-48f1-9777-73e63562a7b4';
    $request->key = 'ipsa';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->profileId = 'maiores';
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'saepe';

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
    $request->campaign->accountId = 'facere';
    $request->campaign->adBlockingConfiguration = new AdBlockingConfiguration();
    $request->campaign->adBlockingConfiguration->enabled = false;
    $request->campaign->additionalCreativeOptimizationConfigurations = [
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
    ];
    $request->campaign->advertiserGroupId = 'quos';
    $request->campaign->advertiserId = 'doloribus';
    $request->campaign->advertiserIdDimensionValue = new DimensionValue();
    $request->campaign->advertiserIdDimensionValue->dimensionName = 'fugiat';
    $request->campaign->advertiserIdDimensionValue->etag = 'est';
    $request->campaign->advertiserIdDimensionValue->id = 'f313a1f5-fd94-4259-80b3-6f25ea944f3b';
    $request->campaign->advertiserIdDimensionValue->kind = 'in';
    $request->campaign->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->campaign->advertiserIdDimensionValue->value = 'ex';
    $request->campaign->archived = false;
    $request->campaign->audienceSegmentGroups = [
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
    ];
    $request->campaign->billingInvoiceCode = 'ab';
    $request->campaign->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->campaign->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'beatae';
    $request->campaign->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->campaign->comment = 'hic';
    $request->campaign->createInfo = new LastModifiedInfo();
    $request->campaign->createInfo->time = 'nisi';
    $request->campaign->creativeGroupIds = [
        'dolor',
        'ducimus',
        'fuga',
        'minima',
    ];
    $request->campaign->creativeOptimizationConfiguration = new CreativeOptimizationConfiguration();
    $request->campaign->creativeOptimizationConfiguration->id = 'architecto';
    $request->campaign->creativeOptimizationConfiguration->name = 'Beth Cummerata';
    $request->campaign->creativeOptimizationConfiguration->optimizationActivitys = [
        new OptimizationActivity(),
        new OptimizationActivity(),
        new OptimizationActivity(),
    ];
    $request->campaign->creativeOptimizationConfiguration->optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum::POST_CLICK;
    $request->campaign->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->campaign->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'exercitationem';
    $request->campaign->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->campaign->defaultLandingPageId = 'expedita';
    $request->campaign->endDate = DateTime::createFromFormat('Y-m-d', '2021-06-18');
    $request->campaign->eventTagOverrides = [
        new EventTagOverride(),
    ];
    $request->campaign->externalId = 'nemo';
    $request->campaign->id = 'culpa';
    $request->campaign->idDimensionValue = new DimensionValue();
    $request->campaign->idDimensionValue->dimensionName = 'consequuntur';
    $request->campaign->idDimensionValue->etag = 'amet';
    $request->campaign->idDimensionValue->id = 'a45cefc5-fde1-40a0-8e21-69e510019c6d';
    $request->campaign->idDimensionValue->kind = 'quod';
    $request->campaign->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->campaign->idDimensionValue->value = 'recusandae';
    $request->campaign->kind = 'velit';
    $request->campaign->lastModifiedInfo = new LastModifiedInfo();
    $request->campaign->lastModifiedInfo->time = 'magnam';
    $request->campaign->measurementPartnerLink = new MeasurementPartnerCampaignLink();
    $request->campaign->measurementPartnerLink->linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum::MEASUREMENT_PARTNER_LINK_FAILURE;
    $request->campaign->measurementPartnerLink->measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum::INTEGRAL_AD_SCIENCE;
    $request->campaign->measurementPartnerLink->partnerCampaignId = 'sed';
    $request->campaign->name = 'Faye McKenzie';
    $request->campaign->startDate = DateTime::createFromFormat('Y-m-d', '2021-08-09');
    $request->campaign->subaccountId = 'itaque';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'perspiciatis';
    $request->key = 'hic';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->profileId = 'aspernatur';
    $request->quotaUser = 'libero';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'incidunt';

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
    $request->accessToken = 'quod';
    $request->advertiserGroupIds = [
        'saepe',
        'autem',
        'quo',
    ];
    $request->advertiserIds = [
        'illum',
    ];
    $request->alt = AltEnum::MEDIA;
    $request->archived = false;
    $request->atLeastOneOptimizationActivity = false;
    $request->callback = 'illum';
    $request->excludedIds = [
        'non',
        'mollitia',
        'assumenda',
    ];
    $request->fields = 'recusandae';
    $request->ids = [
        'pariatur',
        'ad',
        'facere',
    ];
    $request->key = 'laborum';
    $request->maxResults = 911451;
    $request->oauthToken = 'laborum';
    $request->overriddenEventTagId = 'incidunt';
    $request->pageToken = 'maxime';
    $request->prettyPrint = false;
    $request->profileId = 'ipsam';
    $request->quotaUser = 'alias';
    $request->searchString = 'suscipit';
    $request->sortField = DfareportingCampaignsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingCampaignsListSortOrderEnum::DESCENDING;
    $request->subaccountId = 'laborum';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'occaecati';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->campaign = new Campaign();
    $request->campaign->accountId = 'quo';
    $request->campaign->adBlockingConfiguration = new AdBlockingConfiguration();
    $request->campaign->adBlockingConfiguration->enabled = false;
    $request->campaign->additionalCreativeOptimizationConfigurations = [
        new CreativeOptimizationConfiguration(),
    ];
    $request->campaign->advertiserGroupId = 'fugit';
    $request->campaign->advertiserId = 'aliquid';
    $request->campaign->advertiserIdDimensionValue = new DimensionValue();
    $request->campaign->advertiserIdDimensionValue->dimensionName = 'magnam';
    $request->campaign->advertiserIdDimensionValue->etag = 'quaerat';
    $request->campaign->advertiserIdDimensionValue->id = 'cf5e9d9a-4578-4adc-9ac6-00dec001ac80';
    $request->campaign->advertiserIdDimensionValue->kind = 'magni';
    $request->campaign->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->campaign->advertiserIdDimensionValue->value = 'sed';
    $request->campaign->archived = false;
    $request->campaign->audienceSegmentGroups = [
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
        new AudienceSegmentGroup(),
    ];
    $request->campaign->billingInvoiceCode = 'impedit';
    $request->campaign->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->campaign->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'ipsa';
    $request->campaign->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->campaign->comment = 'excepturi';
    $request->campaign->createInfo = new LastModifiedInfo();
    $request->campaign->createInfo->time = 'a';
    $request->campaign->creativeGroupIds = [
        'laudantium',
        'maiores',
        'alias',
        'asperiores',
    ];
    $request->campaign->creativeOptimizationConfiguration = new CreativeOptimizationConfiguration();
    $request->campaign->creativeOptimizationConfiguration->id = 'rem';
    $request->campaign->creativeOptimizationConfiguration->name = 'Jeanette Wehner';
    $request->campaign->creativeOptimizationConfiguration->optimizationActivitys = [
        new OptimizationActivity(),
        new OptimizationActivity(),
    ];
    $request->campaign->creativeOptimizationConfiguration->optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum::POST_IMPRESSION;
    $request->campaign->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->campaign->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'in';
    $request->campaign->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->campaign->defaultLandingPageId = 'eligendi';
    $request->campaign->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-18');
    $request->campaign->eventTagOverrides = [
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
        new EventTagOverride(),
    ];
    $request->campaign->externalId = 'excepturi';
    $request->campaign->id = 'accusantium';
    $request->campaign->idDimensionValue = new DimensionValue();
    $request->campaign->idDimensionValue->dimensionName = 'qui';
    $request->campaign->idDimensionValue->etag = 'impedit';
    $request->campaign->idDimensionValue->id = '14125b09-60a6-4681-91a4-72af923c5949';
    $request->campaign->idDimensionValue->kind = 'maiores';
    $request->campaign->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->campaign->idDimensionValue->value = 'velit';
    $request->campaign->kind = 'reiciendis';
    $request->campaign->lastModifiedInfo = new LastModifiedInfo();
    $request->campaign->lastModifiedInfo->time = 'amet';
    $request->campaign->measurementPartnerLink = new MeasurementPartnerCampaignLink();
    $request->campaign->measurementPartnerLink->linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum::MEASUREMENT_PARTNER_LINK_PENDING;
    $request->campaign->measurementPartnerLink->measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum::NONE;
    $request->campaign->measurementPartnerLink->partnerCampaignId = 'quisquam';
    $request->campaign->name = 'Morris Kreiger';
    $request->campaign->startDate = DateTime::createFromFormat('Y-m-d', '2020-10-02');
    $request->campaign->subaccountId = 'perspiciatis';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->fields = 'commodi';
    $request->id = 'ecbb4e24-3cf7-489f-bafe-da53e5ae6e0a';
    $request->key = 'impedit';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->profileId = 'blanditiis';
    $request->quotaUser = 'eius';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'eos';

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
    $request->campaign->accountId = 'natus';
    $request->campaign->adBlockingConfiguration = new AdBlockingConfiguration();
    $request->campaign->adBlockingConfiguration->enabled = false;
    $request->campaign->additionalCreativeOptimizationConfigurations = [
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
        new CreativeOptimizationConfiguration(),
    ];
    $request->campaign->advertiserGroupId = 'quia';
    $request->campaign->advertiserId = 'magnam';
    $request->campaign->advertiserIdDimensionValue = new DimensionValue();
    $request->campaign->advertiserIdDimensionValue->dimensionName = 'reprehenderit';
    $request->campaign->advertiserIdDimensionValue->etag = 'quod';
    $request->campaign->advertiserIdDimensionValue->id = '88373a40-e194-42f3-ae55-055756f5d56d';
    $request->campaign->advertiserIdDimensionValue->kind = 'sit';
    $request->campaign->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->campaign->advertiserIdDimensionValue->value = 'repellendus';
    $request->campaign->archived = false;
    $request->campaign->audienceSegmentGroups = [
        new AudienceSegmentGroup(),
    ];
    $request->campaign->billingInvoiceCode = 'id';
    $request->campaign->clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties();
    $request->campaign->clickThroughUrlSuffixProperties->clickThroughUrlSuffix = 'sapiente';
    $request->campaign->clickThroughUrlSuffixProperties->overrideInheritedSuffix = false;
    $request->campaign->comment = 'sed';
    $request->campaign->createInfo = new LastModifiedInfo();
    $request->campaign->createInfo->time = 'possimus';
    $request->campaign->creativeGroupIds = [
        'repudiandae',
        'architecto',
        'adipisci',
        'pariatur',
    ];
    $request->campaign->creativeOptimizationConfiguration = new CreativeOptimizationConfiguration();
    $request->campaign->creativeOptimizationConfiguration->id = 'harum';
    $request->campaign->creativeOptimizationConfiguration->name = 'Miss Tami Kerluke';
    $request->campaign->creativeOptimizationConfiguration->optimizationActivitys = [
        new OptimizationActivity(),
        new OptimizationActivity(),
        new OptimizationActivity(),
    ];
    $request->campaign->creativeOptimizationConfiguration->optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum::POST_CLICK;
    $request->campaign->defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties();
    $request->campaign->defaultClickThroughEventTagProperties->defaultClickThroughEventTagId = 'earum';
    $request->campaign->defaultClickThroughEventTagProperties->overrideInheritedEventTag = false;
    $request->campaign->defaultLandingPageId = 'praesentium';
    $request->campaign->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-30');
    $request->campaign->eventTagOverrides = [
        new EventTagOverride(),
    ];
    $request->campaign->externalId = 'mollitia';
    $request->campaign->id = 'accusamus';
    $request->campaign->idDimensionValue = new DimensionValue();
    $request->campaign->idDimensionValue->dimensionName = 'harum';
    $request->campaign->idDimensionValue->etag = 'cumque';
    $request->campaign->idDimensionValue->id = '0b80a692-4d3b-42ec-bcc8-f895010f5dd3';
    $request->campaign->idDimensionValue->kind = 'pariatur';
    $request->campaign->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->campaign->idDimensionValue->value = 'sapiente';
    $request->campaign->kind = 'mollitia';
    $request->campaign->lastModifiedInfo = new LastModifiedInfo();
    $request->campaign->lastModifiedInfo->time = 'quae';
    $request->campaign->measurementPartnerLink = new MeasurementPartnerCampaignLink();
    $request->campaign->measurementPartnerLink->linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum::MEASUREMENT_PARTNER_LINK_OPT_OUT;
    $request->campaign->measurementPartnerLink->measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum::NONE;
    $request->campaign->measurementPartnerLink->partnerCampaignId = 'non';
    $request->campaign->name = 'Derek Haag';
    $request->campaign->startDate = DateTime::createFromFormat('Y-m-d', '2022-01-07');
    $request->campaign->subaccountId = 'inventore';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'dolor';
    $request->key = 'aliquid';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->profileId = 'cumque';
    $request->quotaUser = 'rem';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'ducimus';

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
