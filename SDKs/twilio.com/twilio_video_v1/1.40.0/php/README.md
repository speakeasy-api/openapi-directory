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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createComposition`
* `createCompositionHook`
* `createCompositionSettings`
* `createRecordingSettings`
* `createRoom`
* `deleteComposition` - Delete a Recording Composition resource identified by a Composition SID.
* `deleteCompositionHook` - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
* `deleteRecording` - Delete a Recording resource identified by a Recording SID.
* `deleteRoomRecording`
* `fetchComposition` - Returns a single Composition resource identified by a Composition SID.
* `fetchCompositionHook` - Returns a single CompositionHook resource identified by a CompositionHook SID.
* `fetchCompositionSettings`
* `fetchRecording` - Returns a single Recording resource identified by a Recording SID.
* `fetchRecordingSettings`
* `fetchRoom`
* `fetchRoomParticipant`
* `fetchRoomParticipantPublishedTrack` - Returns a single Track resource represented by TrackName or SID.
* `fetchRoomParticipantSubscribeRule` - Returns a list of Subscribe Rules for the Participant.
* `fetchRoomParticipantSubscribedTrack` - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
* `fetchRoomRecording`
* `fetchRoomRecordingRule` - Returns a list of Recording Rules for the Room.
* `listComposition` - List of all Recording compositions.
* `listCompositionHook` - List of all Recording CompositionHook resources.
* `listRecording` - List of all Track recordings.
* `listRoom`
* `listRoomParticipant`
* `listRoomParticipantPublishedTrack` - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
* `listRoomParticipantSubscribedTrack` - Returns a list of tracks that are subscribed for the participant.
* `listRoomRecording`
* `updateCompositionHook`
* `updateRoom`
* `updateRoomParticipant`
* `updateRoomParticipantAnonymize`
* `updateRoomParticipantSubscribeRule` - Update the Subscribe Rules for the Participant
* `updateRoomRecordingRule` - Update the Recording Rules for the Room
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
