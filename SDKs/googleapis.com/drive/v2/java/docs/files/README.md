# files

### Available Operations

* [driveFilesCopy](#drivefilescopy) - Creates a copy of the specified file. Folders cannot be copied.
* [driveFilesDelete](#drivefilesdelete) - Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
* [driveFilesEmptyTrash](#drivefilesemptytrash) - Permanently deletes all trashed files of a user or shared drive.
* [driveFilesExport](#drivefilesexport) - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* [driveFilesGenerateIds](#drivefilesgenerateids) - Generates a set of file IDs which can be provided in insert or copy requests.
* [driveFilesGet](#drivefilesget) - Gets a file's metadata or content by ID.
* [driveFilesInsert](#drivefilesinsert) - Insert a new file.
* [driveFilesList](#drivefileslist) - Lists the user's files.
* [driveFilesListLabels](#drivefileslistlabels) - Lists the labels on a file.
* [driveFilesModifyLabels](#drivefilesmodifylabels) - Modifies the set of labels on a file.
* [driveFilesPatch](#drivefilespatch) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* [driveFilesTouch](#drivefilestouch) - Set the file's updated time to the current server time.
* [driveFilesTrash](#drivefilestrash) - Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
* [driveFilesUntrash](#drivefilesuntrash) - Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
* [driveFilesUpdate](#drivefilesupdate) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
* [driveFilesWatch](#drivefileswatch) - Subscribe to changes on a file.

## driveFilesCopy

Creates a copy of the specified file. Folders cannot be copied.

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
import org.openapis.openapi.models.operations.DriveFilesCopySecurityOption5;
import org.openapis.openapi.models.operations.DriveFilesCopyVisibilityEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentRestriction;
import org.openapis.openapi.models.shared.FileCapabilities;
import org.openapis.openapi.models.shared.FileImageMediaMetadata;
import org.openapis.openapi.models.shared.FileImageMediaMetadataLocation;
import org.openapis.openapi.models.shared.FileIndexableText;
import org.openapis.openapi.models.shared.FileInput;
import org.openapis.openapi.models.shared.FileLabelInfo;
import org.openapis.openapi.models.shared.FileLabels;
import org.openapis.openapi.models.shared.FileLinkShareMetadata;
import org.openapis.openapi.models.shared.FileShortcutDetails;
import org.openapis.openapi.models.shared.FileThumbnail;
import org.openapis.openapi.models.shared.FileVideoMediaMetadata;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.LabelField;
import org.openapis.openapi.models.shared.ParentReference;
import org.openapis.openapi.models.shared.PermissionInput;
import org.openapis.openapi.models.shared.Property;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesCopyRequest req = new DriveFilesCopyRequest("odio") {{
                fileInput = new FileInput() {{
                    alternateLink = "occaecati";
                    appDataContents = false;
                    canComment = false;
                    canReadRevisions = false;
                    capabilities = new FileCapabilities() {{
                        canAcceptOwnership = false;
                        canAddChildren = false;
                        canAddFolderFromAnotherDrive = false;
                        canAddMyDriveParent = false;
                        canChangeCopyRequiresWriterPermission = false;
                        canChangeRestrictedDownload = false;
                        canChangeSecurityUpdateEnabled = false;
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
                    contentRestrictions = new org.openapis.openapi.models.shared.ContentRestriction[]{{
                        add(new ContentRestriction() {{
                            readOnly = false;
                            reason = "sapiente";
                            restrictingUser = new User() {{
                                displayName = "dolores";
                                emailAddress = "deserunt";
                                isAuthenticatedUser = false;
                                kind = "molestiae";
                                permissionId = "accusantium";
                                picture = new UserPicture() {{
                                    url = "porro";
                                }};
                            }};
                            restrictionDate = OffsetDateTime.parse("2022-06-11T21:40:41.165Z");
                            type = "praesentium";
                        }}),
                        add(new ContentRestriction() {{
                            readOnly = false;
                            reason = "consequuntur";
                            restrictingUser = new User() {{
                                displayName = "deleniti";
                                emailAddress = "fugit";
                                isAuthenticatedUser = false;
                                kind = "fuga";
                                permissionId = "mollitia";
                                picture = new UserPicture() {{
                                    url = "incidunt";
                                }};
                            }};
                            restrictionDate = OffsetDateTime.parse("2022-09-28T22:21:45.403Z");
                            type = "minima";
                        }}),
                    }};
                    copyRequiresWriterPermission = false;
                    copyable = false;
                    createdDate = OffsetDateTime.parse("2022-11-08T08:09:29.073Z");
                    defaultOpenWithLink = "sapiente";
                    description = "consequuntur";
                    downloadUrl = "ratione";
                    driveId = "explicabo";
                    editable = false;
                    embedLink = "saepe";
                    etag = "occaecati";
                    explicitlyTrashed = false;
                    fileExtension = "atque";
                    fileSize = "et";
                    folderColorRgb = "esse";
                    fullFileExtension = "eveniet";
                    hasAugmentedPermissions = false;
                    hasThumbnail = false;
                    headRevisionId = "accusamus";
                    iconLink = "veritatis";
                    id = "7cbe61e6-b7b9-45bc-8ab3-c20c4f3789fd";
                    imageMediaMetadata = new FileImageMediaMetadata() {{
                        aperture = 5578.11;
                        cameraMake = "esse";
                        cameraModel = "quasi";
                        colorSpace = "a";
                        date = "error";
                        exposureBias = 5757.51;
                        exposureMode = "pariatur";
                        exposureTime = 8207.67;
                        flashUsed = false;
                        focalLength = 1576.32;
                        height = 908844;
                        isoSpeed = 992430;
                        lens = "facere";
                        location = new FileImageMediaMetadataLocation() {{
                            altitude = 850.01;
                            latitude = 1594.14;
                            longitude = 944.58;
                        }};;
                        maxApertureValue = 6288.99;
                        meteringMode = "culpa";
                        rotation = 398434;
                        sensor = "tenetur";
                        subjectDistance = 62713;
                        whiteBalance = "earum";
                        width = 424032;
                    }};;
                    indexableText = new FileIndexableText() {{
                        text = "in";
                    }};;
                    isAppAuthorized = false;
                    kind = "eius";
                    labelInfo = new FileLabelInfo() {{
                        labels = new org.openapis.openapi.models.shared.Label[]{{
                            add(new Label() {{
                                fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.LabelField>() {{
                                    put("soluta", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-01-15")),
                                        }};
                                        id = "15756082-d68e-4a19-b1d1-7051339d0808";
                                        integer = new String[]{{
                                            add("mollitia"),
                                            add("ab"),
                                        }};
                                        kind = "corrupti";
                                        selection = new String[]{{
                                            add("voluptatem"),
                                            add("dolor"),
                                        }};
                                        text = new String[]{{
                                            add("numquam"),
                                            add("impedit"),
                                            add("explicabo"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "aut";
                                                emailAddress = "dignissimos";
                                                isAuthenticatedUser = false;
                                                kind = "dicta";
                                                permissionId = "maiores";
                                                picture = new UserPicture() {{
                                                    url = "natus";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "velit";
                                                emailAddress = "voluptatibus";
                                                isAuthenticatedUser = false;
                                                kind = "voluptas";
                                                permissionId = "asperiores";
                                                picture = new UserPicture() {{
                                                    url = "aperiam";
                                                }};
                                            }}),
                                        }};
                                        valueType = "ea";
                                    }});
                                    put("quaerat", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2021-01-31")),
                                        }};
                                        id = "c7af515c-c413-4aa6-baae-8d67864dbb67";
                                        integer = new String[]{{
                                            add("reiciendis"),
                                            add("assumenda"),
                                        }};
                                        kind = "nemo";
                                        selection = new String[]{{
                                            add("aliquid"),
                                            add("aperiam"),
                                            add("cum"),
                                            add("consectetur"),
                                        }};
                                        text = new String[]{{
                                            add("exercitationem"),
                                            add("earum"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "numquam";
                                                emailAddress = "doloribus";
                                                isAuthenticatedUser = false;
                                                kind = "suscipit";
                                                permissionId = "reiciendis";
                                                picture = new UserPicture() {{
                                                    url = "quidem";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "saepe";
                                                emailAddress = "necessitatibus";
                                                isAuthenticatedUser = false;
                                                kind = "dolore";
                                                permissionId = "sunt";
                                                picture = new UserPicture() {{
                                                    url = "asperiores";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "adipisci";
                                                emailAddress = "non";
                                                isAuthenticatedUser = false;
                                                kind = "amet";
                                                permissionId = "beatae";
                                                picture = new UserPicture() {{
                                                    url = "dignissimos";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "a";
                                                emailAddress = "debitis";
                                                isAuthenticatedUser = false;
                                                kind = "consectetur";
                                                permissionId = "corporis";
                                                picture = new UserPicture() {{
                                                    url = "harum";
                                                }};
                                            }}),
                                        }};
                                        valueType = "laboriosam";
                                    }});
                                    put("ipsa", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-10-09")),
                                            add(LocalDate.parse("2021-02-08")),
                                            add(LocalDate.parse("2022-11-13")),
                                            add(LocalDate.parse("2022-08-17")),
                                        }};
                                        id = "55ba3c28-744e-4d53-b88f-3a8d8f5c0b2f";
                                        integer = new String[]{{
                                            add("asperiores"),
                                        }};
                                        kind = "facilis";
                                        selection = new String[]{{
                                            add("expedita"),
                                            add("ab"),
                                        }};
                                        text = new String[]{{
                                            add("dolore"),
                                            add("laborum"),
                                            add("sed"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "commodi";
                                                emailAddress = "quidem";
                                                isAuthenticatedUser = false;
                                                kind = "explicabo";
                                                permissionId = "voluptas";
                                                picture = new UserPicture() {{
                                                    url = "unde";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "architecto";
                                                emailAddress = "suscipit";
                                                isAuthenticatedUser = false;
                                                kind = "sapiente";
                                                permissionId = "debitis";
                                                picture = new UserPicture() {{
                                                    url = "illo";
                                                }};
                                            }}),
                                        }};
                                        valueType = "reiciendis";
                                    }});
                                    put("perferendis", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-03-06")),
                                            add(LocalDate.parse("2022-05-29")),
                                            add(LocalDate.parse("2022-02-07")),
                                        }};
                                        id = "3698f447-f603-4e8b-845e-80ca55efd20e";
                                        integer = new String[]{{
                                            add("veniam"),
                                            add("in"),
                                        }};
                                        kind = "officiis";
                                        selection = new String[]{{
                                            add("laudantium"),
                                        }};
                                        text = new String[]{{
                                            add("praesentium"),
                                            add("cum"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "dolorum";
                                                emailAddress = "voluptatum";
                                                isAuthenticatedUser = false;
                                                kind = "error";
                                                permissionId = "hic";
                                                picture = new UserPicture() {{
                                                    url = "expedita";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "debitis";
                                                emailAddress = "neque";
                                                isAuthenticatedUser = false;
                                                kind = "dolorum";
                                                permissionId = "nostrum";
                                                picture = new UserPicture() {{
                                                    url = "officia";
                                                }};
                                            }}),
                                        }};
                                        valueType = "dolorum";
                                    }});
                                }};
                                id = "8e4824d0-ab40-4750-88e5-1862065e904f";
                                kind = "dolorem";
                                revisionId = "harum";
                            }}),
                            add(new Label() {{
                                fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.LabelField>() {{
                                    put("architecto", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-04-22")),
                                            add(LocalDate.parse("2021-08-28")),
                                            add(LocalDate.parse("2021-02-07")),
                                        }};
                                        id = "603a79f9-dfe0-4ab7-9a8a-50ce187f86bc";
                                        integer = new String[]{{
                                            add("esse"),
                                        }};
                                        kind = "amet";
                                        selection = new String[]{{
                                            add("ea"),
                                            add("atque"),
                                            add("error"),
                                            add("officiis"),
                                        }};
                                        text = new String[]{{
                                            add("accusamus"),
                                            add("natus"),
                                            add("minima"),
                                            add("aspernatur"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "maiores";
                                                emailAddress = "corrupti";
                                                isAuthenticatedUser = false;
                                                kind = "at";
                                                permissionId = "error";
                                                picture = new UserPicture() {{
                                                    url = "blanditiis";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "suscipit";
                                                emailAddress = "repudiandae";
                                                isAuthenticatedUser = false;
                                                kind = "atque";
                                                permissionId = "atque";
                                                picture = new UserPicture() {{
                                                    url = "sunt";
                                                }};
                                            }}),
                                        }};
                                        valueType = "recusandae";
                                    }});
                                }};
                                id = "ad4f0e10-1256-43f9-8e29-e973e922a57a";
                                kind = "illo";
                                revisionId = "corporis";
                            }}),
                            add(new Label() {{
                                fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.LabelField>() {{
                                    put("eveniet", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-11-18")),
                                        }};
                                        id = "60807e2b-6e3a-4b88-85f0-597a60ff2a54";
                                        integer = new String[]{{
                                            add("nesciunt"),
                                            add("quae"),
                                            add("recusandae"),
                                        }};
                                        kind = "omnis";
                                        selection = new String[]{{
                                            add("molestiae"),
                                            add("ex"),
                                        }};
                                        text = new String[]{{
                                            add("culpa"),
                                            add("adipisci"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "laudantium";
                                                emailAddress = "eum";
                                                isAuthenticatedUser = false;
                                                kind = "nemo";
                                                permissionId = "recusandae";
                                                picture = new UserPicture() {{
                                                    url = "esse";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "provident";
                                                emailAddress = "quis";
                                                isAuthenticatedUser = false;
                                                kind = "eum";
                                                permissionId = "reiciendis";
                                                picture = new UserPicture() {{
                                                    url = "provident";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "aspernatur";
                                                emailAddress = "ullam";
                                                isAuthenticatedUser = false;
                                                kind = "quasi";
                                                permissionId = "animi";
                                                picture = new UserPicture() {{
                                                    url = "nostrum";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "mollitia";
                                                emailAddress = "provident";
                                                isAuthenticatedUser = false;
                                                kind = "possimus";
                                                permissionId = "animi";
                                                picture = new UserPicture() {{
                                                    url = "ex";
                                                }};
                                            }}),
                                        }};
                                        valueType = "aliquid";
                                    }});
                                    put("accusantium", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2021-12-11")),
                                            add(LocalDate.parse("2022-04-12")),
                                            add(LocalDate.parse("2021-02-01")),
                                            add(LocalDate.parse("2021-05-17")),
                                        }};
                                        id = "4f9efc1b-4512-4c10-b264-8dc2f615199e";
                                        integer = new String[]{{
                                            add("hic"),
                                            add("illum"),
                                            add("eaque"),
                                        }};
                                        kind = "earum";
                                        selection = new String[]{{
                                            add("maiores"),
                                            add("debitis"),
                                            add("aliquid"),
                                        }};
                                        text = new String[]{{
                                            add("suscipit"),
                                            add("dolorem"),
                                            add("fugit"),
                                            add("cumque"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "ratione";
                                                emailAddress = "animi";
                                                isAuthenticatedUser = false;
                                                kind = "necessitatibus";
                                                permissionId = "nulla";
                                                picture = new UserPicture() {{
                                                    url = "consequatur";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "quasi";
                                                emailAddress = "et";
                                                isAuthenticatedUser = false;
                                                kind = "ducimus";
                                                permissionId = "natus";
                                                picture = new UserPicture() {{
                                                    url = "occaecati";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "suscipit";
                                                emailAddress = "adipisci";
                                                isAuthenticatedUser = false;
                                                kind = "quasi";
                                                permissionId = "magni";
                                                picture = new UserPicture() {{
                                                    url = "doloribus";
                                                }};
                                            }}),
                                        }};
                                        valueType = "nulla";
                                    }});
                                    put("necessitatibus", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-07-13")),
                                        }};
                                        id = "71778ff6-1d01-4747-a360-a15db6a66065";
                                        integer = new String[]{{
                                            add("id"),
                                            add("ab"),
                                            add("error"),
                                        }};
                                        kind = "possimus";
                                        selection = new String[]{{
                                            add("mollitia"),
                                            add("laborum"),
                                            add("libero"),
                                            add("ad"),
                                        }};
                                        text = new String[]{{
                                            add("enim"),
                                            add("vitae"),
                                            add("repellendus"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "quo";
                                                emailAddress = "ex";
                                                isAuthenticatedUser = false;
                                                kind = "ut";
                                                permissionId = "ad";
                                                picture = new UserPicture() {{
                                                    url = "expedita";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "voluptatem";
                                                emailAddress = "molestias";
                                                isAuthenticatedUser = false;
                                                kind = "cum";
                                                permissionId = "aliquid";
                                                picture = new UserPicture() {{
                                                    url = "beatae";
                                                }};
                                            }}),
                                        }};
                                        valueType = "voluptatum";
                                    }});
                                }};
                                id = "91baa0fe-1ade-4008-a6f8-c5f350d8cdb5";
                                kind = "culpa";
                                revisionId = "dolor";
                            }}),
                        }};
                    }};;
                    labels = new FileLabels() {{
                        hidden = false;
                        modified = false;
                        restricted = false;
                        starred = false;
                        trashed = false;
                        viewed = false;
                    }};;
                    lastModifyingUser = new User() {{
                        displayName = "aliquam";
                        emailAddress = "inventore";
                        isAuthenticatedUser = false;
                        kind = "deleniti";
                        permissionId = "veritatis";
                        picture = new UserPicture() {{
                            url = "tempora";
                        }};;
                    }};;
                    lastModifyingUserName = "dolor";
                    lastViewedByMeDate = OffsetDateTime.parse("2022-11-25T11:52:35.630Z");
                    linkShareMetadata = new FileLinkShareMetadata() {{
                        securityUpdateEligible = false;
                        securityUpdateEnabled = false;
                    }};;
                    markedViewedByMeDate = OffsetDateTime.parse("2022-09-26T06:15:07.269Z");
                    md5Checksum = "fugit";
                    mimeType = "ab";
                    modifiedByMeDate = OffsetDateTime.parse("2022-11-14T02:36:08.751Z");
                    modifiedDate = OffsetDateTime.parse("2022-02-22T11:01:14.144Z");
                    openWithLinks = new java.util.HashMap<String, String>() {{
                        put("consequuntur", "ipsa");
                        put("quas", "eveniet");
                    }};
                    originalFilename = "impedit";
                    ownedByMe = false;
                    ownerNames = new String[]{{
                        add("esse"),
                        add("necessitatibus"),
                        add("sed"),
                        add("veniam"),
                    }};
                    owners = new org.openapis.openapi.models.shared.User[]{{
                        add(new User() {{
                            displayName = "expedita";
                            emailAddress = "eum";
                            isAuthenticatedUser = false;
                            kind = "vel";
                            permissionId = "voluptatum";
                            picture = new UserPicture() {{
                                url = "magnam";
                            }};
                        }}),
                    }};
                    parents = new org.openapis.openapi.models.shared.ParentReference[]{{
                        add(new ParentReference() {{
                            id = "1c6c6e20-5e16-4dea-b3fe-c9578a645842";
                            isRoot = false;
                            kind = "ducimus";
                            parentLink = "nesciunt";
                            selfLink = "fuga";
                        }}),
                        add(new ParentReference() {{
                            id = "8418d162-309f-4b09-a992-1aefb9f58c4d";
                            isRoot = false;
                            kind = "quos";
                            parentLink = "commodi";
                            selfLink = "itaque";
                        }}),
                    }};
                    permissionIds = new String[]{{
                        add("totam"),
                        add("earum"),
                    }};
                    permissions = new org.openapis.openapi.models.shared.PermissionInput[]{{
                        add(new PermissionInput() {{
                            additionalRoles = new String[]{{
                                add("vero"),
                                add("voluptatem"),
                                add("ipsam"),
                            }};
                            authKey = "vel";
                            deleted = false;
                            domain = "alias";
                            emailAddress = "quasi";
                            etag = "non";
                            expirationDate = OffsetDateTime.parse("2022-01-17T12:49:23.579Z");
                            id = "9da757a5-9ecf-4ef6-aef1-caa3383c2beb";
                            kind = "dolore";
                            name = "Colleen Dickinson";
                            pendingOwner = false;
                            photoLink = "quo";
                            role = "deleniti";
                            selfLink = "quibusdam";
                            type = "iure";
                            value = "odit";
                            view = "voluptatibus";
                            withLink = false;
                        }}),
                        add(new PermissionInput() {{
                            additionalRoles = new String[]{{
                                add("magnam"),
                                add("quibusdam"),
                            }};
                            authKey = "inventore";
                            deleted = false;
                            domain = "facere";
                            emailAddress = "libero";
                            etag = "architecto";
                            expirationDate = OffsetDateTime.parse("2022-07-13T18:14:43.574Z");
                            id = "c4310661-e963-449e-9cf9-e06e3a437000";
                            kind = "officia";
                            name = "Angel Pouros";
                            pendingOwner = false;
                            photoLink = "placeat";
                            role = "perspiciatis";
                            selfLink = "expedita";
                            type = "deleniti";
                            value = "a";
                            view = "voluptate";
                            withLink = false;
                        }}),
                    }};
                    properties = new org.openapis.openapi.models.shared.Property[]{{
                        add(new Property() {{
                            etag = "unde";
                            key = "necessitatibus";
                            kind = "animi";
                            selfLink = "impedit";
                            value = "ipsam";
                            visibility = "corporis";
                        }}),
                        add(new Property() {{
                            etag = "est";
                            key = "error";
                            kind = "esse";
                            selfLink = "labore";
                            value = "veritatis";
                            visibility = "vero";
                        }}),
                    }};
                    quotaBytesUsed = "consectetur";
                    resourceKey = "vitae";
                    selfLink = "inventore";
                    sha1Checksum = "dolorem";
                    sha256Checksum = "ad";
                    shareable = false;
                    shared = false;
                    sharedWithMeDate = OffsetDateTime.parse("2022-05-22T20:46:18.043Z");
                    sharingUser = new User() {{
                        displayName = "ex";
                        emailAddress = "nemo";
                        isAuthenticatedUser = false;
                        kind = "soluta";
                        permissionId = "libero";
                        picture = new UserPicture() {{
                            url = "rem";
                        }};;
                    }};;
                    shortcutDetails = new FileShortcutDetails() {{
                        targetId = "dolorum";
                        targetMimeType = "odio";
                        targetResourceKey = "fugit";
                    }};;
                    spaces = new String[]{{
                        add("magni"),
                    }};
                    teamDriveId = "vel";
                    thumbnail = new FileThumbnail() {{
                        image = "quae";
                        mimeType = "quae";
                    }};;
                    thumbnailLink = "modi";
                    thumbnailVersion = "neque";
                    title = "Mrs.";
                    trashedDate = OffsetDateTime.parse("2022-09-26T08:50:09.615Z");
                    trashingUser = new User() {{
                        displayName = "ipsum";
                        emailAddress = "unde";
                        isAuthenticatedUser = false;
                        kind = "nulla";
                        permissionId = "distinctio";
                        picture = new UserPicture() {{
                            url = "maxime";
                        }};;
                    }};;
                    userPermission = new PermissionInput() {{
                        additionalRoles = new String[]{{
                            add("quia"),
                        }};
                        authKey = "nostrum";
                        deleted = false;
                        domain = "omnis";
                        emailAddress = "libero";
                        etag = "dicta";
                        expirationDate = OffsetDateTime.parse("2021-07-18T15:23:57.911Z");
                        id = "da8c070e-1084-4cb0-a72d-1ad879eeb966";
                        kind = "ipsam";
                        name = "Armando Hermiston";
                        pendingOwner = false;
                        photoLink = "cum";
                        role = "at";
                        selfLink = "alias";
                        type = "quia";
                        value = "quidem";
                        view = "fuga";
                        withLink = false;
                    }};;
                    version = "repudiandae";
                    videoMediaMetadata = new FileVideoMediaMetadata() {{
                        durationMillis = "accusantium";
                        height = 710456;
                        width = 885208;
                    }};;
                    webContentLink = "eos";
                    webViewLink = "quibusdam";
                    writersCanShare = false;
                }};;
                alt = AltEnum.JSON;
                convert = false;
                enforceSingleParent = false;
                fields = "odio";
                includeLabels = "praesentium";
                includePermissionsForView = "odit";
                key = "explicabo";
                oauthToken = "corporis";
                ocr = false;
                ocrLanguage = "error";
                pinned = false;
                prettyPrint = false;
                quotaUser = "earum";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                timedTextLanguage = "adipisci";
                timedTextTrackName = "recusandae";
                userIp = "similique";
                visibility = DriveFilesCopyVisibilityEnum.DEFAULT_;
            }};            

            DriveFilesCopyResponse res = sdk.files.driveFilesCopy(req, new DriveFilesCopySecurity() {{
                option1 = new DriveFilesCopySecurityOption1("quidem", "quis") {{
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

Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.

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

            DriveFilesDeleteRequest req = new DriveFilesDeleteRequest("beatae") {{
                alt = AltEnum.JSON;
                enforceSingleParent = false;
                fields = "unde";
                key = "molestiae";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "cupiditate";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                userIp = "fugit";
            }};            

            DriveFilesDeleteResponse res = sdk.files.driveFilesDelete(req, new DriveFilesDeleteSecurity() {{
                option1 = new DriveFilesDeleteSecurityOption1("numquam", "numquam") {{
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
                driveId = "nesciunt";
                enforceSingleParent = false;
                fields = "at";
                key = "officia";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "optio";
                userIp = "necessitatibus";
            }};            

            DriveFilesEmptyTrashResponse res = sdk.files.driveFilesEmptyTrash(req, new DriveFilesEmptyTrashSecurity("corporis", "qui") {{
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

            DriveFilesExportRequest req = new DriveFilesExportRequest("expedita", "voluptatum") {{
                alt = AltEnum.JSON;
                fields = "cupiditate";
                key = "minima";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "enim";
                userIp = "neque";
            }};            

            DriveFilesExportResponse res = sdk.files.driveFilesExport(req, new DriveFilesExportSecurity() {{
                option1 = new DriveFilesExportSecurityOption1("in", "minus") {{
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

Generates a set of file IDs which can be provided in insert or copy requests.

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
                fields = "eum";
                key = "modi";
                maxResults = 357347L;
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "voluptates";
                space = "maiores";
                type = "tempore";
                userIp = "aperiam";
            }};            

            DriveFilesGenerateIdsResponse res = sdk.files.driveFilesGenerateIds(req, new DriveFilesGenerateIdsSecurity() {{
                option1 = new DriveFilesGenerateIdsSecurityOption1("libero", "ratione") {{
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
import org.openapis.openapi.models.operations.DriveFilesGetProjectionEnum;
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

            DriveFilesGetRequest req = new DriveFilesGetRequest("labore") {{
                acknowledgeAbuse = false;
                alt = AltEnum.JSON;
                fields = "totam";
                includeLabels = "occaecati";
                includePermissionsForView = "voluptas";
                key = "quo";
                oauthToken = "velit";
                prettyPrint = false;
                projection = DriveFilesGetProjectionEnum.FULL;
                quotaUser = "fuga";
                revisionId = "nostrum";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                updateViewedDate = false;
                userIp = "est";
            }};            

            DriveFilesGetResponse res = sdk.files.driveFilesGet(req, new DriveFilesGetSecurity() {{
                option1 = new DriveFilesGetSecurityOption1("impedit", "delectus") {{
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

## driveFilesInsert

Insert a new file.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesInsertRequest;
import org.openapis.openapi.models.operations.DriveFilesInsertResponse;
import org.openapis.openapi.models.operations.DriveFilesInsertSecurity;
import org.openapis.openapi.models.operations.DriveFilesInsertSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesInsertSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesInsertSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesInsertSecurityOption4;
import org.openapis.openapi.models.operations.DriveFilesInsertVisibilityEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentRestriction;
import org.openapis.openapi.models.shared.FileCapabilities;
import org.openapis.openapi.models.shared.FileImageMediaMetadata;
import org.openapis.openapi.models.shared.FileImageMediaMetadataLocation;
import org.openapis.openapi.models.shared.FileIndexableText;
import org.openapis.openapi.models.shared.FileInput;
import org.openapis.openapi.models.shared.FileLabelInfo;
import org.openapis.openapi.models.shared.FileLabels;
import org.openapis.openapi.models.shared.FileLinkShareMetadata;
import org.openapis.openapi.models.shared.FileShortcutDetails;
import org.openapis.openapi.models.shared.FileThumbnail;
import org.openapis.openapi.models.shared.FileVideoMediaMetadata;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.LabelField;
import org.openapis.openapi.models.shared.ParentReference;
import org.openapis.openapi.models.shared.PermissionInput;
import org.openapis.openapi.models.shared.Property;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesInsertRequest req = new DriveFilesInsertRequest() {{
                requestBody = "tempore".getBytes();
                alt = AltEnum.JSON;
                convert = false;
                enforceSingleParent = false;
                fields = "vero";
                includeLabels = "odit";
                includePermissionsForView = "repellat";
                key = "pariatur";
                oauthToken = "nemo";
                ocr = false;
                ocrLanguage = "reprehenderit";
                pinned = false;
                prettyPrint = false;
                quotaUser = "aperiam";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                timedTextLanguage = "odio";
                timedTextTrackName = "minima";
                useContentAsIndexableText = false;
                userIp = "in";
                visibility = DriveFilesInsertVisibilityEnum.DEFAULT_;
            }};            

            DriveFilesInsertResponse res = sdk.files.driveFilesInsert(req, new DriveFilesInsertSecurity() {{
                option1 = new DriveFilesInsertSecurityOption1("excepturi", "dolores") {{
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

Lists the user's files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesListCorpusEnum;
import org.openapis.openapi.models.operations.DriveFilesListProjectionEnum;
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
import org.openapis.openapi.models.operations.DriveFilesListSecurityOption8;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesListRequest req = new DriveFilesListRequest() {{
                alt = AltEnum.JSON;
                corpora = "error";
                corpus = DriveFilesListCorpusEnum.DEFAULT_;
                driveId = "ducimus";
                fields = "voluptate";
                includeItemsFromAllDrives = false;
                includeLabels = "pariatur";
                includePermissionsForView = "itaque";
                includeTeamDriveItems = false;
                key = "similique";
                maxResults = 763165L;
                oauthToken = "ex";
                orderBy = "quaerat";
                pageToken = "commodi";
                prettyPrint = false;
                projection = DriveFilesListProjectionEnum.FULL;
                q = "placeat";
                quotaUser = "quidem";
                spaces = "exercitationem";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                teamDriveId = "quam";
                userIp = "dolorem";
            }};            

            DriveFilesListResponse res = sdk.files.driveFilesList(req, new DriveFilesListSecurity() {{
                option1 = new DriveFilesListSecurityOption1("modi", "ipsa") {{
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

            DriveFilesListLabelsRequest req = new DriveFilesListLabelsRequest("sint") {{
                alt = AltEnum.JSON;
                fields = "vero";
                key = "sequi";
                maxResults = 918547L;
                oauthToken = "cum";
                pageToken = "dicta";
                prettyPrint = false;
                quotaUser = "earum";
                userIp = "veniam";
            }};            

            DriveFilesListLabelsResponse res = sdk.files.driveFilesListLabels(req, new DriveFilesListLabelsSecurity() {{
                option1 = new DriveFilesListLabelsSecurityOption1("animi", "dolores") {{
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

            DriveFilesModifyLabelsRequest req = new DriveFilesModifyLabelsRequest("nam") {{
                modifyLabelsRequest = new ModifyLabelsRequest() {{
                    kind = "dicta";
                    labelModifications = new org.openapis.openapi.models.shared.LabelModification[]{{
                        add(new LabelModification() {{
                            fieldModifications = new org.openapis.openapi.models.shared.LabelFieldModification[]{{
                                add(new LabelFieldModification() {{
                                    fieldId = "nobis";
                                    kind = "ipsa";
                                    setDateValues = new LocalDate[]{{
                                        add(LocalDate.parse("2022-09-27")),
                                        add(LocalDate.parse("2022-08-12")),
                                    }};
                                    setIntegerValues = new String[]{{
                                        add("libero"),
                                        add("excepturi"),
                                        add("occaecati"),
                                        add("nemo"),
                                    }};
                                    setSelectionValues = new String[]{{
                                        add("nostrum"),
                                        add("doloribus"),
                                    }};
                                    setTextValues = new String[]{{
                                        add("sint"),
                                        add("enim"),
                                        add("hic"),
                                        add("animi"),
                                    }};
                                    setUserValues = new String[]{{
                                        add("totam"),
                                        add("molestias"),
                                        add("odio"),
                                    }};
                                    unsetValues = false;
                                }}),
                                add(new LabelFieldModification() {{
                                    fieldId = "eaque";
                                    kind = "saepe";
                                    setDateValues = new LocalDate[]{{
                                        add(LocalDate.parse("2021-10-09")),
                                    }};
                                    setIntegerValues = new String[]{{
                                        add("tempore"),
                                        add("libero"),
                                        add("velit"),
                                        add("doloremque"),
                                    }};
                                    setSelectionValues = new String[]{{
                                        add("impedit"),
                                        add("cum"),
                                        add("ipsum"),
                                        add("adipisci"),
                                    }};
                                    setTextValues = new String[]{{
                                        add("deserunt"),
                                        add("doloremque"),
                                        add("quis"),
                                        add("veniam"),
                                    }};
                                    setUserValues = new String[]{{
                                        add("architecto"),
                                        add("cupiditate"),
                                        add("molestiae"),
                                    }};
                                    unsetValues = false;
                                }}),
                                add(new LabelFieldModification() {{
                                    fieldId = "eligendi";
                                    kind = "possimus";
                                    setDateValues = new LocalDate[]{{
                                        add(LocalDate.parse("2022-01-25")),
                                        add(LocalDate.parse("2022-01-03")),
                                    }};
                                    setIntegerValues = new String[]{{
                                        add("consequuntur"),
                                        add("facere"),
                                    }};
                                    setSelectionValues = new String[]{{
                                        add("odit"),
                                        add("pariatur"),
                                        add("amet"),
                                    }};
                                    setTextValues = new String[]{{
                                        add("ab"),
                                        add("velit"),
                                    }};
                                    setUserValues = new String[]{{
                                        add("tempore"),
                                        add("nisi"),
                                        add("voluptatibus"),
                                    }};
                                    unsetValues = false;
                                }}),
                                add(new LabelFieldModification() {{
                                    fieldId = "quaerat";
                                    kind = "blanditiis";
                                    setDateValues = new LocalDate[]{{
                                        add(LocalDate.parse("2022-08-31")),
                                        add(LocalDate.parse("2022-04-10")),
                                        add(LocalDate.parse("2020-07-22")),
                                    }};
                                    setIntegerValues = new String[]{{
                                        add("ipsum"),
                                        add("ad"),
                                        add("voluptatibus"),
                                    }};
                                    setSelectionValues = new String[]{{
                                        add("consequuntur"),
                                        add("debitis"),
                                        add("labore"),
                                        add("rerum"),
                                    }};
                                    setTextValues = new String[]{{
                                        add("reprehenderit"),
                                    }};
                                    setUserValues = new String[]{{
                                        add("neque"),
                                        add("iusto"),
                                    }};
                                    unsetValues = false;
                                }}),
                            }};
                            kind = "est";
                            labelId = "rem";
                            removeLabel = false;
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "eligendi";
                key = "fugiat";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "officiis";
                userIp = "ducimus";
            }};            

            DriveFilesModifyLabelsResponse res = sdk.files.driveFilesModifyLabels(req, new DriveFilesModifyLabelsSecurity() {{
                option1 = new DriveFilesModifyLabelsSecurityOption1("dolor", "dicta") {{
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

## driveFilesPatch

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesPatchModifiedDateBehaviorEnum;
import org.openapis.openapi.models.operations.DriveFilesPatchRequest;
import org.openapis.openapi.models.operations.DriveFilesPatchResponse;
import org.openapis.openapi.models.operations.DriveFilesPatchSecurity;
import org.openapis.openapi.models.operations.DriveFilesPatchSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesPatchSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesPatchSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesPatchSecurityOption4;
import org.openapis.openapi.models.operations.DriveFilesPatchSecurityOption5;
import org.openapis.openapi.models.operations.DriveFilesPatchSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentRestriction;
import org.openapis.openapi.models.shared.FileCapabilities;
import org.openapis.openapi.models.shared.FileImageMediaMetadata;
import org.openapis.openapi.models.shared.FileImageMediaMetadataLocation;
import org.openapis.openapi.models.shared.FileIndexableText;
import org.openapis.openapi.models.shared.FileInput;
import org.openapis.openapi.models.shared.FileLabelInfo;
import org.openapis.openapi.models.shared.FileLabels;
import org.openapis.openapi.models.shared.FileLinkShareMetadata;
import org.openapis.openapi.models.shared.FileShortcutDetails;
import org.openapis.openapi.models.shared.FileThumbnail;
import org.openapis.openapi.models.shared.FileVideoMediaMetadata;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.LabelField;
import org.openapis.openapi.models.shared.ParentReference;
import org.openapis.openapi.models.shared.PermissionInput;
import org.openapis.openapi.models.shared.Property;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesPatchRequest req = new DriveFilesPatchRequest("error") {{
                fileInput = new FileInput() {{
                    alternateLink = "porro";
                    appDataContents = false;
                    canComment = false;
                    canReadRevisions = false;
                    capabilities = new FileCapabilities() {{
                        canAcceptOwnership = false;
                        canAddChildren = false;
                        canAddFolderFromAnotherDrive = false;
                        canAddMyDriveParent = false;
                        canChangeCopyRequiresWriterPermission = false;
                        canChangeRestrictedDownload = false;
                        canChangeSecurityUpdateEnabled = false;
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
                    contentRestrictions = new org.openapis.openapi.models.shared.ContentRestriction[]{{
                        add(new ContentRestriction() {{
                            readOnly = false;
                            reason = "dignissimos";
                            restrictingUser = new User() {{
                                displayName = "esse";
                                emailAddress = "fugiat";
                                isAuthenticatedUser = false;
                                kind = "ad";
                                permissionId = "aspernatur";
                                picture = new UserPicture() {{
                                    url = "enim";
                                }};
                            }};
                            restrictionDate = OffsetDateTime.parse("2021-07-21T13:41:09.845Z");
                            type = "dignissimos";
                        }}),
                    }};
                    copyRequiresWriterPermission = false;
                    copyable = false;
                    createdDate = OffsetDateTime.parse("2022-11-09T04:25:16.566Z");
                    defaultOpenWithLink = "ab";
                    description = "incidunt";
                    downloadUrl = "accusamus";
                    driveId = "saepe";
                    editable = false;
                    embedLink = "tempore";
                    etag = "veniam";
                    explicitlyTrashed = false;
                    fileExtension = "eos";
                    fileSize = "reiciendis";
                    folderColorRgb = "earum";
                    fullFileExtension = "reprehenderit";
                    hasAugmentedPermissions = false;
                    hasThumbnail = false;
                    headRevisionId = "praesentium";
                    iconLink = "nemo";
                    id = "fc37814d-4c98-4e0c-abb8-9eb75dad636c";
                    imageMediaMetadata = new FileImageMediaMetadata() {{
                        aperture = 4150.33;
                        cameraMake = "aut";
                        cameraModel = "voluptatem";
                        colorSpace = "ad";
                        date = "quae";
                        exposureBias = 2295.67;
                        exposureMode = "illum";
                        exposureTime = 5068.63;
                        flashUsed = false;
                        focalLength = 6955.26;
                        height = 736853;
                        isoSpeed = 230411;
                        lens = "quasi";
                        location = new FileImageMediaMetadataLocation() {{
                            altitude = 1181.26;
                            latitude = 5149.22;
                            longitude = 407.1;
                        }};;
                        maxApertureValue = 9384.12;
                        meteringMode = "iusto";
                        rotation = 228646;
                        sensor = "provident";
                        subjectDistance = 677141;
                        whiteBalance = "necessitatibus";
                        width = 592880;
                    }};;
                    indexableText = new FileIndexableText() {{
                        text = "repudiandae";
                    }};;
                    isAppAuthorized = false;
                    kind = "consequatur";
                    labelInfo = new FileLabelInfo() {{
                        labels = new org.openapis.openapi.models.shared.Label[]{{
                            add(new Label() {{
                                fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.LabelField>() {{
                                    put("itaque", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-11-29")),
                                            add(LocalDate.parse("2021-03-29")),
                                            add(LocalDate.parse("2022-06-25")),
                                        }};
                                        id = "10331f39-81d4-4c70-8b60-7f3c93c73b9d";
                                        integer = new String[]{{
                                            add("amet"),
                                            add("tenetur"),
                                            add("aspernatur"),
                                        }};
                                        kind = "quo";
                                        selection = new String[]{{
                                            add("illum"),
                                            add("laborum"),
                                            add("dignissimos"),
                                            add("vero"),
                                        }};
                                        text = new String[]{{
                                            add("consectetur"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "explicabo";
                                                emailAddress = "explicabo";
                                                isAuthenticatedUser = false;
                                                kind = "exercitationem";
                                                permissionId = "nihil";
                                                picture = new UserPicture() {{
                                                    url = "non";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "ab";
                                                emailAddress = "illo";
                                                isAuthenticatedUser = false;
                                                kind = "hic";
                                                permissionId = "deserunt";
                                                picture = new UserPicture() {{
                                                    url = "delectus";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "non";
                                                emailAddress = "distinctio";
                                                isAuthenticatedUser = false;
                                                kind = "in";
                                                permissionId = "exercitationem";
                                                picture = new UserPicture() {{
                                                    url = "labore";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "numquam";
                                                emailAddress = "repudiandae";
                                                isAuthenticatedUser = false;
                                                kind = "modi";
                                                permissionId = "in";
                                                picture = new UserPicture() {{
                                                    url = "explicabo";
                                                }};
                                            }}),
                                        }};
                                        valueType = "accusamus";
                                    }});
                                    put("rem", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-06-19")),
                                        }};
                                        id = "57a5b404-63a7-4d57-9f14-00e764ad7334";
                                        integer = new String[]{{
                                            add("minus"),
                                            add("sunt"),
                                            add("distinctio"),
                                            add("iusto"),
                                        }};
                                        kind = "quas";
                                        selection = new String[]{{
                                            add("facilis"),
                                        }};
                                        text = new String[]{{
                                            add("autem"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "alias";
                                                emailAddress = "rem";
                                                isAuthenticatedUser = false;
                                                kind = "aut";
                                                permissionId = "quos";
                                                picture = new UserPicture() {{
                                                    url = "laudantium";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "repellendus";
                                                emailAddress = "veritatis";
                                                isAuthenticatedUser = false;
                                                kind = "quae";
                                                permissionId = "eaque";
                                                picture = new UserPicture() {{
                                                    url = "saepe";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "delectus";
                                                emailAddress = "mollitia";
                                                isAuthenticatedUser = false;
                                                kind = "nulla";
                                                permissionId = "officia";
                                                picture = new UserPicture() {{
                                                    url = "sed";
                                                }};
                                            }}),
                                        }};
                                        valueType = "voluptatem";
                                    }});
                                }};
                                id = "0ef0422e-b216-44cf-9ab8-366c723ffda9";
                                kind = "accusamus";
                                revisionId = "doloremque";
                            }}),
                            add(new Label() {{
                                fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.LabelField>() {{
                                    put("rerum", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-03-31")),
                                            add(LocalDate.parse("2022-09-07")),
                                            add(LocalDate.parse("2022-03-19")),
                                            add(LocalDate.parse("2022-01-10")),
                                        }};
                                        id = "c0e115c8-0bff-4918-944e-c42defcce8f1";
                                        integer = new String[]{{
                                            add("nihil"),
                                            add("esse"),
                                            add("iure"),
                                        }};
                                        kind = "odio";
                                        selection = new String[]{{
                                            add("debitis"),
                                        }};
                                        text = new String[]{{
                                            add("neque"),
                                            add("corporis"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "consequuntur";
                                                emailAddress = "officia";
                                                isAuthenticatedUser = false;
                                                kind = "reprehenderit";
                                                permissionId = "distinctio";
                                                picture = new UserPicture() {{
                                                    url = "eius";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "ipsa";
                                                emailAddress = "rem";
                                                isAuthenticatedUser = false;
                                                kind = "maiores";
                                                permissionId = "accusantium";
                                                picture = new UserPicture() {{
                                                    url = "veniam";
                                                }};
                                            }}),
                                        }};
                                        valueType = "saepe";
                                    }});
                                    put("neque", new LabelField() {{
                                        dateString = new LocalDate[]{{
                                            add(LocalDate.parse("2022-06-13")),
                                            add(LocalDate.parse("2020-06-12")),
                                            add(LocalDate.parse("2021-01-28")),
                                            add(LocalDate.parse("2022-11-21")),
                                        }};
                                        id = "3a1f5fd9-4259-4c0b-b6f2-5ea944f3b756";
                                        integer = new String[]{{
                                            add("ab"),
                                            add("beatae"),
                                            add("hic"),
                                            add("nisi"),
                                        }};
                                        kind = "quisquam";
                                        selection = new String[]{{
                                            add("ducimus"),
                                        }};
                                        text = new String[]{{
                                            add("minima"),
                                            add("architecto"),
                                            add("qui"),
                                        }};
                                        user = new org.openapis.openapi.models.shared.User[]{{
                                            add(new User() {{
                                                displayName = "magni";
                                                emailAddress = "incidunt";
                                                isAuthenticatedUser = false;
                                                kind = "adipisci";
                                                permissionId = "praesentium";
                                                picture = new UserPicture() {{
                                                    url = "dolor";
                                                }};
                                            }}),
                                            add(new User() {{
                                                displayName = "exercitationem";
                                                emailAddress = "expedita";
                                                isAuthenticatedUser = false;
                                                kind = "facilis";
                                                permissionId = "impedit";
                                                picture = new UserPicture() {{
                                                    url = "sit";
                                                }};
                                            }}),
                                        }};
                                        valueType = "nemo";
                                    }});
                                }};
                                id = "a23a45ce-fc5f-4de1-8a0c-e2169e510019";
                                kind = "cumque";
                                revisionId = "iure";
                            }}),
                        }};
                    }};;
                    labels = new FileLabels() {{
                        hidden = false;
                        modified = false;
                        restricted = false;
                        starred = false;
                        trashed = false;
                        viewed = false;
                    }};;
                    lastModifyingUser = new User() {{
                        displayName = "quibusdam";
                        emailAddress = "quod";
                        isAuthenticatedUser = false;
                        kind = "nemo";
                        permissionId = "recusandae";
                        picture = new UserPicture() {{
                            url = "velit";
                        }};;
                    }};;
                    lastModifyingUserName = "magnam";
                    lastViewedByMeDate = OffsetDateTime.parse("2022-08-12T05:34:46.987Z");
                    linkShareMetadata = new FileLinkShareMetadata() {{
                        securityUpdateEligible = false;
                        securityUpdateEnabled = false;
                    }};;
                    markedViewedByMeDate = OffsetDateTime.parse("2022-07-07T12:15:23.014Z");
                    md5Checksum = "natus";
                    mimeType = "provident";
                    modifiedByMeDate = OffsetDateTime.parse("2021-01-12T18:52:51.422Z");
                    modifiedDate = OffsetDateTime.parse("2021-08-09T22:46:26.305Z");
                    openWithLinks = new java.util.HashMap<String, String>() {{
                        put("laboriosam", "unde");
                        put("modi", "perspiciatis");
                        put("hic", "cum");
                        put("aspernatur", "libero");
                    }};
                    originalFilename = "nam";
                    ownedByMe = false;
                    ownerNames = new String[]{{
                        add("recusandae"),
                        add("quod"),
                    }};
                    owners = new org.openapis.openapi.models.shared.User[]{{
                        add(new User() {{
                            displayName = "saepe";
                            emailAddress = "autem";
                            isAuthenticatedUser = false;
                            kind = "quo";
                            permissionId = "nesciunt";
                            picture = new UserPicture() {{
                                url = "illum";
                            }};
                        }}),
                        add(new User() {{
                            displayName = "nemo";
                            emailAddress = "illum";
                            isAuthenticatedUser = false;
                            kind = "facilis";
                            permissionId = "non";
                            picture = new UserPicture() {{
                                url = "mollitia";
                            }};
                        }}),
                        add(new User() {{
                            displayName = "assumenda";
                            emailAddress = "recusandae";
                            isAuthenticatedUser = false;
                            kind = "distinctio";
                            permissionId = "pariatur";
                            picture = new UserPicture() {{
                                url = "ad";
                            }};
                        }}),
                    }};
                    parents = new org.openapis.openapi.models.shared.ParentReference[]{{
                        add(new ParentReference() {{
                            id = "aea4c506-a8aa-494c-8264-4cf5e9d9a457";
                            isRoot = false;
                            kind = "corrupti";
                            parentLink = "fuga";
                            selfLink = "facere";
                        }}),
                        add(new ParentReference() {{
                            id = "c1ac600d-ec00-41ac-802e-2ec09ff8f0f8";
                            isRoot = false;
                            kind = "dicta";
                            parentLink = "suscipit";
                            selfLink = "earum";
                        }}),
                        add(new ParentReference() {{
                            id = "f3477c13-e902-4c14-925b-0960a668151a";
                            isRoot = false;
                            kind = "incidunt";
                            parentLink = "quam";
                            selfLink = "magni";
                        }}),
                        add(new ParentReference() {{
                            id = "af923c59-49f8-43f3-90cf-876ffb901c6e";
                            isRoot = false;
                            kind = "porro";
                            parentLink = "tempore";
                            selfLink = "quidem";
                        }}),
                    }};
                    permissionIds = new String[]{{
                        add("voluptates"),
                        add("fugit"),
                    }};
                    permissions = new org.openapis.openapi.models.shared.PermissionInput[]{{
                        add(new PermissionInput() {{
                            additionalRoles = new String[]{{
                                add("eligendi"),
                            }};
                            authKey = "asperiores";
                            deleted = false;
                            domain = "esse";
                            emailAddress = "blanditiis";
                            etag = "sint";
                            expirationDate = OffsetDateTime.parse("2020-02-20T05:22:24.022Z");
                            id = "afeda53e-5ae6-4e0a-8184-c2b9c247c883";
                            kind = "molestiae";
                            name = "Dr. Kayla Gleichner V";
                            pendingOwner = false;
                            photoLink = "dolore";
                            role = "sunt";
                            selfLink = "maiores";
                            type = "neque";
                            value = "odit";
                            view = "earum";
                            withLink = false;
                        }}),
                        add(new PermissionInput() {{
                            additionalRoles = new String[]{{
                                add("ipsam"),
                                add("eaque"),
                            }};
                            authKey = "exercitationem";
                            deleted = false;
                            domain = "veniam";
                            emailAddress = "nihil";
                            etag = "ad";
                            expirationDate = OffsetDateTime.parse("2022-01-20T09:58:08.980Z");
                            id = "5d56d0bd-0af2-4dfe-93db-4f62cba3f894";
                            kind = "quasi";
                            name = "Erick Pfeffer MD";
                            pendingOwner = false;
                            photoLink = "corrupti";
                            role = "eaque";
                            selfLink = "deserunt";
                            type = "aliquid";
                            value = "excepturi";
                            view = "magni";
                            withLink = false;
                        }}),
                    }};
                    properties = new org.openapis.openapi.models.shared.Property[]{{
                        add(new Property() {{
                            etag = "possimus";
                            key = "dolor";
                            kind = "rerum";
                            selfLink = "sed";
                            value = "accusamus";
                            visibility = "optio";
                        }}),
                        add(new Property() {{
                            etag = "delectus";
                            key = "minus";
                            kind = "quo";
                            selfLink = "quos";
                            value = "asperiores";
                            visibility = "voluptatum";
                        }}),
                    }};
                    quotaBytesUsed = "iste";
                    resourceKey = "corporis";
                    selfLink = "accusantium";
                    sha1Checksum = "illo";
                    sha256Checksum = "aut";
                    shareable = false;
                    shared = false;
                    sharedWithMeDate = OffsetDateTime.parse("2021-12-22T09:30:36.023Z");
                    sharingUser = new User() {{
                        displayName = "at";
                        emailAddress = "possimus";
                        isAuthenticatedUser = false;
                        kind = "neque";
                        permissionId = "pariatur";
                        picture = new UserPicture() {{
                            url = "vel";
                        }};;
                    }};;
                    shortcutDetails = new FileShortcutDetails() {{
                        targetId = "sapiente";
                        targetMimeType = "mollitia";
                        targetResourceKey = "quae";
                    }};;
                    spaces = new String[]{{
                        add("aperiam"),
                        add("non"),
                        add("voluptates"),
                    }};
                    teamDriveId = "ad";
                    thumbnail = new FileThumbnail() {{
                        image = "aliquam";
                        mimeType = "quisquam";
                    }};;
                    thumbnailLink = "quas";
                    thumbnailVersion = "consequuntur";
                    title = "Dr.";
                    trashedDate = OffsetDateTime.parse("2022-08-07T20:04:14.486Z");
                    trashingUser = new User() {{
                        displayName = "laudantium";
                        emailAddress = "est";
                        isAuthenticatedUser = false;
                        kind = "dolor";
                        permissionId = "aliquid";
                        picture = new UserPicture() {{
                            url = "consectetur";
                        }};;
                    }};;
                    userPermission = new PermissionInput() {{
                        additionalRoles = new String[]{{
                            add("rem"),
                            add("voluptatum"),
                            add("ducimus"),
                            add("adipisci"),
                        }};
                        authKey = "recusandae";
                        deleted = false;
                        domain = "tempora";
                        emailAddress = "blanditiis";
                        etag = "numquam";
                        expirationDate = OffsetDateTime.parse("2022-06-20T16:52:25.586Z");
                        id = "0b1f6b8c-a275-4a60-a04c-495cc699171b";
                        kind = "ipsam";
                        name = "Blanca Carroll";
                        pendingOwner = false;
                        photoLink = "facilis";
                        role = "beatae";
                        selfLink = "cumque";
                        type = "delectus";
                        value = "labore";
                        view = "expedita";
                        withLink = false;
                    }};;
                    version = "corrupti";
                    videoMediaMetadata = new FileVideoMediaMetadata() {{
                        durationMillis = "rem";
                        height = 543353;
                        width = 886118;
                    }};;
                    webContentLink = "cum";
                    webViewLink = "pariatur";
                    writersCanShare = false;
                }};;
                addParents = "sapiente";
                alt = AltEnum.JSON;
                convert = false;
                enforceSingleParent = false;
                fields = "quo";
                includeLabels = "incidunt";
                includePermissionsForView = "quod";
                key = "minus";
                modifiedDateBehavior = DriveFilesPatchModifiedDateBehaviorEnum.NOW;
                newRevision = false;
                oauthToken = "id";
                ocr = false;
                ocrLanguage = "excepturi";
                pinned = false;
                prettyPrint = false;
                quotaUser = "occaecati";
                removeParents = "libero";
                setModifiedDate = false;
                supportsAllDrives = false;
                supportsTeamDrives = false;
                timedTextLanguage = "quo";
                timedTextTrackName = "esse";
                updateViewedDate = false;
                useContentAsIndexableText = false;
                userIp = "hic";
            }};            

            DriveFilesPatchResponse res = sdk.files.driveFilesPatch(req, new DriveFilesPatchSecurity() {{
                option1 = new DriveFilesPatchSecurityOption1("maxime", "accusantium") {{
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

## driveFilesTouch

Set the file's updated time to the current server time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesTouchRequest;
import org.openapis.openapi.models.operations.DriveFilesTouchResponse;
import org.openapis.openapi.models.operations.DriveFilesTouchSecurity;
import org.openapis.openapi.models.operations.DriveFilesTouchSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesTouchSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesTouchSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesTouchSecurityOption4;
import org.openapis.openapi.models.operations.DriveFilesTouchSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesTouchRequest req = new DriveFilesTouchRequest("soluta") {{
                alt = AltEnum.JSON;
                fields = "fugit";
                includeLabels = "pariatur";
                includePermissionsForView = "eligendi";
                key = "recusandae";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "aut";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                userIp = "laudantium";
            }};            

            DriveFilesTouchResponse res = sdk.files.driveFilesTouch(req, new DriveFilesTouchSecurity() {{
                option1 = new DriveFilesTouchSecurityOption1("iusto", "dolor") {{
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

## driveFilesTrash

Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesTrashRequest;
import org.openapis.openapi.models.operations.DriveFilesTrashResponse;
import org.openapis.openapi.models.operations.DriveFilesTrashSecurity;
import org.openapis.openapi.models.operations.DriveFilesTrashSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesTrashSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesTrashSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesTrashSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesTrashRequest req = new DriveFilesTrashRequest("voluptates") {{
                alt = AltEnum.JSON;
                fields = "tempora";
                includeLabels = "magni";
                includePermissionsForView = "rerum";
                key = "doloremque";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "eum";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                userIp = "at";
            }};            

            DriveFilesTrashResponse res = sdk.files.driveFilesTrash(req, new DriveFilesTrashSecurity() {{
                option1 = new DriveFilesTrashSecurityOption1("eum", "reprehenderit") {{
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

## driveFilesUntrash

Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesUntrashRequest;
import org.openapis.openapi.models.operations.DriveFilesUntrashResponse;
import org.openapis.openapi.models.operations.DriveFilesUntrashSecurity;
import org.openapis.openapi.models.operations.DriveFilesUntrashSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesUntrashSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesUntrashSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesUntrashSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesUntrashRequest req = new DriveFilesUntrashRequest("voluptatum") {{
                alt = AltEnum.JSON;
                fields = "blanditiis";
                includeLabels = "nihil";
                includePermissionsForView = "atque";
                key = "rerum";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "atque";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                userIp = "nostrum";
            }};            

            DriveFilesUntrashResponse res = sdk.files.driveFilesUntrash(req, new DriveFilesUntrashSecurity() {{
                option1 = new DriveFilesUntrashSecurityOption1("atque", "architecto") {{
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

## driveFilesUpdate

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveFilesUpdateModifiedDateBehaviorEnum;
import org.openapis.openapi.models.operations.DriveFilesUpdateRequest;
import org.openapis.openapi.models.operations.DriveFilesUpdateResponse;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurity;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption2;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption3;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption4;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption5;
import org.openapis.openapi.models.operations.DriveFilesUpdateSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentRestriction;
import org.openapis.openapi.models.shared.FileCapabilities;
import org.openapis.openapi.models.shared.FileImageMediaMetadata;
import org.openapis.openapi.models.shared.FileImageMediaMetadataLocation;
import org.openapis.openapi.models.shared.FileIndexableText;
import org.openapis.openapi.models.shared.FileInput;
import org.openapis.openapi.models.shared.FileLabelInfo;
import org.openapis.openapi.models.shared.FileLabels;
import org.openapis.openapi.models.shared.FileLinkShareMetadata;
import org.openapis.openapi.models.shared.FileShortcutDetails;
import org.openapis.openapi.models.shared.FileThumbnail;
import org.openapis.openapi.models.shared.FileVideoMediaMetadata;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.LabelField;
import org.openapis.openapi.models.shared.ParentReference;
import org.openapis.openapi.models.shared.PermissionInput;
import org.openapis.openapi.models.shared.Property;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveFilesUpdateRequest req = new DriveFilesUpdateRequest("est") {{
                requestBody = "enim".getBytes();
                addParents = "rem";
                alt = AltEnum.JSON;
                convert = false;
                enforceSingleParent = false;
                fields = "magni";
                includeLabels = "quae";
                includePermissionsForView = "quas";
                key = "placeat";
                modifiedDateBehavior = DriveFilesUpdateModifiedDateBehaviorEnum.FROM_BODY_IF_NEEDED;
                newRevision = false;
                oauthToken = "labore";
                ocr = false;
                ocrLanguage = "sapiente";
                pinned = false;
                prettyPrint = false;
                quotaUser = "saepe";
                removeParents = "delectus";
                setModifiedDate = false;
                supportsAllDrives = false;
                supportsTeamDrives = false;
                timedTextLanguage = "officia";
                timedTextTrackName = "natus";
                updateViewedDate = false;
                useContentAsIndexableText = false;
                userIp = "cumque";
            }};            

            DriveFilesUpdateResponse res = sdk.files.driveFilesUpdate(req, new DriveFilesUpdateSecurity() {{
                option1 = new DriveFilesUpdateSecurityOption1("natus", "quaerat") {{
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
import org.openapis.openapi.models.operations.DriveFilesWatchProjectionEnum;
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

            DriveFilesWatchRequest req = new DriveFilesWatchRequest("doloribus") {{
                channel = new Channel() {{
                    address = "86733 Freddie Streets";
                    expiration = "nesciunt";
                    id = "07cfee81-206e-4281-bfa4-a41c480d3f21";
                    kind = "sequi";
                    params = new java.util.HashMap<String, String>() {{
                        put("fuga", "hic");
                    }};
                    payload = false;
                    resourceId = "eaque";
                    resourceUri = "dolorem";
                    token = "architecto";
                    type = "aperiam";
                }};;
                acknowledgeAbuse = false;
                alt = AltEnum.JSON;
                fields = "aspernatur";
                includeLabels = "nulla";
                includePermissionsForView = "enim";
                key = "illo";
                oauthToken = "magnam";
                prettyPrint = false;
                projection = DriveFilesWatchProjectionEnum.FULL;
                quotaUser = "numquam";
                revisionId = "optio";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                updateViewedDate = false;
                userIp = "nobis";
            }};            

            DriveFilesWatchResponse res = sdk.files.driveFilesWatch(req, new DriveFilesWatchSecurity() {{
                option1 = new DriveFilesWatchSecurityOption1("ex", "repellat") {{
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
