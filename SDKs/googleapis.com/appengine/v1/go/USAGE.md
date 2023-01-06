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
            AppsID: "consequuntur",
        },
        QueryParams: operations.AppengineAppsAuthorizedCertificatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "dicta",
            Alt: "json",
            Callback: "saepe",
            Fields: "omnis",
            Key: "quidem",
            OauthToken: "reprehenderit",
            PrettyPrint: false,
            QuotaUser: "consectetur",
            UploadType: "fugit",
            UploadProtocol: "illum",
        },
        Request: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "culpa",
                PublicCertificate: "quae",
            },
            DisplayName: "error",
            DomainMappingsCount: 156088073112754838,
            DomainNames: []string{
                "et",
                "labore",
                "consequatur",
            },
            ExpireTime: "quia",
            ID: "quisquam",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "adipisci",
                Status: "FAILED_RETRYING_CAA_CHECKING",
            },
            Name: "autem",
            VisibleDomainMappings: []string{
                "incidunt",
                "sint",
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