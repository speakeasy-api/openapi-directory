# File

### Available Operations

* [GetFile](#getfile) - Get File from Project.  Works for Regular and Remote Files
* [GetFileTags](#getfiletags) - List Tags from Workgroup and Project.
* [GetFiles](#getfiles) - List Files from Project.  Works for Regular and Remote Files
* [UploadFile](#uploadfile) - Upload File to Project.  A multipart/form-data request with a name "file"

## GetFile

Get File from Project.  Works for Regular and Remote Files

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
    res, err := s.File.GetFile(ctx, operations.GetFileRequest{
        FileID: "quia",
        ProjectID: "quis",
        WorkgroupID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFileTags

List Tags from Workgroup and Project.

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
    res, err := s.File.GetFileTags(ctx, operations.GetFileTagsRequest{
        ProjectID: "laborum",
        WorkgroupID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFiles

List Files from Project.  Works for Regular and Remote Files

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
    res, err := s.File.GetFiles(ctx, operations.GetFilesRequest{
        ProjectID: "enim",
        WorkgroupID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UploadFile

Upload File to Project.  A multipart/form-data request with a name "file"

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
    res, err := s.File.UploadFile(ctx, operations.UploadFileRequest{
        RequestBody: &operations.UploadFileRequestBody{
            Content: []byte("quo"),
            RequestBody: "sequi",
        },
        ProjectID: "tenetur",
        WorkgroupID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
