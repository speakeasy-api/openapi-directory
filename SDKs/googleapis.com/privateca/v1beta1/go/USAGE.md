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
    
    req := operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest{
        Security: operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams{
            Name: "sit",
        },
        QueryParams: operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.ActivateCertificateAuthorityRequest{
            PemCaCertificate: "dicta",
            RequestID: "debitis",
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: "voluptatum",
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "ut",
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.PrivatecaProjectsLocationsCertificateAuthoritiesActivate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->