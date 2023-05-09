# groups

## Overview

Everything about Otoroshi service groups

### Available Operations

* [allServiceGroups](#allservicegroups) - Get all service groups
* [createGroup](#creategroup) - Create a new service group
* [deleteGroup](#deletegroup) - Delete a service group
* [patchGroup](#patchgroup) - Update a service group with a diff
* [serviceGroup](#servicegroup) - Get a service group
* [updateGroup](#updategroup) - Update a service group

## allServiceGroups

Get all service groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllServiceGroupsResponse;
import org.openapis.openapi.models.operations.AllServiceGroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllServiceGroupsResponse res = sdk.groups.allServiceGroups(new AllServiceGroupsSecurity("dicta", "dolor") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.groups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroup

Create a new service group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.operations.CreateGroupSecurity;
import org.openapis.openapi.models.shared.Group;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Group req = new Group("a string value", "a string value") {{
                description = "a string value";
            }};            

            CreateGroupResponse res = sdk.groups.createGroup(req, new CreateGroupSecurity("maiores", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroup

Delete a service group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupRequest;
import org.openapis.openapi.models.operations.DeleteGroupResponse;
import org.openapis.openapi.models.operations.DeleteGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteGroupRequest req = new DeleteGroupRequest("ex");            

            DeleteGroupResponse res = sdk.groups.deleteGroup(req, new DeleteGroupSecurity("nulla", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.deleted != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchGroup

Update a service group with a diff

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchGroupRequest;
import org.openapis.openapi.models.operations.PatchGroupResponse;
import org.openapis.openapi.models.operations.PatchGroupSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchGroupRequest req = new PatchGroupRequest("voluptatibus") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.TEST, "a string value") {{
                        op = PatchOpEnum.TEST;
                        path = "a string value";
                        value = "quisquam";
                    }}),
                    add(new Patch(PatchOpEnum.REPLACE, "a string value") {{
                        op = PatchOpEnum.REMOVE;
                        path = "a string value";
                        value = "impedit";
                    }}),
                }};
            }};            

            PatchGroupResponse res = sdk.groups.patchGroup(req, new PatchGroupSecurity("veniam", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceGroup

Get a service group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceGroupRequest;
import org.openapis.openapi.models.operations.ServiceGroupResponse;
import org.openapis.openapi.models.operations.ServiceGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceGroupRequest req = new ServiceGroupRequest("inventore");            

            ServiceGroupResponse res = sdk.groups.serviceGroup(req, new ServiceGroupSecurity("magnam", "ea") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGroup

Update a service group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGroupRequest;
import org.openapis.openapi.models.operations.UpdateGroupResponse;
import org.openapis.openapi.models.operations.UpdateGroupSecurity;
import org.openapis.openapi.models.shared.Group;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateGroupRequest req = new UpdateGroupRequest("quo") {{
                group = new Group("a string value", "a string value") {{
                    description = "a string value";
                }};;
            }};            

            UpdateGroupResponse res = sdk.groups.updateGroup(req, new UpdateGroupSecurity("consectetur", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
