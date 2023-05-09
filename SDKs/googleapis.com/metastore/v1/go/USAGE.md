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
    res, err := s.Projects.MetastoreProjectsLocationsFederationsCreate(ctx, operations.MetastoreProjectsLocationsFederationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FederationInput: &shared.FederationInput{
            BackendMetastores: map[string]shared.BackendMetastore{
                "distinctio": shared.BackendMetastore{
                    MetastoreType: shared.BackendMetastoreMetastoreTypeEnumDataprocMetastore.ToPointer(),
                    Name: sdk.String("Ismael Little"),
                },
                "error": shared.BackendMetastore{
                    MetastoreType: shared.BackendMetastoreMetastoreTypeEnumDataprocMetastore.ToPointer(),
                    Name: sdk.String("Willie Gulgowski DVM"),
                },
                "tempora": shared.BackendMetastore{
                    MetastoreType: shared.BackendMetastoreMetastoreTypeEnumMetastoreTypeUnspecified.ToPointer(),
                    Name: sdk.String("Alexandra Schulist"),
                },
            },
            Labels: map[string]string{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
            Name: sdk.String("Christopher Hills"),
            Version: sdk.String("quo"),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        FederationID: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        RequestID: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.MetastoreProjectsLocationsFederationsCreateSecurity{
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