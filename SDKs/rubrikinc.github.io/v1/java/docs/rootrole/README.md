# rootRole

## Overview

Role management.

### Available Operations

* [createRole](#createrole) - Create a new role
* [deleteRole](#deleterole) - Delete a role
* [getRole](#getrole) - Get role information for the specified role
* [getRoles](#getroles) - Get all roles in an organization
* [updateRole](#updaterole) - Update role information

## createRole

Create a new role in the current organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRoleResponse;
import org.openapis.openapi.models.shared.RoleInfoCreate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolorum", "velit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.RoleInfoCreate req = new RoleInfoCreate("earum") {{
                description = "praesentium";
                organizationId = "error";
                roleTemplate = "non";
            }};            

            CreateRoleResponse res = sdk.rootRole.createRole(req);

            if (res.roleInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRole

Delete the role with the specified ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRoleRequest;
import org.openapis.openapi.models.operations.DeleteRoleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quasi", "mollitia") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteRoleRequest req = new DeleteRoleRequest("accusamus");            

            DeleteRoleResponse res = sdk.rootRole.deleteRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRole

Get role information for the role with the specified ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRoleRequest;
import org.openapis.openapi.models.operations.GetRoleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("harum", "cumque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetRoleRequest req = new GetRoleRequest("doloremque");            

            GetRoleResponse res = sdk.rootRole.getRole(req);

            if (res.roleInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRoles

Get a list of role information for all roles in the specified organization.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRolesRequest;
import org.openapis.openapi.models.operations.GetRolesResponse;
import org.openapis.openapi.models.operations.GetRolesSortByEnum;
import org.openapis.openapi.models.operations.GetRolesSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("expedita", "corrupti") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetRolesRequest req = new GetRolesRequest() {{
                limit = 53733;
                name = "Gilbert Marks";
                offset = 821904;
                organizationId = "dolor";
                roleTemplate = new String[]{{
                    add("sed"),
                    add("accusamus"),
                    add("optio"),
                }};
                sortBy = GetRolesSortByEnum.ROLE_TEMPLATE;
                sortOrder = GetRolesSortOrderEnum.DESC;
            }};            

            GetRolesResponse res = sdk.rootRole.getRoles(req);

            if (res.roleInfoListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRole

Update the role information for the specified role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRoleRequest;
import org.openapis.openapi.models.operations.UpdateRoleResponse;
import org.openapis.openapi.models.shared.RoleInfoUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quo", "quos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateRoleRequest req = new UpdateRoleRequest(                new RoleInfoUpdate() {{
                                description = "asperiores";
                                name = "Mr. Nick Hessel DVM";
                            }};, "nostrum");            

            UpdateRoleResponse res = sdk.rootRole.updateRole(req);

            if (res.roleInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
