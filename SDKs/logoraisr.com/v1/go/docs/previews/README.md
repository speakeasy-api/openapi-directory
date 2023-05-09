# Previews

### Available Operations

* [PreviewsRead](#previewsread) - Get preview image of uploaded file

## PreviewsRead

This GET-Method returns the URL where the preview image of uploaded file can downloaded from.

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Previews.PreviewsRead(ctx, operations.PreviewsReadRequest{
        FileID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewResponse != nil {
        // handle response
    }
}
```
