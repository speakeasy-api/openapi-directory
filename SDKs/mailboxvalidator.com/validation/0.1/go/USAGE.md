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
    
    req := operations.GetV1ValidationSingleRequest{
        QueryParams: operations.GetV1ValidationSingleQueryParams{
            Email: "accusantium",
            Format: "xml",
            Key: "voluptas",
        },
    }
    
    res, err := s.GetV1ValidationSingle(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1ValidationSingle200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->