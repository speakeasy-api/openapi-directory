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
        },
        Request: shared.VaccineStatusRequest{
            UUID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
        },
    }

    ctx := context.Background()
    res, err := s.PeruAPI.GetVaccineStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VaccineResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->