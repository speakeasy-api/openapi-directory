# Children

### Available Operations

* [DriveChildrenDelete](#drivechildrendelete) - Removes a child from a folder.
* [DriveChildrenGet](#drivechildrenget) - Gets a specific child reference.
* [DriveChildrenInsert](#drivechildreninsert) - Inserts a file into a folder.
* [DriveChildrenList](#drivechildrenlist) - Lists a folder's children.

## DriveChildrenDelete

Removes a child from a folder.

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
    res, err := s.Children.DriveChildrenDelete(ctx, operations.DriveChildrenDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        ChildID: "sint",
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("veritatis"),
        FolderID: "itaque",
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UserIP: sdk.String("est"),
    }, operations.DriveChildrenDeleteSecurity{
        Option1: &operations.DriveChildrenDeleteSecurityOption1{
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

## DriveChildrenGet

Gets a specific child reference.

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
    res, err := s.Children.DriveChildrenGet(ctx, operations.DriveChildrenGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        ChildID: "quibusdam",
        Fields: sdk.String("explicabo"),
        FolderID: "deserunt",
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UserIP: sdk.String("modi"),
    }, operations.DriveChildrenGetSecurity{
        Option1: &operations.DriveChildrenGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChildReference != nil {
        // handle response
    }
}
```

## DriveChildrenInsert

Inserts a file into a folder.

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
    res, err := s.Children.DriveChildrenInsert(ctx, operations.DriveChildrenInsertRequest{
        ChildReference: &shared.ChildReference{
            ChildLink: sdk.String("qui"),
            ID: sdk.String("69802d50-2a94-4bb4-b63c-969e9a3efa77"),
            Kind: sdk.String("illum"),
            SelfLink: sdk.String("maiores"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EnforceSingleParent: sdk.Bool(false),
        Fields: sdk.String("rerum"),
        FolderID: "dicta",
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        UserIP: sdk.String("ea"),
    }, operations.DriveChildrenInsertSecurity{
        Option1: &operations.DriveChildrenInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChildReference != nil {
        // handle response
    }
}
```

## DriveChildrenList

Lists a folder's children.

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
    res, err := s.Children.DriveChildrenList(ctx, operations.DriveChildrenListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("aliquid"),
        FolderID: "laborum",
        Key: sdk.String("accusamus"),
        MaxResults: sdk.Int64(249796),
        OauthToken: sdk.String("occaecati"),
        OrderBy: sdk.String("enim"),
        PageToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        Q: sdk.String("delectus"),
        QuotaUser: sdk.String("quidem"),
        UserIP: sdk.String("provident"),
    }, operations.DriveChildrenListSecurity{
        Option1: &operations.DriveChildrenListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChildList != nil {
        // handle response
    }
}
```
