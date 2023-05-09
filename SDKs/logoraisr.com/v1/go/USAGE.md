<!-- Start SDK Example Usage -->
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
        FileID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->