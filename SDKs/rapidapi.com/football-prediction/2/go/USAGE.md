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
    
    req := operations.GetAPIV2ListFederationsRequest{
        Headers: operations.GetAPIV2ListFederationsHeaders{
            XRapidAPIKey: "sit",
        },
    }
    
    res, err := s.GetAPIV2ListFederations(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2ListFederations200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->