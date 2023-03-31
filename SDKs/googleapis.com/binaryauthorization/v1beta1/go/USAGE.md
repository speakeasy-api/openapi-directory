<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.BinaryauthorizationProjectsAttestorsCreateRequest{
        DollarXgafv: "2",
        AttestorInput: &shared.AttestorInput{
            Description: "provident",
            Etag: "distinctio",
            Name: "quibusdam",
            UserOwnedDrydockNote: &shared.UserOwnedDrydockNoteInput{
                NoteReference: "unde",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "corrupti",
                        Comment: "illum",
                        ID: "vel",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "error",
                            SignatureAlgorithm: "RSA_SIGN_PKCS1_4096_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "suscipit",
                        Comment: "iure",
                        ID: "magnam",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "debitis",
                            SignatureAlgorithm: "RSA_PSS_2048_SHA256",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "delectus",
                        Comment: "tempora",
                        ID: "suscipit",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "molestiae",
                            SignatureAlgorithm: "ECDSA_P384_SHA384",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "placeat",
                        Comment: "voluptatum",
                        ID: "iusto",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "excepturi",
                            SignatureAlgorithm: "RSA_PSS_4096_SHA512",
                        },
                    },
                },
            },
        },
        AccessToken: "recusandae",
        Alt: "proto",
        AttestorID: "ab",
        Callback: "quis",
        Fields: "veritatis",
        Key: "deserunt",
        OauthToken: "perferendis",
        Parent: "ipsam",
        PrettyPrint: false,
        QuotaUser: "repellendus",
        UploadType: "sapiente",
        UploadProtocol: "quo",
    }

    ctx := context.Background()
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsCreate(ctx, req, operations.BinaryauthorizationProjectsAttestorsCreateSecurity{
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