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
            Parent: "unde",
        },
        QueryParams: operations.BinaryauthorizationProjectsAttestorsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            AttestorID: "id",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.AttestorInput{
            Description: "iusto",
            Etag: "ullam",
            Name: "saepe",
            UserOwnedDrydockNote: &shared.UserOwnedDrydockNoteInput{
                NoteReference: "inventore",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "enim",
                        Comment: "eum",
                        ID: "voluptatum",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "autem",
                            SignatureAlgorithm: "ECDSA_P384_SHA384",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "non",
                        Comment: "deleniti",
                        ID: "similique",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "reprehenderit",
                            SignatureAlgorithm: "ECDSA_P521_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "quo",
                        Comment: "quasi",
                        ID: "laboriosam",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "dicta",
                            SignatureAlgorithm: "RSA_SIGN_PKCS1_4096_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "voluptatem",
                        Comment: "consequatur",
                        ID: "fugiat",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "a",
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