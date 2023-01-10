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
            Name: "unde",
        },
        QueryParams: operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams{
            DollarXgafv: "2",
            AccessToken: "cumque",
            Alt: "media",
            Callback: "voluptatum",
            Fields: "labore",
            Key: "rerum",
            OauthToken: "qui",
            PrettyPrint: false,
            QuotaUser: "quo",
            UploadType: "et",
            UploadProtocol: "sit",
        },
        Request: &shared.ActivateCertificateAuthorityRequest{
            PemCaCertificate: "doloribus",
            RequestID: "et",
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: "eveniet",
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "praesentium",
                        "sequi",
                        "illum",
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