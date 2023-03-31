# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/mercure.local/0.3.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.GetWellKnownMercureRequest(
    last_event_id="corrupti",
    last_event_id_query_parameter="provident",
    topic=[
        "quibusdam",
        "unde",
        "nulla",
    ],
)
    
res = s.get_well_known_mercure(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_well_known_mercure` - Subscribe to updates
* `get_well_known_mercure_subscriptions` - Active subscriptions
* `get_well_known_mercure_subscriptions_topic_` - Active subscriptions for the given topic
* `get_well_known_mercure_subscriptions_topic_subscriber_` - Active subscription for the given topic and subscriber
* `post_well_known_mercure` - Publish an update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
