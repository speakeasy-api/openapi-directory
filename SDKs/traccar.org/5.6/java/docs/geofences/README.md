# geofences

## Overview

Geofence management

### Available Operations

* [deleteGeofencesId](#deletegeofencesid) - Delete a Geofence
* [getGeofences](#getgeofences) - Fetch a list of Geofences
* [postGeofences](#postgeofences) - Create a Geofence
* [putGeofencesId](#putgeofencesid) - Update a Geofence

## deleteGeofencesId

Delete a Geofence

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGeofencesIdRequest;
import org.openapis.openapi.models.operations.DeleteGeofencesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "nobis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteGeofencesIdRequest req = new DeleteGeofencesIdRequest(428769L);            

            DeleteGeofencesIdResponse res = sdk.geofences.deleteGeofencesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeofences

Without params, it returns a list of Geofences the user has access to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeofencesRequest;
import org.openapis.openapi.models.operations.GetGeofencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero", "aspernatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetGeofencesRequest req = new GetGeofencesRequest() {{
                all = false;
                deviceId = 102863L;
                groupId = 298282L;
                refresh = false;
                userId = 92373L;
            }};            

            GetGeofencesResponse res = sdk.geofences.getGeofences(req);

            if (res.geofences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGeofences

Create a Geofence

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGeofencesResponse;
import org.openapis.openapi.models.shared.Geofence;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "ullam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Geofence req = new Geofence() {{
                area = "provident";
                attributes = new java.util.HashMap<String, Object>() {{
                    put("sint", "accusantium");
                    put("mollitia", "reiciendis");
                    put("mollitia", "ad");
                }};
                calendarId = 431418L;
                description = "dolor";
                id = 896547L;
                name = "Vivian Boyle";
            }};            

            PostGeofencesResponse res = sdk.geofences.postGeofences(req);

            if (res.geofence != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putGeofencesId

Update a Geofence

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutGeofencesIdRequest;
import org.openapis.openapi.models.operations.PutGeofencesIdResponse;
import org.openapis.openapi.models.shared.Geofence;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "eius") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutGeofencesIdRequest req = new PutGeofencesIdRequest(                new Geofence() {{
                                area = "maxime";
                                attributes = new java.util.HashMap<String, Object>() {{
                                    put("facilis", "in");
                                    put("architecto", "architecto");
                                    put("repudiandae", "ullam");
                                }};
                                calendarId = 714242L;
                                description = "nihil";
                                id = 998848L;
                                name = "Louis Turner Sr.";
                            }};, 508315L);            

            PutGeofencesIdResponse res = sdk.geofences.putGeofencesId(req);

            if (res.geofence != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
