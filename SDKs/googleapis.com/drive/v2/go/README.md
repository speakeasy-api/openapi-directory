# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/drive/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.About.DriveAboutGet(ctx, operations.DriveAboutGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("corrupti"),
        IncludeSubscribed: sdk.Bool(false),
        Key: sdk.String("provident"),
        MaxChangeIDCount: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        StartChangeID: sdk.String("nulla"),
        UserIP: sdk.String("corrupti"),
    }, operations.DriveAboutGetSecurity{
        Option1: &operations.DriveAboutGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.About != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [About](docs/about/README.md)

* [DriveAboutGet](docs/about/README.md#driveaboutget) - Gets the information about the current user along with Drive API settings

### [Apps](docs/apps/README.md)

* [DriveAppsGet](docs/apps/README.md#driveappsget) - Gets a specific app.
* [DriveAppsList](docs/apps/README.md#driveappslist) - Lists a user's installed apps.

### [Changes](docs/changes/README.md)

* [DriveChangesGet](docs/changes/README.md#drivechangesget) - Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
* [DriveChangesGetStartPageToken](docs/changes/README.md#drivechangesgetstartpagetoken) - Gets the starting pageToken for listing future changes.
* [DriveChangesList](docs/changes/README.md#drivechangeslist) - Lists the changes for a user or shared drive.
* [DriveChangesWatch](docs/changes/README.md#drivechangeswatch) - Subscribe to changes for a user.

### [Channels](docs/channels/README.md)

* [DriveChannelsStop](docs/channels/README.md#drivechannelsstop) - Stop watching resources through this channel

### [Children](docs/children/README.md)

* [DriveChildrenDelete](docs/children/README.md#drivechildrendelete) - Removes a child from a folder.
* [DriveChildrenGet](docs/children/README.md#drivechildrenget) - Gets a specific child reference.
* [DriveChildrenInsert](docs/children/README.md#drivechildreninsert) - Inserts a file into a folder.
* [DriveChildrenList](docs/children/README.md#drivechildrenlist) - Lists a folder's children.

### [Comments](docs/comments/README.md)

* [DriveCommentsDelete](docs/comments/README.md#drivecommentsdelete) - Deletes a comment.
* [DriveCommentsGet](docs/comments/README.md#drivecommentsget) - Gets a comment by ID.
* [DriveCommentsInsert](docs/comments/README.md#drivecommentsinsert) - Creates a new comment on the given file.
* [DriveCommentsList](docs/comments/README.md#drivecommentslist) - Lists a file's comments.
* [DriveCommentsPatch](docs/comments/README.md#drivecommentspatch) - Updates an existing comment.
* [DriveCommentsUpdate](docs/comments/README.md#drivecommentsupdate) - Updates an existing comment.

### [Drives](docs/drives/README.md)

* [DriveDrivesDelete](docs/drives/README.md#drivedrivesdelete) - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* [DriveDrivesGet](docs/drives/README.md#drivedrivesget) - Gets a shared drive's metadata by ID.
* [DriveDrivesHide](docs/drives/README.md#drivedriveshide) - Hides a shared drive from the default view.
* [DriveDrivesInsert](docs/drives/README.md#drivedrivesinsert) - Creates a new shared drive.
* [DriveDrivesList](docs/drives/README.md#drivedriveslist) - Lists the user's shared drives.
* [DriveDrivesUnhide](docs/drives/README.md#drivedrivesunhide) - Restores a shared drive to the default view.
* [DriveDrivesUpdate](docs/drives/README.md#drivedrivesupdate) - Updates the metadata for a shared drive.

### [Files](docs/files/README.md)

* [DriveFilesCopy](docs/files/README.md#drivefilescopy) - Creates a copy of the specified file. Folders cannot be copied.
* [DriveFilesDelete](docs/files/README.md#drivefilesdelete) - Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
* [DriveFilesEmptyTrash](docs/files/README.md#drivefilesemptytrash) - Permanently deletes all trashed files of a user or shared drive.
* [DriveFilesExport](docs/files/README.md#drivefilesexport) - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* [DriveFilesGenerateIds](docs/files/README.md#drivefilesgenerateids) - Generates a set of file IDs which can be provided in insert or copy requests.
* [DriveFilesGet](docs/files/README.md#drivefilesget) - Gets a file's metadata or content by ID.
* [DriveFilesInsert](docs/files/README.md#drivefilesinsert) - Insert a new file.
* [DriveFilesList](docs/files/README.md#drivefileslist) - Lists the user's files.
* [DriveFilesListLabels](docs/files/README.md#drivefileslistlabels) - Lists the labels on a file.
* [DriveFilesModifyLabels](docs/files/README.md#drivefilesmodifylabels) - Modifies the set of labels on a file.
* [DriveFilesPatch](docs/files/README.md#drivefilespatch) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* [DriveFilesTouch](docs/files/README.md#drivefilestouch) - Set the file's updated time to the current server time.
* [DriveFilesTrash](docs/files/README.md#drivefilestrash) - Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
* [DriveFilesUntrash](docs/files/README.md#drivefilesuntrash) - Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
* [DriveFilesUpdate](docs/files/README.md#drivefilesupdate) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
* [DriveFilesWatch](docs/files/README.md#drivefileswatch) - Subscribe to changes on a file.

### [Parents](docs/parents/README.md)

* [DriveParentsDelete](docs/parents/README.md#driveparentsdelete) - Removes a parent from a file.
* [DriveParentsGet](docs/parents/README.md#driveparentsget) - Gets a specific parent reference.
* [DriveParentsInsert](docs/parents/README.md#driveparentsinsert) - Adds a parent folder for a file.
* [DriveParentsList](docs/parents/README.md#driveparentslist) - Lists a file's parents.

### [Permissions](docs/permissions/README.md)

* [DrivePermissionsDelete](docs/permissions/README.md#drivepermissionsdelete) - Deletes a permission from a file or shared drive.
* [DrivePermissionsGet](docs/permissions/README.md#drivepermissionsget) - Gets a permission by ID.
* [DrivePermissionsGetIDForEmail](docs/permissions/README.md#drivepermissionsgetidforemail) - Returns the permission ID for an email address.
* [DrivePermissionsInsert](docs/permissions/README.md#drivepermissionsinsert) - Inserts a permission for a file or shared drive.
* [DrivePermissionsList](docs/permissions/README.md#drivepermissionslist) - Lists a file's or shared drive's permissions.
* [DrivePermissionsPatch](docs/permissions/README.md#drivepermissionspatch) - Updates a permission using patch semantics.
* [DrivePermissionsUpdate](docs/permissions/README.md#drivepermissionsupdate) - Updates a permission.

### [Properties](docs/properties/README.md)

* [DrivePropertiesDelete](docs/properties/README.md#drivepropertiesdelete) - Deletes a property.
* [DrivePropertiesGet](docs/properties/README.md#drivepropertiesget) - Gets a property by its key.
* [DrivePropertiesInsert](docs/properties/README.md#drivepropertiesinsert) - Adds a property to a file, or updates it if it already exists.
* [DrivePropertiesList](docs/properties/README.md#drivepropertieslist) - Lists a file's properties.
* [DrivePropertiesPatch](docs/properties/README.md#drivepropertiespatch) - Updates a property.
* [DrivePropertiesUpdate](docs/properties/README.md#drivepropertiesupdate) - Updates a property.

### [Replies](docs/replies/README.md)

* [DriveRepliesDelete](docs/replies/README.md#driverepliesdelete) - Deletes a reply.
* [DriveRepliesGet](docs/replies/README.md#driverepliesget) - Gets a reply.
* [DriveRepliesInsert](docs/replies/README.md#driverepliesinsert) - Creates a new reply to the given comment.
* [DriveRepliesList](docs/replies/README.md#drivereplieslist) - Lists all of the replies to a comment.
* [DriveRepliesPatch](docs/replies/README.md#driverepliespatch) - Updates an existing reply.
* [DriveRepliesUpdate](docs/replies/README.md#driverepliesupdate) - Updates an existing reply.

### [Revisions](docs/revisions/README.md)

* [DriveRevisionsDelete](docs/revisions/README.md#driverevisionsdelete) - Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* [DriveRevisionsGet](docs/revisions/README.md#driverevisionsget) - Gets a specific revision.
* [DriveRevisionsList](docs/revisions/README.md#driverevisionslist) - Lists a file's revisions.
* [DriveRevisionsPatch](docs/revisions/README.md#driverevisionspatch) - Updates a revision.
* [DriveRevisionsUpdate](docs/revisions/README.md#driverevisionsupdate) - Updates a revision.

### [Teamdrives](docs/teamdrives/README.md)

* [DriveTeamdrivesDelete](docs/teamdrives/README.md#driveteamdrivesdelete) - Deprecated use drives.delete instead.
* [DriveTeamdrivesGet](docs/teamdrives/README.md#driveteamdrivesget) - Deprecated use drives.get instead.
* [DriveTeamdrivesInsert](docs/teamdrives/README.md#driveteamdrivesinsert) - Deprecated use drives.insert instead.
* [DriveTeamdrivesList](docs/teamdrives/README.md#driveteamdriveslist) - Deprecated use drives.list instead.
* [DriveTeamdrivesUpdate](docs/teamdrives/README.md#driveteamdrivesupdate) - Deprecated use drives.update instead.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
