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
            AcceptLanguage: "voluptatibus",
        },
        Request: &operations.BookingAvailabilityRequestBody{
            AgeBands: []BookingAvailabilityRequestBodyAgeBands{
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 7735065507851103506,
                    Count: 2820244019788108692,
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 5482661834389127815,
                    Count: 7003446529512789045,
                },
            },
            CurrencyCode: "sunt",
            Month: "quas",
            ProductCode: "et",
            Year: "perspiciatis",
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