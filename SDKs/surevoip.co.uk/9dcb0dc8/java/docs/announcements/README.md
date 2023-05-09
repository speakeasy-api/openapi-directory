# announcements

## Overview

Announcements that can be played during or before a call

### Available Operations

* [deleteCustomersAccountAnnouncementsAnnouncementId](#deletecustomersaccountannouncementsannouncementid) - Delete an announcement audio file
* [getAnnouncements](#getannouncements) - List global announcements
* [getCustomersAccountAnnouncements](#getcustomersaccountannouncements) - List of announcement audio files
* [getCustomersAccountAnnouncementsAnnouncementId](#getcustomersaccountannouncementsannouncementid) - Represents an announcement audio file
* [postAnnouncements](#postannouncements) - Add a new announcement audio file

## deleteCustomersAccountAnnouncementsAnnouncementId

Delete an announcement audio file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdRequest;
import org.openapis.openapi.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("unde", "nulla") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteCustomersAccountAnnouncementsAnnouncementIdRequest req = new DeleteCustomersAccountAnnouncementsAnnouncementIdRequest(544883L, "illum");            

            DeleteCustomersAccountAnnouncementsAnnouncementIdResponse res = sdk.announcements.deleteCustomersAccountAnnouncementsAnnouncementId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnouncements

List global announcements

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnouncementsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("vel", "error") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetAnnouncementsResponse res = sdk.announcements.getAnnouncements();

            if (res.oneGetResponses200ContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomersAccountAnnouncements

List of announcement audio files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomersAccountAnnouncementsRequest;
import org.openapis.openapi.models.operations.GetCustomersAccountAnnouncementsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("deserunt", "suscipit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetCustomersAccountAnnouncementsRequest req = new GetCustomersAccountAnnouncementsRequest(437587L);            

            GetCustomersAccountAnnouncementsResponse res = sdk.announcements.getCustomersAccountAnnouncements(req);

            if (res.getCustomersAccountAnnouncements200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomersAccountAnnouncementsAnnouncementId

Represents an announcement audio file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomersAccountAnnouncementsAnnouncementIdRequest;
import org.openapis.openapi.models.operations.GetCustomersAccountAnnouncementsAnnouncementIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("magnam", "debitis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetCustomersAccountAnnouncementsAnnouncementIdRequest req = new GetCustomersAccountAnnouncementsAnnouncementIdRequest(56713L, "delectus");            

            GetCustomersAccountAnnouncementsAnnouncementIdResponse res = sdk.announcements.getCustomersAccountAnnouncementsAnnouncementId(req);

            if (res.oneannouncementsPostResponses201ContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAnnouncements

Add a new announcement audio file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAnnouncementsRequestBody;
import org.openapis.openapi.models.operations.PostAnnouncementsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("tempora", "suscipit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PostAnnouncementsRequestBody req = new PostAnnouncementsRequestBody() {{
                description = "molestiae";
                file = "minus";
            }};            

            PostAnnouncementsResponse res = sdk.announcements.postAnnouncements(req);

            if (res.postAnnouncements201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
