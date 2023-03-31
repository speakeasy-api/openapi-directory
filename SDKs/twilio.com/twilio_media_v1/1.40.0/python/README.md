# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_media_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateMediaProcessorCreateMediaProcessorRequest(
    extension="corrupti",
    extension_context="provident",
    extension_environment="distinctio",
    max_duration=844266,
    status_callback="https://tidy-mascara.org",
    status_callback_method="POST",
)
    
res = s.create_media_processor(req, operations.CreateMediaProcessorSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.media_v1_media_processor is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_media_processor`
* `create_player_streamer`
* `create_player_streamer_playback_grant`
* `delete_media_recording` - Deletes a MediaRecording resource identified by a SID.
* `fetch_media_processor` - Returns a single MediaProcessor resource identified by a SID.
* `fetch_media_recording` - Returns a single MediaRecording resource identified by a SID.
* `fetch_player_streamer` - Returns a single PlayerStreamer resource identified by a SID.
* `fetch_player_streamer_playback_grant` - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
* `list_media_processor` - Returns a list of MediaProcessors.
* `list_media_recording` - Returns a list of MediaRecordings.
* `list_player_streamer` - Returns a list of PlayerStreamers.
* `update_media_processor` - Updates a MediaProcessor resource identified by a SID.
* `update_player_streamer` - Updates a PlayerStreamer resource identified by a SID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
