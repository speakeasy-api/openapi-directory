# Teamdrives

### Available Operations

* [DriveTeamdrivesDelete](#driveteamdrivesdelete) - Deprecated use drives.delete instead.
* [DriveTeamdrivesGet](#driveteamdrivesget) - Deprecated use drives.get instead.
* [DriveTeamdrivesInsert](#driveteamdrivesinsert) - Deprecated use drives.insert instead.
* [DriveTeamdrivesList](#driveteamdriveslist) - Deprecated use drives.list instead.
* [DriveTeamdrivesUpdate](#driveteamdrivesupdate) - Deprecated use drives.update instead.

## DriveTeamdrivesDelete

Deprecated use drives.delete instead.

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
    res, err := s.Teamdrives.DriveTeamdrivesDelete(ctx, operations.DriveTeamdrivesDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("facilis"),
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        TeamDriveID: "natus",
        UserIP: sdk.String("ab"),
    }, operations.DriveTeamdrivesDeleteSecurity{
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

## DriveTeamdrivesGet

Deprecated use drives.get instead.

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
    res, err := s.Teamdrives.DriveTeamdrivesGet(ctx, operations.DriveTeamdrivesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("officiis"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        TeamDriveID: "ab",
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("ad"),
    }, operations.DriveTeamdrivesGetSecurity{
        Option1: &operations.DriveTeamdrivesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDrive != nil {
        // handle response
    }
}
```

## DriveTeamdrivesInsert

Deprecated use drives.insert instead.

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
    res, err := s.Teamdrives.DriveTeamdrivesInsert(ctx, operations.DriveTeamdrivesInsertRequest{
        TeamDrive: &shared.TeamDrive{
            BackgroundImageFile: &shared.TeamDriveBackgroundImageFile{
                ID: sdk.String("8c4c4e54-599e-4a34-a260-e9b200ce78a1"),
                Width: sdk.Float32(7104.83),
                XCoordinate: sdk.Float32(8429.21),
                YCoordinate: sdk.Float32(5529.84),
            },
            BackgroundImageLink: sdk.String("maiores"),
            Capabilities: &shared.TeamDriveCapabilities{
                CanAddChildren: sdk.Bool(false),
                CanChangeCopyRequiresWriterPermissionRestriction: sdk.Bool(false),
                CanChangeDomainUsersOnlyRestriction: sdk.Bool(false),
                CanChangeSharingFoldersRequiresOrganizerPermissionRestriction: sdk.Bool(false),
                CanChangeTeamDriveBackground: sdk.Bool(false),
                CanChangeTeamMembersOnlyRestriction: sdk.Bool(false),
                CanComment: sdk.Bool(false),
                CanCopy: sdk.Bool(false),
                CanDeleteChildren: sdk.Bool(false),
                CanDeleteTeamDrive: sdk.Bool(false),
                CanDownload: sdk.Bool(false),
                CanEdit: sdk.Bool(false),
                CanListChildren: sdk.Bool(false),
                CanManageMembers: sdk.Bool(false),
                CanReadRevisions: sdk.Bool(false),
                CanRemoveChildren: sdk.Bool(false),
                CanRename: sdk.Bool(false),
                CanRenameTeamDrive: sdk.Bool(false),
                CanResetTeamDriveRestrictions: sdk.Bool(false),
                CanShare: sdk.Bool(false),
                CanTrashChildren: sdk.Bool(false),
            },
            ColorRgb: sdk.String("quidem"),
            CreatedDate: types.MustTimeFromString("2022-05-14T02:39:00.347Z"),
            ID: sdk.String("0a116ce7-23d4-4097-ba30-e9af725b2912"),
            Kind: sdk.String("explicabo"),
            Name: sdk.String("Wendy Altenwerth"),
            OrgUnitID: sdk.String("velit"),
            Restrictions: &shared.TeamDriveRestrictions{
                AdminManagedRestrictions: sdk.Bool(false),
                CopyRequiresWriterPermission: sdk.Bool(false),
                DomainUsersOnly: sdk.Bool(false),
                SharingFoldersRequiresOrganizerPermission: sdk.Bool(false),
                TeamMembersOnly: sdk.Bool(false),
            },
            ThemeID: sdk.String("hic"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ullam"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        RequestID: "iusto",
        UserIP: sdk.String("dignissimos"),
    }, operations.DriveTeamdrivesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDrive != nil {
        // handle response
    }
}
```

## DriveTeamdrivesList

Deprecated use drives.list instead.

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
    res, err := s.Teamdrives.DriveTeamdrivesList(ctx, operations.DriveTeamdrivesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("provident"),
        Key: sdk.String("occaecati"),
        MaxResults: sdk.Int64(828735),
        OauthToken: sdk.String("sunt"),
        PageToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        Q: sdk.String("vero"),
        QuotaUser: sdk.String("deleniti"),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("optio"),
    }, operations.DriveTeamdrivesListSecurity{
        Option1: &operations.DriveTeamdrivesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDriveList != nil {
        // handle response
    }
}
```

## DriveTeamdrivesUpdate

Deprecated use drives.update instead.

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
    res, err := s.Teamdrives.DriveTeamdrivesUpdate(ctx, operations.DriveTeamdrivesUpdateRequest{
        TeamDrive: &shared.TeamDrive{
            BackgroundImageFile: &shared.TeamDriveBackgroundImageFile{
                ID: sdk.String("1f849382-5fdc-442c-876c-2c2dfb4cfc1c"),
                Width: sdk.Float32(4608.03),
                XCoordinate: sdk.Float32(3920.8),
                YCoordinate: sdk.Float32(1296.19),
            },
            BackgroundImageLink: sdk.String("sequi"),
            Capabilities: &shared.TeamDriveCapabilities{
                CanAddChildren: sdk.Bool(false),
                CanChangeCopyRequiresWriterPermissionRestriction: sdk.Bool(false),
                CanChangeDomainUsersOnlyRestriction: sdk.Bool(false),
                CanChangeSharingFoldersRequiresOrganizerPermissionRestriction: sdk.Bool(false),
                CanChangeTeamDriveBackground: sdk.Bool(false),
                CanChangeTeamMembersOnlyRestriction: sdk.Bool(false),
                CanComment: sdk.Bool(false),
                CanCopy: sdk.Bool(false),
                CanDeleteChildren: sdk.Bool(false),
                CanDeleteTeamDrive: sdk.Bool(false),
                CanDownload: sdk.Bool(false),
                CanEdit: sdk.Bool(false),
                CanListChildren: sdk.Bool(false),
                CanManageMembers: sdk.Bool(false),
                CanReadRevisions: sdk.Bool(false),
                CanRemoveChildren: sdk.Bool(false),
                CanRename: sdk.Bool(false),
                CanRenameTeamDrive: sdk.Bool(false),
                CanResetTeamDriveRestrictions: sdk.Bool(false),
                CanShare: sdk.Bool(false),
                CanTrashChildren: sdk.Bool(false),
            },
            ColorRgb: sdk.String("alias"),
            CreatedDate: types.MustTimeFromString("2021-05-04T15:01:38.967Z"),
            ID: sdk.String("41fb1bd2-3fdb-414d-b6be-5a685998e22a"),
            Kind: sdk.String("vero"),
            Name: sdk.String("Betty Smitham III"),
            OrgUnitID: sdk.String("a"),
            Restrictions: &shared.TeamDriveRestrictions{
                AdminManagedRestrictions: sdk.Bool(false),
                CopyRequiresWriterPermission: sdk.Bool(false),
                DomainUsersOnly: sdk.Bool(false),
                SharingFoldersRequiresOrganizerPermission: sdk.Bool(false),
                TeamMembersOnly: sdk.Bool(false),
            },
            ThemeID: sdk.String("minus"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("sed"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        TeamDriveID: "ab",
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("deserunt"),
    }, operations.DriveTeamdrivesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDrive != nil {
        // handle response
    }
}
```
