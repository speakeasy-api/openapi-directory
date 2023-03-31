# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/hubapi.com/analytics/v3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.BehavioralEventHTTPCompletionRequest(
    email="Larue_Rau85@yahoo.com",
    event_name="corrupti",
    object_id="illum",
    occurred_at="2022-05-18T09:34:54.894Z",
    properties={
        "suscipit": "iure",
        "magnam": "debitis",
        "ipsa": "delectus",
    },
    utk="tempora",
)
    
res = s.behavioral_events_tracking.post_events_v3_send(req, operations.PostEventsV3SendSecurity(
    hapikey="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### behavioral_events_tracking

* `post_events_v3_send` - Sends Custom Behavioral Event
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
