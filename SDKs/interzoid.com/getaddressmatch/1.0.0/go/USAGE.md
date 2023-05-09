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
    res, err := s.StreetAddressSimilarityKey.Getaddressmatch(ctx, operations.GetaddressmatchRequest{
        Address: "5786 Little Streets",
        License: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getaddressmatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->