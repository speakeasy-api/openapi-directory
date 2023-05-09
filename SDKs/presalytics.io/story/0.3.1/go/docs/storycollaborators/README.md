# StoryCollaborators

## Overview

Story Collaborators

### Available Operations

* [StoryIDCollaboratorsGet](#storyidcollaboratorsget) - Story Collaborators: List
* [StoryIDCollaboratorsInactivePost](#storyidcollaboratorsinactivepost) - Story Collaborators: Edit Inactive User Permission
* [StoryIDCollaboratorsPost](#storyidcollaboratorspost) - Story Collaborators: Add New User
* [StoryIDCollaboratorsUseridDelete](#storyidcollaboratorsuseriddelete) - Story Collaborators: Remove User
* [StoryIDCollaboratorsUseridGet](#storyidcollaboratorsuseridget) - Story Collaborators: Access Permissions
* [StoryIDCollaboratorsUseridPut](#storyidcollaboratorsuseridput) - Story Collaborators: Edit Access Rights

## StoryIDCollaboratorsGet

Gets a list users that can read or edit this story

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
    res, err := s.StoryCollaborators.StoryIDCollaboratorsGet(ctx, operations.StoryIDCollaboratorsGetRequest{
        ID: "00221b33-5d89-4acb-becf-da8d0c549ef0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoryCollaborators != nil {
        // handle response
    }
}
```

## StoryIDCollaboratorsInactivePost

Edit story permissions for inactive users.  Requires admin rights.

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
    res, err := s.StoryCollaborators.StoryIDCollaboratorsInactivePost(ctx, operations.StoryIDCollaboratorsInactivePostRequest{
        ID: "3004978a-61fa-41cf-a068-8f77c1ffc71d",
        ModifyInactiveCollaborator: shared.ModifyInactiveCollaborator{
            Action: sdk.String("maxime"),
            LeadID: sdk.Int(681578),
            UserID: sdk.String("163f2a3c-80a9-47ff-b34c-ddf857a9e618"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoryCollaborator != nil {
        // handle response
    }
}
```

## StoryIDCollaboratorsPost

Add a colloborator to this story

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
    res, err := s.StoryCollaborators.StoryIDCollaboratorsPost(ctx, operations.StoryIDCollaboratorsPostRequest{
        AddNewCollaboratorRequest: shared.AddNewCollaboratorRequest{
            CollaboratorType: sdk.String("odio"),
            UserEmail: sdk.String("commodi"),
            UserID: sdk.String("c6ab21d2-9dfc-494d-afec-d799390066a6"),
        },
        ID: "d2d00035-5338-4cec-886f-a21e9152cb31",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoryCollaborator != nil {
        // handle response
    }
}
```

## StoryIDCollaboratorsUseridDelete

Remove a collaborator from this story

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
    res, err := s.StoryCollaborators.StoryIDCollaboratorsUseridDelete(ctx, operations.StoryIDCollaboratorsUseridDeleteRequest{
        ID: "19167b8e-3c8d-4b03-808d-6d364ffd4559",
        StoryCollaboratorUserid: "06d1263d-48e9-435c-ac9e-81f30be3e432",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StoryIDCollaboratorsUseridGet

Data to help you understand the access rights of a particular collaborator on this story

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
    res, err := s.StoryCollaborators.StoryIDCollaboratorsUseridGet(ctx, operations.StoryIDCollaboratorsUseridGetRequest{
        ID: "02d72165-7650-4664-9870-d9d21f9ad030",
        StoryCollaboratorUserid: "c4ecc11a-0836-4429-868b-8502a55e7f73",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoryCollaborator != nil {
        // handle response
    }
}
```

## StoryIDCollaboratorsUseridPut

Modify a user's access right to this story (e.g., grant edit permissions)

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
    res, err := s.StoryCollaborators.StoryIDCollaboratorsUseridPut(ctx, operations.StoryIDCollaboratorsUseridPutRequest{
        ID: "bc845e32-0a31-49f4-badf-947c9a867bc4",
        StoryCollaborator: shared.StoryCollaborator{
            Active: sdk.Bool(false),
            CreatedAt: types.MustTimeFromString("2022-09-13T17:26:24.471Z"),
            CreatedBy: sdk.String("26665816-ddca-48ef-91fc-b4c593ec12cd"),
            Email: sdk.String("Maiya87@yahoo.com"),
            ID: sdk.String("c7afedbd-80df-4448-a47f-9390c5888098"),
            LeadID: sdk.Int(218413),
            Name: sdk.String("Blake Purdy"),
            PermissionType: &shared.PermissionType{
                CanAddCollaborators: sdk.Bool(false),
                CanDelete: sdk.Bool(false),
                CanEdit: sdk.Bool(false),
                CanView: sdk.Bool(false),
                CreatedAt: types.MustTimeFromString("2020-02-19T05:19:30.502Z"),
                CreatedBy: sdk.String("3ffdd9f7-f079-4af4-9357-24cdb0f4d281"),
                ID: sdk.String("187d5684-4ede-4d85-a906-5e628bdfc203"),
                Name: sdk.String("Alison Hodkiewicz"),
                UpdatedAt: types.MustTimeFromString("2022-05-24T10:46:29.092Z"),
                UpdatedBy: sdk.String("923b7e13-584f-47ae-92c6-891f82ce1157"),
            },
            PermissionTypeID: sdk.String("17230537-7dcf-4a89-9f97-5e356686092e"),
            StoryID: sdk.String("9c3ddc5f-111d-4ea1-826d-541a4d190feb"),
            UpdatedAt: types.MustTimeFromString("2022-11-20T20:17:47.531Z"),
            UpdatedBy: sdk.String("780bccc0-dbbd-4db4-8470-8fb4e391e6bc"),
            UserID: sdk.String("158c4c4e-5459-49ea-b422-60e9b200ce78"),
        },
        StoryCollaboratorUserid: "a1bd8fb7-a0a1-416c-a723-d4097fa30e9a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoryCollaborator != nil {
        // handle response
    }
}
```
