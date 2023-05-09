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
    res, err := s.PageLoadPerformanceTime.Globalpageload(ctx, operations.GlobalpageloadRequest{
        License: "corrupti",
        Origin: "provident",
        URL: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Globalpageload200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->