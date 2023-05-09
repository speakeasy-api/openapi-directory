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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesCreate(ctx, operations.AppengineAppsAuthorizedCertificatesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AuthorizedCertificate: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: sdk.String("provident"),
                PublicCertificate: sdk.String("distinctio"),
            },
            DisplayName: sdk.String("quibusdam"),
            DomainMappingsCount: sdk.Int(602763),
            DomainNames: []string{
                "corrupti",
                "illum",
                "vel",
                "error",
            },
            ExpireTime: sdk.String("deserunt"),
            ID: sdk.String("674e0f46-7cc8-4796-ad15-1a05dfc2ddf7"),
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: sdk.String("quod"),
                Status: shared.ManagedCertificateStatusEnumFailedRetryingCaaForbidden.ToPointer(),
            },
            Name: sdk.String("Deanna Sauer MD"),
            VisibleDomainMappings: []string{
                "occaecati",
                "fugit",
                "deleniti",
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "totam",
        Callback: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.AppengineAppsAuthorizedCertificatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->