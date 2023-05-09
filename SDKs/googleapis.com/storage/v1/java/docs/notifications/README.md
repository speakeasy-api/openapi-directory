# notifications

### Available Operations

* [storageNotificationsDelete](#storagenotificationsdelete) - Permanently deletes a notification subscription.
* [storageNotificationsGet](#storagenotificationsget) - View a notification configuration.
* [storageNotificationsInsert](#storagenotificationsinsert) - Creates a notification subscription for a given bucket.
* [storageNotificationsList](#storagenotificationslist) - Retrieves a list of notification subscriptions for a given bucket.

## storageNotificationsDelete

Permanently deletes a notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageNotificationsDeleteRequest;
import org.openapis.openapi.models.operations.StorageNotificationsDeleteResponse;
import org.openapis.openapi.models.operations.StorageNotificationsDeleteSecurity;
import org.openapis.openapi.models.operations.StorageNotificationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.StorageNotificationsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.StorageNotificationsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageNotificationsDeleteRequest req = new StorageNotificationsDeleteRequest("modi", "corporis") {{
                alt = AltEnum.JSON;
                fields = "magnam";
                key = "voluptates";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "aperiam";
                userIp = "libero";
                userProject = "ratione";
            }};            

            StorageNotificationsDeleteResponse res = sdk.notifications.storageNotificationsDelete(req, new StorageNotificationsDeleteSecurity() {{
                option1 = new StorageNotificationsDeleteSecurityOption1("labore", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## storageNotificationsGet

View a notification configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageNotificationsGetRequest;
import org.openapis.openapi.models.operations.StorageNotificationsGetResponse;
import org.openapis.openapi.models.operations.StorageNotificationsGetSecurity;
import org.openapis.openapi.models.operations.StorageNotificationsGetSecurityOption1;
import org.openapis.openapi.models.operations.StorageNotificationsGetSecurityOption2;
import org.openapis.openapi.models.operations.StorageNotificationsGetSecurityOption3;
import org.openapis.openapi.models.operations.StorageNotificationsGetSecurityOption4;
import org.openapis.openapi.models.operations.StorageNotificationsGetSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageNotificationsGetRequest req = new StorageNotificationsGetRequest("occaecati", "voluptas") {{
                alt = AltEnum.JSON;
                fields = "quo";
                key = "velit";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "nostrum";
                userIp = "est";
                userProject = "impedit";
            }};            

            StorageNotificationsGetResponse res = sdk.notifications.storageNotificationsGet(req, new StorageNotificationsGetSecurity() {{
                option1 = new StorageNotificationsGetSecurityOption1("delectus", "tempore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.notification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageNotificationsInsert

Creates a notification subscription for a given bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageNotificationsInsertRequest;
import org.openapis.openapi.models.operations.StorageNotificationsInsertResponse;
import org.openapis.openapi.models.operations.StorageNotificationsInsertSecurity;
import org.openapis.openapi.models.operations.StorageNotificationsInsertSecurityOption1;
import org.openapis.openapi.models.operations.StorageNotificationsInsertSecurityOption2;
import org.openapis.openapi.models.operations.StorageNotificationsInsertSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Notification;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageNotificationsInsertRequest req = new StorageNotificationsInsertRequest("vero") {{
                notification = new Notification() {{
                    customAttributes = new java.util.HashMap<String, String>() {{
                        put("repellat", "pariatur");
                    }};
                    etag = "nemo";
                    eventTypes = new String[]{{
                        add("aperiam"),
                        add("odio"),
                    }};
                    id = "57792917-7dea-4c64-aecb-573409e3eb1e";
                    kind = "veniam";
                    objectNamePrefix = "animi";
                    payloadFormat = "dolores";
                    selfLink = "nam";
                    topic = "dicta";
                }};;
                alt = AltEnum.JSON;
                fields = "consequuntur";
                key = "necessitatibus";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "ducimus";
                userIp = "maiores";
                userProject = "veritatis";
            }};            

            StorageNotificationsInsertResponse res = sdk.notifications.storageNotificationsInsert(req, new StorageNotificationsInsertSecurity() {{
                option1 = new StorageNotificationsInsertSecurityOption1("quasi", "laboriosam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.notification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageNotificationsList

Retrieves a list of notification subscriptions for a given bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageNotificationsListRequest;
import org.openapis.openapi.models.operations.StorageNotificationsListResponse;
import org.openapis.openapi.models.operations.StorageNotificationsListSecurity;
import org.openapis.openapi.models.operations.StorageNotificationsListSecurityOption1;
import org.openapis.openapi.models.operations.StorageNotificationsListSecurityOption2;
import org.openapis.openapi.models.operations.StorageNotificationsListSecurityOption3;
import org.openapis.openapi.models.operations.StorageNotificationsListSecurityOption4;
import org.openapis.openapi.models.operations.StorageNotificationsListSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageNotificationsListRequest req = new StorageNotificationsListRequest("pariatur") {{
                alt = AltEnum.JSON;
                fields = "libero";
                key = "excepturi";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "aliquam";
                userIp = "nostrum";
                userProject = "doloribus";
            }};            

            StorageNotificationsListResponse res = sdk.notifications.storageNotificationsList(req, new StorageNotificationsListSecurity() {{
                option1 = new StorageNotificationsListSecurityOption1("eligendi", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.notifications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
