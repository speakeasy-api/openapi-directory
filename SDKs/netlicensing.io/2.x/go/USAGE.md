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

    req := operations.CreateLicenseRequest{
        Security: operations.CreateLicenseSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: operations.CreateLicenseRequestBody{
            Active: false,
            Currency: "corrupti",
            Hidden: false,
            LicenseTemplateNumber: "provident",
            LicenseeNumber: "distinctio",
            Name: "quibusdam",
            Number: "unde",
            Parentfeature: "nulla",
            Price: 5448.83,
            Quantity: "illum",
            StartDate: "2022-10-26T11:54:26.054Z",
            TimeVolume: "error",
            TimeVolumePeriod: "deserunt",
            UsedQuantity: "suscipit",
        },
    }

    ctx := context.Background()
    res, err := s.License.CreateLicense(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->