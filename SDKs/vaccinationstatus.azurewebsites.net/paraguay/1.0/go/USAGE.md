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
            Accept: "suscipit",
            Authorization: "voluptas",
            ContentType: "quis",
        },
        Request: shared.VaccineStatusRequest{
            Documento: "numquam",
        },
    }
    
    res, err := s.ParaguayAPI.GetVaccineStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VaccineResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->