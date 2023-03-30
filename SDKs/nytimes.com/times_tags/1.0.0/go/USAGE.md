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
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetTimestagsRequest{
        QueryParams: operations.GetTimestagsQueryParams{
            Filter: "Org",
            Max: 592845,
            Query: "distinctio",
        },
    }

    ctx := context.Background()
    res, err := s.GetTimestags(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTimestags200ApplicationJSONArrays != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->