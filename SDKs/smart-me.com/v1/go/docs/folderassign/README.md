# FolderAssign

### Available Operations

* [FolderAssignPost](#folderassignpost) - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

## FolderAssignPost

Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

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
    res, err := s.FolderAssign.FolderAssignPost(ctx, operations.FolderAssignPostRequest{
        Source: "molestias",
        Target: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
