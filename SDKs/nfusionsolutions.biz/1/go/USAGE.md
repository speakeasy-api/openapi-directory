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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.CurrenciesHistoryGET(ctx, operations.CurrenciesHistoryGETRequest{
        End: types.MustTimeFromString("2021-10-25T05:21:43.948Z"),
        Format: operations.CurrenciesHistoryGETFormatEnumXML.ToPointer(),
        Interval: sdk.String("quibusdam"),
        Pairs: "unde",
        Start: types.MustTimeFromString("2021-05-14T08:28:11.899Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->