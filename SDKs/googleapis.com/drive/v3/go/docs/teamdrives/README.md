# Teamdrives

### Available Operations

* [DriveTeamdrivesCreate](#driveteamdrivescreate) - Deprecated use drives.create instead.
* [DriveTeamdrivesDelete](#driveteamdrivesdelete) - Deprecated use drives.delete instead.
* [DriveTeamdrivesGet](#driveteamdrivesget) - Deprecated use drives.get instead.
* [DriveTeamdrivesList](#driveteamdriveslist) - Deprecated use drives.list instead.
* [DriveTeamdrivesUpdate](#driveteamdrivesupdate) - Deprecated use drives.update instead

## DriveTeamdrivesCreate

Deprecated use drives.create instead.

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
    res, err := s.Teamdrives.DriveTeamdrivesCreate(ctx, operations.DriveTeamdrivesCreateRequest{
        TeamDrive: &shared.TeamDrive{
            BackgroundImageFile: &shared.TeamDriveBackgroundImageFile{
                ID: sdk.String("0503d8bb-3118-40f7-b9ae-9e057eb809e2"),
                Width: sdk.Float32(5200.81),
                XCoordinate: sdk.Float32(1158.61),
                YCoordinate: sdk.Float32(306.61),
            },
            BackgroundImageLink: sdk.String("velit"),
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
            ColorRgb: sdk.String("dolor"),
            CreatedTime: types.MustTimeFromString("2022-01-17T21:48:03.045Z"),
            ID: sdk.String("3981d4c7-00b6-407f-bc93-c73b9da3f2ce"),
            Kind: sdk.String("illum"),
            Name: sdk.String("Cody Terry"),
            OrgUnitID: sdk.String("repellat"),
            Restrictions: &shared.TeamDriveRestrictions{
                AdminManagedRestrictions: sdk.Bool(false),
                CopyRequiresWriterPermission: sdk.Bool(false),
                DomainUsersOnly: sdk.Bool(false),
                SharingFoldersRequiresOrganizerPermission: sdk.Bool(false),
                TeamMembersOnly: sdk.Bool(false),
            },
            ThemeID: sdk.String("explicabo"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        RequestID: "ab",
        UserIP: sdk.String("illo"),
    }, operations.DriveTeamdrivesCreateSecurity{
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
        Fields: sdk.String("hic"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        TeamDriveID: "distinctio",
        UserIP: sdk.String("in"),
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
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        TeamDriveID: "modi",
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("in"),
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
        Fields: sdk.String("explicabo"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("rem"),
        PageSize: sdk.Int64(44016),
        PageToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        Q: sdk.String("deleniti"),
        QuotaUser: sdk.String("enim"),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("voluptate"),
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

Deprecated use drives.update instead

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
                ID: sdk.String("a5b40463-a7d5-475f-9400-e764ad7334ec"),
                Width: sdk.Float32(1226.62),
                XCoordinate: sdk.Float32(7151.43),
                YCoordinate: sdk.Float32(4813.75),
            },
            BackgroundImageLink: sdk.String("quas"),
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
            ColorRgb: sdk.String("et"),
            CreatedTime: types.MustTimeFromString("2022-07-17T15:04:57.362Z"),
            ID: sdk.String("6a08088d-100e-4fad-a200-ef0422eb2164"),
            Kind: sdk.String("optio"),
            Name: sdk.String("Ross Nikolaus"),
            OrgUnitID: sdk.String("sequi"),
            Restrictions: &shared.TeamDriveRestrictions{
                AdminManagedRestrictions: sdk.Bool(false),
                CopyRequiresWriterPermission: sdk.Bool(false),
                DomainUsersOnly: sdk.Bool(false),
                SharingFoldersRequiresOrganizerPermission: sdk.Bool(false),
                TeamMembersOnly: sdk.Bool(false),
            },
            ThemeID: sdk.String("aliquid"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ea"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("ducimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        TeamDriveID: "velit",
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("reiciendis"),
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
