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
    
    req := operations.GetzipcodeinfoRequest{
        QueryParams: operations.GetzipcodeinfoQueryParams{
            License: "sit",
            Zip: "voluptas",
        },
    }
    
    res, err := s.DetailedZipCodeInformation.Getzipcodeinfo(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getzipcodeinfo200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->