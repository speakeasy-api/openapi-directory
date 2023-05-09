# Uploads

### Available Operations

* [UploadsCreate](#uploadscreate) - Upload a new image

## UploadsCreate

This POST-Method uploads a new file on the server.

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
    res, err := s.Uploads.UploadsCreate(ctx, operations.UploadsCreateRequestBody{
        File: operations.UploadsCreateRequestBodyFile{
            Content: []byte("dolor"),
            File: "natus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileResponse != nil {
        // handle response
    }
}
```
