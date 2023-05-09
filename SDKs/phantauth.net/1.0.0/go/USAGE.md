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
    res, err := s.Client.GetClientClientID(ctx, operations.GetClientClientIDRequest{
        ClientID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClientClientID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->