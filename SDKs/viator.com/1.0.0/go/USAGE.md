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
            AcceptLanguage: "nesciunt",
        },
        Request: &operations.BookingAvailabilityRequestBody{
            AgeBands: []BookingAvailabilityRequestBodyAgeBands{
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 6695214688624416934,
                    Count: 6568604966124562721,
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: 7265257187948120886,
                    Count: 6050388318473623238,
                },
            },
            CurrencyCode: "sit",
            Month: "tempora",
            ProductCode: "minus",
            Year: "architecto",
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