# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_events_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateSinkCreateSinkRequest(
    description="corrupti",
    sink_configuration="provident",
    sink_type="segment",
)
    
res = s.create_sink(req, operations.CreateSinkSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.events_v1_sink is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_sink` - Create a new Sink
* `create_sink_test` - Create a new Sink Test Event for the given Sink.
* `create_sink_validate` - Validate that a test event for a Sink was received.
* `create_subscribed_event` - Create a new Subscribed Event type for the subscription
* `create_subscription` - Create a new Subscription.
* `delete_sink` - Delete a specific Sink.
* `delete_subscribed_event` - Remove an event type from a subscription.
* `delete_subscription` - Delete a specific Subscription.
* `fetch_event_type` - Fetch a specific Event Type.
* `fetch_schema` - Fetch a specific schema with its nested versions.
* `fetch_schema_version` - Fetch a specific schema and version.
* `fetch_sink` - Fetch a specific Sink.
* `fetch_subscribed_event` - Read an Event for a Subscription.
* `fetch_subscription` - Fetch a specific Subscription.
* `list_event_type` - Retrieve a paginated list of all the available Event Types.
* `list_schema_version` - Retrieve a paginated list of versions of the schema.
* `list_sink` - Retrieve a paginated list of Sinks belonging to the account used to make the request.
* `list_subscribed_event` - Retrieve a list of all Subscribed Event types for a Subscription.
* `list_subscription` - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
* `update_sink` - Update a specific Sink
* `update_subscribed_event` - Update an Event for a Subscription.
* `update_subscription` - Update a Subscription.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
