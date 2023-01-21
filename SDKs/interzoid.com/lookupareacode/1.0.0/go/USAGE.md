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
    
    req := operations.GetareacodeRequest{
        QueryParams: operations.GetareacodeQueryParams{
            Areacode: "sit",
            License: "voluptas",
        },
    }
    
    res, err := s.AreaCodeInformation.Getareacode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getareacode200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->