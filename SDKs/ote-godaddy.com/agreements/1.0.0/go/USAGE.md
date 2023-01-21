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
                "voluptas",
            },
        },
        Headers: operations.GetHeaders{
            XMarketID: "culpa",
            XPrivateLabelID: 501233450539197794,
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