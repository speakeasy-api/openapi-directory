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
    
    req := operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest{
        Security: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams{
            Name: "occaecati",
        },
        QueryParams: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams{
            DollarXgafv: "2",
            AccessToken: "enim",
            Alt: "media",
            Callback: "et",
            Fields: "voluptatum",
            Key: "vitae",
            OauthToken: "asperiores",
            PrettyPrint: true,
            QuotaUser: "corrupti",
            UploadType: "quibusdam",
            UploadProtocol: "consequatur",
        },
        Request: &shared.ActivateCertificateAuthorityRequest{
            PemCaCertificate: "totam",
            RequestID: "aperiam",
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: "ea",
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "vero",
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->