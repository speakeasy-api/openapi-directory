# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nexmo.com/application/1.0.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateApplicationRequestBody(
    answer_method="GET",
    answer_url="https://example.com/webhooks/answer",
    api_key="ap1k3y",
    api_secret="230e6cf0709417176df1b4fc1e083adc",
    event_method="POST",
    event_url="https://example.com/webhooks/event",
    inbound_method="POST",
    inbound_url="https://example.com/webhooks/inbound",
    name="My Application",
    status_method="POST",
    status_url="https://example.com/webhooks/status",
    type="voice",
)
    
res = s.create_application(req)

if res.application_created is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_application` - Create Application
* `delete_application` - Destroy Application
* `retrieve_application` - Retrieve Application
* `retrieve_applications` - Retrieve all Applications
* `update_application` - Update Application
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
