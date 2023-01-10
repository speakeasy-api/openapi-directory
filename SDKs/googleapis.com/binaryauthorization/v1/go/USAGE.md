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
            Parent: "et",
        },
        QueryParams: operations.BinaryauthorizationProjectsAttestorsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "sint",
            Alt: "media",
            AttestorID: "cumque",
            Callback: "fuga",
            Fields: "est",
            Key: "voluptas",
            OauthToken: "ullam",
            PrettyPrint: true,
            QuotaUser: "sapiente",
            UploadType: "numquam",
            UploadProtocol: "est",
        },
        Request: &shared.AttestorInput{
            Description: "voluptatem",
            Etag: "vero",
            Name: "quaerat",
            UserOwnedGrafeasNote: &shared.UserOwnedGrafeasNoteInput{
                NoteReference: "quia",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "corporis",
                        Comment: "nesciunt",
                        ID: "at",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "enim",
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