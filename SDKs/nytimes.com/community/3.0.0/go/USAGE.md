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
        Security: operations.GETUserContentByDateJSONSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GETUserContentByDateJSONQueryParams{
            Date: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.GETUserContentByDateJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GETUserContentByDateJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->