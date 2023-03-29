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
    s := sdk.New()

    req := operations.TravelimpactmodelFlightsComputeFlightEmissionsRequest{
        QueryParams: operations.TravelimpactmodelFlightsComputeFlightEmissionsQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.ComputeFlightEmissionsRequest{
            Flights: []shared.Flight{
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 384382,
                        Month: 437587,
                        Year: 297534,
                    },
                    Destination: "saepe",
                    FlightNumber: 56713,
                    OperatingCarrierCode: "sapiente",
                    Origin: "enim",
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 383441,
                        Month: 477665,
                        Year: 791725,
                    },
                    Destination: "vel",
                    FlightNumber: 528895,
                    OperatingCarrierCode: "deleniti",
                    Origin: "similique",
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 392785,
                        Month: 925597,
                        Year: 836079,
                    },
                    Destination: "quasi",
                    FlightNumber: 337396,
                    OperatingCarrierCode: "dicta",
                    Origin: "est",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Flights.TravelimpactmodelFlightsComputeFlightEmissions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeFlightEmissionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->