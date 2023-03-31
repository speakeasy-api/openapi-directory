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
    s := sdk.New()

    req := operations.GETUserContentByDateJSONRequest{
        Date: "corrupti",
    }

    ctx := context.Background()
    res, err := s.GETUserContentByDateJSON(ctx, req, operations.GETUserContentByDateJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETUserContentByDateJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->