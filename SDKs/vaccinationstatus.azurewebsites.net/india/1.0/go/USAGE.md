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
            CowinAPIKey: "expedita",
        },
        Request: shared.VaccineStatusRequest{
            BeneficiaryID: "consequuntur",
            Mobile: "dolor",
        },
    }
    
    res, err := s.IndiaAPI.GetVaccineStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VaccineResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->