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
    
    req := operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest{
        PathParams: operations.AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.ConfigurationInput{
            CompanyName: "dicta",
            ConfigurationName: "debitis",
            ContactEmail: "voluptatum",
            ContactPhone: "et",
            CustomMessage: "ut",
            DpcExtras: "dolorem",
            DpcResourcePath: "et",
            IsDefault: false,
        },
    }
    
    res, err := s.Customers.AndroiddeviceprovisioningCustomersConfigurationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Configuration != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->