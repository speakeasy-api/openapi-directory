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
            Parent: "ut",
        },
        QueryParams: operations.BinaryauthorizationProjectsAttestorsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "est",
            Alt: "proto",
            AttestorID: "voluptatum",
            Callback: "qui",
            Fields: "odit",
            Key: "quas",
            OauthToken: "nemo",
            PrettyPrint: false,
            QuotaUser: "sunt",
            UploadType: "sint",
            UploadProtocol: "accusantium",
        },
        Request: &shared.AttestorInput{
            Description: "rem",
            Etag: "quod",
            Name: "quia",
            UserOwnedGrafeasNote: &shared.UserOwnedGrafeasNoteInput{
                NoteReference: "magni",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "veritatis",
                        Comment: "ut",
                        ID: "dicta",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "iusto",
                            SignatureAlgorithm: "ECDSA_P256_SHA256",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "dolores",
                        Comment: "porro",
                        ID: "aut",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "et",
                            SignatureAlgorithm: "RSA_SIGN_PSS_4096_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "qui",
                        Comment: "sint",
                        ID: "doloribus",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "omnis",
                            SignatureAlgorithm: "EC_SIGN_P521_SHA512",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Attestor != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->