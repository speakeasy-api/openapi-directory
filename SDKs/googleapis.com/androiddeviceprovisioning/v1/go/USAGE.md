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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersConfigurationsCreate(ctx, operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConfigurationInput: &shared.ConfigurationInput{
            CompanyName: sdk.String("provident"),
            ConfigurationName: sdk.String("distinctio"),
            ContactEmail: sdk.String("quibusdam"),
            ContactPhone: sdk.String("unde"),
            CustomMessage: sdk.String("nulla"),
            DpcExtras: sdk.String("corrupti"),
            DpcResourcePath: sdk.String("illum"),
            IsDefault: sdk.Bool(false),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        Parent: "debitis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Configuration != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->