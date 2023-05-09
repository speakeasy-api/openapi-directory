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
    res, err := s.EmailAddressInformation.Getemailinfo(ctx, operations.GetemailinfoRequest{
        Email: "Larue_Rau85@yahoo.com",
        License: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getemailinfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->