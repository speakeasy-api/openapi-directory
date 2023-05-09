# maintenance

## Overview

Maintenance management

### Available Operations

* [deleteMaintenanceId](#deletemaintenanceid) - Delete a Maintenance
* [getMaintenance](#getmaintenance) - Fetch a list of Maintenance
* [postMaintenance](#postmaintenance) - Create a Maintenance
* [putMaintenanceId](#putmaintenanceid) - Update a Maintenance

## deleteMaintenanceId

Delete a Maintenance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMaintenanceIdRequest;
import org.openapis.openapi.models.operations.DeleteMaintenanceIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores", "minus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteMaintenanceIdRequest req = new DeleteMaintenanceIdRequest(463451L);            

            DeleteMaintenanceIdResponse res = sdk.maintenance.deleteMaintenanceId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMaintenance

Without params, it returns a list of Maintenance the user has access to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMaintenanceRequest;
import org.openapis.openapi.models.operations.GetMaintenanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor", "vero") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetMaintenanceRequest req = new GetMaintenanceRequest() {{
                all = false;
                deviceId = 345352L;
                groupId = 944120L;
                refresh = false;
                userId = 928082L;
            }};            

            GetMaintenanceResponse res = sdk.maintenance.getMaintenance(req);

            if (res.maintenances != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMaintenance

Create a Maintenance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMaintenanceResponse;
import org.openapis.openapi.models.shared.Maintenance;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis", "facilis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Maintenance req = new Maintenance() {{
                attributes = new java.util.HashMap<String, Object>() {{
                    put("voluptatem", "porro");
                    put("consequuntur", "blanditiis");
                    put("error", "eaque");
                }};
                id = 577229L;
                name = "Travis Zemlak";
                period = 6139.66;
                start = 6790.91;
                type = "deleniti";
            }};            

            PostMaintenanceResponse res = sdk.maintenance.postMaintenance(req);

            if (res.maintenance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putMaintenanceId

Update a Maintenance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutMaintenanceIdRequest;
import org.openapis.openapi.models.operations.PutMaintenanceIdResponse;
import org.openapis.openapi.models.shared.Maintenance;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutMaintenanceIdRequest req = new PutMaintenanceIdRequest(                new Maintenance() {{
                                attributes = new java.util.HashMap<String, Object>() {{
                                    put("libero", "delectus");
                                    put("quaerat", "quos");
                                    put("aliquid", "dolorem");
                                    put("dolorem", "dolor");
                                }};
                                id = 186193L;
                                name = "Mindy Marks";
                                period = 4904.59;
                                start = 9702.37;
                                type = "amet";
                            }};, 680545L);            

            PutMaintenanceIdResponse res = sdk.maintenance.putMaintenanceId(req);

            if (res.maintenance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
