# users

### Available Operations

* [displayvideoUsersBulkEditAssignedUserRoles](#displayvideousersbulkeditassigneduserroles) - Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersCreate](#displayvideouserscreate) - Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersDelete](#displayvideousersdelete) - Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersGet](#displayvideousersget) - Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersList](#displayvideouserslist) - Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersPatch](#displayvideouserspatch) - Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

## displayvideoUsersBulkEditAssignedUserRoles

Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoUsersBulkEditAssignedUserRolesRequest;
import org.openapis.openapi.models.operations.DisplayvideoUsersBulkEditAssignedUserRolesResponse;
import org.openapis.openapi.models.operations.DisplayvideoUsersBulkEditAssignedUserRolesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssignedUserRoleInput;
import org.openapis.openapi.models.shared.AssignedUserRoleUserRoleEnum;
import org.openapis.openapi.models.shared.BulkEditAssignedUserRolesRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoUsersBulkEditAssignedUserRolesRequest req = new DisplayvideoUsersBulkEditAssignedUserRolesRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkEditAssignedUserRolesRequestInput = new BulkEditAssignedUserRolesRequestInput() {{
                    createdAssignedUserRoles = new org.openapis.openapi.models.shared.AssignedUserRoleInput[]{{
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "sint";
                            partnerId = "accusamus";
                            userRole = AssignedUserRoleUserRoleEnum.STANDARD_PARTNER_CLIENT;
                        }}),
                    }};
                    deletedAssignedUserRoles = new String[]{{
                        add("consequuntur"),
                        add("enim"),
                        add("minus"),
                        add("quibusdam"),
                    }};
                }};;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "omnis";
                key = "quibusdam";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "sint";
                uploadProtocol = "doloribus";
            }};            

            DisplayvideoUsersBulkEditAssignedUserRolesResponse res = sdk.users.displayvideoUsersBulkEditAssignedUserRoles(req, new DisplayvideoUsersBulkEditAssignedUserRolesSecurity("magnam", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkEditAssignedUserRolesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoUsersCreate

Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoUsersCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoUsersCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoUsersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssignedUserRoleInput;
import org.openapis.openapi.models.shared.AssignedUserRoleUserRoleEnum;
import org.openapis.openapi.models.shared.UserInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoUsersCreateRequest req = new DisplayvideoUsersCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                userInput = new UserInput() {{
                    assignedUserRoles = new org.openapis.openapi.models.shared.AssignedUserRoleInput[]{{
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "velit";
                            partnerId = "sint";
                            userRole = AssignedUserRoleUserRoleEnum.ADMIN_PARTNER_CLIENT;
                        }}),
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "nisi";
                            partnerId = "commodi";
                            userRole = AssignedUserRoleUserRoleEnum.LIMITED_REPORTING_ONLY;
                        }}),
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "facilis";
                            partnerId = "temporibus";
                            userRole = AssignedUserRoleUserRoleEnum.READ_ONLY;
                        }}),
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "quaerat";
                            partnerId = "delectus";
                            userRole = AssignedUserRoleUserRoleEnum.STANDARD_PLANNER_LIMITED;
                        }}),
                    }};
                    displayName = "deserunt";
                    email = "Brown30@hotmail.com";
                }};;
                accessToken = "et";
                alt = AltEnum.JSON;
                callback = "ratione";
                fields = "nisi";
                key = "perspiciatis";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "et";
                uploadProtocol = "debitis";
            }};            

            DisplayvideoUsersCreateResponse res = sdk.users.displayvideoUsersCreate(req, new DisplayvideoUsersCreateSecurity("nisi", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoUsersDelete

Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoUsersDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoUsersDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoUsersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoUsersDeleteRequest req = new DisplayvideoUsersDeleteRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "eligendi";
                fields = "quaerat";
                key = "veniam";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "dolores";
                uploadProtocol = "dicta";
            }};            

            DisplayvideoUsersDeleteResponse res = sdk.users.displayvideoUsersDelete(req, new DisplayvideoUsersDeleteSecurity("molestiae", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoUsersGet

Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoUsersGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoUsersGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoUsersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoUsersGetRequest req = new DisplayvideoUsersGetRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "voluptate";
                key = "eum";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "tempora";
                uploadProtocol = "aspernatur";
            }};            

            DisplayvideoUsersGetResponse res = sdk.users.displayvideoUsersGet(req, new DisplayvideoUsersGetSecurity("ad", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoUsersList

Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoUsersListRequest;
import org.openapis.openapi.models.operations.DisplayvideoUsersListResponse;
import org.openapis.openapi.models.operations.DisplayvideoUsersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoUsersListRequest req = new DisplayvideoUsersListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "asperiores";
                filter = "distinctio";
                key = "minima";
                oauthToken = "cupiditate";
                orderBy = "molestiae";
                pageSize = 91333L;
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "deleniti";
                uploadProtocol = "inventore";
            }};            

            DisplayvideoUsersListResponse res = sdk.users.displayvideoUsersList(req, new DisplayvideoUsersListSecurity("perspiciatis", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoUsersPatch

Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoUsersPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoUsersPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoUsersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssignedUserRoleInput;
import org.openapis.openapi.models.shared.AssignedUserRoleUserRoleEnum;
import org.openapis.openapi.models.shared.UserInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoUsersPatchRequest req = new DisplayvideoUsersPatchRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                userInput = new UserInput() {{
                    assignedUserRoles = new org.openapis.openapi.models.shared.AssignedUserRoleInput[]{{
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "adipisci";
                            partnerId = "totam";
                            userRole = AssignedUserRoleUserRoleEnum.READ_ONLY;
                        }}),
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "optio";
                            partnerId = "itaque";
                            userRole = AssignedUserRoleUserRoleEnum.CREATIVE;
                        }}),
                    }};
                    displayName = "nam";
                    email = "Oceane_Kirlin63@yahoo.com";
                }};;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "exercitationem";
                fields = "unde";
                key = "labore";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "vel";
                updateMask = "laboriosam";
                uploadType = "soluta";
                uploadProtocol = "minus";
            }};            

            DisplayvideoUsersPatchResponse res = sdk.users.displayvideoUsersPatch(req, new DisplayvideoUsersPatchSecurity("magni", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
