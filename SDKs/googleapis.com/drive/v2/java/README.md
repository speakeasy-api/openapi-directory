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
                includeSubscribed = false;
                key = "provident";
                maxChangeIdCount = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "unde";
                startChangeId = "nulla";
                userIp = "corrupti";
            }};            

            DriveAboutGetResponse res = sdk.about.driveAboutGet(req, new DriveAboutGetSecurity() {{
                option1 = new DriveAboutGetSecurityOption1("illum", "vel") {{
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

* [driveAboutGet](docs/about/README.md#driveaboutget) - Gets the information about the current user along with Drive API settings

### [apps](docs/apps/README.md)

* [driveAppsGet](docs/apps/README.md#driveappsget) - Gets a specific app.
* [driveAppsList](docs/apps/README.md#driveappslist) - Lists a user's installed apps.

### [changes](docs/changes/README.md)

* [driveChangesGet](docs/changes/README.md#drivechangesget) - Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
* [driveChangesGetStartPageToken](docs/changes/README.md#drivechangesgetstartpagetoken) - Gets the starting pageToken for listing future changes.
* [driveChangesList](docs/changes/README.md#drivechangeslist) - Lists the changes for a user or shared drive.
* [driveChangesWatch](docs/changes/README.md#drivechangeswatch) - Subscribe to changes for a user.

### [channels](docs/channels/README.md)

* [driveChannelsStop](docs/channels/README.md#drivechannelsstop) - Stop watching resources through this channel

### [children](docs/children/README.md)

* [driveChildrenDelete](docs/children/README.md#drivechildrendelete) - Removes a child from a folder.
* [driveChildrenGet](docs/children/README.md#drivechildrenget) - Gets a specific child reference.
* [driveChildrenInsert](docs/children/README.md#drivechildreninsert) - Inserts a file into a folder.
* [driveChildrenList](docs/children/README.md#drivechildrenlist) - Lists a folder's children.

### [comments](docs/comments/README.md)

* [driveCommentsDelete](docs/comments/README.md#drivecommentsdelete) - Deletes a comment.
* [driveCommentsGet](docs/comments/README.md#drivecommentsget) - Gets a comment by ID.
* [driveCommentsInsert](docs/comments/README.md#drivecommentsinsert) - Creates a new comment on the given file.
* [driveCommentsList](docs/comments/README.md#drivecommentslist) - Lists a file's comments.
* [driveCommentsPatch](docs/comments/README.md#drivecommentspatch) - Updates an existing comment.
* [driveCommentsUpdate](docs/comments/README.md#drivecommentsupdate) - Updates an existing comment.

### [drives](docs/drives/README.md)

* [driveDrivesDelete](docs/drives/README.md#drivedrivesdelete) - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* [driveDrivesGet](docs/drives/README.md#drivedrivesget) - Gets a shared drive's metadata by ID.
* [driveDrivesHide](docs/drives/README.md#drivedriveshide) - Hides a shared drive from the default view.
* [driveDrivesInsert](docs/drives/README.md#drivedrivesinsert) - Creates a new shared drive.
* [driveDrivesList](docs/drives/README.md#drivedriveslist) - Lists the user's shared drives.
* [driveDrivesUnhide](docs/drives/README.md#drivedrivesunhide) - Restores a shared drive to the default view.
* [driveDrivesUpdate](docs/drives/README.md#drivedrivesupdate) - Updates the metadata for a shared drive.

### [files](docs/files/README.md)

* [driveFilesCopy](docs/files/README.md#drivefilescopy) - Creates a copy of the specified file. Folders cannot be copied.
* [driveFilesDelete](docs/files/README.md#drivefilesdelete) - Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
* [driveFilesEmptyTrash](docs/files/README.md#drivefilesemptytrash) - Permanently deletes all trashed files of a user or shared drive.
* [driveFilesExport](docs/files/README.md#drivefilesexport) - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* [driveFilesGenerateIds](docs/files/README.md#drivefilesgenerateids) - Generates a set of file IDs which can be provided in insert or copy requests.
* [driveFilesGet](docs/files/README.md#drivefilesget) - Gets a file's metadata or content by ID.
* [driveFilesInsert](docs/files/README.md#drivefilesinsert) - Insert a new file.
* [driveFilesList](docs/files/README.md#drivefileslist) - Lists the user's files.
* [driveFilesListLabels](docs/files/README.md#drivefileslistlabels) - Lists the labels on a file.
* [driveFilesModifyLabels](docs/files/README.md#drivefilesmodifylabels) - Modifies the set of labels on a file.
* [driveFilesPatch](docs/files/README.md#drivefilespatch) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* [driveFilesTouch](docs/files/README.md#drivefilestouch) - Set the file's updated time to the current server time.
* [driveFilesTrash](docs/files/README.md#drivefilestrash) - Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
* [driveFilesUntrash](docs/files/README.md#drivefilesuntrash) - Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
* [driveFilesUpdate](docs/files/README.md#drivefilesupdate) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
* [driveFilesWatch](docs/files/README.md#drivefileswatch) - Subscribe to changes on a file.

### [parents](docs/parents/README.md)

* [driveParentsDelete](docs/parents/README.md#driveparentsdelete) - Removes a parent from a file.
* [driveParentsGet](docs/parents/README.md#driveparentsget) - Gets a specific parent reference.
* [driveParentsInsert](docs/parents/README.md#driveparentsinsert) - Adds a parent folder for a file.
* [driveParentsList](docs/parents/README.md#driveparentslist) - Lists a file's parents.

### [permissions](docs/permissions/README.md)

* [drivePermissionsDelete](docs/permissions/README.md#drivepermissionsdelete) - Deletes a permission from a file or shared drive.
* [drivePermissionsGet](docs/permissions/README.md#drivepermissionsget) - Gets a permission by ID.
* [drivePermissionsGetIdForEmail](docs/permissions/README.md#drivepermissionsgetidforemail) - Returns the permission ID for an email address.
* [drivePermissionsInsert](docs/permissions/README.md#drivepermissionsinsert) - Inserts a permission for a file or shared drive.
* [drivePermissionsList](docs/permissions/README.md#drivepermissionslist) - Lists a file's or shared drive's permissions.
* [drivePermissionsPatch](docs/permissions/README.md#drivepermissionspatch) - Updates a permission using patch semantics.
* [drivePermissionsUpdate](docs/permissions/README.md#drivepermissionsupdate) - Updates a permission.

### [properties](docs/properties/README.md)

* [drivePropertiesDelete](docs/properties/README.md#drivepropertiesdelete) - Deletes a property.
* [drivePropertiesGet](docs/properties/README.md#drivepropertiesget) - Gets a property by its key.
* [drivePropertiesInsert](docs/properties/README.md#drivepropertiesinsert) - Adds a property to a file, or updates it if it already exists.
* [drivePropertiesList](docs/properties/README.md#drivepropertieslist) - Lists a file's properties.
* [drivePropertiesPatch](docs/properties/README.md#drivepropertiespatch) - Updates a property.
* [drivePropertiesUpdate](docs/properties/README.md#drivepropertiesupdate) - Updates a property.

### [replies](docs/replies/README.md)

* [driveRepliesDelete](docs/replies/README.md#driverepliesdelete) - Deletes a reply.
* [driveRepliesGet](docs/replies/README.md#driverepliesget) - Gets a reply.
* [driveRepliesInsert](docs/replies/README.md#driverepliesinsert) - Creates a new reply to the given comment.
* [driveRepliesList](docs/replies/README.md#drivereplieslist) - Lists all of the replies to a comment.
* [driveRepliesPatch](docs/replies/README.md#driverepliespatch) - Updates an existing reply.
* [driveRepliesUpdate](docs/replies/README.md#driverepliesupdate) - Updates an existing reply.

### [revisions](docs/revisions/README.md)

* [driveRevisionsDelete](docs/revisions/README.md#driverevisionsdelete) - Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* [driveRevisionsGet](docs/revisions/README.md#driverevisionsget) - Gets a specific revision.
* [driveRevisionsList](docs/revisions/README.md#driverevisionslist) - Lists a file's revisions.
* [driveRevisionsPatch](docs/revisions/README.md#driverevisionspatch) - Updates a revision.
* [driveRevisionsUpdate](docs/revisions/README.md#driverevisionsupdate) - Updates a revision.

### [teamdrives](docs/teamdrives/README.md)

* [driveTeamdrivesDelete](docs/teamdrives/README.md#driveteamdrivesdelete) - Deprecated use drives.delete instead.
* [driveTeamdrivesGet](docs/teamdrives/README.md#driveteamdrivesget) - Deprecated use drives.get instead.
* [driveTeamdrivesInsert](docs/teamdrives/README.md#driveteamdrivesinsert) - Deprecated use drives.insert instead.
* [driveTeamdrivesList](docs/teamdrives/README.md#driveteamdriveslist) - Deprecated use drives.list instead.
* [driveTeamdrivesUpdate](docs/teamdrives/README.md#driveteamdrivesupdate) - Deprecated use drives.update instead.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
