# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_video_v1/1.40.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateCompositionCreateCompositionRequest{
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
        Format: "mp4",
        Resolution: "error",
        RoomSid: "deserunt",
        StatusCallback: "http://innocent-effect.org",
        StatusCallbackMethod: "HEAD",
        Trim: false,
        VideoLayout: "delectus",
    }

    ctx := context.Background()
    res, err := s.CreateComposition(ctx, req, operations.CreateCompositionSecurity{
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

### SDK SDK

* `CreateComposition`
* `CreateCompositionHook`
* `CreateCompositionSettings`
* `CreateRecordingSettings`
* `CreateRoom`
* `DeleteComposition` - Delete a Recording Composition resource identified by a Composition SID.
* `DeleteCompositionHook` - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
* `DeleteRecording` - Delete a Recording resource identified by a Recording SID.
* `DeleteRoomRecording`
* `FetchComposition` - Returns a single Composition resource identified by a Composition SID.
* `FetchCompositionHook` - Returns a single CompositionHook resource identified by a CompositionHook SID.
* `FetchCompositionSettings`
* `FetchRecording` - Returns a single Recording resource identified by a Recording SID.
* `FetchRecordingSettings`
* `FetchRoom`
* `FetchRoomParticipant`
* `FetchRoomParticipantPublishedTrack` - Returns a single Track resource represented by TrackName or SID.
* `FetchRoomParticipantSubscribeRule` - Returns a list of Subscribe Rules for the Participant.
* `FetchRoomParticipantSubscribedTrack` - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
* `FetchRoomRecording`
* `FetchRoomRecordingRule` - Returns a list of Recording Rules for the Room.
* `ListComposition` - List of all Recording compositions.
* `ListCompositionHook` - List of all Recording CompositionHook resources.
* `ListRecording` - List of all Track recordings.
* `ListRoom`
* `ListRoomParticipant`
* `ListRoomParticipantPublishedTrack` - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
* `ListRoomParticipantSubscribedTrack` - Returns a list of tracks that are subscribed for the participant.
* `ListRoomRecording`
* `UpdateCompositionHook`
* `UpdateRoom`
* `UpdateRoomParticipant`
* `UpdateRoomParticipantAnonymize`
* `UpdateRoomParticipantSubscribeRule` - Update the Subscribe Rules for the Participant
* `UpdateRoomRecordingRule` - Update the Recording Rules for the Room
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
