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
            AccountID: "sit",
        },
        QueryParams: operations.TagmanagerAccountsContainersCreateQueryParams{
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
        Request: &shared.Container{
            AccountID: "dicta",
            ContainerID: "debitis",
            DomainName: []string{
                "et",
            },
            EnabledBuiltInVariable: []shared.ContainerEnabledBuiltInVariableEnum{
                "ampReferrer",
                "firebaseEventParameterPreviousOsVersion",
                "scrollDepthUnits",
            },
            Fingerprint: "iste",
            Name: "vitae",
            Notes: "totam",
            PublicID: "dolores",
            TimeZoneCountryID: "illum",
            TimeZoneID: "debitis",
            UsageContext: []shared.ContainerUsageContextEnum{
                "web",
                "android",
            },
        },
    }
    
    res, err := s.Accounts.TagmanagerAccountsContainersCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->