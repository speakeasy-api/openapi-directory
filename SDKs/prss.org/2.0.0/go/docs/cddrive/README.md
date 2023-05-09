# CDDrive

## Overview

ContentDepot Drive functionality for uploading and stating content files for use in other API operations.

### Available Operations

* [DeleteAPIV2CddriveFilesFileID](#deleteapiv2cddrivefilesfileid) - Delete a file.
* [DeleteAPIV2CddriveFoldersFolderID](#deleteapiv2cddrivefoldersfolderid) - UNDER DEVELOPMENT - Delete a folder.
* [GetAPIV2CddriveFilesFileID](#getapiv2cddrivefilesfileid) - Get file information.
* [GetAPIV2CddriveFilesFileIDContent](#getapiv2cddrivefilesfileidcontent) - UNDER DEVELOPMENT - Download a file.
* [GetAPIV2CddriveFoldersFolderID](#getapiv2cddrivefoldersfolderid) - UNDER DEVELOPMENT - Get folder information.
* [GetAPIV2CddriveFoldersFolderIDItems](#getapiv2cddrivefoldersfolderiditems) - Get the items in the folder.
* [PostAPIV2CddriveFilesContent](#postapiv2cddrivefilescontent) - Upload a file.
* [PostAPIV2CddriveFolders](#postapiv2cddrivefolders) - Create a folder.

## DeleteAPIV2CddriveFilesFileID

Delete a file from the customer's private CD Drive.

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
    res, err := s.CDDrive.DeleteAPIV2CddriveFilesFileID(ctx, operations.DeleteAPIV2CddriveFilesFileIDRequest{
        FileID: 847252,
    }, operations.DeleteAPIV2CddriveFilesFileIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAPIV2CddriveFoldersFolderID

Delete a file from the customer's private CD Drive.

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
    res, err := s.CDDrive.DeleteAPIV2CddriveFoldersFolderID(ctx, operations.DeleteAPIV2CddriveFoldersFolderIDRequest{
        FolderID: 423655,
        Recursive: sdk.Bool(false),
    }, operations.DeleteAPIV2CddriveFoldersFolderIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV2CddriveFilesFileID

Get the information about a file in the customer's private CD Drive.

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
    res, err := s.CDDrive.GetAPIV2CddriveFilesFileID(ctx, operations.GetAPIV2CddriveFilesFileIDRequest{
        FileID: 623564,
    }, operations.GetAPIV2CddriveFilesFileIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CDDriveFile != nil {
        // handle response
    }
}
```

## GetAPIV2CddriveFilesFileIDContent

Download a file from the customer's private CD Drive.

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
    res, err := s.CDDrive.GetAPIV2CddriveFilesFileIDContent(ctx, operations.GetAPIV2CddriveFilesFileIDContentRequest{
        Range: sdk.String("deserunt"),
        FileID: 384382,
    }, operations.GetAPIV2CddriveFilesFileIDContentSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2CddriveFilesFileIDContent200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## GetAPIV2CddriveFoldersFolderID

Get the information about a folder in the customer's private CD Drive.

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
    res, err := s.CDDrive.GetAPIV2CddriveFoldersFolderID(ctx, operations.GetAPIV2CddriveFoldersFolderIDRequest{
        FolderID: 437587,
    }, operations.GetAPIV2CddriveFoldersFolderIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CDDriveFolder != nil {
        // handle response
    }
}
```

## GetAPIV2CddriveFoldersFolderIDItems

Get the information about a folder in the customer's private CD Drive.

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
    res, err := s.CDDrive.GetAPIV2CddriveFoldersFolderIDItems(ctx, operations.GetAPIV2CddriveFoldersFolderIDItemsRequest{
        FolderID: 297534,
        Limit: sdk.Int(891773),
        Offset: sdk.Int(56713),
    }, operations.GetAPIV2CddriveFoldersFolderIDItemsSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2CddriveFoldersFolderIDItems200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAPIV2CddriveFilesContent

Upload a file to the customer's private CD Drive.

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
    res, err := s.CDDrive.PostAPIV2CddriveFilesContent(ctx, operations.PostAPIV2CddriveFilesContentRequest{
        ContentMd5: sdk.String("delectus"),
        RequestBody: &operations.PostAPIV2CddriveFilesContentRequestBody{
            File: &operations.PostAPIV2CddriveFilesContentRequestBodyFile{
                Content: []byte("tempora"),
                File: "suscipit",
            },
            Name: sdk.String("Alexandra Schulist"),
            ParentID: sdk.Int64(568045),
        },
    }, operations.PostAPIV2CddriveFilesContentSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CDDriveFile != nil {
        // handle response
    }
}
```

## PostAPIV2CddriveFolders

Create a new folder in the customer's private CD Drive.

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
    res, err := s.CDDrive.PostAPIV2CddriveFolders(ctx, operations.PostAPIV2CddriveFoldersRequestBody{
        Name: sdk.String("Mrs. Sophie Smith MD"),
        ParentID: sdk.Int64(20218),
    }, operations.PostAPIV2CddriveFoldersSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CDDriveFolder != nil {
        // handle response
    }
}
```
