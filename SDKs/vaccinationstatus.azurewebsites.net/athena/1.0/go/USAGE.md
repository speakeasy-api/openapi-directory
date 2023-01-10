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
            Accept: "et",
            Authorization: "quos",
            ContentType: "molestiae",
        },
        Request: shared.VaccineStatusRequest{
            DepartmentID: "ut",
            PatientID: "eius",
            Token: "in",
        },
    }
    
    res, err := s.AthenaAPI.GetVaccineStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VaccineResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->