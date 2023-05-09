# Downloads

## Overview

downloads


### Available Operations

* [DownloadFile](#downloadfile) - Download File

## DownloadFile

Get File

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Downloads.DownloadFile(ctx, operations.DownloadFileRequest{
        Dir: "ab",
        Download: sdk.String("quis"),
        Filename: "veritatis",
        Rotation: sdk.Int(648172),
        Subdir: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadFilePdfResponseBody != nil {
        // handle response
    }
}
```
