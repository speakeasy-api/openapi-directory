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
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsCreate(ctx, operations.BinaryauthorizationProjectsAttestorsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AttestorInput: &shared.AttestorInput{
            Description: sdk.String("provident"),
            Etag: sdk.String("distinctio"),
            Name: sdk.String("Stuart Stiedemann"),
            UserOwnedDrydockNote: &shared.UserOwnedDrydockNoteInput{
                NoteReference: sdk.String("vel"),
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("deserunt"),
                        Comment: sdk.String("suscipit"),
                        ID: sdk.String("74e0f467-cc87-496e-9151-a05dfc2ddf7c"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("quod"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumRsaSignPss4096Sha512.ToPointer(),
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("totam"),
                        Comment: sdk.String("porro"),
                        ID: sdk.String("a1ba928f-c816-4742-8b73-9205929396fe"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("fuga"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumRsaSignPss4096Sha512.ToPointer(),
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("corporis"),
                        Comment: sdk.String("iste"),
                        ID: sdk.String("6eb10faa-a235-42c5-9559-07aff1a3a2fa"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("occaecati"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumRsaSignPss3072Sha256.ToPointer(),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AttestorID: sdk.String("molestiae"),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        Parent: "vitae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("enim"),
    }, operations.BinaryauthorizationProjectsAttestorsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attestor != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->