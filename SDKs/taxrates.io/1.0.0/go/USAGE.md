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
    res, err := s.V1Tax.TaxRatesByCountryCode(ctx, operations.TaxRatesByCountryCodeRequest{
        CountryCode: sdk.String("US"),
        Date: sdk.String("2020-09-02"),
        Domain: sdk.String("api.taxrates.io"),
        Filter: sdk.String("corrupti"),
        ProductCodes: sdk.String("C010"),
        Province: sdk.String("provident"),
        Zip: sdk.String("71642"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxRatesByCountryCode200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->