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
    res, err := s.Default.GetPublicHistory(ctx, operations.GetPublicHistoryRequest{
        From: sdk.String("corrupti"),
        Q: sdk.String("provident"),
        To: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPublicHistory200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->