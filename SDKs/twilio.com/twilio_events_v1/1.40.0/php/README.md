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

### SDK SDK

* `createSink` - Create a new Sink
* `createSinkTest` - Create a new Sink Test Event for the given Sink.
* `createSinkValidate` - Validate that a test event for a Sink was received.
* `createSubscribedEvent` - Create a new Subscribed Event type for the subscription
* `createSubscription` - Create a new Subscription.
* `deleteSink` - Delete a specific Sink.
* `deleteSubscribedEvent` - Remove an event type from a subscription.
* `deleteSubscription` - Delete a specific Subscription.
* `fetchEventType` - Fetch a specific Event Type.
* `fetchSchema` - Fetch a specific schema with its nested versions.
* `fetchSchemaVersion` - Fetch a specific schema and version.
* `fetchSink` - Fetch a specific Sink.
* `fetchSubscribedEvent` - Read an Event for a Subscription.
* `fetchSubscription` - Fetch a specific Subscription.
* `listEventType` - Retrieve a paginated list of all the available Event Types.
* `listSchemaVersion` - Retrieve a paginated list of versions of the schema.
* `listSink` - Retrieve a paginated list of Sinks belonging to the account used to make the request.
* `listSubscribedEvent` - Retrieve a list of all Subscribed Event types for a Subscription.
* `listSubscription` - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
* `updateSink` - Update a specific Sink
* `updateSubscribedEvent` - Update an Event for a Subscription.
* `updateSubscription` - Update a Subscription.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
