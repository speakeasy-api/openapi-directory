# roles

### Available Operations

* [directoryRolesDelete](#directoryrolesdelete) - Deletes a role.
* [directoryRolesGet](#directoryrolesget) - Retrieves a role.
* [directoryRolesInsert](#directoryrolesinsert) - Creates a role.
* [directoryRolesList](#directoryroleslist) - Retrieves a paginated list of all the roles in a domain.
* [directoryRolesPatch](#directoryrolespatch) - Patches a role.
* [directoryRolesUpdate](#directoryrolesupdate) - Updates a role.

## directoryRolesDelete

Deletes a role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryRolesDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryRolesDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryRolesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryRolesDeleteRequest req = new DirectoryRolesDeleteRequest("minus", "porro") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "quo";
                key = "esse";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "accusantium";
                uploadProtocol = "soluta";
            }};            

            DirectoryRolesDeleteResponse res = sdk.roles.directoryRolesDelete(req, new DirectoryRolesDeleteSecurity("fugit", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## directoryRolesGet

Retrieves a role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryRolesGetRequest;
import org.openapis.openapi.models.operations.DirectoryRolesGetResponse;
import org.openapis.openapi.models.operations.DirectoryRolesGetSecurity;
import org.openapis.openapi.models.operations.DirectoryRolesGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryRolesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryRolesGetRequest req = new DirectoryRolesGetRequest("eligendi", "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "iusto";
                fields = "dolor";
                key = "voluptates";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "rerum";
                uploadProtocol = "doloremque";
            }};            

            DirectoryRolesGetResponse res = sdk.roles.directoryRolesGet(req, new DirectoryRolesGetSecurity() {{
                option1 = new DirectoryRolesGetSecurityOption1("voluptatem", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.role != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryRolesInsert

Creates a role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryRolesInsertRequest;
import org.openapis.openapi.models.operations.DirectoryRolesInsertResponse;
import org.openapis.openapi.models.operations.DirectoryRolesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Role;
import org.openapis.openapi.models.shared.RoleRolePrivileges;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryRolesInsertRequest req = new DirectoryRolesInsertRequest("at") {{
                dollarXgafv = XgafvEnum.ONE;
                role = new Role() {{
                    etag = "reprehenderit";
                    isSuperAdminRole = false;
                    isSystemRole = false;
                    kind = "voluptatum";
                    roleDescription = "blanditiis";
                    roleId = "nihil";
                    roleName = "atque";
                    rolePrivileges = new org.openapis.openapi.models.shared.RoleRolePrivileges[]{{
                        add(new RoleRolePrivileges() {{
                            privilegeName = "deserunt";
                            serviceId = "atque";
                        }}),
                        add(new RoleRolePrivileges() {{
                            privilegeName = "nostrum";
                            serviceId = "atque";
                        }}),
                        add(new RoleRolePrivileges() {{
                            privilegeName = "architecto";
                            serviceId = "est";
                        }}),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "magni";
                fields = "quae";
                key = "quas";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "labore";
                uploadProtocol = "sapiente";
            }};            

            DirectoryRolesInsertResponse res = sdk.roles.directoryRolesInsert(req, new DirectoryRolesInsertSecurity("saepe", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.role != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryRolesList

Retrieves a paginated list of all the roles in a domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryRolesListRequest;
import org.openapis.openapi.models.operations.DirectoryRolesListResponse;
import org.openapis.openapi.models.operations.DirectoryRolesListSecurity;
import org.openapis.openapi.models.operations.DirectoryRolesListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryRolesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryRolesListRequest req = new DirectoryRolesListRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "doloribus";
                key = "quia";
                maxResults = 887284L;
                oauthToken = "mollitia";
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "enim";
                uploadProtocol = "eum";
            }};            

            DirectoryRolesListResponse res = sdk.roles.directoryRolesList(req, new DirectoryRolesListSecurity() {{
                option1 = new DirectoryRolesListSecurityOption1("nemo", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.roles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryRolesPatch

Patches a role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryRolesPatchRequest;
import org.openapis.openapi.models.operations.DirectoryRolesPatchResponse;
import org.openapis.openapi.models.operations.DirectoryRolesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Role;
import org.openapis.openapi.models.shared.RoleRolePrivileges;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryRolesPatchRequest req = new DirectoryRolesPatchRequest("nesciunt", "sit") {{
                dollarXgafv = XgafvEnum.ONE;
                role = new Role() {{
                    etag = "minus";
                    isSuperAdminRole = false;
                    isSystemRole = false;
                    kind = "asperiores";
                    roleDescription = "recusandae";
                    roleId = "voluptates";
                    roleName = "praesentium";
                    rolePrivileges = new org.openapis.openapi.models.shared.RoleRolePrivileges[]{{
                        add(new RoleRolePrivileges() {{
                            privilegeName = "fugit";
                            serviceId = "sit";
                        }}),
                    }};
                }};;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "deleniti";
                key = "sunt";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "laborum";
                uploadProtocol = "aliquam";
            }};            

            DirectoryRolesPatchResponse res = sdk.roles.directoryRolesPatch(req, new DirectoryRolesPatchSecurity("deserunt", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.role != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryRolesUpdate

Updates a role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryRolesUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryRolesUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryRolesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Role;
import org.openapis.openapi.models.shared.RoleRolePrivileges;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryRolesUpdateRequest req = new DirectoryRolesUpdateRequest("sunt", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                role = new Role() {{
                    etag = "voluptatum";
                    isSuperAdminRole = false;
                    isSystemRole = false;
                    kind = "ipsa";
                    roleDescription = "at";
                    roleId = "dolorem";
                    roleName = "repellat";
                    rolePrivileges = new org.openapis.openapi.models.shared.RoleRolePrivileges[]{{
                        add(new RoleRolePrivileges() {{
                            privilegeName = "inventore";
                            serviceId = "sequi";
                        }}),
                    }};
                }};;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "hic";
                fields = "eaque";
                key = "dolorem";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "aspernatur";
                uploadProtocol = "nulla";
            }};            

            DirectoryRolesUpdateResponse res = sdk.roles.directoryRolesUpdate(req, new DirectoryRolesUpdateSecurity("enim", "illo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.role != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
