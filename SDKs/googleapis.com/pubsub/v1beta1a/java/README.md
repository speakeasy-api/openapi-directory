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
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeResponse;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeSecurityOption2;
import org.openapis.openapi.models.shared.AcknowledgeRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsAcknowledgeRequest req = new PubsubSubscriptionsAcknowledgeRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                acknowledgeRequest = new AcknowledgeRequest() {{
                    ackId = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    subscription = "nulla";
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            PubsubSubscriptionsAcknowledgeResponse res = sdk.subscriptions.pubsubSubscriptionsAcknowledge(req, new PubsubSubscriptionsAcknowledgeSecurity() {{
                option1 = new PubsubSubscriptionsAcknowledgeSecurityOption1("ipsa", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
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


### [subscriptions](docs/subscriptions/README.md)

* [pubsubSubscriptionsAcknowledge](docs/subscriptions/README.md#pubsubsubscriptionsacknowledge) - Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
* [pubsubSubscriptionsCreate](docs/subscriptions/README.md#pubsubsubscriptionscreate) - Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
* [pubsubSubscriptionsDelete](docs/subscriptions/README.md#pubsubsubscriptionsdelete) - Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
* [pubsubSubscriptionsGet](docs/subscriptions/README.md#pubsubsubscriptionsget) - Gets the configuration details of a subscription.
* [pubsubSubscriptionsList](docs/subscriptions/README.md#pubsubsubscriptionslist) - Lists matching subscriptions.
* [pubsubSubscriptionsModifyAckDeadline](docs/subscriptions/README.md#pubsubsubscriptionsmodifyackdeadline) - Modifies the Ack deadline for a message received from a pull request.
* [pubsubSubscriptionsModifyPushConfig](docs/subscriptions/README.md#pubsubsubscriptionsmodifypushconfig) - Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
* [pubsubSubscriptionsPull](docs/subscriptions/README.md#pubsubsubscriptionspull) - Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
* [pubsubSubscriptionsPullBatch](docs/subscriptions/README.md#pubsubsubscriptionspullbatch) - Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

### [topics](docs/topics/README.md)

* [pubsubTopicsCreate](docs/topics/README.md#pubsubtopicscreate) - Creates the given topic with the given name.
* [pubsubTopicsDelete](docs/topics/README.md#pubsubtopicsdelete) - Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
* [pubsubTopicsGet](docs/topics/README.md#pubsubtopicsget) - Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
* [pubsubTopicsList](docs/topics/README.md#pubsubtopicslist) - Lists matching topics.
* [pubsubTopicsPublish](docs/topics/README.md#pubsubtopicspublish) - Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
* [pubsubTopicsPublishBatch](docs/topics/README.md#pubsubtopicspublishbatch) - Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
