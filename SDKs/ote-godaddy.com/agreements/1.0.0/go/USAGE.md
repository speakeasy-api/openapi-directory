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
    
    req := operations.GetRequest{
        QueryParams: operations.GetQueryParams{
            Keys: []string{
                "et",
                "placeat",
                "dolorem",
            },
        },
        Headers: operations.GetHeaders{
            XMarketID: "repudiandae",
            XPrivateLabelID: 8263951519878156532,
        },
    }
    
    res, err := s.V1.Get(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->