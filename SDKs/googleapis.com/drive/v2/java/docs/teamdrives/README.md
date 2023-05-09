# teamdrives

### Available Operations

* [driveTeamdrivesDelete](#driveteamdrivesdelete) - Deprecated use drives.delete instead.
* [driveTeamdrivesGet](#driveteamdrivesget) - Deprecated use drives.get instead.
* [driveTeamdrivesInsert](#driveteamdrivesinsert) - Deprecated use drives.insert instead.
* [driveTeamdrivesList](#driveteamdriveslist) - Deprecated use drives.list instead.
* [driveTeamdrivesUpdate](#driveteamdrivesupdate) - Deprecated use drives.update instead.

## driveTeamdrivesDelete

Deprecated use drives.delete instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveTeamdrivesDeleteRequest;
import org.openapis.openapi.models.operations.DriveTeamdrivesDeleteResponse;
import org.openapis.openapi.models.operations.DriveTeamdrivesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveTeamdrivesDeleteRequest req = new DriveTeamdrivesDeleteRequest("assumenda") {{
                alt = AltEnum.JSON;
                fields = "provident";
                key = "facere";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "inventore";
                userIp = "voluptatibus";
            }};            

            DriveTeamdrivesDeleteResponse res = sdk.teamdrives.driveTeamdrivesDelete(req, new DriveTeamdrivesDeleteSecurity("unde", "deserunt") {{
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

## driveTeamdrivesGet

Deprecated use drives.get instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveTeamdrivesGetRequest;
import org.openapis.openapi.models.operations.DriveTeamdrivesGetResponse;
import org.openapis.openapi.models.operations.DriveTeamdrivesGetSecurity;
import org.openapis.openapi.models.operations.DriveTeamdrivesGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveTeamdrivesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveTeamdrivesGetRequest req = new DriveTeamdrivesGetRequest("repellendus") {{
                alt = AltEnum.JSON;
                fields = "consequatur";
                key = "adipisci";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "optio";
                useDomainAdminAccess = false;
                userIp = "tempora";
            }};            

            DriveTeamdrivesGetResponse res = sdk.teamdrives.driveTeamdrivesGet(req, new DriveTeamdrivesGetSecurity() {{
                option1 = new DriveTeamdrivesGetSecurityOption1("debitis", "cumque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.teamDrive != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveTeamdrivesInsert

Deprecated use drives.insert instead.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveTeamdrivesInsertRequest;
import org.openapis.openapi.models.operations.DriveTeamdrivesInsertResponse;
import org.openapis.openapi.models.operations.DriveTeamdrivesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TeamDrive;
import org.openapis.openapi.models.shared.TeamDriveBackgroundImageFile;
import org.openapis.openapi.models.shared.TeamDriveCapabilities;
import org.openapis.openapi.models.shared.TeamDriveRestrictions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveTeamdrivesInsertRequest req = new DriveTeamdrivesInsertRequest("maxime") {{
                teamDrive = new TeamDrive() {{
                    backgroundImageFile = new TeamDriveBackgroundImageFile() {{
                        id = "11a08364-2906-48b8-902a-55e7f73bc845";
                        width = 8871.32;
                        xCoordinate = 1964.97;
                        yCoordinate = 1655.45;
                    }};;
                    backgroundImageLink = "voluptatem";
                    capabilities = new TeamDriveCapabilities() {{
                        canAddChildren = false;
                        canChangeCopyRequiresWriterPermissionRestriction = false;
                        canChangeDomainUsersOnlyRestriction = false;
                        canChangeSharingFoldersRequiresOrganizerPermissionRestriction = false;
                        canChangeTeamDriveBackground = false;
                        canChangeTeamMembersOnlyRestriction = false;
                        canComment = false;
                        canCopy = false;
                        canDeleteChildren = false;
                        canDeleteTeamDrive = false;
                        canDownload = false;
                        canEdit = false;
                        canListChildren = false;
                        canManageMembers = false;
                        canReadRevisions = false;
                        canRemoveChildren = false;
                        canRename = false;
                        canRenameTeamDrive = false;
                        canResetTeamDriveRestrictions = false;
                        canShare = false;
                        canTrashChildren = false;
                    }};;
                    colorRgb = "est";
                    createdDate = OffsetDateTime.parse("2022-12-01T06:18:32.721Z");
                    id = "9f4badf9-47c9-4a86-bbc4-2426665816dd";
                    kind = "impedit";
                    name = "Ivan Volkman";
                    orgUnitId = "illo";
                    restrictions = new TeamDriveRestrictions() {{
                        adminManagedRestrictions = false;
                        copyRequiresWriterPermission = false;
                        domainUsersOnly = false;
                        sharingFoldersRequiresOrganizerPermission = false;
                        teamMembersOnly = false;
                    }};;
                    themeId = "doloribus";
                }};;
                alt = AltEnum.JSON;
                fields = "cumque";
                key = "expedita";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "cumque";
                userIp = "ipsam";
            }};            

            DriveTeamdrivesInsertResponse res = sdk.teamdrives.driveTeamdrivesInsert(req, new DriveTeamdrivesInsertSecurity("occaecati", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.teamDrive != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveTeamdrivesList

Deprecated use drives.list instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveTeamdrivesListRequest;
import org.openapis.openapi.models.operations.DriveTeamdrivesListResponse;
import org.openapis.openapi.models.operations.DriveTeamdrivesListSecurity;
import org.openapis.openapi.models.operations.DriveTeamdrivesListSecurityOption1;
import org.openapis.openapi.models.operations.DriveTeamdrivesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveTeamdrivesListRequest req = new DriveTeamdrivesListRequest() {{
                alt = AltEnum.JSON;
                fields = "accusamus";
                key = "quisquam";
                maxResults = 97922L;
                oauthToken = "fugit";
                pageToken = "quo";
                prettyPrint = false;
                q = "temporibus";
                quotaUser = "mollitia";
                useDomainAdminAccess = false;
                userIp = "id";
            }};            

            DriveTeamdrivesListResponse res = sdk.teamdrives.driveTeamdrivesList(req, new DriveTeamdrivesListSecurity() {{
                option1 = new DriveTeamdrivesListSecurityOption1("quibusdam", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.teamDriveList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveTeamdrivesUpdate

Deprecated use drives.update instead.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveTeamdrivesUpdateRequest;
import org.openapis.openapi.models.operations.DriveTeamdrivesUpdateResponse;
import org.openapis.openapi.models.operations.DriveTeamdrivesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TeamDrive;
import org.openapis.openapi.models.shared.TeamDriveBackgroundImageFile;
import org.openapis.openapi.models.shared.TeamDriveCapabilities;
import org.openapis.openapi.models.shared.TeamDriveRestrictions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveTeamdrivesUpdateRequest req = new DriveTeamdrivesUpdateRequest("accusamus") {{
                teamDrive = new TeamDrive() {{
                    backgroundImageFile = new TeamDriveBackgroundImageFile() {{
                        id = "c7afedbd-80df-4448-a47f-9390c5888098";
                        width = 2184.13;
                        xCoordinate = 8742.83;
                        yCoordinate = 6834.9;
                    }};;
                    backgroundImageLink = "facilis";
                    capabilities = new TeamDriveCapabilities() {{
                        canAddChildren = false;
                        canChangeCopyRequiresWriterPermissionRestriction = false;
                        canChangeDomainUsersOnlyRestriction = false;
                        canChangeSharingFoldersRequiresOrganizerPermissionRestriction = false;
                        canChangeTeamDriveBackground = false;
                        canChangeTeamMembersOnlyRestriction = false;
                        canComment = false;
                        canCopy = false;
                        canDeleteChildren = false;
                        canDeleteTeamDrive = false;
                        canDownload = false;
                        canEdit = false;
                        canListChildren = false;
                        canManageMembers = false;
                        canReadRevisions = false;
                        canRemoveChildren = false;
                        canRename = false;
                        canRenameTeamDrive = false;
                        canResetTeamDriveRestrictions = false;
                        canShare = false;
                        canTrashChildren = false;
                    }};;
                    colorRgb = "maiores";
                    createdDate = OffsetDateTime.parse("2021-02-23T22:24:32.569Z");
                    id = "f3ffdd9f-7f07-49af-8d35-724cdb0f4d28";
                    kind = "quasi";
                    name = "Irma Kub";
                    orgUnitId = "iure";
                    restrictions = new TeamDriveRestrictions() {{
                        adminManagedRestrictions = false;
                        copyRequiresWriterPermission = false;
                        domainUsersOnly = false;
                        sharingFoldersRequiresOrganizerPermission = false;
                        teamMembersOnly = false;
                    }};;
                    themeId = "laudantium";
                }};;
                alt = AltEnum.JSON;
                fields = "modi";
                key = "magnam";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "nulla";
                useDomainAdminAccess = false;
                userIp = "repudiandae";
            }};            

            DriveTeamdrivesUpdateResponse res = sdk.teamdrives.driveTeamdrivesUpdate(req, new DriveTeamdrivesUpdateSecurity("quibusdam", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.teamDrive != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
