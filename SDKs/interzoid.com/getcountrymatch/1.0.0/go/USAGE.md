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
    res, err := s.CountryMatchSimilarityKey.Getcountrymatch(ctx, operations.GetcountrymatchRequest{
        Country: "Malta",
        License: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcountrymatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->