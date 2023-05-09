# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSinkCreateSinkRequest;
import org.openapis.openapi.models.operations.CreateSinkResponse;
import org.openapis.openapi.models.operations.CreateSinkSecurity;
import org.openapis.openapi.models.shared.SinkEnumSinkTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSinkCreateSinkRequest req = new CreateSinkCreateSinkRequest("corrupti", "provident", SinkEnumSinkTypeEnum.SEGMENT);            

            CreateSinkResponse res = sdk.createSink(req, new CreateSinkSecurity("quibusdam", "unde") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1Sink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createSink](docs/sdk/README.md#createsink) - Create a new Sink
* [createSinkTest](docs/sdk/README.md#createsinktest) - Create a new Sink Test Event for the given Sink.
* [createSinkValidate](docs/sdk/README.md#createsinkvalidate) - Validate that a test event for a Sink was received.
* [createSubscribedEvent](docs/sdk/README.md#createsubscribedevent) - Create a new Subscribed Event type for the subscription
* [createSubscription](docs/sdk/README.md#createsubscription) - Create a new Subscription.
* [deleteSink](docs/sdk/README.md#deletesink) - Delete a specific Sink.
* [deleteSubscribedEvent](docs/sdk/README.md#deletesubscribedevent) - Remove an event type from a subscription.
* [deleteSubscription](docs/sdk/README.md#deletesubscription) - Delete a specific Subscription.
* [fetchEventType](docs/sdk/README.md#fetcheventtype) - Fetch a specific Event Type.
* [fetchSchema](docs/sdk/README.md#fetchschema) - Fetch a specific schema with its nested versions.
* [fetchSchemaVersion](docs/sdk/README.md#fetchschemaversion) - Fetch a specific schema and version.
* [fetchSink](docs/sdk/README.md#fetchsink) - Fetch a specific Sink.
* [fetchSubscribedEvent](docs/sdk/README.md#fetchsubscribedevent) - Read an Event for a Subscription.
* [fetchSubscription](docs/sdk/README.md#fetchsubscription) - Fetch a specific Subscription.
* [listEventType](docs/sdk/README.md#listeventtype) - Retrieve a paginated list of all the available Event Types.
* [listSchemaVersion](docs/sdk/README.md#listschemaversion) - Retrieve a paginated list of versions of the schema.
* [listSink](docs/sdk/README.md#listsink) - Retrieve a paginated list of Sinks belonging to the account used to make the request.
* [listSubscribedEvent](docs/sdk/README.md#listsubscribedevent) - Retrieve a list of all Subscribed Event types for a Subscription.
* [listSubscription](docs/sdk/README.md#listsubscription) - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
* [updateSink](docs/sdk/README.md#updatesink) - Update a specific Sink
* [updateSubscribedEvent](docs/sdk/README.md#updatesubscribedevent) - Update an Event for a Subscription.
* [updateSubscription](docs/sdk/README.md#updatesubscription) - Update a Subscription.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
