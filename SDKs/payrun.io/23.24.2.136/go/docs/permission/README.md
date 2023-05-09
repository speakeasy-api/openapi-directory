# Permission

### Available Operations

* [DeletePermission](#deletepermission) - Deletes the permission object
* [DeletePermissionTag](#deletepermissiontag) - Delete Permission tag
* [GetAllPermissionTags](#getallpermissiontags) - Get all Permission tags
* [GetAllPermissionsWithTag](#getallpermissionswithtag) - Get links to tagged Permissions
* [GetPermission](#getpermission) - Gets the permission object
* [GetPermissions](#getpermissions) - Gets all permission objects
* [GetTagFromPermission](#gettagfrompermission) - Get Permission tag
* [GetTagsFromPermission](#gettagsfrompermission) - Get tags from Permission
* [GetUserPermissions](#getuserpermissions) - Gets the user permissions
* [GetUsersFromPermission](#getusersfrompermission) - Gets the users with the specified permission
* [PatchPermission](#patchpermission) - Patch permission object
* [PostPermission](#postpermission) - Post permisson object
* [PutPermission](#putpermission) - Puts permisson object
* [PutPermissionTag](#putpermissiontag) - Insert Permission tag

## DeletePermission

Deletes the permission object from the application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.DeletePermission(ctx, operations.DeletePermissionRequest{
        APIVersion: "rerum",
        Authorization: "ea",
        PermissionID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePermissionTag

Deletes a tag from the Permission

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.DeletePermissionTag(ctx, operations.DeletePermissionTagRequest{
        APIVersion: "dignissimos",
        Authorization: "repellat",
        PermissionID: "velit",
        TagID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllPermissionTags

Get all tags from all Permissions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.GetAllPermissionTags(ctx, operations.GetAllPermissionTagsRequest{
        APIVersion: "provident",
        Authorization: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetAllPermissionsWithTag

Gets the Permissions with the specified tag

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.GetAllPermissionsWithTag(ctx, operations.GetAllPermissionsWithTagRequest{
        APIVersion: "eligendi",
        Authorization: "dignissimos",
        TagID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPermission

Gets the permission object for application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.GetPermission(ctx, operations.GetPermissionRequest{
        APIVersion: "soluta",
        Authorization: "natus",
        PermissionID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Permission != nil {
        // handle response
    }
}
```

## GetPermissions

Gets all permission objects for application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.GetPermissions(ctx, operations.GetPermissionsRequest{
        APIVersion: "officia",
        Authorization: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetTagFromPermission

Gets a tag from the Permission

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.GetTagFromPermission(ctx, operations.GetTagFromPermissionRequest{
        APIVersion: "tenetur",
        Authorization: "aspernatur",
        PermissionID: "quo",
        TagID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagsFromPermission

Gets all tags from the Permission

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.GetTagsFromPermission(ctx, operations.GetTagsFromPermissionRequest{
        APIVersion: "illum",
        Authorization: "laborum",
        PermissionID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetUserPermissions

Gets the user permission instances

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.GetUserPermissions(ctx, operations.GetUserPermissionsRequest{
        APIVersion: "vero",
        Authorization: "qui",
        UserID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetUsersFromPermission

Gets the users with the specified permission

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.GetUsersFromPermission(ctx, operations.GetUsersFromPermissionRequest{
        APIVersion: "repellat",
        Authorization: "explicabo",
        PermissionID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchPermission

Patch the permission object at the specified resource location

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.PatchPermission(ctx, operations.PatchPermissionRequest{
        APIVersion: "exercitationem",
        Authorization: "nihil",
        PermissionID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Permission != nil {
        // handle response
    }
}
```

## PostPermission

Post the new permission object into the application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.PostPermission(ctx, operations.PostPermissionRequest{
        APIVersion: "ab",
        Authorization: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutPermission

Puts the permission object into the specified resource location

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.PutPermission(ctx, operations.PutPermissionRequest{
        APIVersion: "hic",
        Authorization: "deserunt",
        PermissionID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Permission != nil {
        // handle response
    }
}
```

## PutPermissionTag

Inserts a tag on the Permission

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permission.PutPermissionTag(ctx, operations.PutPermissionTagRequest{
        APIVersion: "non",
        Authorization: "distinctio",
        PermissionID: "in",
        TagID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
