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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Stories.GetArticlesearchJSON(ctx, operations.GetArticlesearchJSONRequest{
        BeginDate: sdk.String("corrupti"),
        EndDate: sdk.String("provident"),
        FacetField: sdk.String("distinctio"),
        FacetFilter: sdk.Bool(false),
        Fl: sdk.String("quibusdam"),
        Fq: sdk.String("unde"),
        Hl: sdk.Bool(false),
        Page: sdk.Int64(857946),
        Q: sdk.String("corrupti"),
        Sort: operations.GetArticlesearchJSONSortEnumOldest.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArticlesearchJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->