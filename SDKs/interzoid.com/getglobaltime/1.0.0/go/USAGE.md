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
    res, err := s.CurrentGlobalTime.Getglobaltime(ctx, operations.GetglobaltimeRequest{
        License: "corrupti",
        Locale: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getglobaltime200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->