# notifications

## Overview

User notifications management

### Available Operations

* [deleteNotificationsId](#deletenotificationsid) - Delete a Notification
* [getNotifications](#getnotifications) - Fetch a list of Notifications
* [getNotificationsTypes](#getnotificationstypes) - Fetch a list of available Notification types
* [postNotifications](#postnotifications) - Create a Notification
* [postNotificationsTest](#postnotificationstest) - Send test notification to current user via Email and SMS
* [putNotificationsId](#putnotificationsid) - Update a Notification

## deleteNotificationsId

Delete a Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNotificationsIdRequest;
import org.openapis.openapi.models.operations.DeleteNotificationsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteNotificationsIdRequest req = new DeleteNotificationsIdRequest(58029L);            

            DeleteNotificationsIdResponse res = sdk.notifications.deleteNotificationsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNotifications

Without params, it returns a list of Notifications the user has access to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotificationsRequest;
import org.openapis.openapi.models.operations.GetNotificationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa", "iure") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetNotificationsRequest req = new GetNotificationsRequest() {{
                all = false;
                deviceId = 487838L;
                groupId = 311796L;
                refresh = false;
                userId = 881005L;
            }};            

            GetNotificationsResponse res = sdk.notifications.getNotifications(req);

            if (res.notifications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNotificationsTypes

Fetch a list of available Notification types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotificationsTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem", "voluptatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetNotificationsTypesResponse res = sdk.notifications.getNotificationsTypes();

            if (res.notificationTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNotifications

Create a Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNotificationsResponse;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas", "natus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Notification req = new Notification() {{
                always = false;
                attributes = new java.util.HashMap<String, Object>() {{
                    put("atque", "sit");
                }};
                calendarId = 854614L;
                id = 67249L;
                mail = false;
                sms = false;
                type = "soluta";
                web = false;
            }};            

            PostNotificationsResponse res = sdk.notifications.postNotifications(req);

            if (res.notification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNotificationsTest

Send test notification to current user via Email and SMS

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNotificationsTestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "iusto") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostNotificationsTestResponse res = sdk.notifications.postNotificationsTest();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putNotificationsId

Update a Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutNotificationsIdRequest;
import org.openapis.openapi.models.operations.PutNotificationsIdResponse;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutNotificationsIdRequest req = new PutNotificationsIdRequest(                new Notification() {{
                                always = false;
                                attributes = new java.util.HashMap<String, Object>() {{
                                    put("omnis", "necessitatibus");
                                    put("distinctio", "asperiores");
                                    put("nihil", "ipsum");
                                }};
                                calendarId = 456015L;
                                id = 663078L;
                                mail = false;
                                sms = false;
                                type = "saepe";
                                web = false;
                            }};, 263322L);            

            PutNotificationsIdResponse res = sdk.notifications.putNotificationsId(req);

            if (res.notification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
