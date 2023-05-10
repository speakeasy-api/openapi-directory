# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createComposition](#createcomposition)
* [createCompositionHook](#createcompositionhook)
* [createCompositionSettings](#createcompositionsettings)
* [createRecordingSettings](#createrecordingsettings)
* [createRoom](#createroom)
* [deleteComposition](#deletecomposition) - Delete a Recording Composition resource identified by a Composition SID.
* [deleteCompositionHook](#deletecompositionhook) - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
* [deleteRecording](#deleterecording) - Delete a Recording resource identified by a Recording SID.
* [deleteRoomRecording](#deleteroomrecording)
* [fetchComposition](#fetchcomposition) - Returns a single Composition resource identified by a Composition SID.
* [fetchCompositionHook](#fetchcompositionhook) - Returns a single CompositionHook resource identified by a CompositionHook SID.
* [fetchCompositionSettings](#fetchcompositionsettings)
* [fetchRecording](#fetchrecording) - Returns a single Recording resource identified by a Recording SID.
* [fetchRecordingSettings](#fetchrecordingsettings)
* [fetchRoom](#fetchroom)
* [fetchRoomParticipant](#fetchroomparticipant)
* [fetchRoomParticipantPublishedTrack](#fetchroomparticipantpublishedtrack) - Returns a single Track resource represented by TrackName or SID.
* [fetchRoomParticipantSubscribeRule](#fetchroomparticipantsubscriberule) - Returns a list of Subscribe Rules for the Participant.
* [fetchRoomParticipantSubscribedTrack](#fetchroomparticipantsubscribedtrack) - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
* [fetchRoomRecording](#fetchroomrecording)
* [fetchRoomRecordingRule](#fetchroomrecordingrule) - Returns a list of Recording Rules for the Room.
* [listComposition](#listcomposition) - List of all Recording compositions.
* [listCompositionHook](#listcompositionhook) - List of all Recording CompositionHook resources.
* [listRecording](#listrecording) - List of all Track recordings.
* [listRoom](#listroom)
* [listRoomParticipant](#listroomparticipant)
* [listRoomParticipantPublishedTrack](#listroomparticipantpublishedtrack) - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
* [listRoomParticipantSubscribedTrack](#listroomparticipantsubscribedtrack) - Returns a list of tracks that are subscribed for the participant.
* [listRoomRecording](#listroomrecording)
* [updateCompositionHook](#updatecompositionhook)
* [updateRoom](#updateroom)
* [updateRoomParticipant](#updateroomparticipant)
* [updateRoomParticipantAnonymize](#updateroomparticipantanonymize)
* [updateRoomParticipantSubscribeRule](#updateroomparticipantsubscriberule) - Update the Subscribe Rules for the Participant
* [updateRoomRecordingRule](#updateroomrecordingrule) - Update the Recording Rules for the Room

## createComposition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionCreateCompositionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompositionEnumFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCompositionCreateCompositionRequest();
    $request->audioSources = [
        'suscipit',
        'molestiae',
    ];
    $request->audioSourcesExcluded = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->format = CompositionEnumFormatEnum::MP4;
    $request->resolution = 'recusandae';
    $request->roomSid = 'temporibus';
    $request->statusCallback = 'http://gloomy-blanket.name';
    $request->statusCallbackMethod = CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum::HEAD;
    $request->trim = false;
    $request->videoLayout = 'ipsam';

    $requestSecurity = new CreateCompositionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createComposition($request, $requestSecurity);

    if ($response->videoV1Composition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCompositionHook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionHookCreateCompositionHookRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompositionHookEnumFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionHookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCompositionHookCreateCompositionHookRequest();
    $request->audioSources = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->audioSourcesExcluded = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->enabled = false;
    $request->format = CompositionHookEnumFormatEnum::MP4;
    $request->friendlyName = 'totam';
    $request->resolution = 'porro';
    $request->statusCallback = 'https://classic-ranch.name';
    $request->statusCallbackMethod = CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum::PATCH;
    $request->trim = false;
    $request->videoLayout = 'fugit';

    $requestSecurity = new CreateCompositionHookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCompositionHook($request, $requestSecurity);

    if ($response->videoV1CompositionHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCompositionSettings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionSettingsCreateCompositionSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCompositionSettingsCreateCompositionSettingsRequest();
    $request->awsCredentialsSid = 'deleniti';
    $request->awsS3Url = 'https://sizzling-locust.com';
    $request->awsStorageEnabled = false;
    $request->encryptionEnabled = false;
    $request->encryptionKeySid = 'commodi';
    $request->friendlyName = 'molestiae';

    $requestSecurity = new CreateCompositionSettingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCompositionSettings($request, $requestSecurity);

    if ($response->videoV1CompositionSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRecordingSettings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecordingSettingsCreateRecordingSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecordingSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRecordingSettingsCreateRecordingSettingsRequest();
    $request->awsCredentialsSid = 'modi';
    $request->awsS3Url = 'http://soft-reminder.info';
    $request->awsStorageEnabled = false;
    $request->encryptionEnabled = false;
    $request->encryptionKeySid = 'ipsum';
    $request->friendlyName = 'excepturi';

    $requestSecurity = new CreateRecordingSettingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createRecordingSettings($request, $requestSecurity);

    if ($response->videoV1RecordingSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRoom

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoomCreateRoomRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoomCreateRoomRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoomEnumRoomTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoomEnumVideoCodecEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoomSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRoomCreateRoomRequest();
    $request->audioOnly = false;
    $request->emptyRoomTimeout = 135218;
    $request->enableTurn = false;
    $request->largeRoom = false;
    $request->maxParticipantDuration = 18789;
    $request->maxParticipants = 324141;
    $request->mediaRegion = 'natus';
    $request->recordParticipantsOnConnect = false;
    $request->recordingRules = 'sed';
    $request->statusCallback = 'https://ecstatic-original.info';
    $request->statusCallbackMethod = CreateRoomCreateRoomRequestStatusCallbackMethodEnum::DELETE;
    $request->type = RoomEnumRoomTypeEnum::GROUP_SMALL;
    $request->uniqueName = 'fuga';
    $request->unusedRoomTimeout = 449950;
    $request->videoCodecs = [
        RoomEnumVideoCodecEnum::H264,
        RoomEnumVideoCodecEnum::VP8,
    ];

    $requestSecurity = new CreateRoomSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createRoom($request, $requestSecurity);

    if ($response->videoV1Room !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteComposition

Delete a Recording Composition resource identified by a Composition SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompositionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompositionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCompositionRequest();
    $request->sid = 'saepe';

    $requestSecurity = new DeleteCompositionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteComposition($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCompositionHook

Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompositionHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompositionHookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCompositionHookRequest();
    $request->sid = 'quidem';

    $requestSecurity = new DeleteCompositionHookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCompositionHook($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRecording

Delete a Recording resource identified by a Recording SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecordingRequest();
    $request->sid = 'architecto';

    $requestSecurity = new DeleteRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteRecording($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRoomRecording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRoomRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRoomRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRoomRecordingRequest();
    $request->roomSid = 'ipsa';
    $request->sid = 'reiciendis';

    $requestSecurity = new DeleteRoomRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteRoomRecording($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchComposition

Returns a single Composition resource identified by a Composition SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCompositionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCompositionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCompositionRequest();
    $request->sid = 'est';

    $requestSecurity = new FetchCompositionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchComposition($request, $requestSecurity);

    if ($response->videoV1Composition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCompositionHook

Returns a single CompositionHook resource identified by a CompositionHook SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCompositionHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCompositionHookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCompositionHookRequest();
    $request->sid = 'mollitia';

    $requestSecurity = new FetchCompositionHookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCompositionHook($request, $requestSecurity);

    if ($response->videoV1CompositionHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCompositionSettings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCompositionSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FetchCompositionSettingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCompositionSettings($requestSecurity);

    if ($response->videoV1CompositionSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRecording

Returns a single Recording resource identified by a Recording SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRecordingRequest();
    $request->sid = 'laborum';

    $requestSecurity = new FetchRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRecording($request, $requestSecurity);

    if ($response->videoV1Recording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRecordingSettings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FetchRecordingSettingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRecordingSettings($requestSecurity);

    if ($response->videoV1RecordingSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRoom

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRoomRequest();
    $request->sid = 'dolores';

    $requestSecurity = new FetchRoomSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRoom($request, $requestSecurity);

    if ($response->videoV1Room !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRoomParticipant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRoomParticipantRequest();
    $request->roomSid = 'dolorem';
    $request->sid = 'corporis';

    $requestSecurity = new FetchRoomParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRoomParticipant($request, $requestSecurity);

    if ($response->videoV1RoomRoomParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRoomParticipantPublishedTrack

Returns a single Track resource represented by TrackName or SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomParticipantPublishedTrackRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomParticipantPublishedTrackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRoomParticipantPublishedTrackRequest();
    $request->participantSid = 'explicabo';
    $request->roomSid = 'nobis';
    $request->sid = 'enim';

    $requestSecurity = new FetchRoomParticipantPublishedTrackSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRoomParticipantPublishedTrack($request, $requestSecurity);

    if ($response->videoV1RoomRoomParticipantRoomParticipantPublishedTrack !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRoomParticipantSubscribeRule

Returns a list of Subscribe Rules for the Participant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomParticipantSubscribeRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomParticipantSubscribeRuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRoomParticipantSubscribeRuleRequest();
    $request->participantSid = 'omnis';
    $request->roomSid = 'nemo';

    $requestSecurity = new FetchRoomParticipantSubscribeRuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRoomParticipantSubscribeRule($request, $requestSecurity);

    if ($response->videoV1RoomRoomParticipantRoomParticipantSubscribeRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRoomParticipantSubscribedTrack

Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomParticipantSubscribedTrackRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomParticipantSubscribedTrackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRoomParticipantSubscribedTrackRequest();
    $request->participantSid = 'minima';
    $request->roomSid = 'excepturi';
    $request->sid = 'accusantium';

    $requestSecurity = new FetchRoomParticipantSubscribedTrackSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRoomParticipantSubscribedTrack($request, $requestSecurity);

    if ($response->videoV1RoomRoomParticipantRoomParticipantSubscribedTrack !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRoomRecording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRoomRecordingRequest();
    $request->roomSid = 'iure';
    $request->sid = 'culpa';

    $requestSecurity = new FetchRoomRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRoomRecording($request, $requestSecurity);

    if ($response->videoV1RoomRoomRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRoomRecordingRule

Returns a list of Recording Rules for the Room.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomRecordingRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoomRecordingRuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRoomRecordingRuleRequest();
    $request->roomSid = 'doloribus';

    $requestSecurity = new FetchRoomRecordingRuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRoomRecordingRule($request, $requestSecurity);

    if ($response->videoV1RoomRoomRecordingRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComposition

List of all Recording compositions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCompositionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompositionEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCompositionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCompositionRequest();
    $request->dateCreatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-11T06:15:44.019Z');
    $request->dateCreatedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-01T12:28:44.292Z');
    $request->page = 635059;
    $request->pageSize = 161309;
    $request->pageToken = 'repellat';
    $request->roomSid = 'mollitia';
    $request->status = CompositionEnumStatusEnum::COMPLETED;

    $requestSecurity = new ListCompositionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listComposition($request, $requestSecurity);

    if ($response->listCompositionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCompositionHook

List of all Recording CompositionHook resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCompositionHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCompositionHookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCompositionHookRequest();
    $request->dateCreatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-02T18:07:51.623Z');
    $request->dateCreatedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T17:38:58.953Z');
    $request->enabled = false;
    $request->friendlyName = 'velit';
    $request->page = 623510;
    $request->pageSize = 158969;
    $request->pageToken = 'quis';

    $requestSecurity = new ListCompositionHookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCompositionHook($request, $requestSecurity);

    if ($response->listCompositionHookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecording

List of all Track recordings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecordingEnumTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecordingEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecordingRequest();
    $request->dateCreatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T17:10:10.440Z');
    $request->dateCreatedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T10:37:30.872Z');
    $request->groupingSid = [
        'quo',
    ];
    $request->mediaType = RecordingEnumTypeEnum::AUDIO;
    $request->page = 949572;
    $request->pageSize = 368725;
    $request->pageToken = 'id';
    $request->sourceSid = 'possimus';
    $request->status = RecordingEnumStatusEnum::PROCESSING;

    $requestSecurity = new ListRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRecording($request, $requestSecurity);

    if ($response->listRecordingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRoom

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoomEnumRoomStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRoomRequest();
    $request->dateCreatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T15:52:05.226Z');
    $request->dateCreatedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-24T08:13:29.299Z');
    $request->page = 96098;
    $request->pageSize = 971945;
    $request->pageToken = 'voluptatibus';
    $request->status = RoomEnumRoomStatusEnum::FAILED;
    $request->uniqueName = 'nihil';

    $requestSecurity = new ListRoomSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRoom($request, $requestSecurity);

    if ($response->listRoomResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRoomParticipant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomParticipantRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoomParticipantEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRoomParticipantRequest();
    $request->dateCreatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-17T23:08:44.457Z');
    $request->dateCreatedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-25T05:33:11.349Z');
    $request->identity = 'voluptate';
    $request->page = 739264;
    $request->pageSize = 19987;
    $request->pageToken = 'doloremque';
    $request->roomSid = 'reprehenderit';
    $request->status = RoomParticipantEnumStatusEnum::CONNECTED;

    $requestSecurity = new ListRoomParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRoomParticipant($request, $requestSecurity);

    if ($response->listRoomParticipantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRoomParticipantPublishedTrack

Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomParticipantPublishedTrackRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomParticipantPublishedTrackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRoomParticipantPublishedTrackRequest();
    $request->page = 979587;
    $request->pageSize = 120196;
    $request->pageToken = 'corporis';
    $request->participantSid = 'dolore';
    $request->roomSid = 'iusto';

    $requestSecurity = new ListRoomParticipantPublishedTrackSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRoomParticipantPublishedTrack($request, $requestSecurity);

    if ($response->listRoomParticipantPublishedTrackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRoomParticipantSubscribedTrack

Returns a list of tracks that are subscribed for the participant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomParticipantSubscribedTrackRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomParticipantSubscribedTrackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRoomParticipantSubscribedTrackRequest();
    $request->page = 118727;
    $request->pageSize = 688661;
    $request->pageToken = 'enim';
    $request->participantSid = 'accusamus';
    $request->roomSid = 'commodi';

    $requestSecurity = new ListRoomParticipantSubscribedTrackSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRoomParticipantSubscribedTrack($request, $requestSecurity);

    if ($response->listRoomParticipantSubscribedTrackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRoomRecording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomRecordingRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoomRecordingEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRoomRecordingRequest();
    $request->dateCreatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-22T18:12:12.288Z');
    $request->dateCreatedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T05:56:38.936Z');
    $request->page = 565189;
    $request->pageSize = 566602;
    $request->pageToken = 'pariatur';
    $request->roomSid = 'modi';
    $request->sourceSid = 'praesentium';
    $request->status = RoomRecordingEnumStatusEnum::DELETED;

    $requestSecurity = new ListRoomRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRoomRecording($request, $requestSecurity);

    if ($response->listRoomRecordingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCompositionHook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCompositionHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCompositionHookUpdateCompositionHookRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompositionHookEnumFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCompositionHookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCompositionHookRequest();
    $request->requestBody = new UpdateCompositionHookUpdateCompositionHookRequest();
    $request->requestBody->audioSources = [
        'quasi',
        'repudiandae',
        'sint',
        'veritatis',
    ];
    $request->requestBody->audioSourcesExcluded = [
        'incidunt',
        'enim',
        'consequatur',
        'est',
    ];
    $request->requestBody->enabled = false;
    $request->requestBody->format = CompositionHookEnumFormatEnum::WEBM;
    $request->requestBody->friendlyName = 'explicabo';
    $request->requestBody->resolution = 'deserunt';
    $request->requestBody->statusCallback = 'https://tempting-durian.biz';
    $request->requestBody->statusCallbackMethod = UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum::GET;
    $request->requestBody->trim = false;
    $request->requestBody->videoLayout = 'aliquid';
    $request->sid = 'cupiditate';

    $requestSecurity = new UpdateCompositionHookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCompositionHook($request, $requestSecurity);

    if ($response->videoV1CompositionHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoom

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomUpdateRoomRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoomEnumRoomStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoomRequest();
    $request->requestBody = new UpdateRoomUpdateRoomRequest();
    $request->requestBody->status = RoomEnumRoomStatusEnum::COMPLETED;
    $request->sid = 'perferendis';

    $requestSecurity = new UpdateRoomSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRoom($request, $requestSecurity);

    if ($response->videoV1Room !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoomParticipant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomParticipantUpdateRoomParticipantRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoomParticipantEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoomParticipantRequest();
    $request->requestBody = new UpdateRoomParticipantUpdateRoomParticipantRequest();
    $request->requestBody->status = RoomParticipantEnumStatusEnum::CONNECTED;
    $request->roomSid = 'assumenda';
    $request->sid = 'ipsam';

    $requestSecurity = new UpdateRoomParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRoomParticipant($request, $requestSecurity);

    if ($response->videoV1RoomRoomParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoomParticipantAnonymize

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomParticipantAnonymizeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomParticipantAnonymizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoomParticipantAnonymizeRequest();
    $request->roomSid = 'alias';
    $request->sid = 'fugit';

    $requestSecurity = new UpdateRoomParticipantAnonymizeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRoomParticipantAnonymize($request, $requestSecurity);

    if ($response->videoV1RoomRoomParticipantRoomParticipantAnonymize !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoomParticipantSubscribeRule

Update the Subscribe Rules for the Participant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomParticipantSubscribeRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomParticipantSubscribeRuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoomParticipantSubscribeRuleRequest();
    $request->participantSid = 'dolorum';
    $request->requestBody = new UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest();
    $request->requestBody->rules = 'excepturi';
    $request->roomSid = 'tempora';

    $requestSecurity = new UpdateRoomParticipantSubscribeRuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRoomParticipantSubscribeRule($request, $requestSecurity);

    if ($response->videoV1RoomRoomParticipantRoomParticipantSubscribeRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoomRecordingRule

Update the Recording Rules for the Room

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomRecordingRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomRecordingRuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoomRecordingRuleRequest();
    $request->requestBody = new UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest();
    $request->requestBody->rules = 'facilis';
    $request->roomSid = 'tempore';

    $requestSecurity = new UpdateRoomRecordingRuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRoomRecordingRule($request, $requestSecurity);

    if ($response->videoV1RoomRoomRecordingRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
