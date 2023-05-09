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
    res, err := s.KeysAPI.KeysAPICurrent(ctx, operations.KeysAPICurrentRequest{
        Serial: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeysAPICurrent200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->