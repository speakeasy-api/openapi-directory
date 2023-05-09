# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_video_v1/1.43.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateComposition(ctx, operations.CreateCompositionCreateCompositionRequest{
        AudioSources: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        AudioSourcesExcluded: []string{
            "nulla",
            "corrupti",
            "illum",
        },
        Format: shared.CompositionEnumFormatEnumMp4.ToPointer(),
        Resolution: sdk.String("error"),
        RoomSid: "deserunt",
        StatusCallback: sdk.String("http://innocent-effect.org"),
        StatusCallbackMethod: operations.CreateCompositionCreateCompositionRequestStatusCallbackMethodEnumHead.ToPointer(),
        Trim: sdk.Bool(false),
        VideoLayout: sdk.String("delectus"),
    }, operations.CreateCompositionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Composition != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateComposition](docs/sdk/README.md#createcomposition)
* [CreateCompositionHook](docs/sdk/README.md#createcompositionhook)
* [CreateCompositionSettings](docs/sdk/README.md#createcompositionsettings)
* [CreateRecordingSettings](docs/sdk/README.md#createrecordingsettings)
* [CreateRoom](docs/sdk/README.md#createroom)
* [DeleteComposition](docs/sdk/README.md#deletecomposition) - Delete a Recording Composition resource identified by a Composition SID.
* [DeleteCompositionHook](docs/sdk/README.md#deletecompositionhook) - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
* [DeleteRecording](docs/sdk/README.md#deleterecording) - Delete a Recording resource identified by a Recording SID.
* [DeleteRoomRecording](docs/sdk/README.md#deleteroomrecording)
* [FetchComposition](docs/sdk/README.md#fetchcomposition) - Returns a single Composition resource identified by a Composition SID.
* [FetchCompositionHook](docs/sdk/README.md#fetchcompositionhook) - Returns a single CompositionHook resource identified by a CompositionHook SID.
* [FetchCompositionSettings](docs/sdk/README.md#fetchcompositionsettings)
* [FetchRecording](docs/sdk/README.md#fetchrecording) - Returns a single Recording resource identified by a Recording SID.
* [FetchRecordingSettings](docs/sdk/README.md#fetchrecordingsettings)
* [FetchRoom](docs/sdk/README.md#fetchroom)
* [FetchRoomParticipant](docs/sdk/README.md#fetchroomparticipant)
* [FetchRoomParticipantPublishedTrack](docs/sdk/README.md#fetchroomparticipantpublishedtrack) - Returns a single Track resource represented by TrackName or SID.
* [FetchRoomParticipantSubscribeRule](docs/sdk/README.md#fetchroomparticipantsubscriberule) - Returns a list of Subscribe Rules for the Participant.
* [FetchRoomParticipantSubscribedTrack](docs/sdk/README.md#fetchroomparticipantsubscribedtrack) - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
* [FetchRoomRecording](docs/sdk/README.md#fetchroomrecording)
* [FetchRoomRecordingRule](docs/sdk/README.md#fetchroomrecordingrule) - Returns a list of Recording Rules for the Room.
* [ListComposition](docs/sdk/README.md#listcomposition) - List of all Recording compositions.
* [ListCompositionHook](docs/sdk/README.md#listcompositionhook) - List of all Recording CompositionHook resources.
* [ListRecording](docs/sdk/README.md#listrecording) - List of all Track recordings.
* [ListRoom](docs/sdk/README.md#listroom)
* [ListRoomParticipant](docs/sdk/README.md#listroomparticipant)
* [ListRoomParticipantPublishedTrack](docs/sdk/README.md#listroomparticipantpublishedtrack) - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
* [ListRoomParticipantSubscribedTrack](docs/sdk/README.md#listroomparticipantsubscribedtrack) - Returns a list of tracks that are subscribed for the participant.
* [ListRoomRecording](docs/sdk/README.md#listroomrecording)
* [UpdateCompositionHook](docs/sdk/README.md#updatecompositionhook)
* [UpdateRoom](docs/sdk/README.md#updateroom)
* [UpdateRoomParticipant](docs/sdk/README.md#updateroomparticipant)
* [UpdateRoomParticipantAnonymize](docs/sdk/README.md#updateroomparticipantanonymize)
* [UpdateRoomParticipantSubscribeRule](docs/sdk/README.md#updateroomparticipantsubscriberule) - Update the Subscribe Rules for the Participant
* [UpdateRoomRecordingRule](docs/sdk/README.md#updateroomrecordingrule) - Update the Recording Rules for the Room
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
