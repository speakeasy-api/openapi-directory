# Folder

### Available Operations

* [FolderGet](#folderget) - Gets the Values for a folder or a meter

## FolderGet

Gets the Values for a folder or a meter

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
    res, err := s.Folder.FolderGet(ctx, operations.FolderGetRequest{
        ID: "53f870b3-26b5-4a73-829c-db1a8422bb67",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FolderData != nil {
        // handle response
    }
}
```
