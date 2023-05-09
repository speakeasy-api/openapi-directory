<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ActivateCertificateAuthorityRequest: &shared.ActivateCertificateAuthorityRequest{
            PemCaCertificate: sdk.String("provident"),
            RequestID: sdk.String("distinctio"),
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: sdk.String("quibusdam"),
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                },
            },
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        Name: "Raquel Bednar",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity{
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