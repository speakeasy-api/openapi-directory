<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ComputeFlightEmissionsRequest: &shared.ComputeFlightEmissionsRequest{
            Flights: []shared.Flight{
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: sdk.Int(715190),
                        Month: sdk.Int(844266),
                        Year: sdk.Int(602763),
                    },
                    Destination: sdk.String("nulla"),
                    FlightNumber: sdk.Int(544883),
                    OperatingCarrierCode: sdk.String("illum"),
                    Origin: sdk.String("vel"),
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: sdk.Int(623564),
                        Month: sdk.Int(645894),
                        Year: sdk.Int(384382),
                    },
                    Destination: sdk.String("iure"),
                    FlightNumber: sdk.Int(297534),
                    OperatingCarrierCode: sdk.String("debitis"),
                    Origin: sdk.String("ipsa"),
                },
                shared.Flight{
                    DepartureDate: &shared.Date{
                        Day: sdk.Int(963663),
                        Month: sdk.Int(272656),
                        Year: sdk.Int(383441),
                    },
                    Destination: sdk.String("molestiae"),
                    FlightNumber: sdk.Int(791725),
                    OperatingCarrierCode: sdk.String("placeat"),
                    Origin: sdk.String("voluptatum"),
                },
            },
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeFlightEmissionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->