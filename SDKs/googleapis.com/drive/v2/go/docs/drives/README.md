# Drives

### Available Operations

* [DriveDrivesDelete](#drivedrivesdelete) - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* [DriveDrivesGet](#drivedrivesget) - Gets a shared drive's metadata by ID.
* [DriveDrivesHide](#drivedriveshide) - Hides a shared drive from the default view.
* [DriveDrivesInsert](#drivedrivesinsert) - Creates a new shared drive.
* [DriveDrivesList](#drivedriveslist) - Lists the user's shared drives.
* [DriveDrivesUnhide](#drivedrivesunhide) - Restores a shared drive to the default view.
* [DriveDrivesUpdate](#drivedrivesupdate) - Updates the metadata for a shared drive.

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
        DriveID: "deleniti",
        Fields: sdk.String("omnis"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("nihil"),
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
        DriveID: "ipsum",
        Fields: sdk.String("voluptate"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("aspernatur"),
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
        DriveID: "perferendis",
        Fields: sdk.String("amet"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UserIP: sdk.String("saepe"),
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

## DriveDrivesInsert

Creates a new shared drive.

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
    res, err := s.Drives.DriveDrivesInsert(ctx, operations.DriveDrivesInsertRequest{
        Drive: &shared.Drive{
            BackgroundImageFile: &shared.DriveBackgroundImageFile{
                ID: sdk.String("6a95d8a0-d446-4ce2-af7a-73cf3be453f8"),
                Width: sdk.Float32(4717.52),
                XCoordinate: sdk.Float32(256.62),
                YCoordinate: sdk.Float32(7115.84),
            },
            BackgroundImageLink: sdk.String("neque"),
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
            ColorRgb: sdk.String("sed"),
            CreatedDate: types.MustTimeFromString("2022-04-09T09:19:35.125Z"),
            Hidden: sdk.Bool(false),
            ID: sdk.String("5a73429c-db1a-4842-abb6-79d2322715bf"),
            Kind: sdk.String("voluptatem"),
            Name: sdk.String("Dr. Dominic Rohan"),
            OrgUnitID: sdk.String("veritatis"),
            Restrictions: &shared.DriveRestrictions{
                AdminManagedRestrictions: sdk.Bool(false),
                CopyRequiresWriterPermission: sdk.Bool(false),
                DomainUsersOnly: sdk.Bool(false),
                DriveMembersOnly: sdk.Bool(false),
                SharingFoldersRequiresOrganizerPermission: sdk.Bool(false),
            },
            ThemeID: sdk.String("nobis"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quos"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        RequestID: "delectus",
        UserIP: sdk.String("dolorem"),
    }, operations.DriveDrivesInsertSecurity{
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
        Fields: sdk.String("dolore"),
        Key: sdk.String("labore"),
        MaxResults: sdk.Int64(240829),
        OauthToken: sdk.String("dolorum"),
        PageToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        Q: sdk.String("quae"),
        QuotaUser: sdk.String("aut"),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("quas"),
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
        DriveID: "itaque",
        Fields: sdk.String("consequatur"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UserIP: sdk.String("doloribus"),
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
                ID: sdk.String("4b921879-fce9-453f-b3ef-7fbc7abd74dd"),
                Width: sdk.Float32(1943.42),
                XCoordinate: sdk.Float32(6178.77),
                YCoordinate: sdk.Float32(7733.26),
            },
            BackgroundImageLink: sdk.String("aut"),
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
            ColorRgb: sdk.String("voluptatibus"),
            CreatedDate: types.MustTimeFromString("2022-02-20T06:09:58.619Z"),
            Hidden: sdk.Bool(false),
            ID: sdk.String("2cff7c70-a456-426d-8368-13f16d9f5fce"),
            Kind: sdk.String("ea"),
            Name: sdk.String("Lewis Hartmann II"),
            OrgUnitID: sdk.String("ea"),
            Restrictions: &shared.DriveRestrictions{
                AdminManagedRestrictions: sdk.Bool(false),
                CopyRequiresWriterPermission: sdk.Bool(false),
                DomainUsersOnly: sdk.Bool(false),
                DriveMembersOnly: sdk.Bool(false),
                SharingFoldersRequiresOrganizerPermission: sdk.Bool(false),
            },
            ThemeID: sdk.String("quo"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: "consectetur",
        Fields: sdk.String("recusandae"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("a"),
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
