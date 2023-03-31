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

    req := operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest{
        DollarXgafv: "2",
        ConfigurationInput: &shared.ConfigurationInput{
            CompanyName: "provident",
            ConfigurationName: "distinctio",
            ContactEmail: "quibusdam",
            ContactPhone: "unde",
            CustomMessage: "nulla",
            DpcExtras: "corrupti",
            DpcResourcePath: "illum",
            IsDefault: false,
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        OauthToken: "magnam",
        Parent: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Customers.AndroiddeviceprovisioningCustomersConfigurationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Configuration != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->