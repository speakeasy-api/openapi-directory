# Files

### Available Operations

* [GetFilesFileID](#getfilesfileid) - /files/{file_id}
* [PostFilesFileIDGetTemporaryLink](#postfilesfileidgettemporarylink) - /files/{file_id}/get_temporary_link

## GetFilesFileID

### Get details for a file.

Retrieve the metadata for an individual file.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Files.GetFilesFileID(ctx, operations.GetFilesFileIDRequest{
        FileID: "fe78f097-b007-44f1-9471-b5e6e13b99d4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFilesFileID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostFilesFileIDGetTemporaryLink

### Get a temporary link to stream the contents of a file

Generates and returns a temporary link to access the content of a file that expires in 15 minutes. The Content-Type of the link is determined automatically by the file's format.

<!-- theme: info -->

> #### The Link URL should not be displayed on your front-end
> Since these links are temporary, Herald encourages you to not display the URL on your front end.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Files.PostFilesFileIDGetTemporaryLink(ctx, operations.PostFilesFileIDGetTemporaryLinkRequest{
        FileID: "88e1e91e-450a-4d2a-bd44-269802d502a9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostFilesFileIDGetTemporaryLink200ApplicationJSONObject != nil {
        // handle response
    }
}
```
