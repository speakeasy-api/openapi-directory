# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            PubsubSubscriptionsAcknowledgeRequest req = new PubsubSubscriptionsAcknowledgeRequest() {{
                security = new PubsubSubscriptionsAcknowledgeSecurity() {{
                    option1 = new PubsubSubscriptionsAcknowledgeSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new PubsubSubscriptionsAcknowledgeQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new AcknowledgeRequest() {{
                    ackId = new String[]() {{
                        add("dicta"),
                        add("debitis"),
                        add("voluptatum"),
                    }};
                    subscription = "et";
                }};
            }};

            PubsubSubscriptionsAcknowledgeResponse res = sdk.subscriptions.pubsubSubscriptionsAcknowledge(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### subscriptions

* `pubsubSubscriptionsAcknowledge` - Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
* `pubsubSubscriptionsCreate` - Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
* `pubsubSubscriptionsDelete` - Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
* `pubsubSubscriptionsGet` - Gets the configuration details of a subscription.
* `pubsubSubscriptionsList` - Lists matching subscriptions.
* `pubsubSubscriptionsModifyAckDeadline` - Modifies the Ack deadline for a message received from a pull request.
* `pubsubSubscriptionsModifyPushConfig` - Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
* `pubsubSubscriptionsPull` - Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
* `pubsubSubscriptionsPullBatch` - Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

### topics

* `pubsubTopicsCreate` - Creates the given topic with the given name.
* `pubsubTopicsDelete` - Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
* `pubsubTopicsGet` - Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
* `pubsubTopicsList` - Lists matching topics.
* `pubsubTopicsPublish` - Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
* `pubsubTopicsPublishBatch` - Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
