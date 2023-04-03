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


### call

* `postV01BulkCall` - /v0.1/BulkCall/
* `postV01Call` - /v0.1/Call/
* `postV01CancelScheduledHangup` - /v0.1/CancelScheduledHangup/
* `postV01CancelScheduledPlay` - /v0.1/CancelScheduledPlay/
* `postV01GroupCall` - /v0.1/GroupCall/
* `postV01HangupAllCalls` - /v0.1/HangupAllCalls/
* `postV01HangupCall` - /v0.1/HangupCall/
* `postV01Play` - /v0.1/Play/
* `postV01PlayStop` - /v0.1/PlayStop/
* `postV01RecordStart` - /v0.1/RecordStart/
* `postV01RecordStop` - /v0.1/RecordStop/
* `postV01ScheduleHangup` - /v0.1/ScheduleHangup/
* `postV01SchedulePlay` - /v0.1/SchedulePlay/
* `postV01SendDigits` - /v0.1/SendDigits/
* `postV01SoundTouch` - /v0.1/SoundTouch/
* `postV01SoundTouchStop` - /v0.1/SoundTouchStop/
* `postV01TransferCall` - /v0.1/TransferCall/

### conference

* `postV01ConferenceDeaf` - /v0.1/ConferenceDeaf/
* `postV01ConferenceHangup` - /v0.1/ConferenceHangup/
* `postV01ConferenceKick` - /v0.1/ConferenceKick/
* `postV01ConferenceList` - /v0.1/ConferenceList/
* `postV01ConferenceListMembers` - /v0.1/ConferenceListMembers/
* `postV01ConferenceMute` - /v0.1/ConferenceMute/
* `postV01ConferencePlay` - /v0.1/ConferencePlay/
* `postV01ConferenceRecordStart` - /v0.1/ConferenceRecordStart/
* `postV01ConferenceRecordStop` - /v0.1/ConferenceRecordStop/
* `postV01ConferenceSpeak` - /v0.1/ConferenceSpeak/
* `postV01ConferenceUndeaf` - /v0.1/ConferenceUndeaf/
* `postV01ConferenceUnmute` - /v0.1/ConferenceUnmute/
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
