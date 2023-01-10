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
            Parent: "aut",
        },
        QueryParams: operations.AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "consequatur",
            Alt: "proto",
            Callback: "asperiores",
            Fields: "placeat",
            Key: "iure",
            OauthToken: "aut",
            PrettyPrint: false,
            QuotaUser: "voluptatem",
            UploadType: "quia",
            UploadProtocol: "ut",
        },
        Request: &shared.ConfigurationInput{
            CompanyName: "quisquam",
            ConfigurationName: "sit",
            ContactEmail: "ratione",
            ContactPhone: "aperiam",
            CustomMessage: "tenetur",
            DpcExtras: "quia",
            DpcResourcePath: "ut",
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