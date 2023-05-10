# channels

### Available Operations

* [youtubeChannelsList](#youtubechannelslist) - Retrieves a list of resources, possibly filtered.
* [youtubeChannelsUpdate](#youtubechannelsupdate) - Updates an existing resource.

## youtubeChannelsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsListSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeChannelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->categoryId = 'neque';
    $request->fields = 'fugit';
    $request->forUsername = 'magni';
    $request->hl = 'odio';
    $request->id = [
        'ullam',
    ];
    $request->key = 'nam';
    $request->managedByMe = false;
    $request->maxResults = 940432;
    $request->mine = false;
    $request->mySubscribers = false;
    $request->oauthToken = 'voluptatem';
    $request->onBehalfOfContentOwner = 'cumque';
    $request->pageToken = 'soluta';
    $request->part = [
        'et',
        'saepe',
        'ipsum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new YoutubeChannelsListSecurity();
    $requestSecurity->option1 = new YoutubeChannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channels->youtubeChannelsList($request, $requestSecurity);

    if ($response->channelListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeChannelsUpdate

Updates an existing resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\ChannelAuditDetails;
use \OpenAPI\OpenAPI\Models\Shared\ChannelBrandingSettings;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSettings;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\ImageSettings;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedProperty;
use \OpenAPI\OpenAPI\Models\Shared\LanguageTag;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedString;
use \OpenAPI\OpenAPI\Models\Shared\WatchSettings;
use \OpenAPI\OpenAPI\Models\Shared\ChannelContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\ChannelContentDetailsRelatedPlaylists;
use \OpenAPI\OpenAPI\Models\Shared\ChannelContentOwnerDetails;
use \OpenAPI\OpenAPI\Models\Shared\ChannelConversionPings;
use \OpenAPI\OpenAPI\Models\Shared\ChannelConversionPing;
use \OpenAPI\OpenAPI\Models\Shared\ChannelConversionPingContextEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelLocalization;
use \OpenAPI\OpenAPI\Models\Shared\ChannelSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ThumbnailDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thumbnail;
use \OpenAPI\OpenAPI\Models\Shared\ChannelStatistics;
use \OpenAPI\OpenAPI\Models\Shared\ChannelStatus;
use \OpenAPI\OpenAPI\Models\Shared\ChannelStatusLongUploadsStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelStatusPrivacyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTopicDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelsUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeChannelsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channel = new Channel();
    $request->channel->auditDetails = new ChannelAuditDetails();
    $request->channel->auditDetails->communityGuidelinesGoodStanding = false;
    $request->channel->auditDetails->contentIdClaimsGoodStanding = false;
    $request->channel->auditDetails->copyrightStrikesGoodStanding = false;
    $request->channel->brandingSettings = new ChannelBrandingSettings();
    $request->channel->brandingSettings->channel = new ChannelSettings();
    $request->channel->brandingSettings->channel->country = 'Monaco';
    $request->channel->brandingSettings->channel->defaultLanguage = 'aperiam';
    $request->channel->brandingSettings->channel->defaultTab = 'delectus';
    $request->channel->brandingSettings->channel->description = 'dolorem';
    $request->channel->brandingSettings->channel->featuredChannelsTitle = 'dolore';
    $request->channel->brandingSettings->channel->featuredChannelsUrls = [
        'adipisci',
        'dolorum',
    ];
    $request->channel->brandingSettings->channel->keywords = 'architecto';
    $request->channel->brandingSettings->channel->moderateComments = false;
    $request->channel->brandingSettings->channel->profileColor = 'quae';
    $request->channel->brandingSettings->channel->showBrowseView = false;
    $request->channel->brandingSettings->channel->showRelatedChannels = false;
    $request->channel->brandingSettings->channel->title = 'Mr.';
    $request->channel->brandingSettings->channel->trackingAnalyticsAccountId = 'quas';
    $request->channel->brandingSettings->channel->unsubscribedTrailer = 'itaque';
    $request->channel->brandingSettings->hints = [
        new PropertyValue(),
    ];
    $request->channel->brandingSettings->image = new ImageSettings();
    $request->channel->brandingSettings->image->backgroundImageUrl = new LocalizedProperty();
    $request->channel->brandingSettings->image->backgroundImageUrl->defaultLanguage = new LanguageTag();
    $request->channel->brandingSettings->image->backgroundImageUrl->defaultLanguage->value = 'est';
    $request->channel->brandingSettings->image->backgroundImageUrl->localized = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->channel->brandingSettings->image->bannerExternalUrl = 'porro';
    $request->channel->brandingSettings->image->bannerImageUrl = 'doloribus';
    $request->channel->brandingSettings->image->bannerMobileExtraHdImageUrl = 'ut';
    $request->channel->brandingSettings->image->bannerMobileHdImageUrl = 'facilis';
    $request->channel->brandingSettings->image->bannerMobileImageUrl = 'cupiditate';
    $request->channel->brandingSettings->image->bannerMobileLowImageUrl = 'qui';
    $request->channel->brandingSettings->image->bannerMobileMediumHdImageUrl = 'quae';
    $request->channel->brandingSettings->image->bannerTabletExtraHdImageUrl = 'laudantium';
    $request->channel->brandingSettings->image->bannerTabletHdImageUrl = 'odio';
    $request->channel->brandingSettings->image->bannerTabletImageUrl = 'occaecati';
    $request->channel->brandingSettings->image->bannerTabletLowImageUrl = 'voluptatibus';
    $request->channel->brandingSettings->image->bannerTvHighImageUrl = 'quisquam';
    $request->channel->brandingSettings->image->bannerTvImageUrl = 'vero';
    $request->channel->brandingSettings->image->bannerTvLowImageUrl = 'omnis';
    $request->channel->brandingSettings->image->bannerTvMediumImageUrl = 'quis';
    $request->channel->brandingSettings->image->largeBrandedBannerImageImapScript = new LocalizedProperty();
    $request->channel->brandingSettings->image->largeBrandedBannerImageImapScript->defaultLanguage = new LanguageTag();
    $request->channel->brandingSettings->image->largeBrandedBannerImageImapScript->defaultLanguage->value = 'ipsum';
    $request->channel->brandingSettings->image->largeBrandedBannerImageImapScript->localized = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->channel->brandingSettings->image->largeBrandedBannerImageUrl = new LocalizedProperty();
    $request->channel->brandingSettings->image->largeBrandedBannerImageUrl->defaultLanguage = new LanguageTag();
    $request->channel->brandingSettings->image->largeBrandedBannerImageUrl->defaultLanguage->value = 'voluptate';
    $request->channel->brandingSettings->image->largeBrandedBannerImageUrl->localized = [
        new LocalizedString(),
    ];
    $request->channel->brandingSettings->image->smallBrandedBannerImageImapScript = new LocalizedProperty();
    $request->channel->brandingSettings->image->smallBrandedBannerImageImapScript->defaultLanguage = new LanguageTag();
    $request->channel->brandingSettings->image->smallBrandedBannerImageImapScript->defaultLanguage->value = 'vero';
    $request->channel->brandingSettings->image->smallBrandedBannerImageImapScript->localized = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->channel->brandingSettings->image->smallBrandedBannerImageUrl = new LocalizedProperty();
    $request->channel->brandingSettings->image->smallBrandedBannerImageUrl->defaultLanguage = new LanguageTag();
    $request->channel->brandingSettings->image->smallBrandedBannerImageUrl->defaultLanguage->value = 'dignissimos';
    $request->channel->brandingSettings->image->smallBrandedBannerImageUrl->localized = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->channel->brandingSettings->image->trackingImageUrl = 'distinctio';
    $request->channel->brandingSettings->image->watchIconImageUrl = 'quod';
    $request->channel->brandingSettings->watch = new WatchSettings();
    $request->channel->brandingSettings->watch->backgroundColor = 'odio';
    $request->channel->brandingSettings->watch->featuredPlaylistId = 'similique';
    $request->channel->brandingSettings->watch->textColor = 'facilis';
    $request->channel->contentDetails = new ChannelContentDetails();
    $request->channel->contentDetails->relatedPlaylists = new ChannelContentDetailsRelatedPlaylists();
    $request->channel->contentDetails->relatedPlaylists->favorites = 'vero';
    $request->channel->contentDetails->relatedPlaylists->likes = 'ducimus';
    $request->channel->contentDetails->relatedPlaylists->uploads = 'dolore';
    $request->channel->contentDetails->relatedPlaylists->watchHistory = 'quibusdam';
    $request->channel->contentDetails->relatedPlaylists->watchLater = 'illum';
    $request->channel->contentOwnerDetails = new ChannelContentOwnerDetails();
    $request->channel->contentOwnerDetails->contentOwner = 'sequi';
    $request->channel->contentOwnerDetails->timeLinked = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-15T11:19:41.363Z');
    $request->channel->conversionPings = new ChannelConversionPings();
    $request->channel->conversionPings->pings = [
        new ChannelConversionPing(),
    ];
    $request->channel->etag = 'voluptatibus';
    $request->channel->id = '5d2cff7c-70a4-4562-ad43-6813f16d9f5f';
    $request->channel->kind = 'quisquam';
    $request->channel->localizations = [
        'ea' => new ChannelLocalization(),
        'impedit' => new ChannelLocalization(),
        'corporis' => new ChannelLocalization(),
        'veniam' => new ChannelLocalization(),
    ];
    $request->channel->snippet = new ChannelSnippet();
    $request->channel->snippet->country = 'Iceland';
    $request->channel->snippet->customUrl = 'inventore';
    $request->channel->snippet->defaultLanguage = 'magnam';
    $request->channel->snippet->description = 'ea';
    $request->channel->snippet->localized = new ChannelLocalization();
    $request->channel->snippet->localized->description = 'quo';
    $request->channel->snippet->localized->title = 'Mrs.';
    $request->channel->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T22:13:29.147Z');
    $request->channel->snippet->thumbnails = new ThumbnailDetails();
    $request->channel->snippet->thumbnails->high = new Thumbnail();
    $request->channel->snippet->thumbnails->high->height = 325310;
    $request->channel->snippet->thumbnails->high->url = 'eaque';
    $request->channel->snippet->thumbnails->high->width = 952871;
    $request->channel->snippet->thumbnails->maxres = new Thumbnail();
    $request->channel->snippet->thumbnails->maxres->height = 725595;
    $request->channel->snippet->thumbnails->maxres->url = 'aut';
    $request->channel->snippet->thumbnails->maxres->width = 11427;
    $request->channel->snippet->thumbnails->medium = new Thumbnail();
    $request->channel->snippet->thumbnails->medium->height = 533466;
    $request->channel->snippet->thumbnails->medium->url = 'impedit';
    $request->channel->snippet->thumbnails->medium->width = 304582;
    $request->channel->snippet->thumbnails->standard = new Thumbnail();
    $request->channel->snippet->thumbnails->standard->height = 146946;
    $request->channel->snippet->thumbnails->standard->url = 'accusamus';
    $request->channel->snippet->thumbnails->standard->width = 79522;
    $request->channel->snippet->title = 'Mrs.';
    $request->channel->statistics = new ChannelStatistics();
    $request->channel->statistics->commentCount = 'et';
    $request->channel->statistics->hiddenSubscriberCount = false;
    $request->channel->statistics->subscriberCount = 'dolorum';
    $request->channel->statistics->videoCount = 'laborum';
    $request->channel->statistics->viewCount = 'placeat';
    $request->channel->status = new ChannelStatus();
    $request->channel->status->isLinked = false;
    $request->channel->status->longUploadsStatus = ChannelStatusLongUploadsStatusEnum::LONG_UPLOADS_UNSPECIFIED;
    $request->channel->status->madeForKids = false;
    $request->channel->status->privacyStatus = ChannelStatusPrivacyStatusEnum::UNLISTED;
    $request->channel->status->selfDeclaredMadeForKids = false;
    $request->channel->topicDetails = new ChannelTopicDetails();
    $request->channel->topicDetails->topicCategories = [
        'nobis',
        'quas',
    ];
    $request->channel->topicDetails->topicIds = [
        'nulla',
        'voluptas',
        'libero',
        'quasi',
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'provident';
    $request->key = 'ipsa';
    $request->oauthToken = 'molestiae';
    $request->onBehalfOfContentOwner = 'magnam';
    $request->part = [
        'eius',
        'esse',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new YoutubeChannelsUpdateSecurity();
    $requestSecurity->option1 = new YoutubeChannelsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channels->youtubeChannelsUpdate($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
