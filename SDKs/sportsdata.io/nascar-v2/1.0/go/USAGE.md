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
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.DriverDetails(ctx, operations.DriverDetailsRequest{
        Driverid: "corrupti",
        Format: operations.DriverDetailsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Driver != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->