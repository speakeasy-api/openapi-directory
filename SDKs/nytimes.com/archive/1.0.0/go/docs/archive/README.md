# Archive

### Available Operations

* [GetYearMonthJSON](#getyearmonthjson) - Archive API

## GetYearMonthJSON

The Archive API provides lists of NYT articles by month going back to 1851.  Simply pass in the year and month you want and it returns a JSON object with all articles for that month.


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
    res, err := s.Archive.GetYearMonthJSON(ctx, operations.GetYearMonthJSONRequest{
        Month: 715190,
        Year: 844266,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetYearMonthJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
