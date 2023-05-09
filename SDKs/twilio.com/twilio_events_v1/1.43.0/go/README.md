# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_events_v1/1.43.0/go
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
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateSink(ctx, operations.CreateSinkCreateSinkRequest{
        Description: "corrupti",
        SinkConfiguration: "provident",
        SinkType: shared.SinkEnumSinkTypeEnumSegment,
    }, operations.CreateSinkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Sink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateSink](docs/sdk/README.md#createsink) - Create a new Sink
* [CreateSinkTest](docs/sdk/README.md#createsinktest) - Create a new Sink Test Event for the given Sink.
* [CreateSinkValidate](docs/sdk/README.md#createsinkvalidate) - Validate that a test event for a Sink was received.
* [CreateSubscribedEvent](docs/sdk/README.md#createsubscribedevent) - Create a new Subscribed Event type for the subscription
* [CreateSubscription](docs/sdk/README.md#createsubscription) - Create a new Subscription.
* [DeleteSink](docs/sdk/README.md#deletesink) - Delete a specific Sink.
* [DeleteSubscribedEvent](docs/sdk/README.md#deletesubscribedevent) - Remove an event type from a subscription.
* [DeleteSubscription](docs/sdk/README.md#deletesubscription) - Delete a specific Subscription.
* [FetchEventType](docs/sdk/README.md#fetcheventtype) - Fetch a specific Event Type.
* [FetchSchema](docs/sdk/README.md#fetchschema) - Fetch a specific schema with its nested versions.
* [FetchSchemaVersion](docs/sdk/README.md#fetchschemaversion) - Fetch a specific schema and version.
* [FetchSink](docs/sdk/README.md#fetchsink) - Fetch a specific Sink.
* [FetchSubscribedEvent](docs/sdk/README.md#fetchsubscribedevent) - Read an Event for a Subscription.
* [FetchSubscription](docs/sdk/README.md#fetchsubscription) - Fetch a specific Subscription.
* [ListEventType](docs/sdk/README.md#listeventtype) - Retrieve a paginated list of all the available Event Types.
* [ListSchemaVersion](docs/sdk/README.md#listschemaversion) - Retrieve a paginated list of versions of the schema.
* [ListSink](docs/sdk/README.md#listsink) - Retrieve a paginated list of Sinks belonging to the account used to make the request.
* [ListSubscribedEvent](docs/sdk/README.md#listsubscribedevent) - Retrieve a list of all Subscribed Event types for a Subscription.
* [ListSubscription](docs/sdk/README.md#listsubscription) - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
* [UpdateSink](docs/sdk/README.md#updatesink) - Update a specific Sink
* [UpdateSubscribedEvent](docs/sdk/README.md#updatesubscribedevent) - Update an Event for a Subscription.
* [UpdateSubscription](docs/sdk/README.md#updatesubscription) - Update a Subscription.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
