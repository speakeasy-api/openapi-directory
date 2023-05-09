# Scans

### Available Operations

* [GetAPIV1Scans](#getapiv1scans) - Retrieves all scans
* [GetAPIV1ScansID](#getapiv1scansid) - Retrieves a project scan result
* [GetAPIV1ScansIDFilesFileID](#getapiv1scansidfilesfileid) - Retrieves a file object, containing information about dependencies in the file

## GetAPIV1Scans

Retrieves all scans

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
    res, err := s.Scans.GetAPIV1Scans(ctx, operations.GetAPIV1ScansRequest{
        Name: sdk.String("Dallas Kassulke"),
        PerPage: sdk.String("suscipit"),
    }, operations.GetAPIV1ScansSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV1ScansID

Retrieves a project scan result

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
    res, err := s.Scans.GetAPIV1ScansID(ctx, operations.GetAPIV1ScansIDRequest{
        ID: "74e0f467-cc87-496e-9151-a05dfc2ddf7c",
    }, operations.GetAPIV1ScansIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV1ScansIDFilesFileID

Retrieves a file object, containing information about dependencies in the file

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
    res, err := s.Scans.GetAPIV1ScansIDFilesFileID(ctx, operations.GetAPIV1ScansIDFilesFileIDRequest{
        FileID: "quod",
        ID: "78ca1ba9-28fc-4816-b42c-b73920592939",
        PerPage: sdk.String("laboriosam"),
    }, operations.GetAPIV1ScansIDFilesFileIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
