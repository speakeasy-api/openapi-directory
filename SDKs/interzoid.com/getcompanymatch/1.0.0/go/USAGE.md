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
    res, err := s.CompanyNameSimilarityKey.Getcompanymatch(ctx, operations.GetcompanymatchRequest{
        Company: "Medhurst - Rau",
        License: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcompanymatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->