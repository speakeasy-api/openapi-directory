# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/drive/v3/go
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
        Key: sdk.String("provident"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UserIP: sdk.String("unde"),
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

* [DriveAboutGet](docs/about/README.md#driveaboutget) - Gets information about the user, the user's Drive, and system capabilities.

### [Changes](docs/changes/README.md)

* [DriveChangesGetStartPageToken](docs/changes/README.md#drivechangesgetstartpagetoken) - Gets the starting pageToken for listing future changes.
* [DriveChangesList](docs/changes/README.md#drivechangeslist) - Lists the changes for a user or shared drive.
* [DriveChangesWatch](docs/changes/README.md#drivechangeswatch) - Subscribes to changes for a user. To use this method, you must include the pageToken query parameter.

### [Channels](docs/channels/README.md)

* [DriveChannelsStop](docs/channels/README.md#drivechannelsstop) - Stop watching resources through this channel

### [Comments](docs/comments/README.md)

* [DriveCommentsCreate](docs/comments/README.md#drivecommentscreate) - Creates a comment on a file.
* [DriveCommentsDelete](docs/comments/README.md#drivecommentsdelete) - Deletes a comment.
* [DriveCommentsGet](docs/comments/README.md#drivecommentsget) - Gets a comment by ID.
* [DriveCommentsList](docs/comments/README.md#drivecommentslist) - Lists a file's comments.
* [DriveCommentsUpdate](docs/comments/README.md#drivecommentsupdate) - Updates a comment with patch semantics.

### [Drives](docs/drives/README.md)

* [DriveDrivesCreate](docs/drives/README.md#drivedrivescreate) - Creates a shared drive.
* [DriveDrivesDelete](docs/drives/README.md#drivedrivesdelete) - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* [DriveDrivesGet](docs/drives/README.md#drivedrivesget) - Gets a shared drive's metadata by ID.
* [DriveDrivesHide](docs/drives/README.md#drivedriveshide) - Hides a shared drive from the default view.
* [DriveDrivesList](docs/drives/README.md#drivedriveslist) - Lists the user's shared drives.
* [DriveDrivesUnhide](docs/drives/README.md#drivedrivesunhide) - Restores a shared drive to the default view.
* [DriveDrivesUpdate](docs/drives/README.md#drivedrivesupdate) - Updates the metadata for a shared drive.

### [Files](docs/files/README.md)

* [DriveFilesCopy](docs/files/README.md#drivefilescopy) - Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
* [DriveFilesCreate](docs/files/README.md#drivefilescreate) - Creates a file.
* [DriveFilesDelete](docs/files/README.md#drivefilesdelete) - Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
* [DriveFilesEmptyTrash](docs/files/README.md#drivefilesemptytrash) - Permanently deletes all trashed files of a user or shared drive.
* [DriveFilesExport](docs/files/README.md#drivefilesexport) - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* [DriveFilesGenerateIds](docs/files/README.md#drivefilesgenerateids) - Generates a set of file IDs which can be provided in create or copy requests.
* [DriveFilesGet](docs/files/README.md#drivefilesget) - Gets a file's metadata or content by ID.
* [DriveFilesList](docs/files/README.md#drivefileslist) - Lists or searches files.
* [DriveFilesListLabels](docs/files/README.md#drivefileslistlabels) - Lists the labels on a file.
* [DriveFilesModifyLabels](docs/files/README.md#drivefilesmodifylabels) - Modifies the set of labels on a file.
* [DriveFilesUpdate](docs/files/README.md#drivefilesupdate) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* [DriveFilesWatch](docs/files/README.md#drivefileswatch) - Subscribe to changes on a file.

### [Permissions](docs/permissions/README.md)

* [DrivePermissionsCreate](docs/permissions/README.md#drivepermissionscreate) - Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives.
* [DrivePermissionsDelete](docs/permissions/README.md#drivepermissionsdelete) - Deletes a permission.
* [DrivePermissionsGet](docs/permissions/README.md#drivepermissionsget) - Gets a permission by ID.
* [DrivePermissionsList](docs/permissions/README.md#drivepermissionslist) - Lists a file's or shared drive's permissions.
* [DrivePermissionsUpdate](docs/permissions/README.md#drivepermissionsupdate) - Updates a permission with patch semantics.

### [Replies](docs/replies/README.md)

* [DriveRepliesCreate](docs/replies/README.md#driverepliescreate) - Creates a reply to a comment.
* [DriveRepliesDelete](docs/replies/README.md#driverepliesdelete) - Deletes a reply.
* [DriveRepliesGet](docs/replies/README.md#driverepliesget) - Gets a reply by ID.
* [DriveRepliesList](docs/replies/README.md#drivereplieslist) - Lists a comment's replies.
* [DriveRepliesUpdate](docs/replies/README.md#driverepliesupdate) - Updates a reply with patch semantics.

### [Revisions](docs/revisions/README.md)

* [DriveRevisionsDelete](docs/revisions/README.md#driverevisionsdelete) - Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* [DriveRevisionsGet](docs/revisions/README.md#driverevisionsget) - Gets a revision's metadata or content by ID.
* [DriveRevisionsList](docs/revisions/README.md#driverevisionslist) - Lists a file's revisions.
* [DriveRevisionsUpdate](docs/revisions/README.md#driverevisionsupdate) - Updates a revision with patch semantics.

### [Teamdrives](docs/teamdrives/README.md)

* [DriveTeamdrivesCreate](docs/teamdrives/README.md#driveteamdrivescreate) - Deprecated use drives.create instead.
* [DriveTeamdrivesDelete](docs/teamdrives/README.md#driveteamdrivesdelete) - Deprecated use drives.delete instead.
* [DriveTeamdrivesGet](docs/teamdrives/README.md#driveteamdrivesget) - Deprecated use drives.get instead.
* [DriveTeamdrivesList](docs/teamdrives/README.md#driveteamdriveslist) - Deprecated use drives.list instead.
* [DriveTeamdrivesUpdate](docs/teamdrives/README.md#driveteamdrivesupdate) - Deprecated use drives.update instead
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
