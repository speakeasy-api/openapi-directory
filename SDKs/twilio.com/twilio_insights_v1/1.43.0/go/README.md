# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_insights_v1/1.43.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FetchAccountSettings(ctx, operations.FetchAccountSettingsRequest{
        SubaccountSid: sdk.String("corrupti"),
    }, operations.FetchAccountSettingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1AccountSettings != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [FetchAccountSettings](docs/sdk/README.md#fetchaccountsettings)
* [FetchAnnotation](docs/sdk/README.md#fetchannotation) - Fetch a specific Annotation.
* [FetchCall](docs/sdk/README.md#fetchcall)
* [FetchConference](docs/sdk/README.md#fetchconference) - Fetch a specific Conference.
* [FetchConferenceParticipant](docs/sdk/README.md#fetchconferenceparticipant) - Fetch a specific Conference Participant Summary.
* [FetchSummary](docs/sdk/README.md#fetchsummary)
* [FetchVideoParticipantSummary](docs/sdk/README.md#fetchvideoparticipantsummary) - Get Video Log Analyzer data for a Room Participant.
* [FetchVideoRoomSummary](docs/sdk/README.md#fetchvideoroomsummary) - Get Video Log Analyzer data for a Room.
* [ListCallSummaries](docs/sdk/README.md#listcallsummaries)
* [ListConference](docs/sdk/README.md#listconference) - Retrieve a list of Conferences.
* [ListConferenceParticipant](docs/sdk/README.md#listconferenceparticipant) - List Conference Participants.
* [ListEvent](docs/sdk/README.md#listevent)
* [ListMetric](docs/sdk/README.md#listmetric)
* [ListVideoParticipantSummary](docs/sdk/README.md#listvideoparticipantsummary) - Get a list of room participants.
* [ListVideoRoomSummary](docs/sdk/README.md#listvideoroomsummary) - Get a list of Programmable Video Rooms.
* [UpdateAccountSettings](docs/sdk/README.md#updateaccountsettings)
* [UpdateAnnotation](docs/sdk/README.md#updateannotation) - Create/Update the annotation for the call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
