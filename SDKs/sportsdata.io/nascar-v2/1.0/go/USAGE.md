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
            APIKeyHeader: &shared.SchemeAPIKeyHeader{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.DriverDetailsRequest{
        PathParams: operations.DriverDetailsPathParams{
            Driverid: "corrupti",
            Format: "json",
        },
    }

    ctx := context.Background()
    res, err := s.DriverDetails(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Driver != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->