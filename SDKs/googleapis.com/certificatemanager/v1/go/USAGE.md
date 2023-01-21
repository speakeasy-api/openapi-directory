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
            Parent: "sit",
        },
        QueryParams: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            CertificateIssuanceConfigID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.CertificateIssuanceConfigInput{
            CertificateAuthorityConfig: &shared.CertificateAuthorityConfig{
                CertificateAuthorityServiceConfig: &shared.CertificateAuthorityServiceConfig{
                    CaPool: "debitis",
                },
            },
            Description: "voluptatum",
            KeyAlgorithm: "KEY_ALGORITHM_UNSPECIFIED",
            Labels: map[string]string{
                "dolorem": "et",
                "voluptate": "iste",
                "vitae": "totam",
            },
            Lifetime: "dolores",
            Name: "illum",
            RotationWindowPercentage: 6392442863481646880,
        },
    }
    
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->