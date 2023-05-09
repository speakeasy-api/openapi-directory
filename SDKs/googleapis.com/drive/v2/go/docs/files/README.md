# Files

### Available Operations

* [DriveFilesCopy](#drivefilescopy) - Creates a copy of the specified file. Folders cannot be copied.
* [DriveFilesDelete](#drivefilesdelete) - Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
* [DriveFilesEmptyTrash](#drivefilesemptytrash) - Permanently deletes all trashed files of a user or shared drive.
* [DriveFilesExport](#drivefilesexport) - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* [DriveFilesGenerateIds](#drivefilesgenerateids) - Generates a set of file IDs which can be provided in insert or copy requests.
* [DriveFilesGet](#drivefilesget) - Gets a file's metadata or content by ID.
* [DriveFilesInsert](#drivefilesinsert) - Insert a new file.
* [DriveFilesList](#drivefileslist) - Lists the user's files.
* [DriveFilesListLabels](#drivefileslistlabels) - Lists the labels on a file.
* [DriveFilesModifyLabels](#drivefilesmodifylabels) - Modifies the set of labels on a file.
* [DriveFilesPatch](#drivefilespatch) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* [DriveFilesTouch](#drivefilestouch) - Set the file's updated time to the current server time.
* [DriveFilesTrash](#drivefilestrash) - Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
* [DriveFilesUntrash](#drivefilesuntrash) - Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
* [DriveFilesUpdate](#drivefilesupdate) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
* [DriveFilesWatch](#drivefileswatch) - Subscribe to changes on a file.

## DriveFilesCopy

Creates a copy of the specified file. Folders cannot be copied.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.DriveFilesCopy(ctx, operations.DriveFilesCopyRequest{
        FileInput: &shared.FileInput{
            AlternateLink: sdk.String("libero"),
            AppDataContents: sdk.Bool(false),
            CanComment: sdk.Bool(false),
            CanReadRevisions: sdk.Bool(false),
            Capabilities: &shared.FileCapabilities{
                CanAcceptOwnership: sdk.Bool(false),
                CanAddChildren: sdk.Bool(false),
                CanAddFolderFromAnotherDrive: sdk.Bool(false),
                CanAddMyDriveParent: sdk.Bool(false),
                CanChangeCopyRequiresWriterPermission: sdk.Bool(false),
                CanChangeRestrictedDownload: sdk.Bool(false),
                CanChangeSecurityUpdateEnabled: sdk.Bool(false),
                CanComment: sdk.Bool(false),
                CanCopy: sdk.Bool(false),
                CanDelete: sdk.Bool(false),
                CanDeleteChildren: sdk.Bool(false),
                CanDownload: sdk.Bool(false),
                CanEdit: sdk.Bool(false),
                CanListChildren: sdk.Bool(false),
                CanModifyContent: sdk.Bool(false),
                CanModifyContentRestriction: sdk.Bool(false),
                CanModifyLabels: sdk.Bool(false),
                CanMoveChildrenOutOfDrive: sdk.Bool(false),
                CanMoveChildrenOutOfTeamDrive: sdk.Bool(false),
                CanMoveChildrenWithinDrive: sdk.Bool(false),
                CanMoveChildrenWithinTeamDrive: sdk.Bool(false),
                CanMoveItemIntoTeamDrive: sdk.Bool(false),
                CanMoveItemOutOfDrive: sdk.Bool(false),
                CanMoveItemOutOfTeamDrive: sdk.Bool(false),
                CanMoveItemWithinDrive: sdk.Bool(false),
                CanMoveItemWithinTeamDrive: sdk.Bool(false),
                CanMoveTeamDriveItem: sdk.Bool(false),
                CanReadDrive: sdk.Bool(false),
                CanReadLabels: sdk.Bool(false),
                CanReadRevisions: sdk.Bool(false),
                CanReadTeamDrive: sdk.Bool(false),
                CanRemoveChildren: sdk.Bool(false),
                CanRemoveMyDriveParent: sdk.Bool(false),
                CanRename: sdk.Bool(false),
                CanShare: sdk.Bool(false),
                CanTrash: sdk.Bool(false),
                CanTrashChildren: sdk.Bool(false),
                CanUntrash: sdk.Bool(false),
            },
            ContentRestrictions: []shared.ContentRestriction{
                shared.ContentRestriction{
                    ReadOnly: sdk.Bool(false),
                    Reason: sdk.String("aut"),
                    RestrictingUser: &shared.User{
                        DisplayName: sdk.String("deleniti"),
                        EmailAddress: sdk.String("impedit"),
                        IsAuthenticatedUser: sdk.Bool(false),
                        Kind: sdk.String("aliquam"),
                        PermissionID: sdk.String("fugit"),
                        Picture: &shared.UserPicture{
                            URL: sdk.String("accusamus"),
                        },
                    },
                    RestrictionDate: types.MustTimeFromString("2022-10-01T12:32:41.161Z"),
                    Type: sdk.String("et"),
                },
            },
            CopyRequiresWriterPermission: sdk.Bool(false),
            Copyable: sdk.Bool(false),
            CreatedDate: types.MustTimeFromString("2021-08-28T09:43:20.644Z"),
            DefaultOpenWithLink: sdk.String("placeat"),
            Description: sdk.String("velit"),
            DownloadURL: sdk.String("eum"),
            DriveID: sdk.String("autem"),
            Editable: sdk.Bool(false),
            EmbedLink: sdk.String("nobis"),
            Etag: sdk.String("quas"),
            ExplicitlyTrashed: sdk.Bool(false),
            FileExtension: sdk.String("assumenda"),
            FileSize: sdk.String("nulla"),
            FolderColorRgb: sdk.String("voluptas"),
            FullFileExtension: sdk.String("libero"),
            HasAugmentedPermissions: sdk.Bool(false),
            HasThumbnail: sdk.Bool(false),
            HeadRevisionID: sdk.String("quasi"),
            IconLink: sdk.String("tempora"),
            ID: sdk.String("42907474-778a-47bd-866d-28c10ab3cdca"),
            ImageMediaMetadata: &shared.FileImageMediaMetadata{
                Aperture: sdk.Float32(2594.22),
                CameraMake: sdk.String("eos"),
                CameraModel: sdk.String("voluptas"),
                ColorSpace: sdk.String("ab"),
                Date: sdk.String("cupiditate"),
                ExposureBias: sdk.Float32(96.88),
                ExposureMode: sdk.String("tempora"),
                ExposureTime: sdk.Float32(8920.5),
                FlashUsed: sdk.Bool(false),
                FocalLength: sdk.Float32(3708.53),
                Height: sdk.Int(133465),
                IsoSpeed: sdk.Int(197054),
                Lens: sdk.String("quo"),
                Location: &shared.FileImageMediaMetadataLocation{
                    Altitude: sdk.Float64(4598.56),
                    Latitude: sdk.Float64(9251.64),
                    Longitude: sdk.Float64(446.12),
                },
                MaxApertureValue: sdk.Float32(7151.79),
                MeteringMode: sdk.String("quod"),
                Rotation: sdk.Int(490819),
                Sensor: sdk.String("inventore"),
                SubjectDistance: sdk.Int(469498),
                WhiteBalance: sdk.String("totam"),
                Width: sdk.Int(882710),
            },
            IndexableText: &shared.FileIndexableText{
                Text: sdk.String("aliquam"),
            },
            IsAppAuthorized: sdk.Bool(false),
            Kind: sdk.String("odio"),
            LabelInfo: &shared.FileLabelInfo{
                Labels: []shared.Label{
                    shared.Label{
                        Fields: map[string]shared.LabelField{
                            "sapiente": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-01-19"),
                                },
                                ID: sdk.String("0c688282-aa48-4256-af22-2e9817ee17cb"),
                                Integer: []string{
                                    "aliquid",
                                    "quasi",
                                    "saepe",
                                    "vel",
                                },
                                Kind: sdk.String("harum"),
                                Selection: []string{
                                    "rerum",
                                    "occaecati",
                                },
                                Text: []string{
                                    "distinctio",
                                    "eligendi",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("culpa"),
                                        EmailAddress: sdk.String("tempore"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("adipisci"),
                                        PermissionID: sdk.String("cumque"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("consequuntur"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("consequatur"),
                            },
                            "minus": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-04-21"),
                                    types.MustDateFromString("2022-07-01"),
                                },
                                ID: sdk.String("9fd871f9-9dd2-4efd-921a-a6f1e674bdb0"),
                                Integer: []string{
                                    "sapiente",
                                    "dicta",
                                },
                                Kind: sdk.String("ullam"),
                                Selection: []string{
                                    "ullam",
                                    "nisi",
                                },
                                Text: []string{
                                    "voluptatum",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("quibusdam"),
                                        EmailAddress: sdk.String("ex"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("deleniti"),
                                        PermissionID: sdk.String("itaque"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("dolorum"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("architecto"),
                            },
                        },
                        ID: sdk.String("9f1d1705-1339-4d08-886a-1840394c2607"),
                        Kind: sdk.String("dicta"),
                        RevisionID: sdk.String("maiores"),
                    },
                    shared.Label{
                        Fields: map[string]shared.LabelField{
                            "velit": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-01-04"),
                                    types.MustDateFromString("2022-08-04"),
                                    types.MustDateFromString("2022-11-02"),
                                    types.MustDateFromString("2021-01-31"),
                                },
                                ID: sdk.String("c7af515c-c413-4aa6-baae-8d67864dbb67"),
                                Integer: []string{
                                    "reiciendis",
                                    "assumenda",
                                },
                                Kind: sdk.String("nemo"),
                                Selection: []string{
                                    "aliquid",
                                    "aperiam",
                                    "cum",
                                    "consectetur",
                                },
                                Text: []string{
                                    "exercitationem",
                                    "earum",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("numquam"),
                                        EmailAddress: sdk.String("doloribus"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("suscipit"),
                                        PermissionID: sdk.String("reiciendis"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("quidem"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("saepe"),
                                        EmailAddress: sdk.String("necessitatibus"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("dolore"),
                                        PermissionID: sdk.String("sunt"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("asperiores"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("adipisci"),
                                        EmailAddress: sdk.String("non"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("amet"),
                                        PermissionID: sdk.String("beatae"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("dignissimos"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("a"),
                                        EmailAddress: sdk.String("debitis"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("consectetur"),
                                        PermissionID: sdk.String("corporis"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("harum"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("laboriosam"),
                            },
                            "ipsa": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-10-09"),
                                    types.MustDateFromString("2021-02-08"),
                                    types.MustDateFromString("2022-11-13"),
                                    types.MustDateFromString("2022-08-17"),
                                },
                                ID: sdk.String("55ba3c28-744e-4d53-b88f-3a8d8f5c0b2f"),
                                Integer: []string{
                                    "asperiores",
                                },
                                Kind: sdk.String("facilis"),
                                Selection: []string{
                                    "expedita",
                                    "ab",
                                },
                                Text: []string{
                                    "dolore",
                                    "laborum",
                                    "sed",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("commodi"),
                                        EmailAddress: sdk.String("quidem"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("explicabo"),
                                        PermissionID: sdk.String("voluptas"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("unde"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("architecto"),
                                        EmailAddress: sdk.String("suscipit"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("sapiente"),
                                        PermissionID: sdk.String("debitis"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("illo"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("reiciendis"),
                            },
                            "perferendis": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-03-06"),
                                    types.MustDateFromString("2022-05-29"),
                                    types.MustDateFromString("2022-02-07"),
                                },
                                ID: sdk.String("3698f447-f603-4e8b-845e-80ca55efd20e"),
                                Integer: []string{
                                    "veniam",
                                    "in",
                                },
                                Kind: sdk.String("officiis"),
                                Selection: []string{
                                    "laudantium",
                                },
                                Text: []string{
                                    "praesentium",
                                    "cum",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("dolorum"),
                                        EmailAddress: sdk.String("voluptatum"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("error"),
                                        PermissionID: sdk.String("hic"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("expedita"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("debitis"),
                                        EmailAddress: sdk.String("neque"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("dolorum"),
                                        PermissionID: sdk.String("nostrum"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("officia"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("dolorum"),
                            },
                        },
                        ID: sdk.String("8e4824d0-ab40-4750-88e5-1862065e904f"),
                        Kind: sdk.String("dolorem"),
                        RevisionID: sdk.String("harum"),
                    },
                    shared.Label{
                        Fields: map[string]shared.LabelField{
                            "architecto": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-04-22"),
                                    types.MustDateFromString("2021-08-28"),
                                    types.MustDateFromString("2021-02-07"),
                                },
                                ID: sdk.String("603a79f9-dfe0-4ab7-9a8a-50ce187f86bc"),
                                Integer: []string{
                                    "esse",
                                },
                                Kind: sdk.String("amet"),
                                Selection: []string{
                                    "ea",
                                    "atque",
                                    "error",
                                    "officiis",
                                },
                                Text: []string{
                                    "accusamus",
                                    "natus",
                                    "minima",
                                    "aspernatur",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("maiores"),
                                        EmailAddress: sdk.String("corrupti"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("at"),
                                        PermissionID: sdk.String("error"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("blanditiis"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("suscipit"),
                                        EmailAddress: sdk.String("repudiandae"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("atque"),
                                        PermissionID: sdk.String("atque"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("sunt"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("recusandae"),
                            },
                        },
                        ID: sdk.String("ad4f0e10-1256-43f9-8e29-e973e922a57a"),
                        Kind: sdk.String("illo"),
                        RevisionID: sdk.String("corporis"),
                    },
                },
            },
            Labels: &shared.FileLabels{
                Hidden: sdk.Bool(false),
                Modified: sdk.Bool(false),
                Restricted: sdk.Bool(false),
                Starred: sdk.Bool(false),
                Trashed: sdk.Bool(false),
                Viewed: sdk.Bool(false),
            },
            LastModifyingUser: &shared.User{
                DisplayName: sdk.String("quidem"),
                EmailAddress: sdk.String("eveniet"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("non"),
                PermissionID: sdk.String("vero"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("doloremque"),
                },
            },
            LastModifyingUserName: sdk.String("iure"),
            LastViewedByMeDate: types.MustTimeFromString("2022-06-26T01:43:04.262Z"),
            LinkShareMetadata: &shared.FileLinkShareMetadata{
                SecurityUpdateEligible: sdk.Bool(false),
                SecurityUpdateEnabled: sdk.Bool(false),
            },
            MarkedViewedByMeDate: types.MustTimeFromString("2022-07-11T17:54:29.915Z"),
            Md5Checksum: sdk.String("eveniet"),
            MimeType: sdk.String("qui"),
            ModifiedByMeDate: types.MustTimeFromString("2022-02-17T14:59:36.472Z"),
            ModifiedDate: types.MustTimeFromString("2022-06-09T15:08:05.768Z"),
            OpenWithLinks: map[string]string{
                "distinctio": "voluptatum",
                "rem": "aliquam",
                "ad": "repellat",
            },
            OriginalFilename: sdk.String("alias"),
            OwnedByMe: sdk.Bool(false),
            OwnerNames: []string{
                "perspiciatis",
                "nihil",
            },
            Owners: []shared.User{
                shared.User{
                    DisplayName: sdk.String("voluptas"),
                    EmailAddress: sdk.String("alias"),
                    IsAuthenticatedUser: sdk.Bool(false),
                    Kind: sdk.String("maiores"),
                    PermissionID: sdk.String("reiciendis"),
                    Picture: &shared.UserPicture{
                        URL: sdk.String("dolores"),
                    },
                },
                shared.User{
                    DisplayName: sdk.String("id"),
                    EmailAddress: sdk.String("minima"),
                    IsAuthenticatedUser: sdk.Bool(false),
                    Kind: sdk.String("dolore"),
                    PermissionID: sdk.String("dolorum"),
                    Picture: &shared.UserPicture{
                        URL: sdk.String("nesciunt"),
                    },
                },
                shared.User{
                    DisplayName: sdk.String("quae"),
                    EmailAddress: sdk.String("recusandae"),
                    IsAuthenticatedUser: sdk.Bool(false),
                    Kind: sdk.String("omnis"),
                    PermissionID: sdk.String("quaerat"),
                    Picture: &shared.UserPicture{
                        URL: sdk.String("molestiae"),
                    },
                },
            },
            Parents: []shared.ParentReference{
                shared.ParentReference{
                    ID: sdk.String("4a3e865e-7956-4f92-91a5-a9da660ff57b"),
                    IsRoot: sdk.Bool(false),
                    Kind: sdk.String("earum"),
                    ParentLink: sdk.String("officia"),
                    SelfLink: sdk.String("laborum"),
                },
                shared.ParentReference{
                    ID: sdk.String("d4f9efc1-b451-42c1-8326-48dc2f615199"),
                    IsRoot: sdk.Bool(false),
                    Kind: sdk.String("earum"),
                    ParentLink: sdk.String("soluta"),
                    SelfLink: sdk.String("hic"),
                },
            },
            PermissionIds: []string{
                "eaque",
                "earum",
                "perspiciatis",
                "maiores",
            },
            Permissions: []shared.PermissionInput{
                shared.PermissionInput{
                    AdditionalRoles: []string{
                        "porro",
                        "suscipit",
                    },
                    AuthKey: sdk.String("dolorem"),
                    Deleted: sdk.Bool(false),
                    Domain: sdk.String("fugit"),
                    EmailAddress: sdk.String("cumque"),
                    Etag: sdk.String("fuga"),
                    ExpirationDate: types.MustTimeFromString("2022-05-06T06:45:54.702Z"),
                    ID: sdk.String("ed011799-6312-4fde-8477-1778ff61d017"),
                    Kind: sdk.String("tempora"),
                    Name: sdk.String("Carla Feil MD"),
                    PendingOwner: sdk.Bool(false),
                    PhotoLink: sdk.String("sunt"),
                    Role: sdk.String("nostrum"),
                    SelfLink: sdk.String("fugiat"),
                    Type: sdk.String("expedita"),
                    Value: sdk.String("aliquid"),
                    View: sdk.String("officia"),
                    WithLink: sdk.Bool(false),
                },
                shared.PermissionInput{
                    AdditionalRoles: []string{
                        "aliquid",
                        "perferendis",
                    },
                    AuthKey: sdk.String("eum"),
                    Deleted: sdk.Bool(false),
                    Domain: sdk.String("voluptas"),
                    EmailAddress: sdk.String("iste"),
                    Etag: sdk.String("id"),
                    ExpirationDate: types.MustTimeFromString("2022-05-17T17:51:43.476Z"),
                    ID: sdk.String("deaab585-1d6c-4645-b08b-61891baa0fe1"),
                    Kind: sdk.String("fuga"),
                    Name: sdk.String("Ms. Doyle Barrows"),
                    PendingOwner: sdk.Bool(false),
                    PhotoLink: sdk.String("ex"),
                    Role: sdk.String("sapiente"),
                    SelfLink: sdk.String("rem"),
                    Type: sdk.String("minus"),
                    Value: sdk.String("nemo"),
                    View: sdk.String("asperiores"),
                    WithLink: sdk.Bool(false),
                },
                shared.PermissionInput{
                    AdditionalRoles: []string{
                        "ullam",
                    },
                    AuthKey: sdk.String("perferendis"),
                    Deleted: sdk.Bool(false),
                    Domain: sdk.String("illum"),
                    EmailAddress: sdk.String("totam"),
                    Etag: sdk.String("impedit"),
                    ExpirationDate: types.MustTimeFromString("2020-11-03T00:32:12.114Z"),
                    ID: sdk.String("5a341814-3010-4421-813d-5208ece7e253"),
                    Kind: sdk.String("expedita"),
                    Name: sdk.String("Kristin Legros"),
                    PendingOwner: sdk.Bool(false),
                    PhotoLink: sdk.String("ab"),
                    Role: sdk.String("porro"),
                    SelfLink: sdk.String("autem"),
                    Type: sdk.String("nobis"),
                    Value: sdk.String("laboriosam"),
                    View: sdk.String("recusandae"),
                    WithLink: sdk.Bool(false),
                },
                shared.PermissionInput{
                    AdditionalRoles: []string{
                        "voluptatem",
                    },
                    AuthKey: sdk.String("exercitationem"),
                    Deleted: sdk.Bool(false),
                    Domain: sdk.String("necessitatibus"),
                    EmailAddress: sdk.String("quasi"),
                    Etag: sdk.String("nisi"),
                    ExpirationDate: types.MustTimeFromString("2020-05-14T04:22:15.063Z"),
                    ID: sdk.String("ab3fec95-78a6-4458-8273-a8418d162309"),
                    Kind: sdk.String("reiciendis"),
                    Name: sdk.String("John Monahan"),
                    PendingOwner: sdk.Bool(false),
                    PhotoLink: sdk.String("iste"),
                    Role: sdk.String("magni"),
                    SelfLink: sdk.String("inventore"),
                    Type: sdk.String("fuga"),
                    Value: sdk.String("accusamus"),
                    View: sdk.String("voluptatibus"),
                    WithLink: sdk.Bool(false),
                },
            },
            Properties: []shared.Property{
                shared.Property{
                    Etag: sdk.String("omnis"),
                    Key: sdk.String("delectus"),
                    Kind: sdk.String("minima"),
                    SelfLink: sdk.String("praesentium"),
                    Value: sdk.String("maxime"),
                    Visibility: sdk.String("magnam"),
                },
                shared.Property{
                    Etag: sdk.String("temporibus"),
                    Key: sdk.String("quos"),
                    Kind: sdk.String("commodi"),
                    SelfLink: sdk.String("itaque"),
                    Value: sdk.String("commodi"),
                    Visibility: sdk.String("totam"),
                },
                shared.Property{
                    Etag: sdk.String("earum"),
                    Key: sdk.String("modi"),
                    Kind: sdk.String("nam"),
                    SelfLink: sdk.String("vero"),
                    Value: sdk.String("voluptatem"),
                    Visibility: sdk.String("ipsam"),
                },
            },
            QuotaBytesUsed: sdk.String("vel"),
            ResourceKey: sdk.String("alias"),
            SelfLink: sdk.String("quasi"),
            Sha1Checksum: sdk.String("non"),
            Sha256Checksum: sdk.String("maiores"),
            Shareable: sdk.Bool(false),
            Shared: sdk.Bool(false),
            SharedWithMeDate: types.MustTimeFromString("2022-06-05T01:08:19.216Z"),
            SharingUser: &shared.User{
                DisplayName: sdk.String("nulla"),
                EmailAddress: sdk.String("deserunt"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("esse"),
                PermissionID: sdk.String("nemo"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("reprehenderit"),
                },
            },
            ShortcutDetails: &shared.FileShortcutDetails{
                TargetID: sdk.String("est"),
                TargetMimeType: sdk.String("quis"),
                TargetResourceKey: sdk.String("sint"),
            },
            Spaces: []string{
                "impedit",
                "hic",
                "necessitatibus",
                "asperiores",
            },
            TeamDriveID: sdk.String("ex"),
            Thumbnail: &shared.FileThumbnail{
                Image: sdk.String("voluptas"),
                MimeType: sdk.String("debitis"),
            },
            ThumbnailLink: sdk.String("delectus"),
            ThumbnailVersion: sdk.String("quae"),
            Title: sdk.String("Miss"),
            TrashedDate: types.MustTimeFromString("2021-08-25T17:55:33.849Z"),
            TrashingUser: &shared.User{
                DisplayName: sdk.String("consectetur"),
                EmailAddress: sdk.String("velit"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("atque"),
                PermissionID: sdk.String("ipsum"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("impedit"),
                },
            },
            UserPermission: &shared.PermissionInput{
                AdditionalRoles: []string{
                    "soluta",
                },
                AuthKey: sdk.String("repudiandae"),
                Deleted: sdk.Bool(false),
                Domain: sdk.String("nam"),
                EmailAddress: sdk.String("dolore"),
                Etag: sdk.String("iusto"),
                ExpirationDate: types.MustTimeFromString("2022-10-22T04:21:35.753Z"),
                ID: sdk.String("73c8d72f-64d1-4db1-b2c4-310661e96349"),
                Kind: sdk.String("earum"),
                Name: sdk.String("Pat Wolf"),
                PendingOwner: sdk.Bool(false),
                PhotoLink: sdk.String("alias"),
                Role: sdk.String("nisi"),
                SelfLink: sdk.String("itaque"),
                Type: sdk.String("velit"),
                Value: sdk.String("laborum"),
                View: sdk.String("non"),
                WithLink: sdk.Bool(false),
            },
            Version: sdk.String("dolor"),
            VideoMediaMetadata: &shared.FileVideoMediaMetadata{
                DurationMillis: sdk.String("iusto"),
                Height: sdk.Int(24753),
                Width: sdk.Int(39992),
            },
            WebContentLink: sdk.String("consequatur"),
            WebViewLink: sdk.String("officia"),
            WritersCanShare: sdk.Bool(false),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Convert: sdk.Bool(false),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("recusandae"),
        FileID: "ea",
        IncludeLabels: sdk.String("quidem"),
        IncludePermissionsForView: sdk.String("voluptas"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("placeat"),
        Ocr: sdk.Bool(false),
        OcrLanguage: sdk.String("perspiciatis"),
        Pinned: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TimedTextLanguage: sdk.String("deleniti"),
        TimedTextTrackName: sdk.String("a"),
        UserIP: sdk.String("voluptate"),
        Visibility: operations.DriveFilesCopyVisibilityEnumDefault.ToPointer(),
    }, operations.DriveFilesCopySecurity{
        Option1: &operations.DriveFilesCopySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DriveFilesDelete

Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.

### Example Usage

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
    res, err := s.Files.DriveFilesDelete(ctx, operations.DriveFilesDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("unde"),
        FileID: "necessitatibus",
        Key: sdk.String("animi"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UserIP: sdk.String("corporis"),
    }, operations.DriveFilesDeleteSecurity{
        Option1: &operations.DriveFilesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DriveFilesEmptyTrash

Permanently deletes all trashed files of a user or shared drive.

### Example Usage

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
    res, err := s.Files.DriveFilesEmptyTrash(ctx, operations.DriveFilesEmptyTrashRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: sdk.String("est"),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("error"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UserIP: sdk.String("vero"),
    }, operations.DriveFilesEmptyTrashSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DriveFilesExport

Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.

### Example Usage

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
    res, err := s.Files.DriveFilesExport(ctx, operations.DriveFilesExportRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("consectetur"),
        FileID: "vitae",
        Key: sdk.String("inventore"),
        MimeType: "dolorem",
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UserIP: sdk.String("iste"),
    }, operations.DriveFilesExportSecurity{
        Option1: &operations.DriveFilesExportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DriveFilesGenerateIds

Generates a set of file IDs which can be provided in insert or copy requests.

### Example Usage

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
    res, err := s.Files.DriveFilesGenerateIds(ctx, operations.DriveFilesGenerateIdsRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ex"),
        Key: sdk.String("nemo"),
        MaxResults: sdk.Int64(745233),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        Space: sdk.String("dolorum"),
        Type: sdk.String("odio"),
        UserIP: sdk.String("fugit"),
    }, operations.DriveFilesGenerateIdsSecurity{
        Option1: &operations.DriveFilesGenerateIdsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeneratedIds != nil {
        // handle response
    }
}
```

## DriveFilesGet

Gets a file's metadata or content by ID.

### Example Usage

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
    res, err := s.Files.DriveFilesGet(ctx, operations.DriveFilesGetRequest{
        AcknowledgeAbuse: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("alias"),
        FileID: "magni",
        IncludeLabels: sdk.String("vel"),
        IncludePermissionsForView: sdk.String("quae"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DriveFilesGetProjectionEnumBasic.ToPointer(),
        QuotaUser: sdk.String("exercitationem"),
        RevisionID: sdk.String("itaque"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UpdateViewedDate: sdk.Bool(false),
        UserIP: sdk.String("et"),
    }, operations.DriveFilesGetSecurity{
        Option1: &operations.DriveFilesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DriveFilesInsert

Insert a new file.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.DriveFilesInsert(ctx, operations.DriveFilesInsertRequest{
        RequestBody: []byte("ipsum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Convert: sdk.Bool(false),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("unde"),
        IncludeLabels: sdk.String("nulla"),
        IncludePermissionsForView: sdk.String("distinctio"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("quia"),
        Ocr: sdk.Bool(false),
        OcrLanguage: sdk.String("quia"),
        Pinned: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TimedTextLanguage: sdk.String("omnis"),
        TimedTextTrackName: sdk.String("libero"),
        UseContentAsIndexableText: sdk.Bool(false),
        UserIP: sdk.String("dicta"),
        Visibility: operations.DriveFilesInsertVisibilityEnumPrivate.ToPointer(),
    }, operations.DriveFilesInsertSecurity{
        Option1: &operations.DriveFilesInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DriveFilesList

Lists the user's files.

### Example Usage

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
    res, err := s.Files.DriveFilesList(ctx, operations.DriveFilesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Corpora: sdk.String("libero"),
        Corpus: operations.DriveFilesListCorpusEnumDomain.ToPointer(),
        DriveID: sdk.String("officia"),
        Fields: sdk.String("quos"),
        IncludeItemsFromAllDrives: sdk.Bool(false),
        IncludeLabels: sdk.String("placeat"),
        IncludePermissionsForView: sdk.String("sit"),
        IncludeTeamDriveItems: sdk.Bool(false),
        Key: sdk.String("iusto"),
        MaxResults: sdk.Int64(57320),
        OauthToken: sdk.String("voluptates"),
        OrderBy: sdk.String("inventore"),
        PageToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DriveFilesListProjectionEnumFull.ToPointer(),
        Q: sdk.String("dolore"),
        QuotaUser: sdk.String("eligendi"),
        Spaces: sdk.String("distinctio"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TeamDriveID: sdk.String("voluptatem"),
        UserIP: sdk.String("autem"),
    }, operations.DriveFilesListSecurity{
        Option1: &operations.DriveFilesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileList != nil {
        // handle response
    }
}
```

## DriveFilesListLabels

Lists the labels on a file.

### Example Usage

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
    res, err := s.Files.DriveFilesListLabels(ctx, operations.DriveFilesListLabelsRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("esse"),
        FileID: "dolores",
        Key: sdk.String("assumenda"),
        MaxResults: sdk.Int64(107210),
        OauthToken: sdk.String("est"),
        PageToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        UserIP: sdk.String("molestiae"),
    }, operations.DriveFilesListLabelsSecurity{
        Option1: &operations.DriveFilesListLabelsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabelList != nil {
        // handle response
    }
}
```

## DriveFilesModifyLabels

Modifies the set of labels on a file.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.DriveFilesModifyLabels(ctx, operations.DriveFilesModifyLabelsRequest{
        ModifyLabelsRequest: &shared.ModifyLabelsRequest{
            Kind: sdk.String("provident"),
            LabelModifications: []shared.LabelModification{
                shared.LabelModification{
                    FieldModifications: []shared.LabelFieldModification{
                        shared.LabelFieldModification{
                            FieldID: sdk.String("tempore"),
                            Kind: sdk.String("sint"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-08-17"),
                                types.MustDateFromString("2021-12-20"),
                            },
                            SetIntegerValues: []string{
                                "officiis",
                                "voluptatibus",
                            },
                            SetSelectionValues: []string{
                                "at",
                                "alias",
                                "quia",
                            },
                            SetTextValues: []string{
                                "fuga",
                                "repudiandae",
                                "accusantium",
                            },
                            SetUserValues: []string{
                                "officiis",
                                "eos",
                                "quibusdam",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("odio"),
                            Kind: sdk.String("praesentium"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-08-22"),
                            },
                            SetIntegerValues: []string{
                                "earum",
                                "adipisci",
                                "recusandae",
                            },
                            SetSelectionValues: []string{
                                "ut",
                                "quidem",
                                "quis",
                            },
                            SetTextValues: []string{
                                "unde",
                            },
                            SetUserValues: []string{
                                "delectus",
                                "cupiditate",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("fugit"),
                            Kind: sdk.String("numquam"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-02-16"),
                                types.MustDateFromString("2022-01-06"),
                            },
                            SetIntegerValues: []string{
                                "necessitatibus",
                                "corporis",
                                "qui",
                                "expedita",
                            },
                            SetSelectionValues: []string{
                                "cupiditate",
                                "minima",
                                "placeat",
                            },
                            SetTextValues: []string{
                                "neque",
                                "in",
                            },
                            SetUserValues: []string{
                                "eum",
                                "modi",
                                "corporis",
                                "magnam",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("voluptates"),
                            Kind: sdk.String("maiores"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-04-10"),
                                types.MustDateFromString("2022-09-17"),
                                types.MustDateFromString("2021-11-05"),
                            },
                            SetIntegerValues: []string{
                                "quo",
                                "velit",
                            },
                            SetSelectionValues: []string{
                                "fuga",
                                "nostrum",
                                "est",
                                "impedit",
                            },
                            SetTextValues: []string{
                                "tempore",
                                "vero",
                                "odit",
                                "repellat",
                            },
                            SetUserValues: []string{
                                "nemo",
                                "reprehenderit",
                                "aperiam",
                                "odio",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                    },
                    Kind: sdk.String("minima"),
                    LabelID: sdk.String("in"),
                    RemoveLabel: sdk.Bool(false),
                },
                shared.LabelModification{
                    FieldModifications: []shared.LabelFieldModification{
                        shared.LabelFieldModification{
                            FieldID: sdk.String("excepturi"),
                            Kind: sdk.String("dolores"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-07-03"),
                                types.MustDateFromString("2022-02-18"),
                                types.MustDateFromString("2021-02-12"),
                            },
                            SetIntegerValues: []string{
                                "ex",
                                "quaerat",
                                "commodi",
                                "officiis",
                            },
                            SetSelectionValues: []string{
                                "quidem",
                                "exercitationem",
                                "quam",
                                "dolorem",
                            },
                            SetTextValues: []string{
                                "ipsa",
                                "sint",
                            },
                            SetUserValues: []string{
                                "sequi",
                                "repudiandae",
                                "cum",
                                "dicta",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("earum"),
                            Kind: sdk.String("veniam"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-04-11"),
                                types.MustDateFromString("2022-11-01"),
                                types.MustDateFromString("2020-10-03"),
                            },
                            SetIntegerValues: []string{
                                "ducimus",
                            },
                            SetSelectionValues: []string{
                                "veritatis",
                                "quasi",
                                "laboriosam",
                                "pariatur",
                            },
                            SetTextValues: []string{
                                "excepturi",
                                "occaecati",
                                "nemo",
                            },
                            SetUserValues: []string{
                                "nostrum",
                                "doloribus",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                    },
                    Kind: sdk.String("eligendi"),
                    LabelID: sdk.String("sint"),
                    RemoveLabel: sdk.Bool(false),
                },
                shared.LabelModification{
                    FieldModifications: []shared.LabelFieldModification{
                        shared.LabelFieldModification{
                            FieldID: sdk.String("hic"),
                            Kind: sdk.String("animi"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2021-11-14"),
                                types.MustDateFromString("2022-12-13"),
                                types.MustDateFromString("2022-09-09"),
                            },
                            SetIntegerValues: []string{
                                "iste",
                                "assumenda",
                                "tempore",
                            },
                            SetSelectionValues: []string{
                                "velit",
                                "doloremque",
                                "delectus",
                            },
                            SetTextValues: []string{
                                "cum",
                                "ipsum",
                                "adipisci",
                                "saepe",
                            },
                            SetUserValues: []string{
                                "doloremque",
                                "quis",
                                "veniam",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("libero"),
                            Kind: sdk.String("architecto"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-03-30"),
                                types.MustDateFromString("2022-03-31"),
                                types.MustDateFromString("2022-01-25"),
                            },
                            SetIntegerValues: []string{
                                "asperiores",
                            },
                            SetSelectionValues: []string{
                                "consequuntur",
                                "facere",
                            },
                            SetTextValues: []string{
                                "odit",
                                "pariatur",
                                "amet",
                            },
                            SetUserValues: []string{
                                "ab",
                                "velit",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                    },
                    Kind: sdk.String("facilis"),
                    LabelID: sdk.String("tempore"),
                    RemoveLabel: sdk.Bool(false),
                },
                shared.LabelModification{
                    FieldModifications: []shared.LabelFieldModification{
                        shared.LabelFieldModification{
                            FieldID: sdk.String("voluptatibus"),
                            Kind: sdk.String("quaerat"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-03-20"),
                                types.MustDateFromString("2022-08-10"),
                                types.MustDateFromString("2021-05-31"),
                            },
                            SetIntegerValues: []string{
                                "facilis",
                                "ipsum",
                                "ad",
                                "voluptatibus",
                            },
                            SetSelectionValues: []string{
                                "consequuntur",
                                "debitis",
                                "labore",
                                "rerum",
                            },
                            SetTextValues: []string{
                                "reprehenderit",
                            },
                            SetUserValues: []string{
                                "neque",
                                "iusto",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("est"),
                            Kind: sdk.String("rem"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2021-03-10"),
                                types.MustDateFromString("2021-07-07"),
                                types.MustDateFromString("2022-11-18"),
                                types.MustDateFromString("2021-06-07"),
                            },
                            SetIntegerValues: []string{
                                "dignissimos",
                            },
                            SetSelectionValues: []string{
                                "fugiat",
                                "ad",
                            },
                            SetTextValues: []string{
                                "enim",
                            },
                            SetUserValues: []string{
                                "iusto",
                                "dignissimos",
                                "libero",
                                "illo",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                    },
                    Kind: sdk.String("ab"),
                    LabelID: sdk.String("incidunt"),
                    RemoveLabel: sdk.Bool(false),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("accusamus"),
        FileID: "saepe",
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UserIP: sdk.String("reiciendis"),
    }, operations.DriveFilesModifyLabelsSecurity{
        Option1: &operations.DriveFilesModifyLabelsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyLabelsResponse != nil {
        // handle response
    }
}
```

## DriveFilesPatch

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.DriveFilesPatch(ctx, operations.DriveFilesPatchRequest{
        FileInput: &shared.FileInput{
            AlternateLink: sdk.String("earum"),
            AppDataContents: sdk.Bool(false),
            CanComment: sdk.Bool(false),
            CanReadRevisions: sdk.Bool(false),
            Capabilities: &shared.FileCapabilities{
                CanAcceptOwnership: sdk.Bool(false),
                CanAddChildren: sdk.Bool(false),
                CanAddFolderFromAnotherDrive: sdk.Bool(false),
                CanAddMyDriveParent: sdk.Bool(false),
                CanChangeCopyRequiresWriterPermission: sdk.Bool(false),
                CanChangeRestrictedDownload: sdk.Bool(false),
                CanChangeSecurityUpdateEnabled: sdk.Bool(false),
                CanComment: sdk.Bool(false),
                CanCopy: sdk.Bool(false),
                CanDelete: sdk.Bool(false),
                CanDeleteChildren: sdk.Bool(false),
                CanDownload: sdk.Bool(false),
                CanEdit: sdk.Bool(false),
                CanListChildren: sdk.Bool(false),
                CanModifyContent: sdk.Bool(false),
                CanModifyContentRestriction: sdk.Bool(false),
                CanModifyLabels: sdk.Bool(false),
                CanMoveChildrenOutOfDrive: sdk.Bool(false),
                CanMoveChildrenOutOfTeamDrive: sdk.Bool(false),
                CanMoveChildrenWithinDrive: sdk.Bool(false),
                CanMoveChildrenWithinTeamDrive: sdk.Bool(false),
                CanMoveItemIntoTeamDrive: sdk.Bool(false),
                CanMoveItemOutOfDrive: sdk.Bool(false),
                CanMoveItemOutOfTeamDrive: sdk.Bool(false),
                CanMoveItemWithinDrive: sdk.Bool(false),
                CanMoveItemWithinTeamDrive: sdk.Bool(false),
                CanMoveTeamDriveItem: sdk.Bool(false),
                CanReadDrive: sdk.Bool(false),
                CanReadLabels: sdk.Bool(false),
                CanReadRevisions: sdk.Bool(false),
                CanReadTeamDrive: sdk.Bool(false),
                CanRemoveChildren: sdk.Bool(false),
                CanRemoveMyDriveParent: sdk.Bool(false),
                CanRename: sdk.Bool(false),
                CanShare: sdk.Bool(false),
                CanTrash: sdk.Bool(false),
                CanTrashChildren: sdk.Bool(false),
                CanUntrash: sdk.Bool(false),
            },
            ContentRestrictions: []shared.ContentRestriction{
                shared.ContentRestriction{
                    ReadOnly: sdk.Bool(false),
                    Reason: sdk.String("praesentium"),
                    RestrictingUser: &shared.User{
                        DisplayName: sdk.String("nemo"),
                        EmailAddress: sdk.String("repellat"),
                        IsAuthenticatedUser: sdk.Bool(false),
                        Kind: sdk.String("quisquam"),
                        PermissionID: sdk.String("sequi"),
                        Picture: &shared.UserPicture{
                            URL: sdk.String("nihil"),
                        },
                    },
                    RestrictionDate: types.MustTimeFromString("2022-11-06T20:04:24.972Z"),
                    Type: sdk.String("labore"),
                },
                shared.ContentRestriction{
                    ReadOnly: sdk.Bool(false),
                    Reason: sdk.String("assumenda"),
                    RestrictingUser: &shared.User{
                        DisplayName: sdk.String("aliquam"),
                        EmailAddress: sdk.String("quisquam"),
                        IsAuthenticatedUser: sdk.Bool(false),
                        Kind: sdk.String("provident"),
                        PermissionID: sdk.String("laudantium"),
                        Picture: &shared.UserPicture{
                            URL: sdk.String("repudiandae"),
                        },
                    },
                    RestrictionDate: types.MustTimeFromString("2022-03-13T01:53:18.865Z"),
                    Type: sdk.String("aspernatur"),
                },
            },
            CopyRequiresWriterPermission: sdk.Bool(false),
            Copyable: sdk.Bool(false),
            CreatedDate: types.MustTimeFromString("2021-07-30T05:55:30.073Z"),
            DefaultOpenWithLink: sdk.String("quas"),
            Description: sdk.String("provident"),
            DownloadURL: sdk.String("repudiandae"),
            DriveID: sdk.String("rerum"),
            Editable: sdk.Bool(false),
            EmbedLink: sdk.String("dignissimos"),
            Etag: sdk.String("corporis"),
            ExplicitlyTrashed: sdk.Bool(false),
            FileExtension: sdk.String("vero"),
            FileSize: sdk.String("similique"),
            FolderColorRgb: sdk.String("repellendus"),
            FullFileExtension: sdk.String("iure"),
            HasAugmentedPermissions: sdk.Bool(false),
            HasThumbnail: sdk.Bool(false),
            HeadRevisionID: sdk.String("dolorem"),
            IconLink: sdk.String("commodi"),
            ID: sdk.String("c600503d-8bb3-4118-8f73-9ae9e057eb80"),
            ImageMediaMetadata: &shared.FileImageMediaMetadata{
                Aperture: sdk.Float32(5740.92),
                CameraMake: sdk.String("accusamus"),
                CameraModel: sdk.String("eos"),
                ColorSpace: sdk.String("totam"),
                Date: sdk.String("dicta"),
                ExposureBias: sdk.Float32(306.61),
                ExposureMode: sdk.String("velit"),
                ExposureTime: sdk.Float32(2244.13),
                FlashUsed: sdk.Bool(false),
                FocalLength: sdk.Float32(1242.89),
                Height: sdk.Int(953676),
                IsoSpeed: sdk.Int(223291),
                Lens: sdk.String("occaecati"),
                Location: &shared.FileImageMediaMetadataLocation{
                    Altitude: sdk.Float64(5398.13),
                    Latitude: sdk.Float64(1074.72),
                    Longitude: sdk.Float64(8682.55),
                },
                MaxApertureValue: sdk.Float32(2875.44),
                MeteringMode: sdk.String("minus"),
                Rotation: sdk.Int(456704),
                Sensor: sdk.String("voluptatem"),
                SubjectDistance: sdk.Int(20950),
                WhiteBalance: sdk.String("rerum"),
                Width: sdk.Int(411615),
            },
            IndexableText: &shared.FileIndexableText{
                Text: sdk.String("aperiam"),
            },
            IsAppAuthorized: sdk.Bool(false),
            Kind: sdk.String("dignissimos"),
            LabelInfo: &shared.FileLabelInfo{
                Labels: []shared.Label{
                    shared.Label{
                        Fields: map[string]shared.LabelField{
                            "porro": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-04-01"),
                                    types.MustDateFromString("2022-10-06"),
                                    types.MustDateFromString("2021-10-05"),
                                },
                                ID: sdk.String("da3f2ced-a7e2-43f2-a574-11faf4b7544e"),
                                Integer: []string{
                                    "in",
                                    "explicabo",
                                },
                                Kind: sdk.String("accusamus"),
                                Selection: []string{
                                    "aperiam",
                                    "odit",
                                    "deleniti",
                                },
                                Text: []string{
                                    "voluptate",
                                    "similique",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("libero"),
                                        EmailAddress: sdk.String("magnam"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("sit"),
                                        PermissionID: sdk.String("modi"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("eum"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("nesciunt"),
                                        EmailAddress: sdk.String("mollitia"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("dignissimos"),
                                        PermissionID: sdk.String("fugiat"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("nostrum"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("molestiae"),
                            },
                        },
                        ID: sdk.String("5f1400e7-64ad-4733-8ec1-b781b36a0808"),
                        Kind: sdk.String("laudantium"),
                        RevisionID: sdk.String("repellendus"),
                    },
                    shared.Label{
                        Fields: map[string]shared.LabelField{
                            "quae": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2020-02-08"),
                                },
                                ID: sdk.String("ada200ef-0422-4eb2-964c-f9ab8366c723"),
                                Integer: []string{
                                    "repellat",
                                    "nulla",
                                    "laborum",
                                    "natus",
                                },
                                Kind: sdk.String("accusamus"),
                                Selection: []string{
                                    "nisi",
                                },
                                Text: []string{
                                    "recusandae",
                                    "voluptates",
                                    "non",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("quia"),
                                        EmailAddress: sdk.String("ullam"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("quisquam"),
                                        PermissionID: sdk.String("dicta"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("voluptatibus"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("eligendi"),
                                        EmailAddress: sdk.String("quae"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("officiis"),
                                        PermissionID: sdk.String("architecto"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("architecto"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("enim"),
                                        EmailAddress: sdk.String("optio"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("rem"),
                                        PermissionID: sdk.String("perferendis"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("facilis"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("reiciendis"),
                            },
                        },
                        ID: sdk.String("f918544e-c42d-4efc-8e8f-1977773e6356"),
                        Kind: sdk.String("consequuntur"),
                        RevisionID: sdk.String("officia"),
                    },
                    shared.Label{
                        Fields: map[string]shared.LabelField{
                            "distinctio": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-06-24"),
                                    types.MustDateFromString("2022-11-23"),
                                },
                                ID: sdk.String("5e3d48fd-af31-43a1-b5fd-94259c0b36f2"),
                                Integer: []string{
                                    "debitis",
                                    "officia",
                                },
                                Kind: sdk.String("sint"),
                                Selection: []string{
                                    "numquam",
                                    "tenetur",
                                },
                                Text: []string{
                                    "libero",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("minima"),
                                        EmailAddress: sdk.String("ex"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("minus"),
                                        PermissionID: sdk.String("ab"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("beatae"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("hic"),
                                        EmailAddress: sdk.String("nisi"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("quisquam"),
                                        PermissionID: sdk.String("dolor"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("ducimus"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("fuga"),
                            },
                            "minima": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-08-09"),
                                },
                                ID: sdk.String("243835bb-c05a-423a-85ce-fc5fde10a0ce"),
                                Integer: []string{
                                    "dicta",
                                },
                                Kind: sdk.String("vel"),
                                Selection: []string{
                                    "debitis",
                                    "ullam",
                                    "architecto",
                                },
                                Text: []string{
                                    "perferendis",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("provident"),
                                        EmailAddress: sdk.String("cumque"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("iure"),
                                        PermissionID: sdk.String("quibusdam"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("quod"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("nemo"),
                            },
                        },
                        ID: sdk.String("e3476279-9bfb-4be6-949f-b2bb4ecae6c3"),
                        Kind: sdk.String("illum"),
                        RevisionID: sdk.String("nemo"),
                    },
                    shared.Label{
                        Fields: map[string]shared.LabelField{
                            "facilis": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2021-05-07"),
                                },
                                ID: sdk.String("ebd5daea-4c50-46a8-aa94-c02644cf5e9d"),
                                Integer: []string{
                                    "mollitia",
                                    "magnam",
                                    "nostrum",
                                },
                                Kind: sdk.String("esse"),
                                Selection: []string{
                                    "fuga",
                                    "facere",
                                    "impedit",
                                },
                                Text: []string{
                                    "deserunt",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("laboriosam"),
                                        EmailAddress: sdk.String("doloremque"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("voluptatem"),
                                        PermissionID: sdk.String("facere"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("necessitatibus"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("maxime"),
                                        EmailAddress: sdk.String("consequatur"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("eaque"),
                                        PermissionID: sdk.String("architecto"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("similique"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("porro"),
                                        EmailAddress: sdk.String("blanditiis"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("quae"),
                                        PermissionID: sdk.String("magni"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("officiis"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("sed"),
                                        EmailAddress: sdk.String("necessitatibus"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("impedit"),
                                        PermissionID: sdk.String("ipsa"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("excepturi"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("a"),
                            },
                            "maiores": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-12-31"),
                                    types.MustDateFromString("2021-06-06"),
                                    types.MustDateFromString("2022-08-15"),
                                },
                                ID: sdk.String("ff3477c1-3e90-42c1-8125-b0960a668151"),
                                Integer: []string{
                                    "incidunt",
                                    "quam",
                                    "magni",
                                },
                                Kind: sdk.String("deserunt"),
                                Selection: []string{
                                    "omnis",
                                    "sed",
                                    "nesciunt",
                                    "maxime",
                                },
                                Text: []string{
                                    "cupiditate",
                                    "aliquam",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("maiores"),
                                        EmailAddress: sdk.String("laudantium"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("velit"),
                                        PermissionID: sdk.String("reiciendis"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("amet"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("nemo"),
                                        EmailAddress: sdk.String("ipsa"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("quisquam"),
                                        PermissionID: sdk.String("tenetur"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("quas"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("molestiae"),
                                        EmailAddress: sdk.String("aliquid"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("asperiores"),
                                        PermissionID: sdk.String("a"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("nobis"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("perspiciatis"),
                            },
                            "accusantium": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2021-09-30"),
                                },
                                ID: sdk.String("ecbb4e24-3cf7-489f-bafe-da53e5ae6e0a"),
                                Integer: []string{
                                    "quasi",
                                    "blanditiis",
                                    "eius",
                                    "quisquam",
                                },
                                Kind: sdk.String("eos"),
                                Selection: []string{
                                    "natus",
                                    "minus",
                                    "quia",
                                },
                                Text: []string{
                                    "reprehenderit",
                                    "quod",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("corrupti"),
                                        EmailAddress: sdk.String("amet"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("molestiae"),
                                        PermissionID: sdk.String("amet"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("laborum"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("modi"),
                                        EmailAddress: sdk.String("perferendis"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("necessitatibus"),
                                        PermissionID: sdk.String("architecto"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("molestias"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("dolore"),
                                        EmailAddress: sdk.String("sunt"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("maiores"),
                                        PermissionID: sdk.String("neque"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("odit"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("earum"),
                            },
                            "veniam": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-08-26"),
                                    types.MustDateFromString("2022-07-13"),
                                },
                                ID: sdk.String("56f5d56d-0bd0-4af2-9fe1-3db4f62cba3f"),
                                Integer: []string{
                                    "error",
                                    "non",
                                    "quasi",
                                },
                                Kind: sdk.String("mollitia"),
                                Selection: []string{
                                    "harum",
                                    "cumque",
                                    "doloremque",
                                    "expedita",
                                },
                                Text: []string{
                                    "eaque",
                                    "deserunt",
                                    "aliquid",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("magni"),
                                        EmailAddress: sdk.String("tempora"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("possimus"),
                                        PermissionID: sdk.String("dolor"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("rerum"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("sed"),
                                        EmailAddress: sdk.String("accusamus"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("optio"),
                                        PermissionID: sdk.String("delectus"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("minus"),
                                        },
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("quo"),
                                        EmailAddress: sdk.String("quos"),
                                        IsAuthenticatedUser: sdk.Bool(false),
                                        Kind: sdk.String("asperiores"),
                                        PermissionID: sdk.String("voluptatum"),
                                        Picture: &shared.UserPicture{
                                            URL: sdk.String("iste"),
                                        },
                                    },
                                },
                                ValueType: sdk.String("corporis"),
                            },
                        },
                        ID: sdk.String("010f5dd3-d6fa-4180-8e54-c82f168a363c"),
                        Kind: sdk.String("rem"),
                        RevisionID: sdk.String("voluptatum"),
                    },
                },
            },
            Labels: &shared.FileLabels{
                Hidden: sdk.Bool(false),
                Modified: sdk.Bool(false),
                Restricted: sdk.Bool(false),
                Starred: sdk.Bool(false),
                Trashed: sdk.Bool(false),
                Viewed: sdk.Bool(false),
            },
            LastModifyingUser: &shared.User{
                DisplayName: sdk.String("ducimus"),
                EmailAddress: sdk.String("adipisci"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("recusandae"),
                PermissionID: sdk.String("tempora"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("blanditiis"),
                },
            },
            LastModifyingUserName: sdk.String("numquam"),
            LastViewedByMeDate: types.MustTimeFromString("2022-06-20T16:52:25.586Z"),
            LinkShareMetadata: &shared.FileLinkShareMetadata{
                SecurityUpdateEligible: sdk.Bool(false),
                SecurityUpdateEnabled: sdk.Bool(false),
            },
            MarkedViewedByMeDate: types.MustTimeFromString("2022-04-19T08:03:50.767Z"),
            Md5Checksum: sdk.String("veritatis"),
            MimeType: sdk.String("tenetur"),
            ModifiedByMeDate: types.MustTimeFromString("2022-04-22T15:47:40.149Z"),
            ModifiedDate: types.MustTimeFromString("2021-06-09T17:30:04.825Z"),
            OpenWithLinks: map[string]string{
                "magni": "nihil",
                "voluptas": "animi",
                "commodi": "alias",
            },
            OriginalFilename: sdk.String("fuga"),
            OwnedByMe: sdk.Bool(false),
            OwnerNames: []string{
                "dolore",
            },
            Owners: []shared.User{
                shared.User{
                    DisplayName: sdk.String("aliquam"),
                    EmailAddress: sdk.String("iste"),
                    IsAuthenticatedUser: sdk.Bool(false),
                    Kind: sdk.String("ullam"),
                    PermissionID: sdk.String("eligendi"),
                    Picture: &shared.UserPicture{
                        URL: sdk.String("placeat"),
                    },
                },
                shared.User{
                    DisplayName: sdk.String("voluptas"),
                    EmailAddress: sdk.String("occaecati"),
                    IsAuthenticatedUser: sdk.Bool(false),
                    Kind: sdk.String("unde"),
                    PermissionID: sdk.String("illo"),
                    Picture: &shared.UserPicture{
                        URL: sdk.String("nihil"),
                    },
                },
                shared.User{
                    DisplayName: sdk.String("inventore"),
                    EmailAddress: sdk.String("libero"),
                    IsAuthenticatedUser: sdk.Bool(false),
                    Kind: sdk.String("ipsam"),
                    PermissionID: sdk.String("quasi"),
                    Picture: &shared.UserPicture{
                        URL: sdk.String("cumque"),
                    },
                },
                shared.User{
                    DisplayName: sdk.String("dicta"),
                    EmailAddress: sdk.String("harum"),
                    IsAuthenticatedUser: sdk.Bool(false),
                    Kind: sdk.String("facere"),
                    PermissionID: sdk.String("facilis"),
                    Picture: &shared.UserPicture{
                        URL: sdk.String("beatae"),
                    },
                },
            },
            Parents: []shared.ParentReference{
                shared.ParentReference{
                    ID: sdk.String("f4b888eb-dfc4-4ccc-a99b-c7fc0b2dce10"),
                    IsRoot: sdk.Bool(false),
                    Kind: sdk.String("laudantium"),
                    ParentLink: sdk.String("iusto"),
                    SelfLink: sdk.String("dolor"),
                },
                shared.ParentReference{
                    ID: sdk.String("e42b006d-6788-478b-a858-1a58208c54fe"),
                    IsRoot: sdk.Bool(false),
                    Kind: sdk.String("delectus"),
                    ParentLink: sdk.String("officia"),
                    SelfLink: sdk.String("natus"),
                },
                shared.ParentReference{
                    ID: sdk.String("c95f2eac-5565-4d30-bcfe-e81206e2813f"),
                    IsRoot: sdk.Bool(false),
                    Kind: sdk.String("laborum"),
                    ParentLink: sdk.String("aliquam"),
                    SelfLink: sdk.String("deserunt"),
                },
                shared.ParentReference{
                    ID: sdk.String("41c480d3-f213-42af-8310-2d514f4cc6f1"),
                    IsRoot: sdk.Bool(false),
                    Kind: sdk.String("deleniti"),
                    ParentLink: sdk.String("expedita"),
                    SelfLink: sdk.String("hic"),
                },
            },
            PermissionIds: []string{
                "aliquid",
                "sed",
                "beatae",
            },
            Permissions: []shared.PermissionInput{
                shared.PermissionInput{
                    AdditionalRoles: []string{
                        "animi",
                        "dolore",
                    },
                    AuthKey: sdk.String("tenetur"),
                    Deleted: sdk.Bool(false),
                    Domain: sdk.String("dignissimos"),
                    EmailAddress: sdk.String("esse"),
                    Etag: sdk.String("animi"),
                    ExpirationDate: types.MustTimeFromString("2022-01-29T10:24:00.407Z"),
                    ID: sdk.String("ee3e4be7-52c6-45b3-8418-e3bb91c8d975"),
                    Kind: sdk.String("accusamus"),
                    Name: sdk.String("Silvia Langworth V"),
                    PendingOwner: sdk.Bool(false),
                    PhotoLink: sdk.String("illum"),
                    Role: sdk.String("rem"),
                    SelfLink: sdk.String("tenetur"),
                    Type: sdk.String("deleniti"),
                    Value: sdk.String("modi"),
                    View: sdk.String("earum"),
                    WithLink: sdk.Bool(false),
                },
                shared.PermissionInput{
                    AdditionalRoles: []string{
                        "aliquam",
                    },
                    AuthKey: sdk.String("labore"),
                    Deleted: sdk.Bool(false),
                    Domain: sdk.String("maiores"),
                    EmailAddress: sdk.String("sequi"),
                    Etag: sdk.String("saepe"),
                    ExpirationDate: types.MustTimeFromString("2022-07-17T13:35:14.646Z"),
                    ID: sdk.String("edcc4aa5-f3ca-4bd9-85a9-72e056728227"),
                    Kind: sdk.String("expedita"),
                    Name: sdk.String("Ms. Kari Dooley"),
                    PendingOwner: sdk.Bool(false),
                    PhotoLink: sdk.String("esse"),
                    Role: sdk.String("accusantium"),
                    SelfLink: sdk.String("distinctio"),
                    Type: sdk.String("sapiente"),
                    Value: sdk.String("quam"),
                    View: sdk.String("est"),
                    WithLink: sdk.Bool(false),
                },
                shared.PermissionInput{
                    AdditionalRoles: []string{
                        "delectus",
                        "culpa",
                    },
                    AuthKey: sdk.String("voluptatum"),
                    Deleted: sdk.Bool(false),
                    Domain: sdk.String("iusto"),
                    EmailAddress: sdk.String("quod"),
                    Etag: sdk.String("voluptatibus"),
                    ExpirationDate: types.MustTimeFromString("2022-10-02T13:33:28.563Z"),
                    ID: sdk.String("5a6fae54-ebf6-40c3-a1f0-23b75d2367fe"),
                    Kind: sdk.String("vitae"),
                    Name: sdk.String("Kenneth Schmeler"),
                    PendingOwner: sdk.Bool(false),
                    PhotoLink: sdk.String("possimus"),
                    Role: sdk.String("maiores"),
                    SelfLink: sdk.String("odio"),
                    Type: sdk.String("provident"),
                    Value: sdk.String("sapiente"),
                    View: sdk.String("aperiam"),
                    WithLink: sdk.Bool(false),
                },
            },
            Properties: []shared.Property{
                shared.Property{
                    Etag: sdk.String("nesciunt"),
                    Key: sdk.String("provident"),
                    Kind: sdk.String("ex"),
                    SelfLink: sdk.String("repellendus"),
                    Value: sdk.String("unde"),
                    Visibility: sdk.String("alias"),
                },
                shared.Property{
                    Etag: sdk.String("impedit"),
                    Key: sdk.String("sequi"),
                    Kind: sdk.String("commodi"),
                    SelfLink: sdk.String("labore"),
                    Value: sdk.String("expedita"),
                    Visibility: sdk.String("in"),
                },
                shared.Property{
                    Etag: sdk.String("quisquam"),
                    Key: sdk.String("sunt"),
                    Kind: sdk.String("enim"),
                    SelfLink: sdk.String("nulla"),
                    Value: sdk.String("maiores"),
                    Visibility: sdk.String("distinctio"),
                },
            },
            QuotaBytesUsed: sdk.String("mollitia"),
            ResourceKey: sdk.String("impedit"),
            SelfLink: sdk.String("accusamus"),
            Sha1Checksum: sdk.String("et"),
            Sha256Checksum: sdk.String("quas"),
            Shareable: sdk.Bool(false),
            Shared: sdk.Bool(false),
            SharedWithMeDate: types.MustTimeFromString("2021-07-08T15:06:48.447Z"),
            SharingUser: &shared.User{
                DisplayName: sdk.String("dicta"),
                EmailAddress: sdk.String("impedit"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("tempora"),
                PermissionID: sdk.String("eveniet"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("repudiandae"),
                },
            },
            ShortcutDetails: &shared.FileShortcutDetails{
                TargetID: sdk.String("sed"),
                TargetMimeType: sdk.String("impedit"),
                TargetResourceKey: sdk.String("quas"),
            },
            Spaces: []string{
                "vel",
                "eligendi",
                "recusandae",
                "ex",
            },
            TeamDriveID: sdk.String("beatae"),
            Thumbnail: &shared.FileThumbnail{
                Image: sdk.String("veritatis"),
                MimeType: sdk.String("maiores"),
            },
            ThumbnailLink: sdk.String("itaque"),
            ThumbnailVersion: sdk.String("vero"),
            Title: sdk.String("Miss"),
            TrashedDate: types.MustTimeFromString("2022-03-22T22:36:08.652Z"),
            TrashingUser: &shared.User{
                DisplayName: sdk.String("dignissimos"),
                EmailAddress: sdk.String("minus"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("distinctio"),
                PermissionID: sdk.String("possimus"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("cum"),
                },
            },
            UserPermission: &shared.PermissionInput{
                AdditionalRoles: []string{
                    "saepe",
                    "earum",
                },
                AuthKey: sdk.String("quod"),
                Deleted: sdk.Bool(false),
                Domain: sdk.String("nihil"),
                EmailAddress: sdk.String("quaerat"),
                Etag: sdk.String("ipsum"),
                ExpirationDate: types.MustTimeFromString("2022-06-27T03:53:09.176Z"),
                ID: sdk.String("ba253177-47dc-4915-ad2c-af5dd6723dc0"),
                Kind: sdk.String("maiores"),
                Name: sdk.String("Molly Waelchi"),
                PendingOwner: sdk.Bool(false),
                PhotoLink: sdk.String("neque"),
                Role: sdk.String("officia"),
                SelfLink: sdk.String("suscipit"),
                Type: sdk.String("harum"),
                Value: sdk.String("ducimus"),
                View: sdk.String("doloremque"),
                WithLink: sdk.Bool(false),
            },
            Version: sdk.String("perferendis"),
            VideoMediaMetadata: &shared.FileVideoMediaMetadata{
                DurationMillis: sdk.String("laudantium"),
                Height: sdk.Int(481704),
                Width: sdk.Int(546868),
            },
            WebContentLink: sdk.String("molestiae"),
            WebViewLink: sdk.String("quis"),
            WritersCanShare: sdk.Bool(false),
        },
        AddParents: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Convert: sdk.Bool(false),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("ab"),
        FileID: "quaerat",
        IncludeLabels: sdk.String("amet"),
        IncludePermissionsForView: sdk.String("sapiente"),
        Key: sdk.String("corporis"),
        ModifiedDateBehavior: operations.DriveFilesPatchModifiedDateBehaviorEnumNoChange.ToPointer(),
        NewRevision: sdk.Bool(false),
        OauthToken: sdk.String("iure"),
        Ocr: sdk.Bool(false),
        OcrLanguage: sdk.String("quisquam"),
        Pinned: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        RemoveParents: sdk.String("laudantium"),
        SetModifiedDate: sdk.Bool(false),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TimedTextLanguage: sdk.String("nam"),
        TimedTextTrackName: sdk.String("nemo"),
        UpdateViewedDate: sdk.Bool(false),
        UseContentAsIndexableText: sdk.Bool(false),
        UserIP: sdk.String("enim"),
    }, operations.DriveFilesPatchSecurity{
        Option1: &operations.DriveFilesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DriveFilesTouch

Set the file's updated time to the current server time.

### Example Usage

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
    res, err := s.Files.DriveFilesTouch(ctx, operations.DriveFilesTouchRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ipsam"),
        FileID: "minima",
        IncludeLabels: sdk.String("tempora"),
        IncludePermissionsForView: sdk.String("perferendis"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UserIP: sdk.String("numquam"),
    }, operations.DriveFilesTouchSecurity{
        Option1: &operations.DriveFilesTouchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DriveFilesTrash

Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.

### Example Usage

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
    res, err := s.Files.DriveFilesTrash(ctx, operations.DriveFilesTrashRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("doloremque"),
        FileID: "cum",
        IncludeLabels: sdk.String("nobis"),
        IncludePermissionsForView: sdk.String("similique"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UserIP: sdk.String("cumque"),
    }, operations.DriveFilesTrashSecurity{
        Option1: &operations.DriveFilesTrashSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DriveFilesUntrash

Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.

### Example Usage

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
    res, err := s.Files.DriveFilesUntrash(ctx, operations.DriveFilesUntrashRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("soluta"),
        FileID: "fugiat",
        IncludeLabels: sdk.String("laboriosam"),
        IncludePermissionsForView: sdk.String("nam"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UserIP: sdk.String("necessitatibus"),
    }, operations.DriveFilesUntrashSecurity{
        Option1: &operations.DriveFilesUntrashSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DriveFilesUpdate

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.DriveFilesUpdate(ctx, operations.DriveFilesUpdateRequest{
        RequestBody: []byte("maxime"),
        AddParents: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Convert: sdk.Bool(false),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("voluptatem"),
        FileID: "provident",
        IncludeLabels: sdk.String("adipisci"),
        IncludePermissionsForView: sdk.String("accusantium"),
        Key: sdk.String("magnam"),
        ModifiedDateBehavior: operations.DriveFilesUpdateModifiedDateBehaviorEnumNowIfNeeded.ToPointer(),
        NewRevision: sdk.Bool(false),
        OauthToken: sdk.String("omnis"),
        Ocr: sdk.Bool(false),
        OcrLanguage: sdk.String("explicabo"),
        Pinned: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        RemoveParents: sdk.String("cum"),
        SetModifiedDate: sdk.Bool(false),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TimedTextLanguage: sdk.String("id"),
        TimedTextTrackName: sdk.String("possimus"),
        UpdateViewedDate: sdk.Bool(false),
        UseContentAsIndexableText: sdk.Bool(false),
        UserIP: sdk.String("fugit"),
    }, operations.DriveFilesUpdateSecurity{
        Option1: &operations.DriveFilesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DriveFilesWatch

Subscribe to changes on a file.

### Example Usage

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
    res, err := s.Files.DriveFilesWatch(ctx, operations.DriveFilesWatchRequest{
        Channel: &shared.Channel{
            Address: sdk.String("3150 Rohan Fords"),
            Expiration: sdk.String("voluptate"),
            ID: sdk.String("4b0ed20e-5624-48ff-b639-a910abdcab62"),
            Kind: sdk.String("suscipit"),
            Params: map[string]string{
                "nisi": "aliquid",
                "provident": "laboriosam",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("accusamus"),
            ResourceURI: sdk.String("ab"),
            Token: sdk.String("itaque"),
            Type: sdk.String("quisquam"),
        },
        AcknowledgeAbuse: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("eaque"),
        FileID: "alias",
        IncludeLabels: sdk.String("qui"),
        IncludePermissionsForView: sdk.String("consequuntur"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DriveFilesWatchProjectionEnumBasic.ToPointer(),
        QuotaUser: sdk.String("amet"),
        RevisionID: sdk.String("exercitationem"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UpdateViewedDate: sdk.Bool(false),
        UserIP: sdk.String("illum"),
    }, operations.DriveFilesWatchSecurity{
        Option1: &operations.DriveFilesWatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```
