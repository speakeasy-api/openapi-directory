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
            AccessToken: "tempore",
            Alt: "proto",
            Callback: "quia",
            Fields: "ipsam",
            Key: "qui",
            OauthToken: "voluptates",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "quia",
            UploadProtocol: "id",
        },
        Request: &shared.ComputeFlightEmissionsRequest{
            Flights: []shared.Flight{
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 3003735809913017506,
                        Month: 4869670681117448416,
                        Year: 830527645879017983,
                    },
                    Destination: "dolores",
                    FlightNumber: 7557886016446646208,
                    OperatingCarrierCode: "laboriosam",
                    Origin: "quibusdam",
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