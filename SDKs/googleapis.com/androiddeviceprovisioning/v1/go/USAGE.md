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
            Parent: "unde",
        },
        QueryParams: operations.AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.ConfigurationInput{
            CompanyName: "eum",
            ConfigurationName: "iusto",
            ContactEmail: "ullam",
            ContactPhone: "saepe",
            CustomMessage: "inventore",
            DpcExtras: "sapiente",
            DpcResourcePath: "enim",
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