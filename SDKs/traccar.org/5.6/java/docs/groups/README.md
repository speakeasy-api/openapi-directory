# groups

## Overview

Group management

### Available Operations

* [deleteGroupsId](#deletegroupsid) - Delete a Group
* [getGroups](#getgroups) - Fetch a list of Groups
* [postGroups](#postgroups) - Create a Group
* [putGroupsId](#putgroupsid) - Update a Group

## deleteGroupsId

Delete a Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupsIdRequest;
import org.openapis.openapi.models.operations.DeleteGroupsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "magni") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteGroupsIdRequest req = new DeleteGroupsIdRequest(123820L);            

            DeleteGroupsIdResponse res = sdk.groups.deleteGroupsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroups

Without any params, returns a list of the Groups the user belongs to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsRequest;
import org.openapis.openapi.models.operations.GetGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo", "illum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetGroupsRequest req = new GetGroupsRequest() {{
                all = false;
                userId = 864934L;
            }};            

            GetGroupsResponse res = sdk.groups.getGroups(req);

            if (res.groups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGroups

Create a Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGroupsResponse;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime", "ea") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Group req = new Group() {{
                attributes = new java.util.HashMap<String, Object>() {{
                    put("odit", "ea");
                    put("accusantium", "ab");
                    put("maiores", "quidem");
                }};
                groupId = 373291L;
                id = 453543L;
                name = "Candice Beatty";
            }};            

            PostGroupsResponse res = sdk.groups.postGroups(req);

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putGroupsId

Update a Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutGroupsIdRequest;
import org.openapis.openapi.models.operations.PutGroupsIdResponse;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus", "perferendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutGroupsIdRequest req = new PutGroupsIdRequest(                new Group() {{
                                attributes = new java.util.HashMap<String, Object>() {{
                                    put("amet", "aut");
                                    put("cumque", "corporis");
                                    put("hic", "libero");
                                    put("nobis", "dolores");
                                }};
                                groupId = 339404L;
                                id = 521037L;
                                name = "Cynthia Hayes";
                            }};, 18521L);            

            PutGroupsIdResponse res = sdk.groups.putGroupsId(req);

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
