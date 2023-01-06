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
            AppsID: "modi",
        },
        QueryParams: operations.AppengineAppsAuthorizedCertificatesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "dolorum",
            Alt: "json",
            Callback: "consequatur",
            Fields: "minima",
            Key: "illo",
            OauthToken: "ad",
            PrettyPrint: true,
            QuotaUser: "non",
            UploadType: "in",
            UploadProtocol: "aut",
        },
        Request: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "enim",
                PublicCertificate: "et",
            },
            DisplayName: "provident",
            DomainMappingsCount: 8982298211630841711,
            DomainNames: []string{
                "aperiam",
            },
            ExpireTime: "necessitatibus",
            ID: "commodi",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "voluptatum",
                Status: "FAILED_PERMANENTLY_NOT_VISIBLE",
            },
            Name: "nemo",
            VisibleDomainMappings: []string{
                "quo",
                "minima",
                "voluptatem",
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