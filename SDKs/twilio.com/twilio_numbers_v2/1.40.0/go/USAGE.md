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

    req := operations.CreateBundleCreateBundleRequest{
        Email: "Larue_Rau85@yahoo.com",
        EndUserType: "business",
        FriendlyName: "illum",
        IsoCountry: "vel",
        NumberType: "error",
        RegulationSid: "deserunt",
        StatusCallback: "http://innocent-effect.org",
    }

    ctx := context.Background()
    res, err := s.CreateBundle(ctx, req, operations.CreateBundleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundle != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->