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
    
    req := operations.GetApodRequest{
        Security: operations.GetApodSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetApodQueryParams{
            Date: "adipisci",
            Hd: true,
        },
    }
    
    res, err := s.RequestTag.GetApod(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApod200ApplicationJSONAnies != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->