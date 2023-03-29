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
            AppsID: "unde",
        },
        QueryParams: operations.AppengineAppsAuthorizedCertificatesCreateQueryParams{
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
        Request: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "eum",
                PublicCertificate: "iusto",
            },
            DisplayName: "ullam",
            DomainMappingsCount: 891773,
            DomainNames: []string{
                "sapiente",
            },
            ExpireTime: "enim",
            ID: "eum",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "voluptatum",
                Status: "FAILED_RETRYING_CAA_FORBIDDEN",
            },
            Name: "vel",
            VisibleDomainMappings: []string{
                "deleniti",
                "similique",
                "reprehenderit",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->