# Files

### Available Operations

* [DriveFilesCopy](#drivefilescopy) - Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
* [DriveFilesCreate](#drivefilescreate) - Creates a file.
* [DriveFilesDelete](#drivefilesdelete) - Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
* [DriveFilesEmptyTrash](#drivefilesemptytrash) - Permanently deletes all trashed files of a user or shared drive.
* [DriveFilesExport](#drivefilesexport) - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* [DriveFilesGenerateIds](#drivefilesgenerateids) - Generates a set of file IDs which can be provided in create or copy requests.
* [DriveFilesGet](#drivefilesget) - Gets a file's metadata or content by ID.
* [DriveFilesList](#drivefileslist) - Lists or searches files.
* [DriveFilesListLabels](#drivefileslistlabels) - Lists the labels on a file.
* [DriveFilesModifyLabels](#drivefilesmodifylabels) - Modifies the set of labels on a file.
* [DriveFilesUpdate](#drivefilesupdate) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* [DriveFilesWatch](#drivefileswatch) - Subscribe to changes on a file.

## DriveFilesCopy

Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.

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
            AppProperties: map[string]string{
                "odio": "occaecati",
                "commodi": "sapiente",
            },
            Capabilities: &shared.FileCapabilities{
                CanAcceptOwnership: sdk.Bool(false),
                CanAddChildren: sdk.Bool(false),
                CanAddFolderFromAnotherDrive: sdk.Bool(false),
                CanAddMyDriveParent: sdk.Bool(false),
                CanChangeCopyRequiresWriterPermission: sdk.Bool(false),
                CanChangeSecurityUpdateEnabled: sdk.Bool(false),
                CanChangeViewersCanCopyContent: sdk.Bool(false),
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
            ContentHints: &shared.FileContentHints{
                IndexableText: sdk.String("dolores"),
                Thumbnail: &shared.FileContentHintsThumbnail{
                    Image: sdk.String("deserunt"),
                    MimeType: sdk.String("molestiae"),
                },
            },
            ContentRestrictions: []shared.ContentRestriction{
                shared.ContentRestriction{
                    ReadOnly: sdk.Bool(false),
                    Reason: sdk.String("porro"),
                    RestrictingUser: &shared.User{
                        DisplayName: sdk.String("eum"),
                        EmailAddress: sdk.String("quas"),
                        Kind: sdk.String("praesentium"),
                        Me: sdk.Bool(false),
                        PermissionID: sdk.String("consequuntur"),
                        PhotoLink: sdk.String("deleniti"),
                    },
                    RestrictionTime: types.MustTimeFromString("2022-04-27T07:00:05.421Z"),
                    Type: sdk.String("mollitia"),
                },
            },
            CopyRequiresWriterPermission: sdk.Bool(false),
            CreatedTime: types.MustTimeFromString("2022-06-18T04:24:04.187Z"),
            Description: sdk.String("explicabo"),
            DriveID: sdk.String("minima"),
            ExplicitlyTrashed: sdk.Bool(false),
            FileExtension: sdk.String("nisi"),
            FolderColorRgb: sdk.String("fugit"),
            FullFileExtension: sdk.String("sapiente"),
            HasAugmentedPermissions: sdk.Bool(false),
            HasThumbnail: sdk.Bool(false),
            HeadRevisionID: sdk.String("consequuntur"),
            IconLink: sdk.String("ratione"),
            ID: sdk.String("2e9817ee-17cb-4e61-a6b7-b95bc0ab3c20"),
            ImageMediaMetadata: &shared.FileImageMediaMetadata{
                Aperture: sdk.Float32(7963.92),
                CameraMake: sdk.String("quaerat"),
                CameraModel: sdk.String("sapiente"),
                ColorSpace: sdk.String("consectetur"),
                ExposureBias: sdk.Float32(4581.39),
                ExposureMode: sdk.String("blanditiis"),
                ExposureTime: sdk.Float32(5909.84),
                FlashUsed: sdk.Bool(false),
                FocalLength: sdk.Float32(9537.22),
                Height: sdk.Int(857723),
                IsoSpeed: sdk.Int(557811),
                Lens: sdk.String("esse"),
                Location: &shared.FileImageMediaMetadataLocation{
                    Altitude: sdk.Float64(974.68),
                    Latitude: sdk.Float64(9518.75),
                    Longitude: sdk.Float64(6216.79),
                },
                MaxApertureValue: sdk.Float32(5757.51),
                MeteringMode: sdk.String("pariatur"),
                Rotation: sdk.Int(820767),
                Sensor: sdk.String("quia"),
                SubjectDistance: sdk.Int(908844),
                Time: sdk.String("asperiores"),
                WhiteBalance: sdk.String("facere"),
                Width: sdk.Int(85001),
            },
            IsAppAuthorized: sdk.Bool(false),
            Kind: sdk.String("consequuntur"),
            LabelInfo: &shared.FileLabelInfo{
                Labels: []shared.Label{
                    shared.Label{
                        Fields: map[string]shared.LabelField{
                            "culpa": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-10-24"),
                                    types.MustDateFromString("2021-09-23"),
                                },
                                ID: sdk.String("74bdb04f-1575-4608-ad68-ea19f1d17051"),
                                Integer: []string{
                                    "adipisci",
                                },
                                Kind: sdk.String("iste"),
                                Selection: []string{
                                    "accusantium",
                                    "rem",
                                    "aut",
                                    "laudantium",
                                },
                                Text: []string{
                                    "mollitia",
                                    "ab",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("non"),
                                        EmailAddress: sdk.String("voluptatem"),
                                        Kind: sdk.String("dolor"),
                                        Me: sdk.Bool(false),
                                        PermissionID: sdk.String("occaecati"),
                                        PhotoLink: sdk.String("numquam"),
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("impedit"),
                                        EmailAddress: sdk.String("explicabo"),
                                        Kind: sdk.String("voluptas"),
                                        Me: sdk.Bool(false),
                                        PermissionID: sdk.String("aut"),
                                        PhotoLink: sdk.String("dignissimos"),
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("dicta"),
                                        EmailAddress: sdk.String("maiores"),
                                        Kind: sdk.String("natus"),
                                        Me: sdk.Bool(false),
                                        PermissionID: sdk.String("velit"),
                                        PhotoLink: sdk.String("voluptatibus"),
                                    },
                                },
                                ValueType: sdk.String("voluptas"),
                            },
                            "asperiores": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2022-09-09"),
                                },
                                ID: sdk.String("2dac7af5-15cc-4413-aa63-aae8d67864db"),
                                Integer: []string{
                                    "commodi",
                                    "in",
                                    "corporis",
                                },
                                Kind: sdk.String("reiciendis"),
                                Selection: []string{
                                    "nemo",
                                    "recusandae",
                                    "aliquid",
                                    "aperiam",
                                },
                                Text: []string{
                                    "consectetur",
                                    "in",
                                    "exercitationem",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("facere"),
                                        EmailAddress: sdk.String("numquam"),
                                        Kind: sdk.String("doloribus"),
                                        Me: sdk.Bool(false),
                                        PermissionID: sdk.String("suscipit"),
                                        PhotoLink: sdk.String("reiciendis"),
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("quidem"),
                                        EmailAddress: sdk.String("saepe"),
                                        Kind: sdk.String("necessitatibus"),
                                        Me: sdk.Bool(false),
                                        PermissionID: sdk.String("dolore"),
                                        PhotoLink: sdk.String("sunt"),
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("asperiores"),
                                        EmailAddress: sdk.String("adipisci"),
                                        Kind: sdk.String("non"),
                                        Me: sdk.Bool(false),
                                        PermissionID: sdk.String("amet"),
                                        PhotoLink: sdk.String("beatae"),
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("dignissimos"),
                                        EmailAddress: sdk.String("a"),
                                        Kind: sdk.String("debitis"),
                                        Me: sdk.Bool(false),
                                        PermissionID: sdk.String("consectetur"),
                                        PhotoLink: sdk.String("corporis"),
                                    },
                                },
                                ValueType: sdk.String("harum"),
                            },
                            "laboriosam": shared.LabelField{
                                DateString: []types.Date{
                                    types.MustDateFromString("2020-10-22"),
                                },
                                ID: sdk.String("1ea42655-5ba3-4c28-b44e-d53b88f3a8d8"),
                                Integer: []string{
                                    "exercitationem",
                                    "nobis",
                                    "sit",
                                    "rerum",
                                },
                                Kind: sdk.String("sed"),
                                Selection: []string{
                                    "explicabo",
                                    "asperiores",
                                    "facilis",
                                    "voluptate",
                                },
                                Text: []string{
                                    "ab",
                                    "iste",
                                    "dolore",
                                },
                                User: []shared.User{
                                    shared.User{
                                        DisplayName: sdk.String("sed"),
                                        EmailAddress: sdk.String("in"),
                                        Kind: sdk.String("commodi"),
                                        Me: sdk.Bool(false),
                                        PermissionID: sdk.String("quidem"),
                                        PhotoLink: sdk.String("explicabo"),
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("voluptas"),
                                        EmailAddress: sdk.String("unde"),
                                        Kind: sdk.String("architecto"),
                                        Me: sdk.Bool(false),
                                        PermissionID: sdk.String("suscipit"),
                                        PhotoLink: sdk.String("sapiente"),
                                    },
                                    shared.User{
                                        DisplayName: sdk.String("debitis"),
                                        EmailAddress: sdk.String("illo"),
                                        Kind: sdk.String("reiciendis"),
                                        Me: sdk.Bool(false),
                                        PermissionID: sdk.String("perferendis"),
                                        PhotoLink: sdk.String("corrupti"),
                                    },
                                },
                                ValueType: sdk.String("maiores"),
                            },
                        },
                        ID: sdk.String("4294e369-8f44-47f6-83e8-b445e80ca55e"),
                        Kind: sdk.String("reiciendis"),
                        RevisionID: sdk.String("nulla"),
                    },
                },
            },
            LastModifyingUser: &shared.User{
                DisplayName: sdk.String("magni"),
                EmailAddress: sdk.String("aperiam"),
                Kind: sdk.String("saepe"),
                Me: sdk.Bool(false),
                PermissionID: sdk.String("numquam"),
                PhotoLink: sdk.String("veniam"),
            },
            LinkShareMetadata: &shared.FileLinkShareMetadata{
                SecurityUpdateEligible: sdk.Bool(false),
                SecurityUpdateEnabled: sdk.Bool(false),
            },
            Md5Checksum: sdk.String("in"),
            MimeType: sdk.String("officiis"),
            ModifiedByMe: sdk.Bool(false),
            ModifiedByMeTime: types.MustTimeFromString("2022-06-27T22:55:23.952Z"),
            ModifiedTime: types.MustTimeFromString("2022-06-28T14:53:26.431Z"),
            Name: sdk.String("Lester Parisian"),
            OriginalFilename: sdk.String("hic"),
            OwnedByMe: sdk.Bool(false),
            Owners: []shared.User{
                shared.User{
                    DisplayName: sdk.String("debitis"),
                    EmailAddress: sdk.String("neque"),
                    Kind: sdk.String("dolorum"),
                    Me: sdk.Bool(false),
                    PermissionID: sdk.String("nostrum"),
                    PhotoLink: sdk.String("officia"),
                },
                shared.User{
                    DisplayName: sdk.String("dolorum"),
                    EmailAddress: sdk.String("corrupti"),
                    Kind: sdk.String("accusamus"),
                    Me: sdk.Bool(false),
                    PermissionID: sdk.String("tempora"),
                    PhotoLink: sdk.String("atque"),
                },
                shared.User{
                    DisplayName: sdk.String("fugit"),
                    EmailAddress: sdk.String("ut"),
                    Kind: sdk.String("fugiat"),
                    Me: sdk.Bool(false),
                    PermissionID: sdk.String("voluptatem"),
                    PhotoLink: sdk.String("culpa"),
                },
            },
            Parents: []string{
                "magnam",
                "consequatur",
                "esse",
            },
            PermissionIds: []string{
                "sit",
                "voluptatum",
            },
            Permissions: []shared.PermissionInput{
                shared.PermissionInput{
                    AllowFileDiscovery: sdk.Bool(false),
                    Deleted: sdk.Bool(false),
                    DisplayName: sdk.String("repudiandae"),
                    Domain: sdk.String("corporis"),
                    EmailAddress: sdk.String("et"),
                    ExpirationTime: types.MustTimeFromString("2022-03-10T15:53:25.215Z"),
                    ID: sdk.String("2065e904-f3b1-4194-b8ab-f603a79f9dfe"),
                    Kind: sdk.String("perferendis"),
                    PendingOwner: sdk.Bool(false),
                    PhotoLink: sdk.String("est"),
                    Role: sdk.String("quidem"),
                    Type: sdk.String("reprehenderit"),
                    View: sdk.String("facere"),
                },
                shared.PermissionInput{
                    AllowFileDiscovery: sdk.Bool(false),
                    Deleted: sdk.Bool(false),
                    DisplayName: sdk.String("fuga"),
                    Domain: sdk.String("praesentium"),
                    EmailAddress: sdk.String("mollitia"),
                    ExpirationTime: types.MustTimeFromString("2022-12-21T09:05:01.168Z"),
                    ID: sdk.String("ce187f86-bc17-43d6-89ee-e9526f8d986e"),
                    Kind: sdk.String("atque"),
                    PendingOwner: sdk.Bool(false),
                    PhotoLink: sdk.String("atque"),
                    Role: sdk.String("sunt"),
                    Type: sdk.String("recusandae"),
                    View: sdk.String("dolorum"),
                },
                shared.PermissionInput{
                    AllowFileDiscovery: sdk.Bool(false),
                    Deleted: sdk.Bool(false),
                    DisplayName: sdk.String("repellendus"),
                    Domain: sdk.String("labore"),
                    EmailAddress: sdk.String("reiciendis"),
                    ExpirationTime: types.MustTimeFromString("2022-01-30T06:42:09.189Z"),
                    ID: sdk.String("1012563f-94e2-49e9-b3e9-22a57a15be3e"),
                    Kind: sdk.String("doloremque"),
                    PendingOwner: sdk.Bool(false),
                    PhotoLink: sdk.String("iure"),
                    Role: sdk.String("ipsa"),
                    Type: sdk.String("totam"),
                    View: sdk.String("quae"),
                },
            },
            Properties: map[string]string{
                "eveniet": "qui",
                "cum": "iure",
            },
            QuotaBytesUsed: sdk.String("necessitatibus"),
            ResourceKey: sdk.String("ratione"),
            Sha1Checksum: sdk.String("laborum"),
            Sha256Checksum: sdk.String("distinctio"),
            Shared: sdk.Bool(false),
            SharedWithMeTime: types.MustTimeFromString("2021-12-15T04:55:40.282Z"),
            SharingUser: &shared.User{
                DisplayName: sdk.String("aliquam"),
                EmailAddress: sdk.String("ad"),
                Kind: sdk.String("repellat"),
                Me: sdk.Bool(false),
                PermissionID: sdk.String("alias"),
                PhotoLink: sdk.String("corporis"),
            },
            ShortcutDetails: &shared.FileShortcutDetails{
                TargetID: sdk.String("perspiciatis"),
                TargetMimeType: sdk.String("nihil"),
                TargetResourceKey: sdk.String("mollitia"),
            },
            Size: sdk.String("voluptas"),
            Spaces: []string{
                "maiores",
            },
            Starred: sdk.Bool(false),
            TeamDriveID: sdk.String("reiciendis"),
            ThumbnailLink: sdk.String("dolores"),
            ThumbnailVersion: sdk.String("id"),
            Trashed: sdk.Bool(false),
            TrashedTime: types.MustTimeFromString("2022-09-16T00:03:17.363Z"),
            TrashingUser: &shared.User{
                DisplayName: sdk.String("dolorum"),
                EmailAddress: sdk.String("nesciunt"),
                Kind: sdk.String("quae"),
                Me: sdk.Bool(false),
                PermissionID: sdk.String("recusandae"),
                PhotoLink: sdk.String("omnis"),
            },
            Version: sdk.String("quaerat"),
            VideoMediaMetadata: &shared.FileVideoMediaMetadata{
                DurationMillis: sdk.String("molestiae"),
                Height: sdk.Int(403218),
                Width: sdk.Int(284000),
            },
            ViewedByMe: sdk.Bool(false),
            ViewedByMeTime: types.MustTimeFromString("2022-07-10T22:59:57.144Z"),
            ViewersCanCopyContent: sdk.Bool(false),
            WebContentLink: sdk.String("debitis"),
            WebViewLink: sdk.String("laudantium"),
            WritersCanShare: sdk.Bool(false),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("eum"),
        FileID: "nemo",
        IgnoreDefaultVisibility: sdk.Bool(false),
        IncludeLabels: sdk.String("recusandae"),
        IncludePermissionsForView: sdk.String("esse"),
        KeepRevisionForever: sdk.Bool(false),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("quis"),
        OcrLanguage: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UserIP: sdk.String("provident"),
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

## DriveFilesCreate

Creates a file.

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
    res, err := s.Files.DriveFilesCreate(ctx, operations.DriveFilesCreateRequest{
        RequestBody: []byte("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("ullam"),
        IgnoreDefaultVisibility: sdk.Bool(false),
        IncludeLabels: sdk.String("quasi"),
        IncludePermissionsForView: sdk.String("animi"),
        KeepRevisionForever: sdk.Bool(false),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("mollitia"),
        OcrLanguage: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("possimus"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UseContentAsIndexableText: sdk.Bool(false),
        UserIP: sdk.String("animi"),
    }, operations.DriveFilesCreateSecurity{
        Option1: &operations.DriveFilesCreateSecurityOption1{
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

Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.

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
        Fields: sdk.String("ex"),
        FileID: "aliquid",
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UserIP: sdk.String("ullam"),
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
        DriveID: sdk.String("in"),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("nam"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UserIP: sdk.String("placeat"),
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
        Fields: sdk.String("modi"),
        FileID: "voluptatibus",
        Key: sdk.String("molestias"),
        MimeType: "officiis",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UserIP: sdk.String("vitae"),
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

Generates a set of file IDs which can be provided in create or copy requests.

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
        Count: sdk.Int64(698249),
        Fields: sdk.String("tempora"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        Space: sdk.String("cumque"),
        Type: sdk.String("quae"),
        UserIP: sdk.String("perferendis"),
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
        Fields: sdk.String("velit"),
        FileID: "aspernatur",
        IncludeLabels: sdk.String("eum"),
        IncludePermissionsForView: sdk.String("eius"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UserIP: sdk.String("eos"),
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

## DriveFilesList

Lists or searches files.

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
        Corpora: sdk.String("sapiente"),
        Corpus: operations.DriveFilesListCorpusEnumDomain.ToPointer(),
        DriveID: sdk.String("dicta"),
        Fields: sdk.String("minima"),
        IncludeItemsFromAllDrives: sdk.Bool(false),
        IncludeLabels: sdk.String("beatae"),
        IncludePermissionsForView: sdk.String("cupiditate"),
        IncludeTeamDriveItems: sdk.Bool(false),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("earum"),
        OrderBy: sdk.String("soluta"),
        PageSize: sdk.Int64(940782),
        PageToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        Q: sdk.String("eaque"),
        QuotaUser: sdk.String("earum"),
        Spaces: sdk.String("perspiciatis"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TeamDriveID: sdk.String("maiores"),
        UserIP: sdk.String("debitis"),
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
        Fields: sdk.String("aliquid"),
        FileID: "porro",
        Key: sdk.String("suscipit"),
        MaxResults: sdk.Int64(211534),
        OauthToken: sdk.String("fugit"),
        PageToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UserIP: sdk.String("ratione"),
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
            Kind: sdk.String("animi"),
            LabelModifications: []shared.LabelModification{
                shared.LabelModification{
                    FieldModifications: []shared.LabelFieldModification{
                        shared.LabelFieldModification{
                            FieldID: sdk.String("consequatur"),
                            Kind: sdk.String("quasi"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-05-19"),
                            },
                            SetIntegerValues: []string{
                                "suscipit",
                                "adipisci",
                                "quasi",
                            },
                            SetSelectionValues: []string{
                                "doloribus",
                            },
                            SetTextValues: []string{
                                "necessitatibus",
                                "ipsa",
                                "tempora",
                                "nihil",
                            },
                            SetUserValues: []string{
                                "dicta",
                                "iusto",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("esse"),
                            Kind: sdk.String("praesentium"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2021-09-24"),
                                types.MustDateFromString("2022-02-22"),
                                types.MustDateFromString("2022-11-19"),
                                types.MustDateFromString("2022-09-23"),
                            },
                            SetIntegerValues: []string{
                                "ex",
                                "consectetur",
                            },
                            SetSelectionValues: []string{
                                "ipsa",
                                "laborum",
                            },
                            SetTextValues: []string{
                                "nostrum",
                            },
                            SetUserValues: []string{
                                "expedita",
                                "aliquid",
                                "officia",
                                "suscipit",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("aliquid"),
                            Kind: sdk.String("perferendis"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-05-21"),
                                types.MustDateFromString("2022-11-10"),
                            },
                            SetIntegerValues: []string{
                                "possimus",
                                "voluptates",
                                "mollitia",
                            },
                            SetSelectionValues: []string{
                                "libero",
                                "ad",
                                "deleniti",
                            },
                            SetTextValues: []string{
                                "vitae",
                                "repellendus",
                            },
                            SetUserValues: []string{
                                "quo",
                                "ex",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("ut"),
                            Kind: sdk.String("ad"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-06-10"),
                                types.MustDateFromString("2022-03-15"),
                                types.MustDateFromString("2022-06-21"),
                            },
                            SetIntegerValues: []string{
                                "veritatis",
                                "rerum",
                                "est",
                            },
                            SetSelectionValues: []string{
                                "voluptatem",
                                "sapiente",
                                "officiis",
                            },
                            SetTextValues: []string{
                                "fuga",
                            },
                            SetUserValues: []string{
                                "debitis",
                                "voluptatem",
                                "alias",
                                "deleniti",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                    },
                    Kind: sdk.String("earum"),
                    LabelID: sdk.String("ex"),
                    RemoveLabel: sdk.Bool(false),
                },
                shared.LabelModification{
                    FieldModifications: []shared.LabelFieldModification{
                        shared.LabelFieldModification{
                            FieldID: sdk.String("rem"),
                            Kind: sdk.String("minus"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-06-06"),
                                types.MustDateFromString("2022-12-25"),
                            },
                            SetIntegerValues: []string{
                                "totam",
                                "impedit",
                                "quibusdam",
                                "nam",
                            },
                            SetSelectionValues: []string{
                                "culpa",
                                "dolor",
                            },
                            SetTextValues: []string{
                                "inventore",
                                "deleniti",
                            },
                            SetUserValues: []string{
                                "tempora",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("dolor"),
                            Kind: sdk.String("consequatur"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-09-26"),
                            },
                            SetIntegerValues: []string{
                                "ab",
                            },
                            SetSelectionValues: []string{
                                "quae",
                                "dolor",
                                "fugiat",
                            },
                            SetTextValues: []string{
                                "consequuntur",
                                "ipsa",
                            },
                            SetUserValues: []string{
                                "eveniet",
                                "impedit",
                                "officiis",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("esse"),
                            Kind: sdk.String("necessitatibus"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-10-20"),
                            },
                            SetIntegerValues: []string{
                                "eum",
                                "vel",
                                "voluptatum",
                            },
                            SetSelectionValues: []string{
                                "exercitationem",
                                "ab",
                            },
                            SetTextValues: []string{
                                "autem",
                                "nobis",
                                "laboriosam",
                                "recusandae",
                            },
                            SetUserValues: []string{
                                "voluptatem",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("exercitationem"),
                            Kind: sdk.String("necessitatibus"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-02-17"),
                            },
                            SetIntegerValues: []string{
                                "est",
                                "harum",
                                "sequi",
                                "doloribus",
                            },
                            SetSelectionValues: []string{
                                "optio",
                                "occaecati",
                                "nemo",
                                "voluptate",
                            },
                            SetTextValues: []string{
                                "officia",
                                "voluptas",
                                "numquam",
                            },
                            SetUserValues: []string{
                                "quos",
                                "eius",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                    },
                    Kind: sdk.String("aspernatur"),
                    LabelID: sdk.String("ducimus"),
                    RemoveLabel: sdk.Bool(false),
                },
                shared.LabelModification{
                    FieldModifications: []shared.LabelFieldModification{
                        shared.LabelFieldModification{
                            FieldID: sdk.String("fuga"),
                            Kind: sdk.String("laudantium"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-06-23"),
                                types.MustDateFromString("2022-08-25"),
                            },
                            SetIntegerValues: []string{
                                "consequuntur",
                                "consectetur",
                            },
                            SetSelectionValues: []string{
                                "cupiditate",
                            },
                            SetTextValues: []string{
                                "soluta",
                                "alias",
                                "omnis",
                                "eos",
                            },
                            SetUserValues: []string{
                                "iste",
                                "magni",
                                "inventore",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                    },
                    Kind: sdk.String("fuga"),
                    LabelID: sdk.String("accusamus"),
                    RemoveLabel: sdk.Bool(false),
                },
                shared.LabelModification{
                    FieldModifications: []shared.LabelFieldModification{
                        shared.LabelFieldModification{
                            FieldID: sdk.String("distinctio"),
                            Kind: sdk.String("omnis"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-06-29"),
                                types.MustDateFromString("2022-02-06"),
                                types.MustDateFromString("2021-05-09"),
                                types.MustDateFromString("2022-01-26"),
                            },
                            SetIntegerValues: []string{
                                "totam",
                                "earum",
                            },
                            SetSelectionValues: []string{
                                "nam",
                                "vero",
                            },
                            SetTextValues: []string{
                                "ipsam",
                            },
                            SetUserValues: []string{
                                "alias",
                                "quasi",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("non"),
                            Kind: sdk.String("maiores"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2021-04-14"),
                                types.MustDateFromString("2022-01-31"),
                            },
                            SetIntegerValues: []string{
                                "reprehenderit",
                                "est",
                            },
                            SetSelectionValues: []string{
                                "sint",
                                "accusamus",
                            },
                            SetTextValues: []string{
                                "hic",
                                "necessitatibus",
                                "asperiores",
                                "ex",
                            },
                            SetUserValues: []string{
                                "debitis",
                                "delectus",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("quae"),
                            Kind: sdk.String("minus"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-07-16"),
                                types.MustDateFromString("2022-06-18"),
                                types.MustDateFromString("2022-03-24"),
                            },
                            SetIntegerValues: []string{
                                "soluta",
                            },
                            SetSelectionValues: []string{
                                "nam",
                                "dolore",
                                "iusto",
                                "voluptate",
                            },
                            SetTextValues: []string{
                                "dignissimos",
                            },
                            SetUserValues: []string{
                                "quo",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                        shared.LabelFieldModification{
                            FieldID: sdk.String("deleniti"),
                            Kind: sdk.String("quibusdam"),
                            SetDateValues: []types.Date{
                                types.MustDateFromString("2022-01-10"),
                                types.MustDateFromString("2022-09-13"),
                            },
                            SetIntegerValues: []string{
                                "inventore",
                                "facere",
                                "libero",
                                "architecto",
                            },
                            SetSelectionValues: []string{
                                "quia",
                                "porro",
                                "aliquam",
                                "velit",
                            },
                            SetTextValues: []string{
                                "accusantium",
                            },
                            SetUserValues: []string{
                                "ea",
                                "beatae",
                            },
                            UnsetValues: sdk.Bool(false),
                        },
                    },
                    Kind: sdk.String("vero"),
                    LabelID: sdk.String("excepturi"),
                    RemoveLabel: sdk.Bool(false),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("eum"),
        FileID: "velit",
        Key: sdk.String("ut"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UserIP: sdk.String("dicta"),
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

## DriveFilesUpdate

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
    res, err := s.Files.DriveFilesUpdate(ctx, operations.DriveFilesUpdateRequest{
        RequestBody: []byte("impedit"),
        AddParents: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("iste"),
        FileID: "itaque",
        IncludeLabels: sdk.String("alias"),
        IncludePermissionsForView: sdk.String("nisi"),
        KeepRevisionForever: sdk.Bool(false),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("velit"),
        OcrLanguage: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        RemoveParents: sdk.String("dolor"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UseContentAsIndexableText: sdk.Bool(false),
        UserIP: sdk.String("iusto"),
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
            Address: sdk.String("00694 Hodkiewicz Ranch"),
            Expiration: sdk.String("placeat"),
            ID: sdk.String("9b8f759e-ac55-4a97-81d3-11352965bb8a"),
            Kind: sdk.String("odio"),
            Params: map[string]string{
                "alias": "magni",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("vel"),
            ResourceURI: sdk.String("quae"),
            Token: sdk.String("quae"),
            Type: sdk.String("modi"),
        },
        AcknowledgeAbuse: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("neque"),
        FileID: "exercitationem",
        IncludeLabels: sdk.String("itaque"),
        IncludePermissionsForView: sdk.String("et"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UserIP: sdk.String("distinctio"),
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
