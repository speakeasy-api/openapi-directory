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
            AppsID: "ut",
        },
        QueryParams: operations.AppengineAppsAuthorizedCertificatesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "eos",
            Alt: "json",
            Callback: "quaerat",
            Fields: "quod",
            Key: "nihil",
            OauthToken: "sapiente",
            PrettyPrint: false,
            QuotaUser: "alias",
            UploadType: "rerum",
            UploadProtocol: "qui",
        },
        Request: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "quis",
                PublicCertificate: "sed",
            },
            DisplayName: "magni",
            DomainMappingsCount: 8132118161408055480,
            DomainNames: []string{
                "inventore",
                "vel",
            },
            ExpireTime: "alias",
            ID: "quidem",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "nostrum",
                Status: "PENDING",
            },
            Name: "molestiae",
            VisibleDomainMappings: []string{
                "qui",
                "pariatur",
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