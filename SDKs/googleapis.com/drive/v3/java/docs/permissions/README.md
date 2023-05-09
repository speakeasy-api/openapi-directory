# permissions

### Available Operations

* [drivePermissionsCreate](#drivepermissionscreate) - Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives.
* [drivePermissionsDelete](#drivepermissionsdelete) - Deletes a permission.
* [drivePermissionsGet](#drivepermissionsget) - Gets a permission by ID.
* [drivePermissionsList](#drivepermissionslist) - Lists a file's or shared drive's permissions.
* [drivePermissionsUpdate](#drivepermissionsupdate) - Updates a permission with patch semantics.

## drivePermissionsCreate

Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePermissionsCreateRequest;
import org.openapis.openapi.models.operations.DrivePermissionsCreateResponse;
import org.openapis.openapi.models.operations.DrivePermissionsCreateSecurity;
import org.openapis.openapi.models.operations.DrivePermissionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DrivePermissionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PermissionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePermissionsCreateRequest req = new DrivePermissionsCreateRequest("sequi") {{
                permissionInput = new PermissionInput() {{
                    allowFileDiscovery = false;
                    deleted = false;
                    displayName = "dignissimos";
                    domain = "neque";
                    emailAddress = "quo";
                    expirationTime = OffsetDateTime.parse("2021-04-24T17:00:12.334Z");
                    id = "72f64d1d-b1f2-4c43-9066-1e96349e1cf9";
                    kind = "itaque";
                    pendingOwner = false;
                    photoLink = "alias";
                    role = "nisi";
                    type = "itaque";
                    view = "velit";
                }};;
                alt = AltEnum.JSON;
                emailMessage = "laborum";
                enforceSingleParent = false;
                fields = "non";
                key = "dolor";
                moveToNewOwnersRoot = false;
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "sit";
                sendNotificationEmail = false;
                supportsAllDrives = false;
                supportsTeamDrives = false;
                transferOwnership = false;
                useDomainAdminAccess = false;
                userIp = "doloremque";
            }};            

            DrivePermissionsCreateResponse res = sdk.permissions.drivePermissionsCreate(req, new DrivePermissionsCreateSecurity() {{
                option1 = new DrivePermissionsCreateSecurityOption1("consequatur", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.permission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivePermissionsDelete

Deletes a permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePermissionsDeleteRequest;
import org.openapis.openapi.models.operations.DrivePermissionsDeleteResponse;
import org.openapis.openapi.models.operations.DrivePermissionsDeleteSecurity;
import org.openapis.openapi.models.operations.DrivePermissionsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DrivePermissionsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePermissionsDeleteRequest req = new DrivePermissionsDeleteRequest("recusandae", "ea") {{
                alt = AltEnum.JSON;
                fields = "quidem";
                key = "voluptas";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "placeat";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                useDomainAdminAccess = false;
                userIp = "perspiciatis";
            }};            

            DrivePermissionsDeleteResponse res = sdk.permissions.drivePermissionsDelete(req, new DrivePermissionsDeleteSecurity() {{
                option1 = new DrivePermissionsDeleteSecurityOption1("expedita", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## drivePermissionsGet

Gets a permission by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePermissionsGetRequest;
import org.openapis.openapi.models.operations.DrivePermissionsGetResponse;
import org.openapis.openapi.models.operations.DrivePermissionsGetSecurity;
import org.openapis.openapi.models.operations.DrivePermissionsGetSecurityOption1;
import org.openapis.openapi.models.operations.DrivePermissionsGetSecurityOption2;
import org.openapis.openapi.models.operations.DrivePermissionsGetSecurityOption3;
import org.openapis.openapi.models.operations.DrivePermissionsGetSecurityOption4;
import org.openapis.openapi.models.operations.DrivePermissionsGetSecurityOption5;
import org.openapis.openapi.models.operations.DrivePermissionsGetSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePermissionsGetRequest req = new DrivePermissionsGetRequest("a", "voluptate") {{
                alt = AltEnum.JSON;
                fields = "ullam";
                key = "unde";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "animi";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                useDomainAdminAccess = false;
                userIp = "impedit";
            }};            

            DrivePermissionsGetResponse res = sdk.permissions.drivePermissionsGet(req, new DrivePermissionsGetSecurity() {{
                option1 = new DrivePermissionsGetSecurityOption1("ipsam", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.permission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivePermissionsList

Lists a file's or shared drive's permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePermissionsListRequest;
import org.openapis.openapi.models.operations.DrivePermissionsListResponse;
import org.openapis.openapi.models.operations.DrivePermissionsListSecurity;
import org.openapis.openapi.models.operations.DrivePermissionsListSecurityOption1;
import org.openapis.openapi.models.operations.DrivePermissionsListSecurityOption2;
import org.openapis.openapi.models.operations.DrivePermissionsListSecurityOption3;
import org.openapis.openapi.models.operations.DrivePermissionsListSecurityOption4;
import org.openapis.openapi.models.operations.DrivePermissionsListSecurityOption5;
import org.openapis.openapi.models.operations.DrivePermissionsListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePermissionsListRequest req = new DrivePermissionsListRequest("est") {{
                alt = AltEnum.JSON;
                fields = "error";
                includePermissionsForView = "esse";
                key = "labore";
                oauthToken = "veritatis";
                pageSize = 874400L;
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "vitae";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                useDomainAdminAccess = false;
                userIp = "inventore";
            }};            

            DrivePermissionsListResponse res = sdk.permissions.drivePermissionsList(req, new DrivePermissionsListSecurity() {{
                option1 = new DrivePermissionsListSecurityOption1("dolorem", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.permissionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivePermissionsUpdate

Updates a permission with patch semantics.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePermissionsUpdateRequest;
import org.openapis.openapi.models.operations.DrivePermissionsUpdateResponse;
import org.openapis.openapi.models.operations.DrivePermissionsUpdateSecurity;
import org.openapis.openapi.models.operations.DrivePermissionsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DrivePermissionsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PermissionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePermissionsUpdateRequest req = new DrivePermissionsUpdateRequest("qui", "iste") {{
                permissionInput = new PermissionInput() {{
                    allowFileDiscovery = false;
                    deleted = false;
                    displayName = "ex";
                    domain = "nemo";
                    emailAddress = "soluta";
                    expirationTime = OffsetDateTime.parse("2021-12-12T08:34:53.101Z");
                    id = "a7202611-435e-4139-9bc2-259b1abda8c0";
                    kind = "iusto";
                    pendingOwner = false;
                    photoLink = "ipsa";
                    role = "voluptates";
                    type = "inventore";
                    view = "aperiam";
                }};;
                alt = AltEnum.JSON;
                fields = "totam";
                key = "dolore";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "distinctio";
                removeExpiration = false;
                supportsAllDrives = false;
                supportsTeamDrives = false;
                transferOwnership = false;
                useDomainAdminAccess = false;
                userIp = "voluptatem";
            }};            

            DrivePermissionsUpdateResponse res = sdk.permissions.drivePermissionsUpdate(req, new DrivePermissionsUpdateSecurity() {{
                option1 = new DrivePermissionsUpdateSecurityOption1("autem", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.permission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
