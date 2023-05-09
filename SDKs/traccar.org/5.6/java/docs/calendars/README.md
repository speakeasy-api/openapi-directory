# calendars

## Overview

Calendar management

### Available Operations

* [deleteCalendarsId](#deletecalendarsid) - Delete a Calendar
* [getCalendars](#getcalendars) - Fetch a list of Calendars
* [postCalendars](#postcalendars) - Create a Calendar
* [putCalendarsId](#putcalendarsid) - Update a Calendar

## deleteCalendarsId

Delete a Calendar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCalendarsIdRequest;
import org.openapis.openapi.models.operations.DeleteCalendarsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae", "temporibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteCalendarsIdRequest req = new DeleteCalendarsIdRequest(71036L);            

            DeleteCalendarsIdResponse res = sdk.calendars.deleteCalendarsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCalendars

Without params, it returns a list of Calendars the user has access to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCalendarsRequest;
import org.openapis.openapi.models.operations.GetCalendarsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetCalendarsRequest req = new GetCalendarsRequest() {{
                all = false;
                userId = 648172L;
            }};            

            GetCalendarsResponse res = sdk.calendars.getCalendars(req);

            if (res.calendars != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCalendars

Create a Calendar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCalendarsResponse;
import org.openapis.openapi.models.shared.Calendar;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "ipsam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Calendar req = new Calendar() {{
                attributes = new java.util.HashMap<String, Object>() {{
                    put("sapiente", "quo");
                    put("odit", "at");
                    put("at", "maiores");
                    put("molestiae", "quod");
                }};
                data = "quod";
                id = 461479L;
                name = "Miss Lowell Parisian";
            }};            

            PostCalendarsResponse res = sdk.calendars.postCalendars(req);

            if (res.calendar != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCalendarsId

Update a Calendar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCalendarsIdRequest;
import org.openapis.openapi.models.operations.PutCalendarsIdResponse;
import org.openapis.openapi.models.shared.Calendar;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "fugit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutCalendarsIdRequest req = new PutCalendarsIdRequest(                new Calendar() {{
                                attributes = new java.util.HashMap<String, Object>() {{
                                    put("hic", "optio");
                                    put("totam", "beatae");
                                    put("commodi", "molestiae");
                                }};
                                data = "modi";
                                id = 186332L;
                                name = "Jonathon Klocko";
                            }};, 135218L);            

            PutCalendarsIdResponse res = sdk.calendars.putCalendarsId(req);

            if (res.calendar != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
