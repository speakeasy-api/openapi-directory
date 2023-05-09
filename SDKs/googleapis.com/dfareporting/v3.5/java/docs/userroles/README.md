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

            DfareportingUserRolesDeleteRequest req = new DfareportingUserRolesDeleteRequest("accusantium", "quo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "rerum";
                key = "reprehenderit";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "pariatur";
                uploadProtocol = "alias";
            }};            

            DfareportingUserRolesDeleteResponse res = sdk.userRoles.dfareportingUserRolesDelete(req, new DfareportingUserRolesDeleteSecurity("corporis", "vero") {{
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

            DfareportingUserRolesGetRequest req = new DfareportingUserRolesGetRequest("sequi", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "totam";
                key = "quo";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "ducimus";
                uploadProtocol = "fuga";
            }};            

            DfareportingUserRolesGetResponse res = sdk.userRoles.dfareportingUserRolesGet(req, new DfareportingUserRolesGetSecurity("amet", "laudantium") {{
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

            DfareportingUserRolesInsertRequest req = new DfareportingUserRolesInsertRequest("expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                userRole = new UserRole() {{
                    accountId = "adipisci";
                    defaultUserRole = false;
                    id = "voluptatum";
                    kind = "dignissimos";
                    name = "Woodrow Harber";
                    parentUserRoleId = "ea";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_BY_DEFAULT;
                            id = "harum";
                            kind = "ipsa";
                            name = "Henrietta Hagenes III";
                            permissionGroupId = "consectetur";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT;
                            id = "ipsam";
                            kind = "illo";
                            name = "Irving Hilpert";
                            permissionGroupId = "occaecati";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.NOT_AVAILABLE_BY_DEFAULT;
                            id = "distinctio";
                            kind = "ipsam";
                            name = "Jay Abshire Sr.";
                            permissionGroupId = "excepturi";
                        }}),
                    }};
                    subaccountId = "animi";
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.JSON;
                callback = "eos";
                fields = "quidem";
                key = "at";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "quidem";
                uploadProtocol = "quia";
            }};            

            DfareportingUserRolesInsertResponse res = sdk.userRoles.dfareportingUserRolesInsert(req, new DfareportingUserRolesInsertSecurity("in", "fugiat") {{
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

            DfareportingUserRolesListRequest req = new DfareportingUserRolesListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                accountUserRoleOnly = false;
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "sapiente";
                ids = new String[]{{
                    add("excepturi"),
                    add("accusantium"),
                    add("facilis"),
                    add("unde"),
                }};
                key = "quidem";
                maxResults = 259862L;
                oauthToken = "id";
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "deserunt";
                searchString = "laudantium";
                sortField = DfareportingUserRolesListSortFieldEnum.ID;
                sortOrder = DfareportingUserRolesListSortOrderEnum.DESCENDING;
                subaccountId = "excepturi";
                uploadType = "quae";
                uploadProtocol = "soluta";
            }};            

            DfareportingUserRolesListResponse res = sdk.userRoles.dfareportingUserRolesList(req, new DfareportingUserRolesListSecurity("sapiente", "a") {{
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

            DfareportingUserRolesPatchRequest req = new DfareportingUserRolesPatchRequest("maxime", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                userRole = new UserRole() {{
                    accountId = "eligendi";
                    defaultUserRole = false;
                    id = "eaque";
                    kind = "nesciunt";
                    name = "Nettie Cartwright";
                    parentUserRoleId = "cum";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_BY_DEFAULT;
                            id = "ab";
                            kind = "excepturi";
                            name = "Loren Lesch";
                            permissionGroupId = "rerum";
                        }}),
                    }};
                    subaccountId = "quia";
                }};;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "cupiditate";
                key = "explicabo";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "debitis";
                uploadProtocol = "commodi";
            }};            

            DfareportingUserRolesPatchResponse res = sdk.userRoles.dfareportingUserRolesPatch(req, new DfareportingUserRolesPatchSecurity("delectus", "voluptatem") {{
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

            DfareportingUserRolesUpdateRequest req = new DfareportingUserRolesUpdateRequest("deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                userRole = new UserRole() {{
                    accountId = "assumenda";
                    defaultUserRole = false;
                    id = "sunt";
                    kind = "dignissimos";
                    name = "Ann Bashirian";
                    parentUserRoleId = "rem";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_ALWAYS;
                            id = "maxime";
                            kind = "aspernatur";
                            name = "Bessie Dibbert V";
                            permissionGroupId = "numquam";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.NOT_AVAILABLE_BY_DEFAULT;
                            id = "labore";
                            kind = "quis";
                            name = "Kimberly Price";
                            permissionGroupId = "dolorem";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.NOT_AVAILABLE_BY_DEFAULT;
                            id = "commodi";
                            kind = "commodi";
                            name = "Owen Senger";
                            permissionGroupId = "suscipit";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT;
                            id = "aperiam";
                            kind = "quaerat";
                            name = "Kelly Trantow IV";
                            permissionGroupId = "quas";
                        }}),
                    }};
                    subaccountId = "natus";
                }};;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "soluta";
                key = "odit";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "dignissimos";
                uploadProtocol = "officiis";
            }};            

            DfareportingUserRolesUpdateResponse res = sdk.userRoles.dfareportingUserRolesUpdate(req, new DfareportingUserRolesUpdateSecurity("eum", "incidunt") {{
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
