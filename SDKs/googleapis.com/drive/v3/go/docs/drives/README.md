# Drives

### Available Operations

* [DriveDrivesCreate](#drivedrivescreate) - Creates a shared drive.
* [DriveDrivesDelete](#drivedrivesdelete) - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* [DriveDrivesGet](#drivedrivesget) - Gets a shared drive's metadata by ID.
* [DriveDrivesHide](#drivedriveshide) - Hides a shared drive from the default view.
* [DriveDrivesList](#drivedriveslist) - Lists the user's shared drives.
* [DriveDrivesUnhide](#drivedrivesunhide) - Restores a shared drive to the default view.
* [DriveDrivesUpdate](#drivedrivesupdate) - Updates the metadata for a shared drive.

## DriveDrivesCreate

Creates a shared drive.

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
    res, err := s.Drives.DriveDrivesCreate(ctx, operations.DriveDrivesCreateRequest{
        Drive: &shared.Drive{
            BackgroundImageFile: &shared.DriveBackgroundImageFile{
                ID: sdk.String("22715bf0-cbb1-4e31-b8b9-0f3443a1108e"),
                Width: sdk.Float32(92.4),
                XCoordinate: sdk.Float32(6699.17),
                YCoordinate: sdk.Float32(8330.38),
            },
            BackgroundImageLink: sdk.String("porro"),
            Capabilities: &shared.DriveCapabilities{
                CanAddChildren: sdk.Bool(false),
                CanChangeCopyRequiresWriterPermissionRestriction: sdk.Bool(false),
                CanChangeDomainUsersOnlyRestriction: sdk.Bool(false),
                CanChangeDriveBackground: sdk.Bool(false),
                CanChangeDriveMembersOnlyRestriction: sdk.Bool(false),
                CanChangeSharingFoldersRequiresOrganizerPermissionRestriction: sdk.Bool(false),
                CanComment: sdk.Bool(false),
                CanCopy: sdk.Bool(false),
                CanDeleteChildren: sdk.Bool(false),
                CanDeleteDrive: sdk.Bool(false),
                CanDownload: sdk.Bool(false),
                CanEdit: sdk.Bool(false),
                CanListChildren: sdk.Bool(false),
                CanManageMembers: sdk.Bool(false),
                CanReadRevisions: sdk.Bool(false),
                CanRename: sdk.Bool(false),
                CanRenameDrive: sdk.Bool(false),
                CanResetDriveRestrictions: sdk.Bool(false),
                CanShare: sdk.Bool(false),
                CanTrashChildren: sdk.Bool(false),
            },
            ColorRgb: sdk.String("doloribus"),
            CreatedTime: types.MustTimeFromString("2022-04-19T05:23:08.152Z"),
            Hidden: sdk.Bool(false),
            ID: sdk.String("921879fc-e953-4f73-af7f-bc7abd74dd39"),
            Kind: sdk.String("impedit"),
            Name: sdk.String("Camille Heidenreich"),
            OrgUnitID: sdk.String("porro"),
            Restrictions: &shared.DriveRestrictions{
                AdminManagedRestrictions: sdk.Bool(false),
                CopyRequiresWriterPermission: sdk.Bool(false),
                DomainUsersOnly: sdk.Bool(false),
                DriveMembersOnly: sdk.Bool(false),
                SharingFoldersRequiresOrganizerPermission: sdk.Bool(false),
            },
            ThemeID: sdk.String("maiores"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        RequestID: "alias",
        UserIP: sdk.String("officia"),
    }, operations.DriveDrivesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Drive != nil {
        // handle response
    }
}
```

## DriveDrivesDelete

Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.

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
    res, err := s.Drives.DriveDrivesDelete(ctx, operations.DriveDrivesDeleteRequest{
        AllowItemDeletion: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: "tempora",
        Fields: sdk.String("ipsam"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("possimus"),
    }, operations.DriveDrivesDeleteSecurity{
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

## DriveDrivesGet

Gets a shared drive's metadata by ID.

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
    res, err := s.Drives.DriveDrivesGet(ctx, operations.DriveDrivesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: "magnam",
        Fields: sdk.String("ratione"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("dolor"),
    }, operations.DriveDrivesGetSecurity{
        Option1: &operations.DriveDrivesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Drive != nil {
        // handle response
    }
}
```

## DriveDrivesHide

Hides a shared drive from the default view.

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
    res, err := s.Drives.DriveDrivesHide(ctx, operations.DriveDrivesHideRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: "maiores",
        Fields: sdk.String("quasi"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UserIP: sdk.String("voluptatibus"),
    }, operations.DriveDrivesHideSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Drive != nil {
        // handle response
    }
}
```

## DriveDrivesList

Lists the user's shared drives.

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
    res, err := s.Drives.DriveDrivesList(ctx, operations.DriveDrivesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("quisquam"),
        PageSize: sdk.Int64(906556),
        PageToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        Q: sdk.String("impedit"),
        QuotaUser: sdk.String("corporis"),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("veniam"),
    }, operations.DriveDrivesListSecurity{
        Option1: &operations.DriveDrivesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DriveList != nil {
        // handle response
    }
}
```

## DriveDrivesUnhide

Restores a shared drive to the default view.

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
    res, err := s.Drives.DriveDrivesUnhide(ctx, operations.DriveDrivesUnhideRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: "aliquid",
        Fields: sdk.String("inventore"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UserIP: sdk.String("consectetur"),
    }, operations.DriveDrivesUnhideSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Drive != nil {
        // handle response
    }
}
```

## DriveDrivesUpdate

Updates the metadata for a shared drive.

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
    res, err := s.Drives.DriveDrivesUpdate(ctx, operations.DriveDrivesUpdateRequest{
        Drive: &shared.Drive{
            BackgroundImageFile: &shared.DriveBackgroundImageFile{
                ID: sdk.String("e250fb00-8c42-4e14-9aac-366c8dd6b144"),
                Width: sdk.Float32(1314.82),
                XCoordinate: sdk.Float32(5919.35),
                YCoordinate: sdk.Float32(553.74),
            },
            BackgroundImageLink: sdk.String("molestiae"),
            Capabilities: &shared.DriveCapabilities{
                CanAddChildren: sdk.Bool(false),
                CanChangeCopyRequiresWriterPermissionRestriction: sdk.Bool(false),
                CanChangeDomainUsersOnlyRestriction: sdk.Bool(false),
                CanChangeDriveBackground: sdk.Bool(false),
                CanChangeDriveMembersOnlyRestriction: sdk.Bool(false),
                CanChangeSharingFoldersRequiresOrganizerPermissionRestriction: sdk.Bool(false),
                CanComment: sdk.Bool(false),
                CanCopy: sdk.Bool(false),
                CanDeleteChildren: sdk.Bool(false),
                CanDeleteDrive: sdk.Bool(false),
                CanDownload: sdk.Bool(false),
                CanEdit: sdk.Bool(false),
                CanListChildren: sdk.Bool(false),
                CanManageMembers: sdk.Bool(false),
                CanReadRevisions: sdk.Bool(false),
                CanRename: sdk.Bool(false),
                CanRenameDrive: sdk.Bool(false),
                CanResetDriveRestrictions: sdk.Bool(false),
                CanShare: sdk.Bool(false),
                CanTrashChildren: sdk.Bool(false),
            },
            ColorRgb: sdk.String("magnam"),
            CreatedTime: types.MustTimeFromString("2022-09-27T07:50:41.350Z"),
            Hidden: sdk.Bool(false),
            ID: sdk.String("778a7bd4-66d2-48c1-8ab3-cdca4251904e"),
            Kind: sdk.String("ipsam"),
            Name: sdk.String("Emily Satterfield"),
            OrgUnitID: sdk.String("aperiam"),
            Restrictions: &shared.DriveRestrictions{
                AdminManagedRestrictions: sdk.Bool(false),
                CopyRequiresWriterPermission: sdk.Bool(false),
                DomainUsersOnly: sdk.Bool(false),
                DriveMembersOnly: sdk.Bool(false),
                SharingFoldersRequiresOrganizerPermission: sdk.Bool(false),
            },
            ThemeID: sdk.String("distinctio"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: "quod",
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("accusamus"),
    }, operations.DriveDrivesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Drive != nil {
        // handle response
    }
}
```
