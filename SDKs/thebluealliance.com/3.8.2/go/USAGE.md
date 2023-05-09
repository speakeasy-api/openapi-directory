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
    res, err := s.Tba.GetStatus(ctx, operations.GetStatusRequest{
        IfNoneMatch: sdk.String("corrupti"),
    }, operations.GetStatusSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->