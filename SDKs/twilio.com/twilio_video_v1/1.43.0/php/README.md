# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->audioSourcesExcluded = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->format = CompositionEnumFormatEnum::MP4;
    $request->resolution = 'error';
    $request->roomSid = 'deserunt';
    $request->statusCallback = 'http://innocent-effect.org';
    $request->statusCallbackMethod = CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum::HEAD;
    $request->trim = false;
    $request->videoLayout = 'delectus';

    $requestSecurity = new CreateCompositionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createComposition($request, $requestSecurity);

    if ($response->videoV1Composition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createComposition](docs/sdk/README.md#createcomposition)
* [createCompositionHook](docs/sdk/README.md#createcompositionhook)
* [createCompositionSettings](docs/sdk/README.md#createcompositionsettings)
* [createRecordingSettings](docs/sdk/README.md#createrecordingsettings)
* [createRoom](docs/sdk/README.md#createroom)
* [deleteComposition](docs/sdk/README.md#deletecomposition) - Delete a Recording Composition resource identified by a Composition SID.
* [deleteCompositionHook](docs/sdk/README.md#deletecompositionhook) - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
* [deleteRecording](docs/sdk/README.md#deleterecording) - Delete a Recording resource identified by a Recording SID.
* [deleteRoomRecording](docs/sdk/README.md#deleteroomrecording)
* [fetchComposition](docs/sdk/README.md#fetchcomposition) - Returns a single Composition resource identified by a Composition SID.
* [fetchCompositionHook](docs/sdk/README.md#fetchcompositionhook) - Returns a single CompositionHook resource identified by a CompositionHook SID.
* [fetchCompositionSettings](docs/sdk/README.md#fetchcompositionsettings)
* [fetchRecording](docs/sdk/README.md#fetchrecording) - Returns a single Recording resource identified by a Recording SID.
* [fetchRecordingSettings](docs/sdk/README.md#fetchrecordingsettings)
* [fetchRoom](docs/sdk/README.md#fetchroom)
* [fetchRoomParticipant](docs/sdk/README.md#fetchroomparticipant)
* [fetchRoomParticipantPublishedTrack](docs/sdk/README.md#fetchroomparticipantpublishedtrack) - Returns a single Track resource represented by TrackName or SID.
* [fetchRoomParticipantSubscribeRule](docs/sdk/README.md#fetchroomparticipantsubscriberule) - Returns a list of Subscribe Rules for the Participant.
* [fetchRoomParticipantSubscribedTrack](docs/sdk/README.md#fetchroomparticipantsubscribedtrack) - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
* [fetchRoomRecording](docs/sdk/README.md#fetchroomrecording)
* [fetchRoomRecordingRule](docs/sdk/README.md#fetchroomrecordingrule) - Returns a list of Recording Rules for the Room.
* [listComposition](docs/sdk/README.md#listcomposition) - List of all Recording compositions.
* [listCompositionHook](docs/sdk/README.md#listcompositionhook) - List of all Recording CompositionHook resources.
* [listRecording](docs/sdk/README.md#listrecording) - List of all Track recordings.
* [listRoom](docs/sdk/README.md#listroom)
* [listRoomParticipant](docs/sdk/README.md#listroomparticipant)
* [listRoomParticipantPublishedTrack](docs/sdk/README.md#listroomparticipantpublishedtrack) - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
* [listRoomParticipantSubscribedTrack](docs/sdk/README.md#listroomparticipantsubscribedtrack) - Returns a list of tracks that are subscribed for the participant.
* [listRoomRecording](docs/sdk/README.md#listroomrecording)
* [updateCompositionHook](docs/sdk/README.md#updatecompositionhook)
* [updateRoom](docs/sdk/README.md#updateroom)
* [updateRoomParticipant](docs/sdk/README.md#updateroomparticipant)
* [updateRoomParticipantAnonymize](docs/sdk/README.md#updateroomparticipantanonymize)
* [updateRoomParticipantSubscribeRule](docs/sdk/README.md#updateroomparticipantsubscriberule) - Update the Subscribe Rules for the Participant
* [updateRoomRecordingRule](docs/sdk/README.md#updateroomrecordingrule) - Update the Recording Rules for the Room
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
