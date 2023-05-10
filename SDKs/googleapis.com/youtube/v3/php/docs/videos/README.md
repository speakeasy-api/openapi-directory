# videos

### Available Operations

* [youtubeVideosDelete](#youtubevideosdelete) - Deletes a resource.
* [youtubeVideosGetRating](#youtubevideosgetrating) - Retrieves the ratings that the authorized user gave to a list of specified videos.
* [youtubeVideosInsert](#youtubevideosinsert) - Inserts a new resource into this collection.
* [youtubeVideosList](#youtubevideoslist) - Retrieves a list of resources, possibly filtered.
* [youtubeVideosRate](#youtubevideosrate) - Adds a like or dislike rating to a video or removes a rating from a video.
* [youtubeVideosReportAbuse](#youtubevideosreportabuse) - Report abuse for a video.
* [youtubeVideosUpdate](#youtubevideosupdate) - Updates an existing resource.

## youtubeVideosDelete

Deletes a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeVideosDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'impedit';
    $request->id = '65b34418-e3bb-491c-8d97-5e0e8419d8f8';
    $request->key = 'modi';
    $request->oauthToken = 'earum';
    $request->onBehalfOfContentOwner = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquam';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new YoutubeVideosDeleteSecurity();
    $requestSecurity->option1 = new YoutubeVideosDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->youtubeVideosDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeVideosGetRating

Retrieves the ratings that the authorized user gave to a list of specified videos.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosGetRatingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosGetRatingSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosGetRatingSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosGetRatingSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosGetRatingSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeVideosGetRatingRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'debitis';
    $request->id = [
        'quisquam',
        'cumque',
        'aliquam',
        'dolorum',
    ];
    $request->key = 'deserunt';
    $request->oauthToken = 'ad';
    $request->onBehalfOfContentOwner = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new YoutubeVideosGetRatingSecurity();
    $requestSecurity->option1 = new YoutubeVideosGetRatingSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->youtubeVideosGetRating($request, $requestSecurity);

    if ($response->videoGetRatingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeVideosInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosInsertSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosInsertSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeVideosInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'quibusdam';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->autoLevels = false;
    $request->callback = 'ipsam';
    $request->fields = 'officia';
    $request->key = 'cupiditate';
    $request->notifySubscribers = false;
    $request->oauthToken = 'reprehenderit';
    $request->onBehalfOfContentOwner = 'quia';
    $request->onBehalfOfContentOwnerChannel = 'necessitatibus';
    $request->part = [
        'ad',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->stabilize = false;
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new YoutubeVideosInsertSecurity();
    $requestSecurity->option1 = new YoutubeVideosInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->youtubeVideosInsert($request, $requestSecurity);

    if ($response->video !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeVideosList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosListChartEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosListMyRatingEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeVideosListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->chart = YoutubeVideosListChartEnum::MOST_POPULAR;
    $request->fields = 'eos';
    $request->hl = 'repellendus';
    $request->id = [
        'ipsa',
    ];
    $request->key = 'sint';
    $request->locale = 'dolore';
    $request->maxHeight = 457063;
    $request->maxResults = 38044;
    $request->maxWidth = 718119;
    $request->myRating = YoutubeVideosListMyRatingEnum::DISLIKE;
    $request->oauthToken = 'quam';
    $request->onBehalfOfContentOwner = 'est';
    $request->pageToken = 'aliquam';
    $request->part = [
        'culpa',
        'voluptatum',
        'iusto',
        'quod',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->regionCode = 'voluptas';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'ullam';
    $request->videoCategoryId = 'laborum';

    $requestSecurity = new YoutubeVideosListSecurity();
    $requestSecurity->option1 = new YoutubeVideosListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->youtubeVideosList($request, $requestSecurity);

    if ($response->videoListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeVideosRate

Adds a like or dislike rating to a video or removes a rating from a video.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosRateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosRateRatingEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosRateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosRateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosRateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosRateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeVideosRateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'corporis';
    $request->id = '4ebf60c3-21f0-423b-b5d2-367fe1a0cc8d';
    $request->key = 'maiores';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->rating = YoutubeVideosRateRatingEnum::DISLIKE;
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new YoutubeVideosRateSecurity();
    $requestSecurity->option1 = new YoutubeVideosRateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->youtubeVideosRate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeVideosReportAbuse

Report abuse for a video.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosReportAbuseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoAbuseReport;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosReportAbuseSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosReportAbuseSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosReportAbuseSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosReportAbuseSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeVideosReportAbuseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->videoAbuseReport = new VideoAbuseReport();
    $request->videoAbuseReport->comments = 'provident';
    $request->videoAbuseReport->language = 'ex';
    $request->videoAbuseReport->reasonId = 'repellendus';
    $request->videoAbuseReport->secondaryReasonId = 'unde';
    $request->videoAbuseReport->videoId = 'alias';
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'labore';
    $request->key = 'expedita';
    $request->oauthToken = 'in';
    $request->onBehalfOfContentOwner = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new YoutubeVideosReportAbuseSecurity();
    $requestSecurity->option1 = new YoutubeVideosReportAbuseSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->youtubeVideosReportAbuse($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeVideosUpdate

Updates an existing resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Video;
use \OpenAPI\OpenAPI\Models\Shared\VideoAgeGating;
use \OpenAPI\OpenAPI\Models\Shared\VideoAgeGatingVideoGameRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoContentDetailsCaptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRating;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingAcbRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingAgcomRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingAnatelRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingBbfcRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingBfvcRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingBmukkRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCatvRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCatvfrRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCbfcRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCccRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCceRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingChfilmRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingChvrsRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCicfRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCnaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCncRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCsaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCscfRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingCzfilmRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingDjctqRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingDjctqRatingReasonsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingEcbmctRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingEefilmRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingEgfilmRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingEirinRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingFcbmRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingFcoRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingFmocRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingFpbRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingFpbRatingReasonsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingFskRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingGrfilmRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingIcaaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingIfcoRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingIlfilmRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingIncaaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingKfcbRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingKijkwijzerRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingKmrbRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingLsfRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMccaaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMccypRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMcstRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMdaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMedietilsynetRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMekuRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMenaMpaaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMibacRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMocRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMoctwRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMpaaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMpaatRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingMtrcbRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingNbcRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingNbcplRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingNfrcRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingNfvcbRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingNkclvRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingNmcRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingOflcRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingPefilmRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingRcnofRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingResorteviolenciaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingRtcRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingRteRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingRussiaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingSkfilmRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingSmaisRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingSmsaRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingTvpgRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentRatingYtRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\VideoContentDetailsDefinitionEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoContentDetailsProjectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoContentDetailsRegionRestriction;
use \OpenAPI\OpenAPI\Models\Shared\VideoFileDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoFileDetailsAudioStream;
use \OpenAPI\OpenAPI\Models\Shared\VideoFileDetailsFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoFileDetailsVideoStream;
use \OpenAPI\OpenAPI\Models\Shared\VideoFileDetailsVideoStreamRotationEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoLiveStreamingDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoLocalization;
use \OpenAPI\OpenAPI\Models\Shared\VideoMonetizationDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayer;
use \OpenAPI\OpenAPI\Models\Shared\VideoProcessingDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoProcessingDetailsProcessingFailureReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoProcessingDetailsProcessingProgress;
use \OpenAPI\OpenAPI\Models\Shared\VideoProcessingDetailsProcessingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoRecordingDetails;
use \OpenAPI\OpenAPI\Models\Shared\GeoPoint;
use \OpenAPI\OpenAPI\Models\Shared\VideoSnippet;
use \OpenAPI\OpenAPI\Models\Shared\VideoSnippetLiveBroadcastContentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThumbnailDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thumbnail;
use \OpenAPI\OpenAPI\Models\Shared\VideoStatistics;
use \OpenAPI\OpenAPI\Models\Shared\VideoStatus;
use \OpenAPI\OpenAPI\Models\Shared\VideoStatusFailureReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoStatusLicenseEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoStatusPrivacyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoStatusRejectionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoStatusUploadStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoSuggestions;
use \OpenAPI\OpenAPI\Models\Shared\VideoSuggestionsEditorSuggestionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoSuggestionsProcessingErrorsEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoSuggestionsProcessingHintsEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoSuggestionsProcessingWarningsEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoSuggestionsTagSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\VideoTopicDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideosUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeVideosUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->video = new Video();
    $request->video->ageGating = new VideoAgeGating();
    $request->video->ageGating->alcoholContent = false;
    $request->video->ageGating->restricted = false;
    $request->video->ageGating->videoGameRating = VideoAgeGatingVideoGameRatingEnum::M16_PLUS;
    $request->video->contentDetails = new VideoContentDetails();
    $request->video->contentDetails->caption = VideoContentDetailsCaptionEnum::FALSE;
    $request->video->contentDetails->contentRating = new ContentRating();
    $request->video->contentDetails->contentRating->acbRating = ContentRatingAcbRatingEnum::ACB_MA15PLUS;
    $request->video->contentDetails->contentRating->agcomRating = ContentRatingAgcomRatingEnum::AGCOM_UNRATED;
    $request->video->contentDetails->contentRating->anatelRating = ContentRatingAnatelRatingEnum::ANATEL_UNSPECIFIED;
    $request->video->contentDetails->contentRating->bbfcRating = ContentRatingBbfcRatingEnum::BBFC15;
    $request->video->contentDetails->contentRating->bfvcRating = ContentRatingBfvcRatingEnum::BFVC15;
    $request->video->contentDetails->contentRating->bmukkRating = ContentRatingBmukkRatingEnum::BMUKK14;
    $request->video->contentDetails->contentRating->catvRating = ContentRatingCatvRatingEnum::CATV_C;
    $request->video->contentDetails->contentRating->catvfrRating = ContentRatingCatvfrRatingEnum::CATVFR_UNRATED;
    $request->video->contentDetails->contentRating->cbfcRating = ContentRatingCbfcRatingEnum::CBFC_UA;
    $request->video->contentDetails->contentRating->cccRating = ContentRatingCccRatingEnum::CCC_UNRATED;
    $request->video->contentDetails->contentRating->cceRating = ContentRatingCceRatingEnum::CCE_M14;
    $request->video->contentDetails->contentRating->chfilmRating = ContentRatingChfilmRatingEnum::CHFILM0;
    $request->video->contentDetails->contentRating->chvrsRating = ContentRatingChvrsRatingEnum::CHVRS_E;
    $request->video->contentDetails->contentRating->cicfRating = ContentRatingCicfRatingEnum::CICF_KT_EA;
    $request->video->contentDetails->contentRating->cnaRating = ContentRatingCnaRatingEnum::CNA18PLUS;
    $request->video->contentDetails->contentRating->cncRating = ContentRatingCncRatingEnum::CNC12;
    $request->video->contentDetails->contentRating->csaRating = ContentRatingCsaRatingEnum::CSA_INTERDICTION;
    $request->video->contentDetails->contentRating->cscfRating = ContentRatingCscfRatingEnum::CSCF_UNRATED;
    $request->video->contentDetails->contentRating->czfilmRating = ContentRatingCzfilmRatingEnum::CZFILM12;
    $request->video->contentDetails->contentRating->djctqRating = ContentRatingDjctqRatingEnum::DJCTQ10;
    $request->video->contentDetails->contentRating->djctqRatingReasons = [
        ContentRatingDjctqRatingReasonsEnum::DJCTQ_IMPACTING_CONTENT,
    ];
    $request->video->contentDetails->contentRating->ecbmctRating = ContentRatingEcbmctRatingEnum::ECBMCT_UNRATED;
    $request->video->contentDetails->contentRating->eefilmRating = ContentRatingEefilmRatingEnum::EEFILM_K16;
    $request->video->contentDetails->contentRating->egfilmRating = ContentRatingEgfilmRatingEnum::EGFILM_BN;
    $request->video->contentDetails->contentRating->eirinRating = ContentRatingEirinRatingEnum::EIRIN_UNSPECIFIED;
    $request->video->contentDetails->contentRating->fcbmRating = ContentRatingFcbmRatingEnum::FCBM18SG;
    $request->video->contentDetails->contentRating->fcoRating = ContentRatingFcoRatingEnum::FCO_IIB;
    $request->video->contentDetails->contentRating->fmocRating = ContentRatingFmocRatingEnum::FMOC_E;
    $request->video->contentDetails->contentRating->fpbRating = ContentRatingFpbRatingEnum::FPB_X18;
    $request->video->contentDetails->contentRating->fpbRatingReasons = [
        ContentRatingFpbRatingReasonsEnum::FPB_SEXUAL_VIOLENCE,
        ContentRatingFpbRatingReasonsEnum::FPB_PREJUDICE,
        ContentRatingFpbRatingReasonsEnum::FPB_CRIMINAL_TECHNIQUES,
        ContentRatingFpbRatingReasonsEnum::FPB_IMITATIVE_ACTS_TECHNIQUES,
    ];
    $request->video->contentDetails->contentRating->fskRating = ContentRatingFskRatingEnum::FSK18;
    $request->video->contentDetails->contentRating->grfilmRating = ContentRatingGrfilmRatingEnum::GRFILM_K13;
    $request->video->contentDetails->contentRating->icaaRating = ContentRatingIcaaRatingEnum::ICAA7;
    $request->video->contentDetails->contentRating->ifcoRating = ContentRatingIfcoRatingEnum::IFCO_PG;
    $request->video->contentDetails->contentRating->ilfilmRating = ContentRatingIlfilmRatingEnum::ILFILM14;
    $request->video->contentDetails->contentRating->incaaRating = ContentRatingIncaaRatingEnum::INCAA_SAM16;
    $request->video->contentDetails->contentRating->kfcbRating = ContentRatingKfcbRatingEnum::KFCB_R;
    $request->video->contentDetails->contentRating->kijkwijzerRating = ContentRatingKijkwijzerRatingEnum::KIJKWIJZER16;
    $request->video->contentDetails->contentRating->kmrbRating = ContentRatingKmrbRatingEnum::KMRB_UNSPECIFIED;
    $request->video->contentDetails->contentRating->lsfRating = ContentRatingLsfRatingEnum::LSF_BO;
    $request->video->contentDetails->contentRating->mccaaRating = ContentRatingMccaaRatingEnum::MCCAA_U;
    $request->video->contentDetails->contentRating->mccypRating = ContentRatingMccypRatingEnum::MCCYP_UNSPECIFIED;
    $request->video->contentDetails->contentRating->mcstRating = ContentRatingMcstRatingEnum::MCST_C16;
    $request->video->contentDetails->contentRating->mdaRating = ContentRatingMdaRatingEnum::MDA_PG13;
    $request->video->contentDetails->contentRating->medietilsynetRating = ContentRatingMedietilsynetRatingEnum::MEDIETILSYNET6;
    $request->video->contentDetails->contentRating->mekuRating = ContentRatingMekuRatingEnum::MEKU12;
    $request->video->contentDetails->contentRating->menaMpaaRating = ContentRatingMenaMpaaRatingEnum::MENA_MPAA_UNRATED;
    $request->video->contentDetails->contentRating->mibacRating = ContentRatingMibacRatingEnum::MIBAC_VM16;
    $request->video->contentDetails->contentRating->mocRating = ContentRatingMocRatingEnum::MOC15;
    $request->video->contentDetails->contentRating->moctwRating = ContentRatingMoctwRatingEnum::MOCTW_UNSPECIFIED;
    $request->video->contentDetails->contentRating->mpaaRating = ContentRatingMpaaRatingEnum::MPAA_PG;
    $request->video->contentDetails->contentRating->mpaatRating = ContentRatingMpaatRatingEnum::MPAAT_RB;
    $request->video->contentDetails->contentRating->mtrcbRating = ContentRatingMtrcbRatingEnum::MTRCB_X;
    $request->video->contentDetails->contentRating->nbcRating = ContentRatingNbcRatingEnum::NBC_G;
    $request->video->contentDetails->contentRating->nbcplRating = ContentRatingNbcplRatingEnum::NBCPL18PLUS;
    $request->video->contentDetails->contentRating->nfrcRating = ContentRatingNfrcRatingEnum::NFRC_D;
    $request->video->contentDetails->contentRating->nfvcbRating = ContentRatingNfvcbRatingEnum::NFVCB_UNRATED;
    $request->video->contentDetails->contentRating->nkclvRating = ContentRatingNkclvRatingEnum::NKCLV7PLUS;
    $request->video->contentDetails->contentRating->nmcRating = ContentRatingNmcRatingEnum::NMC18TC;
    $request->video->contentDetails->contentRating->oflcRating = ContentRatingOflcRatingEnum::OFLC_RP16;
    $request->video->contentDetails->contentRating->pefilmRating = ContentRatingPefilmRatingEnum::PEFILM_PG;
    $request->video->contentDetails->contentRating->rcnofRating = ContentRatingRcnofRatingEnum::RCNOF_III;
    $request->video->contentDetails->contentRating->resorteviolenciaRating = ContentRatingResorteviolenciaRatingEnum::RESORTEVIOLENCIA_UNSPECIFIED;
    $request->video->contentDetails->contentRating->rtcRating = ContentRatingRtcRatingEnum::RTC_AA;
    $request->video->contentDetails->contentRating->rteRating = ContentRatingRteRatingEnum::RTE_UNRATED;
    $request->video->contentDetails->contentRating->russiaRating = ContentRatingRussiaRatingEnum::RUSSIA18;
    $request->video->contentDetails->contentRating->skfilmRating = ContentRatingSkfilmRatingEnum::SKFILM_UNSPECIFIED;
    $request->video->contentDetails->contentRating->smaisRating = ContentRatingSmaisRatingEnum::SMAIS_UNRATED;
    $request->video->contentDetails->contentRating->smsaRating = ContentRatingSmsaRatingEnum::SMSA7;
    $request->video->contentDetails->contentRating->tvpgRating = ContentRatingTvpgRatingEnum::TVPG_PG;
    $request->video->contentDetails->contentRating->ytRating = ContentRatingYtRatingEnum::YT_AGE_RESTRICTED;
    $request->video->contentDetails->countryRestriction = new AccessPolicy();
    $request->video->contentDetails->countryRestriction->allowed = false;
    $request->video->contentDetails->countryRestriction->exception = [
        'sapiente',
    ];
    $request->video->contentDetails->definition = VideoContentDetailsDefinitionEnum::SD;
    $request->video->contentDetails->dimension = 'officia';
    $request->video->contentDetails->duration = 'suscipit';
    $request->video->contentDetails->hasCustomThumbnail = false;
    $request->video->contentDetails->licensedContent = false;
    $request->video->contentDetails->projection = VideoContentDetailsProjectionEnum::THREE_HUNDRED_AND_SIXTY;
    $request->video->contentDetails->regionRestriction = new VideoContentDetailsRegionRestriction();
    $request->video->contentDetails->regionRestriction->allowed = [
        'doloremque',
        'perferendis',
    ];
    $request->video->contentDetails->regionRestriction->blocked = [
        'iusto',
        'corrupti',
        'molestiae',
    ];
    $request->video->etag = 'quis';
    $request->video->fileDetails = new VideoFileDetails();
    $request->video->fileDetails->audioStreams = [
        new VideoFileDetailsAudioStream(),
        new VideoFileDetailsAudioStream(),
    ];
    $request->video->fileDetails->bitrateBps = 'ab';
    $request->video->fileDetails->container = 'quaerat';
    $request->video->fileDetails->creationTime = 'amet';
    $request->video->fileDetails->durationMs = 'sapiente';
    $request->video->fileDetails->fileName = 'corporis';
    $request->video->fileDetails->fileSize = 'est';
    $request->video->fileDetails->fileType = VideoFileDetailsFileTypeEnum::ARCHIVE;
    $request->video->fileDetails->videoStreams = [
        new VideoFileDetailsVideoStream(),
        new VideoFileDetailsVideoStream(),
        new VideoFileDetailsVideoStream(),
        new VideoFileDetailsVideoStream(),
    ];
    $request->video->id = '98b55554-080d-440b-8acc-6cbd6b5f3ec9';
    $request->video->kind = 'voluptatem';
    $request->video->liveStreamingDetails = new VideoLiveStreamingDetails();
    $request->video->liveStreamingDetails->activeLiveChatId = 'provident';
    $request->video->liveStreamingDetails->actualEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-19T11:49:13.655Z');
    $request->video->liveStreamingDetails->actualStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-01T12:54:25.927Z');
    $request->video->liveStreamingDetails->concurrentViewers = 'omnis';
    $request->video->liveStreamingDetails->scheduledEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T13:50:17.340Z');
    $request->video->liveStreamingDetails->scheduledStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-03T23:09:42.514Z');
    $request->video->localizations = [
        'fugit' => new VideoLocalization(),
        'ipsam' => new VideoLocalization(),
        'nostrum' => new VideoLocalization(),
        'sequi' => new VideoLocalization(),
    ];
    $request->video->monetizationDetails = new VideoMonetizationDetails();
    $request->video->monetizationDetails->access = new AccessPolicy();
    $request->video->monetizationDetails->access->allowed = false;
    $request->video->monetizationDetails->access->exception = [
        'quasi',
        'error',
        'nobis',
    ];
    $request->video->player = new VideoPlayer();
    $request->video->player->embedHeight = 'tempora';
    $request->video->player->embedHtml = 'voluptate';
    $request->video->player->embedWidth = 'eius';
    $request->video->processingDetails = new VideoProcessingDetails();
    $request->video->processingDetails->editorSuggestionsAvailability = 'expedita';
    $request->video->processingDetails->fileDetailsAvailability = 'aperiam';
    $request->video->processingDetails->processingFailureReason = VideoProcessingDetailsProcessingFailureReasonEnum::OTHER;
    $request->video->processingDetails->processingIssuesAvailability = 'possimus';
    $request->video->processingDetails->processingProgress = new VideoProcessingDetailsProcessingProgress();
    $request->video->processingDetails->processingProgress->partsProcessed = 'fugit';
    $request->video->processingDetails->processingProgress->partsTotal = 'voluptatem';
    $request->video->processingDetails->processingProgress->timeLeftMs = 'repudiandae';
    $request->video->processingDetails->processingStatus = VideoProcessingDetailsProcessingStatusEnum::SUCCEEDED;
    $request->video->processingDetails->tagSuggestionsAvailability = 'ea';
    $request->video->processingDetails->thumbnailsAvailability = 'eos';
    $request->video->projectDetails = [
        'blanditiis' => 'hic',
        'maiores' => 'asperiores',
    ];
    $request->video->recordingDetails = new VideoRecordingDetails();
    $request->video->recordingDetails->location = new GeoPoint();
    $request->video->recordingDetails->location->altitude = 4209.85;
    $request->video->recordingDetails->location->latitude = 1988.92;
    $request->video->recordingDetails->location->longitude = 5856.28;
    $request->video->recordingDetails->locationDescription = 'animi';
    $request->video->recordingDetails->recordingDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T06:12:06.380Z');
    $request->video->snippet = new VideoSnippet();
    $request->video->snippet->categoryId = 'ipsa';
    $request->video->snippet->channelId = 'mollitia';
    $request->video->snippet->channelTitle = 'nam';
    $request->video->snippet->defaultAudioLanguage = 'assumenda';
    $request->video->snippet->defaultLanguage = 'quo';
    $request->video->snippet->description = 'fuga';
    $request->video->snippet->liveBroadcastContent = VideoSnippetLiveBroadcastContentEnum::LIVE;
    $request->video->snippet->localized = new VideoLocalization();
    $request->video->snippet->localized->description = 'commodi';
    $request->video->snippet->localized->title = 'Mr.';
    $request->video->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-19T08:00:32.720Z');
    $request->video->snippet->tags = [
        'aliquid',
        'provident',
    ];
    $request->video->snippet->thumbnails = new ThumbnailDetails();
    $request->video->snippet->thumbnails->high = new Thumbnail();
    $request->video->snippet->thumbnails->high->height = 385760;
    $request->video->snippet->thumbnails->high->url = 'accusamus';
    $request->video->snippet->thumbnails->high->width = 68292;
    $request->video->snippet->thumbnails->maxres = new Thumbnail();
    $request->video->snippet->thumbnails->maxres->height = 929067;
    $request->video->snippet->thumbnails->maxres->url = 'quisquam';
    $request->video->snippet->thumbnails->maxres->width = 53529;
    $request->video->snippet->thumbnails->medium = new Thumbnail();
    $request->video->snippet->thumbnails->medium->height = 4929;
    $request->video->snippet->thumbnails->medium->url = 'qui';
    $request->video->snippet->thumbnails->medium->width = 163263;
    $request->video->snippet->thumbnails->standard = new Thumbnail();
    $request->video->snippet->thumbnails->standard->height = 112224;
    $request->video->snippet->thumbnails->standard->url = 'quidem';
    $request->video->snippet->thumbnails->standard->width = 193334;
    $request->video->snippet->title = 'Mrs.';
    $request->video->statistics = new VideoStatistics();
    $request->video->statistics->commentCount = 'exercitationem';
    $request->video->statistics->dislikeCount = 'illum';
    $request->video->statistics->favoriteCount = 'praesentium';
    $request->video->statistics->likeCount = 'unde';
    $request->video->statistics->viewCount = 'similique';
    $request->video->status = new VideoStatus();
    $request->video->status->embeddable = false;
    $request->video->status->failureReason = VideoStatusFailureReasonEnum::CODEC;
    $request->video->status->license = VideoStatusLicenseEnum::CREATIVE_COMMON;
    $request->video->status->madeForKids = false;
    $request->video->status->privacyStatus = VideoStatusPrivacyStatusEnum::PUBLIC;
    $request->video->status->publicStatsViewable = false;
    $request->video->status->publishAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T05:42:26.055Z');
    $request->video->status->rejectionReason = VideoStatusRejectionReasonEnum::LEGAL;
    $request->video->status->selfDeclaredMadeForKids = false;
    $request->video->status->uploadStatus = VideoStatusUploadStatusEnum::DELETED;
    $request->video->suggestions = new VideoSuggestions();
    $request->video->suggestions->editorSuggestions = [
        VideoSuggestionsEditorSuggestionsEnum::VIDEO_CROP,
        VideoSuggestionsEditorSuggestionsEnum::AUDIO_QUIET_AUDIO_SWAP,
        VideoSuggestionsEditorSuggestionsEnum::VIDEO_AUTO_LEVELS,
    ];
    $request->video->suggestions->processingErrors = [
        VideoSuggestionsProcessingErrorsEnum::PROJECT_FILE,
        VideoSuggestionsProcessingErrorsEnum::PROJECT_FILE,
        VideoSuggestionsProcessingErrorsEnum::DOC_FILE,
        VideoSuggestionsProcessingErrorsEnum::UNSUPPORTED_SPATIAL_AUDIO_LAYOUT,
    ];
    $request->video->suggestions->processingHints = [
        VideoSuggestionsProcessingHintsEnum::NON_STREAMABLE_MOV,
        VideoSuggestionsProcessingHintsEnum::SEND_BEST_QUALITY_VIDEO,
        VideoSuggestionsProcessingHintsEnum::NON_STREAMABLE_MOV,
        VideoSuggestionsProcessingHintsEnum::NON_STREAMABLE_MOV,
    ];
    $request->video->suggestions->processingWarnings = [
        VideoSuggestionsProcessingWarningsEnum::UNSUPPORTED_VR_STEREO_MODE,
        VideoSuggestionsProcessingWarningsEnum::PROBLEMATIC_VIDEO_CODEC,
    ];
    $request->video->suggestions->tagSuggestions = [
        new VideoSuggestionsTagSuggestion(),
        new VideoSuggestionsTagSuggestion(),
        new VideoSuggestionsTagSuggestion(),
    ];
    $request->video->topicDetails = new VideoTopicDetails();
    $request->video->topicDetails->relevantTopicIds = [
        'ex',
        'architecto',
        'a',
    ];
    $request->video->topicDetails->topicCategories = [
        'veritatis',
        'quod',
        'a',
    ];
    $request->video->topicDetails->topicIds = [
        'accusantium',
    ];
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'tenetur';
    $request->key = 'voluptate';
    $request->oauthToken = 'quam';
    $request->onBehalfOfContentOwner = 'quod';
    $request->part = [
        'sapiente',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new YoutubeVideosUpdateSecurity();
    $requestSecurity->option1 = new YoutubeVideosUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->youtubeVideosUpdate($request, $requestSecurity);

    if ($response->video !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
