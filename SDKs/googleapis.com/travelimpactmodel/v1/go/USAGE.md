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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.ComputeFlightEmissionsRequest{
            Flights: []shared.Flight{
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 7837839688282259259,
                        Month: 2518412263346885298,
                        Year: 5617773211005988520,
                    },
                    Destination: "et",
                    FlightNumber: 7144924247938981575,
                    OperatingCarrierCode: "dolorem",
                    Origin: "et",
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 7373105480197164748,
                        Month: 3287288577352441706,
                        Year: 3930927879439176946,
                    },
                    Destination: "totam",
                    FlightNumber: 2217592893536642650,
                    OperatingCarrierCode: "illum",
                    Origin: "debitis",
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: 3706853784096366226,
                        Month: 2627038740284806767,
                        Year: 6303220950515014660,
                    },
                    Destination: "id",
                    FlightNumber: 959367522974354090,
                    OperatingCarrierCode: "accusantium",
                    Origin: "totam",
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