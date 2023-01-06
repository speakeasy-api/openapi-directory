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
            Parent: "in",
        },
        QueryParams: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "media",
            Callback: "labore",
            CertificateIssuanceConfigID: "sed",
            Fields: "sint",
            Key: "sunt",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "labore",
            UploadType: "perferendis",
            UploadProtocol: "non",
        },
        Request: &shared.CertificateIssuanceConfigInput{
            CertificateAuthorityConfig: &shared.CertificateAuthorityConfig{
                CertificateAuthorityServiceConfig: &shared.CertificateAuthorityServiceConfig{
                    CaPool: "sapiente",
                },
            },
            Description: "ad",
            KeyAlgorithm: "KEY_ALGORITHM_UNSPECIFIED",
            Labels: map[string]string{
                "consequatur": "nemo",
                "ex": "repellat",
                "numquam": "autem",
            },
            Lifetime: "repellat",
            Name: "libero",
            RotationWindowPercentage: 6923235359962688384,
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