# Stories

### Available Operations

* [GetSectionFormat](#getsectionformat) - Top Stories

## GetSectionFormat

The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.


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
    res, err := s.Stories.GetSectionFormat(ctx, operations.GetSectionFormatRequest{
        Callback: sdk.String("quibusdam"),
        Format: operations.GetSectionFormatFormatEnumJsonp,
        Section: operations.GetSectionFormatSectionEnumRealestate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSectionFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```
