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
            Parent: "sit",
        },
        QueryParams: operations.BinaryauthorizationProjectsAttestorsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            AttestorID: "consequuntur",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.AttestorInput{
            Description: "debitis",
            Etag: "voluptatum",
            Name: "et",
            UserOwnedDrydockNote: &shared.UserOwnedDrydockNoteInput{
                NoteReference: "ut",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "et",
                        Comment: "voluptate",
                        ID: "iste",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "vitae",
                            SignatureAlgorithm: "ECDSA_P521_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "dolores",
                        Comment: "illum",
                        ID: "debitis",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "vel",
                            SignatureAlgorithm: "EC_SIGN_P256_SHA256",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "dolore",
                        Comment: "id",
                        ID: "aspernatur",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "accusantium",
                            SignatureAlgorithm: "ECDSA_P256_SHA256",
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