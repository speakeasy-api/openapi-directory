<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.TravelimpactmodelFlightsComputeFlightEmissionsRequest{
        QueryParams: operations.TravelimpactmodelFlightsComputeFlightEmissionsQueryParams{
            DollarXgafv: "1",
            AccessToken: "amet",
            Alt: "proto",
            Callback: "velit",
            Fields: "id",
            Key: "quos",
            OauthToken: "sit",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "autem",
            UploadProtocol: "maxime",
        },
        Request: &shared.ComputeFlightEmissionsRequest{
            Flights: []shared.Flight{
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 3414330612766374518,
                        Month: 7016130896292550698,
                        Year: 8639846375246871580,
                    },
                    Destination: "et",
                    FlightNumber: 6689465552050660190,
                    OperatingCarrierCode: "quis",
                    Origin: "dolor",
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 4465709863325755882,
                        Month: 150416842709719260,
                        Year: 7716596964253133653,
                    },
                    Destination: "nihil",
                    FlightNumber: 8732707823561012094,
                    OperatingCarrierCode: "laborum",
                    Origin: "error",
                },
            },
        },
    }
    
    res, err := s.Flights.TravelimpactmodelFlightsComputeFlightEmissions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeFlightEmissionsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->