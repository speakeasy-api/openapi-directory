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
            AppsID: "et",
        },
        QueryParams: operations.AppengineAppsAuthorizedCertificatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "saepe",
            Alt: "proto",
            Callback: "ducimus",
            Fields: "rerum",
            Key: "autem",
            OauthToken: "sint",
            PrettyPrint: false,
            QuotaUser: "blanditiis",
            UploadType: "impedit",
            UploadProtocol: "sunt",
        },
        Request: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "ea",
                PublicCertificate: "asperiores",
            },
            DisplayName: "ipsam",
            DomainMappingsCount: 4423674668372831048,
            DomainNames: []string{
                "eaque",
                "esse",
            },
            ExpireTime: "ut",
            ID: "sapiente",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "natus",
                Status: "FAILED_RETRYING_CAA_CHECKING",
            },
            Name: "tempora",
            VisibleDomainMappings: []string{
                "ad",
                "culpa",
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