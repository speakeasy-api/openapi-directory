<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetUserContentByDateJSONRequest{
        Security: operations.GetUserContentByDateJSONSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetUserContentByDateJSONQueryParams{
            Date: "totam",
        },
    }
    
    res, err := s.GetUserContentByDateJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GETUserContentByDateJSON200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->