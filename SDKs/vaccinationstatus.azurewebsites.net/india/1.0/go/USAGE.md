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
            Accept: "inventore",
            Authorization: "sed",
            ContentType: "voluptas",
            CowinAPIKey: "iure",
        },
        Request: shared.VaccineStatusRequest{
            BeneficiaryID: "dolores",
            Mobile: "enim",
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