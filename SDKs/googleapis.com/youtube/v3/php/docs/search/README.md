# search

### Available Operations

* [youtubeSearchList](#youtubesearchlist) - Retrieves a list of search resources

## youtubeSearchList

Retrieves a list of search resources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListSafeSearchEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListVideoCaptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListVideoDefinitionEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListVideoDimensionEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListVideoDurationEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListVideoEmbeddableEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListVideoLicenseEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListVideoSyndicatedEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListVideoTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeSearchListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeSearchListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->channelId = 'reiciendis';
    $request->channelType = YoutubeSearchListChannelTypeEnum::CHANNEL_TYPE_UNSPECIFIED;
    $request->eventType = YoutubeSearchListEventTypeEnum::UPCOMING;
    $request->fields = 'ipsa';
    $request->forContentOwner = false;
    $request->forDeveloper = false;
    $request->forMine = false;
    $request->key = 'quisquam';
    $request->location = 'tenetur';
    $request->locationRadius = 'quas';
    $request->maxResults = 476003;
    $request->oauthToken = 'aliquid';
    $request->onBehalfOfContentOwner = 'asperiores';
    $request->order = YoutubeSearchListOrderEnum::VIDEO_COUNT;
    $request->pageToken = 'nobis';
    $request->part = [
        'accusantium',
        'dicta',
        'minus',
    ];
    $request->prettyPrint = false;
    $request->publishedAfter = 'commodi';
    $request->publishedBefore = 'eveniet';
    $request->q = 'porro';
    $request->quotaUser = 'tempore';
    $request->regionCode = 'quidem';
    $request->relatedToVideoId = 'modi';
    $request->relevanceLanguage = 'voluptates';
    $request->safeSearch = YoutubeSearchListSafeSearchEnum::SAFE_SEARCH_SETTING_UNSPECIFIED;
    $request->topicId = 'eius';
    $request->type = [
        'eligendi',
    ];
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'esse';
    $request->videoCaption = YoutubeSearchListVideoCaptionEnum::CLOSED_CAPTION;
    $request->videoCategoryId = 'sint';
    $request->videoDefinition = YoutubeSearchListVideoDefinitionEnum::HIGH;
    $request->videoDimension = YoutubeSearchListVideoDimensionEnum::THREED;
    $request->videoDuration = YoutubeSearchListVideoDurationEnum::MEDIUM;
    $request->videoEmbeddable = YoutubeSearchListVideoEmbeddableEnum::TRUE;
    $request->videoLicense = YoutubeSearchListVideoLicenseEnum::CREATIVE_COMMON;
    $request->videoSyndicated = YoutubeSearchListVideoSyndicatedEnum::TRUE;
    $request->videoType = YoutubeSearchListVideoTypeEnum::MOVIE;

    $requestSecurity = new YoutubeSearchListSecurity();
    $requestSecurity->option1 = new YoutubeSearchListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->search->youtubeSearchList($request, $requestSecurity);

    if ($response->searchListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
