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
    
    req := operations.AppengineAppsAuthorizedCertificatesCreateRequest{
        Security: operations.AppengineAppsAuthorizedCertificatesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AppengineAppsAuthorizedCertificatesCreatePathParams{
            AppsID: "fuga",
        },
        QueryParams: operations.AppengineAppsAuthorizedCertificatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "soluta",
            Alt: "proto",
            Callback: "ea",
            Fields: "tempora",
            Key: "ducimus",
            OauthToken: "assumenda",
            PrettyPrint: false,
            QuotaUser: "dolorem",
            UploadType: "ea",
            UploadProtocol: "dignissimos",
        },
        Request: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "adipisci",
                PublicCertificate: "enim",
            },
            DisplayName: "deserunt",
            DomainMappingsCount: 3038134888676807101,
            DomainNames: []string{
                "iusto",
                "ex",
                "eum",
            },
            ExpireTime: "commodi",
            ID: "soluta",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "rerum",
                Status: "FAILED_RETRYING_NOT_VISIBLE",
            },
            Name: "blanditiis",
            VisibleDomainMappings: []string{
                "ex",
            },
        },
    }
    
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->