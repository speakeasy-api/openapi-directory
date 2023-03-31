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

    req := operations.CreateLicenseRequestBody{
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
        StartDate: "2022-05-18T09:34:54.894Z",
        TimeVolume: "deserunt",
        TimeVolumePeriod: "suscipit",
        UsedQuantity: "iure",
    }

    ctx := context.Background()
    res, err := s.License.CreateLicense(ctx, req, operations.CreateLicenseSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->