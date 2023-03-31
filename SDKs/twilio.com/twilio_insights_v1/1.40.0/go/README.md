# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_insights_v1/1.40.0/go
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

    req := operations.FetchAccountSettingsRequest{
        SubaccountSid: "corrupti",
    }

    ctx := context.Background()
    res, err := s.FetchAccountSettings(ctx, req, operations.FetchAccountSettingsSecurity{
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

### SDK SDK

* `FetchAccountSettings`
* `FetchAnnotation` - Fetch a specific Annotation.
* `FetchCall`
* `FetchConference` - Fetch a specific Conference.
* `FetchConferenceParticipant` - Fetch a specific Conference Participant Summary.
* `FetchSummary`
* `FetchVideoParticipantSummary` - Get Video Log Analyzer data for a Room Participant.
* `FetchVideoRoomSummary` - Get Video Log Analyzer data for a Room.
* `ListCallSummaries`
* `ListConference` - Retrieve a list of Conferences.
* `ListConferenceParticipant` - List Conference Participants.
* `ListEvent`
* `ListMetric`
* `ListVideoParticipantSummary` - Get a list of room participants.
* `ListVideoRoomSummary` - Get a list of Programmable Video Rooms.
* `UpdateAccountSettings`
* `UpdateAnnotation` - Create/Update the annotation for the call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
