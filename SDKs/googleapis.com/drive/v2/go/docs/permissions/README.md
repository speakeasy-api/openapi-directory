# Permissions

### Available Operations

* [DrivePermissionsDelete](#drivepermissionsdelete) - Deletes a permission from a file or shared drive.
* [DrivePermissionsGet](#drivepermissionsget) - Gets a permission by ID.
* [DrivePermissionsGetIDForEmail](#drivepermissionsgetidforemail) - Returns the permission ID for an email address.
* [DrivePermissionsInsert](#drivepermissionsinsert) - Inserts a permission for a file or shared drive.
* [DrivePermissionsList](#drivepermissionslist) - Lists a file's or shared drive's permissions.
* [DrivePermissionsPatch](#drivepermissionspatch) - Updates a permission using patch semantics.
* [DrivePermissionsUpdate](#drivepermissionsupdate) - Updates a permission.

## DrivePermissionsDelete

Deletes a permission from a file or shared drive.

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
        Fields: sdk.String("sequi"),
        FileID: "eligendi",
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("perferendis"),
        PermissionID: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("nihil"),
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
        Fields: sdk.String("tenetur"),
        FileID: "sapiente",
        Key: sdk.String("velit"),
        OauthToken: sdk.String("adipisci"),
        PermissionID: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("illum"),
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

## DrivePermissionsGetIDForEmail

Returns the permission ID for an email address.

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
    res, err := s.Permissions.DrivePermissionsGetIDForEmail(ctx, operations.DrivePermissionsGetIDForEmailRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Email: "Tyrese.MacGyver@hotmail.com",
        Fields: sdk.String("laborum"),
        Key: sdk.String("perspiciatis"),
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UserIP: sdk.String("quasi"),
    }, operations.DrivePermissionsGetIDForEmailSecurity{
        Option1: &operations.DrivePermissionsGetIDForEmailSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionID != nil {
        // handle response
    }
}
```

## DrivePermissionsInsert

Inserts a permission for a file or shared drive.

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
    res, err := s.Permissions.DrivePermissionsInsert(ctx, operations.DrivePermissionsInsertRequest{
        PermissionInput: &shared.PermissionInput{
            AdditionalRoles: []string{
                "odio",
                "commodi",
                "porro",
            },
            AuthKey: sdk.String("aliquid"),
            Deleted: sdk.Bool(false),
            Domain: sdk.String("mollitia"),
            EmailAddress: sdk.String("quidem"),
            Etag: sdk.String("explicabo"),
            ExpirationDate: types.MustTimeFromString("2022-02-21T02:10:01.888Z"),
            ID: sdk.String("29dfc94d-6fec-4d79-9390-066a6d2d0003"),
            Kind: sdk.String("ullam"),
            Name: sdk.String("Thelma Dickens"),
            PendingOwner: sdk.Bool(false),
            PhotoLink: sdk.String("recusandae"),
            Role: sdk.String("cumque"),
            SelfLink: sdk.String("doloremque"),
            Type: sdk.String("totam"),
            Value: sdk.String("iure"),
            View: sdk.String("maiores"),
            WithLink: sdk.Bool(false),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EmailMessage: sdk.String("est"),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("fugit"),
        FileID: "veritatis",
        Key: sdk.String("necessitatibus"),
        MoveToNewOwnersRoot: sdk.Bool(false),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        SendNotificationEmails: sdk.Bool(false),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("ipsam"),
    }, operations.DrivePermissionsInsertSecurity{
        Option1: &operations.DrivePermissionsInsertSecurityOption1{
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
        Fields: sdk.String("consequuntur"),
        FileID: "cumque",
        IncludePermissionsForView: sdk.String("quidem"),
        Key: sdk.String("non"),
        MaxResults: sdk.Int64(109569),
        OauthToken: sdk.String("sunt"),
        PageToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("autem"),
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

## DrivePermissionsPatch

Updates a permission using patch semantics.

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
    res, err := s.Permissions.DrivePermissionsPatch(ctx, operations.DrivePermissionsPatchRequest{
        PermissionInput: &shared.PermissionInput{
            AdditionalRoles: []string{
                "libero",
                "molestias",
            },
            AuthKey: sdk.String("necessitatibus"),
            Deleted: sdk.Bool(false),
            Domain: sdk.String("ipsum"),
            EmailAddress: sdk.String("impedit"),
            Etag: sdk.String("quos"),
            ExpirationDate: types.MustTimeFromString("2020-11-05T22:49:54.160Z"),
            ID: sdk.String("03408d6d-364f-4fd4-9590-6d1263d48e93"),
            Kind: sdk.String("corporis"),
            Name: sdk.String("Todd Schowalter"),
            PendingOwner: sdk.Bool(false),
            PhotoLink: sdk.String("quos"),
            Role: sdk.String("dicta"),
            SelfLink: sdk.String("sapiente"),
            Type: sdk.String("ipsum"),
            Value: sdk.String("consequatur"),
            View: sdk.String("soluta"),
            WithLink: sdk.Bool(false),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("necessitatibus"),
        FileID: "sequi",
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("labore"),
        PermissionID: "adipisci",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        RemoveExpiration: sdk.Bool(false),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TransferOwnership: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("aperiam"),
    }, operations.DrivePermissionsPatchSecurity{
        Option1: &operations.DrivePermissionsPatchSecurityOption1{
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

## DrivePermissionsUpdate

Updates a permission.

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
            AdditionalRoles: []string{
                "illum",
            },
            AuthKey: sdk.String("iusto"),
            Deleted: sdk.Bool(false),
            Domain: sdk.String("magni"),
            EmailAddress: sdk.String("beatae"),
            Etag: sdk.String("aliquid"),
            ExpirationDate: types.MustTimeFromString("2022-07-19T13:59:00.061Z"),
            ID: sdk.String("65066418-70d9-4d21-b9ad-030c4ecc11a0"),
            Kind: sdk.String("quos"),
            Name: sdk.String("Willie Glover"),
            PendingOwner: sdk.Bool(false),
            PhotoLink: sdk.String("voluptatem"),
            Role: sdk.String("suscipit"),
            SelfLink: sdk.String("laudantium"),
            Type: sdk.String("facilis"),
            Value: sdk.String("laudantium"),
            View: sdk.String("ullam"),
            WithLink: sdk.Bool(false),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("aut"),
        FileID: "quia",
        Key: sdk.String("officia"),
        OauthToken: sdk.String("quaerat"),
        PermissionID: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        RemoveExpiration: sdk.Bool(false),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TransferOwnership: sdk.Bool(false),
        UseDomainAdminAccess: sdk.Bool(false),
        UserIP: sdk.String("iusto"),
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
