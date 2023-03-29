<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: &shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BookingAvailabilityRequest{
        Headers: operations.BookingAvailabilityHeaders{
            AcceptLanguage: "en-US",
        },
        Request: &operations.BookingAvailabilityRequestBody{
            AgeBands: []BookingAvailabilityRequestBodyAgeBands{
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 592845,
                    Count: 715190,
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 844266,
                    Count: 602763,
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 857946,
                    Count: 544883,
                },
            },
            CurrencyCode: "nulla",
            Month: "nihil",
            ProductCode: "fuga",
            Year: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.BookingServices.BookingAvailability(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingAvailability200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->