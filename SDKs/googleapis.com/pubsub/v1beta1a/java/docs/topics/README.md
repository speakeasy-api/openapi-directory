# topics

### Available Operations

* [pubsubTopicsCreate](#pubsubtopicscreate) - Creates the given topic with the given name.
* [pubsubTopicsDelete](#pubsubtopicsdelete) - Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
* [pubsubTopicsGet](#pubsubtopicsget) - Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
* [pubsubTopicsList](#pubsubtopicslist) - Lists matching topics.
* [pubsubTopicsPublish](#pubsubtopicspublish) - Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
* [pubsubTopicsPublishBatch](#pubsubtopicspublishbatch) - Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.

## pubsubTopicsCreate

Creates the given topic with the given name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubTopicsCreateRequest;
import org.openapis.openapi.models.operations.PubsubTopicsCreateResponse;
import org.openapis.openapi.models.operations.PubsubTopicsCreateSecurity;
import org.openapis.openapi.models.operations.PubsubTopicsCreateSecurityOption1;
import org.openapis.openapi.models.operations.PubsubTopicsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Topic;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubTopicsCreateRequest req = new PubsubTopicsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                topic = new Topic() {{
                    name = "Miss Valerie Kshlerin";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "quae";
                key = "ipsum";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "excepturi";
                uploadProtocol = "pariatur";
            }};            

            PubsubTopicsCreateResponse res = sdk.topics.pubsubTopicsCreate(req, new PubsubTopicsCreateSecurity() {{
                option1 = new PubsubTopicsCreateSecurityOption1("modi", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.topic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pubsubTopicsDelete

Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubTopicsDeleteRequest;
import org.openapis.openapi.models.operations.PubsubTopicsDeleteResponse;
import org.openapis.openapi.models.operations.PubsubTopicsDeleteSecurity;
import org.openapis.openapi.models.operations.PubsubTopicsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.PubsubTopicsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubTopicsDeleteRequest req = new PubsubTopicsDeleteRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "veritatis";
                key = "itaque";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "consequatur";
                uploadProtocol = "est";
            }};            

            PubsubTopicsDeleteResponse res = sdk.topics.pubsubTopicsDelete(req, new PubsubTopicsDeleteSecurity() {{
                option1 = new PubsubTopicsDeleteSecurityOption1("quibusdam", "explicabo") {{
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

## pubsubTopicsGet

Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubTopicsGetRequest;
import org.openapis.openapi.models.operations.PubsubTopicsGetResponse;
import org.openapis.openapi.models.operations.PubsubTopicsGetSecurity;
import org.openapis.openapi.models.operations.PubsubTopicsGetSecurityOption1;
import org.openapis.openapi.models.operations.PubsubTopicsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubTopicsGetRequest req = new PubsubTopicsGetRequest("deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "qui";
                key = "aliquid";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            PubsubTopicsGetResponse res = sdk.topics.pubsubTopicsGet(req, new PubsubTopicsGetSecurity() {{
                option1 = new PubsubTopicsGetSecurityOption1("assumenda", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.topic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pubsubTopicsList

Lists matching topics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubTopicsListRequest;
import org.openapis.openapi.models.operations.PubsubTopicsListResponse;
import org.openapis.openapi.models.operations.PubsubTopicsListSecurity;
import org.openapis.openapi.models.operations.PubsubTopicsListSecurityOption1;
import org.openapis.openapi.models.operations.PubsubTopicsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubTopicsListRequest req = new PubsubTopicsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "tempora";
                key = "facilis";
                maxResults = 735194L;
                oauthToken = "labore";
                pageToken = "delectus";
                prettyPrint = false;
                query = "eum";
                quotaUser = "non";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }};            

            PubsubTopicsListResponse res = sdk.topics.pubsubTopicsList(req, new PubsubTopicsListSecurity() {{
                option1 = new PubsubTopicsListSecurityOption1("aliquid", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTopicsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pubsubTopicsPublish

Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubTopicsPublishRequest;
import org.openapis.openapi.models.operations.PubsubTopicsPublishResponse;
import org.openapis.openapi.models.operations.PubsubTopicsPublishSecurity;
import org.openapis.openapi.models.operations.PubsubTopicsPublishSecurityOption1;
import org.openapis.openapi.models.operations.PubsubTopicsPublishSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.PublishRequest;
import org.openapis.openapi.models.shared.PubsubMessage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubTopicsPublishRequest req = new PubsubTopicsPublishRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                publishRequest = new PublishRequest() {{
                    message = new PubsubMessage() {{
                        data = "sint";
                        label = new org.openapis.openapi.models.shared.Label[]{{
                            add(new Label() {{
                                key = "dolor";
                                numValue = "debitis";
                                strValue = "a";
                            }}),
                            add(new Label() {{
                                key = "dolorum";
                                numValue = "in";
                                strValue = "in";
                            }}),
                            add(new Label() {{
                                key = "illum";
                                numValue = "maiores";
                                strValue = "rerum";
                            }}),
                        }};
                        messageId = "dicta";
                        publishTime = "magnam";
                    }};;
                    topic = "cumque";
                }};;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "laborum";
                key = "accusamus";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "enim";
                uploadProtocol = "accusamus";
            }};            

            PubsubTopicsPublishResponse res = sdk.topics.pubsubTopicsPublish(req, new PubsubTopicsPublishSecurity() {{
                option1 = new PubsubTopicsPublishSecurityOption1("delectus", "quidem") {{
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

## pubsubTopicsPublishBatch

Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubTopicsPublishBatchRequest;
import org.openapis.openapi.models.operations.PubsubTopicsPublishBatchResponse;
import org.openapis.openapi.models.operations.PubsubTopicsPublishBatchSecurity;
import org.openapis.openapi.models.operations.PubsubTopicsPublishBatchSecurityOption1;
import org.openapis.openapi.models.operations.PubsubTopicsPublishBatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.PublishBatchRequest;
import org.openapis.openapi.models.shared.PubsubMessage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubTopicsPublishBatchRequest req = new PubsubTopicsPublishBatchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                publishBatchRequest = new PublishBatchRequest() {{
                    messages = new org.openapis.openapi.models.shared.PubsubMessage[]{{
                        add(new PubsubMessage() {{
                            data = "id";
                            label = new org.openapis.openapi.models.shared.Label[]{{
                                add(new Label() {{
                                    key = "deleniti";
                                    numValue = "sapiente";
                                    strValue = "amet";
                                }}),
                                add(new Label() {{
                                    key = "deserunt";
                                    numValue = "nisi";
                                    strValue = "vel";
                                }}),
                                add(new Label() {{
                                    key = "natus";
                                    numValue = "omnis";
                                    strValue = "molestiae";
                                }}),
                            }};
                            messageId = "perferendis";
                            publishTime = "nihil";
                        }}),
                        add(new PubsubMessage() {{
                            data = "magnam";
                            label = new org.openapis.openapi.models.shared.Label[]{{
                                add(new Label() {{
                                    key = "id";
                                    numValue = "labore";
                                    strValue = "labore";
                                }}),
                                add(new Label() {{
                                    key = "suscipit";
                                    numValue = "natus";
                                    strValue = "nobis";
                                }}),
                                add(new Label() {{
                                    key = "eum";
                                    numValue = "vero";
                                    strValue = "aspernatur";
                                }}),
                            }};
                            messageId = "architecto";
                            publishTime = "magnam";
                        }}),
                        add(new PubsubMessage() {{
                            data = "et";
                            label = new org.openapis.openapi.models.shared.Label[]{{
                                add(new Label() {{
                                    key = "ullam";
                                    numValue = "provident";
                                    strValue = "quos";
                                }}),
                                add(new Label() {{
                                    key = "sint";
                                    numValue = "accusantium";
                                    strValue = "mollitia";
                                }}),
                                add(new Label() {{
                                    key = "reiciendis";
                                    numValue = "mollitia";
                                    strValue = "ad";
                                }}),
                            }};
                            messageId = "eum";
                            publishTime = "dolor";
                        }}),
                    }};
                    topic = "necessitatibus";
                }};;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "iure";
                key = "doloribus";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "maxime";
                uploadProtocol = "deleniti";
            }};            

            PubsubTopicsPublishBatchResponse res = sdk.topics.pubsubTopicsPublishBatch(req, new PubsubTopicsPublishBatchSecurity() {{
                option1 = new PubsubTopicsPublishBatchSecurityOption1("facilis", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.publishBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
