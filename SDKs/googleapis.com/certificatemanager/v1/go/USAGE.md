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

    req := operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest{
        DollarXgafv: "2",
        CertificateIssuanceConfigInput: &shared.CertificateIssuanceConfigInput{
            CertificateAuthorityConfig: &shared.CertificateAuthorityConfig{
                CertificateAuthorityServiceConfig: &shared.CertificateAuthorityServiceConfig{
                    CaPool: "provident",
                },
            },
            Description: "distinctio",
            KeyAlgorithm: "ECDSA_P256",
            Labels: map[string]string{
                "nulla": "corrupti",
                "illum": "vel",
                "error": "deserunt",
            },
            Lifetime: "suscipit",
            Name: "iure",
            RotationWindowPercentage: 297534,
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        CertificateIssuanceConfigID: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        OauthToken: "minus",
        Parent: "placeat",
        PrettyPrint: false,
        QuotaUser: "voluptatum",
        UploadType: "iusto",
        UploadProtocol: "excepturi",
    }

    ctx := context.Background()
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(ctx, req, operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity{
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