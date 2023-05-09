# PhotoController

### Available Operations

* [PhotoControllerGetPhotoDownload](#photocontrollergetphotodownload) - Downloads the photo of a property given the photo ID.

## PhotoControllerGetPhotoDownload

Downloads the photo of a property given the photo ID.

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
    res, err := s.PhotoController.PhotoControllerGetPhotoDownload(ctx, operations.PhotoControllerGetPhotoDownloadRequest{
        Height: sdk.Int(449950),
        PhotoID: "corporis",
        ShortName: "iste",
        Token: "iure",
        Width: sdk.Int(902349),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```
