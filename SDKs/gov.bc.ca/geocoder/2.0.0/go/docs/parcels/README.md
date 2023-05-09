# Parcels

### Available Operations

* [GetParcelsPidsSiteIDOutputFormat](#getparcelspidssiteidoutputformat) - Get a comma-separated string of all pids for a given site

## GetParcelsPidsSiteIDOutputFormat

Represents all parcel identifiers associated with an individual site

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
    res, err := s.Parcels.GetParcelsPidsSiteIDOutputFormat(ctx, operations.GetParcelsPidsSiteIDOutputFormatRequest{
        OutputFormat: operations.GetParcelsPidsSiteIDOutputFormatOutputFormatEnumJSON,
        SiteID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
