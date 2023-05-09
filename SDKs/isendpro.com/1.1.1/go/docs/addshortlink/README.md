# AddShortlink

### Available Operations

* [AddShortlink](#addshortlink) - add a shortlink

## AddShortlink

add a shortlink

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AddShortlink.AddShortlink(ctx, shared.ShortlinkRequest{
        Keyid: "distinctio",
        Shortlink: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShortlinkResponse != nil {
        // handle response
    }
}
```
