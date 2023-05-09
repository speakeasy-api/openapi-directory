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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingAvailability(ctx, operations.BookingAvailabilityRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingAvailabilityRequestBody{
            AgeBands: []BookingAvailabilityRequestBodyAgeBands{
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: sdk.Int64(592845),
                    Count: sdk.Int64(715190),
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: sdk.Int64(844266),
                    Count: sdk.Int64(602763),
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: sdk.Int64(857946),
                    Count: sdk.Int64(544883),
                },
            },
            CurrencyCode: sdk.String("illum"),
            Month: sdk.String("vel"),
            ProductCode: sdk.String("error"),
            Year: sdk.String("deserunt"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingAvailability200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->