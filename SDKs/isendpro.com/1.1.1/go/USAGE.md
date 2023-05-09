<!-- Start SDK Example Usage -->
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
        Keyid: "corrupti",
        Shortlink: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShortlinkResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->