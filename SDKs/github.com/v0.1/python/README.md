# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/github.com/v0.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.BulkCallParameters(
    answer_url="https://example.com/answer/",
    caller_name="Bulk Test",
    confirm_key="1",
    confirm_sound="https://example.com/confirm_sound/",
    core_uuid="2e8e6275-7cfe-4e3c-a8d6-25316b4519c7",
    delimiter="<",
    extra_dial_string="bridge_early_media=true,hangup_after_bridge=true",
    from_="15551234567",
    gateway_codecs="'PCMA,PCMU','G729,PCMU','PCMA,G729'",
    gateway_retries="3,1,2",
    gateway_timeouts="10,30,20",
    gateways="user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/",
    hangup_on_ring=90,
    hangup_url="https://example.com/hangup/",
    reject_causes="USER_BUSY,NO_ANSWER",
    ring_url="https://example.com/ring/",
    send_digits="1w2w3W#*@1500",
    send_on_preanswer=False,
    time_limit=90,
    to="15557654321",
)
    
res = s.call.post_v0_1_bulk_call_(req, operations.PostV01BulkCallSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.bulk_call_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### call

* `post_v0_1_bulk_call_` - /v0.1/BulkCall/
* `post_v0_1_call_` - /v0.1/Call/
* `post_v0_1_cancel_scheduled_hangup_` - /v0.1/CancelScheduledHangup/
* `post_v0_1_cancel_scheduled_play_` - /v0.1/CancelScheduledPlay/
* `post_v0_1_group_call_` - /v0.1/GroupCall/
* `post_v0_1_hangup_all_calls_` - /v0.1/HangupAllCalls/
* `post_v0_1_hangup_call_` - /v0.1/HangupCall/
* `post_v0_1_play_` - /v0.1/Play/
* `post_v0_1_play_stop_` - /v0.1/PlayStop/
* `post_v0_1_record_start_` - /v0.1/RecordStart/
* `post_v0_1_record_stop_` - /v0.1/RecordStop/
* `post_v0_1_schedule_hangup_` - /v0.1/ScheduleHangup/
* `post_v0_1_schedule_play_` - /v0.1/SchedulePlay/
* `post_v0_1_send_digits_` - /v0.1/SendDigits/
* `post_v0_1_sound_touch_` - /v0.1/SoundTouch/
* `post_v0_1_sound_touch_stop_` - /v0.1/SoundTouchStop/
* `post_v0_1_transfer_call_` - /v0.1/TransferCall/

### conference

* `post_v0_1_conference_deaf_` - /v0.1/ConferenceDeaf/
* `post_v0_1_conference_hangup_` - /v0.1/ConferenceHangup/
* `post_v0_1_conference_kick_` - /v0.1/ConferenceKick/
* `post_v0_1_conference_list_` - /v0.1/ConferenceList/
* `post_v0_1_conference_list_members_` - /v0.1/ConferenceListMembers/
* `post_v0_1_conference_mute_` - /v0.1/ConferenceMute/
* `post_v0_1_conference_play_` - /v0.1/ConferencePlay/
* `post_v0_1_conference_record_start_` - /v0.1/ConferenceRecordStart/
* `post_v0_1_conference_record_stop_` - /v0.1/ConferenceRecordStop/
* `post_v0_1_conference_speak_` - /v0.1/ConferenceSpeak/
* `post_v0_1_conference_undeaf_` - /v0.1/ConferenceUndeaf/
* `post_v0_1_conference_unmute_` - /v0.1/ConferenceUnmute/
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
