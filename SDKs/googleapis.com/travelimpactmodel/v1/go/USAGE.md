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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.ComputeFlightEmissionsRequest{
            Flights: []shared.Flight{
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 384382,
                        Month: 437587,
                        Year: 297534,
                    },
                    Destination: "debitis",
                    FlightNumber: 56713,
                    OperatingCarrierCode: "delectus",
                    Origin: "tempora",
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 383441,
                        Month: 477665,
                        Year: 791725,
                    },
                    Destination: "placeat",
                    FlightNumber: 528895,
                    OperatingCarrierCode: "iusto",
                    Origin: "excepturi",
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 392785,
                        Month: 925597,
                        Year: 836079,
                    },
                    Destination: "ab",
                    FlightNumber: 337396,
                    OperatingCarrierCode: "veritatis",
                    Origin: "deserunt",
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