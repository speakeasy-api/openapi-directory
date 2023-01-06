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
            Parent: "dignissimos",
        },
        QueryParams: operations.AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "officia",
            Alt: "proto",
            Callback: "temporibus",
            Fields: "ullam",
            Key: "quos",
            OauthToken: "illo",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "et",
            UploadProtocol: "vel",
        },
        Request: &shared.ConfigurationInput{
            CompanyName: "vero",
            ConfigurationName: "omnis",
            ContactEmail: "ut",
            ContactPhone: "earum",
            CustomMessage: "sint",
            DpcExtras: "est",
            DpcResourcePath: "deleniti",
            IsDefault: true,
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