# Parents

### Available Operations

* [DriveParentsDelete](#driveparentsdelete) - Removes a parent from a file.
* [DriveParentsGet](#driveparentsget) - Gets a specific parent reference.
* [DriveParentsInsert](#driveparentsinsert) - Adds a parent folder for a file.
* [DriveParentsList](#driveparentslist) - Lists a file's parents.

## DriveParentsDelete

Removes a parent from a file.

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
    res, err := s.Parents.DriveParentsDelete(ctx, operations.DriveParentsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("praesentium"),
        FileID: "unde",
        Key: sdk.String("similique"),
        OauthToken: sdk.String("eligendi"),
        ParentID: "tempore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UserIP: sdk.String("debitis"),
    }, operations.DriveParentsDeleteSecurity{
        Option1: &operations.DriveParentsDeleteSecurityOption1{
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

## DriveParentsGet

Gets a specific parent reference.

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
    res, err := s.Parents.DriveParentsGet(ctx, operations.DriveParentsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("nobis"),
        FileID: "asperiores",
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("id"),
        ParentID: "atque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UserIP: sdk.String("sit"),
    }, operations.DriveParentsGetSecurity{
        Option1: &operations.DriveParentsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ParentReference != nil {
        // handle response
    }
}
```

## DriveParentsInsert

Adds a parent folder for a file.

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
    res, err := s.Parents.DriveParentsInsert(ctx, operations.DriveParentsInsertRequest{
        ParentReference: &shared.ParentReference{
            ID: sdk.String("c549ef03-0049-478a-a1fa-1cf20688f77c"),
            IsRoot: sdk.Bool(false),
            Kind: sdk.String("vitae"),
            ParentLink: sdk.String("sapiente"),
            SelfLink: sdk.String("reiciendis"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("quod"),
        FileID: "voluptate",
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UserIP: sdk.String("fuga"),
    }, operations.DriveParentsInsertSecurity{
        Option1: &operations.DriveParentsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ParentReference != nil {
        // handle response
    }
}
```

## DriveParentsList

Lists a file's parents.

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
    res, err := s.Parents.DriveParentsList(ctx, operations.DriveParentsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ab"),
        FileID: "ex",
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UserIP: sdk.String("animi"),
    }, operations.DriveParentsListSecurity{
        Option1: &operations.DriveParentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ParentList != nil {
        // handle response
    }
}
```
