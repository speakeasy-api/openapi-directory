# Classifications

### Available Operations

* [GetClassifications](#getclassifications) - /classifications/naics_index_entries

## GetClassifications

### Get a list of [classifications](https://www.heraldapi.com/docs/classifications) to classify an applicant

Returns an array of classifications, specific to the industries defined by NAICS. Can query by classification description or NAICS code to refine the list.

Read more on [getting classifications](https://www.heraldapi.com/docs/getting-classifications).

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
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Classifications.GetClassifications(ctx, operations.GetClassificationsRequest{
        Limit: sdk.Float64(6736.6),
        Naics2017: sdk.String("?naics_2017=611420"),
        Page: sdk.Float64(960.98),
        Search: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClassifications200ApplicationJSONObject != nil {
        // handle response
    }
}
```
