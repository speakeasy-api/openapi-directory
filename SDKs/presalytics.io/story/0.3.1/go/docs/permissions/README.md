# Permissions

## Overview

Permissions and Authorization

### Available Operations

* [StoryIDCollaboratorsUseridPermissiontypeGet](#storyidcollaboratorsuseridpermissiontypeget) - Permissions: Story Authorization for a User
* [StoryPermissionTypesGet](#storypermissiontypesget) - Permissions: List Permission Types

## StoryIDCollaboratorsUseridPermissiontypeGet

Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden

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
    res, err := s.Permissions.StoryIDCollaboratorsUseridPermissiontypeGet(ctx, operations.StoryIDCollaboratorsUseridPermissiontypeGetRequest{
        ID: "6ae395ef-b9ba-488f-ba66-997074ba4469",
        Permissiontype: "nobis",
        StoryCollaboratorUserid: "6e214195-9890-4afa-963e-2516fe4c8b71",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StoryPermissionTypesGet

Returns a list of possible user permission types

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Permissions.StoryPermissionTypesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionTypes != nil {
        // handle response
    }
}
```
