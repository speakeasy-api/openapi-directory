# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveAboutGetRequest;
import org.openapis.openapi.models.operations.DriveAboutGetResponse;
import org.openapis.openapi.models.operations.DriveAboutGetSecurity;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption3;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption4;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption5;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption6;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveAboutGetRequest req = new DriveAboutGetRequest() {{
                alt = AltEnum.JSON;
                fields = "corrupti";
                key = "provident";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quibusdam";
                userIp = "unde";
            }};            

            DriveAboutGetResponse res = sdk.about.driveAboutGet(req, new DriveAboutGetSecurity() {{
                option1 = new DriveAboutGetSecurityOption1("nulla", "corrupti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.about != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [about](docs/about/README.md)

* [driveAboutGet](docs/about/README.md#driveaboutget) - Gets information about the user, the user's Drive, and system capabilities.

### [changes](docs/changes/README.md)

* [driveChangesGetStartPageToken](docs/changes/README.md#drivechangesgetstartpagetoken) - Gets the starting pageToken for listing future changes.
* [driveChangesList](docs/changes/README.md#drivechangeslist) - Lists the changes for a user or shared drive.
* [driveChangesWatch](docs/changes/README.md#drivechangeswatch) - Subscribes to changes for a user. To use this method, you must include the pageToken query parameter.

### [channels](docs/channels/README.md)

* [driveChannelsStop](docs/channels/README.md#drivechannelsstop) - Stop watching resources through this channel

### [comments](docs/comments/README.md)

* [driveCommentsCreate](docs/comments/README.md#drivecommentscreate) - Creates a comment on a file.
* [driveCommentsDelete](docs/comments/README.md#drivecommentsdelete) - Deletes a comment.
* [driveCommentsGet](docs/comments/README.md#drivecommentsget) - Gets a comment by ID.
* [driveCommentsList](docs/comments/README.md#drivecommentslist) - Lists a file's comments.
* [driveCommentsUpdate](docs/comments/README.md#drivecommentsupdate) - Updates a comment with patch semantics.

### [drives](docs/drives/README.md)

* [driveDrivesCreate](docs/drives/README.md#drivedrivescreate) - Creates a shared drive.
* [driveDrivesDelete](docs/drives/README.md#drivedrivesdelete) - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* [driveDrivesGet](docs/drives/README.md#drivedrivesget) - Gets a shared drive's metadata by ID.
* [driveDrivesHide](docs/drives/README.md#drivedriveshide) - Hides a shared drive from the default view.
* [driveDrivesList](docs/drives/README.md#drivedriveslist) - Lists the user's shared drives.
* [driveDrivesUnhide](docs/drives/README.md#drivedrivesunhide) - Restores a shared drive to the default view.
* [driveDrivesUpdate](docs/drives/README.md#drivedrivesupdate) - Updates the metadata for a shared drive.

### [files](docs/files/README.md)

* [driveFilesCopy](docs/files/README.md#drivefilescopy) - Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
* [driveFilesCreate](docs/files/README.md#drivefilescreate) - Creates a file.
* [driveFilesDelete](docs/files/README.md#drivefilesdelete) - Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
* [driveFilesEmptyTrash](docs/files/README.md#drivefilesemptytrash) - Permanently deletes all trashed files of a user or shared drive.
* [driveFilesExport](docs/files/README.md#drivefilesexport) - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* [driveFilesGenerateIds](docs/files/README.md#drivefilesgenerateids) - Generates a set of file IDs which can be provided in create or copy requests.
* [driveFilesGet](docs/files/README.md#drivefilesget) - Gets a file's metadata or content by ID.
* [driveFilesList](docs/files/README.md#drivefileslist) - Lists or searches files.
* [driveFilesListLabels](docs/files/README.md#drivefileslistlabels) - Lists the labels on a file.
* [driveFilesModifyLabels](docs/files/README.md#drivefilesmodifylabels) - Modifies the set of labels on a file.
* [driveFilesUpdate](docs/files/README.md#drivefilesupdate) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* [driveFilesWatch](docs/files/README.md#drivefileswatch) - Subscribe to changes on a file.

### [permissions](docs/permissions/README.md)

* [drivePermissionsCreate](docs/permissions/README.md#drivepermissionscreate) - Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives.
* [drivePermissionsDelete](docs/permissions/README.md#drivepermissionsdelete) - Deletes a permission.
* [drivePermissionsGet](docs/permissions/README.md#drivepermissionsget) - Gets a permission by ID.
* [drivePermissionsList](docs/permissions/README.md#drivepermissionslist) - Lists a file's or shared drive's permissions.
* [drivePermissionsUpdate](docs/permissions/README.md#drivepermissionsupdate) - Updates a permission with patch semantics.

### [replies](docs/replies/README.md)

* [driveRepliesCreate](docs/replies/README.md#driverepliescreate) - Creates a reply to a comment.
* [driveRepliesDelete](docs/replies/README.md#driverepliesdelete) - Deletes a reply.
* [driveRepliesGet](docs/replies/README.md#driverepliesget) - Gets a reply by ID.
* [driveRepliesList](docs/replies/README.md#drivereplieslist) - Lists a comment's replies.
* [driveRepliesUpdate](docs/replies/README.md#driverepliesupdate) - Updates a reply with patch semantics.

### [revisions](docs/revisions/README.md)

* [driveRevisionsDelete](docs/revisions/README.md#driverevisionsdelete) - Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* [driveRevisionsGet](docs/revisions/README.md#driverevisionsget) - Gets a revision's metadata or content by ID.
* [driveRevisionsList](docs/revisions/README.md#driverevisionslist) - Lists a file's revisions.
* [driveRevisionsUpdate](docs/revisions/README.md#driverevisionsupdate) - Updates a revision with patch semantics.

### [teamdrives](docs/teamdrives/README.md)

* [driveTeamdrivesCreate](docs/teamdrives/README.md#driveteamdrivescreate) - Deprecated use drives.create instead.
* [driveTeamdrivesDelete](docs/teamdrives/README.md#driveteamdrivesdelete) - Deprecated use drives.delete instead.
* [driveTeamdrivesGet](docs/teamdrives/README.md#driveteamdrivesget) - Deprecated use drives.get instead.
* [driveTeamdrivesList](docs/teamdrives/README.md#driveteamdriveslist) - Deprecated use drives.list instead.
* [driveTeamdrivesUpdate](docs/teamdrives/README.md#driveteamdrivesupdate) - Deprecated use drives.update instead
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
