# buyers

### Available Operations

* [realtimebiddingBuyersCreativesCreate](#realtimebiddingbuyerscreativescreate) - Creates a creative.
* [realtimebiddingBuyersCreativesList](#realtimebiddingbuyerscreativeslist) - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
* [realtimebiddingBuyersCreativesPatch](#realtimebiddingbuyerscreativespatch) - Updates a creative.
* [realtimebiddingBuyersList](#realtimebiddingbuyerslist) - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
* [realtimebiddingBuyersUserListsClose](#realtimebiddingbuyersuserlistsclose) - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
* [realtimebiddingBuyersUserListsCreate](#realtimebiddingbuyersuserlistscreate) - Create a new user list.
* [realtimebiddingBuyersUserListsGet](#realtimebiddingbuyersuserlistsget) - Gets a user list by its name.
* [realtimebiddingBuyersUserListsGetRemarketingTag](#realtimebiddingbuyersuserlistsgetremarketingtag) - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
* [realtimebiddingBuyersUserListsList](#realtimebiddingbuyersuserlistslist) - Lists the user lists visible to the current user.
* [realtimebiddingBuyersUserListsOpen](#realtimebiddingbuyersuserlistsopen) - Change the status of a user list to OPEN. This allows new users to be added to the user list.
* [realtimebiddingBuyersUserListsUpdate](#realtimebiddingbuyersuserlistsupdate) - Update the given user list. Only user lists with URLRestrictions can be updated.

## realtimebiddingBuyersCreativesCreate

Creates a creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersCreativesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeInput;
use \OpenAPI\OpenAPI\Models\Shared\CreativeServingDecision;
use \OpenAPI\OpenAPI\Models\Shared\AdTechnologyProviders;
use \OpenAPI\OpenAPI\Models\Shared\PolicyCompliance;
use \OpenAPI\OpenAPI\Models\Shared\PolicyComplianceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyTopicEntry;
use \OpenAPI\OpenAPI\Models\Shared\PolicyTopicEvidence;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotCrawlableEvidence;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotCrawlableEvidenceReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidence;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidenceDnsErrorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidenceInvalidPageEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidencePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidenceRedirectionErrorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidenceUrlRejectedEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationUrlEvidence;
use \OpenAPI\OpenAPI\Models\Shared\DomainCallEvidence;
use \OpenAPI\OpenAPI\Models\Shared\DomainCalls;
use \OpenAPI\OpenAPI\Models\Shared\DownloadSizeEvidence;
use \OpenAPI\OpenAPI\Models\Shared\UrlDownloadSize;
use \OpenAPI\OpenAPI\Models\Shared\HttpCallEvidence;
use \OpenAPI\OpenAPI\Models\Shared\HttpCookieEvidence;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserAndBrand;
use \OpenAPI\OpenAPI\Models\Shared\CreativeServingDecisionDetectedAttributesEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDeclaredAttributesEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDeclaredRestrictedCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\HtmlContent;
use \OpenAPI\OpenAPI\Models\Shared\NativeContent;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRestrictedCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoContent;
use \OpenAPI\OpenAPI\Models\Shared\VideoMetadata;
use \OpenAPI\OpenAPI\Models\Shared\MediaFile;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileMimeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoMetadataVastVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersCreativesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersCreativesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeInput = new CreativeInput();
    $request->creativeInput->adChoicesDestinationUrl = 'quis';
    $request->creativeInput->advertiserName = 'nesciunt';
    $request->creativeInput->agencyId = 'eos';
    $request->creativeInput->creativeId = 'perferendis';
    $request->creativeInput->creativeServingDecision = new CreativeServingDecision();
    $request->creativeInput->creativeServingDecision->adTechnologyProviders = new AdTechnologyProviders();
    $request->creativeInput->creativeServingDecision->adTechnologyProviders->detectedGvlIds = [
        'minus',
    ];
    $request->creativeInput->creativeServingDecision->adTechnologyProviders->detectedProviderIds = [
        'dolor',
        'vero',
    ];
    $request->creativeInput->creativeServingDecision->adTechnologyProviders->unidentifiedProviderDomains = [
        'hic',
        'recusandae',
    ];
    $request->creativeInput->creativeServingDecision->chinaPolicyCompliance = new PolicyCompliance();
    $request->creativeInput->creativeServingDecision->chinaPolicyCompliance->status = PolicyComplianceStatusEnum::APPROVED;
    $request->creativeInput->creativeServingDecision->chinaPolicyCompliance->topics = [
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
    ];
    $request->creativeInput->creativeServingDecision->dealsPolicyCompliance = new PolicyCompliance();
    $request->creativeInput->creativeServingDecision->dealsPolicyCompliance->status = PolicyComplianceStatusEnum::DISAPPROVED;
    $request->creativeInput->creativeServingDecision->dealsPolicyCompliance->topics = [
        new PolicyTopicEntry(),
    ];
    $request->creativeInput->creativeServingDecision->detectedAdvertisers = [
        new AdvertiserAndBrand(),
        new AdvertiserAndBrand(),
        new AdvertiserAndBrand(),
        new AdvertiserAndBrand(),
    ];
    $request->creativeInput->creativeServingDecision->detectedAttributes = [
        CreativeServingDecisionDetectedAttributesEnum::EXPANDING_DIRECTION_ANY_DIAGONAL,
    ];
    $request->creativeInput->creativeServingDecision->detectedClickThroughUrls = [
        'eaque',
        'occaecati',
        'rerum',
    ];
    $request->creativeInput->creativeServingDecision->detectedDomains = [
        'asperiores',
    ];
    $request->creativeInput->creativeServingDecision->detectedLanguages = [
        'modi',
        'iste',
        'dolorum',
        'deleniti',
    ];
    $request->creativeInput->creativeServingDecision->detectedProductCategories = [
        589910,
        750844,
        730122,
        964490,
    ];
    $request->creativeInput->creativeServingDecision->detectedSensitiveCategories = [
        554242,
        398221,
    ];
    $request->creativeInput->creativeServingDecision->detectedVendorIds = [
        209843,
    ];
    $request->creativeInput->creativeServingDecision->lastStatusUpdate = 'dolor';
    $request->creativeInput->creativeServingDecision->networkPolicyCompliance = new PolicyCompliance();
    $request->creativeInput->creativeServingDecision->networkPolicyCompliance->status = PolicyComplianceStatusEnum::STATUS_UNSPECIFIED;
    $request->creativeInput->creativeServingDecision->networkPolicyCompliance->topics = [
        new PolicyTopicEntry(),
    ];
    $request->creativeInput->creativeServingDecision->platformPolicyCompliance = new PolicyCompliance();
    $request->creativeInput->creativeServingDecision->platformPolicyCompliance->status = PolicyComplianceStatusEnum::CERTIFICATE_REQUIRED;
    $request->creativeInput->creativeServingDecision->platformPolicyCompliance->topics = [
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
    ];
    $request->creativeInput->creativeServingDecision->russiaPolicyCompliance = new PolicyCompliance();
    $request->creativeInput->creativeServingDecision->russiaPolicyCompliance->status = PolicyComplianceStatusEnum::APPROVED;
    $request->creativeInput->creativeServingDecision->russiaPolicyCompliance->topics = [
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
    ];
    $request->creativeInput->declaredAttributes = [
        CreativeDeclaredAttributesEnum::RENDERING_SIZELESS_ADX,
        CreativeDeclaredAttributesEnum::EXPANDING_DIRECTION_DOWN,
    ];
    $request->creativeInput->declaredClickThroughUrls = [
        'numquam',
        'veritatis',
        'ipsa',
    ];
    $request->creativeInput->declaredRestrictedCategories = [
        CreativeDeclaredRestrictedCategoriesEnum::RESTRICTED_CATEGORY_UNSPECIFIED,
    ];
    $request->creativeInput->declaredVendorIds = [
        311796,
        881005,
    ];
    $request->creativeInput->html = new HtmlContent();
    $request->creativeInput->html->height = 696344;
    $request->creativeInput->html->snippet = 'voluptatibus';
    $request->creativeInput->html->width = 377752;
    $request->creativeInput->impressionTrackingUrls = [
        'eos',
        'atque',
        'sit',
    ];
    $request->creativeInput->native = new NativeContent();
    $request->creativeInput->native->advertiserName = 'fugiat';
    $request->creativeInput->native->appIcon = new Image();
    $request->creativeInput->native->appIcon->height = 67249;
    $request->creativeInput->native->appIcon->url = 'soluta';
    $request->creativeInput->native->appIcon->width = 679393;
    $request->creativeInput->native->body = 'iusto';
    $request->creativeInput->native->callToAction = 'voluptate';
    $request->creativeInput->native->clickLinkUrl = 'dolorum';
    $request->creativeInput->native->clickTrackingUrl = 'deleniti';
    $request->creativeInput->native->headline = 'omnis';
    $request->creativeInput->native->image = new Image();
    $request->creativeInput->native->image->height = 896672;
    $request->creativeInput->native->image->url = 'distinctio';
    $request->creativeInput->native->image->width = 990339;
    $request->creativeInput->native->logo = new Image();
    $request->creativeInput->native->logo->height = 469497;
    $request->creativeInput->native->logo->url = 'ipsum';
    $request->creativeInput->native->logo->width = 456015;
    $request->creativeInput->native->priceDisplayText = 'id';
    $request->creativeInput->native->starRating = 9064.18;
    $request->creativeInput->native->videoUrl = 'eius';
    $request->creativeInput->native->videoVastXml = 'aspernatur';
    $request->creativeInput->renderUrl = 'perferendis';
    $request->creativeInput->restrictedCategories = [
        CreativeRestrictedCategoriesEnum::ALCOHOL,
    ];
    $request->creativeInput->video = new VideoContent();
    $request->creativeInput->video->videoMetadata = new VideoMetadata();
    $request->creativeInput->video->videoMetadata->duration = 'accusamus';
    $request->creativeInput->video->videoMetadata->isValidVast = false;
    $request->creativeInput->video->videoMetadata->isVpaid = false;
    $request->creativeInput->video->videoMetadata->mediaFiles = [
        new MediaFile(),
        new MediaFile(),
    ];
    $request->creativeInput->video->videoMetadata->skipOffset = 'saepe';
    $request->creativeInput->video->videoMetadata->vastVersion = VideoMetadataVastVersionEnum::VAST_VERSION10;
    $request->creativeInput->video->videoUrl = 'deserunt';
    $request->creativeInput->video->videoVastXml = 'provident';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'similique';
    $request->key = 'alias';
    $request->oauthToken = 'at';
    $request->parent = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new RealtimebiddingBuyersCreativesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersCreativesCreate($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBuyersCreativesList

Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersCreativesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersCreativesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersCreativesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersCreativesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'esse';
    $request->filter = 'harum';
    $request->key = 'iusto';
    $request->oauthToken = 'ipsum';
    $request->pageSize = 788740;
    $request->pageToken = 'tenetur';
    $request->parent = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'numquam';
    $request->view = RealtimebiddingBuyersCreativesListViewEnum::CREATIVE_VIEW_UNSPECIFIED;

    $requestSecurity = new RealtimebiddingBuyersCreativesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersCreativesList($request, $requestSecurity);

    if ($response->listCreativesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBuyersCreativesPatch

Updates a creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersCreativesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeInput;
use \OpenAPI\OpenAPI\Models\Shared\CreativeServingDecision;
use \OpenAPI\OpenAPI\Models\Shared\AdTechnologyProviders;
use \OpenAPI\OpenAPI\Models\Shared\PolicyCompliance;
use \OpenAPI\OpenAPI\Models\Shared\PolicyComplianceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyTopicEntry;
use \OpenAPI\OpenAPI\Models\Shared\PolicyTopicEvidence;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotCrawlableEvidence;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotCrawlableEvidenceReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidence;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidenceDnsErrorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidenceInvalidPageEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidencePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidenceRedirectionErrorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationNotWorkingEvidenceUrlRejectedEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationUrlEvidence;
use \OpenAPI\OpenAPI\Models\Shared\DomainCallEvidence;
use \OpenAPI\OpenAPI\Models\Shared\DomainCalls;
use \OpenAPI\OpenAPI\Models\Shared\DownloadSizeEvidence;
use \OpenAPI\OpenAPI\Models\Shared\UrlDownloadSize;
use \OpenAPI\OpenAPI\Models\Shared\HttpCallEvidence;
use \OpenAPI\OpenAPI\Models\Shared\HttpCookieEvidence;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserAndBrand;
use \OpenAPI\OpenAPI\Models\Shared\CreativeServingDecisionDetectedAttributesEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDeclaredAttributesEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDeclaredRestrictedCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\HtmlContent;
use \OpenAPI\OpenAPI\Models\Shared\NativeContent;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRestrictedCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoContent;
use \OpenAPI\OpenAPI\Models\Shared\VideoMetadata;
use \OpenAPI\OpenAPI\Models\Shared\MediaFile;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileMimeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoMetadataVastVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersCreativesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersCreativesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeInput = new CreativeInput();
    $request->creativeInput->adChoicesDestinationUrl = 'sapiente';
    $request->creativeInput->advertiserName = 'totam';
    $request->creativeInput->agencyId = 'nihil';
    $request->creativeInput->creativeId = 'sit';
    $request->creativeInput->creativeServingDecision = new CreativeServingDecision();
    $request->creativeInput->creativeServingDecision->adTechnologyProviders = new AdTechnologyProviders();
    $request->creativeInput->creativeServingDecision->adTechnologyProviders->detectedGvlIds = [
        'neque',
        'sed',
        'vel',
    ];
    $request->creativeInput->creativeServingDecision->adTechnologyProviders->detectedProviderIds = [
        'voluptas',
        'deserunt',
        'quam',
    ];
    $request->creativeInput->creativeServingDecision->adTechnologyProviders->unidentifiedProviderDomains = [
        'incidunt',
    ];
    $request->creativeInput->creativeServingDecision->chinaPolicyCompliance = new PolicyCompliance();
    $request->creativeInput->creativeServingDecision->chinaPolicyCompliance->status = PolicyComplianceStatusEnum::STATUS_UNSPECIFIED;
    $request->creativeInput->creativeServingDecision->chinaPolicyCompliance->topics = [
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
    ];
    $request->creativeInput->creativeServingDecision->dealsPolicyCompliance = new PolicyCompliance();
    $request->creativeInput->creativeServingDecision->dealsPolicyCompliance->status = PolicyComplianceStatusEnum::CERTIFICATE_REQUIRED;
    $request->creativeInput->creativeServingDecision->dealsPolicyCompliance->topics = [
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
    ];
    $request->creativeInput->creativeServingDecision->detectedAdvertisers = [
        new AdvertiserAndBrand(),
        new AdvertiserAndBrand(),
        new AdvertiserAndBrand(),
    ];
    $request->creativeInput->creativeServingDecision->detectedAttributes = [
        CreativeServingDecisionDetectedAttributesEnum::SKIPPABLE_INSTREAM_VIDEO,
    ];
    $request->creativeInput->creativeServingDecision->detectedClickThroughUrls = [
        'incidunt',
        'aspernatur',
        'dolores',
    ];
    $request->creativeInput->creativeServingDecision->detectedDomains = [
        'facilis',
        'aliquid',
        'quam',
    ];
    $request->creativeInput->creativeServingDecision->detectedLanguages = [
        'temporibus',
        'qui',
        'neque',
    ];
    $request->creativeInput->creativeServingDecision->detectedProductCategories = [
        164959,
    ];
    $request->creativeInput->creativeServingDecision->detectedSensitiveCategories = [
        124833,
        355613,
    ];
    $request->creativeInput->creativeServingDecision->detectedVendorIds = [
        940432,
        30452,
        765326,
    ];
    $request->creativeInput->creativeServingDecision->lastStatusUpdate = 'soluta';
    $request->creativeInput->creativeServingDecision->networkPolicyCompliance = new PolicyCompliance();
    $request->creativeInput->creativeServingDecision->networkPolicyCompliance->status = PolicyComplianceStatusEnum::APPROVED;
    $request->creativeInput->creativeServingDecision->networkPolicyCompliance->topics = [
        new PolicyTopicEntry(),
    ];
    $request->creativeInput->creativeServingDecision->platformPolicyCompliance = new PolicyCompliance();
    $request->creativeInput->creativeServingDecision->platformPolicyCompliance->status = PolicyComplianceStatusEnum::CERTIFICATE_REQUIRED;
    $request->creativeInput->creativeServingDecision->platformPolicyCompliance->topics = [
        new PolicyTopicEntry(),
    ];
    $request->creativeInput->creativeServingDecision->russiaPolicyCompliance = new PolicyCompliance();
    $request->creativeInput->creativeServingDecision->russiaPolicyCompliance->status = PolicyComplianceStatusEnum::STATUS_UNSPECIFIED;
    $request->creativeInput->creativeServingDecision->russiaPolicyCompliance->topics = [
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
        new PolicyTopicEntry(),
    ];
    $request->creativeInput->declaredAttributes = [
        CreativeDeclaredAttributesEnum::RICH_MEDIA_CAPABILITY_TYPE_NON_SSL,
        CreativeDeclaredAttributesEnum::RICH_MEDIA_CAPABILITY_TYPE_MRAID,
        CreativeDeclaredAttributesEnum::IMAGE_RICH_MEDIA,
    ];
    $request->creativeInput->declaredClickThroughUrls = [
        'dolorem',
        'dolore',
        'labore',
        'adipisci',
    ];
    $request->creativeInput->declaredRestrictedCategories = [
        CreativeDeclaredRestrictedCategoriesEnum::RESTRICTED_CATEGORY_UNSPECIFIED,
        CreativeDeclaredRestrictedCategoriesEnum::RESTRICTED_CATEGORY_UNSPECIFIED,
        CreativeDeclaredRestrictedCategoriesEnum::RESTRICTED_CATEGORY_UNSPECIFIED,
    ];
    $request->creativeInput->declaredVendorIds = [
        929530,
        9240,
        669917,
    ];
    $request->creativeInput->html = new HtmlContent();
    $request->creativeInput->html->height = 833038;
    $request->creativeInput->html->snippet = 'porro';
    $request->creativeInput->html->width = 984330;
    $request->creativeInput->impressionTrackingUrls = [
        'facilis',
        'cupiditate',
    ];
    $request->creativeInput->native = new NativeContent();
    $request->creativeInput->native->advertiserName = 'qui';
    $request->creativeInput->native->appIcon = new Image();
    $request->creativeInput->native->appIcon->height = 63955;
    $request->creativeInput->native->appIcon->url = 'laudantium';
    $request->creativeInput->native->appIcon->width = 485628;
    $request->creativeInput->native->body = 'occaecati';
    $request->creativeInput->native->callToAction = 'voluptatibus';
    $request->creativeInput->native->clickLinkUrl = 'quisquam';
    $request->creativeInput->native->clickTrackingUrl = 'vero';
    $request->creativeInput->native->headline = 'omnis';
    $request->creativeInput->native->image = new Image();
    $request->creativeInput->native->image->height = 338159;
    $request->creativeInput->native->image->url = 'ipsum';
    $request->creativeInput->native->image->width = 961571;
    $request->creativeInput->native->logo = new Image();
    $request->creativeInput->native->logo->height = 455169;
    $request->creativeInput->native->logo->url = 'consectetur';
    $request->creativeInput->native->logo->width = 878870;
    $request->creativeInput->native->priceDisplayText = 'tenetur';
    $request->creativeInput->native->starRating = 4922.68;
    $request->creativeInput->native->videoUrl = 'hic';
    $request->creativeInput->native->videoVastXml = 'distinctio';
    $request->creativeInput->renderUrl = 'quod';
    $request->creativeInput->restrictedCategories = [
        CreativeRestrictedCategoriesEnum::ALCOHOL,
        CreativeRestrictedCategoriesEnum::ALCOHOL,
    ];
    $request->creativeInput->video = new VideoContent();
    $request->creativeInput->video->videoMetadata = new VideoMetadata();
    $request->creativeInput->video->videoMetadata->duration = 'vero';
    $request->creativeInput->video->videoMetadata->isValidVast = false;
    $request->creativeInput->video->videoMetadata->isVpaid = false;
    $request->creativeInput->video->videoMetadata->mediaFiles = [
        new MediaFile(),
        new MediaFile(),
    ];
    $request->creativeInput->video->videoMetadata->skipOffset = 'dolore';
    $request->creativeInput->video->videoMetadata->vastVersion = VideoMetadataVastVersionEnum::VAST_VERSION40;
    $request->creativeInput->video->videoUrl = 'illum';
    $request->creativeInput->video->videoVastXml = 'sequi';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'voluptatibus';
    $request->key = 'exercitationem';
    $request->name = 'Louis Sauer';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->updateMask = 'ducimus';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new RealtimebiddingBuyersCreativesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersCreativesPatch($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBuyersList

Lists all buyer account information the calling buyer user or service account is permissioned to manage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'vel';
    $request->key = 'possimus';
    $request->oauthToken = 'magnam';
    $request->pageSize = 189848;
    $request->pageToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new RealtimebiddingBuyersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersList($request, $requestSecurity);

    if ($response->listBuyersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBuyersUserListsClose

Change the status of a user list to CLOSED. This prevents new users from being added to the user list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsCloseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsCloseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersUserListsCloseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ex' => 'nulla',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'sapiente';
    $request->key = 'quisquam';
    $request->name = 'Nathaniel Ryan';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new RealtimebiddingBuyersUserListsCloseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersUserListsClose($request, $requestSecurity);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBuyersUserListsCreate

Create a new user list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserListInput;
use \OpenAPI\OpenAPI\Models\Shared\UrlRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\UrlRestrictionRestrictionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersUserListsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userListInput = new UserListInput();
    $request->userListInput->description = 'consectetur';
    $request->userListInput->displayName = 'recusandae';
    $request->userListInput->membershipDurationDays = 'aspernatur';
    $request->userListInput->urlRestriction = new UrlRestriction();
    $request->userListInput->urlRestriction->endDate = new Date();
    $request->userListInput->urlRestriction->endDate->day = 325310;
    $request->userListInput->urlRestriction->endDate->month = 53427;
    $request->userListInput->urlRestriction->endDate->year = 952871;
    $request->userListInput->urlRestriction->restrictionType = UrlRestrictionRestrictionTypeEnum::DOES_NOT_CONTAIN;
    $request->userListInput->urlRestriction->startDate = new Date();
    $request->userListInput->urlRestriction->startDate->day = 13948;
    $request->userListInput->urlRestriction->startDate->month = 11427;
    $request->userListInput->urlRestriction->startDate->year = 533466;
    $request->userListInput->urlRestriction->url = 'impedit';
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'inventore';
    $request->key = 'non';
    $request->oauthToken = 'et';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new RealtimebiddingBuyersUserListsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersUserListsCreate($request, $requestSecurity);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBuyersUserListsGet

Gets a user list by its name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersUserListsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quas';
    $request->fields = 'assumenda';
    $request->key = 'nulla';
    $request->name = 'Jeannette Boyer';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'molestiae';
    $request->view = RealtimebiddingBuyersUserListsGetViewEnum::CREATIVE_VIEW_UNSPECIFIED;

    $requestSecurity = new RealtimebiddingBuyersUserListsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersUserListsGet($request, $requestSecurity);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBuyersUserListsGetRemarketingTag

Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsGetRemarketingTagRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsGetRemarketingTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersUserListsGetRemarketingTagRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'esse';
    $request->fields = 'rem';
    $request->key = 'fuga';
    $request->name = 'Yvette Stehr';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new RealtimebiddingBuyersUserListsGetRemarketingTagSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersUserListsGetRemarketingTag($request, $requestSecurity);

    if ($response->getRemarketingTagResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBuyersUserListsList

Lists the user lists visible to the current user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersUserListsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'quidem';
    $request->key = 'neque';
    $request->oauthToken = 'quo';
    $request->pageSize = 847276;
    $request->pageToken = 'quo';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new RealtimebiddingBuyersUserListsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersUserListsList($request, $requestSecurity);

    if ($response->listUserListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBuyersUserListsOpen

Change the status of a user list to OPEN. This allows new users to be added to the user list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsOpenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsOpenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersUserListsOpenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'consequatur' => 'tempora',
        'debitis' => 'ipsam',
        'aspernatur' => 'sequi',
    ];
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'aperiam';
    $request->key = 'distinctio';
    $request->name = 'Cody Blick';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquam';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new RealtimebiddingBuyersUserListsOpenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersUserListsOpen($request, $requestSecurity);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBuyersUserListsUpdate

Update the given user list. Only user lists with URLRestrictions can be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserListInput;
use \OpenAPI\OpenAPI\Models\Shared\UrlRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\UrlRestrictionRestrictionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBuyersUserListsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBuyersUserListsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userListInput = new UserListInput();
    $request->userListInput->description = 'sapiente';
    $request->userListInput->displayName = 'dolores';
    $request->userListInput->membershipDurationDays = 'deserunt';
    $request->userListInput->urlRestriction = new UrlRestriction();
    $request->userListInput->urlRestriction->endDate = new Date();
    $request->userListInput->urlRestriction->endDate->day = 475289;
    $request->userListInput->urlRestriction->endDate->month = 35362;
    $request->userListInput->urlRestriction->endDate->year = 783648;
    $request->userListInput->urlRestriction->restrictionType = UrlRestrictionRestrictionTypeEnum::STARTS_WITH;
    $request->userListInput->urlRestriction->startDate = new Date();
    $request->userListInput->urlRestriction->startDate->day = 556429;
    $request->userListInput->urlRestriction->startDate->month = 510017;
    $request->userListInput->urlRestriction->startDate->year = 159867;
    $request->userListInput->urlRestriction->url = 'deleniti';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'incidunt';
    $request->key = 'atque';
    $request->name = 'Cathy Huel';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ratione';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new RealtimebiddingBuyersUserListsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->realtimebiddingBuyersUserListsUpdate($request, $requestSecurity);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
