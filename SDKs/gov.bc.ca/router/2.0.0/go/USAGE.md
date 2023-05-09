<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Directions.GetDirectionsOutputFormat(ctx, operations.GetDirectionsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetDirectionsOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2021-07-27T21:52:56.087Z"),
        Disable: sdk.String("quibusdam"),
        DistanceUnit: operations.GetDirectionsOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.GetDirectionsOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.GetDirectionsOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
        Points: "illum",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->