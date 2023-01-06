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
            Name: "illo",
        },
        QueryParams: operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams{
            DollarXgafv: "2",
            AccessToken: "quas",
            Alt: "proto",
            Callback: "ea",
            Fields: "ut",
            Key: "suscipit",
            OauthToken: "eos",
            PrettyPrint: true,
            QuotaUser: "aut",
            UploadType: "esse",
            UploadProtocol: "minima",
        },
        Request: &shared.ActivateCertificateAuthorityRequest{
            PemCaCertificate: "alias",
            RequestID: "laborum",
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: "aut",
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "eum",
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