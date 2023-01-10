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
            Parent: "voluptate",
        },
        QueryParams: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            Alt: "media",
            Callback: "vel",
            CertificateIssuanceConfigID: "accusamus",
            Fields: "qui",
            Key: "sit",
            OauthToken: "exercitationem",
            PrettyPrint: false,
            QuotaUser: "animi",
            UploadType: "autem",
            UploadProtocol: "voluptatibus",
        },
        Request: &shared.CertificateIssuanceConfigInput{
            CertificateAuthorityConfig: &shared.CertificateAuthorityConfig{
                CertificateAuthorityServiceConfig: &shared.CertificateAuthorityServiceConfig{
                    CaPool: "ipsa",
                },
            },
            Description: "numquam",
            KeyAlgorithm: "KEY_ALGORITHM_UNSPECIFIED",
            Labels: map[string]string{
                "quos": "doloremque",
            },
            Lifetime: "repellendus",
            Name: "id",
            RotationWindowPercentage: 7869921020381450909,
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