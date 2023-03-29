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
            AccountID: "unde",
        },
        QueryParams: operations.TagmanagerAccountsContainersCreateQueryParams{
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
        Request: &shared.Container{
            AccountID: "eum",
            ContainerID: "iusto",
            DomainName: []string{
                "saepe",
                "inventore",
            },
            EnabledBuiltInVariable: []shared.ContainerEnabledBuiltInVariableEnum{
                "historySource",
                "sdkVersion",
                "ampReferrer",
                "firebaseEventParameterNotificationTopic",
            },
            Fingerprint: "vel",
            Name: "non",
            Notes: "deleniti",
            PublicID: "similique",
            TimeZoneCountryID: "reprehenderit",
            TimeZoneID: "molestiae",
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