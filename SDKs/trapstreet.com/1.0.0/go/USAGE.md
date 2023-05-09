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
    res, err := s.GetAddress(ctx, operations.GetAddressRequest{
        Address: "5786 Little Streets",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->