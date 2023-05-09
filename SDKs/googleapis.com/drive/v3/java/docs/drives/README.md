# drives

### Available Operations

* [driveDrivesCreate](#drivedrivescreate) - Creates a shared drive.
* [driveDrivesDelete](#drivedrivesdelete) - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* [driveDrivesGet](#drivedrivesget) - Gets a shared drive's metadata by ID.
* [driveDrivesHide](#drivedriveshide) - Hides a shared drive from the default view.
* [driveDrivesList](#drivedriveslist) - Lists the user's shared drives.
* [driveDrivesUnhide](#drivedrivesunhide) - Restores a shared drive to the default view.
* [driveDrivesUpdate](#drivedrivesupdate) - Updates the metadata for a shared drive.

## driveDrivesCreate

Creates a shared drive.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveDrivesCreateRequest;
import org.openapis.openapi.models.operations.DriveDrivesCreateResponse;
import org.openapis.openapi.models.operations.DriveDrivesCreateSecurity;
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

            DriveDrivesCreateRequest req = new DriveDrivesCreateRequest("qui") {{
                drive = new Drive() {{
                    backgroundImageFile = new DriveBackgroundImageFile() {{
                        id = "9cdb1a84-22bb-4679-9232-2715bf0cbb1e";
                        width = 2174.5;
                        xCoordinate = 834.22;
                        yCoordinate = 7492.55;
                    }};;
                    backgroundImageLink = "quos";
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
                    colorRgb = "tempore";
                    createdTime = OffsetDateTime.parse("2022-11-28T16:49:52.722Z");
                    hidden = false;
                    id = "f3443a11-08e0-4adc-b4b9-21879fce953f";
                    kind = "voluptate";
                    name = "Meghan Wiegand";
                    orgUnitId = "distinctio";
                    restrictions = new DriveRestrictions() {{
                        adminManagedRestrictions = false;
                        copyRequiresWriterPermission = false;
                        domainUsersOnly = false;
                        driveMembersOnly = false;
                        sharingFoldersRequiresOrganizerPermission = false;
                    }};;
                    themeId = "quod";
                }};;
                alt = AltEnum.JSON;
                fields = "odio";
                key = "similique";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "vero";
                userIp = "ducimus";
            }};            

            DriveDrivesCreateResponse res = sdk.drives.driveDrivesCreate(req, new DriveDrivesCreateSecurity("dolore", "quibusdam") {{
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

            DriveDrivesDeleteRequest req = new DriveDrivesDeleteRequest("illum") {{
                allowItemDeletion = false;
                alt = AltEnum.JSON;
                fields = "sequi";
                key = "natus";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "aut";
                useDomainAdminAccess = false;
                userIp = "voluptatibus";
            }};            

            DriveDrivesDeleteResponse res = sdk.drives.driveDrivesDelete(req, new DriveDrivesDeleteSecurity("exercitationem", "nulla") {{
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

            DriveDrivesGetRequest req = new DriveDrivesGetRequest("fugit") {{
                alt = AltEnum.JSON;
                fields = "porro";
                key = "maiores";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "iusto";
                useDomainAdminAccess = false;
                userIp = "eligendi";
            }};            

            DriveDrivesGetResponse res = sdk.drives.driveDrivesGet(req, new DriveDrivesGetSecurity() {{
                option1 = new DriveDrivesGetSecurityOption1("ducimus", "alias") {{
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

            DriveDrivesHideRequest req = new DriveDrivesHideRequest("officia") {{
                alt = AltEnum.JSON;
                fields = "tempora";
                key = "ipsam";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "aspernatur";
                userIp = "vel";
            }};            

            DriveDrivesHideResponse res = sdk.drives.driveDrivesHide(req, new DriveDrivesHideSecurity("possimus", "magnam") {{
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
                fields = "ratione";
                key = "ex";
                oauthToken = "laudantium";
                pageSize = 120657L;
                pageToken = "dolor";
                prettyPrint = false;
                q = "maiores";
                quotaUser = "quasi";
                useDomainAdminAccess = false;
                userIp = "ex";
            }};            

            DriveDrivesListResponse res = sdk.drives.driveDrivesList(req, new DriveDrivesListSecurity() {{
                option1 = new DriveDrivesListSecurityOption1("nulla", "excepturi") {{
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

            DriveDrivesUnhideRequest req = new DriveDrivesUnhideRequest("voluptatibus") {{
                alt = AltEnum.JSON;
                fields = "nostrum";
                key = "sapiente";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "saepe";
                userIp = "ea";
            }};            

            DriveDrivesUnhideResponse res = sdk.drives.driveDrivesUnhide(req, new DriveDrivesUnhideSecurity("impedit", "corporis") {{
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

            DriveDrivesUpdateRequest req = new DriveDrivesUpdateRequest("veniam") {{
                drive = new Drive() {{
                    backgroundImageFile = new DriveBackgroundImageFile() {{
                        id = "6146c3e2-50fb-4008-842e-141aac366c8d";
                        width = 8605.52;
                        xCoordinate = 3790.34;
                        yCoordinate = 7270.44;
                    }};;
                    backgroundImageLink = "quasi";
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
                    colorRgb = "tempora";
                    createdTime = OffsetDateTime.parse("2022-11-14T00:12:37.683Z");
                    hidden = false;
                    id = "90747477-8a7b-4d46-ad28-c10ab3cdca42";
                    kind = "voluptas";
                    name = "Shelly Altenwerth";
                    orgUnitId = "ipsam";
                    restrictions = new DriveRestrictions() {{
                        adminManagedRestrictions = false;
                        copyRequiresWriterPermission = false;
                        domainUsersOnly = false;
                        driveMembersOnly = false;
                        sharingFoldersRequiresOrganizerPermission = false;
                    }};;
                    themeId = "aspernatur";
                }};;
                alt = AltEnum.JSON;
                fields = "sequi";
                key = "quo";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "recusandae";
                useDomainAdminAccess = false;
                userIp = "aperiam";
            }};            

            DriveDrivesUpdateResponse res = sdk.drives.driveDrivesUpdate(req, new DriveDrivesUpdateSecurity("distinctio", "quod") {{
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
