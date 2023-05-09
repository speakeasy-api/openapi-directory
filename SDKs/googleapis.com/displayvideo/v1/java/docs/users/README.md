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
                            advertiserId = "quibusdam";
                            partnerId = "accusantium";
                            userRole = AssignedUserRoleUserRoleEnum.CREATIVE;
                        }}),
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "inventore";
                            partnerId = "omnis";
                            userRole = AssignedUserRoleUserRoleEnum.CREATIVE;
                        }}),
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "excepturi";
                            partnerId = "nostrum";
                            userRole = AssignedUserRoleUserRoleEnum.STANDARD_PARTNER_CLIENT;
                        }}),
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "doloribus";
                            partnerId = "magnam";
                            userRole = AssignedUserRoleUserRoleEnum.ADMIN_PARTNER_CLIENT;
                        }}),
                    }};
                    deletedAssignedUserRoles = new String[]{{
                        add("necessitatibus"),
                        add("velit"),
                        add("sint"),
                    }};
                }};;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "impedit";
                key = "facilis";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quaerat";
                uploadProtocol = "delectus";
            }};            

            DisplayvideoUsersBulkEditAssignedUserRolesResponse res = sdk.users.displayvideoUsersBulkEditAssignedUserRoles(req, new DisplayvideoUsersBulkEditAssignedUserRolesSecurity("molestiae", "deserunt") {{
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
                            advertiserId = "rerum";
                            partnerId = "consequuntur";
                            userRole = AssignedUserRoleUserRoleEnum.STANDARD;
                        }}),
                    }};
                    displayName = "et";
                    email = "Claud.Hudson@gmail.com";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "nisi";
                key = "aliquid";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "repellat";
                uploadProtocol = "placeat";
            }};            

            DisplayvideoUsersCreateResponse res = sdk.users.displayvideoUsersCreate(req, new DisplayvideoUsersCreateSecurity("eligendi", "quaerat") {{
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

            DisplayvideoUsersDeleteRequest req = new DisplayvideoUsersDeleteRequest("veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "dicta";
                fields = "molestiae";
                key = "maxime";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            DisplayvideoUsersDeleteResponse res = sdk.users.displayvideoUsersDelete(req, new DisplayvideoUsersDeleteSecurity("aliquid", "voluptate") {{
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

            DisplayvideoUsersGetRequest req = new DisplayvideoUsersGetRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "ad";
                key = "incidunt";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "atque";
                uploadProtocol = "tempore";
            }};            

            DisplayvideoUsersGetResponse res = sdk.users.displayvideoUsersGet(req, new DisplayvideoUsersGetSecurity("asperiores", "distinctio") {{
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
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "accusamus";
                filter = "excepturi";
                key = "deleniti";
                oauthToken = "inventore";
                orderBy = "perspiciatis";
                pageSize = 18173L;
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "molestiae";
                uploadProtocol = "adipisci";
            }};            

            DisplayvideoUsersListResponse res = sdk.users.displayvideoUsersList(req, new DisplayvideoUsersListSecurity("totam", "perspiciatis") {{
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

            DisplayvideoUsersPatchRequest req = new DisplayvideoUsersPatchRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                userInput = new UserInput() {{
                    assignedUserRoles = new org.openapis.openapi.models.shared.AssignedUserRoleInput[]{{
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "nam";
                            partnerId = "id";
                            userRole = AssignedUserRoleUserRoleEnum.LIMITED_REPORTING_ONLY;
                        }}),
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "in";
                            partnerId = "a";
                            userRole = AssignedUserRoleUserRoleEnum.CREATIVE;
                        }}),
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "culpa";
                            partnerId = "dolor";
                            userRole = AssignedUserRoleUserRoleEnum.STANDARD_PARTNER_CLIENT;
                        }}),
                        add(new AssignedUserRoleInput() {{
                            advertiserId = "exercitationem";
                            partnerId = "unde";
                            userRole = AssignedUserRoleUserRoleEnum.STANDARD;
                        }}),
                    }};
                    displayName = "pariatur";
                    email = "Gilberto.Rodriguez65@yahoo.com";
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "aut";
                key = "autem";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "explicabo";
                updateMask = "rerum";
                uploadType = "iste";
                uploadProtocol = "occaecati";
            }};            

            DisplayvideoUsersPatchResponse res = sdk.users.displayvideoUsersPatch(req, new DisplayvideoUsersPatchSecurity("enim", "tempora") {{
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
