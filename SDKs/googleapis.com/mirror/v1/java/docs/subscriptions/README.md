# subscriptions

### Available Operations

* [mirrorSubscriptionsDelete](#mirrorsubscriptionsdelete) - Deletes a subscription.
* [mirrorSubscriptionsInsert](#mirrorsubscriptionsinsert) - Creates a new subscription.
* [mirrorSubscriptionsList](#mirrorsubscriptionslist) - Retrieves a list of subscriptions for the authenticated user and service.
* [mirrorSubscriptionsUpdate](#mirrorsubscriptionsupdate) - Updates an existing subscription in place.

## mirrorSubscriptionsDelete

Deletes a subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorSubscriptionsDeleteRequest;
import org.openapis.openapi.models.operations.MirrorSubscriptionsDeleteResponse;
import org.openapis.openapi.models.operations.MirrorSubscriptionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorSubscriptionsDeleteRequest req = new MirrorSubscriptionsDeleteRequest("quasi") {{
                alt = AltEnum.JSON;
                fields = "iure";
                key = "doloribus";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "eius";
                userIp = "maxime";
            }};            

            MirrorSubscriptionsDeleteResponse res = sdk.subscriptions.mirrorSubscriptionsDelete(req, new MirrorSubscriptionsDeleteSecurity("deleniti", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorSubscriptionsInsert

Creates a new subscription.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorSubscriptionsInsertRequest;
import org.openapis.openapi.models.operations.MirrorSubscriptionsInsertResponse;
import org.openapis.openapi.models.operations.MirrorSubscriptionsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Subscription;
import org.openapis.openapi.models.shared.UserAction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorSubscriptionsInsertRequest req = new MirrorSubscriptionsInsertRequest() {{
                subscription = new Subscription() {{
                    callbackUrl = "in";
                    collection = "architecto";
                    id = "1e5b7fd2-ed02-4892-9cdd-c692601fb576";
                    kind = "nam";
                    notification = new Notification() {{
                        collection = "eaque";
                        itemId = "pariatur";
                        operation = "nemo";
                        userActions = new org.openapis.openapi.models.shared.UserAction[]{{
                            add(new UserAction() {{
                                payload = "perferendis";
                                type = "fugiat";
                            }}),
                            add(new UserAction() {{
                                payload = "amet";
                                type = "aut";
                            }}),
                            add(new UserAction() {{
                                payload = "cumque";
                                type = "corporis";
                            }}),
                            add(new UserAction() {{
                                payload = "hic";
                                type = "libero";
                            }}),
                        }};
                        userToken = "nobis";
                        verifyToken = "dolores";
                    }};;
                    operation = new String[]{{
                        add("totam"),
                        add("dignissimos"),
                    }};
                    updated = OffsetDateTime.parse("2022-08-30T06:29:24.707Z");
                    userToken = "nesciunt";
                    verifyToken = "eos";
                }};;
                alt = AltEnum.JSON;
                fields = "perferendis";
                key = "dolores";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "quam";
                userIp = "dolor";
            }};            

            MirrorSubscriptionsInsertResponse res = sdk.subscriptions.mirrorSubscriptionsInsert(req, new MirrorSubscriptionsInsertSecurity("vero", "nostrum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorSubscriptionsList

Retrieves a list of subscriptions for the authenticated user and service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorSubscriptionsListRequest;
import org.openapis.openapi.models.operations.MirrorSubscriptionsListResponse;
import org.openapis.openapi.models.operations.MirrorSubscriptionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorSubscriptionsListRequest req = new MirrorSubscriptionsListRequest() {{
                alt = AltEnum.JSON;
                fields = "hic";
                key = "recusandae";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "facilis";
                userIp = "perspiciatis";
            }};            

            MirrorSubscriptionsListResponse res = sdk.subscriptions.mirrorSubscriptionsList(req, new MirrorSubscriptionsListSecurity("voluptatem", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorSubscriptionsUpdate

Updates an existing subscription in place.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorSubscriptionsUpdateRequest;
import org.openapis.openapi.models.operations.MirrorSubscriptionsUpdateResponse;
import org.openapis.openapi.models.operations.MirrorSubscriptionsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Subscription;
import org.openapis.openapi.models.shared.UserAction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorSubscriptionsUpdateRequest req = new MirrorSubscriptionsUpdateRequest("consequuntur") {{
                subscription = new Subscription() {{
                    callbackUrl = "blanditiis";
                    collection = "error";
                    id = "09b3fe49-a8d9-4cbf-8863-3323f9b77f3a";
                    kind = "numquam";
                    notification = new Notification() {{
                        collection = "veritatis";
                        itemId = "ipsa";
                        operation = "ipsa";
                        userActions = new org.openapis.openapi.models.shared.UserAction[]{{
                            add(new UserAction() {{
                                payload = "odio";
                                type = "quaerat";
                            }}),
                            add(new UserAction() {{
                                payload = "accusamus";
                                type = "quidem";
                            }}),
                        }};
                        userToken = "voluptatibus";
                        verifyToken = "voluptas";
                    }};;
                    operation = new String[]{{
                        add("eos"),
                        add("atque"),
                        add("sit"),
                    }};
                    updated = OffsetDateTime.parse("2022-10-19T08:40:45.996Z");
                    userToken = "soluta";
                    verifyToken = "dolorum";
                }};;
                alt = AltEnum.JSON;
                fields = "iusto";
                key = "voluptate";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "deleniti";
                userIp = "omnis";
            }};            

            MirrorSubscriptionsUpdateResponse res = sdk.subscriptions.mirrorSubscriptionsUpdate(req, new MirrorSubscriptionsUpdateSecurity("necessitatibus", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
