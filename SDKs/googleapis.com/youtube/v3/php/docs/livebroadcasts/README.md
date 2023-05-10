# liveBroadcasts

### Available Operations

* [youtubeLiveBroadcastsBind](#youtubelivebroadcastsbind) - Bind a broadcast to a stream.
* [youtubeLiveBroadcastsDelete](#youtubelivebroadcastsdelete) - Delete a given broadcast.
* [youtubeLiveBroadcastsInsert](#youtubelivebroadcastsinsert) - Inserts a new stream for the authenticated user.
* [youtubeLiveBroadcastsInsertCuepoint](#youtubelivebroadcastsinsertcuepoint) - Insert cuepoints in a broadcast
* [youtubeLiveBroadcastsList](#youtubelivebroadcastslist) - Retrieve the list of broadcasts associated with the given channel.
* [youtubeLiveBroadcastsTransition](#youtubelivebroadcaststransition) - Transition a broadcast to a given status.
* [youtubeLiveBroadcastsUpdate](#youtubelivebroadcastsupdate) - Updates an existing broadcast for the authenticated user.

## youtubeLiveBroadcastsBind

Bind a broadcast to a stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsBindRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsBindSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsBindSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsBindSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveBroadcastsBindRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'neque';
    $request->id = 'a5aa8e48-24d0-4ab4-8750-88e51862065e';
    $request->key = 'error';
    $request->oauthToken = 'consequatur';
    $request->onBehalfOfContentOwner = 'incidunt';
    $request->onBehalfOfContentOwnerChannel = 'reiciendis';
    $request->part = [
        'harum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->streamId = 'architecto';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new YoutubeLiveBroadcastsBindSecurity();
    $requestSecurity->option1 = new YoutubeLiveBroadcastsBindSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveBroadcasts->youtubeLiveBroadcastsBind($request, $requestSecurity);

    if ($response->liveBroadcast !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveBroadcastsDelete

Delete a given broadcast.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveBroadcastsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nam';
    $request->fields = 'tenetur';
    $request->id = '603a79f9-dfe0-4ab7-9a8a-50ce187f86bc';
    $request->key = 'et';
    $request->oauthToken = 'esse';
    $request->onBehalfOfContentOwner = 'amet';
    $request->onBehalfOfContentOwnerChannel = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'error';

    $requestSecurity = new YoutubeLiveBroadcastsDeleteSecurity();
    $requestSecurity->option1 = new YoutubeLiveBroadcastsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveBroadcasts->youtubeLiveBroadcastsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveBroadcastsInsert

Inserts a new stream for the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcast;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastContentDetailsClosedCaptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastContentDetailsLatencyPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitorStreamInfo;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastContentDetailsProjectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastContentDetailsStereoLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ThumbnailDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thumbnail;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatistics;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatus;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatusLifeCycleStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatusLiveBroadcastPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatusPrivacyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatusRecordingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveBroadcastsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->liveBroadcast = new LiveBroadcast();
    $request->liveBroadcast->contentDetails = new LiveBroadcastContentDetails();
    $request->liveBroadcast->contentDetails->boundStreamId = 'officiis';
    $request->liveBroadcast->contentDetails->boundStreamLastUpdateTimeMs = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-22T09:14:53.307Z');
    $request->liveBroadcast->contentDetails->closedCaptionsType = LiveBroadcastContentDetailsClosedCaptionsTypeEnum::CLOSED_CAPTIONS_DISABLED;
    $request->liveBroadcast->contentDetails->enableAutoStart = false;
    $request->liveBroadcast->contentDetails->enableAutoStop = false;
    $request->liveBroadcast->contentDetails->enableClosedCaptions = false;
    $request->liveBroadcast->contentDetails->enableContentEncryption = false;
    $request->liveBroadcast->contentDetails->enableDvr = false;
    $request->liveBroadcast->contentDetails->enableEmbed = false;
    $request->liveBroadcast->contentDetails->enableLowLatency = false;
    $request->liveBroadcast->contentDetails->latencyPreference = LiveBroadcastContentDetailsLatencyPreferenceEnum::LATENCY_PREFERENCE_UNSPECIFIED;
    $request->liveBroadcast->contentDetails->mesh = 'ex';
    $request->liveBroadcast->contentDetails->monitorStream = new MonitorStreamInfo();
    $request->liveBroadcast->contentDetails->monitorStream->broadcastStreamDelayMs = 980581;
    $request->liveBroadcast->contentDetails->monitorStream->embedHtml = 'corrupti';
    $request->liveBroadcast->contentDetails->monitorStream->enableMonitorStream = false;
    $request->liveBroadcast->contentDetails->projection = LiveBroadcastContentDetailsProjectionEnum::MESH;
    $request->liveBroadcast->contentDetails->recordFromStart = false;
    $request->liveBroadcast->contentDetails->startWithSlate = false;
    $request->liveBroadcast->contentDetails->stereoLayout = LiveBroadcastContentDetailsStereoLayoutEnum::LEFT_RIGHT;
    $request->liveBroadcast->etag = 'blanditiis';
    $request->liveBroadcast->id = '6e881ead-4f0e-4101-a563-f94e29e973e9';
    $request->liveBroadcast->kind = 'consequuntur';
    $request->liveBroadcast->snippet = new LiveBroadcastSnippet();
    $request->liveBroadcast->snippet->actualEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-04T16:36:37.699Z');
    $request->liveBroadcast->snippet->actualStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-24T07:17:21.827Z');
    $request->liveBroadcast->snippet->channelId = 'error';
    $request->liveBroadcast->snippet->description = 'illo';
    $request->liveBroadcast->snippet->isDefaultBroadcast = false;
    $request->liveBroadcast->snippet->liveChatId = 'corporis';
    $request->liveBroadcast->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-06T23:23:06.913Z');
    $request->liveBroadcast->snippet->scheduledEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-14T08:24:16.303Z');
    $request->liveBroadcast->snippet->scheduledStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T12:47:49.082Z');
    $request->liveBroadcast->snippet->thumbnails = new ThumbnailDetails();
    $request->liveBroadcast->snippet->thumbnails->high = new Thumbnail();
    $request->liveBroadcast->snippet->thumbnails->high->height = 59944;
    $request->liveBroadcast->snippet->thumbnails->high->url = 'totam';
    $request->liveBroadcast->snippet->thumbnails->high->width = 61078;
    $request->liveBroadcast->snippet->thumbnails->maxres = new Thumbnail();
    $request->liveBroadcast->snippet->thumbnails->maxres->height = 474668;
    $request->liveBroadcast->snippet->thumbnails->maxres->url = 'eveniet';
    $request->liveBroadcast->snippet->thumbnails->maxres->width = 184362;
    $request->liveBroadcast->snippet->thumbnails->medium = new Thumbnail();
    $request->liveBroadcast->snippet->thumbnails->medium->height = 739884;
    $request->liveBroadcast->snippet->thumbnails->medium->url = 'iure';
    $request->liveBroadcast->snippet->thumbnails->medium->width = 898063;
    $request->liveBroadcast->snippet->thumbnails->standard = new Thumbnail();
    $request->liveBroadcast->snippet->thumbnails->standard->height = 187552;
    $request->liveBroadcast->snippet->thumbnails->standard->url = 'laborum';
    $request->liveBroadcast->snippet->thumbnails->standard->width = 715208;
    $request->liveBroadcast->snippet->title = 'Ms.';
    $request->liveBroadcast->statistics = new LiveBroadcastStatistics();
    $request->liveBroadcast->statistics->concurrentViewers = 'rem';
    $request->liveBroadcast->status = new LiveBroadcastStatus();
    $request->liveBroadcast->status->lifeCycleStatus = LiveBroadcastStatusLifeCycleStatusEnum::READY;
    $request->liveBroadcast->status->liveBroadcastPriority = LiveBroadcastStatusLiveBroadcastPriorityEnum::LOW;
    $request->liveBroadcast->status->madeForKids = false;
    $request->liveBroadcast->status->privacyStatus = LiveBroadcastStatusPrivacyStatusEnum::PRIVATE;
    $request->liveBroadcast->status->recordingStatus = LiveBroadcastStatusRecordingStatusEnum::LIVE_BROADCAST_RECORDING_STATUS_UNSPECIFIED;
    $request->liveBroadcast->status->selfDeclaredMadeForKids = false;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nihil';
    $request->fields = 'mollitia';
    $request->key = 'voluptas';
    $request->oauthToken = 'alias';
    $request->onBehalfOfContentOwner = 'maiores';
    $request->onBehalfOfContentOwnerChannel = 'reiciendis';
    $request->part = [
        'id',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new YoutubeLiveBroadcastsInsertSecurity();
    $requestSecurity->option1 = new YoutubeLiveBroadcastsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveBroadcasts->youtubeLiveBroadcastsInsert($request, $requestSecurity);

    if ($response->liveBroadcast !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveBroadcastsInsertCuepoint

Insert cuepoints in a broadcast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsInsertCuepointRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Cuepoint;
use \OpenAPI\OpenAPI\Models\Shared\CuepointCueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsInsertCuepointSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsInsertCuepointSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsInsertCuepointSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsInsertCuepointSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveBroadcastsInsertCuepointRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->cuepoint = new Cuepoint();
    $request->cuepoint->cueType = CuepointCueTypeEnum::CUE_TYPE_UNSPECIFIED;
    $request->cuepoint->durationSecs = 925703;
    $request->cuepoint->etag = 'omnis';
    $request->cuepoint->id = '4764a3e8-65e7-4956-b925-1a5a9da660ff';
    $request->cuepoint->insertionOffsetTimeMs = 'ullam';
    $request->cuepoint->walltimeMs = 'in';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'laborum';
    $request->id = 'd4f9efc1-b451-42c1-8326-48dc2f615199';
    $request->key = 'earum';
    $request->oauthToken = 'soluta';
    $request->onBehalfOfContentOwner = 'hic';
    $request->onBehalfOfContentOwnerChannel = 'illum';
    $request->part = [
        'earum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'perspiciatis';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new YoutubeLiveBroadcastsInsertCuepointSecurity();
    $requestSecurity->option1 = new YoutubeLiveBroadcastsInsertCuepointSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveBroadcasts->youtubeLiveBroadcastsInsertCuepoint($request, $requestSecurity);

    if ($response->cuepoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveBroadcastsList

Retrieve the list of broadcasts associated with the given channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsListBroadcastStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsListBroadcastTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveBroadcastsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::MEDIA;
    $request->broadcastStatus = YoutubeLiveBroadcastsListBroadcastStatusEnum::ALL;
    $request->broadcastType = YoutubeLiveBroadcastsListBroadcastTypeEnum::BROADCAST_TYPE_FILTER_UNSPECIFIED;
    $request->callback = 'cumque';
    $request->fields = 'fuga';
    $request->id = [
        'animi',
    ];
    $request->key = 'necessitatibus';
    $request->maxResults = 862063;
    $request->mine = false;
    $request->oauthToken = 'consequatur';
    $request->onBehalfOfContentOwner = 'quasi';
    $request->onBehalfOfContentOwnerChannel = 'et';
    $request->pageToken = 'ducimus';
    $request->part = [
        'occaecati',
        'suscipit',
        'adipisci',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new YoutubeLiveBroadcastsListSecurity();
    $requestSecurity->option1 = new YoutubeLiveBroadcastsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveBroadcasts->youtubeLiveBroadcastsList($request, $requestSecurity);

    if ($response->liveBroadcastListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveBroadcastsTransition

Transition a broadcast to a given status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsTransitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsTransitionBroadcastStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsTransitionSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsTransitionSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsTransitionSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveBroadcastsTransitionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->broadcastStatus = YoutubeLiveBroadcastsTransitionBroadcastStatusEnum::TESTING;
    $request->callback = 'nihil';
    $request->fields = 'molestiae';
    $request->id = '1778ff61-d017-4476-b60a-15db6a660659';
    $request->key = 'id';
    $request->oauthToken = 'ab';
    $request->onBehalfOfContentOwner = 'error';
    $request->onBehalfOfContentOwnerChannel = 'possimus';
    $request->part = [
        'mollitia',
        'laborum',
        'libero',
        'ad',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'vitae';

    $requestSecurity = new YoutubeLiveBroadcastsTransitionSecurity();
    $requestSecurity->option1 = new YoutubeLiveBroadcastsTransitionSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveBroadcasts->youtubeLiveBroadcastsTransition($request, $requestSecurity);

    if ($response->liveBroadcast !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveBroadcastsUpdate

Updates an existing broadcast for the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcast;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastContentDetailsClosedCaptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastContentDetailsLatencyPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitorStreamInfo;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastContentDetailsProjectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastContentDetailsStereoLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ThumbnailDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thumbnail;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatistics;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatus;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatusLifeCycleStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatusLiveBroadcastPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatusPrivacyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveBroadcastStatusRecordingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveBroadcastsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveBroadcastsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->liveBroadcast = new LiveBroadcast();
    $request->liveBroadcast->contentDetails = new LiveBroadcastContentDetails();
    $request->liveBroadcast->contentDetails->boundStreamId = 'ex';
    $request->liveBroadcast->contentDetails->boundStreamLastUpdateTimeMs = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-14T02:46:55.259Z');
    $request->liveBroadcast->contentDetails->closedCaptionsType = LiveBroadcastContentDetailsClosedCaptionsTypeEnum::CLOSED_CAPTIONS_DISABLED;
    $request->liveBroadcast->contentDetails->enableAutoStart = false;
    $request->liveBroadcast->contentDetails->enableAutoStop = false;
    $request->liveBroadcast->contentDetails->enableClosedCaptions = false;
    $request->liveBroadcast->contentDetails->enableContentEncryption = false;
    $request->liveBroadcast->contentDetails->enableDvr = false;
    $request->liveBroadcast->contentDetails->enableEmbed = false;
    $request->liveBroadcast->contentDetails->enableLowLatency = false;
    $request->liveBroadcast->contentDetails->latencyPreference = LiveBroadcastContentDetailsLatencyPreferenceEnum::NORMAL;
    $request->liveBroadcast->contentDetails->mesh = 'expedita';
    $request->liveBroadcast->contentDetails->monitorStream = new MonitorStreamInfo();
    $request->liveBroadcast->contentDetails->monitorStream->broadcastStreamDelayMs = 29950;
    $request->liveBroadcast->contentDetails->monitorStream->embedHtml = 'molestias';
    $request->liveBroadcast->contentDetails->monitorStream->enableMonitorStream = false;
    $request->liveBroadcast->contentDetails->projection = LiveBroadcastContentDetailsProjectionEnum::THREE_HUNDRED_AND_SIXTY;
    $request->liveBroadcast->contentDetails->recordFromStart = false;
    $request->liveBroadcast->contentDetails->startWithSlate = false;
    $request->liveBroadcast->contentDetails->stereoLayout = LiveBroadcastContentDetailsStereoLayoutEnum::MONO;
    $request->liveBroadcast->etag = 'beatae';
    $request->liveBroadcast->id = '891baa0f-e1ad-4e00-8e6f-8c5f350d8cdb';
    $request->liveBroadcast->kind = 'ipsam';
    $request->liveBroadcast->snippet = new LiveBroadcastSnippet();
    $request->liveBroadcast->snippet->actualEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-22T07:25:32.550Z');
    $request->liveBroadcast->snippet->actualStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-02T14:32:21.843Z');
    $request->liveBroadcast->snippet->channelId = 'deleniti';
    $request->liveBroadcast->snippet->description = 'veritatis';
    $request->liveBroadcast->snippet->isDefaultBroadcast = false;
    $request->liveBroadcast->snippet->liveChatId = 'tempora';
    $request->liveBroadcast->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-28T19:52:33.730Z');
    $request->liveBroadcast->snippet->scheduledEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-22T21:29:02.039Z');
    $request->liveBroadcast->snippet->scheduledStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T08:03:12.737Z');
    $request->liveBroadcast->snippet->thumbnails = new ThumbnailDetails();
    $request->liveBroadcast->snippet->thumbnails->high = new Thumbnail();
    $request->liveBroadcast->snippet->thumbnails->high->height = 66149;
    $request->liveBroadcast->snippet->thumbnails->high->url = 'laudantium';
    $request->liveBroadcast->snippet->thumbnails->high->width = 65604;
    $request->liveBroadcast->snippet->thumbnails->maxres = new Thumbnail();
    $request->liveBroadcast->snippet->thumbnails->maxres->height = 222658;
    $request->liveBroadcast->snippet->thumbnails->maxres->url = 'fugiat';
    $request->liveBroadcast->snippet->thumbnails->maxres->width = 369490;
    $request->liveBroadcast->snippet->thumbnails->medium = new Thumbnail();
    $request->liveBroadcast->snippet->thumbnails->medium->height = 162120;
    $request->liveBroadcast->snippet->thumbnails->medium->url = 'ipsa';
    $request->liveBroadcast->snippet->thumbnails->medium->width = 559682;
    $request->liveBroadcast->snippet->thumbnails->standard = new Thumbnail();
    $request->liveBroadcast->snippet->thumbnails->standard->height = 911198;
    $request->liveBroadcast->snippet->thumbnails->standard->url = 'impedit';
    $request->liveBroadcast->snippet->thumbnails->standard->width = 884952;
    $request->liveBroadcast->snippet->title = 'Ms.';
    $request->liveBroadcast->statistics = new LiveBroadcastStatistics();
    $request->liveBroadcast->statistics->concurrentViewers = 'necessitatibus';
    $request->liveBroadcast->status = new LiveBroadcastStatus();
    $request->liveBroadcast->status->lifeCycleStatus = LiveBroadcastStatusLifeCycleStatusEnum::CREATED;
    $request->liveBroadcast->status->liveBroadcastPriority = LiveBroadcastStatusLiveBroadcastPriorityEnum::LOW;
    $request->liveBroadcast->status->madeForKids = false;
    $request->liveBroadcast->status->privacyStatus = LiveBroadcastStatusPrivacyStatusEnum::PUBLIC;
    $request->liveBroadcast->status->recordingStatus = LiveBroadcastStatusRecordingStatusEnum::RECORDING;
    $request->liveBroadcast->status->selfDeclaredMadeForKids = false;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatum';
    $request->fields = 'magnam';
    $request->key = 'exercitationem';
    $request->oauthToken = 'ab';
    $request->onBehalfOfContentOwner = 'porro';
    $request->onBehalfOfContentOwnerChannel = 'autem';
    $request->part = [
        'laboriosam',
        'recusandae',
        'consequuntur',
        'voluptatem',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new YoutubeLiveBroadcastsUpdateSecurity();
    $requestSecurity->option1 = new YoutubeLiveBroadcastsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveBroadcasts->youtubeLiveBroadcastsUpdate($request, $requestSecurity);

    if ($response->liveBroadcast !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
