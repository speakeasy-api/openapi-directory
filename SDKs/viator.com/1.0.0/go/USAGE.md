<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: &shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BookingAvailabilityRequest{
        Headers: operations.BookingAvailabilityHeaders{
            AcceptLanguage: "sit",
        },
        Request: &operations.BookingAvailabilityRequestBody{
            AgeBands: []BookingAvailabilityRequestBodyAgeBands{
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 6050128673802995827,
                    Count: 501233450539197794,
                },
            },
            CurrencyCode: "consequuntur",
            Month: "dolor",
            ProductCode: "expedita",
            Year: "voluptas",
        },
    }
    
    res, err := s.BookingServices.BookingAvailability(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingAvailability200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->