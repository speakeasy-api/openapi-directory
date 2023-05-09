<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateBundle(ctx, operations.CreateBundleCreateBundleRequest{
        Email: "Larue_Rau85@yahoo.com",
        EndUserType: shared.BundleEnumEndUserTypeEnumBusiness.ToPointer(),
        FriendlyName: "illum",
        IsoCountry: sdk.String("vel"),
        NumberType: sdk.String("error"),
        RegulationSid: sdk.String("deserunt"),
        StatusCallback: sdk.String("http://innocent-effect.org"),
    }, operations.CreateBundleSecurity{
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