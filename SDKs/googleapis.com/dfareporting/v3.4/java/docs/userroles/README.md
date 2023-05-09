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

            DfareportingUserRolesDeleteRequest req = new DfareportingUserRolesDeleteRequest("soluta", "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quam";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "consequatur";
                key = "impedit";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "placeat";
                uploadProtocol = "architecto";
            }};            

            DfareportingUserRolesDeleteResponse res = sdk.userRoles.dfareportingUserRolesDelete(req, new DfareportingUserRolesDeleteSecurity("eaque", "voluptatum") {{
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

            DfareportingUserRolesGetRequest req = new DfareportingUserRolesGetRequest("ipsam", "neque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "hic";
                fields = "dolorum";
                key = "aperiam";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nisi";
                uploadProtocol = "officia";
            }};            

            DfareportingUserRolesGetResponse res = sdk.userRoles.dfareportingUserRolesGet(req, new DfareportingUserRolesGetSecurity("eum", "commodi") {{
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

            DfareportingUserRolesInsertRequest req = new DfareportingUserRolesInsertRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                userRole = new UserRole() {{
                    accountId = "labore";
                    defaultUserRole = false;
                    id = "laboriosam";
                    kind = "optio";
                    name = "Simon Kris";
                    parentUserRoleId = "est";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_ALWAYS;
                            id = "cum";
                            kind = "excepturi";
                            name = "Jim Prosacco";
                            permissionGroupId = "qui";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_BY_DEFAULT;
                            id = "sint";
                            kind = "esse";
                            name = "Ben Considine";
                            permissionGroupId = "ad";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_BY_DEFAULT;
                            id = "distinctio";
                            kind = "modi";
                            name = "Erica Nader";
                            permissionGroupId = "odio";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.USER_PROFILE_ONLY;
                            id = "et";
                            kind = "labore";
                            name = "Abel Moen";
                            permissionGroupId = "dolorem";
                        }}),
                    }};
                    subaccountId = "sed";
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "officiis";
                key = "reprehenderit";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "assumenda";
                uploadProtocol = "consequuntur";
            }};            

            DfareportingUserRolesInsertResponse res = sdk.userRoles.dfareportingUserRolesInsert(req, new DfareportingUserRolesInsertSecurity("voluptates", "praesentium") {{
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

            DfareportingUserRolesListRequest req = new DfareportingUserRolesListRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                accountUserRoleOnly = false;
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "autem";
                ids = new String[]{{
                    add("repellendus"),
                    add("provident"),
                    add("aliquam"),
                }};
                key = "praesentium";
                maxResults = 287127L;
                oauthToken = "totam";
                pageToken = "unde";
                prettyPrint = false;
                quotaUser = "dolores";
                searchString = "impedit";
                sortField = DfareportingUserRolesListSortFieldEnum.NAME;
                sortOrder = DfareportingUserRolesListSortOrderEnum.ASCENDING;
                subaccountId = "ullam";
                uploadType = "cum";
                uploadProtocol = "unde";
            }};            

            DfareportingUserRolesListResponse res = sdk.userRoles.dfareportingUserRolesList(req, new DfareportingUserRolesListSecurity("beatae", "magnam") {{
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

            DfareportingUserRolesPatchRequest req = new DfareportingUserRolesPatchRequest("illo", "facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                userRole = new UserRole() {{
                    accountId = "perspiciatis";
                    defaultUserRole = false;
                    id = "ut";
                    kind = "nam";
                    name = "Robin Gusikowski";
                    parentUserRoleId = "at";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.USER_PROFILE_ONLY;
                            id = "doloremque";
                            kind = "nihil";
                            name = "Ricky Marks Jr.";
                            permissionGroupId = "voluptatibus";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT;
                            id = "labore";
                            kind = "enim";
                            name = "Sherri Stroman";
                            permissionGroupId = "dolorum";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT;
                            id = "dignissimos";
                            kind = "vero";
                            name = "Mr. Darryl Casper";
                            permissionGroupId = "nihil";
                        }}),
                    }};
                    subaccountId = "eius";
                }};;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "itaque";
                key = "maiores";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "cumque";
                uploadProtocol = "nemo";
            }};            

            DfareportingUserRolesPatchResponse res = sdk.userRoles.dfareportingUserRolesPatch(req, new DfareportingUserRolesPatchSecurity("deleniti", "harum") {{
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

            DfareportingUserRolesUpdateRequest req = new DfareportingUserRolesUpdateRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                userRole = new UserRole() {{
                    accountId = "cumque";
                    defaultUserRole = false;
                    id = "ea";
                    kind = "tenetur";
                    name = "Miss Kristy Champlin";
                    parentUserRoleId = "voluptatibus";
                    permissions = new org.openapis.openapi.models.shared.UserRolePermission[]{{
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_ALWAYS;
                            id = "accusantium";
                            kind = "voluptates";
                            name = "Alex Pacocha";
                            permissionGroupId = "ipsa";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT;
                            id = "ipsa";
                            kind = "voluptatem";
                            name = "Raymond Emmerich";
                            permissionGroupId = "amet";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_BY_DEFAULT;
                            id = "eos";
                            kind = "quaerat";
                            name = "Julio O'Hara Jr.";
                            permissionGroupId = "dolore";
                        }}),
                        add(new UserRolePermission() {{
                            availability = UserRolePermissionAvailabilityEnum.ACCOUNT_BY_DEFAULT;
                            id = "qui";
                            kind = "molestiae";
                            name = "Jake Haag";
                            permissionGroupId = "explicabo";
                        }}),
                    }};
                    subaccountId = "totam";
                }};;
                accessToken = "aliquam";
                alt = AltEnum.PROTO;
                callback = "doloremque";
                fields = "alias";
                key = "dolores";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "dolores";
                uploadProtocol = "possimus";
            }};            

            DfareportingUserRolesUpdateResponse res = sdk.userRoles.dfareportingUserRolesUpdate(req, new DfareportingUserRolesUpdateSecurity("porro", "illo") {{
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
