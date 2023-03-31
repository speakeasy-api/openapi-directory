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

    req := operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest{
        DollarXgafv: "2",
        ActivateCertificateAuthorityRequest: &shared.ActivateCertificateAuthorityRequest{
            PemCaCertificate: "provident",
            RequestID: "distinctio",
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: "quibusdam",
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                },
            },
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        Name: "magnam",
        OauthToken: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(ctx, req, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->