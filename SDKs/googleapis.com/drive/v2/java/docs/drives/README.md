# drives

### Available Operations

* [driveDrivesDelete](#drivedrivesdelete) - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* [driveDrivesGet](#drivedrivesget) - Gets a shared drive's metadata by ID.
* [driveDrivesHide](#drivedriveshide) - Hides a shared drive from the default view.
* [driveDrivesInsert](#drivedrivesinsert) - Creates a new shared drive.
* [driveDrivesList](#drivedriveslist) - Lists the user's shared drives.
* [driveDrivesUnhide](#drivedrivesunhide) - Restores a shared drive to the default view.
* [driveDrivesUpdate](#drivedrivesupdate) - Updates the metadata for a shared drive.

## driveDrivesDelete

Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveDrivesDeleteRequest;
import org.openapis.openapi.models.operations.DriveDrivesDeleteResponse;
import org.openapis.openapi.models.operations.DriveDrivesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveDrivesDeleteRequest req = new DriveDrivesDeleteRequest("laborum") {{
                allowItemDeletion = false;
                alt = AltEnum.JSON;
                fields = "totam";
                key = "incidunt";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "dolores";
                useDomainAdminAccess = false;
                userIp = "distinctio";
            }};            

            DriveDrivesDeleteResponse res = sdk.drives.driveDrivesDelete(req, new DriveDrivesDeleteSecurity("facilis", "aliquid") {{
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

## driveDrivesGet

Gets a shared drive's metadata by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveDrivesGetRequest;
import org.openapis.openapi.models.operations.DriveDrivesGetResponse;
import org.openapis.openapi.models.operations.DriveDrivesGetSecurity;
import org.openapis.openapi.models.operations.DriveDrivesGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveDrivesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveDrivesGetRequest req = new DriveDrivesGetRequest("quam") {{
                alt = AltEnum.JSON;
                fields = "molestias";
                key = "temporibus";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "neque";
                useDomainAdminAccess = false;
                userIp = "fugit";
            }};            

            DriveDrivesGetResponse res = sdk.drives.driveDrivesGet(req, new DriveDrivesGetSecurity() {{
                option1 = new DriveDrivesGetSecurityOption1("magni", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.drive != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveDrivesHide

Hides a shared drive from the default view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveDrivesHideRequest;
import org.openapis.openapi.models.operations.DriveDrivesHideResponse;
import org.openapis.openapi.models.operations.DriveDrivesHideSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveDrivesHideRequest req = new DriveDrivesHideRequest("sunt") {{
                alt = AltEnum.JSON;
                fields = "ullam";
                key = "nam";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "voluptatem";
                userIp = "cumque";
            }};            

            DriveDrivesHideResponse res = sdk.drives.driveDrivesHide(req, new DriveDrivesHideSecurity("soluta", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.drive != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveDrivesInsert

Creates a new shared drive.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveDrivesInsertRequest;
import org.openapis.openapi.models.operations.DriveDrivesInsertResponse;
import org.openapis.openapi.models.operations.DriveDrivesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Drive;
import org.openapis.openapi.models.shared.DriveBackgroundImageFile;
import org.openapis.openapi.models.shared.DriveCapabilities;
import org.openapis.openapi.models.shared.DriveRestrictions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveDrivesInsertRequest req = new DriveDrivesInsertRequest("et") {{
                drive = new Drive() {{
                    backgroundImageFile = new DriveBackgroundImageFile() {{
                        id = "e31b8b90-f344-43a1-908e-0adcf4b92187";
                        width = 5804.47;
                        xCoordinate = 9774.96;
                        yCoordinate = 7875.42;
                    }};;
                    backgroundImageLink = "vero";
                    capabilities = new DriveCapabilities() {{
                        canAddChildren = false;
                        canChangeCopyRequiresWriterPermissionRestriction = false;
                        canChangeDomainUsersOnlyRestriction = false;
                        canChangeDriveBackground = false;
                        canChangeDriveMembersOnlyRestriction = false;
                        canChangeSharingFoldersRequiresOrganizerPermissionRestriction = false;
                        canComment = false;
                        canCopy = false;
                        canDeleteChildren = false;
                        canDeleteDrive = false;
                        canDownload = false;
                        canEdit = false;
                        canListChildren = false;
                        canManageMembers = false;
                        canReadRevisions = false;
                        canRename = false;
                        canRenameDrive = false;
                        canResetDriveRestrictions = false;
                        canShare = false;
                        canTrashChildren = false;
                    }};;
                    colorRgb = "omnis";
                    createdDate = OffsetDateTime.parse("2022-10-13T06:47:27.001Z");
                    hidden = false;
                    id = "f73ef7fb-c7ab-4d74-9d39-c0f5d2cff7c7";
                    kind = "alias";
                    name = "Don Hills";
                    orgUnitId = "vel";
                    restrictions = new DriveRestrictions() {{
                        adminManagedRestrictions = false;
                        copyRequiresWriterPermission = false;
                        domainUsersOnly = false;
                        driveMembersOnly = false;
                        sharingFoldersRequiresOrganizerPermission = false;
                    }};;
                    themeId = "possimus";
                }};;
                alt = AltEnum.JSON;
                fields = "magnam";
                key = "ratione";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "laudantium";
                userIp = "dicta";
            }};            

            DriveDrivesInsertResponse res = sdk.drives.driveDrivesInsert(req, new DriveDrivesInsertSecurity("dolor", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.drive != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveDrivesList

Lists the user's shared drives.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveDrivesListRequest;
import org.openapis.openapi.models.operations.DriveDrivesListResponse;
import org.openapis.openapi.models.operations.DriveDrivesListSecurity;
import org.openapis.openapi.models.operations.DriveDrivesListSecurityOption1;
import org.openapis.openapi.models.operations.DriveDrivesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveDrivesListRequest req = new DriveDrivesListRequest() {{
                alt = AltEnum.JSON;
                fields = "quasi";
                key = "ex";
                maxResults = 862192L;
                oauthToken = "excepturi";
                pageToken = "voluptatibus";
                prettyPrint = false;
                q = "nostrum";
                quotaUser = "sapiente";
                useDomainAdminAccess = false;
                userIp = "quisquam";
            }};            

            DriveDrivesListResponse res = sdk.drives.driveDrivesList(req, new DriveDrivesListSecurity() {{
                option1 = new DriveDrivesListSecurityOption1("saepe", "ea") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.driveList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveDrivesUnhide

Restores a shared drive to the default view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveDrivesUnhideRequest;
import org.openapis.openapi.models.operations.DriveDrivesUnhideResponse;
import org.openapis.openapi.models.operations.DriveDrivesUnhideSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveDrivesUnhideRequest req = new DriveDrivesUnhideRequest("impedit") {{
                alt = AltEnum.JSON;
                fields = "corporis";
                key = "veniam";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "inventore";
                userIp = "magnam";
            }};            

            DriveDrivesUnhideResponse res = sdk.drives.driveDrivesUnhide(req, new DriveDrivesUnhideSecurity("ea", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.drive != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveDrivesUpdate

Updates the metadata for a shared drive.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveDrivesUpdateRequest;
import org.openapis.openapi.models.operations.DriveDrivesUpdateResponse;
import org.openapis.openapi.models.operations.DriveDrivesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Drive;
import org.openapis.openapi.models.shared.DriveBackgroundImageFile;
import org.openapis.openapi.models.shared.DriveCapabilities;
import org.openapis.openapi.models.shared.DriveRestrictions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveDrivesUpdateRequest req = new DriveDrivesUpdateRequest("consectetur") {{
                drive = new Drive() {{
                    backgroundImageFile = new DriveBackgroundImageFile() {{
                        id = "e250fb00-8c42-4e14-9aac-366c8dd6b144";
                        width = 1314.82;
                        xCoordinate = 5919.35;
                        yCoordinate = 553.74;
                    }};;
                    backgroundImageLink = "molestiae";
                    capabilities = new DriveCapabilities() {{
                        canAddChildren = false;
                        canChangeCopyRequiresWriterPermissionRestriction = false;
                        canChangeDomainUsersOnlyRestriction = false;
                        canChangeDriveBackground = false;
                        canChangeDriveMembersOnlyRestriction = false;
                        canChangeSharingFoldersRequiresOrganizerPermissionRestriction = false;
                        canComment = false;
                        canCopy = false;
                        canDeleteChildren = false;
                        canDeleteDrive = false;
                        canDownload = false;
                        canEdit = false;
                        canListChildren = false;
                        canManageMembers = false;
                        canReadRevisions = false;
                        canRename = false;
                        canRenameDrive = false;
                        canResetDriveRestrictions = false;
                        canShare = false;
                        canTrashChildren = false;
                    }};;
                    colorRgb = "magnam";
                    createdDate = OffsetDateTime.parse("2022-09-27T07:50:41.350Z");
                    hidden = false;
                    id = "778a7bd4-66d2-48c1-8ab3-cdca4251904e";
                    kind = "ipsam";
                    name = "Emily Satterfield";
                    orgUnitId = "aperiam";
                    restrictions = new DriveRestrictions() {{
                        adminManagedRestrictions = false;
                        copyRequiresWriterPermission = false;
                        domainUsersOnly = false;
                        driveMembersOnly = false;
                        sharingFoldersRequiresOrganizerPermission = false;
                    }};;
                    themeId = "distinctio";
                }};;
                alt = AltEnum.JSON;
                fields = "quod";
                key = "dignissimos";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "nihil";
                useDomainAdminAccess = false;
                userIp = "totam";
            }};            

            DriveDrivesUpdateResponse res = sdk.drives.driveDrivesUpdate(req, new DriveDrivesUpdateSecurity("accusamus", "aliquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.drive != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
