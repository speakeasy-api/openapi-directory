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
    res, err := s.Get(ctx, operations.GetRequest{
        Domain: "corrupti",
        Format: sdk.String("provident"),
        Key: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200TextHTMLString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->