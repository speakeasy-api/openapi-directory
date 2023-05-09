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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groundhogs.Groundhog(ctx, operations.GroundhogRequest{
        Slug: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groundhog200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->