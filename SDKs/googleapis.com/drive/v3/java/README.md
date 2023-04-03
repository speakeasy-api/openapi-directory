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

import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption3;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption4;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption5;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption6;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption7;
import org.openapis.openapi.models.operations.DriveAboutGetSecurity;
import org.openapis.openapi.models.operations.DriveAboutGetRequest;
import org.openapis.openapi.models.operations.DriveAboutGetResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveAboutGetRequest req = new DriveAboutGetRequest() {{
                alt = "json";
                fields = "corrupti";
                key = "provident";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quibusdam";
                userIp = "unde";
            }}            

            DriveAboutGetResponse res = sdk.about.driveAboutGet(req, new DriveAboutGetSecurity() {{
                option1 = new DriveAboutGetSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.about.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### about

* `driveAboutGet` - Gets information about the user, the user's Drive, and system capabilities.

### changes

* `driveChangesGetStartPageToken` - Gets the starting pageToken for listing future changes.
* `driveChangesList` - Lists the changes for a user or shared drive.
* `driveChangesWatch` - Subscribes to changes for a user. To use this method, you must include the pageToken query parameter.

### channels

* `driveChannelsStop` - Stop watching resources through this channel

### comments

* `driveCommentsCreate` - Creates a comment on a file.
* `driveCommentsDelete` - Deletes a comment.
* `driveCommentsGet` - Gets a comment by ID.
* `driveCommentsList` - Lists a file's comments.
* `driveCommentsUpdate` - Updates a comment with patch semantics.

### drives

* `driveDrivesCreate` - Creates a shared drive.
* `driveDrivesDelete` - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* `driveDrivesGet` - Gets a shared drive's metadata by ID.
* `driveDrivesHide` - Hides a shared drive from the default view.
* `driveDrivesList` - Lists the user's shared drives.
* `driveDrivesUnhide` - Restores a shared drive to the default view.
* `driveDrivesUpdate` - Updates the metadata for a shared drive.

### files

* `driveFilesCopy` - Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
* `driveFilesCreate` - Creates a file.
* `driveFilesDelete` - Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
* `driveFilesEmptyTrash` - Permanently deletes all of the user's trashed files.
* `driveFilesExport` - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* `driveFilesGenerateIds` - Generates a set of file IDs which can be provided in create or copy requests.
* `driveFilesGet` - Gets a file's metadata or content by ID.
* `driveFilesList` - Lists or searches files.
* `driveFilesListLabels` - Lists the labels on a file.
* `driveFilesModifyLabels` - Modifies the set of labels on a file.
* `driveFilesUpdate` - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* `driveFilesWatch` - Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.

### permissions

* `drivePermissionsCreate` - Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives.
* `drivePermissionsDelete` - Deletes a permission.
* `drivePermissionsGet` - Gets a permission by ID.
* `drivePermissionsList` - Lists a file's or shared drive's permissions.
* `drivePermissionsUpdate` - Updates a permission with patch semantics.

### replies

* `driveRepliesCreate` - Creates a reply to a comment.
* `driveRepliesDelete` - Deletes a reply.
* `driveRepliesGet` - Gets a reply by ID.
* `driveRepliesList` - Lists a comment's replies.
* `driveRepliesUpdate` - Updates a reply with patch semantics.

### revisions

* `driveRevisionsDelete` - Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* `driveRevisionsGet` - Gets a revision's metadata or content by ID.
* `driveRevisionsList` - Lists a file's revisions.
* `driveRevisionsUpdate` - Updates a revision with patch semantics.

### teamdrives

* `driveTeamdrivesCreate` - Deprecated use drives.create instead.
* `driveTeamdrivesDelete` - Deprecated use drives.delete instead.
* `driveTeamdrivesGet` - Deprecated use drives.get instead.
* `driveTeamdrivesList` - Deprecated use drives.list instead.
* `driveTeamdrivesUpdate` - Deprecated use drives.update instead
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
