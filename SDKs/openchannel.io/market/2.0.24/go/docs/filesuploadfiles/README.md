# FilesUploadFiles

### Available Operations

* [GetFiles](#getfiles) - Returns a paginated list of files
* [GetFilesByIDOrURL](#getfilesbyidorurl) - Get the details for a file.
* [GetFilesDownload](#getfilesdownload) - A signed URL for downloading a private file can be returned by providing the fileId.
* [PostFiles](#postfiles) - Uploads a file.
* [PostFilesURL](#postfilesurl) - Uploads a file from a URL

## GetFiles

Returns a paginated list of files

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FilesUploadFiles.GetFiles(ctx, operations.GetFilesRequest{
        Limit: sdk.Int64(83112),
        PageNumber: sdk.Int64(929297),
        Query: sdk.String("incidunt"),
        Sort: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFilesByIDOrURL

Get the details for a file.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FilesUploadFiles.GetFilesByIDOrURL(ctx, operations.GetFilesByIDOrURLRequest{
        FileIDOrURL: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFilesDownload

A signed URL for downloading a private file can be returned by providing the fileId.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FilesUploadFiles.GetFilesDownload(ctx, operations.GetFilesDownloadRequest{
        FileID: "est",
        ValidSeconds: sdk.Int64(842342),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostFiles

- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days. 
- This method is called on behalf of a developer.


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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FilesUploadFiles.PostFiles(ctx, operations.PostFilesRequest{
        RequestBody: operations.PostFilesRequestBody{
            File: operations.PostFilesRequestBodyFile{
                Content: []byte("explicabo"),
                File: "deserunt",
            },
        },
        Hash: sdk.String("distinctio"),
        IsPrivate: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostFilesURL

- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
- This method is called on behalf of a developer.


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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FilesUploadFiles.PostFilesURL(ctx, operations.PostFilesURLRequest{
        IsPrivate: sdk.Bool(false),
        URL: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
