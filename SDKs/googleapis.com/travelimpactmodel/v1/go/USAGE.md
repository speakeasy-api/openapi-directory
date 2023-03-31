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
        DollarXgafv: "2",
        ComputeFlightEmissionsRequest: &shared.ComputeFlightEmissionsRequest{
            Flights: []shared.Flight{
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 715190,
                        Month: 844266,
                        Year: 602763,
                    },
                    Destination: "nulla",
                    FlightNumber: 544883,
                    OperatingCarrierCode: "illum",
                    Origin: "vel",
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 623564,
                        Month: 645894,
                        Year: 384382,
                    },
                    Destination: "iure",
                    FlightNumber: 297534,
                    OperatingCarrierCode: "debitis",
                    Origin: "ipsa",
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 963663,
                        Month: 272656,
                        Year: 383441,
                    },
                    Destination: "molestiae",
                    FlightNumber: 791725,
                    OperatingCarrierCode: "placeat",
                    Origin: "voluptatum",
                },
            },
        },
        AccessToken: "iusto",
        Alt: "media",
        Callback: "nisi",
        Fields: "recusandae",
        Key: "temporibus",
        OauthToken: "ab",
        PrettyPrint: false,
        QuotaUser: "quis",
        UploadType: "veritatis",
        UploadProtocol: "deserunt",
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