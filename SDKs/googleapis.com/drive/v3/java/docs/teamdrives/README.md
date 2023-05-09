# teamdrives

### Available Operations

* [driveTeamdrivesCreate](#driveteamdrivescreate) - Deprecated use drives.create instead.
* [driveTeamdrivesDelete](#driveteamdrivesdelete) - Deprecated use drives.delete instead.
* [driveTeamdrivesGet](#driveteamdrivesget) - Deprecated use drives.get instead.
* [driveTeamdrivesList](#driveteamdriveslist) - Deprecated use drives.list instead.
* [driveTeamdrivesUpdate](#driveteamdrivesupdate) - Deprecated use drives.update instead

## driveTeamdrivesCreate

Deprecated use drives.create instead.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveTeamdrivesCreateRequest;
import org.openapis.openapi.models.operations.DriveTeamdrivesCreateResponse;
import org.openapis.openapi.models.operations.DriveTeamdrivesCreateSecurity;
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

            DriveTeamdrivesCreateRequest req = new DriveTeamdrivesCreateRequest("nostrum") {{
                teamDrive = new TeamDrive() {{
                    backgroundImageFile = new TeamDriveBackgroundImageFile() {{
                        id = "37a8cd9e-7319-4c17-bd52-5f77b114eeb5";
                        width = 1764.99;
                        xCoordinate = 9700.79;
                        yCoordinate = 9391.61;
                    }};;
                    backgroundImageLink = "reprehenderit";
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
                    colorRgb = "praesentium";
                    createdTime = OffsetDateTime.parse("2022-01-01T01:40:36.755Z");
                    id = "c37814d4-c98e-40c2-bb89-eb75dad636c6";
                    kind = "aut";
                    name = "Lauren Beier";
                    orgUnitId = "praesentium";
                    restrictions = new TeamDriveRestrictions() {{
                        adminManagedRestrictions = false;
                        copyRequiresWriterPermission = false;
                        domainUsersOnly = false;
                        sharingFoldersRequiresOrganizerPermission = false;
                        teamMembersOnly = false;
                    }};;
                    themeId = "quidem";
                }};;
                alt = AltEnum.JSON;
                fields = "cum";
                key = "amet";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "dicta";
                userIp = "laudantium";
            }};            

            DriveTeamdrivesCreateResponse res = sdk.teamdrives.driveTeamdrivesCreate(req, new DriveTeamdrivesCreateSecurity("doloremque", "earum") {{
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

            DriveTeamdrivesDeleteRequest req = new DriveTeamdrivesDeleteRequest("iusto") {{
                alt = AltEnum.JSON;
                fields = "amet";
                key = "provident";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                userIp = "provident";
            }};            

            DriveTeamdrivesDeleteResponse res = sdk.teamdrives.driveTeamdrivesDelete(req, new DriveTeamdrivesDeleteSecurity("repudiandae", "consequatur") {{
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

            DriveTeamdrivesGetRequest req = new DriveTeamdrivesGetRequest("nemo") {{
                alt = AltEnum.JSON;
                fields = "molestiae";
                key = "itaque";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "corrupti";
                useDomainAdminAccess = false;
                userIp = "aperiam";
            }};            

            DriveTeamdrivesGetResponse res = sdk.teamdrives.driveTeamdrivesGet(req, new DriveTeamdrivesGetSecurity() {{
                option1 = new DriveTeamdrivesGetSecurityOption1("sint", "accusamus") {{
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
                fields = "eos";
                key = "totam";
                oauthToken = "dicta";
                pageSize = 30661L;
                pageToken = "velit";
                prettyPrint = false;
                q = "dolor";
                quotaUser = "sunt";
                useDomainAdminAccess = false;
                userIp = "a";
            }};            

            DriveTeamdrivesListResponse res = sdk.teamdrives.driveTeamdrivesList(req, new DriveTeamdrivesListSecurity() {{
                option1 = new DriveTeamdrivesListSecurityOption1("dolor", "occaecati") {{
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

Deprecated use drives.update instead

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

            DriveTeamdrivesUpdateRequest req = new DriveTeamdrivesUpdateRequest("atque") {{
                teamDrive = new TeamDrive() {{
                    backgroundImageFile = new TeamDriveBackgroundImageFile() {{
                        id = "1d4c700b-607f-43c9-bc73-b9da3f2ceda7";
                        width = 8762.85;
                        xCoordinate = 1853.48;
                        yCoordinate = 2323.83;
                    }};;
                    backgroundImageLink = "repellat";
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
                    colorRgb = "explicabo";
                    createdTime = OffsetDateTime.parse("2022-08-26T03:09:04.188Z");
                    id = "7411faf4-b754-44e4-b2e8-02857a5b4046";
                    kind = "nesciunt";
                    name = "Julio Stehr";
                    orgUnitId = "veniam";
                    restrictions = new TeamDriveRestrictions() {{
                        adminManagedRestrictions = false;
                        copyRequiresWriterPermission = false;
                        domainUsersOnly = false;
                        sharingFoldersRequiresOrganizerPermission = false;
                        teamMembersOnly = false;
                    }};;
                    themeId = "reiciendis";
                }};;
                alt = AltEnum.JSON;
                fields = "ab";
                key = "modi";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "aut";
                useDomainAdminAccess = false;
                userIp = "eveniet";
            }};            

            DriveTeamdrivesUpdateResponse res = sdk.teamdrives.driveTeamdrivesUpdate(req, new DriveTeamdrivesUpdateSecurity("odio", "commodi") {{
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
