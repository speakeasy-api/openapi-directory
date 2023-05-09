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
    res, err := s.CountryNameStandardization.Getcountrystandard(ctx, operations.GetcountrystandardRequest{
        Country: "Malta",
        License: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcountrystandard200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->