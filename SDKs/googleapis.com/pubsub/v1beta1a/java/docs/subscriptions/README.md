# subscriptions

### Available Operations

* [pubsubSubscriptionsAcknowledge](#pubsubsubscriptionsacknowledge) - Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
* [pubsubSubscriptionsCreate](#pubsubsubscriptionscreate) - Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
* [pubsubSubscriptionsDelete](#pubsubsubscriptionsdelete) - Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
* [pubsubSubscriptionsGet](#pubsubsubscriptionsget) - Gets the configuration details of a subscription.
* [pubsubSubscriptionsList](#pubsubsubscriptionslist) - Lists matching subscriptions.
* [pubsubSubscriptionsModifyAckDeadline](#pubsubsubscriptionsmodifyackdeadline) - Modifies the Ack deadline for a message received from a pull request.
* [pubsubSubscriptionsModifyPushConfig](#pubsubsubscriptionsmodifypushconfig) - Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
* [pubsubSubscriptionsPull](#pubsubsubscriptionspull) - Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
* [pubsubSubscriptionsPullBatch](#pubsubsubscriptionspullbatch) - Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

## pubsubSubscriptionsAcknowledge

Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                acknowledgeRequest = new AcknowledgeRequest() {{
                    ackId = new String[]{{
                        add("molestiae"),
                        add("minus"),
                    }};
                    subscription = "placeat";
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
            }};            

            PubsubSubscriptionsAcknowledgeResponse res = sdk.subscriptions.pubsubSubscriptionsAcknowledge(req, new PubsubSubscriptionsAcknowledgeSecurity() {{
                option1 = new PubsubSubscriptionsAcknowledgeSecurityOption1("deserunt", "perferendis") {{
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

## pubsubSubscriptionsCreate

Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubSubscriptionsCreateRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsCreateResponse;
import org.openapis.openapi.models.operations.PubsubSubscriptionsCreateSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PushConfig;
import org.openapis.openapi.models.shared.Subscription;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsCreateRequest req = new PubsubSubscriptionsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                subscription = new Subscription() {{
                    ackDeadlineSeconds = 832620;
                    name = "Cedric Connelly";
                    pushConfig = new PushConfig() {{
                        pushEndpoint = "maiores";
                    }};;
                    topic = "molestiae";
                }};;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                key = "porro";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "nam";
                uploadProtocol = "officia";
            }};            

            PubsubSubscriptionsCreateResponse res = sdk.subscriptions.pubsubSubscriptionsCreate(req, new PubsubSubscriptionsCreateSecurity() {{
                option1 = new PubsubSubscriptionsCreateSecurityOption1("occaecati", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pubsubSubscriptionsDelete

Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubSubscriptionsDeleteRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsDeleteResponse;
import org.openapis.openapi.models.operations.PubsubSubscriptionsDeleteSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsDeleteRequest req = new PubsubSubscriptionsDeleteRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            PubsubSubscriptionsDeleteResponse res = sdk.subscriptions.pubsubSubscriptionsDelete(req, new PubsubSubscriptionsDeleteSecurity() {{
                option1 = new PubsubSubscriptionsDeleteSecurityOption1("esse", "ipsum") {{
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

## pubsubSubscriptionsGet

Gets the configuration details of a subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubSubscriptionsGetRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsGetResponse;
import org.openapis.openapi.models.operations.PubsubSubscriptionsGetSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsGetSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsGetRequest req = new PubsubSubscriptionsGetRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                key = "iste";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            PubsubSubscriptionsGetResponse res = sdk.subscriptions.pubsubSubscriptionsGet(req, new PubsubSubscriptionsGetSecurity() {{
                option1 = new PubsubSubscriptionsGetSecurityOption1("saepe", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pubsubSubscriptionsList

Lists matching subscriptions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubSubscriptionsListRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsListResponse;
import org.openapis.openapi.models.operations.PubsubSubscriptionsListSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsListSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsListRequest req = new PubsubSubscriptionsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "saepe";
                key = "quidem";
                maxResults = 99280L;
                oauthToken = "ipsa";
                pageToken = "reiciendis";
                prettyPrint = false;
                query = "est";
                quotaUser = "mollitia";
                uploadType = "laborum";
                uploadProtocol = "dolores";
            }};            

            PubsubSubscriptionsListResponse res = sdk.subscriptions.pubsubSubscriptionsList(req, new PubsubSubscriptionsListSecurity() {{
                option1 = new PubsubSubscriptionsListSecurityOption1("dolorem", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pubsubSubscriptionsModifyAckDeadline

Modifies the Ack deadline for a message received from a pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubSubscriptionsModifyAckDeadlineRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsModifyAckDeadlineResponse;
import org.openapis.openapi.models.operations.PubsubSubscriptionsModifyAckDeadlineSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsModifyAckDeadlineSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsModifyAckDeadlineSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ModifyAckDeadlineRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsModifyAckDeadlineRequest req = new PubsubSubscriptionsModifyAckDeadlineRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                modifyAckDeadlineRequest = new ModifyAckDeadlineRequest() {{
                    ackDeadlineSeconds = 750686;
                    ackId = "enim";
                    ackIds = new String[]{{
                        add("nemo"),
                        add("minima"),
                        add("excepturi"),
                    }};
                    subscription = "accusantium";
                }};;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "sapiente";
                key = "architecto";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "culpa";
                uploadProtocol = "consequuntur";
            }};            

            PubsubSubscriptionsModifyAckDeadlineResponse res = sdk.subscriptions.pubsubSubscriptionsModifyAckDeadline(req, new PubsubSubscriptionsModifyAckDeadlineSecurity() {{
                option1 = new PubsubSubscriptionsModifyAckDeadlineSecurityOption1("repellat", "mollitia") {{
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

## pubsubSubscriptionsModifyPushConfig

Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubSubscriptionsModifyPushConfigRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsModifyPushConfigResponse;
import org.openapis.openapi.models.operations.PubsubSubscriptionsModifyPushConfigSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsModifyPushConfigSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsModifyPushConfigSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ModifyPushConfigRequest;
import org.openapis.openapi.models.shared.PushConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsModifyPushConfigRequest req = new PubsubSubscriptionsModifyPushConfigRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                modifyPushConfigRequest = new ModifyPushConfigRequest() {{
                    pushConfig = new PushConfig() {{
                        pushEndpoint = "numquam";
                    }};;
                    subscription = "commodi";
                }};;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "error";
                key = "quia";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "laborum";
                uploadProtocol = "animi";
            }};            

            PubsubSubscriptionsModifyPushConfigResponse res = sdk.subscriptions.pubsubSubscriptionsModifyPushConfig(req, new PubsubSubscriptionsModifyPushConfigSecurity() {{
                option1 = new PubsubSubscriptionsModifyPushConfigSecurityOption1("enim", "odit") {{
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

## pubsubSubscriptionsPull

Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubSubscriptionsPullRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsPullResponse;
import org.openapis.openapi.models.operations.PubsubSubscriptionsPullSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsPullSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsPullSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PullRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsPullRequest req = new PubsubSubscriptionsPullRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                pullRequest = new PullRequest() {{
                    returnImmediately = false;
                    subscription = "sequi";
                }};;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "possimus";
                key = "aut";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "temporibus";
                uploadProtocol = "laborum";
            }};            

            PubsubSubscriptionsPullResponse res = sdk.subscriptions.pubsubSubscriptionsPull(req, new PubsubSubscriptionsPullSecurity() {{
                option1 = new PubsubSubscriptionsPullSecurityOption1("quasi", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.pullResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pubsubSubscriptionsPullBatch

Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubSubscriptionsPullBatchRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsPullBatchResponse;
import org.openapis.openapi.models.operations.PubsubSubscriptionsPullBatchSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsPullBatchSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsPullBatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PullBatchRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsPullBatchRequest req = new PubsubSubscriptionsPullBatchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                pullBatchRequest = new PullBatchRequest() {{
                    maxEvents = 878194;
                    returnImmediately = false;
                    subscription = "nihil";
                }};;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "omnis";
                key = "voluptate";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "doloremque";
                uploadProtocol = "reprehenderit";
            }};            

            PubsubSubscriptionsPullBatchResponse res = sdk.subscriptions.pubsubSubscriptionsPullBatch(req, new PubsubSubscriptionsPullBatchSecurity() {{
                option1 = new PubsubSubscriptionsPullBatchSecurityOption1("ut", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.pullBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
