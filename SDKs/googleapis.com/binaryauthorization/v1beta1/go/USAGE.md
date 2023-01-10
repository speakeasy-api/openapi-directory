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
            Parent: "molestias",
        },
        QueryParams: operations.BinaryauthorizationProjectsAttestorsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "quia",
            Alt: "media",
            AttestorID: "non",
            Callback: "porro",
            Fields: "ut",
            Key: "eum",
            OauthToken: "est",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "consequatur",
            UploadProtocol: "provident",
        },
        Request: &shared.AttestorInput{
            Description: "quia",
            Etag: "culpa",
            Name: "rerum",
            UserOwnedDrydockNote: &shared.UserOwnedDrydockNoteInput{
                NoteReference: "dolorum",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "perspiciatis",
                        Comment: "repudiandae",
                        ID: "non",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "veniam",
                            SignatureAlgorithm: "EC_SIGN_P256_SHA256",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "quia",
                        Comment: "non",
                        ID: "quisquam",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "aspernatur",
                            SignatureAlgorithm: "EC_SIGN_P521_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "atque",
                        Comment: "pariatur",
                        ID: "qui",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "ipsum",
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