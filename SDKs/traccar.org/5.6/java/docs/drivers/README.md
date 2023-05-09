# drivers

## Overview

Drivers management

### Available Operations

* [deleteDriversId](#deletedriversid) - Delete a Driver
* [getDrivers](#getdrivers) - Fetch a list of Drivers
* [postDrivers](#postdrivers) - Create a Driver
* [putDriversId](#putdriversid) - Update a Driver

## deleteDriversId

Delete a Driver

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDriversIdRequest;
import org.openapis.openapi.models.operations.DeleteDriversIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus", "sint") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteDriversIdRequest req = new DeleteDriversIdRequest(638921L);            

            DeleteDriversIdResponse res = sdk.drivers.deleteDriversId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDrivers

Without params, it returns a list of Drivers the user has access to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDriversRequest;
import org.openapis.openapi.models.operations.GetDriversResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor", "debitis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDriversRequest req = new GetDriversRequest() {{
                all = false;
                deviceId = 952749L;
                groupId = 680056L;
                refresh = false;
                userId = 447125L;
            }};            

            GetDriversResponse res = sdk.drivers.getDrivers(req);

            if (res.drivers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDrivers

Create a Driver

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDriversResponse;
import org.openapis.openapi.models.shared.Driver;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "illum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Driver req = new Driver() {{
                attributes = new java.util.HashMap<String, Object>() {{
                    put("rerum", "dicta");
                    put("magnam", "cumque");
                    put("facere", "ea");
                    put("aliquid", "laborum");
                }};
                id = 881104L;
                name = "Toni Haley";
                uniqueId = "quidem";
            }};            

            PostDriversResponse res = sdk.drivers.postDrivers(req);

            if (res.driver != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDriversId

Update a Driver

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDriversIdRequest;
import org.openapis.openapi.models.operations.PutDriversIdResponse;
import org.openapis.openapi.models.shared.Driver;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident", "nam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutDriversIdRequest req = new PutDriversIdRequest(                new Driver() {{
                                attributes = new java.util.HashMap<String, Object>() {{
                                    put("blanditiis", "deleniti");
                                    put("sapiente", "amet");
                                    put("deserunt", "nisi");
                                }};
                                id = 423855L;
                                name = "Ms. Arturo Krajcik";
                                uniqueId = "distinctio";
                            }};, 660174L);            

            PutDriversIdResponse res = sdk.drivers.putDriversId(req);

            if (res.driver != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
