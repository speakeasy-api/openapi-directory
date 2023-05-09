# Images

### Available Operations

* [GetAllImageUrls](#getallimageurls) - Retrieve all library item images

## GetAllImageUrls

Retrieves all library items images used by the organization, sorted by updated date

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
    res, err := s.Images.GetAllImageUrls(ctx, operations.GetAllImageUrlsRequest{
        OrganizationUUID: "39d08086-a184-4039-8c26-071f93f5f064",
    }, operations.GetAllImageUrlsSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LibraryImagesResponse != nil {
        // handle response
    }
}
```
