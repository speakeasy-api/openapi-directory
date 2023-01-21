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
    
    req := operations.CreateLicenseRequest{
        Security: operations.CreateLicenseSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: operations.CreateLicenseRequestBody{
            Active: false,
            Currency: "voluptas",
            Hidden: true,
            LicenseTemplateNumber: "expedita",
            LicenseeNumber: "consequuntur",
            Name: "dolor",
            Number: "expedita",
            Parentfeature: "voluptas",
            Price: 88.099998,
            Quantity: "nihil",
            StartDate: "2004-06-02T10:14:12Z",
            TimeVolume: "voluptatum",
            TimeVolumePeriod: "et",
            UsedQuantity: "ut",
        },
    }
    
    res, err := s.License.CreateLicense(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->