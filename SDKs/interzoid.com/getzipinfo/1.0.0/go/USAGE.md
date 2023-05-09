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
    res, err := s.DetailedZipCodeInformation.Getzipcodeinfo(ctx, operations.GetzipcodeinfoRequest{
        License: "corrupti",
        Zip: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getzipcodeinfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->