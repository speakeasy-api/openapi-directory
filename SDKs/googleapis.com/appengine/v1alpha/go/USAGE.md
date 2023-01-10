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
            AppsID: "omnis",
        },
        QueryParams: operations.AppengineAppsAuthorizedCertificatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "eligendi",
            Alt: "media",
            Callback: "eveniet",
            Fields: "est",
            Key: "omnis",
            OauthToken: "blanditiis",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "odit",
            UploadProtocol: "non",
        },
        Request: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "porro",
                PublicCertificate: "sunt",
            },
            DisplayName: "ea",
            DomainMappingsCount: 1801121852245990253,
            DomainNames: []string{
                "aperiam",
                "aut",
                "ex",
            },
            ExpireTime: "modi",
            ID: "qui",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "quia",
                Status: "OK",
            },
            Name: "nisi",
            VisibleDomainMappings: []string{
                "tenetur",
                "praesentium",
                "totam",
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