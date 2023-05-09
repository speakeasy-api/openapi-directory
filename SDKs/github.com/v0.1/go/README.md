# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/github.com/v0.1/go
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
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Call.PostV01BulkCall(ctx, shared.BulkCallParameters{
        AnswerURL: "https://example.com/answer/",
        CallerName: sdk.String("Bulk Test"),
        ConfirmKey: sdk.String("1"),
        ConfirmSound: sdk.String("https://example.com/confirm_sound/"),
        CoreUUID: sdk.String("2e8e6275-7cfe-4e3c-a8d6-25316b4519c7"),
        Delimiter: "<",
        ExtraDialString: sdk.String("bridge_early_media=true,hangup_after_bridge=true"),
        From: "15551234567",
        GatewayCodecs: sdk.String("'PCMA,PCMU','G729,PCMU','PCMA,G729'"),
        GatewayRetries: sdk.String("3,1,2"),
        GatewayTimeouts: sdk.String("10,30,20"),
        Gateways: "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/",
        HangupOnRing: sdk.Int64(90),
        HangupURL: sdk.String("https://example.com/hangup/"),
        RejectCauses: sdk.String("USER_BUSY,NO_ANSWER"),
        RingURL: sdk.String("https://example.com/ring/"),
        SendDigits: sdk.String("1w2w3W#*@1500"),
        SendOnPreanswer: sdk.Bool(false),
        TimeLimit: sdk.Int64(90),
        To: "15557654321",
    }, operations.PostV01BulkCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCallResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Call](docs/call/README.md)

* [PostV01BulkCall](docs/call/README.md#postv01bulkcall) - /v0.1/BulkCall/
* [PostV01Call](docs/call/README.md#postv01call) - /v0.1/Call/
* [PostV01CancelScheduledHangup](docs/call/README.md#postv01cancelscheduledhangup) - /v0.1/CancelScheduledHangup/
* [PostV01CancelScheduledPlay](docs/call/README.md#postv01cancelscheduledplay) - /v0.1/CancelScheduledPlay/
* [PostV01GroupCall](docs/call/README.md#postv01groupcall) - /v0.1/GroupCall/
* [PostV01HangupAllCalls](docs/call/README.md#postv01hangupallcalls) - /v0.1/HangupAllCalls/
* [PostV01HangupCall](docs/call/README.md#postv01hangupcall) - /v0.1/HangupCall/
* [PostV01Play](docs/call/README.md#postv01play) - /v0.1/Play/
* [PostV01PlayStop](docs/call/README.md#postv01playstop) - /v0.1/PlayStop/
* [PostV01RecordStart](docs/call/README.md#postv01recordstart) - /v0.1/RecordStart/
* [PostV01RecordStop](docs/call/README.md#postv01recordstop) - /v0.1/RecordStop/
* [PostV01ScheduleHangup](docs/call/README.md#postv01schedulehangup) - /v0.1/ScheduleHangup/
* [PostV01SchedulePlay](docs/call/README.md#postv01scheduleplay) - /v0.1/SchedulePlay/
* [PostV01SendDigits](docs/call/README.md#postv01senddigits) - /v0.1/SendDigits/
* [PostV01SoundTouch](docs/call/README.md#postv01soundtouch) - /v0.1/SoundTouch/
* [PostV01SoundTouchStop](docs/call/README.md#postv01soundtouchstop) - /v0.1/SoundTouchStop/
* [PostV01TransferCall](docs/call/README.md#postv01transfercall) - /v0.1/TransferCall/

### [Conference](docs/conference/README.md)

* [PostV01ConferenceDeaf](docs/conference/README.md#postv01conferencedeaf) - /v0.1/ConferenceDeaf/
* [PostV01ConferenceHangup](docs/conference/README.md#postv01conferencehangup) - /v0.1/ConferenceHangup/
* [PostV01ConferenceKick](docs/conference/README.md#postv01conferencekick) - /v0.1/ConferenceKick/
* [PostV01ConferenceList](docs/conference/README.md#postv01conferencelist) - /v0.1/ConferenceList/
* [PostV01ConferenceListMembers](docs/conference/README.md#postv01conferencelistmembers) - /v0.1/ConferenceListMembers/
* [PostV01ConferenceMute](docs/conference/README.md#postv01conferencemute) - /v0.1/ConferenceMute/
* [PostV01ConferencePlay](docs/conference/README.md#postv01conferenceplay) - /v0.1/ConferencePlay/
* [PostV01ConferenceRecordStart](docs/conference/README.md#postv01conferencerecordstart) - /v0.1/ConferenceRecordStart/
* [PostV01ConferenceRecordStop](docs/conference/README.md#postv01conferencerecordstop) - /v0.1/ConferenceRecordStop/
* [PostV01ConferenceSpeak](docs/conference/README.md#postv01conferencespeak) - /v0.1/ConferenceSpeak/
* [PostV01ConferenceUndeaf](docs/conference/README.md#postv01conferenceundeaf) - /v0.1/ConferenceUndeaf/
* [PostV01ConferenceUnmute](docs/conference/README.md#postv01conferenceunmute) - /v0.1/ConferenceUnmute/
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
