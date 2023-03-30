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
        Security: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            CertificateIssuanceConfigID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.CertificateIssuanceConfigInput{
            CertificateAuthorityConfig: &shared.CertificateAuthorityConfig{
                CertificateAuthorityServiceConfig: &shared.CertificateAuthorityServiceConfig{
                    CaPool: "iure",
                },
            },
            Description: "magnam",
            KeyAlgorithm: "ECDSA_P256",
            Labels: map[string]string{
                "delectus": "tempora",
            },
            Lifetime: "suscipit",
            Name: "molestiae",
            RotationWindowPercentage: 791725,
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->