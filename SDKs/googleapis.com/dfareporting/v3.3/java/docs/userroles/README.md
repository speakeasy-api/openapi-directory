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

            DfareportingUserRolesDeleteRequest req = new DfareportingUserRolesDeleteRequest("est", "culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "alias";
                key = "minus";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "esse";
                uploadProtocol = "mollitia";
            }};            

            DfareportingUserRolesDeleteResponse res = sdk.userRoles.dfareportingUserRolesDelete(req, new DfareportingUserRolesDeleteSecurity("sequi", "repellat") {{
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

            DfareportingUserRolesGetRequest req = new DfareportingUserRolesGetRequest("impedit", "temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "at";
                key = "provident";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "a";
                uploadProtocol = "quaerat";
            }};            

            DfareportingUserRolesGetResponse res = sdk.userRoles.dfareportingUserRolesGet(req, new DfareportingUserRolesGetSecurity("incidunt", "blanditiis") {{
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

            DfareportingUserRolesInsertRequest req = new DfareportingUserRolesInsertRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                userRole = new UserRole() {{
                    accountId = "atque";
                    defaultUserRole = false;
                    id = "consectetur";
                    kind = "molestiae";
                    name = "Stacy Crona";
                    parentUserRoleId = "optio";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_ALWAYS;
                            id = "quos";
                            kind = "vitae";
                            name = "Vivian Mueller";
                            permissionGroupId = "aut";
                        }}),
                    }};
                    subaccountId = "omnis";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "modi";
                key = "ducimus";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "quo";
                uploadProtocol = "distinctio";
            }};            

            DfareportingUserRolesInsertResponse res = sdk.userRoles.dfareportingUserRolesInsert(req, new DfareportingUserRolesInsertSecurity("ducimus", "unde") {{
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

            DfareportingUserRolesListRequest req = new DfareportingUserRolesListRequest("vitae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vero";
                accountUserRoleOnly = false;
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "ex";
                ids = new String[]{{
                    add("sapiente"),
                    add("voluptatibus"),
                    add("mollitia"),
                }};
                key = "cupiditate";
                maxResults = 793583L;
                oauthToken = "praesentium";
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "eveniet";
                searchString = "ab";
                sortField = DfareportingUserRolesListSortFieldEnum.NAME;
                sortOrder = DfareportingUserRolesListSortOrderEnum.ASCENDING;
                subaccountId = "voluptate";
                uploadType = "facilis";
                uploadProtocol = "fuga";
            }};            

            DfareportingUserRolesListResponse res = sdk.userRoles.dfareportingUserRolesList(req, new DfareportingUserRolesListSecurity("quod", "dolorum") {{
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

            DfareportingUserRolesPatchRequest req = new DfareportingUserRolesPatchRequest("voluptatum", "dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                userRole = new UserRole() {{
                    accountId = "consequuntur";
                    defaultUserRole = false;
                    id = "aliquam";
                    kind = "excepturi";
                    name = "Edward Leannon";
                    parentUserRoleId = "optio";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_ALWAYS;
                            id = "magnam";
                            kind = "recusandae";
                            name = "Jeannie Balistreri";
                            permissionGroupId = "laborum";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_ALWAYS;
                            id = "voluptatibus";
                            kind = "temporibus";
                            name = "Bradford O'Keefe";
                            permissionGroupId = "reiciendis";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_ALWAYS;
                            id = "aspernatur";
                            kind = "ipsa";
                            name = "Nancy Robel";
                            permissionGroupId = "explicabo";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_BY_DEFAULT;
                            id = "placeat";
                            kind = "voluptate";
                            name = "Geraldine Wilderman II";
                            permissionGroupId = "blanditiis";
                        }}),
                    }};
                    subaccountId = "eaque";
                }};;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "consequatur";
                key = "atque";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "iure";
                uploadProtocol = "dolorem";
            }};            

            DfareportingUserRolesPatchResponse res = sdk.userRoles.dfareportingUserRolesPatch(req, new DfareportingUserRolesPatchSecurity("occaecati", "voluptate") {{
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

            DfareportingUserRolesUpdateRequest req = new DfareportingUserRolesUpdateRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                userRole = new UserRole() {{
                    accountId = "rerum";
                    defaultUserRole = false;
                    id = "pariatur";
                    kind = "numquam";
                    name = "Vera Hand";
                    parentUserRoleId = "neque";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT;
                            id = "error";
                            kind = "nemo";
                            name = "Marianne Bergnaum";
                            permissionGroupId = "necessitatibus";
                        }}),
                    }};
                    subaccountId = "repellat";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "perspiciatis";
                key = "ullam";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "quisquam";
                uploadProtocol = "adipisci";
            }};            

            DfareportingUserRolesUpdateResponse res = sdk.userRoles.dfareportingUserRolesUpdate(req, new DfareportingUserRolesUpdateSecurity("blanditiis", "omnis") {{
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
