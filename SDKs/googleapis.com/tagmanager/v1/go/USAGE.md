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

    req := operations.TagmanagerAccountsContainersCreateRequest{
        DollarXgafv: "2",
        Container: &shared.Container{
            AccountID: "provident",
            ContainerID: "distinctio",
            DomainName: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            EnabledBuiltInVariable: []shared.ContainerEnabledBuiltInVariableEnum{
                "ampGtmEvent",
                "firebaseEventParameterCampaign",
            },
            Fingerprint: "suscipit",
            Name: "iure",
            Notes: "magnam",
            PublicID: "debitis",
            TimeZoneCountryID: "ipsa",
            TimeZoneID: "delectus",
            UsageContext: []shared.ContainerUsageContextEnum{
                "ios",
                "ios",
            },
        },
        AccessToken: "minus",
        AccountID: "placeat",
        Alt: "media",
        Callback: "iusto",
        Fields: "excepturi",
        Key: "nisi",
        OauthToken: "recusandae",
        PrettyPrint: false,
        QuotaUser: "temporibus",
        UploadType: "ab",
        UploadProtocol: "quis",
    }

    ctx := context.Background()
    res, err := s.Accounts.TagmanagerAccountsContainersCreate(ctx, req, operations.TagmanagerAccountsContainersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->