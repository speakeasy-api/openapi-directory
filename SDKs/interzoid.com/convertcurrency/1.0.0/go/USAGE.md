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
    res, err := s.LiveCurrencyRateConversion.Convertcurrency(ctx, operations.ConvertcurrencyRequest{
        Amount: "corrupti",
        From: "provident",
        License: "distinctio",
        To: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Convertcurrency200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->