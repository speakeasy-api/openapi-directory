# files

### Available Operations

* [driveFilesCopy](#drivefilescopy) - Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
* [driveFilesCreate](#drivefilescreate) - Creates a file.
* [driveFilesDelete](#drivefilesdelete) - Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
* [driveFilesEmptyTrash](#drivefilesemptytrash) - Permanently deletes all trashed files of a user or shared drive.
* [driveFilesExport](#drivefilesexport) - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* [driveFilesGenerateIds](#drivefilesgenerateids) - Generates a set of file IDs which can be provided in create or copy requests.
* [driveFilesGet](#drivefilesget) - Gets a file's metadata or content by ID.
* [driveFilesList](#drivefileslist) - Lists or searches files.
* [driveFilesListLabels](#drivefileslistlabels) - Lists the labels on a file.
* [driveFilesModifyLabels](#drivefilesmodifylabels) - Modifies the set of labels on a file.
* [driveFilesUpdate](#drivefilesupdate) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* [driveFilesWatch](#drivefileswatch) - Subscribe to changes on a file.

## driveFilesCopy

Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesCopyRequest;
import org.openapis.openapi.models.operations.DriveFilesCopyResponse;
import org.openapis.openapi.models.operations.DriveFilesCopySecurity;
import org.openapis.openapi.models.operations.DriveFilesCopySecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesCopySecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesCopySecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesCopySecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentRestriction;
import org.openapis.openapi.models.shared.FileCapabilities;
import org.openapis.openapi.models.shared.FileContentHints;
import org.openapis.openapi.models.shared.FileContentHintsThumbnail;
import org.openapis.openapi.models.shared.FileImageMediaMetadata;
import org.openapis.openapi.models.shared.FileImageMediaMetadataLocation;
import org.openapis.openapi.models.shared.FileInput;
import org.openapis.openapi.models.shared.FileLabelInfo;
import org.openapis.openapi.models.shared.FileLinkShareMetadata;
import org.openapis.openapi.models.shared.FileShortcutDetails;
import org.openapis.openapi.models.shared.FileVideoMediaMetadata;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.LabelField;
import org.openapis.openapi.models.shared.PermissionInput;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesCopyRequest req = new DriveFilesCopyRequest("dignissimos") {{
                fileInput = new FileInput() {{
                    appProperties = new java.util.HashMap<String, String>() {{
                        put("nihil", "totam");
                    }};
                    capabilities = new FileCapabilities() {{
                        canAcceptOwnership = false;
                        canAddChildren = false;
                        canAddFolderFromAnotherDrive = false;
                        canAddMyDriveParent = false;
                        canChangeCopyRequiresWriterPermission = false;
                        canChangeSecurityUpdateEnabled = false;
                        canChangeViewersCanCopyContent = false;
                        canComment = false;
                        canCopy = false;
                        canDelete = false;
                        canDeleteChildren = false;
                        canDownload = false;
                        canEdit = false;
                        canListChildren = false;
                        canModifyContent = false;
                        canModifyContentRestriction = false;
                        canModifyLabels = false;
                        canMoveChildrenOutOfDrive = false;
                        canMoveChildrenOutOfTeamDrive = false;
                        canMoveChildrenWithinDrive = false;
                        canMoveChildrenWithinTeamDrive = false;
                        canMoveItemIntoTeamDrive = false;
                        canMoveItemOutOfDrive = false;
                        canMoveItemOutOfTeamDrive = false;
                        canMoveItemWithinDrive = false;
                        canMoveItemWithinTeamDrive = false;
                        canMoveTeamDriveItem = false;
                        canReadDrive = false;
                        canReadLabels = false;
                        canReadRevisions = false;
                        canReadTeamDrive = false;
                        canRemoveChildren = false;
                        canRemoveMyDriveParent = false;
                        canRename = false;
                        canShare = false;
                        canTrash = false;
                        canTrashChildren = false;
                        canUntrash = false;
                    }};;
                    contentHints = new FileContentHints() {{
                        indexableText = "accusamus";
                        thumbnail = new FileContentHintsThumbnail() {{
                            image = "aliquam";
                            mimeType = "odio";
                        }};;
                    }};;
                    contentRestrictions = new org.openapis.openapi.models.shared.ContentRestriction[]{{
                        add(new ContentRestriction() {{
                            readOnly = false;
                            reason = "commodi";
                            restrictingUser = new User() {{
                                displayName = "sapiente";
                                emailAddress = "dolores";
                                kind = "deserunt";
                                me = false;
                                permissionId = "molestiae";
                                photoLink = "accusantium";
                            }};
                            restrictionTime = OffsetDateTime.parse("2021-09-16T17:01:25.429Z");
                            type = "quas";
                        }}),
                        add(new ContentRestriction() {{
                            readOnly = false;
                            reason = "praesentium";
                            restrictingUser = new User() {{
                                displayName = "consequuntur";
                                emailAddress = "deleniti";
                                kind = "fugit";
                                me = false;
                                permissionId = "fuga";
                                photoLink = "mollitia";
                            }};
                            restrictionTime = OffsetDateTime.parse("2022-06-18T04:24:04.187Z");
                            type = "explicabo";
                        }}),
                        add(new ContentRestriction() {{
                            readOnly = false;
                            reason = "minima";
                            restrictingUser = new User() {{
                                displayName = "nisi";
                                emailAddress = "fugit";
                                kind = "sapiente";
                                me = false;
                                permissionId = "consequuntur";
                                photoLink = "ratione";
                            }};
                            restrictionTime = OffsetDateTime.parse("2022-02-05T01:06:02.008Z");
                            type = "occaecati";
                        }}),
                    }};
                    copyRequiresWriterPermission = false;
                    createdTime = OffsetDateTime.parse("2022-10-25T15:36:05.649Z");
                    description = "esse";
                    driveId = "eveniet";
                    explicitlyTrashed = false;
                    fileExtension = "accusamus";
                    folderColorRgb = "veritatis";
                    fullFileExtension = "esse";
                    hasAugmentedPermissions = false;
                    hasThumbnail = false;
                    headRevisionId = "quod";
                    iconLink = "nam";
                    id = "e61e6b7b-95bc-40ab-bc20-c4f3789fd871";
                    imageMediaMetadata = new FileImageMediaMetadata() {{
                        aperture = 9518.75;
                        cameraMake = "error";
                        cameraModel = "sint";
                        colorSpace = "pariatur";
                        exposureBias = 8207.67;
                        exposureMode = "quia";
                        exposureTime = 9088.44;
                        flashUsed = false;
                        focalLength = 9924.3;
                        height = 815524;
                        isoSpeed = 85001;
                        lens = "consequuntur";
                        location = new FileImageMediaMetadataLocation() {{
                            altitude = 944.58;
                            latitude = 6288.99;
                            longitude = 6336.08;
                        }};;
                        maxApertureValue = 3984.34;
                        meteringMode = "tenetur";
                        rotation = 62713;
                        sensor = "earum";
                        subjectDistance = 424032;
                        time = "in";
                        whiteBalance = "eius";
                        width = 727697;
                    }};;
                    isAppAuthorized = false;
                    kind = "illum";
                    labelInfo = new FileLabelInfo() {{
                        labels = new org.openapis.openapi.models.shared.Label[]{{
                            add(new Label() {{
                                fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.LabelField>() {{
                                    put("aliquam", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-08-24")),
                                            add(LocalDate.parse("2022-08-23")),
                                            add(LocalDate.parse("2022-12-26")),
                                            add(LocalDate.parse("2022-08-18")),
                                        }};
                                        id = "d68ea19f-1d17-4051-b39d-08086a184039";
                                        integer = new String[]{{
                                            add("impedit"),
                                            add("explicabo"),
                                        }};
                                        kind = "voluptas";
                                        selection = new String[]{{
                                            add("dignissimos"),
                                        }};
                                        text = new String[]{{
                                            add("maiores"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "velit";
                                                emailAddress = "voluptatibus";
                                                kind = "voluptas";
                                                me = false;
                                                permissionId = "asperiores";
                                                photoLink = "aperiam";
                                            }}),
                                            add(new User() {{
                                                displayName = "ea";
                                                emailAddress = "quaerat";
                                                kind = "consequuntur";
                                                me = false;
                                                permissionId = "repellendus";
                                                photoLink = "officia";
                                            }}),
                                            add(new User() {{
                                                displayName = "maxime";
                                                emailAddress = "dignissimos";
                                                kind = "officia";
                                                me = false;
                                                permissionId = "asperiores";
                                                photoLink = "nemo";
                                            }}),
                                        }};
                                        valueType = "quae";
                                    }});
                                }};
                                id = "5cc413aa-63aa-4e8d-a786-4dbb675fd5e6";
                                kind = "aperiam";
                                revisionId = "cum";
                            }}),
                            add(new Label() {{
                                fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.LabelField>() {{
                                    put("in", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2020-07-22")),
                                            add(LocalDate.parse("2022-01-06")),
                                        }};
                                        id = "6fbee41f-3331-47fe-b5b6-0eb1ea426555";
                                        integer = new String[]{{
                                            add("dolorum"),
                                            add("adipisci"),
                                            add("minus"),
                                        }};
                                        kind = "dolores";
                                        selection = new String[]{{
                                            add("in"),
                                            add("dolore"),
                                            add("aliquam"),
                                        }};
                                        text = new String[]{{
                                            add("temporibus"),
                                            add("ullam"),
                                            add("adipisci"),
                                            add("cum"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "quas";
                                                emailAddress = "hic";
                                                kind = "nesciunt";
                                                me = false;
                                                permissionId = "culpa";
                                                photoLink = "corrupti";
                                            }}),
                                            add(new User() {{
                                                displayName = "pariatur";
                                                emailAddress = "totam";
                                                kind = "hic";
                                                me = false;
                                                permissionId = "exercitationem";
                                                photoLink = "nobis";
                                            }}),
                                            add(new User() {{
                                                displayName = "sit";
                                                emailAddress = "rerum";
                                                kind = "sed";
                                                me = false;
                                                permissionId = "reiciendis";
                                                photoLink = "explicabo";
                                            }}),
                                        }};
                                        valueType = "asperiores";
                                    }});
                                }};
                                id = "b7b194a2-76b2-4691-afe1-f08f4294e369";
                                kind = "quos";
                                revisionId = "voluptatibus";
                            }}),
                            add(new Label() {{
                                fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.LabelField>() {{
                                    put("tempora", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2021-10-18")),
                                            add(LocalDate.parse("2022-10-02")),
                                        }};
                                        id = "e8b445e8-0ca5-45ef-920e-457e1858b6a8";
                                        integer = new String[]{{
                                            add("hic"),
                                            add("expedita"),
                                            add("debitis"),
                                        }};
                                        kind = "neque";
                                        selection = new String[]{{
                                            add("nostrum"),
                                            add("officia"),
                                            add("dolorum"),
                                        }};
                                        text = new String[]{{
                                            add("accusamus"),
                                            add("tempora"),
                                            add("atque"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "ut";
                                                emailAddress = "fugiat";
                                                kind = "voluptatem";
                                                me = false;
                                                permissionId = "culpa";
                                                photoLink = "expedita";
                                            }}),
                                        }};
                                        valueType = "magnam";
                                    }});
                                    put("consequatur", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-12-23")),
                                            add(LocalDate.parse("2021-11-19")),
                                        }};
                                        id = "e5186206-5e90-44f3-b119-4b8abf603a79";
                                        integer = new String[]{{
                                            add("provident"),
                                            add("repellendus"),
                                            add("delectus"),
                                            add("voluptates"),
                                        }};
                                        kind = "perferendis";
                                        selection = new String[]{{
                                            add("quidem"),
                                            add("reprehenderit"),
                                            add("facere"),
                                        }};
                                        text = new String[]{{
                                            add("praesentium"),
                                            add("mollitia"),
                                            add("veniam"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "quisquam";
                                                emailAddress = "repudiandae";
                                                kind = "quasi";
                                                me = false;
                                                permissionId = "atque";
                                                photoLink = "reprehenderit";
                                            }}),
                                        }};
                                        valueType = "asperiores";
                                    }});
                                }};
                                id = "86bc173d-689e-4ee9-926f-8d986e881ead";
                                kind = "labore";
                                revisionId = "reiciendis";
                            }}),
                        }};
                    }};;
                    lastModifyingUser = new User() {{
                        displayName = "doloremque";
                        emailAddress = "repudiandae";
                        kind = "dicta";
                        me = false;
                        permissionId = "accusantium";
                        photoLink = "beatae";
                    }};;
                    linkShareMetadata = new FileLinkShareMetadata() {{
                        securityUpdateEligible = false;
                        securityUpdateEnabled = false;
                    }};;
                    md5Checksum = "dolores";
                    mimeType = "enim";
                    modifiedByMe = false;
                    modifiedByMeTime = OffsetDateTime.parse("2022-10-03T00:21:18.046Z");
                    modifiedTime = OffsetDateTime.parse("2021-04-24T18:03:33.752Z");
                    name = "Tricia Cronin";
                    originalFilename = "perspiciatis";
                    ownedByMe = false;
                    owners = new org.openapis.openapi.models.shared.User[]{{
                        add(new User() {{
                            displayName = "adipisci";
                            emailAddress = "eveniet";
                            kind = "occaecati";
                            me = false;
                            permissionId = "consequuntur";
                            photoLink = "fugit";
                        }}),
                        add(new User() {{
                            displayName = "id";
                            emailAddress = "quis";
                            kind = "reprehenderit";
                            me = false;
                            permissionId = "error";
                            photoLink = "illo";
                        }}),
                    }};
                    parents = new String[]{{
                        add("quidem"),
                        add("eveniet"),
                    }};
                    permissionIds = new String[]{{
                        add("vero"),
                    }};
                    permissions = new org.openapis.openapi.models.shared.PermissionInput[]{{
                        add(new PermissionInput() {{
                            allowFileDiscovery = false;
                            deleted = false;
                            displayName = "iure";
                            domain = "ipsa";
                            emailAddress = "totam";
                            expirationTime = OffsetDateTime.parse("2022-07-11T17:54:29.915Z");
                            id = "e2b6e3ab-8845-4f05-97a6-0ff2a54a31e9";
                            kind = "quaerat";
                            pendingOwner = false;
                            photoLink = "molestiae";
                            role = "ex";
                            type = "ut";
                            view = "culpa";
                        }}),
                    }};
                    properties = new java.util.HashMap<String, String>() {{
                        put("debitis", "laudantium");
                    }};
                    quotaBytesUsed = "eum";
                    resourceKey = "nemo";
                    sha1Checksum = "recusandae";
                    sha256Checksum = "esse";
                    shared = false;
                    sharedWithMeTime = OffsetDateTime.parse("2022-04-29T15:23:46.044Z");
                    sharingUser = new User() {{
                        displayName = "eum";
                        emailAddress = "reiciendis";
                        kind = "provident";
                        me = false;
                        permissionId = "aspernatur";
                        photoLink = "ullam";
                    }};;
                    shortcutDetails = new FileShortcutDetails() {{
                        targetId = "quasi";
                        targetMimeType = "animi";
                        targetResourceKey = "nostrum";
                    }};;
                    size = "mollitia";
                    spaces = new String[]{{
                        add("possimus"),
                        add("animi"),
                        add("ex"),
                    }};
                    starred = false;
                    teamDriveId = "aliquid";
                    thumbnailLink = "accusantium";
                    thumbnailVersion = "repellat";
                    trashed = false;
                    trashedTime = OffsetDateTime.parse("2021-12-11T16:15:06.555Z");
                    trashingUser = new User() {{
                        displayName = "in";
                        emailAddress = "nam";
                        kind = "earum";
                        me = false;
                        permissionId = "officia";
                        photoLink = "laborum";
                    }};;
                    version = "placeat";
                    videoMediaMetadata = new FileVideoMediaMetadata() {{
                        durationMillis = "modi";
                        height = 976226;
                        width = 564064;
                    }};;
                    viewedByMe = false;
                    viewedByMeTime = OffsetDateTime.parse("2020-02-18T03:48:05.478Z");
                    viewersCanCopyContent = false;
                    webContentLink = "cumque";
                    webViewLink = "vitae";
                    writersCanShare = false;
                }};;
                alt = AltEnum.JSON;
                enforceSingleParent = false;
                fields = "rerum";
                ignoreDefaultVisibility = false;
                includeLabels = "tempora";
                includePermissionsForView = "quis";
                keepRevisionForever = false;
                key = "inventore";
                oauthToken = "fugit";
                ocrLanguage = "cumque";
                prettyPrint = false;
                quotaUser = "quae";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                userIp = "perferendis";
            }};            

            DriveFilesCopyResponse res = sdk.files.driveFilesCopy(req, new DriveFilesCopySecurity() {{
                option1 = new DriveFilesCopySecurityOption1("velit", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveFilesCreate

Creates a file.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesCreateRequest;
import org.openapis.openapi.models.operations.DriveFilesCreateResponse;
import org.openapis.openapi.models.operations.DriveFilesCreateSecurity;
import org.openapis.openapi.models.operations.DriveFilesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesCreateSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentRestriction;
import org.openapis.openapi.models.shared.FileCapabilities;
import org.openapis.openapi.models.shared.FileContentHints;
import org.openapis.openapi.models.shared.FileContentHintsThumbnail;
import org.openapis.openapi.models.shared.FileImageMediaMetadata;
import org.openapis.openapi.models.shared.FileImageMediaMetadataLocation;
import org.openapis.openapi.models.shared.FileInput;
import org.openapis.openapi.models.shared.FileLabelInfo;
import org.openapis.openapi.models.shared.FileLinkShareMetadata;
import org.openapis.openapi.models.shared.FileShortcutDetails;
import org.openapis.openapi.models.shared.FileVideoMediaMetadata;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.LabelField;
import org.openapis.openapi.models.shared.PermissionInput;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesCreateRequest req = new DriveFilesCreateRequest() {{
                requestBody = "eum".getBytes();
                alt = AltEnum.JSON;
                enforceSingleParent = false;
                fields = "eius";
                ignoreDefaultVisibility = false;
                includeLabels = "rem";
                includePermissionsForView = "at";
                keepRevisionForever = false;
                key = "impedit";
                oauthToken = "eos";
                ocrLanguage = "sapiente";
                prettyPrint = false;
                quotaUser = "eum";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                useContentAsIndexableText = false;
                userIp = "dicta";
            }};            

            DriveFilesCreateResponse res = sdk.files.driveFilesCreate(req, new DriveFilesCreateSecurity() {{
                option1 = new DriveFilesCreateSecurityOption1("minima", "beatae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveFilesDelete

Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesDeleteRequest;
import org.openapis.openapi.models.operations.DriveFilesDeleteResponse;
import org.openapis.openapi.models.operations.DriveFilesDeleteSecurity;
import org.openapis.openapi.models.operations.DriveFilesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesDeleteSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesDeleteRequest req = new DriveFilesDeleteRequest("cupiditate") {{
                alt = AltEnum.JSON;
                enforceSingleParent = false;
                fields = "provident";
                key = "earum";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "hic";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                userIp = "illum";
            }};            

            DriveFilesDeleteResponse res = sdk.files.driveFilesDelete(req, new DriveFilesDeleteSecurity() {{
                option1 = new DriveFilesDeleteSecurityOption1("eaque", "earum") {{
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

## driveFilesEmptyTrash

Permanently deletes all trashed files of a user or shared drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesEmptyTrashRequest;
import org.openapis.openapi.models.operations.DriveFilesEmptyTrashResponse;
import org.openapis.openapi.models.operations.DriveFilesEmptyTrashSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesEmptyTrashRequest req = new DriveFilesEmptyTrashRequest() {{
                alt = AltEnum.JSON;
                driveId = "perspiciatis";
                enforceSingleParent = false;
                fields = "maiores";
                key = "debitis";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "porro";
                userIp = "suscipit";
            }};            

            DriveFilesEmptyTrashResponse res = sdk.files.driveFilesEmptyTrash(req, new DriveFilesEmptyTrashSecurity("dolorem", "fugit") {{
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

## driveFilesExport

Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesExportRequest;
import org.openapis.openapi.models.operations.DriveFilesExportResponse;
import org.openapis.openapi.models.operations.DriveFilesExportSecurity;
import org.openapis.openapi.models.operations.DriveFilesExportSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesExportSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesExportSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesExportRequest req = new DriveFilesExportRequest("cumque", "fuga") {{
                alt = AltEnum.JSON;
                fields = "ratione";
                key = "animi";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "nulla";
                userIp = "consequatur";
            }};            

            DriveFilesExportResponse res = sdk.files.driveFilesExport(req, new DriveFilesExportSecurity() {{
                option1 = new DriveFilesExportSecurityOption1("quasi", "et") {{
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

## driveFilesGenerateIds

Generates a set of file IDs which can be provided in create or copy requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesGenerateIdsRequest;
import org.openapis.openapi.models.operations.DriveFilesGenerateIdsResponse;
import org.openapis.openapi.models.operations.DriveFilesGenerateIdsSecurity;
import org.openapis.openapi.models.operations.DriveFilesGenerateIdsSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesGenerateIdsSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesGenerateIdsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesGenerateIdsRequest req = new DriveFilesGenerateIdsRequest() {{
                alt = AltEnum.JSON;
                count = 497777L;
                fields = "natus";
                key = "occaecati";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "adipisci";
                space = "quasi";
                type = "magni";
                userIp = "doloribus";
            }};            

            DriveFilesGenerateIdsResponse res = sdk.files.driveFilesGenerateIds(req, new DriveFilesGenerateIdsSecurity() {{
                option1 = new DriveFilesGenerateIdsSecurityOption1("nulla", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.generatedIds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveFilesGet

Gets a file's metadata or content by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesGetRequest;
import org.openapis.openapi.models.operations.DriveFilesGetResponse;
import org.openapis.openapi.models.operations.DriveFilesGetSecurity;
import org.openapis.openapi.models.operations.DriveFilesGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesGetSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesGetSecurityOption4;
import org.openapis.openapi.models.operations.DriveFilesGetSecurityOption5;
import org.openapis.openapi.models.operations.DriveFilesGetSecurityOption6;
import org.openapis.openapi.models.operations.DriveFilesGetSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesGetRequest req = new DriveFilesGetRequest("ipsa") {{
                acknowledgeAbuse = false;
                alt = AltEnum.JSON;
                fields = "tempora";
                includeLabels = "nihil";
                includePermissionsForView = "molestiae";
                key = "dicta";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "esse";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                userIp = "praesentium";
            }};            

            DriveFilesGetResponse res = sdk.files.driveFilesGet(req, new DriveFilesGetSecurity() {{
                option1 = new DriveFilesGetSecurityOption1("maiores", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveFilesList

Lists or searches files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesListCorpusEnum;
import org.openapis.openapi.models.operations.DriveFilesListRequest;
import org.openapis.openapi.models.operations.DriveFilesListResponse;
import org.openapis.openapi.models.operations.DriveFilesListSecurity;
import org.openapis.openapi.models.operations.DriveFilesListSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesListSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesListSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesListSecurityOption4;
import org.openapis.openapi.models.operations.DriveFilesListSecurityOption5;
import org.openapis.openapi.models.operations.DriveFilesListSecurityOption6;
import org.openapis.openapi.models.operations.DriveFilesListSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesListRequest req = new DriveFilesListRequest() {{
                alt = AltEnum.JSON;
                corpora = "vel";
                corpus = DriveFilesListCorpusEnum.DOMAIN;
                driveId = "fugiat";
                fields = "doloremque";
                includeItemsFromAllDrives = false;
                includeLabels = "dicta";
                includePermissionsForView = "odio";
                includeTeamDriveItems = false;
                key = "tempora";
                oauthToken = "esse";
                orderBy = "ex";
                pageSize = 235263L;
                pageToken = "aliquid";
                prettyPrint = false;
                q = "ipsa";
                quotaUser = "laborum";
                spaces = "sunt";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                teamDriveId = "nostrum";
                userIp = "fugiat";
            }};            

            DriveFilesListResponse res = sdk.files.driveFilesList(req, new DriveFilesListSecurity() {{
                option1 = new DriveFilesListSecurityOption1("expedita", "aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.fileList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveFilesListLabels

Lists the labels on a file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesListLabelsRequest;
import org.openapis.openapi.models.operations.DriveFilesListLabelsResponse;
import org.openapis.openapi.models.operations.DriveFilesListLabelsSecurity;
import org.openapis.openapi.models.operations.DriveFilesListLabelsSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesListLabelsSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesListLabelsSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesListLabelsSecurityOption4;
import org.openapis.openapi.models.operations.DriveFilesListLabelsSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesListLabelsRequest req = new DriveFilesListLabelsRequest("officia") {{
                alt = AltEnum.JSON;
                fields = "suscipit";
                key = "aliquid";
                maxResults = 21973L;
                oauthToken = "eum";
                pageToken = "voluptas";
                prettyPrint = false;
                quotaUser = "iste";
                userIp = "id";
            }};            

            DriveFilesListLabelsResponse res = sdk.files.driveFilesListLabels(req, new DriveFilesListLabelsSecurity() {{
                option1 = new DriveFilesListLabelsSecurityOption1("ab", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.labelList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveFilesModifyLabels

Modifies the set of labels on a file.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesModifyLabelsRequest;
import org.openapis.openapi.models.operations.DriveFilesModifyLabelsResponse;
import org.openapis.openapi.models.operations.DriveFilesModifyLabelsSecurity;
import org.openapis.openapi.models.operations.DriveFilesModifyLabelsSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesModifyLabelsSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesModifyLabelsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LabelFieldModification;
import org.openapis.openapi.models.shared.LabelModification;
import org.openapis.openapi.models.shared.ModifyLabelsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesModifyLabelsRequest req = new DriveFilesModifyLabelsRequest("possimus") {{
                modifyLabelsRequest = new ModifyLabelsRequest() {{
                    kind = "voluptates";
                    labelModifications = new org.openapis.openapi.models.shared.LabelModification[]{{
                        add(new LabelModification() {{
                            fieldModifications = new org.openapis.openapi.models.shared.LabelFieldModification[]{{
                                add(new LabelFieldModification() {{
                                    fieldId = "libero";
                                    kind = "ad";
                                    setDateValues = new LocalDate[]{{
                                        add(LocalDate.parse("2022-11-21")),
                                        add(LocalDate.parse("2021-10-14")),
                                        add(LocalDate.parse("2021-10-14")),
                                    }};
                                    setIntegerValues = new String[]{{
                                        add("ad"),
                                        add("expedita"),
                                    }};
                                    setSelectionValues = new String[]{{
                                        add("molestias"),
                                    }};
                                    setTextValues = new String[]{{
                                        add("aliquid"),
                                        add("beatae"),
                                        add("voluptatum"),
                                    }};
                                    setUserValues = new String[]{{
                                        add("veritatis"),
                                        add("rerum"),
                                        add("est"),
                                    }};
                                    unsetValues = false;
                                }}),
                                add(new LabelFieldModification() {{
                                    fieldId = "culpa";
                                    kind = "voluptatem";
                                    setDateValues = new LocalDate[]{{
                                        add(LocalDate.parse("2022-09-09")),
                                        add(LocalDate.parse("2021-04-07")),
                                        add(LocalDate.parse("2022-11-30")),
                                        add(LocalDate.parse("2022-06-19")),
                                    }};
                                    setIntegerValues = new String[]{{
                                        add("ex"),
                                        add("sapiente"),
                                        add("rem"),
                                        add("minus"),
                                    }};
                                    setSelectionValues = new String[]{{
                                        add("asperiores"),
                                        add("ratione"),
                                    }};
                                    setTextValues = new String[]{{
                                        add("perferendis"),
                                        add("illum"),
                                    }};
                                    setUserValues = new String[]{{
                                        add("impedit"),
                                        add("quibusdam"),
                                        add("nam"),
                                    }};
                                    unsetValues = false;
                                }}),
                                add(new LabelFieldModification() {{
                                    fieldId = "ipsam";
                                    kind = "culpa";
                                    setDateValues = new LocalDate[]{{
                                        add(LocalDate.parse("2022-12-02")),
                                    }};
                                    setIntegerValues = new String[]{{
                                        add("veritatis"),
                                        add("tempora"),
                                        add("dolor"),
                                    }};
                                    setSelectionValues = new String[]{{
                                        add("architecto"),
                                    }};
                                    setTextValues = new String[]{{
                                        add("modi"),
                                    }};
                                    setUserValues = new String[]{{
                                        add("ab"),
                                    }};
                                    unsetValues = false;
                                }}),
                            }};
                            kind = "laudantium";
                            labelId = "quae";
                            removeLabel = false;
                        }}),
                        add(new LabelModification() {{
                            fieldModifications = new org.openapis.openapi.models.shared.LabelFieldModification[]{{
                                add(new LabelFieldModification() {{
                                    fieldId = "fugiat";
                                    kind = "ipsam";
                                    setDateValues = new LocalDate[]{{
                                        add(LocalDate.parse("2022-06-10")),
                                    }};
                                    setIntegerValues = new String[]{{
                                        add("impedit"),
                                        add("officiis"),
                                        add("esse"),
                                        add("necessitatibus"),
                                    }};
                                    setSelectionValues = new String[]{{
                                        add("veniam"),
                                    }};
                                    setTextValues = new String[]{{
                                        add("expedita"),
                                    }};
                                    setUserValues = new String[]{{
                                        add("vel"),
                                        add("voluptatum"),
                                    }};
                                    unsetValues = false;
                                }}),
                            }};
                            kind = "magnam";
                            labelId = "exercitationem";
                            removeLabel = false;
                        }}),
                        add(new LabelModification() {{
                            fieldModifications = new org.openapis.openapi.models.shared.LabelFieldModification[]{{
                                add(new LabelFieldModification() {{
                                    fieldId = "porro";
                                    kind = "autem";
                                    setDateValues = new LocalDate[]{{
                                        add(LocalDate.parse("2022-01-27")),
                                        add(LocalDate.parse("2022-12-21")),
                                        add(LocalDate.parse("2022-02-08")),
                                        add(LocalDate.parse("2022-08-10")),
                                    }};
                                    setIntegerValues = new String[]{{
                                        add("vero"),
                                        add("est"),
                                        add("harum"),
                                        add("sequi"),
                                    }};
                                    setSelectionValues = new String[]{{
                                        add("repudiandae"),
                                        add("optio"),
                                        add("occaecati"),
                                        add("nemo"),
                                    }};
                                    setTextValues = new String[]{{
                                        add("blanditiis"),
                                        add("officia"),
                                    }};
                                    setUserValues = new String[]{{
                                        add("numquam"),
                                        add("nemo"),
                                    }};
                                    unsetValues = false;
                                }}),
                            }};
                            kind = "quos";
                            labelId = "eius";
                            removeLabel = false;
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "aspernatur";
                key = "ducimus";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "fuga";
                userIp = "laudantium";
            }};            

            DriveFilesModifyLabelsResponse res = sdk.files.driveFilesModifyLabels(req, new DriveFilesModifyLabelsSecurity() {{
                option1 = new DriveFilesModifyLabelsSecurityOption1("incidunt", "quasi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.modifyLabelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveFilesUpdate

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesUpdateRequest;
import org.openapis.openapi.models.operations.DriveFilesUpdateResponse;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurity;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption4;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentRestriction;
import org.openapis.openapi.models.shared.FileCapabilities;
import org.openapis.openapi.models.shared.FileContentHints;
import org.openapis.openapi.models.shared.FileContentHintsThumbnail;
import org.openapis.openapi.models.shared.FileImageMediaMetadata;
import org.openapis.openapi.models.shared.FileImageMediaMetadataLocation;
import org.openapis.openapi.models.shared.FileInput;
import org.openapis.openapi.models.shared.FileLabelInfo;
import org.openapis.openapi.models.shared.FileLinkShareMetadata;
import org.openapis.openapi.models.shared.FileShortcutDetails;
import org.openapis.openapi.models.shared.FileVideoMediaMetadata;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.LabelField;
import org.openapis.openapi.models.shared.PermissionInput;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesUpdateRequest req = new DriveFilesUpdateRequest("rem") {{
                requestBody = "fugiat".getBytes();
                addParents = "dicta";
                alt = AltEnum.JSON;
                enforceSingleParent = false;
                fields = "nisi";
                includeLabels = "consequuntur";
                includePermissionsForView = "consectetur";
                keepRevisionForever = false;
                key = "aperiam";
                oauthToken = "cupiditate";
                ocrLanguage = "reiciendis";
                prettyPrint = false;
                quotaUser = "soluta";
                removeParents = "alias";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                useContentAsIndexableText = false;
                userIp = "omnis";
            }};            

            DriveFilesUpdateResponse res = sdk.files.driveFilesUpdate(req, new DriveFilesUpdateSecurity() {{
                option1 = new DriveFilesUpdateSecurityOption1("eos", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveFilesWatch

Subscribe to changes on a file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesWatchRequest;
import org.openapis.openapi.models.operations.DriveFilesWatchResponse;
import org.openapis.openapi.models.operations.DriveFilesWatchSecurity;
import org.openapis.openapi.models.operations.DriveFilesWatchSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesWatchSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesWatchSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesWatchSecurityOption4;
import org.openapis.openapi.models.operations.DriveFilesWatchSecurityOption5;
import org.openapis.openapi.models.operations.DriveFilesWatchSecurityOption6;
import org.openapis.openapi.models.operations.DriveFilesWatchSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesWatchRequest req = new DriveFilesWatchRequest("iste") {{
                channel = new Channel() {{
                    address = "06897 Wisoky Glens";
                    expiration = "praesentium";
                    id = "c4d86e68-e4be-4056-813f-59da757a59ec";
                    kind = "hic";
                    params = new java.util.HashMap<String, String>() {{
                        put("asperiores", "ex");
                        put("voluptas", "debitis");
                        put("delectus", "quae");
                        put("minus", "fuga");
                    }};
                    payload = false;
                    resourceId = "laborum";
                    resourceUri = "consectetur";
                    token = "velit";
                    type = "atque";
                }};;
                acknowledgeAbuse = false;
                alt = AltEnum.JSON;
                fields = "ipsum";
                includeLabels = "impedit";
                includePermissionsForView = "magni";
                key = "soluta";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "nam";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                userIp = "dolore";
            }};            

            DriveFilesWatchResponse res = sdk.files.driveFilesWatch(req, new DriveFilesWatchSecurity() {{
                option1 = new DriveFilesWatchSecurityOption1("iusto", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
