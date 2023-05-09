# Notes

### Available Operations

* [GetWorkspaceSlugMembersMemberSlugNotes](#getworkspaceslugmembersmemberslugnotes) - Get the member's notes
* [PostWorkspaceSlugMembersMemberSlugNotes](#postworkspaceslugmembersmemberslugnotes) - Create a note
* [PutWorkspaceSlugMembersMemberSlugNotesID](#putworkspaceslugmembersmemberslugnotesid) - Update a note

## GetWorkspaceSlugMembersMemberSlugNotes

Get the member's notes

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
    res, err := s.Notes.GetWorkspaceSlugMembersMemberSlugNotes(ctx, operations.GetWorkspaceSlugMembersMemberSlugNotesRequest{
        MemberSlug: "provident",
        Page: sdk.String("nobis"),
        WorkspaceSlug: "libero",
    }, operations.GetWorkspaceSlugMembersMemberSlugNotesSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostWorkspaceSlugMembersMemberSlugNotes

Create a note

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
    res, err := s.Notes.PostWorkspaceSlugMembersMemberSlugNotes(ctx, operations.PostWorkspaceSlugMembersMemberSlugNotesRequest{
        MemberSlug: "delectus",
        Note: &shared.Note{
            Body: "quaerat",
        },
        WorkspaceSlug: "quos",
    }, operations.PostWorkspaceSlugMembersMemberSlugNotesSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutWorkspaceSlugMembersMemberSlugNotesID

Update a note

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
    res, err := s.Notes.PutWorkspaceSlugMembersMemberSlugNotesID(ctx, operations.PutWorkspaceSlugMembersMemberSlugNotesIDRequest{
        ID: "633323f9-b77f-43a4-9006-74ebf69280d1",
        MemberSlug: "soluta",
        Note: &shared.Note{
            Body: "dolorum",
        },
        WorkspaceSlug: "iusto",
    }, operations.PutWorkspaceSlugMembersMemberSlugNotesIDSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
