# Flights

### Available Operations

* [TravelimpactmodelFlightsComputeFlightEmissions](#travelimpactmodelflightscomputeflightemissions) - Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.

## TravelimpactmodelFlightsComputeFlightEmissions

Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Flights.TravelimpactmodelFlightsComputeFlightEmissions(ctx, operations.TravelimpactmodelFlightsComputeFlightEmissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ComputeFlightEmissionsRequest: &shared.ComputeFlightEmissionsRequest{
            Flights: []shared.Flight{
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: sdk.Int(832620),
                        Month: sdk.Int(957156),
                        Year: sdk.Int(778157),
                    },
                    Destination: sdk.String("odit"),
                    FlightNumber: sdk.Int(870013),
                    OperatingCarrierCode: sdk.String("at"),
                    Origin: sdk.String("maiores"),
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: sdk.Int(473608),
                        Month: sdk.Int(799159),
                        Year: sdk.Int(800911),
                    },
                    Destination: sdk.String("esse"),
                    FlightNumber: sdk.Int(520478),
                    OperatingCarrierCode: sdk.String("porro"),
                    Origin: sdk.String("dolorum"),
                },
            },
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeFlightEmissionsResponse != nil {
        // handle response
    }
}
```
