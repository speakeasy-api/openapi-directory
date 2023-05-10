# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchAccountSettings](#fetchaccountsettings)
* [fetchAnnotation](#fetchannotation) - Fetch a specific Annotation.
* [fetchCall](#fetchcall)
* [fetchConference](#fetchconference) - Fetch a specific Conference.
* [fetchConferenceParticipant](#fetchconferenceparticipant) - Fetch a specific Conference Participant Summary.
* [fetchSummary](#fetchsummary)
* [fetchVideoParticipantSummary](#fetchvideoparticipantsummary) - Get Video Log Analyzer data for a Room Participant.
* [fetchVideoRoomSummary](#fetchvideoroomsummary) - Get Video Log Analyzer data for a Room.
* [listCallSummaries](#listcallsummaries)
* [listConference](#listconference) - Retrieve a list of Conferences.
* [listConferenceParticipant](#listconferenceparticipant) - List Conference Participants.
* [listEvent](#listevent)
* [listMetric](#listmetric)
* [listVideoParticipantSummary](#listvideoparticipantsummary) - Get a list of room participants.
* [listVideoRoomSummary](#listvideoroomsummary) - Get a list of Programmable Video Rooms.
* [updateAccountSettings](#updateaccountsettings)
* [updateAnnotation](#updateannotation) - Create/Update the annotation for the call

## fetchAccountSettings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAccountSettingsRequest();
    $request->subaccountSid = 'provident';

    $requestSecurity = new FetchAccountSettingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAccountSettings($request, $requestSecurity);

    if ($response->insightsV1AccountSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAnnotation

Fetch a specific Annotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAnnotationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAnnotationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAnnotationRequest();
    $request->callSid = 'distinctio';

    $requestSecurity = new FetchAnnotationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAnnotation($request, $requestSecurity);

    if ($response->insightsV1CallAnnotation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCall

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCallRequest();
    $request->sid = 'quibusdam';

    $requestSecurity = new FetchCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCall($request, $requestSecurity);

    if ($response->insightsV1Call !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConference

Fetch a specific Conference.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConferenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConferenceRequest();
    $request->conferenceSid = 'unde';

    $requestSecurity = new FetchConferenceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConference($request, $requestSecurity);

    if ($response->insightsV1Conference !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConferenceParticipant

Fetch a specific Conference Participant Summary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConferenceParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConferenceParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConferenceParticipantRequest();
    $request->conferenceSid = 'nulla';
    $request->events = 'corrupti';
    $request->metrics = 'illum';
    $request->participantSid = 'vel';

    $requestSecurity = new FetchConferenceParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConferenceParticipant($request, $requestSecurity);

    if ($response->insightsV1ConferenceConferenceParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSummary

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\SummaryEnumProcessingStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\FetchSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSummaryRequest();
    $request->callSid = 'error';
    $request->processingState = SummaryEnumProcessingStateEnum::PARTIAL;

    $requestSecurity = new FetchSummarySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSummary($request, $requestSecurity);

    if ($response->insightsV1CallSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchVideoParticipantSummary

Get Video Log Analyzer data for a Room Participant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchVideoParticipantSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchVideoParticipantSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchVideoParticipantSummaryRequest();
    $request->participantSid = 'suscipit';
    $request->roomSid = 'iure';

    $requestSecurity = new FetchVideoParticipantSummarySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchVideoParticipantSummary($request, $requestSecurity);

    if ($response->insightsV1VideoRoomSummaryVideoParticipantSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchVideoRoomSummary

Get Video Log Analyzer data for a Room.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchVideoRoomSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchVideoRoomSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchVideoRoomSummaryRequest();
    $request->roomSid = 'magnam';

    $requestSecurity = new FetchVideoRoomSummarySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchVideoRoomSummary($request, $requestSecurity);

    if ($response->insightsV1VideoRoomSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCallSummaries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCallSummariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallSummariesEnumAnsweredByEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallSummariesEnumProcessingStateRequestEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallSummariesEnumSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCallSummariesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCallSummariesRequest();
    $request->abnormalSession = false;
    $request->answeredBy = CallSummariesEnumAnsweredByEnum::FAX;
    $request->branded = false;
    $request->callState = 'ipsa';
    $request->callType = 'delectus';
    $request->direction = 'tempora';
    $request->endTime = 'suscipit';
    $request->from = 'molestiae';
    $request->fromCarrier = 'minus';
    $request->fromCountryCode = 'placeat';
    $request->hasTag = false;
    $request->page = 528895;
    $request->pageSize = 479977;
    $request->pageToken = 'excepturi';
    $request->processingState = CallSummariesEnumProcessingStateRequestEnum::STARTED;
    $request->sortBy = CallSummariesEnumSortByEnum::END_TIME;
    $request->startTime = 'temporibus';
    $request->subaccount = 'ab';
    $request->to = 'quis';
    $request->toCarrier = 'veritatis';
    $request->toCountryCode = 'deserunt';
    $request->verifiedCaller = false;

    $requestSecurity = new ListCallSummariesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCallSummaries($request, $requestSecurity);

    if ($response->listCallSummariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConference

Retrieve a list of Conferences.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConferenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConferenceRequest();
    $request->conferenceSid = 'perferendis';
    $request->createdAfter = 'ipsam';
    $request->createdBefore = 'repellendus';
    $request->detectedIssues = 'sapiente';
    $request->endReason = 'quo';
    $request->friendlyName = 'odit';
    $request->mixerRegion = 'at';
    $request->page = 870088;
    $request->pageSize = 978619;
    $request->pageToken = 'molestiae';
    $request->status = 'quod';
    $request->subaccount = 'quod';
    $request->tags = 'esse';

    $requestSecurity = new ListConferenceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConference($request, $requestSecurity);

    if ($response->listConferenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConferenceParticipant

List Conference Participants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConferenceParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConferenceParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConferenceParticipantRequest();
    $request->conferenceSid = 'totam';
    $request->events = 'porro';
    $request->label = 'dolorum';
    $request->page = 118274;
    $request->pageSize = 720633;
    $request->pageToken = 'officia';
    $request->participantSid = 'occaecati';

    $requestSecurity = new ListConferenceParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConferenceParticipant($request, $requestSecurity);

    if ($response->listConferenceParticipantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEvent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\EventEnumTwilioEdgeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventRequest();
    $request->callSid = 'fugit';
    $request->edge = EventEnumTwilioEdgeEnum::SIP_EDGE;
    $request->page = 944669;
    $request->pageSize = 758616;
    $request->pageToken = 'totam';

    $requestSecurity = new ListEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEvent($request, $requestSecurity);

    if ($response->listEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMetric

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMetricRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetricEnumStreamDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricEnumTwilioEdgeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMetricSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMetricRequest();
    $request->callSid = 'beatae';
    $request->direction = MetricEnumStreamDirectionEnum::INBOUND;
    $request->edge = MetricEnumTwilioEdgeEnum::SIP_EDGE;
    $request->page = 264555;
    $request->pageSize = 186332;
    $request->pageToken = 'impedit';

    $requestSecurity = new ListMetricSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMetric($request, $requestSecurity);

    if ($response->listMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVideoParticipantSummary

Get a list of room participants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVideoParticipantSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVideoParticipantSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVideoParticipantSummaryRequest();
    $request->page = 736918;
    $request->pageSize = 456150;
    $request->pageToken = 'ipsum';
    $request->roomSid = 'excepturi';

    $requestSecurity = new ListVideoParticipantSummarySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listVideoParticipantSummary($request, $requestSecurity);

    if ($response->listVideoParticipantSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVideoRoomSummary

Get a list of Programmable Video Rooms.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVideoRoomSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\VideoRoomSummaryEnumCodecEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoRoomSummaryEnumRoomTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListVideoRoomSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVideoRoomSummaryRequest();
    $request->codec = [
        VideoRoomSummaryEnumCodecEnum::VP8,
    ];
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T13:30:46.463Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-22T14:02:28.908Z');
    $request->page = 222321;
    $request->pageSize = 616934;
    $request->pageToken = 'laboriosam';
    $request->roomName = 'hic';
    $request->roomType = [
        VideoRoomSummaryEnumRoomTypeEnum::GROUP,
        VideoRoomSummaryEnumRoomTypeEnum::PEER_TO_PEER,
        VideoRoomSummaryEnumRoomTypeEnum::PEER_TO_PEER,
        VideoRoomSummaryEnumRoomTypeEnum::GROUP,
    ];

    $requestSecurity = new ListVideoRoomSummarySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listVideoRoomSummary($request, $requestSecurity);

    if ($response->listVideoRoomSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountSettings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSettingsUpdateAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountSettingsUpdateAccountSettingsRequest();
    $request->advancedFeatures = false;
    $request->subaccountSid = 'iure';
    $request->voiceTrace = false;

    $requestSecurity = new UpdateAccountSettingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateAccountSettings($request, $requestSecurity);

    if ($response->insightsV1AccountSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAnnotation

Create/Update the annotation for the call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnnotationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnnotationUpdateAnnotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationEnumAnsweredByEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationEnumConnectivityIssueEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnnotationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAnnotationRequest();
    $request->callSid = 'saepe';
    $request->requestBody = new UpdateAnnotationUpdateAnnotationRequest();
    $request->requestBody->answeredBy = AnnotationEnumAnsweredByEnum::MACHINE;
    $request->requestBody->callScore = 99280;
    $request->requestBody->comment = 'ipsa';
    $request->requestBody->connectivityIssue = AnnotationEnumConnectivityIssueEnum::NUMBER_REACHABILITY;
    $request->requestBody->incident = 'est';
    $request->requestBody->qualityIssues = 'mollitia';
    $request->requestBody->spam = false;

    $requestSecurity = new UpdateAnnotationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateAnnotation($request, $requestSecurity);

    if ($response->insightsV1CallAnnotation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
