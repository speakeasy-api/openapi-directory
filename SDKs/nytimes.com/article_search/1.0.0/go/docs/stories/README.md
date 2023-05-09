# Stories

### Available Operations

* [GetArticlesearchJSON](#getarticlesearchjson) - Article Search

## GetArticlesearchJSON

Article Search requests use the following URI structure:


### Example Usage

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
        BeginDate: sdk.String("vel"),
        EndDate: sdk.String("error"),
        FacetField: sdk.String("deserunt"),
        FacetFilter: sdk.Bool(false),
        Fl: sdk.String("suscipit"),
        Fq: sdk.String("iure"),
        Hl: sdk.Bool(false),
        Page: sdk.Int64(297534),
        Q: sdk.String("debitis"),
        Sort: operations.GetArticlesearchJSONSortEnumNewest.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArticlesearchJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
