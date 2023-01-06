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
            Name: "ducimus",
        },
        QueryParams: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams{
            DollarXgafv: "2",
            AccessToken: "ullam",
            Alt: "proto",
            Callback: "perferendis",
            Fields: "quis",
            Key: "suscipit",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "natus",
            UploadType: "vitae",
            UploadProtocol: "et",
        },
        Request: &shared.ActivateCertificateAuthorityRequest{
            PemCaCertificate: "ipsam",
            RequestID: "facere",
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: "delectus",
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "aut",
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