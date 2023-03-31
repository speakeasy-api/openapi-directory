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
        DollarXgafv: "2",
        AuthorizedCertificate: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "provident",
                PublicCertificate: "distinctio",
            },
            DisplayName: "quibusdam",
            DomainMappingsCount: 602763,
            DomainNames: []string{
                "corrupti",
                "illum",
                "vel",
                "error",
            },
            ExpireTime: "deserunt",
            ID: "suscipit",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "iure",
                Status: "PENDING",
            },
            Name: "debitis",
            VisibleDomainMappings: []string{
                "delectus",
            },
        },
        AccessToken: "tempora",
        Alt: "media",
        AppsID: "molestiae",
        Callback: "minus",
        Fields: "placeat",
        Key: "voluptatum",
        OauthToken: "iusto",
        PrettyPrint: false,
        QuotaUser: "excepturi",
        UploadType: "nisi",
        UploadProtocol: "recusandae",
    }

    ctx := context.Background()
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesCreate(ctx, req, operations.AppengineAppsAuthorizedCertificatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->