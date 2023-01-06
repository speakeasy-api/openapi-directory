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
            Currency: "dolorem",
            Hidden: true,
            LicenseTemplateNumber: "quasi",
            LicenseeNumber: "enim",
            Name: "quidem",
            Number: "ut",
            Parentfeature: "accusantium",
            Price: 75.099998,
            Quantity: "ullam",
            StartDate: "2003-11-23T16:58:00Z",
            TimeVolume: "id",
            TimeVolumePeriod: "sit",
            UsedQuantity: "aut",
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