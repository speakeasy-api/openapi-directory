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
        Security: operations.TagmanagerAccountsContainersCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TagmanagerAccountsContainersCreatePathParams{
            AccountID: "corrupti",
        },
        QueryParams: operations.TagmanagerAccountsContainersCreateQueryParams{
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
        Request: &shared.Container{
            AccountID: "suscipit",
            ContainerID: "iure",
            DomainName: []string{
                "debitis",
                "ipsa",
            },
            EnabledBuiltInVariable: []shared.ContainerEnabledBuiltInVariableEnum{
                "historySource",
                "sdkVersion",
                "ampReferrer",
                "firebaseEventParameterNotificationTopic",
            },
            Fingerprint: "placeat",
            Name: "voluptatum",
            Notes: "iusto",
            PublicID: "excepturi",
            TimeZoneCountryID: "nisi",
            TimeZoneID: "recusandae",
            UsageContext: []shared.ContainerUsageContextEnum{
                "web",
                "ios",
                "web",
                "androidSdk5",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.TagmanagerAccountsContainersCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->