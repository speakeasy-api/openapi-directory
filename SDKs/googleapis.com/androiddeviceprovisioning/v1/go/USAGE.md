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
        PathParams: operations.AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.ConfigurationInput{
            CompanyName: "suscipit",
            ConfigurationName: "iure",
            ContactEmail: "magnam",
            ContactPhone: "debitis",
            CustomMessage: "ipsa",
            DpcExtras: "delectus",
            DpcResourcePath: "tempora",
            IsDefault: false,
        },
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