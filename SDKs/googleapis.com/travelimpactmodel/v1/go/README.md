# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/travelimpactmodel/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Flights](docs/flights/README.md)

* [TravelimpactmodelFlightsComputeFlightEmissions](docs/flights/README.md#travelimpactmodelflightscomputeflightemissions) - Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
