# UserToFolderAssign

### Available Operations

* [UserToFolderAssignDelete](#usertofolderassigndelete) - Deletes a user to folder assignement
* [UserToFolderAssignPost](#usertofolderassignpost) - Assign a user to a folder

## UserToFolderAssignDelete

Deletes a user to folder assignement

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
    res, err := s.UserToFolderAssign.UserToFolderAssignDelete(ctx, operations.UserToFolderAssignDeleteRequest{
        Source: "molestiae",
        Target: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UserToFolderAssignPost

Assign a user to a folder

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
    res, err := s.UserToFolderAssign.UserToFolderAssignPost(ctx, operations.UserToFolderAssignPostRequest{
        OldFolder: "cupiditate",
        Source: "fugit",
        Target: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
