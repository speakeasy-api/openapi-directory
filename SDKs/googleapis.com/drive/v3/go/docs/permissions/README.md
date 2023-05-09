# Permissions

### Available Operations

* [DrivePermissionsCreate](#drivepermissionscreate) - Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives.
* [DrivePermissionsDelete](#drivepermissionsdelete) - Deletes a permission.
* [DrivePermissionsGet](#drivepermissionsget) - Gets a permission by ID.
* [DrivePermissionsList](#drivepermissionslist) - Lists a file's or shared drive's permissions.
* [DrivePermissionsUpdate](#drivepermissionsupdate) - Updates a permission with patch semantics.

## DrivePermissionsCreate

Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives.

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
    res, err := s.Permissions.DrivePermissionsCreate(ctx, operations.DrivePermissionsCreateRequest{
        PermissionInput: &shared.PermissionInput{
            AllowFileDiscovery: sdk.Bool(false),
            Deleted: sdk.Bool(false),
            DisplayName: sdk.String("maxime"),
            Domain: sdk.String("quia"),
            EmailAddress: sdk.String("quia"),
            ExpirationTime: types.MustTimeFromString("2022-05-24T21:57:47.411Z"),
            ID: sdk.String("b1abda8c-070e-4108-8cb0-672d1ad879ee"),
            Kind: sdk.String("tempore"),
            PendingOwner: sdk.Bool(false),
            PhotoLink: sdk.String("sint"),
            Role: sdk.String("ea"),
            Type: sdk.String("autem"),
            View: sdk.String("ipsam"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EmailMessage: sdk.String("rerum"),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("laudantium"),
        FileID: "corporis",
        Key: sdk.String("officiis"),
        MoveToNewOwnersRoot: sdk.Bool(false),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        SendNotificationEmail: sdk.Bool(false),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TransferOwnership: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("at"),
    }, operations.DrivePermissionsCreateSecurity{
        Option1: &operations.DrivePermissionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Permission != nil {
        // handle response
    }
}
```

## DrivePermissionsDelete

Deletes a permission.

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
    res, err := s.Permissions.DrivePermissionsDelete(ctx, operations.DrivePermissionsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("alias"),
        FileID: "quia",
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("fuga"),
        PermissionID: "repudiandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("expedita"),
    }, operations.DrivePermissionsDeleteSecurity{
        Option1: &operations.DrivePermissionsDeleteSecurityOption1{
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

## DrivePermissionsGet

Gets a permission by ID.

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
    res, err := s.Permissions.DrivePermissionsGet(ctx, operations.DrivePermissionsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("officiis"),
        FileID: "eos",
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("odio"),
        PermissionID: "praesentium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("explicabo"),
    }, operations.DrivePermissionsGetSecurity{
        Option1: &operations.DrivePermissionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Permission != nil {
        // handle response
    }
}
```

## DrivePermissionsList

Lists a file's or shared drive's permissions.

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
    res, err := s.Permissions.DrivePermissionsList(ctx, operations.DrivePermissionsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("corporis"),
        FileID: "error",
        IncludePermissionsForView: sdk.String("earum"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("recusandae"),
        PageSize: sdk.Int64(630871),
        PageToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("quis"),
    }, operations.DrivePermissionsListSecurity{
        Option1: &operations.DrivePermissionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionList != nil {
        // handle response
    }
}
```

## DrivePermissionsUpdate

Updates a permission with patch semantics.

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
    res, err := s.Permissions.DrivePermissionsUpdate(ctx, operations.DrivePermissionsUpdateRequest{
        PermissionInput: &shared.PermissionInput{
            AllowFileDiscovery: sdk.Bool(false),
            Deleted: sdk.Bool(false),
            DisplayName: sdk.String("beatae"),
            Domain: sdk.String("unde"),
            EmailAddress: sdk.String("molestiae"),
            ExpirationTime: types.MustTimeFromString("2021-03-30T18:36:20.933Z"),
            ID: sdk.String("2443da7c-e52b-4895-8537-c6454efb0b34"),
            Kind: sdk.String("totam"),
            PendingOwner: sdk.Bool(false),
            PhotoLink: sdk.String("occaecati"),
            Role: sdk.String("voluptas"),
            Type: sdk.String("quo"),
            View: sdk.String("velit"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("minus"),
        FileID: "fuga",
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("est"),
        PermissionID: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        RemoveExpiration: sdk.Bool(false),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TransferOwnership: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("tempore"),
    }, operations.DrivePermissionsUpdateSecurity{
        Option1: &operations.DrivePermissionsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Permission != nil {
        // handle response
    }
}
```
