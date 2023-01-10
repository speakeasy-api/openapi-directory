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
            Active: true,
            Currency: "sit",
            Hidden: true,
            LicenseTemplateNumber: "debitis",
            LicenseeNumber: "asperiores",
            Name: "quia",
            Number: "optio",
            Parentfeature: "repellendus",
            Price: 0.100000,
            Quantity: "nemo",
            StartDate: "2010-09-03T22:35:25Z",
            TimeVolume: "hic",
            TimeVolumePeriod: "voluptatem",
            UsedQuantity: "cupiditate",
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