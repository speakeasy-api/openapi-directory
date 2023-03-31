# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_insights_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FetchAccountSettingsRequest(
    subaccount_sid="corrupti",
)
    
res = s.fetch_account_settings(req, operations.FetchAccountSettingsSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.insights_v1_account_settings is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `fetch_account_settings`
* `fetch_annotation` - Fetch a specific Annotation.
* `fetch_call`
* `fetch_conference` - Fetch a specific Conference.
* `fetch_conference_participant` - Fetch a specific Conference Participant Summary.
* `fetch_summary`
* `fetch_video_participant_summary` - Get Video Log Analyzer data for a Room Participant.
* `fetch_video_room_summary` - Get Video Log Analyzer data for a Room.
* `list_call_summaries`
* `list_conference` - Retrieve a list of Conferences.
* `list_conference_participant` - List Conference Participants.
* `list_event`
* `list_metric`
* `list_video_participant_summary` - Get a list of room participants.
* `list_video_room_summary` - Get a list of Programmable Video Rooms.
* `update_account_settings`
* `update_annotation` - Create/Update the annotation for the call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
