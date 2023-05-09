# permissions

### Available Operations

* [drivePermissionsDelete](#drivepermissionsdelete) - Deletes a permission from a file or shared drive.
* [drivePermissionsGet](#drivepermissionsget) - Gets a permission by ID.
* [drivePermissionsGetIdForEmail](#drivepermissionsgetidforemail) - Returns the permission ID for an email address.
* [drivePermissionsInsert](#drivepermissionsinsert) - Inserts a permission for a file or shared drive.
* [drivePermissionsList](#drivepermissionslist) - Lists a file's or shared drive's permissions.
* [drivePermissionsPatch](#drivepermissionspatch) - Updates a permission using patch semantics.
* [drivePermissionsUpdate](#drivepermissionsupdate) - Updates a permission.

## drivePermissionsDelete

Deletes a permission from a file or shared drive.

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

            DrivePermissionsDeleteRequest req = new DrivePermissionsDeleteRequest("consequatur", "esse") {{
                alt = AltEnum.JSON;
                fields = "debitis";
                key = "facere";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "cumque";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                useDomainAdminAccess = false;
                userIp = "aliquam";
            }};            

            DrivePermissionsDeleteResponse res = sdk.permissions.drivePermissionsDelete(req, new DrivePermissionsDeleteSecurity() {{
                option1 = new DrivePermissionsDeleteSecurityOption1("dolorum", "deserunt") {{
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

            DrivePermissionsGetRequest req = new DrivePermissionsGetRequest("ad", "reiciendis") {{
                alt = AltEnum.JSON;
                fields = "sequi";
                key = "porro";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "nobis";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                useDomainAdminAccess = false;
                userIp = "quibusdam";
            }};            

            DrivePermissionsGetResponse res = sdk.permissions.drivePermissionsGet(req, new DrivePermissionsGetSecurity() {{
                option1 = new DrivePermissionsGetSecurityOption1("omnis", "aut") {{
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

## drivePermissionsGetIdForEmail

Returns the permission ID for an email address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailRequest;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailResponse;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailSecurity;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailSecurityOption1;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailSecurityOption2;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailSecurityOption3;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailSecurityOption4;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailSecurityOption5;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailSecurityOption6;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailSecurityOption7;
import org.openapis.openapi.models.operations.DrivePermissionsGetIdForEmailSecurityOption8;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePermissionsGetIdForEmailRequest req = new DrivePermissionsGetIdForEmailRequest("ipsam") {{
                alt = AltEnum.JSON;
                fields = "officia";
                key = "cupiditate";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "quia";
                userIp = "necessitatibus";
            }};            

            DrivePermissionsGetIdForEmailResponse res = sdk.permissions.drivePermissionsGetIdForEmail(req, new DrivePermissionsGetIdForEmailSecurity() {{
                option1 = new DrivePermissionsGetIdForEmailSecurityOption1("accusantium", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.permissionId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivePermissionsInsert

Inserts a permission for a file or shared drive.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePermissionsInsertRequest;
import org.openapis.openapi.models.operations.DrivePermissionsInsertResponse;
import org.openapis.openapi.models.operations.DrivePermissionsInsertSecurity;
import org.openapis.openapi.models.operations.DrivePermissionsInsertSecurityOption1;
import org.openapis.openapi.models.operations.DrivePermissionsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PermissionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePermissionsInsertRequest req = new DrivePermissionsInsertRequest("nisi") {{
                permissionInput = new PermissionInput() {{
                    additionalRoles = new String[]{{
                        add("quia"),
                        add("laudantium"),
                    }};
                    authKey = "sed";
                    deleted = false;
                    domain = "odit";
                    emailAddress = "iusto";
                    etag = "expedita";
                    expirationDate = OffsetDateTime.parse("2022-03-03T21:01:37.637Z");
                    id = "309470bf-7a4f-4a87-8f53-5a6fae54ebf6";
                    kind = "voluptatem";
                    name = "Dr. Johnny Cassin Sr.";
                    pendingOwner = false;
                    photoLink = "amet";
                    role = "rerum";
                    selfLink = "in";
                    type = "nostrum";
                    value = "temporibus";
                    view = "ratione";
                    withLink = false;
                }};;
                alt = AltEnum.JSON;
                emailMessage = "dolor";
                enforceSingleParent = false;
                fields = "nisi";
                key = "dignissimos";
                moveToNewOwnersRoot = false;
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "itaque";
                sendNotificationEmails = false;
                supportsAllDrives = false;
                supportsTeamDrives = false;
                useDomainAdminAccess = false;
                userIp = "vitae";
            }};            

            DrivePermissionsInsertResponse res = sdk.permissions.drivePermissionsInsert(req, new DrivePermissionsInsertSecurity() {{
                option1 = new DrivePermissionsInsertSecurityOption1("est", "accusantium") {{
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

            DrivePermissionsListRequest req = new DrivePermissionsListRequest("quod") {{
                alt = AltEnum.JSON;
                fields = "minus";
                includePermissionsForView = "quos";
                key = "possimus";
                maxResults = 980467L;
                oauthToken = "odio";
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "sapiente";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                useDomainAdminAccess = false;
                userIp = "aperiam";
            }};            

            DrivePermissionsListResponse res = sdk.permissions.drivePermissionsList(req, new DrivePermissionsListSecurity() {{
                option1 = new DrivePermissionsListSecurityOption1("similique", "nesciunt") {{
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

## drivePermissionsPatch

Updates a permission using patch semantics.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivePermissionsPatchRequest;
import org.openapis.openapi.models.operations.DrivePermissionsPatchResponse;
import org.openapis.openapi.models.operations.DrivePermissionsPatchSecurity;
import org.openapis.openapi.models.operations.DrivePermissionsPatchSecurityOption1;
import org.openapis.openapi.models.operations.DrivePermissionsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PermissionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivePermissionsPatchRequest req = new DrivePermissionsPatchRequest("provident", "ex") {{
                permissionInput = new PermissionInput() {{
                    additionalRoles = new String[]{{
                        add("unde"),
                        add("alias"),
                        add("impedit"),
                        add("sequi"),
                    }};
                    authKey = "commodi";
                    deleted = false;
                    domain = "labore";
                    emailAddress = "expedita";
                    etag = "in";
                    expirationDate = OffsetDateTime.parse("2022-08-18T10:38:56.527Z");
                    id = "5dfbace1-88b1-4c4e-a2c8-c6ce611feeb1";
                    kind = "quo";
                    name = "Alexandra Raynor";
                    pendingOwner = false;
                    photoLink = "suscipit";
                    role = "saepe";
                    selfLink = "earum";
                    type = "quod";
                    value = "nihil";
                    view = "quaerat";
                    withLink = false;
                }};;
                alt = AltEnum.JSON;
                fields = "ipsum";
                key = "ducimus";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "rerum";
                removeExpiration = false;
                supportsAllDrives = false;
                supportsTeamDrives = false;
                transferOwnership = false;
                useDomainAdminAccess = false;
                userIp = "deserunt";
            }};            

            DrivePermissionsPatchResponse res = sdk.permissions.drivePermissionsPatch(req, new DrivePermissionsPatchSecurity() {{
                option1 = new DrivePermissionsPatchSecurityOption1("odit", "ad") {{
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

## drivePermissionsUpdate

Updates a permission.

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

            DrivePermissionsUpdateRequest req = new DrivePermissionsUpdateRequest("sequi", "beatae") {{
                permissionInput = new PermissionInput() {{
                    additionalRoles = new String[]{{
                        add("esse"),
                        add("magnam"),
                    }};
                    authKey = "odio";
                    deleted = false;
                    domain = "nulla";
                    emailAddress = "impedit";
                    etag = "cupiditate";
                    expirationDate = OffsetDateTime.parse("2022-08-26T17:41:33.772Z");
                    id = "ad2caf5d-d672-43dc-8f5a-e2f3a6b70087";
                    kind = "corrupti";
                    name = "Mrs. Dolores Kertzmann";
                    pendingOwner = false;
                    photoLink = "sapiente";
                    role = "corporis";
                    selfLink = "est";
                    type = "iure";
                    value = "quisquam";
                    view = "provident";
                    withLink = false;
                }};;
                alt = AltEnum.JSON;
                fields = "laudantium";
                key = "nam";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "enim";
                removeExpiration = false;
                supportsAllDrives = false;
                supportsTeamDrives = false;
                transferOwnership = false;
                useDomainAdminAccess = false;
                userIp = "ipsam";
            }};            

            DrivePermissionsUpdateResponse res = sdk.permissions.drivePermissionsUpdate(req, new DrivePermissionsUpdateSecurity() {{
                option1 = new DrivePermissionsUpdateSecurityOption1("minima", "tempora") {{
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
