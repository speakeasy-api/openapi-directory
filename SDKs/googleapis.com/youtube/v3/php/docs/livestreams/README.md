# liveStreams

### Available Operations

* [youtubeLiveStreamsDelete](#youtubelivestreamsdelete) - Deletes an existing stream for the authenticated user.
* [youtubeLiveStreamsInsert](#youtubelivestreamsinsert) - Inserts a new stream for the authenticated user.
* [youtubeLiveStreamsList](#youtubelivestreamslist) - Retrieve the list of streams associated with the given channel. --
* [youtubeLiveStreamsUpdate](#youtubelivestreamsupdate) - Updates an existing stream for the authenticated user.

## youtubeLiveStreamsDelete

Deletes an existing stream for the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveStreamsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'sint';
    $request->id = 'e3eb1e5a-2b12-4eb0-bf11-6db99545fc95';
    $request->key = 'hic';
    $request->oauthToken = 'animi';
    $request->onBehalfOfContentOwner = 'quas';
    $request->onBehalfOfContentOwnerChannel = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new YoutubeLiveStreamsDeleteSecurity();
    $requestSecurity->option1 = new YoutubeLiveStreamsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveStreams->youtubeLiveStreamsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveStreamsInsert

Inserts a new stream for the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveStream;
use \OpenAPI\OpenAPI\Models\Shared\CdnSettings;
use \OpenAPI\OpenAPI\Models\Shared\CdnSettingsFrameRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\IngestionInfo;
use \OpenAPI\OpenAPI\Models\Shared\CdnSettingsIngestionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CdnSettingsResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamSnippet;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamStatus;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamHealthStatus;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamConfigurationIssue;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamConfigurationIssueSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamConfigurationIssueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamHealthStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamStatusStreamStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveStreamsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->liveStream = new LiveStream();
    $request->liveStream->cdn = new CdnSettings();
    $request->liveStream->cdn->format = 'architecto';
    $request->liveStream->cdn->frameRate = CdnSettingsFrameRateEnum::SIXTYFPS;
    $request->liveStream->cdn->ingestionInfo = new IngestionInfo();
    $request->liveStream->cdn->ingestionInfo->backupIngestionAddress = 'iste';
    $request->liveStream->cdn->ingestionInfo->ingestionAddress = 'assumenda';
    $request->liveStream->cdn->ingestionInfo->rtmpsBackupIngestionAddress = 'tempore';
    $request->liveStream->cdn->ingestionInfo->rtmpsIngestionAddress = 'libero';
    $request->liveStream->cdn->ingestionInfo->streamName = 'velit';
    $request->liveStream->cdn->ingestionType = CdnSettingsIngestionTypeEnum::RTMP;
    $request->liveStream->cdn->resolution = CdnSettingsResolutionEnum::VARIABLE;
    $request->liveStream->contentDetails = new LiveStreamContentDetails();
    $request->liveStream->contentDetails->closedCaptionsIngestionUrl = 'impedit';
    $request->liveStream->contentDetails->isReusable = false;
    $request->liveStream->etag = 'cum';
    $request->liveStream->id = '33ea055b-197c-4d44-a2f5-2d82d3513bb6';
    $request->liveStream->kind = 'voluptatibus';
    $request->liveStream->snippet = new LiveStreamSnippet();
    $request->liveStream->snippet->channelId = 'quaerat';
    $request->liveStream->snippet->description = 'blanditiis';
    $request->liveStream->snippet->isDefaultStream = false;
    $request->liveStream->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T12:36:58.674Z');
    $request->liveStream->snippet->title = 'Mrs.';
    $request->liveStream->status = new LiveStreamStatus();
    $request->liveStream->status->healthStatus = new LiveStreamHealthStatus();
    $request->liveStream->status->healthStatus->configurationIssues = [
        new LiveStreamConfigurationIssue(),
        new LiveStreamConfigurationIssue(),
    ];
    $request->liveStream->status->healthStatus->lastUpdateTimeSeconds = 'libero';
    $request->liveStream->status->healthStatus->status = LiveStreamHealthStatusStatusEnum::NO_DATA;
    $request->liveStream->status->streamStatus = LiveStreamStatusStreamStatusEnum::ERROR;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'voluptatibus';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'consequuntur';
    $request->onBehalfOfContentOwner = 'debitis';
    $request->onBehalfOfContentOwnerChannel = 'labore';
    $request->part = [
        'eos',
        'reprehenderit',
        'nostrum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'est';

    $requestSecurity = new YoutubeLiveStreamsInsertSecurity();
    $requestSecurity->option1 = new YoutubeLiveStreamsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveStreams->youtubeLiveStreamsInsert($request, $requestSecurity);

    if ($response->liveStream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveStreamsList

Retrieve the list of streams associated with the given channel. --

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveStreamsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'officiis';
    $request->id = [
        'dolor',
        'dicta',
    ];
    $request->key = 'error';
    $request->maxResults = 784731;
    $request->mine = false;
    $request->oauthToken = 'vitae';
    $request->onBehalfOfContentOwner = 'dignissimos';
    $request->onBehalfOfContentOwnerChannel = 'esse';
    $request->pageToken = 'fugiat';
    $request->part = [
        'aspernatur',
        'enim',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new YoutubeLiveStreamsListSecurity();
    $requestSecurity->option1 = new YoutubeLiveStreamsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveStreams->youtubeLiveStreamsList($request, $requestSecurity);

    if ($response->liveStreamListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveStreamsUpdate

Updates an existing stream for the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveStream;
use \OpenAPI\OpenAPI\Models\Shared\CdnSettings;
use \OpenAPI\OpenAPI\Models\Shared\CdnSettingsFrameRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\IngestionInfo;
use \OpenAPI\OpenAPI\Models\Shared\CdnSettingsIngestionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CdnSettingsResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamSnippet;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamStatus;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamHealthStatus;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamConfigurationIssue;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamConfigurationIssueSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamConfigurationIssueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamHealthStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveStreamStatusStreamStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveStreamsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveStreamsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->liveStream = new LiveStream();
    $request->liveStream->cdn = new CdnSettings();
    $request->liveStream->cdn->format = 'illo';
    $request->liveStream->cdn->frameRate = CdnSettingsFrameRateEnum::THIRTYFPS;
    $request->liveStream->cdn->ingestionInfo = new IngestionInfo();
    $request->liveStream->cdn->ingestionInfo->backupIngestionAddress = 'incidunt';
    $request->liveStream->cdn->ingestionInfo->ingestionAddress = 'accusamus';
    $request->liveStream->cdn->ingestionInfo->rtmpsBackupIngestionAddress = 'saepe';
    $request->liveStream->cdn->ingestionInfo->rtmpsIngestionAddress = 'tempore';
    $request->liveStream->cdn->ingestionInfo->streamName = 'veniam';
    $request->liveStream->cdn->ingestionType = CdnSettingsIngestionTypeEnum::RTMP;
    $request->liveStream->cdn->resolution = CdnSettingsResolutionEnum::VARIABLE;
    $request->liveStream->contentDetails = new LiveStreamContentDetails();
    $request->liveStream->contentDetails->closedCaptionsIngestionUrl = 'earum';
    $request->liveStream->contentDetails->isReusable = false;
    $request->liveStream->etag = 'reprehenderit';
    $request->liveStream->id = '85fc3781-4d4c-498e-8c2b-b89eb75dad63';
    $request->liveStream->kind = 'commodi';
    $request->liveStream->snippet = new LiveStreamSnippet();
    $request->liveStream->snippet->channelId = 'impedit';
    $request->liveStream->snippet->description = 'commodi';
    $request->liveStream->snippet->isDefaultStream = false;
    $request->liveStream->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T07:11:32.953Z');
    $request->liveStream->snippet->title = 'Mrs.';
    $request->liveStream->status = new LiveStreamStatus();
    $request->liveStream->status->healthStatus = new LiveStreamHealthStatus();
    $request->liveStream->status->healthStatus->configurationIssues = [
        new LiveStreamConfigurationIssue(),
    ];
    $request->liveStream->status->healthStatus->lastUpdateTimeSeconds = 'amet';
    $request->liveStream->status->healthStatus->status = LiveStreamHealthStatusStatusEnum::REVOKED;
    $request->liveStream->status->streamStatus = LiveStreamStatusStreamStatusEnum::ACTIVE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'quasi';
    $request->key = 'dicta';
    $request->oauthToken = 'laudantium';
    $request->onBehalfOfContentOwner = 'doloremque';
    $request->onBehalfOfContentOwnerChannel = 'earum';
    $request->part = [
        'amet',
        'provident',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new YoutubeLiveStreamsUpdateSecurity();
    $requestSecurity->option1 = new YoutubeLiveStreamsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveStreams->youtubeLiveStreamsUpdate($request, $requestSecurity);

    if ($response->liveStream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
