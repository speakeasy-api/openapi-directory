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
            Currency: "unde",
            Hidden: false,
            LicenseTemplateNumber: "deserunt",
            LicenseeNumber: "porro",
            Name: "nulla",
            Number: "id",
            Parentfeature: "vero",
            Price: 5448.83,
            Quantity: "nulla",
            StartDate: "2022-10-25T21:32:03.292Z",
            TimeVolume: "fuga",
            TimeVolumePeriod: "facilis",
            UsedQuantity: "eum",
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