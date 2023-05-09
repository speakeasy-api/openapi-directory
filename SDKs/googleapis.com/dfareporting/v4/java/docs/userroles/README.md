# userRoles

### Available Operations

* [dfareportingUserRolesDelete](#dfareportinguserrolesdelete) - Deletes an existing user role.
* [dfareportingUserRolesGet](#dfareportinguserrolesget) - Gets one user role by ID.
* [dfareportingUserRolesInsert](#dfareportinguserrolesinsert) - Inserts a new user role.
* [dfareportingUserRolesList](#dfareportinguserroleslist) - Retrieves a list of user roles, possibly filtered. This method supports paging.
* [dfareportingUserRolesPatch](#dfareportinguserrolespatch) - Updates an existing user role. This method supports patch semantics.
* [dfareportingUserRolesUpdate](#dfareportinguserrolesupdate) - Updates an existing user role.

## dfareportingUserRolesDelete

Deletes an existing user role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserRolesDeleteRequest;
import org.openapis.openapi.models.operations.DfareportingUserRolesDeleteResponse;
import org.openapis.openapi.models.operations.DfareportingUserRolesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserRolesDeleteRequest req = new DfareportingUserRolesDeleteRequest("dignissimos", "ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "at";
                key = "porro";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "amet";
                uploadProtocol = "non";
            }};            

            DfareportingUserRolesDeleteResponse res = sdk.userRoles.dfareportingUserRolesDelete(req, new DfareportingUserRolesDeleteSecurity("nihil", "eaque") {{
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

## dfareportingUserRolesGet

Gets one user role by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserRolesGetRequest;
import org.openapis.openapi.models.operations.DfareportingUserRolesGetResponse;
import org.openapis.openapi.models.operations.DfareportingUserRolesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserRolesGetRequest req = new DfareportingUserRolesGetRequest("dolore", "perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "perferendis";
                key = "soluta";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "molestias";
                uploadProtocol = "ab";
            }};            

            DfareportingUserRolesGetResponse res = sdk.userRoles.dfareportingUserRolesGet(req, new DfareportingUserRolesGetSecurity("alias", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingUserRolesInsert

Inserts a new user role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserRolesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingUserRolesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingUserRolesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserRole;
import org.openapis.openapi.models.shared.UserRolePermission;
import org.openapis.openapi.models.shared.UserRolePermissionAvailabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserRolesInsertRequest req = new DfareportingUserRolesInsertRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                userRole = new UserRole() {{
                    accountId = "accusantium";
                    defaultUserRole = false;
                    id = "esse";
                    kind = "consequuntur";
                    name = "Steve Dickens";
                    parentUserRoleId = "repudiandae";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_ALWAYS;
                            id = "voluptatibus";
                            kind = "earum";
                            name = "Gayle Sawayn";
                            permissionGroupId = "quod";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_ALWAYS;
                            id = "temporibus";
                            kind = "labore";
                            name = "Mr. Juan Dickinson";
                            permissionGroupId = "officia";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.NOT_AVAILABLE_BY_DEFAULT;
                            id = "qui";
                            kind = "earum";
                            name = "Ian Lindgren";
                            permissionGroupId = "hic";
                        }}),
                    }};
                    subaccountId = "quae";
                }};;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "ex";
                key = "perspiciatis";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "vel";
                uploadProtocol = "ea";
            }};            

            DfareportingUserRolesInsertResponse res = sdk.userRoles.dfareportingUserRolesInsert(req, new DfareportingUserRolesInsertSecurity("temporibus", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingUserRolesList

Retrieves a list of user roles, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserRolesListRequest;
import org.openapis.openapi.models.operations.DfareportingUserRolesListResponse;
import org.openapis.openapi.models.operations.DfareportingUserRolesListSecurity;
import org.openapis.openapi.models.operations.DfareportingUserRolesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingUserRolesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserRolesListRequest req = new DfareportingUserRolesListRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "inventore";
                accountUserRoleOnly = false;
                alt = AltEnum.MEDIA;
                callback = "harum";
                fields = "vitae";
                ids = new String[]{{
                    add("amet"),
                    add("sapiente"),
                    add("veniam"),
                    add("amet"),
                }};
                key = "ad";
                maxResults = 591241L;
                oauthToken = "non";
                pageToken = "molestias";
                prettyPrint = false;
                quotaUser = "alias";
                searchString = "maxime";
                sortField = DfareportingUserRolesListSortFieldEnum.ID;
                sortOrder = DfareportingUserRolesListSortOrderEnum.DESCENDING;
                subaccountId = "excepturi";
                uploadType = "suscipit";
                uploadProtocol = "corrupti";
            }};            

            DfareportingUserRolesListResponse res = sdk.userRoles.dfareportingUserRolesList(req, new DfareportingUserRolesListSecurity("facilis", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRolesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingUserRolesPatch

Updates an existing user role. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserRolesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingUserRolesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingUserRolesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserRole;
import org.openapis.openapi.models.shared.UserRolePermission;
import org.openapis.openapi.models.shared.UserRolePermissionAvailabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserRolesPatchRequest req = new DfareportingUserRolesPatchRequest("placeat", "unde") {{
                dollarXgafv = XgafvEnum.ONE;
                userRole = new UserRole() {{
                    accountId = "ratione";
                    defaultUserRole = false;
                    id = "delectus";
                    kind = "atque";
                    name = "Mrs. Kara Schamberger";
                    parentUserRoleId = "veniam";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_ALWAYS;
                            id = "ab";
                            kind = "debitis";
                            name = "Patti Daugherty";
                            permissionGroupId = "deserunt";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_ALWAYS;
                            id = "distinctio";
                            kind = "temporibus";
                            name = "Carlos Corwin";
                            permissionGroupId = "similique";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT;
                            id = "amet";
                            kind = "est";
                            name = "Leslie Mertz MD";
                            permissionGroupId = "labore";
                        }}),
                    }};
                    subaccountId = "qui";
                }};;
                accessToken = "est";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "nam";
                key = "voluptatibus";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "ad";
                uploadProtocol = "perspiciatis";
            }};            

            DfareportingUserRolesPatchResponse res = sdk.userRoles.dfareportingUserRolesPatch(req, new DfareportingUserRolesPatchSecurity("pariatur", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingUserRolesUpdate

Updates an existing user role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserRolesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingUserRolesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingUserRolesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserRole;
import org.openapis.openapi.models.shared.UserRolePermission;
import org.openapis.openapi.models.shared.UserRolePermissionAvailabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserRolesUpdateRequest req = new DfareportingUserRolesUpdateRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                userRole = new UserRole() {{
                    accountId = "doloribus";
                    defaultUserRole = false;
                    id = "quisquam";
                    kind = "quidem";
                    name = "Georgia Langworth DDS";
                    parentUserRoleId = "libero";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_ALWAYS;
                            id = "possimus";
                            kind = "animi";
                            name = "May Dickens";
                            permissionGroupId = "ad";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_ALWAYS;
                            id = "suscipit";
                            kind = "odit";
                            name = "Pablo Mayer";
                            permissionGroupId = "repudiandae";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.USER_PROFILE_ONLY;
                            id = "consequuntur";
                            kind = "perspiciatis";
                            name = "Renee Smith III";
                            permissionGroupId = "iure";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_ALWAYS;
                            id = "enim";
                            kind = "nihil";
                            name = "Henry McGlynn";
                            permissionGroupId = "illo";
                        }}),
                    }};
                    subaccountId = "ullam";
                }};;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "similique";
                fields = "illo";
                key = "sapiente";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "impedit";
                uploadProtocol = "dolore";
            }};            

            DfareportingUserRolesUpdateResponse res = sdk.userRoles.dfareportingUserRolesUpdate(req, new DfareportingUserRolesUpdateSecurity("ea", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
