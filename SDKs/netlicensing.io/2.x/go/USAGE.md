<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.License.CreateLicense(ctx, operations.CreateLicenseRequestBody{
        Active: false,
        Currency: sdk.String("corrupti"),
        Hidden: sdk.Bool(false),
        LicenseTemplateNumber: "provident",
        LicenseeNumber: "distinctio",
        Name: sdk.String("Stuart Stiedemann"),
        Number: sdk.String("vel"),
        Parentfeature: sdk.String("error"),
        Price: sdk.Float64(6458.94),
        Quantity: sdk.String("suscipit"),
        StartDate: types.MustTimeFromString("2022-09-14T09:35:47.986Z"),
        TimeVolume: sdk.String("debitis"),
        TimeVolumePeriod: sdk.String("ipsa"),
        UsedQuantity: sdk.String("delectus"),
    }, operations.CreateLicenseSecurity{
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