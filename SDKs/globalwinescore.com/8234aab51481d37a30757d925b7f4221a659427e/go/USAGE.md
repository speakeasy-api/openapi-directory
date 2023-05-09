<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            TokenAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GlobalWineScore.GetGlobalwinescoresLatest(ctx, operations.GetGlobalwinescoresLatestRequest{
        Authorization: sdk.String("corrupti"),
        Color: operations.GetGlobalwinescoresLatestColorEnumWhite.ToPointer(),
        IsPrimeurs: sdk.Bool(false),
        Limit: sdk.Int64(715190),
        Lwin: sdk.String("quibusdam"),
        Lwin11: sdk.String("unde"),
        Offset: sdk.Int64(857946),
        Ordering: operations.GetGlobalwinescoresLatestOrderingEnumScore.ToPointer(),
        Vintage: sdk.String("illum"),
        WineID: []int64{
            623564,
            645894,
        },
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