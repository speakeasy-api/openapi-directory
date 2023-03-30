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
        Security: operations.BinaryauthorizationProjectsAttestorsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BinaryauthorizationProjectsAttestorsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.BinaryauthorizationProjectsAttestorsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            AttestorID: "unde",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.AttestorInput{
            Description: "iure",
            Etag: "magnam",
            Name: "debitis",
            UserOwnedGrafeasNote: &shared.UserOwnedGrafeasNoteInput{
                NoteReference: "ipsa",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "tempora",
                        Comment: "suscipit",
                        ID: "molestiae",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "minus",
                            SignatureAlgorithm: "ECDSA_P384_SHA384",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "voluptatum",
                        Comment: "iusto",
                        ID: "excepturi",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "nisi",
                            SignatureAlgorithm: "ECDSA_P521_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "temporibus",
                        Comment: "ab",
                        ID: "quis",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "veritatis",
                            SignatureAlgorithm: "RSA_SIGN_PKCS1_4096_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "perferendis",
                        Comment: "ipsam",
                        ID: "repellendus",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "sapiente",
                            SignatureAlgorithm: "EC_SIGN_P256_SHA256",
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Attestor != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->