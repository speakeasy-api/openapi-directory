<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    req := operations.AreasCountriesRequest{
        Format: "json",
    }

    ctx := context.Background()
    res, err := s.AreasCountries(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Areas != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->