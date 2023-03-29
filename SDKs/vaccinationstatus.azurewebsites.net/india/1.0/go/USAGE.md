<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetVaccineStatusRequest{
        Headers: operations.GetVaccineStatusHeaders{
            Accept: "unde",
            Authorization: "deserunt",
            ContentType: "porro",
            CowinAPIKey: "nulla",
        },
        Request: shared.VaccineStatusRequest{
            BeneficiaryID: "id",
            Mobile: "(684) 663-4280 x92347",
        },
    }

    ctx := context.Background()
    res, err := s.IndiaAPI.GetVaccineStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VaccineResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->