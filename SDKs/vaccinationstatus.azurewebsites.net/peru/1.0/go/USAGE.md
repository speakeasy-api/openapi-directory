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
    
    req := operations.GetVaccineStatusRequest{
        Headers: operations.GetVaccineStatusHeaders{
            Accept: "sit",
            Authorization: "voluptas",
            ContentType: "culpa",
        },
        Request: shared.VaccineStatusRequest{
            UUID: "expedita",
        },
    }
    
    res, err := s.PeruAPI.GetVaccineStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VaccineResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->